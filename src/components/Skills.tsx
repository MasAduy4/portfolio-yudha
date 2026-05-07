import CountUp from './CountUp';
import { useEffect } from 'react';
import AOS from 'aos';
import { motion } from 'framer-motion';
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiGit,
  SiFigma,
  SiNextdotjs,
  SiNodedotjs,
} from 'react-icons/si';

const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const skills = [
    { name: 'React', level: 90, icon: <SiReact />, color: '#61DAFB' },
    { name: 'TypeScript', level: 85, icon: <SiTypescript />, color: '#3178C6' },
    { name: 'JavaScript', level: 90, icon: <SiJavascript />, color: '#F7DF1E' },
    { name: 'Next.js', level: 80, icon: <SiNextdotjs />, color: '#FFFFFF' },
    { name: 'Tailwind CSS', level: 95, icon: <SiTailwindcss />, color: '#06B6D4' },
    { name: 'HTML5', level: 95, icon: <SiHtml5 />, color: '#E34F26' },
    { name: 'CSS3', level: 90, icon: <SiCss3 />, color: '#1572B6' },
    { name: 'Node.js', level: 75, icon: <SiNodedotjs />, color: '#339933' },
    { name: 'Git', level: 85, icon: <SiGit />, color: '#F05032' },
    { name: 'Figma', level: 80, icon: <SiFigma />, color: '#F24E1E' },
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden bg-slate-900/50">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Keahlian <span className="gradient-text">Saya</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto rounded-full" />
          <p className="text-slate-400 mt-4 text-lg">
          Teknologi dan alat yang saya gunakan
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              data-aos="zoom-in"
              data-aos-delay={index * 50}
              className="skill-card glass-strong rounded-xl p-6 text-center relative overflow-hidden group"
            >
              {/* Hover Glow Effect */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                style={{
                  background: `radial-gradient(circle at center, ${skill.color}20, transparent)`,
                }}
              />

              {/* Icon */}
              <div
                className="text-6xl mb-4 mx-auto w-fit relative z-10 transition-transform duration-300 group-hover:scale-110"
                style={{ color: skill.color }}
              >
                {skill.icon}
              </div>

              {/* Skill Name */}
              <h3 className="text-white font-semibold text-lg mb-3 relative z-10">
                {skill.name}
              </h3>

              {/* Progress Bar */}
              <div className="relative z-10">
                <div className="w-full bg-slate-700/50 rounded-full h-2 mb-2 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 1, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    className="h-full rounded-full"
                    style={{
                      background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`,
                    }}
                  />
                </div>
                <span className="text-slate-400 text-sm font-medium"><CountUp to={skill.level}/>%</span>
              </div>

              {/* Animated Border */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div
                  className="absolute inset-0 rounded-xl"
                  style={{
                    background: `linear-gradient(135deg, ${skill.color}40, transparent)`,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-slate-400 text-lg">
          Selalu belajar dan mengeksplorasi teknologi baru untuk tetap terdepan dalam dunia pengembangan web yang terus berkembang.          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;