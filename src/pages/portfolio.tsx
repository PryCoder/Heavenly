import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Users, Calendar, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

interface Wedding {
  id: string;
  couple: string;
  location: string;
  date: string;
  guests: number;
  image: string;
  category: string;
  description: string;
}

interface Testimonial {
  id: string;
  name: string;
  content: string;
  type: string;
}

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Weddings' },
    { id: 'pre-wedding', label: 'Pre-Wedding' },
    { id: 'wedding', label: 'Wedding Day' },
    { id: 'maternity', label: 'Maternity' },
    { id: 'destination', label: 'Destination' },
    { id: 'intimate', label: 'Intimate' },
  ];

  const weddings: Wedding[] = [
    {
      id: '1',
      couple: 'Riya & Karan',
      location: 'Mumbai, India',
      date: 'February 2025',
      guests: 180,
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1000',
      category: 'wedding',
      description: 'A beautifully captured wedding celebration with every moment perfectly preserved.',
    },
    {
      id: '2',
      couple: 'Geeta & Yash',
      location: 'London, UK',
      date: 'January 2025',
      guests: 12,
      image: 'https://images.unsplash.com/photo-1545917992-dea2d782ef46?w=1000',
      category: 'maternity',
      description: 'A beautiful maternity shoot capturing the joy and anticipation of new beginnings.',
    },
    {
      id: '3',
      couple: 'Roy & Rachel',
      location: 'Goa, India',
      date: 'December 2024',
      guests: 220,
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1000',
      category: 'wedding',
      description: 'A magical beachfront wedding with stunning decor and seamless execution.',
    },
    {
      id: '4',
      couple: 'Nishita & Raj',
      location: 'Udaipur, India',
      date: 'November 2024',
      guests: 8,
      image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1000',
      category: 'pre-wedding',
      description: 'A romantic pre-wedding photoshoot capturing beautiful moments in the City of Lakes.',
    },
    {
      id: '5',
      couple: 'Priya & Arjun',
      location: 'Jaipur, India',
      date: 'October 2024',
      guests: 350,
      image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1000',
      category: 'wedding',
      description: 'A grand palace wedding celebrating rich cultural traditions with cinematic brilliance.',
    },
    {
      id: '6',
      couple: 'Anjali & Vikram',
      location: 'Lake Como, Italy',
      date: 'September 2024',
      guests: 95,
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1000',
      category: 'destination',
      description: 'A breathtaking destination wedding with romantic lakeside views and elegant details.',
    },
    {
      id: '7',
      couple: 'Sneha & Rohan',
      location: 'Kerala, India',
      date: 'August 2024',
      guests: 75,
      image: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=1000',
      category: 'intimate',
      description: 'An intimate backwaters celebration with natural beauty and heartfelt moments.',
    },
    {
      id: '8',
      couple: 'Meera & Aditya',
      location: 'Paris, France',
      date: 'July 2024',
      guests: 50,
      image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1000',
      category: 'pre-wedding',
      description: 'A romantic pre-wedding shoot capturing love amidst the charm of Paris.',
    },
    {
      id: '9',
      couple: 'Neha & Kunal',
      location: 'Rajasthan, India',
      date: 'June 2024',
      guests: 280,
      image: 'https://images.unsplash.com/photo-1604017011826-d3b4c23f8914?w=1000',
      category: 'wedding',
      description: 'A vibrant desert celebration with rich colors, traditions, and cinematic storytelling.',
    },
  ];

  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Riya & Karan',
      content: 'Heavenly Weds are truly the best for photography and videography services! They covered our event so beautifully and captured every moment perfectly. Their team was professional, creative, and made us feel so comfortable throughout.',
      type: 'Photography & Videography',
    },
    {
      id: '2',
      name: 'Geeta & Yash',
      content: 'Heavenly Weds are the best for maternity shoots! They made our special journey even more memorable with their beautiful photography and attention to every detail. The team was so warm, patient, and made us feel completely comfortable throughout the shoot. Every moment was captured so naturally and perfectly — something we\'ll cherish forever. Highly recommended for anyone looking to capture their precious moments!',
      type: 'Maternity Shoot',
    },
    {
      id: '3',
      name: 'Roy & Rachel',
      content: 'Heavenly Weds are the best for wedding planning! From decor to photography, everything was handled perfectly. The team made our big day stress-free and truly magical. Highly recommended!',
      type: 'Wedding Planning & Photography',
    },
    {
      id: '4',
      name: 'Nishita & Raj',
      content: 'Heavenly Weds did a great pre-wedding photoshoot for us! They captured our moments beautifully and made the entire experience so comfortable and fun. Loved every bit of it — highly recommended!',
      type: 'Pre-Wedding Shoot',
    },
  ];

  const filteredWeddings = selectedCategory === 'all' 
    ? weddings 
    : weddings.filter(wedding => {
        if (selectedCategory === 'intimate') return wedding.guests <= 100;
        return wedding.category === selectedCategory;
      });

  return (
    <div className="bg-white pt-[117px] font-serif">
      {/* Hero Section */}
      <section className="py-16 md:py-20 lg:py-24 px-4 md:px-8">
        <div className="mx-auto max-w-[900px] px-4 sm:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-4 uppercase tracking-[3px] text-[11px] text-[#9A9A9A] font-sans">
              Our Work
            </p>
            <h1 className="font-serif mb-6 md:mb-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-[#C9A7A0] font-light">
              Weddings We've Crafted
            </h1>
            <p className="text-base sm:text-lg leading-relaxed text-[#6F6F6F] max-w-3xl mx-auto font-light">
              Every wedding is a unique love story. Explore our portfolio of beautifully crafted celebrations 
              across the world's most enchanting destinations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 md:py-10 lg:py-12 px-4 md:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className="uppercase tracking-wider transition-all duration-300 px-4 sm:px-5 md:px-7 py-2.5 sm:py-3 text-[10px] sm:text-[11px] font-sans"
                style={{
                  backgroundColor: selectedCategory === category.id ? '#C9A7A0' : '#F2E8E6',
                  color: selectedCategory === category.id ? '#FFFFFF' : '#6F6F6F',
                  letterSpacing: '2px',
                }}
                onMouseEnter={(e) => {
                  if (selectedCategory !== category.id) {
                    e.currentTarget.style.backgroundColor = '#E8DCD8';
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedCategory !== category.id) {
                    e.currentTarget.style.backgroundColor = '#F2E8E6';
                  }
                }}
              >
                {category.label}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Wedding Grid */}
      <section className="py-8 md:py-12 lg:py-16 px-4 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {filteredWeddings.map((wedding, index) => (
              <motion.div
                key={wedding.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                {/* Image Container - All images exactly the same size and responsive */}
                <div className="relative mb-4 sm:mb-5 md:mb-6 overflow-hidden rounded-sm w-full aspect-[4/5]">
                  <img
                    src={wedding.image}
                    alt={`${wedding.couple} wedding at ${wedding.location}`}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-[0.98] saturate-[0.85]"
                    loading="lazy"
                  />
                  
                  {/* Overlay on Hover */}
                  <div 
                    className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100 px-4"
                    style={{ background: 'linear-gradient(to bottom, rgba(201, 167, 160, 0.85), rgba(201, 167, 160, 0.95))' }}
                  >
                    <div className="text-center text-white">
                      <p className="mb-3 leading-relaxed text-sm sm:text-base font-light">
                        {wedding.description}
                      </p>
                      <div className="flex items-center justify-center gap-2 uppercase tracking-wider text-[10px] sm:text-[11px] font-sans">
                        View Details
                        <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Wedding Info */}
                <div>
                  <h3 className="font-serif mb-2 sm:mb-3 text-xl sm:text-2xl md:text-3xl text-[#6F6F6F] font-light">
                    {wedding.couple}
                  </h3>
                  
                  <div className="space-y-1.5 sm:space-y-2">
                    <div className="flex items-center gap-2 text-[#9A9A9A] text-xs sm:text-sm font-light">
                      <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-[#C9A7A0] flex-shrink-0" />
                      <span className="truncate">{wedding.location}</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-[#9A9A9A] text-xs sm:text-sm font-light">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-3 w-3 sm:h-4 sm:w-4 text-[#C9A7A0] flex-shrink-0" />
                        <span>{wedding.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-3 w-3 sm:h-4 sm:w-4 text-[#C9A7A0] flex-shrink-0" />
                        <span>{wedding.guests} Guests</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No Results Message */}
          {filteredWeddings.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16 md:py-20"
            >
              <p className="text-sm sm:text-base text-[#9A9A9A] font-light">
                No weddings found in this category. Please try another filter.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-[#F2E8E6] px-4 md:px-8">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <p className="mb-4 uppercase tracking-[3px] text-[11px] text-[#9A9A9A] font-sans">
              Testimonials
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#C9A7A0] font-light">
              What Our Couples Say
            </h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 md:p-8 rounded-sm shadow-sm"
                style={{ border: '1px solid #ECECEC' }}
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current text-[#C9A7A0]" style={{ color: '#C9A7A0' }} />
                  ))}
                </div>
                <p className="text-[#6F6F6F] leading-relaxed mb-4 text-sm md:text-base font-light italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center justify-between">
                  <p className="font-serif text-[#C9A7A0] font-medium">
                    {testimonial.name}
                  </p>
                  <p className="text-[11px] uppercase tracking-wider text-[#9A9A9A] font-sans">
                    {testimonial.type}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 lg:py-24 px-4 md:px-8">
        <div className="mx-auto max-w-3xl px-4 sm:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif mb-4 md:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-[#C9A7A0] font-light">
              Let's Create Your Heavenly Story
            </h2>
            <p className="leading-relaxed mb-8 md:mb-10 text-sm sm:text-base text-[#6F6F6F] font-light max-w-2xl mx-auto">
              Ready to begin planning the celebration of your dreams? Book your complimentary consultation
              and let's bring your vision to life with elegance, beauty, and perfection.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 uppercase tracking-[2px] transition-all duration-500 px-6 sm:px-8 md:px-12 py-4 sm:py-5 text-[11px] sm:text-xs bg-[#F2E8E6] text-[#6F6F6F] border border-transparent hover:bg-[#C9A7A0] hover:text-white font-sans"
            >
              <Calendar className="h-4 w-4 sm:h-5 sm:w-5" />
              Schedule Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}