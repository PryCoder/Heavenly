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
      id: 'london',
      name: 'London',
      country: 'United Kingdom',
      tagline: 'Modern Elegance, Iconic Backdrops',
      description: 'From grand hotels to intimate city venues, London blends timeless sophistication with contemporary style. Perfect for couples who want a refined celebration with effortless, cosmopolitan charm.',
      highlights: [
        'Iconic city landmarks for portraits',
        'Luxury hotels and banquet venues',
        'Elegant indoor celebrations year-round',
        'World-class dining and styling',
        'Easy international connectivity',
        'Premium photo & film locations',
      ],
      bestTime: 'All Year',
      venues: ['Mayfair', 'Kensington', 'Chelsea', 'Westminster', 'Richmond', 'City of London'],
      image: '/joy&lucy/fwdjoylucy/lon-hw (4).jpg',
      href: '/locations#london',
    },
    {
      id: 'goa',
      name: 'Goa',
      country: 'India',
      tagline: 'Beachside Bliss, Golden Sunsets',
      description: 'A vibrant destination for effortless celebrations—sunset ceremonies, breezy décor, and joyful moments by the sea. Ideal for couples who want a relaxed yet stunning wedding vibe.',
      highlights: [
        'Sunset beach ceremonies',
        'Resort weddings with full hospitality',
        'Tropical styling and décor',
        'Beautiful oceanfront photography',
        'Fun multi-day celebrations',
        'Great for intimate & grand weddings',
      ],
      bestTime: 'November - March',
      venues: ['Candolim', 'Baga', 'Anjuna', 'South Goa', 'Panaji', 'Assagao'],
      image: '/christianwed/fwdchristianwedding/chr-1 (3).jpg',
      href: '/locations#goa',
    },
    {
      id: 'rajasthan',
      name: 'Rajasthan',
      country: 'India',
      tagline: 'Royal Grandeur, Heritage Charm',
      description: 'Palaces, forts, and heritage hotels set the stage for a regal celebration. Rajasthan is made for cinematic weddings—rich traditions, majestic décor, and unforgettable grandeur.',
      highlights: [
        'Heritage palaces and forts',
        'Cinematic wedding photography',
        'Traditional ceremonies and décor',
        'Grand processions and celebrations',
        'Luxury heritage hospitality',
        'Perfect for multi-event weddings',
      ],
      bestTime: 'October - March',
      venues: ['Udaipur', 'Jaipur', 'Jodhpur', 'Jaisalmer', 'Pushkar', 'Bikaner'],
      image: '/brideshoot/fwdbridephotoshoot/br-H-1 (3).jpg',
      href: '/locations#rajasthan',
    },
    {
      id: 'mumbai',
      name: 'Mumbai',
      country: 'India',
      tagline: 'Glamour, Energy, Celebration',
      description: 'Mumbai weddings are vibrant, stylish, and full of life—luxury venues, high-energy functions, and unforgettable moments captured with a modern cinematic touch.',
      highlights: [
        'Luxury ballrooms and banquet venues',
        'High-energy multi-event celebrations',
        'Premium styling and production',
        'City-meets-coastal photo locations',
        'Perfect for grand receptions',
        'Best-in-class hospitality options',
      ],
      bestTime: 'October - March',
      venues: ['South Mumbai', 'Bandra', 'Juhu', 'Powai', 'Worli', 'Navi Mumbai'],
      image: '/bhaktisagar/fwdheavenlywedsphotos/bk-h-1 (7).jpg',
      href: '/locations#mumbai',
    },
  ];

  const destinationStats = [
    { number: '25+', label: 'Countries Worldwide' },
    { number: '100+', label: 'Exclusive Venues' },
    { number: '15+', label: 'Years Experience' },
    { number: '500+', label: 'Destination Weddings' },
  ];

  return (
    <div className="bg-white pt-[117px]">
      {/* Hero Section */}
      <section className="py-16 md:py-20 lg:py-24 px-4 md:px-8">
        <div className="mx-auto max-w-[900px] px-4 sm:px-8 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-4 uppercase tracking-[3px] text-[11px] text-[#9A9A9A]">
              Destination Weddings
            </p>
            <h1 className="font-heading mb-6 md:mb-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-[#C9A7A0] font-light">
              Celebrate in Paradise
            </h1>
            <p className="text-base sm:text-lg leading-relaxed text-[#6F6F6F] max-w-3xl mx-auto">
              From the romantic shores of Europe to the vibrant palaces of India, we bring your dream 
              destination wedding to life in the world's most breathtaking locations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 md:py-16 bg-[#F2E8E6] px-4 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-8 md:gap-12 lg:grid-cols-4">
            {destinationStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="font-heading mb-2 text-3xl sm:text-4xl md:text-5xl text-[#C9A7A0] font-light">
                  {stat.number}
                </div>
                <div className="uppercase tracking-[2px] text-[10px] sm:text-[11px] text-[#6F6F6F]">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Showcase */}
      <section className="py-16 md:py-24 lg:py-32 px-4 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="space-y-24 md:space-y-32">
            {locations.map((location, index) => (
              <motion.div
                key={location.id}
                id={location.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className={`grid gap-8 lg:gap-16 xl:gap-20 lg:grid-cols-2 items-center`}>
                  {/* Image */}
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="relative overflow-hidden rounded-sm h-[400px] sm:h-[500px] md:h-[600px]">
                      <img
                        src={location.image}
                        alt={`${location.name} wedding destination`}
                        className="h-full w-full object-cover transition-transform duration-700 hover:scale-105 brightness-[0.98] saturate-[0.85]"
                      />
                      {/* Country Badge */}
                      <div
                        className="absolute top-4 sm:top-6 md:top-8 left-4 sm:left-6 md:left-8 py-2 px-4 sm:py-3 sm:px-6 md:py-3 md:px-8"
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.95)',
                          backdropFilter: 'blur(10px)',
                        }}
                      >
                        <p className="font-heading text-base sm:text-lg md:text-xl text-[#C9A7A0] font-medium">
                          {location.country}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <p className="mb-3 uppercase tracking-[3px] text-[11px] text-[#9A9A9A]">
                      Destination
                    </p>
                    <h2 className="font-heading mb-3 text-4xl sm:text-5xl md:text-6xl leading-tight text-[#C9A7A0] font-light">
                      {location.name}
                    </h2>
                    <p className="font-heading mb-4 md:mb-6 italic text-lg sm:text-xl text-[#9A9A9A]">
                      {location.tagline}
                    </p>
                    <p className="leading-relaxed mb-6 md:mb-8 text-sm sm:text-base text-[#6F6F6F]">
                      {location.description}
                    </p>

                    {/* Highlights */}
                    <div className="mb-6 md:mb-8">
                      <p className="mb-3 md:mb-4 uppercase tracking-[2px] text-[11px] text-[#9A9A9A]">
                        Why Choose {location.name}
                      </p>
                      <div className="grid gap-2 md:gap-3 grid-cols-1 sm:grid-cols-2">
                        {location.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <Heart className="h-4 w-4 flex-shrink-0 mt-1 text-[#C9A7A0]" />
                            <span className="text-xs sm:text-sm text-[#6F6F6F]">
                              {highlight}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Best Time & Venues */}
                    <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 mb-6 md:mb-8">
                      <div className="p-4 sm:p-5 rounded-sm bg-[#F2E8E6]">
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar className="h-5 w-5 text-[#C9A7A0]" />
                          <p className="uppercase tracking-[2px] text-[10px] text-[#9A9A9A]">
                            Best Time to Visit
                          </p>
                        </div>
                        <p className="text-sm sm:text-base text-[#6F6F6F] font-medium">
                          {location.bestTime}
                        </p>
                      </div>

                      <div className="p-4 sm:p-5 rounded-sm bg-[#F2E8E6]">
                        <div className="flex items-center gap-2 mb-2">
                          <MapPin className="h-5 w-5 text-[#C9A7A0]" />
                          <p className="uppercase tracking-[2px] text-[10px] text-[#9A9A9A]">
                            Popular Venues
                          </p>
                        </div>
                        <p className="text-xs sm:text-sm text-[#6F6F6F] leading-relaxed">
                          {location.venues.slice(0, 3).join(' • ')}
                        </p>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Link
                      to={location.href}
                      className="inline-flex items-center gap-2 uppercase tracking-[2px] transition-all duration-500 px-8 py-4 text-[11px] bg-[#F2E8E6] text-[#6F6F6F] border border-transparent hover:bg-[#C9A7A0] hover:text-white"
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
      <section className="py-16 md:py-20 lg:py-24 bg-[#FAFAFA] px-4 md:px-8">
        <div className="mx-auto max-w-4xl px-4 sm:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center mb-6 md:mb-8 rounded-full w-20 h-20 md:w-24 md:h-24 bg-[#F2E8E6]">
              <Globe className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 text-[#C9A7A0]" />
            </div>
            <h2 className="font-heading mb-4 md:mb-6 text-3xl sm:text-4xl md:text-5xl leading-tight text-[#C9A7A0] font-light">
              Beyond These Destinations
            </h2>
            <p className="leading-relaxed mb-4 md:mb-6 text-sm sm:text-base text-[#6F6F6F]">
              While Italy, France, and India are our specialty destinations, our global network extends to over 
              25 countries worldwide. From the Greek Islands to the Caribbean, from Morocco to Thailand—wherever 
              your dream destination may be, we have the expertise and connections to make it extraordinary.
            </p>
            <p className="leading-relaxed text-xs sm:text-sm text-[#9A9A9A]">
              Our team has planned celebrations in castles, beaches, vineyards, palaces, and private estates 
              across the globe. Let us know your dream location, and we'll bring it to life.
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
            <h2 className="font-heading mb-4 md:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-[#C9A7A0] font-light">
              Ready to Plan Your Destination Wedding?
            </h2>
            <p className="leading-relaxed mb-8 md:mb-10 text-sm sm:text-base text-[#6F6F6F]">
              Schedule a complimentary consultation to discuss your dream destination and discover how we can 
              create an unforgettable celebration in the location of your dreams.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 uppercase tracking-[2px] transition-all duration-500 px-6 sm:px-8 md:px-12 py-4 sm:py-5 text-[11px] sm:text-xs bg-[#F2E8E6] text-[#6F6F6F] border border-transparent hover:bg-[#C9A7A0] hover:text-white"
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