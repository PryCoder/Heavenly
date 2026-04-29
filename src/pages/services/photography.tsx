import { motion } from 'framer-motion';
import { Calendar, CheckCircle, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CompleteWeddingPlanningPage() {
  const inclusions = [
    'Three planning consultations',
    'Ticket reservations to accommodations',
    'Arrangements for pickup & drop facilities',
    'Complete vendor sourcing and management',
    'Budget creation and tracking',
    'Venue selection and contract negotiation',
    'Design concept to floral decor and styling',
    'Timeline and logistics coordination',
    'Guest management and RSVP tracking',
    'Rehearsal coordination',
    'Full day-of coordination with our expert team',
    'Professional photography and videography coverage',
    'Creative editing for timeless photos and cinematic films',
    'Post-wedding wrap-up services',
  ];

  return (
    <div className="bg-white pt-[117px]">
      {/* Hero Section */}
      <section className="py-16 md:py-20 lg:py-24 px-4 md:px-8 bg-[#FAFAFA]">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="mb-4 uppercase tracking-[3px] text-[11px] text-[#9A9A9A] font-sans">
              Complete End-to-End Services
            </p>
            <h1 className="font-serif mb-6 text-4xl sm:text-5xl md:text-6xl text-[#C9A7A0] font-light">
              Complete Wedding Planning
            </h1>
            <p className="text-base sm:text-lg leading-relaxed text-[#6F6F6F] max-w-2xl mx-auto font-light">
              Planning a destination wedding? Let Heavenly Weds take care of every detail with our complete wedding services, ensuring a beautifully curated and flawlessly executed celebration.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 px-4 md:8">
        <div className="mx-auto max-w-7xl grid gap-12 lg:gap-16 grid-cols-1 lg:grid-cols-2 items-start">
          
          {/* Left Column - Image */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="mb-8 overflow-hidden rounded-sm aspect-[4/3] w-full">
              {/* NOTE: Replace the photo attached through mail - update src prop with new image URL from email */}
              <img 
                src="/fwdservicesphotosnew/complete Wedding Planning - photo.png" 
                alt="Complete Wedding Planning" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            {/* Ideal For section removed as requested */}
          </motion.div>

          {/* Right Column - What's Included */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="font-serif text-3xl md:text-4xl mb-8 text-[#6F6F6F] font-light border-b border-[#ECECEC] pb-6">
              Complete Wedding Planning
            </h2>
            <p className="text-[#6F6F6F] font-light leading-relaxed mb-8">
              A complete-service planning experience that handles every detail while keeping you involved in the creative decisions. With expert guidance, curated vendors, and seamless coordination, we ensure your wedding is stress-free, beautifully planned, and flawlessly executed.
            </p>
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

      {/* Additional Info */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-[#F2E8E6]">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles className="h-12 w-12 mx-auto mb-6" style={{ color: '#C9A7A0' }} />
            <h2 className="font-serif text-3xl md:text-4xl mb-4 text-[#C9A7A0] font-light">
              Let's Make Your Wedding Heavenly
            </h2>
            <p className="text-[#6F6F6F] font-light leading-relaxed">
              With creativity, precision, and a refined eye for detail, we transform genuine emotions and unforgettable moments into timeless photographs and cinematic films that last forever.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}