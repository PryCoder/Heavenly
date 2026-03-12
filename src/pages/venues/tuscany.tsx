import { motion } from 'framer-motion';
import { 
  MapPin, Calendar, Heart, ArrowRight, Star, 
  Sun, Wine, TreePine, Home, Users, Coffee,
  ChevronRight, Mountain, Grape, Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TuscanyPage() {
  const estates = [
    {
      name: 'Borgo Santo Pietro',
      description: 'Luxurious estate with organic farm, spa, and Michelin-starred restaurant',
      capacity: '180 guests',
      features: ['Organic farm', 'Wine cellar', 'Thermal spa', 'Cooking school'],
      image: 'https://imgs.search.brave.com/p4WPezAwkOLmciA_M1bCcypjGL80xgo4QNz0RaleftY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/dGhlbHV4ZXZveWFn/ZXIuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDE5LzA0L0Jv/cmdvLVNhbnRvLVBp/ZXRyby1UcmF0dG9y/aWEtU3VsbC1BbGJl/cm8tVGVycmFjZS03/Mjh4NTQ2LmpwZw'
    },
    {
      name: 'Castello di Vicarello',
      description: '11th-century castle with panoramic views of the Tuscan hills',
      capacity: '120 guests',
      features: ['Medieval tower', 'Infinity pool', 'Vineyards', 'Olive groves'],
      image: 'https://imgs.search.brave.com/p4WPezAwkOLmciA_M1bCcypjGL80xgo4QNz0RaleftY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/dGhlbHV4ZXZveWFn/ZXIuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDE5LzA0L0Jv/cmdvLVNhbnRvLVBp/ZXRyby1UcmF0dG9y/aWEtU3VsbC1BbGJl/cm8tVGVycmFjZS03/Mjh4NTQ2LmpwZw'
    },
    {
      name: 'Villa La Massa',
      description: 'Renaissance villa on the banks of the Arno River near Florence',
      capacity: '250 guests',
      features: ['Riverfront terrace', 'Historic chapel', 'Italian gardens', 'Luxury suites'],
      image: 'https://imgs.search.brave.com/5WW-AeqBvYIal8p5lXB2FxhldY7FDsD4ynU1v57KpMA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aGVs/dXh1cnl0cmF2ZWxi/b29rLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyNS8xMS9M/dXh1cnktVmlsbGEt/VHVzY2FueS1JdGFs/eS1DYXN0ZWxsby1k/aS1WaWNhcmVsbG8t/NzMuanBn'
    }
  ];

  const highlights = [
    {
      icon: Mountain,
      title: 'Rolling Hills',
      description: 'Iconic Tuscan landscape with cypress-lined roads'
    },
    {
      icon: Grape,
      title: 'Wine Regions',
      description: 'Chianti, Brunello, and Montepulciano vineyards'
    },
    {
      icon: TreePine,
      title: 'Medieval Towns',
      description: 'Florence, Siena, San Gimignano nearby'
    },
    {
      icon: Sun,
      title: 'Mild Climate',
      description: 'Perfect weather from April through October'
    }
  ];

  const gallery = [
    '/airo-assets/images/venues/italy/tuscany/gallery-1',
    '/airo-assets/images/venues/italy/tuscany/gallery-2',
    '/airo-assets/images/venues/italy/tuscany/gallery-3',
    '/airo-assets/images/venues/italy/tuscany/gallery-4'
  ];

  return (
    <div className="bg-white pt-[117px]">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://imgs.search.brave.com/gx6nZoI23pKKQjZQBA-jslzqm8bAwimLJPIIBfkSVOk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjIz/OTAwNDQ5Ni9waG90/by90dXNjYW55LWl0/YWx5LndlYnA_YT0x/JmI9MSZzPTYxMng2/MTImdz0wJms9MjAm/Yz1oam1ZdENCS1BR/UTRaU2l1WmU1Vk1z/QkluYVVrRmdOQXBj/bnZmeHVjRWNjPQ"
            alt="Tuscan hills with cypress trees and villa"
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
              <Link to="/locations/italy" className="text-sm hover:underline">Italy</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-sm">Tuscany</span>
            </div>
            <h1 className="font-heading mb-6 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light">
              Tuscany
            </h1>
            <p className="text-xl md:text-2xl font-light italic mb-8 max-w-2xl mx-auto">
              Where the countryside tells stories of romance
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                ✦ Vineyard Weddings
              </span>
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                ✦ Historic Estates
              </span>
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                ✦ Farm-to-Table Cuisine
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
              <span className="text-sm text-[#6F6F6F]">Up to 250 guests</span>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="h-5 w-5 text-[#C9A7A0]" />
              <span className="text-sm text-[#6F6F6F]">May - October</span>
            </div>
            <div className="flex items-center gap-3">
              <Wine className="h-5 w-5 text-[#C9A7A0]" />
              <span className="text-sm text-[#6F6F6F]">Wine Country</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-[#C9A7A0]" />
              <span className="text-sm text-[#6F6F6F]">Florence & Siena nearby</span>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction with Highlights */}
      <section className="py-20 px-4 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading mb-6 text-3xl md:text-4xl text-[#C9A7A0] font-light">
                The Heart of Italian Romance
              </h2>
              <p className="text-[#6F6F6F] mb-6 leading-relaxed">
                Tuscany needs no introduction. Its rolling hills dotted with cypress trees, 
                medieval hilltop towns, and world-renowned vineyards create the quintessential 
                Italian backdrop for your wedding. Whether you dream of saying "I do" in a 
                historic castle, a rustic farmhouse, or a luxurious estate, Tuscany offers 
                endless possibilities for your celebration.
              </p>
              <p className="text-[#6F6F6F] leading-relaxed">
                Our curated collection of venues represents the very best of Tuscan hospitality, 
                each offering unique charm while maintaining the highest standards of service 
                and cuisine.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {highlights.map((item, index) => (
                <div key={item.title} className="bg-[#FAFAFA] p-6 text-center rounded-sm">
                  <item.icon className="h-8 w-8 mx-auto mb-3 text-[#C9A7A0]" />
                  <h3 className="font-medium text-sm mb-1 text-[#6F6F6F]">{item.title}</h3>
                  <p className="text-xs text-[#9A9A9A]">{item.description}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Estates */}
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
              Exclusive Tuscan Estates
            </h2>
            <p className="text-[#6F6F6F] max-w-2xl mx-auto">
              Discover our handpicked selection of venues, each offering unique character and luxury
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {estates.map((estate, index) => (
              <motion.div
                key={estate.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-sm h-[350px] mb-4">
                  <img
                    src={estate.image}
                    alt={estate.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="text-sm opacity-90 mb-1">{estate.capacity}</p>
                    <h3 className="font-heading text-2xl mb-2">{estate.name}</h3>
                  </div>
                </div>

                <p className="text-[#6F6F6F] text-sm mb-3">{estate.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {estate.features.slice(0, 3).map((feature, idx) => (
                    <span key={idx} className="text-xs bg-[#F2E8E6] px-3 py-1 rounded-full text-[#6F6F6F]">
                      {feature}
                    </span>
                  ))}
                </div>

                <Link
                  to={`/venues/italy/tuscany/${estate.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center gap-2 text-[#C9A7A0] hover:gap-3 transition-all text-sm"
                >
                  Explore Venue
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Wine Region Feature */}
      <section className="py-20 px-4 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <h2 className="font-heading mb-4 text-3xl md:text-4xl text-[#C9A7A0] font-light">
                A Toast to Love
              </h2>
              <p className="text-lg text-[#C9A7A0] mb-4 italic">
                Celebrate with the world's finest wines
              </p>
              <p className="text-[#6F6F6F] mb-6 leading-relaxed">
                Tuscany is home to some of the most celebrated wine regions in the world. 
                From the rolling hills of Chianti to the prestigious Brunello di Montalcino, 
                your wedding can include exclusive wine tastings, cellar tours, and custom 
                labels for your celebration.
              </p>
              <div className="space-y-3">
                {['Chianti Classico', 'Brunello di Montalcino', 'Vino Nobile di Montepulciano', 'Vernaccia di San Gimignano'].map((wine, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Grape className="h-4 w-4 text-[#C9A7A0]" />
                    <span className="text-sm text-[#6F6F6F]">{wine}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <div className="relative overflow-hidden rounded-sm h-[400px]">
                <img
                  src="https://imgs.search.brave.com/3uv4kVcU2rKwKpgQDC4HtFJfhhxNQ8gq41BaK0XWH5Y/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/c2h1dHRlcnN0b2Nr/LmNvbS9pbWFnZS1w/aG90by9sYW5kc2Nh/cGUtdHVzY2FueS1z/dW5zZXQtc3VtbWVy/LTI2MG53LTEwNjk5/NDE3NC5qcGc"
                  alt="Tuscan vineyard at sunset"
                  className="h-full w-full object-cover"
                />
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
              Tuscan Weddings
            </h2>
            <p className="text-[#6F6F6F]">Memories captured in the golden light of Tuscany</p>
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
                  alt={`Tuscan wedding ${index + 1}`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading mb-6 text-3xl md:text-4xl text-[#C9A7A0] font-light">
            Plan Your Tuscan Dream Wedding
          </h2>
          <p className="text-[#6F6F6F] mb-8">
            From vineyard ceremonies to castle receptions, let us help you create an unforgettable celebration in the heart of Italy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 uppercase tracking-[2px] transition-all duration-500 px-10 py-5 text-[11px] bg-[#F2E8E6] text-[#6F6F6F] border border-transparent hover:bg-[#C9A7A0] hover:text-white"
            >
              <Heart className="h-4 w-4" />
              Start Planning
            </Link>
            <Link
              to="/venues/italy"
              className="inline-flex items-center gap-2 uppercase tracking-[2px] transition-all duration-500 px-10 py-5 text-[11px] border border-[#C9A7A0] text-[#6F6F6F] hover:bg-[#C9A7A0] hover:text-white"
            >
              View All Italian Venues
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}