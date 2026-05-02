import { motion } from 'framer-motion';
import { Calendar, CheckCircle, Camera, Edit, Film } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PhotoVideoPage() {
  const inclusions = [
    'Initial consultation and vision planning',
    'Creative direction and concept development',
    'Pre-wedding shoot planning and execution',
    'Wedding day photography & videography coverage',
    'High-end cinematic filming techniques',
    'Professional photo editing and retouching',
    'Cinematic video editing and highlight films',
    'Timeline coordination for seamless coverage',
    'Assistance with styling and shot planning',
    'Dedicated team for smooth execution',
    'Makeup Artist (Optional)',
    'Props (Optional)',
  ];

  return (
    <div className="bg-white pt-[117px]">
      {/* Hero Section */}
      <section className="py-16 md:py-20 lg:py-24 px-4 md:px-8 bg-[#FAFAFA]">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="mb-4 uppercase tracking-[3px] text-[11px] text-[#9A9A9A] font-sans">
              Cinematic Storytelling
            </p>
            <h1 className="font-serif mb-6 text-4xl sm:text-5xl md:text-6xl text-[#C9A7A0] font-light">
              Photography & Videography
            </h1>
            <p className="text-base sm:text-lg leading-relaxed text-[#6F6F6F] max-w-2xl mx-auto font-light">
              At Heavenly Weds, we bring together stunning photography, cinematic videography, and expert editing services, supported by a dedicated team and thoughtfully planned wedding solutions—creating a truly flawless experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="mx-auto max-w-7xl grid gap-12 lg:gap-16 grid-cols-1 lg:grid-cols-2 items-start">
          
          {/* Left Column - Image - Fixed for proper fitting */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="relative overflow-hidden rounded-sm aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5] w-full bg-[#F2E8E6]">
              {/* NOTE: Replace the photo attached through mail - update src prop with new image URL from email */}
              <img 
                src="/fwdservicesphotosnew/Photography & Videography - photo.png" 
                alt="Wedding Photography" 
                className="w-full h-full object-contain transition-transform duration-700 hover:scale-105"
                style={{ objectPosition: 'center' }}
              />
            </div>
          </motion.div>

          {/* Right Column - What's Included */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="font-serif text-3xl md:text-4xl mb-8 text-[#6F6F6F] font-light border-b border-[#ECECEC] pb-6">
              What's Included
            </h2>
            <ul className="space-y-5">
              {inclusions.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <CheckCircle className="h-5 w-5 text-[#C9A7A0] flex-shrink-0 mt-0.5" />
                  <span className="text-base text-[#6F6F6F] font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-12 pt-8 border-t border-[#ECECEC]">
              <Link to="/contact" className="inline-flex items-center gap-2 uppercase tracking-[2px] transition-all duration-300 px-8 py-4 text-xs bg-[#C9A7A0] text-white hover:bg-[#B5968F] font-sans rounded-sm">
                <Calendar className="h-4 w-4" />
                Inquire Now
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-[#FAFAFA]">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl mb-4 text-[#C9A7A0] font-light">
              Our Creative Philosophy
            </h2>
            <p className="text-[#6F6F6F] font-light leading-relaxed max-w-2xl mx-auto">
              We believe every love story is unique, and our mission is to tell your story in the most elegant and memorable way.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center p-6">
              <Camera className="h-12 w-12 mx-auto mb-4" style={{ color: '#C9A7A0' }} />
              <h3 className="font-serif text-xl mb-2 text-[#6F6F6F]">Expert Photography</h3>
              <p className="text-sm text-[#9A9A9A]">Capturing every smile, every glance, and every heartfelt moment with precision and artistry.</p>
            </div>
            <div className="text-center p-6">
              <Film className="h-12 w-12 mx-auto mb-4" style={{ color: '#C9A7A0' }} />
              <h3 className="font-serif text-xl mb-2 text-[#6F6F6F]">Cinematic Films</h3>
              <p className="text-sm text-[#9A9A9A]">Transforming your special day into a timeless cinematic story you'll cherish forever.</p>
            </div>
            <div className="text-center p-6">
              <Edit className="h-12 w-12 mx-auto mb-4" style={{ color: '#C9A7A0' }} />
              <h3 className="font-serif text-xl mb-2 text-[#6F6F6F]">Creative Editing</h3>
              <p className="text-sm text-[#9A9A9A]">Professional editing that brings out the beauty and emotion in every frame.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}