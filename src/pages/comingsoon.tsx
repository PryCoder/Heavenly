import { motion } from 'framer-motion';
import { MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ComingSoon() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4" style={{ paddingTop: '117px' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto"
      >
        <div className="inline-flex items-center justify-center w-20 h-20 bg-[#F2E8E6] rounded-full mb-6">
          <MapPin className="h-10 w-10 text-[#C9A7A0]" />
        </div>
        <h1 className="font-serif text-4xl md:text-5xl text-[#C9A7A0] mb-4 font-light">
          Coming Soon
        </h1>
        <div className="flex items-center justify-center gap-2 text-[#6F6F6F] mb-6">
          <Clock className="h-5 w-5" />
          <span>Expected in 4 weeks</span>
        </div>
        <p className="text-[#6F6F6F] mb-8 leading-relaxed">
          We're currently curating the most beautiful locations for your dream wedding. 
          Our location guides will be available soon with detailed information, venue options, 
          and expert tips.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="px-8 py-3 bg-[#C9A7A0] text-white hover:bg-[#B89690] transition-colors"
          >
            Back to Home
          </Link>
          <Link
            to="/contact"
            className="px-8 py-3 border border-[#C9A7A0] text-[#C9A7A0] hover:bg-[#F2E8E6] transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </motion.div>
    </div>
  );
}