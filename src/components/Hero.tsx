import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Typed from 'typed.js';
import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi';
import profileImg from '../assets/FOTO FORMAL YUDHA.jpeg';

const Hero = () => {
  useEffect(() => {
    const typed = new Typed('.typed-text', {
      strings: ['Frontend Developer', 'UI/UX Enthusiast', 'React Specialist', 'Problem Solver'],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const socialLinks = [
    { icon: <FiGithub />, href: 'https://github.com/MasAduy4', label: 'GitHub' },
    { icon: <FiLinkedin />, href: 'https://linkedin.com/in/yudha', label: 'LinkedIn' },
    { icon: <FiMail />, href: 'mailto:your.email@example.com', label: 'Email' },
  ];

  return (
    <section id="home" className="min-h-screen relative flex items-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-violet-900/20" />
      
      {/* Animated Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              x: [null, Math.random() * window.innerWidth],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
                Hai, Saya <span className="gradient-text">Yudha Pramudia</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-3xl text-slate-300 h-12"
            >
              <span className="typed-text"></span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-slate-400 leading-relaxed max-w-xl"
            >
              Mahasiswa Sistem Informasi yang tertarik pada pengembangan web dan teknologi digital.
              Saya fokus membangun antarmuka yang sederhana, fungsional, dan mudah digunakan.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                className="btn-gradient px-8 py-4 rounded-lg text-white font-semibold flex items-center gap-2 hover:shadow-2xl transition-all"
              >
                Hubungi Saya
                <FiMail />
              </a>
              <a
                href="/src/assets/CV Yudha Pramudia intern.pdf';"
                download
                className="glass-strong px-8 py-4 rounded-lg text-white font-semibold flex items-center gap-2 hover:glow transition-all border border-white/10"
              >
                Download CV
                <FiDownload />
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex gap-4 pt-4"
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="glass-strong w-12 h-12 rounded-full flex items-center justify-center text-white text-xl hover:text-blue-400 transition-colors border border-white/10"
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full blur-3xl opacity-30 animate-pulse-glow" />
              
              {/* Image Container */}
              <div className="relative glass-strong rounded-full p-4 border-4 border-white/10">
                <div className="relative rounded-full overflow-hidden aspect-square">
                <img
  src={profileImg}
  alt="Profile"
  className="w-full h-full object-cover"
/>
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                </div>
              </div>

              {/* Decorative Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-24 h-24 border-4 border-blue-500/30 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-4 -left-4 w-32 h-32 border-4 border-violet-500/30 rounded-full"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-3 bg-white/50 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;