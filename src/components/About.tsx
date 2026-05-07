import CountUp from './CountUp';
import { useEffect } from 'react';
import AOS from 'aos';
import { motion } from 'framer-motion';
import { FiAward, FiCode, FiCoffee, FiUsers, FiDownload } from 'react-icons/fi';
import ElectricBorder from './ElectricBorder';
import about from '../assets/fotome.jpeg';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const stats = [
    { icon: <FiCode />, value: 3, suffix: '+', label: 'Tahun Pengalaman' },
    { icon: <FiAward />, value: 20, suffix: '+', label: 'Project Selesai' },
    { icon: <FiCoffee />, value: 1000, suffix: '+', label: 'Secangkir Kopi' },
    { icon: <FiUsers />, value: 30, suffix: '+', label: 'Happy Klien' },
  ];  

  const highlights = [
    'Menguasai React, TypeScript, dan teknologi web modern',
    'Terbiasa menggunakan Tailwind CSS untuk UI yang konsisten dan responsif',
    'Fokus pada user experience (UX) dan kemudahan akses',
    'Pembelajar aktif dan terbuka terhadap teknologi baru',
  ];

  return (
    <section id="about" className="min-h-screen py-20 relative overflow-hidden flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-blue-900/10 to-slate-900" />
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'url(https://mgx-backend-cdn.metadl.com/generate/images/812306/2026-01-17/c88f3e27-2262-4202-ab67-28d5094c04c2.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        {/* Hero-style Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Tentang <span className="gradient-text">Saya</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-1.5 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto rounded-full mb-6"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl text-slate-400 max-w-3xl mx-auto"
          >
Membangun pengalaman digital dengan ketelitian dan semangat belajar
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Side - Image with ElectricBorder */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
            data-aos="fade-right"
          >
            <ElectricBorder
              color="#7df9ff"
              speed={1}
              chaos={0.5}
              thickness={2}
              borderRadius={24}
              style={{ maxWidth: '500px', width: '100%' }}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                {/* Image Container */}
                <div className="relative glass-strong rounded-3xl p-4 border-2 border-white/10">
                <img src={about} alt="Profile" className="w-full h-full object-cover"/>
                  {/* Gradient Overlay */}
                  <div className="absolute inset-4 rounded-2xl bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                </div>

                {/* Floating Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, type: "spring" }}
                  viewport={{ once: true }}
                  className="absolute -bottom-6 -right-6 glass-strong rounded-2xl p-6 border border-white/10"
                >
                  <div className="text-center">
                    <div className="text-4xl font-bold gradient-text mb-1">3+</div>
                    <div className="text-sm text-slate-400">Tahun Pengalaman</div>
                  </div>
                </motion.div>
              </motion.div>
            </ElectricBorder>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
            data-aos="fade-left"
          >
            <div>
              <h3 className="text-4xl font-bold text-white mb-6 leading-tight">
                Frontend Developer &<br />
                <span className="gradient-text">UI/UX Enthusiast</span>
              </h3>
              <p className="text-slate-400 text-lg leading-relaxed mb-4">
              Halo! Saya Yudha Pramudia, mahasiswa Sistem Informasi Universitas Komputer Indonesia (UNIKOM) 
              yang memiliki ketertarikan kuat pada pengembangan web, khususnya Frontend Development.
              </p>
              <p className="text-slate-400 text-lg leading-relaxed">
              Saya fokus membangun antarmuka web yang bersih, responsif, dan mudah digunakan, dengan memanfaatkan teknologi modern seperti React, TypeScript, dan Tailwind CSS. Saya senang mengubah ide dan kebutuhan sistem menjadi tampilan yang sederhana namun fungsional.
              </p>
            </div>

            {/* Highlights */}
            <div className="space-y-3">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-1 w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 flex-shrink-0" />
                  <p className="text-slate-300">{highlight}</p>
                </motion.div>
              ))}
            </div>

            {/* Personal Info Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-strong rounded-xl p-4 border border-white/10">
                <div className="text-sm text-slate-400 mb-1">Location</div>
                <div className="text-white font-semibold">Bandung, Indonesia</div>
              </div>
              <div className="glass-strong rounded-xl p-4 border border-white/10">
                <div className="text-sm text-slate-400 mb-1">Email</div>
                <div className="text-white font-semibold text-sm">yudhapramudia29@gmail.com</div>
              </div>
            </div>

            {/* CTA Button */}
            <motion.a
              href="/CV Yudha Pramudia intern.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 btn-gradient px-8 py-4 rounded-xl text-white font-semibold hover:shadow-2xl transition-all"
            >
              Download Resume
              <FiDownload />
            </motion.a>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          data-aos="fade-up"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-strong rounded-2xl p-8 text-center hover:glow transition-all duration-300 border border-white/10"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="text-5xl text-blue-400 mb-4 flex justify-center"
              >
                {stat.icon}
              </motion.div>
              <div className="text-4xl font-bold gradient-text mb-2">
              <CountUp
               from={0}
               to={stat.value}
               duration={1.5}
              />
                 {stat.suffix}
              </div>
              <div className="text-slate-400 text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;