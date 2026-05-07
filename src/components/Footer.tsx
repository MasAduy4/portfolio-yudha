import { FiHeart } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-slate-900/50 border-t border-slate-800 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-center md:text-left">
            © {new Date().getFullYear()} Yudha Pramudia. All rights reserved.
          </p>
          <p className="text-slate-400 flex items-center gap-2">
            Made with <FiHeart className="text-red-500" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;