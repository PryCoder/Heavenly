import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Users, Calendar } from 'lucide-react';
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

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Weddings' },
    { id: 'italy', label: 'Italy' },
    { id: 'france', label: 'France' },
    { id: 'india', label: 'India' },
    { id: 'intimate', label: 'Intimate' },
    { id: 'grand', label: 'Grand' },
  ];

  const weddings: Wedding[] = [
    {
      id: '1',
      couple: 'Sophia & James',
      location: 'Lake Como, Italy',
      date: 'June 2024',
      guests: 120,
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1000',
      category: 'italy',
      description: 'A romantic lakeside celebration with breathtaking mountain views',
    },
    {
      id: '2',
      couple: 'Priya & Arjun',
      location: 'Udaipur, India',
      date: 'March 2024',
      guests: 350,
      image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1000',
      category: 'india',
      description: 'A majestic palace wedding celebrating rich cultural traditions',
    },
    {
      id: '3',
      couple: 'Emma & Lucas',
      location: 'Provence, France',
      date: 'September 2023',
      guests: 80,
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1000',
      category: 'france',
      description: 'An intimate vineyard celebration under the French countryside sky',
    },
    {
      id: '4',
      couple: 'Isabella & Marco',
      location: 'Tuscany, Italy',
      date: 'May 2024',
      guests: 150,
      image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1000',
      category: 'italy',
      description: 'A timeless Tuscan villa wedding surrounded by rolling hills',
    },
    {
      id: '5',
      couple: 'Aisha & Rahul',
      location: 'Jaipur, India',
      date: 'February 2024',
      guests: 400,
      image: 'https://images.unsplash.com/photo-1604017011826-d3b4c23f8914?w=1000',
      category: 'india',
      description: 'A grand celebration in the Pink City with vibrant colors and traditions',
    },
    {
      id: '6',
      couple: 'Charlotte & Alexandre',
      location: 'French Riviera, France',
      date: 'July 2023',
      guests: 100,
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1000',
      category: 'france',
      description: 'A sophisticated coastal wedding with Mediterranean elegance',
    },
    {
      id: '7',
      couple: 'Olivia & Sebastian',
      location: 'Amalfi Coast, Italy',
      date: 'August 2024',
      guests: 60,
      image: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=1000',
      category: 'italy',
      description: 'An intimate cliffside ceremony overlooking the azure sea',
    },
    {
      id: '8',
      couple: 'Ananya & Vikram',
      location: 'Goa, India',
      date: 'December 2023',
      guests: 200,
      image: 'https://images.unsplash.com/photo-1604017011826-d3b4c23f8914?w=1000',
      category: 'india',
      description: 'A beachfront celebration blending modern style with Indian heritage',
    },
    {
      id: '9',
      couple: 'Amélie & Pierre',
      location: 'Château de Versailles, France',
      date: 'October 2023',
      guests: 180,
      image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1000',
      category: 'france',
      description: 'A regal château wedding with opulent French grandeur',
    },
  ];

  const filteredWeddings = selectedCategory === 'all' 
    ? weddings 
    : weddings.filter(wedding => {
        if (selectedCategory === 'intimate') return wedding.guests <= 100;
        if (selectedCategory === 'grand') return wedding.guests > 200;
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
              Celebrations We've Crafted
            </h1>
            <p className="text-base sm:text-lg leading-relaxed text-[#6F6F6F] max-w-3xl mx-auto font-light">
              Each wedding tells a unique love story. Explore our portfolio of extraordinary celebrations 
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

      {/* Testimonial Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-[#F2E8E6] px-4 md:px-8">
        <div className="mx-auto max-w-4xl px-4 sm:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-serif mb-4 md:mb-6 italic text-lg sm:text-xl md:text-2xl leading-relaxed text-[#6F6F6F] font-light">
              "HeavenlyWeds transformed our dream into reality. Every detail was perfect, 
              from the stunning venue to the seamless coordination. Our guests are still talking 
              about how magical it was."
            </p>
            <p className="uppercase tracking-wider text-[11px] sm:text-xs text-[#C9A7A0] font-sans">
              — Sophia & James, Lake Como
            </p>
          </motion.div>
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
              Ready to Create Your Story?
            </h2>
            <p className="leading-relaxed mb-8 md:mb-10 text-sm sm:text-base text-[#6F6F6F] font-light max-w-2xl mx-auto">
              Let's begin planning your extraordinary celebration. Schedule a complimentary consultation 
              to discuss your vision and explore how we can bring it to life.
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