import { motion } from 'framer-motion';
import { MapPin, Calendar, Heart, ArrowRight, Crown, Music, Coffee, Feather, Gem } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function IndiaPage() {
  const destinations = [
    {
      name: 'Udaipur',
      description: 'The City of Lakes, with magnificent palaces floating on tranquil waters',
      image: 'https://imgs.search.brave.com/MDT2rOuGW0yv4aSjsVr0YWjNP46HfTxIyGrX1rSky6g/rs:fit:196:116:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by91/ZGFpcHVyLWNpdHkt/dmlldy1mcm9tLWhv/dGVsLWJhbGNvbnkt/cmFqYXN0aGFuLWlu/ZGlhXzUzODc2LTY1/NTA1LmpwZz9zZW10/PWFpc19oeWJyaWQm/dz03NDAmcT04MA',
      highlights: ['Taj Lake Palace', 'City Palace', 'Sahelion-ki-Bari']
    },
    {
      name: 'Jaipur',
      description: 'The Pink City, where royal heritage meets vibrant culture',
      image: 'https://imgs.search.brave.com/N0Sz4KctpxBPfY-59Pfxjhh54rYAmfr29wDiAoIiWIk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS50YWNkbi5jb20v/bWVkaWEvYXR0cmFj/dGlvbnMtc3BsaWNl/LXNwcC0zNjB4MjQw/LzE1LzcwLzAzLzg2/LmpwZw',
      highlights: ['Amber Fort', 'Palace of Winds', 'Rambagh Palace']
    },
    {
      name: 'Goa',
      description: 'Tropical paradise with golden beaches and Portuguese-influenced architecture',
      image: 'https://imgs.search.brave.com/GTDyjCUZve9aUvKUj_ulu3Uncpk82ZXATjPFGqoKSr0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE3/MTU4NDUxOC9waG90/by9kb25hLXBhdWxh/LWNhcGUtdmlld3Bv/aW50LWdvYS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9ODdG/bVNWbkxnZTNIQ0g5/cWlUa05pLUpmX0l2/eDlpY2ZFNEhxZjhf/czBrdz0',
      highlights: ['Beachfront Resorts', 'Portuguese Churches', 'Spice Plantations']
    }
  ];

  const experiences = [
    { icon: Crown, label: 'Royal Palaces', description: 'Live like royalty' },
    { icon: Feather, label: 'Traditional Ceremonies', description: 'Rich cultural rituals' },
    { icon: Music, label: 'Vibrant Celebrations', description: 'Music & dance' },
    { icon: Gem, label: 'Luxury Hospitality', description: 'Incredible service' }
  ];

  return (
    <div className="bg-white pt-[117px]">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://bp37mc8dd9.preview.c36.airoapp.ai/airo-assets/images/pages/locations/india"
            alt="Indian palace at sunset with traditional architecture"
            className="h-full w-full object-cover brightness-[0.9]"
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
              भारत
            </p>
            <h1 className="font-heading mb-6 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-tight">
              India
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl font-light italic mb-8">
              Vibrant Colors, Rich Traditions
            </p>
            <div className="w-24 h-[2px] bg-white/60 mx-auto" />
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
              A Tapestry of Traditions
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-[#6F6F6F] mb-8">
              Immerse yourself in the majestic beauty of India, where royal palaces, vibrant traditions, and warm hospitality create unforgettable celebrations. From the pink palaces of Rajasthan to the tropical beaches of Goa, India offers a kaleidoscope of colors, cultures, and extraordinary venues.
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

      {/* Destinations */}
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
              Royal Destinations
            </h2>
            <p className="text-[#6F6F6F] max-w-2xl mx-auto">
              Discover India's most enchanting locations for your celebration
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {destinations.map((dest, index) => (
              <motion.div
                key={dest.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-sm h-[450px] mb-4">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="font-heading text-3xl mb-2">{dest.name}</h3>
                    <p className="text-sm opacity-90 mb-3">{dest.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {dest.highlights.slice(0, 2).map((highlight, idx) => (
                        <span key={idx} className="text-xs bg-white/20 px-3 py-1 rounded-full">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Experience */}
      <section className="py-20 bg-[#F2E8E6] px-4 md:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading mb-6 text-3xl md:text-4xl text-[#C9A7A0] font-light">
              The Great Indian Wedding
            </h2>
            <p className="text-[#6F6F6F] mb-8 leading-relaxed">
              Experience the magic of a traditional Indian wedding - a multi-day celebration filled with vibrant ceremonies, 
              exquisite cuisine, and heartfelt rituals. From the Mehendi to the Sangeet, every moment is a feast for the senses.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {['Mehendi Ceremony', 'Sangeet Night', 'Wedding Rituals', 'Grand Reception'].map((item, index) => (
                <div key={item} className="bg-white p-4 rounded-sm">
                  <p className="text-xs text-[#6F6F6F] font-medium">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-16 bg-white px-4 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <Calendar className="h-8 w-8 text-[#C9A7A0]" />
              <div>
                <p className="uppercase tracking-[2px] text-[10px] text-[#9A9A9A] mb-1">
                  Best Time to Visit
                </p>
                <p className="text-[#6F6F6F] font-medium">October - March</p>
              </div>
            </div>
            <div className="flex items-center gap-4 justify-center md:justify-center">
              <MapPin className="h-8 w-8 text-[#C9A7A0]" />
              <div>
                <p className="uppercase tracking-[2px] text-[10px] text-[#9A9A9A] mb-1">
                  Popular Venues
                </p>
                <p className="text-[#6F6F6F] font-medium">Udaipur • Jaipur • Goa</p>
              </div>
            </div>
            <div className="flex items-center gap-4 justify-center md:justify-end">
              <Coffee className="h-8 w-8 text-[#C9A7A0]" />
              <div>
                <p className="uppercase tracking-[2px] text-[10px] text-[#9A9A9A] mb-1">
                  Hospitality
                </p>
                <p className="text-[#6F6F6F] font-medium">Atithi Devo Bhava</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 md:px-8 bg-[#FAFAFA]">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading mb-6 text-3xl md:text-4xl text-[#C9A7A0] font-light">
            Plan Your Royal Celebration
          </h2>
          <p className="text-[#6F6F6F] mb-8">
            Let us help you create an unforgettable Indian wedding experience, blending tradition with luxury.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 uppercase tracking-[2px] transition-all duration-500 px-10 py-5 text-[11px] bg-[#F2E8E6] text-[#6F6F6F] border border-transparent hover:bg-[#C9A7A0] hover:text-white"
          >
            <Heart className="h-4 w-4" />
            Start Planning
          </Link>
        </div>
      </section>
    </div>
  );
}