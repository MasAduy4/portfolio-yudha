import { useEffect, useState } from 'react';
import AOS from 'aos';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';
import { FiMail, FiMapPin, FiPhone, FiGithub, FiLinkedin, FiTwitter, FiInstagram } from 'react-icons/fi';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      // Note: Replace these with your actual EmailJS credentials
      // You can get them from https://www.emailjs.com/
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
        },
        'YOUR_PUBLIC_KEY'
      );
      
      toast.success('Message sent successfully! I will get back to you soon.');
      reset();
    } catch (error) {
      toast.error('Failed to send message. Please try again or contact me directly via email.');
      console.error('EmailJS error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <FiMail />,
      title: 'Email',
      value: 'yudhapramudia29@gmail.com',
      link: 'mailto:your.email@example.com',
    },
    {
      icon: <FiPhone />,
      title: 'Phone',
      value: '+62 821 1622 3009',
      link: 'tel:+6281234567890',
    },
    {
      icon: <FiMapPin />,
      title: 'Lokasi',
      value: 'Bandung, Indonesia',
      link: '#',
    },
  ];

  const socialLinks = [
    { icon: <FiGithub />, name: 'GitHub', link: 'https://github.com', color: '#333' },
    { icon: <FiLinkedin />, name: 'LinkedIn', link: 'https://linkedin.com', color: '#0077B5' },
    { icon: <FiInstagram />, name: 'Instagram', link: 'https://twitter.com', color: '#1DA1F2' },
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Hubungi <span className="gradient-text">Saya</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto rounded-full" />
          <p className="text-slate-400 text-lg mt-4 max-w-2xl mx-auto">
          Punya ide proyek atau ingin berdiskusi? Mari kita wujudkan bersama.          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div data-aos="fade-right">
            <h3 className="text-2xl font-bold text-white mb-6">Informasi Kontak</h3>
            <p className="text-slate-400 mb-8">
            Jangan ragu untuk menghubungi saya melalui salah satu kanal berikut. Saya terbuka untuk diskusi proyek, kolaborasi, maupun peluang magang dan kerja sama.
            </p>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 glass-strong p-4 rounded-lg hover:glow transition-all duration-300"
                >
                  <div className="text-3xl text-blue-400">{info.icon}</div>
                  <div>
                    <h4 className="text-white font-semibold">{info.title}</h4>
                    <p className="text-slate-400">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div>
              <h4 className="text-xl font-bold text-white mb-4">Ikuti Saya</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="glass-strong p-4 rounded-lg text-2xl text-slate-400 hover:text-white transition-colors duration-300"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div data-aos="fade-left">
            <form onSubmit={handleSubmit(onSubmit)} className="glass-strong p-8 rounded-xl">
              <div className="mb-6">
                <label htmlFor="name" className="block text-white font-semibold mb-2">
                  Nama *
                </label>
                <input
                  type="text"
                  id="name"
                  {...register('name', { required: 'Name is required' })}
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Aduy Cobra"
                />
                {errors.name && (
                  <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-white font-semibold mb-2">
                  Gmail *
                </label>
                <input
                  type="email"
                  id="email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    },
                  })}
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="duy@gmail.com"
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-white font-semibold mb-2">
                  Subjek *
                </label>
                <input
                  type="text"
                  id="subject"
                  {...register('subject', { required: 'Subject is required' })}
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Kerja Sama Proyek / Diskusi / Magang"
                />
                {errors.subject && (
                  <p className="text-red-400 text-sm mt-1">{errors.subject.message}</p>
                )}
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-white font-semibold mb-2">
                  Pesan *
                </label>
                <textarea
                  id="message"
                  rows={5}
                  {...register('message', { required: 'Message is required' })}
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  placeholder="Ceritakan kebutuhan atau ide proyek Anda..."
                />
                {errors.message && (
                  <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn-gradient py-4 rounded-lg text-white font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;