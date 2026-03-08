import { motion } from 'framer-motion';
import { MapPin, Calendar, Heart, ArrowRight, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Location {
  id: string;
  name: string;
  country: string;
  tagline: string;
  description: string;
  highlights: string[];
  bestTime: string;
  venues: string[];
  image: string;
  href: string;
}

export default function LocationsPage() {
  const locations: Location[] = [
    {
      id: 'italy',
      name: 'Italy',
      country: 'Italia',
      tagline: 'Romance Meets Timeless Beauty',
      description: 'From the serene shores of Lake Como to the rolling hills of Tuscany and the dramatic cliffs of the Amalfi Coast, Italy offers unparalleled romance and sophistication. Ancient villas, world-class cuisine, and breathtaking landscapes create the perfect backdrop for your celebration.',
      highlights: [
        'Historic villas and palaces',
        'Michelin-starred dining experiences',
        'Stunning lakeside and coastal venues',
        'World-renowned wine regions',
        'Rich cultural heritage',
        'Exceptional Italian hospitality',
      ],
      bestTime: 'May - October',
      venues: ['Lake Como', 'Tuscany', 'Amalfi Coast', 'Florence', 'Venice', 'Rome'],
      image: '/airo-assets/images/pages/locations/italy',
      href: '/locations/italy',
    },
    {
      id: 'france',
      name: 'France',
      country: 'La France',
      tagline: 'Elegance in Every Detail',
      description: 'Experience the epitome of sophistication in France, where lavender fields meet Mediterranean shores and historic châteaux dot the countryside. From the glamorous French Riviera to the romantic vineyards of Provence, France embodies timeless elegance and refined luxury.',
      highlights: [
        'Magnificent châteaux and estates',
        'Provence lavender fields',
        'French Riviera coastal elegance',
        'Exceptional French cuisine',
        'World-class champagne regions',
        'Artistic and cultural richness',
      ],
      bestTime: 'June - September',
      venues: ['French Riviera', 'Provence', 'Château de Versailles', 'Loire Valley', 'Paris', 'Bordeaux'],
      image: '/airo-assets/images/pages/locations/france',
      href: '/locations/france',
    },
    {
      id: 'india',
      name: 'India',
      country: 'भारत',
      tagline: 'Vibrant Colors, Rich Traditions',
      description: 'Immerse yourself in the majestic beauty of India, where royal palaces, vibrant traditions, and warm hospitality create unforgettable celebrations. From the pink palaces of Rajasthan to the tropical beaches of Goa, India offers a kaleidoscope of colors, cultures, and extraordinary venues.',
      highlights: [
        'Majestic palaces and heritage hotels',
        'Rich cultural ceremonies',
        'Vibrant colors and traditions',
        'Exquisite Indian cuisine',
        'Tropical beach destinations',
        'Unparalleled hospitality',
      ],
      bestTime: 'October - March',
      venues: ['Udaipur', 'Jaipur', 'Goa', 'Kerala', 'Agra', 'Jodhpur'],
      image: '/airo-assets/images/pages/locations/india',
      href: '/locations/india',
    },
  ];

  const destinationStats = [
    { number: '25+', label: 'Countries Worldwide' },
    { number: '100+', label: 'Exclusive Venues' },
    { number: '15+', label: 'Years Experience' },
    { number: '500+', label: 'Destination Weddings' },
  ];

  return (
    <div className="bg-white" style={{ paddingTop: '117px' }}>
      {/* Hero Section */}
      <section style={{ padding: '100px 0 80px' }}>
        <div className="mx-auto text-center" style={{ maxWidth: '900px', padding: '0 60px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-4 uppercase tracking-widest" style={{ fontSize: '11px', letterSpacing: '3px', color: '#9A9A9A' }}>
              Destination Weddings
            </p>
            <h1 className="font-heading mb-8" style={{ fontSize: '64px', lineHeight: '1.15', color: '#C9A7A0', fontWeight: 400 }}>
              Celebrate in Paradise
            </h1>
            <p className="leading-relaxed" style={{ fontSize: '18px', lineHeight: '1.8', color: '#6F6F6F' }}>
              From the romantic shores of Europe to the vibrant palaces of India, we bring your dream 
              destination wedding to life in the world's most breathtaking locations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section style={{ padding: '60px 0', backgroundColor: '#F2E8E6' }}>
        <div className="mx-auto" style={{ maxWidth: '1200px', padding: '0 60px' }}>
          <div className="grid grid-cols-2 gap-12 md:grid-cols-4">
            {destinationStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="font-heading mb-2" style={{ fontSize: '48px', lineHeight: '1', color: '#C9A7A0', fontWeight: 400 }}>
                  {stat.number}
                </div>
                <div className="uppercase tracking-wider" style={{ fontSize: '11px', letterSpacing: '2px', color: '#6F6F6F' }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Showcase */}
      <section style={{ padding: '120px 0' }}>
        <div className="mx-auto" style={{ maxWidth: '1400px', padding: '0 60px' }}>
          <div className="space-y-32">
            {locations.map((location, index) => (
              <motion.div
                key={location.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className={`grid gap-16 lg:grid-cols-2 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Image */}
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="relative overflow-hidden rounded-sm" style={{ height: '600px' }}>
                      <img
                        src={location.image}
                        alt={`${location.name} wedding destination`}
                        className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                        style={{ filter: 'brightness(0.98) saturate(0.85)' }}
                      />
                      {/* Country Badge */}
                      <div
                        className="absolute top-8 left-8"
                        style={{
                          padding: '12px 24px',
                          backgroundColor: 'rgba(255, 255, 255, 0.95)',
                          backdropFilter: 'blur(10px)',
                        }}
                      >
                        <p className="font-heading" style={{ fontSize: '18px', color: '#C9A7A0', fontWeight: 500 }}>
                          {location.country}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <p className="mb-3 uppercase tracking-widest" style={{ fontSize: '11px', letterSpacing: '3px', color: '#9A9A9A' }}>
                      Destination
                    </p>
                    <h2 className="font-heading mb-4" style={{ fontSize: '52px', lineHeight: '1.1', color: '#C9A7A0', fontWeight: 400 }}>
                      {location.name}
                    </h2>
                    <p className="font-heading mb-6 italic" style={{ fontSize: '20px', lineHeight: '1.4', color: '#9A9A9A' }}>
                      {location.tagline}
                    </p>
                    <p className="leading-relaxed mb-8" style={{ fontSize: '16px', lineHeight: '1.8', color: '#6F6F6F' }}>
                      {location.description}
                    </p>

                    {/* Highlights */}
                    <div className="mb-8">
                      <p className="mb-4 uppercase tracking-wider" style={{ fontSize: '11px', letterSpacing: '2px', color: '#9A9A9A' }}>
                        Why Choose {location.name}
                      </p>
                      <div className="grid gap-3 md:grid-cols-2">
                        {location.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <Heart className="h-4 w-4 flex-shrink-0 mt-1" style={{ color: '#C9A7A0' }} />
                            <span style={{ fontSize: '14px', lineHeight: '1.6', color: '#6F6F6F' }}>
                              {highlight}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Best Time & Venues */}
                    <div className="grid gap-6 md:grid-cols-2 mb-8">
                      <div className="p-5 rounded-sm" style={{ backgroundColor: '#F2E8E6' }}>
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar className="h-5 w-5" style={{ color: '#C9A7A0' }} />
                          <p className="uppercase tracking-wider" style={{ fontSize: '10px', letterSpacing: '2px', color: '#9A9A9A' }}>
                            Best Time to Visit
                          </p>
                        </div>
                        <p style={{ fontSize: '16px', color: '#6F6F6F', fontWeight: 500 }}>
                          {location.bestTime}
                        </p>
                      </div>

                      <div className="p-5 rounded-sm" style={{ backgroundColor: '#F2E8E6' }}>
                        <div className="flex items-center gap-2 mb-2">
                          <MapPin className="h-5 w-5" style={{ color: '#C9A7A0' }} />
                          <p className="uppercase tracking-wider" style={{ fontSize: '10px', letterSpacing: '2px', color: '#9A9A9A' }}>
                            Popular Venues
                          </p>
                        </div>
                        <p style={{ fontSize: '14px', color: '#6F6F6F', lineHeight: '1.6' }}>
                          {location.venues.slice(0, 3).join(' • ')}
                        </p>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Link
                      to={location.href}
                      className="inline-flex items-center gap-2 uppercase tracking-widest transition-all duration-500"
                      style={{
                        padding: '16px 40px',
                        fontSize: '11px',
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
                      Explore {location.name}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach Section */}
      <section style={{ padding: '80px 0 100px', backgroundColor: '#FAFAFA' }}>
        <div className="mx-auto text-center" style={{ maxWidth: '900px', padding: '0 60px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center mb-8 rounded-full" style={{ width: '100px', height: '100px', backgroundColor: '#F2E8E6' }}>
              <Globe className="h-12 w-12" style={{ color: '#C9A7A0' }} />
            </div>
            <h2 className="font-heading mb-6" style={{ fontSize: '48px', lineHeight: '1.2', color: '#C9A7A0', fontWeight: 400 }}>
              Beyond These Destinations
            </h2>
            <p className="leading-relaxed mb-6" style={{ fontSize: '16px', lineHeight: '1.8', color: '#6F6F6F' }}>
              While Italy, France, and India are our specialty destinations, our global network extends to over 
              25 countries worldwide. From the Greek Islands to the Caribbean, from Morocco to Thailand—wherever 
              your dream destination may be, we have the expertise and connections to make it extraordinary.
            </p>
            <p className="leading-relaxed mb-10" style={{ fontSize: '15px', lineHeight: '1.8', color: '#9A9A9A' }}>
              Our team has planned celebrations in castles, beaches, vineyards, palaces, and private estates 
              across the globe. Let us know your dream location, and we'll bring it to life.
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
              Ready to Plan Your Destination Wedding?
            </h2>
            <p className="leading-relaxed mb-10" style={{ fontSize: '16px', lineHeight: '1.8', color: '#6F6F6F' }}>
              Schedule a complimentary consultation to discuss your dream destination and discover how we can 
              create an unforgettable celebration in the location of your dreams.
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
