import { useInView, useMotionValue, useSpring } from 'framer-motion';
import { useCallback, useEffect, useRef } from 'react';

type CountUpProps = {
  to: number;
  from?: number;
  direction?: 'up' | 'down';
  delay?: number;
  duration?: number;
  className?: string;
  startWhen?: boolean;
  separator?: string;
  onStart?: () => void;
  onEnd?: () => void;
};

export default function CountUp({
  to,
  from = 0,
  direction = 'up',
  delay = 0,
  duration = 2,
  className = '',
  startWhen = true,
  separator = '',
  onStart,
  onEnd
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === 'down' ? to : from);

  const springValue = useSpring(motionValue, {
    damping: 20 + 40 * (1 / duration),
    stiffness: 100 * (1 / duration)
  });

  const isInView = useInView(ref, { once: true });

  const getDecimalPlaces = (num: number) => {
    const str = num.toString();
    if (str.includes('.')) {
      const decimals = str.split('.')[1];
      if (parseInt(decimals) !== 0) return decimals.length;
    }
    return 0;
  };

  const maxDecimals = Math.max(
    getDecimalPlaces(from),
    getDecimalPlaces(to)
  );

  const formatValue = useCallback(
    (latest: number) => {
      const options = {
        useGrouping: !!separator,
        minimumFractionDigits: maxDecimals,
        maximumFractionDigits: maxDecimals
      };

      const formatted = Intl.NumberFormat('en-US', options).format(latest);
      return separator ? formatted.replace(/,/g, separator) : formatted;
    },
    [maxDecimals, separator]
  );

  useEffect(() => {
    if (ref.current) {
      ref.current.textContent = formatValue(
        direction === 'down' ? to : from
      );
    }
  }, [from, to, direction, formatValue]);

  useEffect(() => {
    if (isInView && startWhen) {
      onStart?.();

      const timeout = setTimeout(() => {
        motionValue.set(direction === 'down' ? from : to);
      }, delay * 1000);

      const endTimeout = setTimeout(() => {
        onEnd?.();
      }, (delay + duration) * 1000);

      return () => {
        clearTimeout(timeout);
        clearTimeout(endTimeout);
      };
    }
  }, [isInView, startWhen, motionValue, direction, from, to, delay, duration, onStart, onEnd]);

  useEffect(() => {
    return springValue.on('change', latest => {
      if (ref.current) {
        ref.current.textContent = formatValue(latest);
      }
    });
  }, [springValue, formatValue]);

  return <span ref={ref} className={className} />;
}
