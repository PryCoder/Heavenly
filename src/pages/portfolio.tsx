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
      image: '/airo-assets/images/pages/portfolio/wedding-1',
      category: 'italy',
      description: 'A romantic lakeside celebration with breathtaking mountain views',
    },
    {
      id: '2',
      couple: 'Priya & Arjun',
      location: 'Udaipur, India',
      date: 'March 2024',
      guests: 350,
      image: '/airo-assets/images/pages/portfolio/wedding-2',
      category: 'india',
      description: 'A majestic palace wedding celebrating rich cultural traditions',
    },
    {
      id: '3',
      couple: 'Emma & Lucas',
      location: 'Provence, France',
      date: 'September 2023',
      guests: 80,
      image: '/airo-assets/images/pages/portfolio/wedding-3',
      category: 'france',
      description: 'An intimate vineyard celebration under the French countryside sky',
    },
    {
      id: '4',
      couple: 'Isabella & Marco',
      location: 'Tuscany, Italy',
      date: 'May 2024',
      guests: 150,
      image: '/airo-assets/images/pages/portfolio/wedding-4',
      category: 'italy',
      description: 'A timeless Tuscan villa wedding surrounded by rolling hills',
    },
    {
      id: '5',
      couple: 'Aisha & Rahul',
      location: 'Jaipur, India',
      date: 'February 2024',
      guests: 400,
      image: '/airo-assets/images/pages/portfolio/wedding-5',
      category: 'india',
      description: 'A grand celebration in the Pink City with vibrant colors and traditions',
    },
    {
      id: '6',
      couple: 'Charlotte & Alexandre',
      location: 'French Riviera, France',
      date: 'July 2023',
      guests: 100,
      image: '/airo-assets/images/pages/portfolio/wedding-6',
      category: 'france',
      description: 'A sophisticated coastal wedding with Mediterranean elegance',
    },
    {
      id: '7',
      couple: 'Olivia & Sebastian',
      location: 'Amalfi Coast, Italy',
      date: 'August 2024',
      guests: 60,
      image: '/airo-assets/images/pages/portfolio/wedding-7',
      category: 'italy',
      description: 'An intimate cliffside ceremony overlooking the azure sea',
    },
    {
      id: '8',
      couple: 'Ananya & Vikram',
      location: 'Goa, India',
      date: 'December 2023',
      guests: 200,
      image: '/airo-assets/images/pages/portfolio/wedding-8',
      category: 'india',
      description: 'A beachfront celebration blending modern style with Indian heritage',
    },
    {
      id: '9',
      couple: 'Amélie & Pierre',
      location: 'Château de Versailles, France',
      date: 'October 2023',
      guests: 180,
      image: '/airo-assets/images/pages/portfolio/wedding-9',
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
    <div className="bg-white" style={{ paddingTop: '117px' }}>
      {/* Hero Section */}
      <section style={{ padding: '100px 0 60px' }}>
        <div className="mx-auto text-center" style={{ maxWidth: '900px', padding: '0 60px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-4 uppercase tracking-widest" style={{ fontSize: '11px', letterSpacing: '3px', color: '#9A9A9A' }}>
              Our Work
            </p>
            <h1 className="font-heading mb-8" style={{ fontSize: '64px', lineHeight: '1.15', color: '#C9A7A0', fontWeight: 400 }}>
              Celebrations We've Crafted
            </h1>
            <p className="leading-relaxed" style={{ fontSize: '18px', lineHeight: '1.8', color: '#6F6F6F' }}>
              Each wedding tells a unique love story. Explore our portfolio of extraordinary celebrations 
              across the world's most enchanting destinations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Categories */}
      <section style={{ padding: '40px 0 60px' }}>
        <div className="mx-auto" style={{ maxWidth: '1200px', padding: '0 60px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className="uppercase tracking-wider transition-all duration-300"
                style={{
                  padding: '12px 28px',
                  fontSize: '11px',
                  letterSpacing: '2px',
                  fontWeight: 400,
                  backgroundColor: selectedCategory === category.id ? '#C9A7A0' : '#F2E8E6',
                  color: selectedCategory === category.id ? '#FFFFFF' : '#6F6F6F',
                  border: 'none',
                  borderRadius: '2px',
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
      <section style={{ padding: '0 0 120px' }}>
        <div className="mx-auto" style={{ maxWidth: '1400px', padding: '0 60px' }}>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredWeddings.map((wedding, index) => (
              <motion.div
                key={wedding.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                {/* Image Container */}
                <div 
                  className="relative mb-6 overflow-hidden rounded-sm"
                  style={{ height: '450px' }}
                >
                  <img
                    src={wedding.image}
                    alt={`${wedding.couple} wedding`}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ filter: 'brightness(0.98) saturate(0.85)' }}
                  />
                  
                  {/* Overlay on Hover */}
                  <div 
                    className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{ background: 'linear-gradient(to bottom, rgba(201, 167, 160, 0.85), rgba(201, 167, 160, 0.95))' }}
                  >
                    <div className="text-center text-white px-8">
                      <p className="mb-3 leading-relaxed" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                        {wedding.description}
                      </p>
                      <div className="flex items-center justify-center gap-2 uppercase tracking-wider" style={{ fontSize: '11px', letterSpacing: '2px' }}>
                        View Details
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Wedding Info */}
                <div>
                  <h3 className="font-heading mb-3" style={{ fontSize: '28px', color: '#6F6F6F', fontWeight: 500 }}>
                    {wedding.couple}
                  </h3>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2" style={{ color: '#9A9A9A', fontSize: '13px' }}>
                      <MapPin className="h-4 w-4" style={{ color: '#C9A7A0' }} />
                      {wedding.location}
                    </div>
                    <div className="flex items-center gap-4" style={{ color: '#9A9A9A', fontSize: '13px' }}>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" style={{ color: '#C9A7A0' }} />
                        {wedding.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4" style={{ color: '#C9A7A0' }} />
                        {wedding.guests} Guests
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
              className="text-center py-20"
            >
              <p style={{ fontSize: '16px', color: '#9A9A9A' }}>
                No weddings found in this category. Please try another filter.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Testimonial Section */}
      <section style={{ padding: '80px 0', backgroundColor: '#F2E8E6' }}>
        <div className="mx-auto text-center" style={{ maxWidth: '900px', padding: '0 60px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-heading mb-6 italic" style={{ fontSize: '24px', lineHeight: '1.6', color: '#6F6F6F' }}>
              "HeavenlyWeds transformed our dream into reality. Every detail was perfect, 
              from the stunning venue to the seamless coordination. Our guests are still talking 
              about how magical it was."
            </p>
            <p className="uppercase tracking-wider" style={{ fontSize: '12px', letterSpacing: '2px', color: '#C9A7A0' }}>
              — Sophia & James, Lake Como
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '100px 0' }}>
        <div className="mx-auto text-center" style={{ maxWidth: '800px', padding: '0 60px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading mb-6" style={{ fontSize: '48px', lineHeight: '1.2', color: '#C9A7A0', fontWeight: 400 }}>
              Ready to Create Your Story?
            </h2>
            <p className="leading-relaxed mb-10" style={{ fontSize: '16px', lineHeight: '1.8', color: '#6F6F6F' }}>
              Let's begin planning your extraordinary celebration. Schedule a complimentary consultation 
              to discuss your vision and explore how we can bring it to life.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 uppercase tracking-widest transition-all duration-500"
              style={{
                padding: '18px 48px',
                fontSize: '12px',
                letterSpacing: '2px',
                backgroundColor: '#F2E8E6',
                color: '#6F6F6F',
                border: '1px solid transparent',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#C9A7A0';
                e.currentTarget.style.color = '#FFFFFF';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#F2E8E6';
                e.currentTarget.style.color = '#6F6F6F';
              }}
            >
              <Calendar className="h-5 w-5" />
              Schedule Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
