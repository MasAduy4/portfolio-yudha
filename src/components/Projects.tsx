import { useEffect, useState } from 'react';
import AOS from 'aos';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { FiExternalLink, FiGithub, FiX } from 'react-icons/fi';
import cwiImg from '../assets/cwi.png';
import optimusImg from '../assets/optimus.png';
import todolistImg from '../assets/todolist.png';



const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const projects = [
    {
      title: 'Website Internal Perusahaan',
      description: 'Website internal yang dikembangkan untuk mendukung kebutuhan operasional PT Catur Wangsa Indah dengan tampilan sederhana, rapi, dan mudah digunakan oleh pengguna internal..',
      image: cwiImg,
      tags: ['React', 'TypeScript', 'Chart.js', 'Tailwind CSS'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      features: [
      'Website internal untuk kebutuhan operasional',
      'Manajemen data berbasis database',
      'Tampilan sederhana dan mudah digunakan',
      'Akses terbatas untuk user internal',
      'Struktur sistem disesuaikan kebutuhan perusahaan',
      ],
    },
    {
      title: 'Sistem Pembukuan Pertanian',
      description: 'Aplikasi berbasis web untuk pencatatan keuangan pertanian, mencakup pemasukan, pengeluaran, dan laporan sederhana. Proyek ini masih dalam tahap pengembangan dan belum dipublikasikan.',
      image: optimusImg,
      tags: ['Next.js', 'Redux', 'Stripe', 'Tailwind CSS'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      features: [
      'Pencatatan pemasukan dan pengeluaran',
      'Rekap data keuangan sederhana',
      'Antarmuka responsif dan clean',
      'Struktur sistem sesuai konsep Sistem Informasi',
      'Masih dalam tahap pengembangan',
      ],
    },
    {
      title: 'Aplikasi Pengingat Tugas',
      description: 'Aplikasi pengingat tugas sederhana untuk membantu pengguna mengelola aktivitas harian dengan antarmuka ringan dan mudah digunakan.',
      image:todolistImg,
      tags: ['React Native', 'TypeScript', 'Framer Motion', 'Styled Components'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      features: [
        'Smooth animations',
        'Intuitive navigation',
        'Dark mode support',
        'Offline functionality',
        'Push notifications',
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Proyek <span className="gradient-text">Unggulan</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto rounded-full" />
          <p className="text-slate-400 text-lg mt-4 max-w-2xl mx-auto">
          Beberapa karya terbaru saya yang menampilkan keterampilan dan pengalaman saya.          </p>
        </motion.div>

        <div data-aos="fade-up">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{ clickable: true }}
            navigation={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="pb-12"
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index} className="!w-[350px]">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="project-card glass-strong rounded-xl overflow-hidden cursor-pointer"
                  onClick={() => setSelectedProject(index)}
                >
                  <div className="relative overflow-hidden group">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white font-semibold text-lg">View Details</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                    <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FiGithub /> Code
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FiExternalLink /> Demo
                      </a>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="glass-strong rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 text-white text-2xl hover:text-blue-400 transition-colors z-10"
                  >
                    <FiX />
                  </button>
                  <img
                    src={projects[selectedProject].image}
                    alt={projects[selectedProject].title}
                    className="w-full h-80 object-cover rounded-t-2xl"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-3xl font-bold text-white mb-4">
                    {projects[selectedProject].title}
                  </h3>
                  <p className="text-slate-300 text-lg mb-6">
                    {projects[selectedProject].description}
                  </p>
                  <div className="mb-6">
                    <h4 className="text-xl font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {projects[selectedProject].features.map((feature, index) => (
                        <li key={index} className="text-slate-400 flex items-center gap-2">
                          <span className="w-2 h-2 bg-blue-500 rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {projects[selectedProject].tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-blue-500/10 text-blue-400 rounded-lg text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={projects[selectedProject].github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 btn-gradient py-3 rounded-lg text-white font-semibold text-center flex items-center justify-center gap-2"
                    >
                      <FiGithub /> View Code
                    </a>
                    <a
                      href={projects[selectedProject].demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 glass py-3 rounded-lg text-white font-semibold text-center flex items-center justify-center gap-2 hover:glass-strong transition-all"
                    >
                      <FiExternalLink /> Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;