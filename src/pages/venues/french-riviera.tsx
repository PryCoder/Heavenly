import { motion } from 'framer-motion';
import { 
  MapPin, Calendar, Heart, ArrowRight, Star, 
  Sun, Ship, Crown, GlassWater, Users, Camera,
  ChevronRight, Palmtree, Sparkles, Utensils
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FrenchRivieraPage() {
  const venues = [
    {
      name: 'Hotel du Cap-Eden-Roc',
      description: 'Legendary hotel with private peninsula and dramatic Mediterranean views',
      capacity: '300 guests',
      features: ['Sea-view terraces', 'Private jetty', 'Michelin dining', 'Historic gardens'],
      image: '/airo-assets/images/venues/france/riviera/hotel-du-cap'
    },
    {
      name: 'Château de la Chèvre d\'Or',
      description: 'Medieval village castle perched above the Mediterranean in Eze',
      capacity: '180 guests',
      features: ['Panoramic views', 'Michelin-starred', 'Village setting', 'Terraced gardens'],
      image: '/airo-assets/images/venues/france/riviera/chevre-dor'
    },
    {
      name: 'Villa Ephrussi de Rothschild',
      description: 'Pink Belle Époque palace with nine stunning gardens',
      capacity: '250 guests',
      features: ['Fountain shows', 'Sea views', 'Museum setting', 'Formal gardens'],
      image: '/airo-assets/images/venues/france/riviera/villa-rothschild'
    }
  ];

  const experiences = [
    {
      icon: Ship,
      title: 'Yacht Celebrations',
      description: 'Exchange vows on a luxury yacht in the Mediterranean'
    },
    {
      icon: Crown,
      title: 'Palace Hotels',
      description: 'Stay in the finest hotels of the Côte d\'Azur'
    },
    {
      icon: Utensils,
      title: 'Gastronomic Dining',
      description: 'Multiple Michelin-starred catering options'
    },
    {
      icon: Camera,
      title: 'Glamorous Backdrops',
      description: 'Iconic locations worthy of a film set'
    }
  ];

  const gallery = [
    '/airo-assets/images/venues/france/riviera/gallery-1',
    '/airo-assets/images/venues/france/riviera/gallery-2',
    '/airo-assets/images/venues/france/riviera/gallery-3',
    '/airo-assets/images/venues/france/riviera/gallery-4'
  ];

  return (
    <div className="bg-white pt-[117px]">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/airo-assets/images/venues/france/riviera/hero"
            alt="French Riviera coastline with luxury hotels"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        
        <div className="relative h-full flex items-center justify-center px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white max-w-4xl"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Link to="/locations/france" className="text-sm hover:underline">France</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-sm">French Riviera</span>
            </div>
            <h1 className="font-heading mb-6 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light">
              French Riviera
            </h1>
            <p className="text-xl md:text-2xl font-light italic mb-8 max-w-2xl mx-auto">
              Where glamour meets the Mediterranean
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                ✦ Palace Hotels
              </span>
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                ✦ Coastal Ceremonies
              </span>
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                ✦ Michelin Dining
              </span>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/50 flex justify-center">
            <div className="w-1 h-2 bg-white/70 rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      {/* Quick Facts */}
      <section className="py-8 bg-[#F2E8E6] px-4 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-3">
              <Users className="h-5 w-5 text-[#C9A7A0]" />
              <span className="text-sm text-[#6F6F6F]">Up to 400 guests</span>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="h-5 w-5 text-[#C9A7A0]" />
              <span className="text-sm text-[#6F6F6F]">May - September</span>
            </div>
            <div className="flex items-center gap-3">
              <Ship className="h-5 w-5 text-[#C9A7A0]" />
              <span className="text-sm text-[#6F6F6F]">Yacht weddings</span>
            </div>
            <div className="flex items-center gap-3">
              <GlassWater className="h-5 w-5 text-[#C9A7A0]" />
              <span className="text-sm text-[#6F6F6F]">Champagne region</span>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 px-4 md:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading mb-6 text-3xl md:text-4xl text-[#C9A7A0] font-light">
              The Playground of the World's Elite
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-[#6F6F6F] mb-8">
              The French Riviera has long been synonymous with glamour, luxury, and romance. 
              From the film festivals of Cannes to the casinos of Monte Carlo, this sun-drenched 
              coastline offers the perfect setting for a sophisticated wedding celebration. 
              Picture yourself exchanging vows with the Mediterranean as your backdrop, followed 
              by champagne receptions in Belle Époque palaces.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Venues */}
      <section className="py-20 bg-[#FAFAFA] px-4 md:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading mb-4 text-3xl md:text-4xl text-[#C9A7A0] font-light">
              Iconic Riviera Venues
            </h2>
            <p className="text-[#6F6F6F] max-w-2xl mx-auto">
              The most prestigious addresses on the Côte d'Azur await your celebration
            </p>
          </motion.div>

          <div className="space-y-20">
            {venues.map((venue, index) => (
              <motion.div
                key={venue.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className={`grid gap-8 lg:gap-16 lg:grid-cols-2 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative overflow-hidden rounded-sm h-[400px] lg:h-[500px] group">
                    <img
                      src={venue.image}
                      alt={venue.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-500" />
                    
                    <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-sm">
                      <p className="text-xs text-[#6F6F6F]">Capacity</p>
                      <p className="text-sm font-medium text-[#C9A7A0]">{venue.capacity}</p>
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <h3 className="font-heading mb-4 text-3xl md:text-4xl text-[#C9A7A0] font-light">
                    {venue.name}
                  </h3>
                  <p className="text-[#6F6F6F] mb-6 leading-relaxed">
                    {venue.description}
                  </p>
                  
                  <div className="mb-8">
                    <p className="mb-3 uppercase tracking-[2px] text-[11px] text-[#9A9A9A]">
                      Venue Features
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {venue.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <Sparkles className="h-4 w-4 text-[#C9A7A0]" />
                          <span className="text-sm text-[#6F6F6F]">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    to={`/venues/france/riviera/${venue.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center gap-2 uppercase tracking-[2px] transition-all duration-500 px-8 py-4 text-[11px] bg-[#F2E8E6] text-[#6F6F6F] border border-transparent hover:bg-[#C9A7A0] hover:text-white"
                  >
                    View Venue Details
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coastal Lifestyle */}
      <section className="py-20 px-4 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative overflow-hidden rounded-sm h-[450px]">
                <img
                  src="/airo-assets/images/venues/france/riviera/coastal-lifestyle"
                  alt="Luxury yacht on French Riviera"
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading mb-4 text-3xl md:text-4xl text-[#C9A7A0] font-light">
                The Art of Riviera Living
              </h2>
              <p className="text-[#6F6F6F] mb-6 leading-relaxed">
                A wedding on the French Riviera is more than just a ceremony—it's an entire 
                lifestyle experience. From pre-wedding yacht cruises to post-wedding brunches 
                in hilltop villages, every moment is an opportunity to indulge in the famous 
                art de vivre of the Côte d'Azur.
              </p>
              <div className="space-y-4">
                {[
                  'Private yacht charters for you and your guests',
                  'Welcome parties on iconic beaches',
                  'Caviar and champagne tastings',
                  'Excursions to perfumeries in Grasse',
                  'Sunset cocktails in medieval villages'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Palmtree className="h-5 w-5 text-[#C9A7A0] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[#6F6F6F]">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-[#FAFAFA] px-4 md:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading mb-4 text-3xl md:text-4xl text-[#C9A7A0] font-light">
              Riviera Elegance
            </h2>
            <p className="text-[#6F6F6F]">Glimpses of glamorous celebrations on the Côte d'Azur</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {gallery.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative overflow-hidden rounded-sm aspect-square group cursor-pointer"
              >
                <img
                  src={image}
                  alt={`French Riviera wedding ${index + 1}`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experiences Grid */}
      <section className="py-20 px-4 md:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading mb-4 text-3xl md:text-4xl text-[#C9A7A0] font-light">
              Signature Experiences
            </h2>
            <p className="text-[#6F6F6F] max-w-2xl mx-auto">
              Elevate your wedding with these exclusive Riviera experiences
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 text-center rounded-sm shadow-sm hover:shadow-md transition-shadow"
              >
                <exp.icon className="h-12 w-12 mx-auto mb-4 text-[#C9A7A0]" />
                <h3 className="font-heading mb-2 text-xl text-[#C9A7A0]">{exp.title}</h3>
                <p className="text-sm text-[#6F6F6F]">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 md:px-8 bg-[#F2E8E6]">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading mb-6 text-3xl md:text-4xl text-[#C9A7A0] font-light">
            Plan Your Glamorous Riviera Wedding
          </h2>
          <p className="text-[#6F6F6F] mb-8">
            From palace hotels to private yachts, let us create a celebration worthy of the French Riviera's legendary elegance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 uppercase tracking-[2px] transition-all duration-500 px-10 py-5 text-[11px] bg-white text-[#6F6F6F] border border-transparent hover:bg-[#C9A7A0] hover:text-white"
            >
              <Heart className="h-4 w-4" />
              Inquire Now
            </Link>
            <Link
              to="/venues/france"
              className="inline-flex items-center gap-2 uppercase tracking-[2px] transition-all duration-500 px-10 py-5 text-[11px] border border-[#C9A7A0] text-[#6F6F6F] hover:bg-[#C9A7A0] hover:text-white"
            >
              Explore More French Venues
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}