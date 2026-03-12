import { motion } from 'framer-motion';
import { MapPin, Calendar, Heart, ArrowRight, Star, Utensils, Landmark, Wine, Sun, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ItalyPage() {
  const venues = [
    {
      name: 'Lake Como',
      description: 'Stunning glacial lakes surrounded by lush mountains and elegant villas',
      image: 'https://imgs.search.brave.com/XPIql_Jis6PVLDxiJN8qq4wpUyt84GG61AyXlISkCbk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdDQu/ZGVwb3NpdHBob3Rv/cy5jb20vNDQxNDIw/MS8yOTAxMi9pLzQ1/MC9kZXBvc2l0cGhv/dG9zXzI5MDEyODUz/Mi1zdG9jay1waG90/by1sYWtlLWNvbW8t/bmVhci1iZWxsYWdp/by1waWVkbW9udGUu/anBn',
      highlights: ['Villa Balbianello', 'Villa del Balbianello', 'Bellagio']
    },
    {
      name: 'Tuscany',
      description: 'Rolling hills, vineyards, and medieval towns creating romantic landscapes',
      image: 'https://imgs.search.brave.com/1a95dFMeiqEm--8nqdAygiu8PpCoMewLP98UB_E3OP8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/c2FuZGF5YWdyb3Vw/ZS5ldS9pbWFnZXMv/X2FsaWFzZXMvb3Jp/Z2luYWxfb3B0aW1p/emVkLzIvMC80Lzcv/ODQ3NDAyLTE0LWVu/Zy1HQi9iZDYzYWIw/ZDk3OWUtVG9zY2Fu/ZV9BZG9iZVN0b2Nr/XzUxNzM2MDk4MC5q/cGc',
      highlights: ['Florence', 'Siena', 'Chianti Region']
    },
    {
      name: 'Amalfi Coast',
      description: 'Dramatic coastal cliffs with colorful villages overlooking the Mediterranean',
      image: 'https://imgs.search.brave.com/X39xFoouNX4nN_safiEoUu-Zylv4oXHILu46OFo_COM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jb250/ZW50LnR1aS5jby51/ay9hZGFtdHVpLzIw/MTZfMTIvMThfMTUv/MzNjODNiMjgtOGJi/My00MWFjLWJlZjIt/YTZlMDAxMDZiY2I5/L0xJQl9TSFVfMTRf/RjIyNTJXZWJPcmln/aW5hbENvbXByZXNz/ZWQuanBn',
      highlights: ['Positano', 'Ravello', 'Capri']
    }
  ];

  const experiences = [
    { icon: Landmark, label: 'Historic Villas', description: 'Renaissance-era estates' },
    { icon: Utensils, label: 'Michelin Dining', description: 'World-class cuisine' },
    { icon: Wine, label: 'Wine Tasting', description: 'Brunello & Barolo' },
    { icon: Sun, label: 'Coastal Beauty', description: 'Mediterranean views' }
  ];

  return (
    <div className="bg-white pt-[117px]">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://bp37mc8dd9.preview.c36.airoapp.ai/airo-assets/images/pages/locations/italy"
            alt="Italian coastline with colorful villages"
            className="h-full w-full object-cover brightness-[0.85] saturate-[0.9]"
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
            <p className="mb-4 uppercase tracking-[4px] text-[12px] md:text-[14px] font-light">
              La Dolce Vita
            </p>
            <h1 className="font-heading mb-6 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-tight">
              Italy
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl font-light italic mb-8">
              Romance Meets Timeless Beauty
            </p>
            <div className="w-24 h-[2px] bg-white/60 mx-auto" />
          </motion.div>
        </div>

        {/* Scroll Indicator */}
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

      {/* Introduction */}
      <section className="py-20 md:py-28 px-4 md:px-8 bg-[#FAFAFA]">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block mb-4 uppercase tracking-[3px] text-[11px] text-[#9A9A9A]">
              Destination
            </span>
            <h2 className="font-heading mb-8 text-3xl md:text-4xl lg:text-5xl text-[#C9A7A0] font-light">
              Where Dreams Become Memories
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-[#6F6F6F] mb-8">
              From the serene shores of Lake Como to the rolling hills of Tuscany and the dramatic cliffs of the Amalfi Coast, Italy offers unparalleled romance and sophistication. Ancient villas, world-class cuisine, and breathtaking landscapes create the perfect backdrop for your celebration.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <exp.icon className="h-8 w-8 mx-auto mb-3 text-[#C9A7A0]" />
                  <h3 className="font-medium text-sm mb-1 text-[#6F6F6F]">{exp.label}</h3>
                  <p className="text-xs text-[#9A9A9A]">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Venues */}
      <section className="py-20 md:py-28 px-4 md:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading mb-4 text-3xl md:text-4xl lg:text-5xl text-[#C9A7A0] font-light">
              Iconic Venues
            </h2>
            <p className="text-[#6F6F6F] max-w-2xl mx-auto">
              Discover Italy's most breathtaking locations for your destination wedding
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
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="relative overflow-hidden rounded-sm h-[400px] group">
                    <img
                      src={venue.image}
                      alt={venue.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-500" />
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <h3 className="font-heading mb-4 text-3xl md:text-4xl text-[#C9A7A0] font-light">
                    {venue.name}
                  </h3>
                  <p className="text-[#6F6F6F] mb-6 leading-relaxed">
                    {venue.description}
                  </p>
                  <div className="space-y-3 mb-8">
                    {venue.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <Star className="h-4 w-4 text-[#C9A7A0]" />
                        <span className="text-sm text-[#6F6F6F]">{highlight}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    to={`/venues/italy/${venue.name.toLowerCase().replace(' ', '-')}`}
                    className="inline-flex items-center gap-2 uppercase tracking-[2px] transition-all duration-500 px-8 py-4 text-[11px] bg-[#F2E8E6] text-[#6F6F6F] border border-transparent hover:bg-[#C9A7A0] hover:text-white"
                  >
                    Explore {venue.name}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="py-16 bg-[#F2E8E6] px-4 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <Calendar className="h-8 w-8 text-[#C9A7A0]" />
              <div>
                <p className="uppercase tracking-[2px] text-[10px] text-[#9A9A9A] mb-1">
                  Best Time to Visit
                </p>
                <p className="text-[#6F6F6F] font-medium">May - October</p>
              </div>
            </div>
            <div className="flex items-center gap-4 justify-center md:justify-center">
              <MapPin className="h-8 w-8 text-[#C9A7A0]" />
              <div>
                <p className="uppercase tracking-[2px] text-[10px] text-[#9A9A9A] mb-1">
                  Popular Venues
                </p>
                <p className="text-[#6F6F6F] font-medium">Lake Como • Tuscany • Amalfi Coast</p>
              </div>
            </div>
            <div className="flex items-center gap-4 justify-center md:justify-end">
              <Camera className="h-8 w-8 text-[#C9A7A0]" />
              <div>
                <p className="uppercase tracking-[2px] text-[10px] text-[#9A9A9A] mb-1">
                  Perfect For
                </p>
                <p className="text-[#6F6F6F] font-medium">Romantic Celebrations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading mb-6 text-3xl md:text-4xl text-[#C9A7A0] font-light">
            Begin Your Italian Love Story
          </h2>
          <p className="text-[#6F6F6F] mb-8">
            Let us help you plan the perfect Italian wedding, from villa selections to authentic experiences.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 uppercase tracking-[2px] transition-all duration-500 px-10 py-5 text-[11px] bg-[#F2E8E6] text-[#6F6F6F] border border-transparent hover:bg-[#C9A7A0] hover:text-white"
          >
            <Heart className="h-4 w-4" />
            Plan Your Wedding
          </Link>
        </div>
      </section>
    </div>
  );
}