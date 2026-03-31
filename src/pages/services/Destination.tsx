import { motion } from 'framer-motion';
import { Calendar, CheckCircle, Plane, MapPin, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DestinationWeddingPage() {
  const inclusions = [
    'Destination consultation and location scouting',
    'Venue selection and booking assistance',
    'Travel and accommodation coordination',
    'Vendor sourcing at destination',
    'Budget planning and management',
    'Wedding design and styling concept',
    'Guest management and itinerary planning',
    'Logistics and timeline coordination',
    'On-site coordination with full team',
    'Photography & videography coverage',
    'Local permits and requirements handling',
    'Post-wedding wrap-up services',
    'Makeup Artist',
  ];

  return (
    <div className="bg-white pt-[117px]">
      {/* Hero Section */}
      <section className="py-16 md:py-20 lg:py-24 px-4 md:px-8 bg-[#FAFAFA]">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="mb-4 uppercase tracking-[3px] text-[11px] text-[#9A9A9A] font-sans">
              Worldwide Celebrations
            </p>
            <h1 className="font-serif mb-6 text-4xl sm:text-5xl md:text-6xl text-[#C9A7A0] font-light">
              Destination Wedding Services
            </h1>
            <p className="text-base sm:text-lg leading-relaxed text-[#6F6F6F] max-w-2xl mx-auto font-light">
              We curate unforgettable destination weddings, ensuring every detail is flawlessly executed no matter where your celebration takes you.
              Based in Mumbai & London, capturing love stories worldwide.
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
                src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&q=80" 
                alt="Destination Wedding" 
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

      {/* Popular Destinations */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-[#F2E8E6]">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <Globe className="h-12 w-12 mx-auto mb-4" style={{ color: '#C9A7A0' }} />
            <h2 className="font-serif text-3xl md:text-4xl mb-4 text-[#C9A7A0] font-light">
              Popular Destinations
            </h2>
            <p className="text-[#6F6F6F] font-light leading-relaxed max-w-2xl mx-auto">
              From romantic European villas to exotic beachfronts, we bring your dream destination to life.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {['Italy', 'France', 'India', 'Greece', 'Thailand', 'Maldives'].map((dest, idx) => (
              <div key={idx} className="flex items-center gap-3 p-4 bg-white rounded-sm" style={{ border: '1px solid #ECECEC' }}>
                <MapPin className="h-5 w-5 text-[#C9A7A0]" />
                <span className="text-[#6F6F6F] font-light">{dest}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}