import { motion } from 'framer-motion';
import { 
  MapPin, Calendar, Heart, ArrowRight, Star, 
  Camera, Ship, Building, Wine, Users, Sun,
  ChevronRight, Clock, Shield, Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LakeComoPage() {
  const villas = [
    {
      name: 'Villa Balbianello',
      description: 'One of Lake Como\'s most iconic villas, perched on a wooded promontory',
      capacity: '150 guests',
      features: ['Terrace gardens', 'Loggia balcony', 'Waterfront access', 'Historic halls'],
      image: 'https://imgs.search.brave.com/iIEfUr9Djew3IgszA3iDYQRGTO2bmRkNjOXeYVbQ09U/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS50YWNkbi5jb20v/bWVkaWEvYXR0cmFj/dGlvbnMtc3BsaWNl/LXNwcC02NzR4NDQ2/LzE1L2I0LzkyLzQw/LmpwZw'
    },
    {
      name: 'Villa del Balbianello',
      description: '18th-century villa with stunning terraced gardens and lake views',
      capacity: '200 guests',
      features: ['Ancient park', 'Lakeside jetty', 'Frescoed rooms', 'Panoramic terraces'],
      image: 'https://imgs.search.brave.com/iIEfUr9Djew3IgszA3iDYQRGTO2bmRkNjOXeYVbQ09U/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS50YWNkbi5jb20v/bWVkaWEvYXR0cmFj/dGlvbnMtc3BsaWNl/LXNwcC02NzR4NDQ2/LzE1L2I0LzkyLzQw/LmpwZw'
    },
    {
      name: 'Villa d\'Este',
      description: 'Legendary hotel with Renaissance architecture and modern luxury',
      capacity: '300 guests',
      features: ['Floating pool', 'Botanical park', 'Michelin dining', 'Spa wellness'],
      image: 'https://imgs.search.brave.com/enzW5dkNhsqyATN25tBOD8k-JfRvfuv7e1bLONDpPyU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTU1/ODgxMTk5L3Bob3Rv/L2l0YWx5LWxvbWJh/cmR5LWNlcm5vYmJp/by12aWxsYS1kZXN0/ZS5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9SWFIN25HNXlo/dXhrTHByS2t0eVBQ/Y0tKRkJ4NGR3eGM0/LW96VnY1OWtKdz0'
    }
  ];

  const experiences = [
    {
      icon: Ship,
      title: 'Lake Cruises',
      description: 'Private boat transfers and cocktail cruises on historic watercraft'
    },
    {
      icon: Wine,
      title: 'Italian Cuisine',
      description: 'Michelin-starred catering featuring regional Lombard specialties'
    },
    {
      icon: Camera,
      title: 'Scenic Photography',
      description: 'Breathtaking backdrops for your wedding album'
    },
    {
      icon: Building,
      title: 'Heritage Stays',
      description: 'Luxury accommodations in historic villas for you and your guests'
    }
  ];

  const gallery = [
    'https://imgs.search.brave.com/_gaiuEy7RCNqZtIQzdbox2vzmqaKNdZ7wJbg-NKm8Ew/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9ibG9n/Z2VyLmdvb2dsZXVz/ZXJjb250ZW50LmNv/bS9pbWcvYi9SMjl2/WjJ4bC9BVnZYc0Vq/QmRINFlXcGN4NUls/MGJOX3R4ZkpjcGRf/ZjJHMHpjSTg0VHh1/MC1iaWp4THdlX1oy/bEVzUXBCalZJbjRp/MkpIMjR5b0tvSmZC/cjdzcFBRLU5pTWV5/NUxHV1NSMDhKa3cx/RWNVSW5RX2J6MDEz/ekpzaG91UUF0a2ND/ZEZVc0pKQi1TS1F5/TDIzY0VsZy9zMTYw/MC9WaWxsYStCYWxi/aWFuZWxsby5qcGVn',
    'https://imgs.search.brave.com/iIEfUr9Djew3IgszA3iDYQRGTO2bmRkNjOXeYVbQ09U/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS50YWNkbi5jb20v/bWVkaWEvYXR0cmFj/dGlvbnMtc3BsaWNl/LXNwcC02NzR4NDQ2/LzE1L2I0LzkyLzQw/LmpwZw',
    'https://imgs.search.brave.com/enzW5dkNhsqyATN25tBOD8k-JfRvfuv7e1bLONDpPyU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTU1/ODgxMTk5L3Bob3Rv/L2l0YWx5LWxvbWJh/cmR5LWNlcm5vYmJp/by12aWxsYS1kZXN0/ZS5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9SWFIN25HNXlo/dXhrTHByS2t0eVBQ/Y0tKRkJ4NGR3eGM0/LW96VnY1OWtKdz0',
    'https://imgs.search.brave.com/enzW5dkNhsqyATN25tBOD8k-JfRvfuv7e1bLONDpPyU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTU1/ODgxMTk5L3Bob3Rv/L2l0YWx5LWxvbWJh/cmR5LWNlcm5vYmJp/by12aWxsYS1kZXN0/ZS5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9SWFIN25HNXlo/dXhrTHByS2t0eVBQ/Y0tKRkJ4NGR3eGM0/LW96VnY1OWtKdz0'
  ];

  return (
    <div className="bg-white pt-[117px]">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://imgs.search.brave.com/JOH-eCFiOcr08khYJIyHalbdbxo1S9jgeanoyWXnqyo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXM4LmFscGhhY29k/ZXJzLmNvbS84OTAv/dGh1bWJiaWctODkw/MDI3LndlYnA"
            alt="Lake Como with villas and mountains"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
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
              <span className="text-sm">Lake Como</span>
            </div>
            <h1 className="font-heading mb-6 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light">
              Lake Como
            </h1>
            <p className="text-xl md:text-2xl font-light italic mb-8 max-w-2xl mx-auto">
              Where Renaissance elegance meets alpine beauty
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                ✦ 150+ Weddings Hosted
              </span>
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                ✦ Historic Villas
              </span>
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                ✦ Lakefront Ceremonies
              </span>
            </div>
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

      {/* Quick Facts Bar */}
      <section className="py-8 bg-[#F2E8E6] px-4 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-3">
              <Users className="h-5 w-5 text-[#C9A7A0]" />
              <span className="text-sm text-[#6F6F6F]">Up to 300 guests</span>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="h-5 w-5 text-[#C9A7A0]" />
              <span className="text-sm text-[#6F6F6F]">Apr - Oct peak season</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-[#C9A7A0]" />
              <span className="text-sm text-[#6F6F6F]">45 min from Milan</span>
            </div>
            <div className="flex items-center gap-3">
              <Shield className="h-5 w-5 text-[#C9A7A0]" />
              <span className="text-sm text-[#6F6F6F]">Exclusive venues</span>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 md:py-28 px-4 md:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading mb-6 text-3xl md:text-4xl text-[#C9A7A0] font-light">
              Romance on Italy's Most Romantic Lake
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-[#6F6F6F] mb-8">
              Lake Como has captivated visitors for centuries with its dramatic alpine scenery, 
              historic villas, and timeless elegance. Imagine saying "I do" on a terrace overlooking 
              the shimmering waters, with the mountains as your backdrop. Our curated selection of 
              venues ensures your wedding is as unique as your love story.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Villas */}
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
              Historic Villas
            </h2>
            <p className="text-[#6F6F6F] max-w-2xl mx-auto">
              Choose from Lake Como's most prestigious venues for your celebration
            </p>
          </motion.div>

          <div className="space-y-20">
            {villas.map((villa, index) => (
              <motion.div
                key={villa.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className={`grid gap-8 lg:gap-12 xl:gap-16 lg:grid-cols-2 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative overflow-hidden rounded-sm h-[400px] lg:h-[500px] group">
                    <img
                      src={villa.image}
                      alt={villa.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-500" />
                    
                    {/* Capacity Badge */}
                    <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-sm">
                      <p className="text-xs text-[#6F6F6F]">Capacity</p>
                      <p className="text-sm font-medium text-[#C9A7A0]">{villa.capacity}</p>
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <h3 className="font-heading mb-4 text-3xl md:text-4xl text-[#C9A7A0] font-light">
                    {villa.name}
                  </h3>
                  <p className="text-[#6F6F6F] mb-6 leading-relaxed">
                    {villa.description}
                  </p>
                  
                  <div className="mb-8">
                    <p className="mb-3 uppercase tracking-[2px] text-[11px] text-[#9A9A9A]">
                      Venue Features
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {villa.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <Sparkles className="h-4 w-4 text-[#C9A7A0]" />
                          <span className="text-sm text-[#6F6F6F]">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    to={`/venues/italy/lake-como/${villa.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center gap-2 uppercase tracking-[2px] transition-all duration-500 px-8 py-4 text-[11px] bg-[#F2E8E6] text-[#6F6F6F] border border-transparent hover:bg-[#C9A7A0] hover:text-white"
                  >
                    View Villa Details
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 px-4 md:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading mb-4 text-3xl md:text-4xl text-[#C9A7A0] font-light">
              Lake Como Moments
            </h2>
            <p className="text-[#6F6F6F]">A glimpse into weddings at this magical destination</p>
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
                  alt={`Lake Como wedding ${index + 1}`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Wedding Experiences */}
      <section className="py-20 bg-[#F2E8E6] px-4 md:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading mb-4 text-3xl md:text-4xl text-[#C9A7A0] font-light">
              The Complete Experience
            </h2>
            <p className="text-[#6F6F6F] max-w-2xl mx-auto">
              Beyond the ceremony, create unforgettable memories with these exclusive experiences
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
                className="bg-white p-8 text-center rounded-sm"
              >
                <exp.icon className="h-10 w-10 mx-auto mb-4 text-[#C9A7A0]" />
                <h3 className="font-heading mb-2 text-xl text-[#C9A7A0]">{exp.title}</h3>
                <p className="text-sm text-[#6F6F6F]">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading mb-6 text-3xl md:text-4xl text-[#C9A7A0] font-light">
            Begin Your Lake Como Love Story
          </h2>
          <p className="text-[#6F6F6F] mb-8">
            Let our local experts help you plan the perfect Italian wedding on the shores of Lake Como.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 uppercase tracking-[2px] transition-all duration-500 px-10 py-5 text-[11px] bg-[#F2E8E6] text-[#6F6F6F] border border-transparent hover:bg-[#C9A7A0] hover:text-white"
            >
              <Heart className="h-4 w-4" />
              Inquire About Availability
            </Link>
            <Link
              to="/venues/italy"
              className="inline-flex items-center gap-2 uppercase tracking-[2px] transition-all duration-500 px-10 py-5 text-[11px] border border-[#C9A7A0] text-[#6F6F6F] hover:bg-[#C9A7A0] hover:text-white"
            >
              Explore More Italian Venues
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}