import { motion } from 'framer-motion';
import { MapPin, Calendar, Heart, ArrowRight, Sparkles, Wine, Church, Flower2, Ship } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FrancePage() {
  const regions = [
    {
      name: 'French Riviera',
      description: 'Glamorous coastal paradise with stunning Mediterranean views',
      image: 'https://imgs.search.brave.com/Q6nSV8mmpXEoAuWbD9W4gtV1xLeq4Ny1VpuNjZZjUiA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS50aW1lb3V0LmNv/bS9pbWFnZXMvMTA2/MTQ5MzgwLzc1MC81/NjIvaW1hZ2UuanBn',
      highlights: ['Nice', 'Cannes', 'Saint-Tropez', 'Monaco']
    },
    {
      name: 'Provence',
      description: 'Lavender fields, olive groves, and picturesque hilltop villages',
      image: 'https://imgs.search.brave.com/A4D2K21So6LXdNBxnv9eBlq3mT8nKl13MsrIkGw0lYw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDgy/MDMwMzAwL3Bob3Rv/L3NpbWlhbmUtbGEt/cm90b25kZS12aWxs/YWdlLWFuZC1sYXZl/bmRlci1wcm92ZW5j/ZS1mcmFuY2UuanBn/P2I9MSZzPTYxMng2/MTImdz0wJms9MjAm/Yz01ZzhKbnZhZ3Fl/cTNrV0hoeUFtVHpZ/a0E1SzhtaTduUmJu/QU02WGl0ZFZBPQ',
      highlights: ['Lavender Fields', 'Gordes', 'Luberon Valley', 'Aix-en-Provence']
    },
    {
      name: 'Château de Versailles',
      description: 'The epitome of French grandeur and royal elegance',
      image: 'https://imgs.search.brave.com/ODF5JQsUXQ9Yik2BQqdyc1Tjv5uEuMlnroyBDCg6fa8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNC8w/NC8wNy8wNy8xOS92/ZXJzYWlsbGVzLTMx/ODQ1OV9fMzQwLmpw/Zw',
      highlights: ['Hall of Mirrors', 'Royal Gardens', 'Grand Trianon', 'Marie Antoinette\'s Estate']
    }
  ];

  const features = [
    { icon: Church, label: 'Historic Châteaux', desc: 'Fairytale venues' },
    { icon: Flower2, label: 'Lavender Fields', desc: 'Purple paradise' },
    { icon: Wine, label: 'Champagne Region', desc: 'World-class bubbles' },
    { icon: Ship, label: 'Coastal Glamour', desc: 'Riviera elegance' }
  ];

  return (
    <div className="bg-white pt-[117px]">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://bp37mc8dd9.preview.c36.airoapp.ai/airo-assets/images/pages/locations/france"
            alt="French lavender fields with distant village"
            className="h-full w-full object-cover brightness-[0.9] saturate-[0.95]"
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>
        
        <div className="relative h-full flex items-center justify-center px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white max-w-4xl"
          >
            <p className="mb-4 uppercase tracking-[4px] text-[12px] md:text-[14px] font-light">
              L'Élégance Française
            </p>
            <h1 className="font-heading mb-6 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-tight">
              France
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl font-light italic mb-8">
              Elegance in Every Detail
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
              The Art of Refined Celebration
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-[#6F6F6F] mb-8">
              Experience the epitome of sophistication in France, where lavender fields meet Mediterranean shores and historic châteaux dot the countryside. From the glamorous French Riviera to the romantic vineyards of Provence, France embodies timeless elegance and refined luxury.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <feature.icon className="h-8 w-8 mx-auto mb-3 text-[#C9A7A0]" />
                  <h3 className="font-medium text-sm mb-1 text-[#6F6F6F]">{feature.label}</h3>
                  <p className="text-xs text-[#9A9A9A]">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Regions */}
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
              Enchanting Destinations
            </h2>
            <p className="text-[#6F6F6F] max-w-2xl mx-auto">
              Explore France's most romantic regions for your dream wedding
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {regions.map((region, index) => (
              <motion.div
                key={region.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-sm h-[400px] mb-4">
                  <img
                    src={region.image}
                    alt={region.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-500" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="font-heading text-2xl md:text-3xl mb-2">{region.name}</h3>
                    <p className="text-sm opacity-90">{region.description}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  {region.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-[#6F6F6F]">
                      <Sparkles className="h-4 w-4 text-[#C9A7A0]" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-16 bg-[#F2E8E6] px-4 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <Calendar className="h-8 w-8 text-[#C9A7A0]" />
              <div>
                <p className="uppercase tracking-[2px] text-[10px] text-[#9A9A9A] mb-1">
                  Best Time to Visit
                </p>
                <p className="text-[#6F6F6F] font-medium">June - September</p>
              </div>
            </div>
            <div className="flex items-center gap-4 justify-center md:justify-center">
              <MapPin className="h-8 w-8 text-[#C9A7A0]" />
              <div>
                <p className="uppercase tracking-[2px] text-[10px] text-[#9A9A9A] mb-1">
                  Popular Venues
                </p>
                <p className="text-[#6F6F6F] font-medium">Riviera • Provence • Versailles</p>
              </div>
            </div>
            <div className="flex items-center gap-4 justify-center md:justify-end">
              <Wine className="h-8 w-8 text-[#C9A7A0]" />
              <div>
                <p className="uppercase tracking-[2px] text-[10px] text-[#9A9A9A] mb-1">
                  Signature Experience
                </p>
                <p className="text-[#6F6F6F] font-medium">Champagne Tastings</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading mb-6 text-3xl md:text-4xl text-[#C9A7A0] font-light">
            Create Your French Fairytale
          </h2>
          <p className="text-[#6F6F6F] mb-8">
            From châteaux to coastal villas, let us plan your sophisticated French celebration.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 uppercase tracking-[2px] transition-all duration-500 px-10 py-5 text-[11px] bg-[#F2E8E6] text-[#6F6F6F] border border-transparent hover:bg-[#C9A7A0] hover:text-white"
          >
            <Heart className="h-4 w-4" />
            Begin Your Journey
          </Link>
        </div>
      </section>
    </div>
  );
}