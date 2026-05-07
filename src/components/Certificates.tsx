import { useEffect, useState } from 'react';
import AOS from 'aos';
import { motion } from 'framer-motion';
import { FiAward, FiExternalLink, FiCalendar, FiCheckCircle } from 'react-icons/fi';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  image: string;
  description: string;
  skills: string[];
  verifyUrl?: string;
}

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  // Sample certificates data - Replace with your actual certificates
  const certificates = [
    {
      id: 1,
      title: 'IBM Granite Models for Software Development',
      issuer: 'IBM SkillsBuild',
      date: 'September 2025',
      credentialId: null,
      image: '/src/assets/ibm-granite.jpeg',
      description:
        'Sertifikasi dari IBM SkillsBuild yang membahas penggunaan model IBM Granite dalam pengembangan perangkat lunak, termasuk penerapan AI untuk mendukung proses software development.',
      skills: ['Software Development', 'IBM Granite', 'AI Tools'],
      verifyUrl: null,
    },
    {
      id: 2,
      title: 'Use Generative AI for Software Development',
      issuer: 'IBM SkillsBuild',
      date: 'September 2025',
      credentialId: null,
      image: '/src/assets/ibm-generative-ai.jpeg',
      description:
        'Pelatihan mengenai pemanfaatan Generative AI dalam pengembangan perangkat lunak untuk meningkatkan produktivitas, kualitas kode, dan proses pembelajaran.',
      skills: ['Generative AI', 'Software Development', 'AI for Learning'],
      verifyUrl: null,
    },
    {
      id: 3,
      title: 'RevoU Coding Camp Software Engineering',
      issuer: 'RevoU',
      date: 'September 2025',
      credentialId: null,
      image: '/src/assets/revou-software-engineering.jpeg',
      description:
        'Program coding camp yang membahas praktik dasar software engineering, problem solving, dan pengenalan workflow pengembangan perangkat lunak.',
      skills: ['Software Engineering', 'Problem Solving', 'Best Practices'],
      verifyUrl: null,
    },
    {
      id: 4,
      title: 'Belajar Dasar Pemrograman Web',
      issuer: 'Dicoding Indonesia',
      date: 'Agustus 2025',
      credentialId: 'GRX5JK8DYX0M',
      image: '/src/assets/dicoding-web.jpeg',
      description:
        'Kelas dasar pemrograman web yang membahas HTML, CSS, dan JavaScript sebagai fondasi pengembangan website modern.',
      skills: ['HTML', 'CSS', 'JavaScript', 'Web Development'],
      verifyUrl: 'https://www.dicoding.com/certificates/GRX5JK8DYX0M',
    },
  ];  

  return (
    <section id="certificates" className="py-20 relative overflow-hidden bg-slate-900/50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.3) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Sertifikat <span className="gradient-text">Saya</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto rounded-full" />
          <p className="text-slate-400 mt-4 text-lg">
            Sertifikat Profesional
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="glass-strong rounded-xl overflow-hidden group cursor-pointer"
              onClick={() => setSelectedCert(cert)}
            >
              {/* Certificate Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                
                {/* Award Icon */}
                <div className="absolute top-4 right-4 bg-blue-500/20 backdrop-blur-sm rounded-full p-3 border border-blue-400/30">
                  <FiAward className="text-2xl text-blue-400" />
                </div>
              </div>

              {/* Certificate Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {cert.title}
                </h3>
                
                <div className="flex items-center gap-2 text-slate-400 mb-3">
                  <FiCheckCircle className="text-green-400" />
                  <span className="font-medium">{cert.issuer}</span>
                </div>

                <div className="flex items-center gap-2 text-slate-500 text-sm mb-4">
                  <FiCalendar />
                  <span>{cert.date}</span>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-medium bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* View Details */}
                <div className="flex items-center gap-2 text-blue-400 text-sm font-medium group-hover:gap-3 transition-all">
                  <span>View Details</span>
                  <FiExternalLink className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certificate Detail Modal */}
        <Dialog open={!!selectedCert} onOpenChange={() => setSelectedCert(null)}>
          <DialogContent className="max-w-3xl bg-slate-900 border-slate-700">
            {selectedCert && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-white flex items-center gap-3">
                    <FiAward className="text-blue-400" />
                    {selectedCert.title}
                  </DialogTitle>
                  <DialogDescription className="text-slate-400">
                    Issued by {selectedCert.issuer} • {selectedCert.date}
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-6">
                  {/* Certificate Image */}
                  <div className="rounded-lg overflow-hidden">
                    <img
                      src={selectedCert.image}
                      alt={selectedCert.title}
                      className="w-full h-auto"
                    />
                  </div>

                  {/* Description */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Description</h4>
                    <p className="text-slate-400 leading-relaxed">{selectedCert.description}</p>
                  </div>

                  {/* Skills */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Skills Covered</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedCert.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 bg-blue-500/10 text-blue-400 rounded-lg border border-blue-500/20 font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Credential Info */}
                  <div className="glass-strong rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-slate-400 text-sm mb-1">Credential ID</p>
                        <p className="text-white font-mono">{selectedCert.credentialId}</p>
                      </div>
                      {selectedCert.verifyUrl && (
                        <a
                          href={selectedCert.verifyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-gradient px-6 py-3 rounded-lg text-white font-medium flex items-center gap-2 hover:shadow-lg transition-all"
                        >
                          Verify Certificate
                          <FiExternalLink />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Certificates;