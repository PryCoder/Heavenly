import { motion } from 'framer-motion';
import { Calendar, CheckCircle, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FullPlanningPage() {
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
              Complete End-to-End Service
            </p>
            <h1 className="font-serif mb-6 text-4xl sm:text-5xl md:text-6xl text-[#C9A7A0] font-light">
              Full Wedding Planning
            </h1>
            <p className="text-base sm:text-lg leading-relaxed text-[#6F6F6F] max-w-2xl mx-auto font-light">
              Our comprehensive service covers every detail, ensuring a seamless and unforgettable celebration.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="mx-auto max-w-7xl grid gap-12 lg:gap-16 grid-cols-1 lg:grid-cols-2 items-start">
          
          {/* Left Column - Image & Ideal For */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="mb-8 overflow-hidden rounded-sm aspect-[4/3] w-full">
              <img 
                src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80" 
                alt="Full Wedding Planning" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="bg-[#F2E8E6] p-8 md:p-10 rounded-sm">
              <h3 className="font-serif text-2xl mb-3 text-[#C9A7A0]">Ideal For</h3>
              <p className="text-[#6F6F6F] font-light leading-relaxed">
                Couples who want to be deeply involved in selecting elements of their day but need a professional sounding board, 
                vendor curation, and logistical oversight.
              </p>
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
              Let Us Make Your Wedding Heavenly
            </h2>
            <p className="text-[#6F6F6F] font-light leading-relaxed">
              With creativity, precision, and attention to detail, we transform real emotions and unforgettable memories 
              into timeless photographs and cinematic films.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}