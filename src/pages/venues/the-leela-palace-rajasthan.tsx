import { motion } from 'framer-motion';
import { Calendar, ChevronRight, Crown, MapPin, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import images from fwdvenues folder
import venueImage1 from '/fwdvenues/rajasthan(1).jpg';
import venueImage2 from '/fwdvenues/rajasthan(2).jpg';

export default function TheLeelaPalaceRajasthanPage() {
  const reasons = [
    {
      title: 'Royal Ambience',
      description: 'Experience the grandeur of Rajasthan with palace-style décor and heritage charm.',
    },
    {
      title: 'Scenic Lakeside Views',
      description: 'Exchange vows against the romantic backdrop of shimmering waters and sunsets.',
    },
    {
      title: 'Luxurious Accommodation',
      description: 'World-class rooms and suites offering comfort, elegance, and stunning views.',
    },
    {
      title: 'Grand Wedding Venues',
      description:
        'Beautiful indoor halls and outdoor spaces ideal for every function—from mehendi to reception.',
    },
    {
      title: 'Exquisite Catering',
      description: 'Curated menus with multi-cuisine delicacies and signature dining experiences.',
    },
    {
      title: 'Personalized Services',
      description: 'Dedicated team ensuring flawless planning and execution of every detail.',
    },
    {
      title: 'Perfect for Destination Weddings',
      description: 'A complete blend of luxury, tradition, and unforgettable hospitality.',
    },
  ];

  return (
    <div className="bg-white pt-[117px]">
      <title>The Leela Palace, Rajasthan | HEAVENLY WEDS</title>
      <meta
        name="description"
        content="Wedding at The Leela Palace, Rajasthan — a regal lakeside destination wedding experience in Udaipur."
      />

      {/* Hero */}
      <section className="relative h-[70vh] min-h-[560px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={venueImage1}
            alt="The Leela Palace Udaipur on Lake Pichola"
            className="h-full w-full object-cover"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src =
                'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=2400&q=80';
            }}
          />
          <div className="absolute inset-0 bg-black/35" />
        </div>

        <div className="relative h-full flex items-center justify-center px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white max-w-4xl"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Link to="/locations/india" className="text-sm hover:underline">
                India
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-sm">Rajasthan</span>
            </div>

            <h1 className="font-heading mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light">
              The Leela Palace, Rajasthan
            </h1>
            <p className="text-lg md:text-2xl font-light italic mb-8 max-w-2xl mx-auto">
              Wedding at The Leela Palace, Rajasthan
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                ✦ Royal Heritage
              </span>
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                ✦ Lakeside Vows
              </span>
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                ✦ Luxury Hospitality
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-8 bg-[#F2E8E6] px-4 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-[#C9A7A0]" />
              <span className="text-sm text-[#6F6F6F]">Udaipur, Rajasthan</span>
            </div>
            <div className="flex items-center gap-3">
              <Crown className="h-5 w-5 text-[#C9A7A0]" />
              <span className="text-sm text-[#6F6F6F]">Palace-style celebration</span>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="h-5 w-5 text-[#C9A7A0]" />
              <span className="text-sm text-[#6F6F6F]">Ideal for destination weddings</span>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section - Added second image */}
      <section className="py-12 px-4 md:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          >
            <div className="overflow-hidden rounded-sm">
              <img
                src={venueImage1}
                alt="The Leela Palace Udaipur - Heritage Architecture"
                className="w-full h-[300px] md:h-[400px] object-cover transition-transform duration-700 hover:scale-105"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src =
                    'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80';
                }}
              />
            </div>
            <div className="overflow-hidden rounded-sm">
              <img
                src={venueImage2}
                alt="The Leela Palace Udaipur - Lakeside View"
                className="w-full h-[300px] md:h-[400px] object-cover transition-transform duration-700 hover:scale-105"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src =
                    'https://images.unsplash.com/photo-1584551246679-258d6c2fe35a?auto=format&fit=crop&w=1200&q=80';
                }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 px-4 md:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading mb-6 text-3xl md:text-4xl text-[#C9A7A0] font-light">
              Celebrate your love in unmatched luxury
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-[#6F6F6F] mb-6">
              Celebrate your love in unmatched luxury at The Leela Palace Udaipur—a breathtaking
              destination where royal heritage meets modern elegance.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-[#6F6F6F]">
              Nestled on the serene banks of Lake Pichola, this iconic palace hotel offers a magical
              setting for an unforgettable destination wedding. With its grand architecture, opulent
              interiors, and panoramic lake views, The Leela Palace creates the perfect backdrop for a
              wedding that feels truly regal.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Reasons */}
      <section className="py-20 bg-[#FAFAFA] px-4 md:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="font-heading mb-4 text-3xl md:text-4xl text-[#C9A7A0] font-light">
              Why Choose The Leela Palace
            </h2>
            <p className="text-[#6F6F6F] max-w-2xl mx-auto">
              A perfect blend of luxury, tradition, and unforgettable hospitality.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="bg-white rounded-sm"
                style={{ border: '1px solid #ECECEC', padding: '28px' }}
              >
                <div className="flex items-start gap-3 mb-3">
                  <Sparkles className="h-5 w-5 text-[#C9A7A0] mt-0.5" />
                  <h3 className="font-heading" style={{ fontSize: '20px', color: '#6F6F6F', fontWeight: 500 }}>
                    {reason.title}
                  </h3>
                </div>
                <p className="text-sm" style={{ lineHeight: '1.8', color: '#9A9A9A' }}>
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="py-20 px-4 md:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading mb-6 text-3xl md:text-4xl text-[#C9A7A0] font-light">
              Celebrate your big day like royalty
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-[#6F6F6F] mb-10">
              At Heavenly Weds, we bring your dream wedding to life at The Leela Palace with seamless
              planning, stunning décor, and exceptional experiences. Celebrate your big day like
              royalty in the heart of Rajasthan.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center uppercase tracking-[2px] transition-all duration-500 px-8 py-4 text-[11px] bg-[#F2E8E6] text-[#6F6F6F] border border-transparent hover:bg-[#C9A7A0] hover:text-white"
            >
              Enquire Now
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}