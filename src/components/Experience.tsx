import { useEffect } from 'react';
import AOS from 'aos';
import { motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FiBriefcase, FiAward } from 'react-icons/fi';

const Experience = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const experiences = [
    {
      title: 'Mahasiswa Sistem Informasi',
      company: 'Universitas Komputer Indonesia (UNIKOM).',
      location: 'Bandung, Indonesia',
      period: '2023 - Sekarang',
      type: 'work',
      description: 'Mahasiswa Sistem Informasi dengan minat kuat pada pengembangan web, khususnya Frontend Development dan perancangan sistem informasi. Aktif mengerjakan proyek berbasis web untuk mengasah kemampuan teknis dan pemahaman sistem.',
      achievements: [
        'Fokus pada pengembangan web dan analisis sistem',
        'Mempelajari React, TypeScript, dan teknologi frontend modern',
        'Menerapkan konsep perkuliahan ke dalam proyek nyata',
      ],
    },
    {
      title: 'Proyek Pribadi',
      company: 'Aplikasi Pengingat Tugas',
      location: 'Bandung, Indonesia',
      period: '2024',
      type: 'work',
      description: 'Membangun aplikasi pengingat tugas sederhana untuk membantu pengguna mengelola aktivitas harian dengan tampilan yang ringan dan mudah digunakan.',
      achievements: [
        'Fitur tambah, hapus, dan tandai tugas selesai',
        'Antarmuka sederhana dan responsif',
        'Dibangun menggunakan Reactjs',
      ],
    },
    {
      title: 'Frontend Web Developer (Project-Based)',
      company: 'PT Catur Wangsa Indah',
      location: 'Bandung, Indonesia',
      period: '2025',
      type: 'work',
      description: 'Mengembangkan website internal perusahaan untuk mendukung kebutuhan operasional dengan antarmuka yang sederhana, rapi, dan mudah digunakan.',
      achievements: [
        'Mengembangkan sistem web internal perusahaan',
        'Menerapkan desain responsif dan user-friendly',
        'Mengelola data menggunakan PHP dan MySQL',
      ],
    },
    {
      title: 'Proyek Aplikasi Web',
      company: 'Sistem Pembukuan Pertanian',
      location: 'Pangalengan, Indonesia',
      period: '2025 - Sekarang',
      type: 'education',
      description: 'Merancang dan mengembangkan aplikasi web untuk pencatatan keuangan pertanian, meliputi pemasukan, pengeluaran, dan rekap data keuangan.',
      achievements: [
        'Sistem pencacatan keuangan sederhana',
        'Antarmuka bersih dan responsif',
        'Penerapan konsep Sistem Informasi',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-slate-800/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Perjalanan <span className="gradient-text">Saya</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto rounded-full" />
          <p className="text-slate-400 text-lg mt-4 max-w-2xl mx-auto">
          Perjalanan akademik dan pengalaman pengembangan proyek          </p>
        </motion.div>

        <VerticalTimeline lineColor="rgba(59, 130, 246, 0.3)">
          {experiences.map((exp, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 3px 0 rgba(59, 130, 246, 0.3)',
                color: '#fff',
              }}
              contentArrowStyle={{ borderRight: '7px solid rgba(255, 255, 255, 0.1)' }}
              date={exp.period}
              dateClassName="text-slate-300"
              iconStyle={{
                background: exp.type === 'work' ? 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)' : 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)',
                color: '#fff',
                boxShadow: '0 0 0 4px rgba(59, 130, 246, 0.2)',
              }}
              icon={exp.type === 'work' ? <FiBriefcase /> : <FiAward />}
            >
              <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
              <h4 className="text-blue-400 font-semibold mb-1">{exp.company}</h4>
              <p className="text-slate-400 text-sm mb-3">{exp.location}</p>
              <p className="text-slate-300 mb-3">{exp.description}</p>
              <ul className="space-y-1">
                {exp.achievements.map((achievement, achIndex) => (
                  <li key={achIndex} className="text-slate-400 text-sm flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;