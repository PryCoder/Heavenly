import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Users, Calendar, Star, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

// Import images
import maternityi1 from '/nimishadipak/fwdmaternityphotoshoot/mat-h-1 (1).jpg';
import maternityi2 from '/nimishadipak/fwdmaternityphotoshoot/mat-h-1 (2).jpg';
import maternityi3 from '/nimishadipak/fwdmaternityphotoshoot/mat-h-1 (3).jpg';
import maternityi4 from '/nimishadipak/fwdmaternityphotoshoot/mat-h-1 (4).jpg';
import preweddingi1 from '/prewedding/fwdpreweddingshoot/pre-wedding - hw-1 (1).jpg';
import preweddingi2 from '/prewedding/fwdpreweddingshoot/pre-wedding - hw-1 (2).jpg';
import preweddingi3 from '/prewedding/fwdpreweddingshoot/pre-wedding - hw-1 (3).jpg';
import preweddingi4 from '/prewedding/fwdpreweddingshoot/pre-wedding - hw-1 (4).jpg';
import preweddingi5 from '/prewedding/fwdpreweddingshoot/pre-wedding - hw-1 (5).jpg';
import preweddingi6 from '/prewedding/fwdpreweddingshoot/pre-wedding - hw-1 (6).jpg';
import weddingImage1 from '/shivammansi/fwdwedding/wd-2 (1).jpg';
import weddingImage2 from '/shivammansi/fwdwedding/wed-1 (7).jpg';
import weddingImage3 from '/shivammansi/fwdwedding/wed-1 (4).jpg';
import weddingImage4 from '/shivammansi/fwdwedding/wd-2 (2).jpg';
import weddingImage6 from '/shivammansi/fwdwedding/wd-2 (2).jpg';
import weddingImage7 from '/shivammansi/fwdwedding/wed-1 (3).jpg';
import weddingImage8 from '/shivammansi/fwdwedding/wed-1 (4).jpg';
import weddingImage9 from '/shivammansi/fwdwedding/wed-1 (1).jpg';
import christianWed1 from '/christianwed/fwdchristianwedding/chr-1.jpg';
import christianWed2 from '/christianwed/fwdchristianwedding/chr-1 (2).jpg';
import christianWed3 from '/christianwed/fwdchristianwedding/chr-1 (3).jpg';
import christianWed4 from '/christianwed/fwdchristianwedding/chr-1.jpg';
import bride1 from '/brideshoot/fwdbridephotoshoot/br-H-1 (3).jpg';
import bride2 from '/brideshoot/fwdbridephotoshoot/br-H-1 (4).jpg';
import bride3 from '/brideshoot/fwdbridephotoshoot/br-H-1 (5).jpg';
import bride4 from '/brideshoot/fwdbridephotoshoot/br-H-1 (1).jpg';
import wedding1 from '/bhaktisagar/fwdheavenlywedsphotos/bk-h-1 (1).jpg';
import wedding2 from '/bhaktisagar/fwdheavenlywedsphotos/bk-h-1 (4).jpg';
import wedding3 from '/bhaktisagar/fwdheavenlywedsphotos/bk-h-1 (2).jpg';
import wedding4 from '/bhaktisagar/fwdheavenlywedsphotos/bk-h-1 (3).jpg';
import wedding5 from '/bhaktisagar/fwdheavenlywedsphotos/bk-h-1 (5).jpg';
import wedding6 from '/bhaktisagar/fwdheavenlywedsphotos/bk-h-1 (6).jpg';
import rohinisahil1 from '/rohinisahil/fwdmaternityshoot/mat-h-1 (5).jpg';
import rohinisahil2 from '/rohinisahil/fwdmaternityshoot/mat-h-1 (6).jpg';
import rohinisahil3 from '/rohinisahil/fwdmaternityshoot/mat-h-1 (7).jpg';

interface Wedding {
  id: string;
  couple: string;
  location: string;
  date: string;
  guests: number;
  image: string;
  category: string;
  description: string;
  gallery: string[];
  story: string;
}

interface Testimonial {
  id: string;
  name: string;
  content: string;
  type: string;
}

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedWedding, setSelectedWedding] = useState<Wedding | null>(null);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const weddingFilms = [
    { id: 'film-1', title: 'Wedding Film 1', src: '/wedding film -1 (1) (1).mp4' },
    { id: 'film-2', title: 'Wedding Film 2', src: '/wedding film - 3 (1).mp4' },
    { id: 'film-3', title: 'Wedding Film 3', src: '/weddiing 4. (1).mp4' },
    { id: 'film-4', title: 'Wedding Film 4', src: '/wedding - 5 (1).mp4' },
    { id: 'film-5', title: 'Wedding Film 5', src: '/wedding 6 (1).mp4' },
    { id: 'film-6', title: 'Wedding Film 6', src: '/wedding - 7_compressed.mp4' },
  ];

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'wedding', label: 'Wedding' },
    { id: 'pre-wedding', label: 'Pre - wedding' },
    { id: 'maternity', label: 'Maternity' },
    { id: 'destination', label: 'Destination' },
    { id: 'engagement', label: 'Engagement' },
    { id: 'haldi', label: 'Haldi' },
    { id: 'reception', label: 'Reception' },
    { id: 'mehendi', label: 'Mehendi' },
    { id: 'post-wedding', label: 'Post Wedding' },
    { id: 'bride', label: 'Bride' },
  ];

  const weddings: Wedding[] = [
    {
      id: 'shivam-mansi',
      couple: 'Shivam & Mansi',
      location: 'Udaipur, Rajasthan',
      date: 'February 2025',
      guests: 180,
      image: weddingImage1,
      category: 'wedding',
      description: 'A beautifully captured wedding celebration with every moment perfectly preserved.',
      gallery: [weddingImage1, weddingImage2, weddingImage9, weddingImage3, weddingImage4, weddingImage7, weddingImage8, weddingImage6],
      story: 'Shivam and Mansi\'s wedding was a beautiful blend of tradition and modernity. Set in Udaipur, their celebration spanned three days filled with laughter, tears of joy, and unforgettable moments. From the vibrant mehendi ceremony to the emotional varmala, every moment was captured with precision and artistry.'
    },
    {
      id: 'roy-rachel',
      couple: 'Roy & Rachel',
      location: 'Goa, India',
      date: 'December 2024',
      guests: 220,
      image: christianWed1,
      category: 'wedding',
      description: 'A magical beachfront wedding with stunning decor and seamless execution.',
      gallery: [christianWed1, christianWed2, christianWed3, christianWed4],
      story: 'Roy and Rachel exchanged vows on a pristine Goa beach at sunset. The Christian wedding ceremony was intimate yet grand, with the sound of waves providing a natural symphony. The reception under the stars featured a live band, delicious seafood, and dancing that continued until dawn.'
    },
    {
      id: 'Sandesh & Sayli',
      couple: 'Sandesh & Sayli',
      location: 'Mumbai, India',
      date: 'November 2024',
      guests: 0,
      image: preweddingi1,
      category: 'pre-wedding',
      description: 'A romantic pre-wedding photoshoot capturing beautiful moments in the City of Lakes.',
      gallery: [preweddingi1, preweddingi2, preweddingi3, preweddingi4, preweddingi5, preweddingi6],
      story: 'Nishita and Raj chose the majestic city of Udaipur for their pre-wedding shoot. The couple explored the City Palace, took a romantic boat ride on Lake Pichola, and captured stunning sunset moments at Sajjangarh Fort. Every frame tells a story of their love and the magical aura of Udaipur.'
    },
    {
      id: 'bhaktisagar-pooja',
      couple: 'Bhaktisagar & Pooja',
      location: 'Mumbai, India',
      date: ' February 2023',
      guests: 350,
      image: wedding1,
      category: 'wedding',
      description: 'A grand palace wedding celebrating rich cultural traditions with cinematic brilliance.',
      gallery: [wedding1, wedding2, wedding3, wedding4, wedding5, wedding6],
      story: 'Bhaktisagar and Pooja\'s royal wedding at a heritage palace in Jaipur was a spectacle of colors, traditions, and grandeur. The baraat arrived on decorated elephants, the bride made a stunning entry in a vintage car, and the palace was transformed into a fairy-tale setting with thousands of lights and flowers.'
    },
    {
      id: 'nimisha-dipak',
      couple: 'Nimisha & Dipak',
      location: 'Mumbai, India',
      date: 'August  2024',
      guests: 0,
      image: maternityi1,
      category: 'maternity',
      description: 'Capturing the beautiful journey of parenthood with elegance and grace.',
      gallery: [maternityi1, maternityi2, maternityi3, maternityi4],
      story: 'Nimisha and Dipak celebrated their journey into parenthood with a heartfelt maternity photoshoot. The session captured the glow of motherhood, the anticipation of new beginnings, and the couple\'s excitement. From elegant studio portraits to candid outdoor moments, every image radiates love and warmth.'
    },
    {
      id: 'rohini-sahil',
      couple: 'Rohini & Sahil',
      location: 'Mumbai, India',
      date: '2024',
      guests: 0,
      image: rohinisahil1,
      category: 'maternity',
      description: 'A heartfelt maternity shoot celebrating love, warmth, and new beginnings.',
      gallery: [rohinisahil1, rohinisahil2, rohinisahil3],
      story: 'Rohini and Sahil\'s maternity shoot captured the quiet joy and excitement of welcoming a new chapter. With natural, candid moments and elegant portraits, every frame reflects their love and anticipation for what\'s to come.'
    },
    {
      id: 'sneha-bride',
      couple: 'Sneha',
      location: 'Udaipur, India',
      date: 'March 2024',
      guests: 0,
      image: bride1,
      category: 'bride',
      description: 'Stunning bride portraits capturing timeless beauty.',
      gallery: [bride1, bride2, bride3, bride4],
      story: 'Sneha\'s solo bride photoshoot was a celebration of self-love and elegance. Set against the backdrop of Udaipur\'s beautiful architecture, the portraits capture her grace, confidence, and the joy of being a bride. Each image is a work of art, highlighting the beauty of the modern bride.'
    },
  ];

  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Shivam & Mansi',
      content: 'Heavenly Weds are truly the best for photography and videography services! They covered our event so beautifully and captured every moment perfectly. Their team was professional, creative, and made us feel so comfortable throughout.',
      type: 'Photography & Videography',
    },
    {
      id: '2',
      name: 'Nimisha & Dipak',
      content: 'Heavenly Weds are the best for maternity shoots! They made our special journey even more memorable with their beautiful photography and attention to every detail. The team was so warm, patient, and made us feel completely comfortable throughout the shoot.',
      type: 'Maternity Shoot',
    },
    {
      id: '3',
      name: 'Roy & Rachel',
      content: 'Heavenly Weds are the best for wedding planning! From decor to photography, everything was handled perfectly. The team made our big day stress-free and truly magical. Highly recommended!',
      type: 'Wedding Planning & Photography',
    },
    {
      id: '4',
      name: 'Nishita & Raj',
      content: 'Heavenly Weds did a great pre-wedding photoshoot for us! They captured our moments beautifully and made the entire experience so comfortable and fun. Loved every bit of it — highly recommended!',
      type: 'Pre-Wedding Shoot',
    },
  ];

  const filteredWeddings = selectedCategory === 'all'
    ? weddings
    : weddings.filter((wedding) => wedding.category === selectedCategory);

  return (
    <div className="bg-white pt-[117px] font-serif">
      {/* Hero Section */}
      <section className="py-16 md:py-20 lg:py-24 px-4 md:px-8">
        <div className="mx-auto max-w-[900px] px-4 sm:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-4 uppercase tracking-[3px] text-[11px] text-[#9A9A9A] font-sans">
              Our Work
            </p>
            <h1 className="font-serif mb-6 md:mb-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-[#C9A7A0] font-light">
              Weddings We've Crafted
            </h1>
            <p className="text-base sm:text-lg leading-relaxed text-[#6F6F6F] max-w-3xl mx-auto font-light">
              Every wedding is a unique love story. Explore our portfolio of beautifully crafted celebrations 
              across the world's most enchanting destinations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Wedding Films */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-8 bg-[#FAFAFA]">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center mb-10 md:mb-12"
          >
            <p className="mb-4 uppercase tracking-[3px] text-[11px] text-[#9A9A9A] font-sans">
              Wedding Film
            </p>
            <h2 className="font-serif mb-4 text-3xl sm:text-4xl md:text-5xl leading-tight text-[#C9A7A0] font-light">
              Wedding Films
            </h2>
          </motion.div>

          <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {weddingFilms.map((film, index) => (
              <motion.div
                key={film.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 + index * 0.05 }}
                className="bg-white rounded-sm overflow-hidden"
              >
                <div className="w-full aspect-video bg-black">
                  <video
                    className="w-full h-full"
                    controls
                    playsInline
                    preload="metadata"
                    src={encodeURI(film.src)}
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm font-sans uppercase tracking-[2px] text-[#6F6F6F]">
                    {film.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 md:py-10 lg:py-12 px-4 md:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className="uppercase tracking-wider transition-all duration-300 px-4 sm:px-5 md:px-7 py-2.5 sm:py-3 text-[10px] sm:text-[11px] font-sans"
                style={{
                  backgroundColor: selectedCategory === category.id ? '#C9A7A0' : '#F2E8E6',
                  color: selectedCategory === category.id ? '#FFFFFF' : '#6F6F6F',
                  letterSpacing: '2px',
                }}
              >
                {category.label}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Wedding Grid */}
      <section className="py-8 md:py-12 lg:py-16 px-4 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {filteredWeddings.map((wedding, index) => (
              <motion.div
                key={wedding.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setSelectedWedding(wedding)}
              >
                {/* Image Container */}
                <div className="relative mb-4 sm:mb-5 md:mb-6 overflow-hidden rounded-sm w-full aspect-[4/5]">
                  <img
                    src={wedding.image}
                    alt={`${wedding.couple} wedding at ${wedding.location}`}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-[0.98] saturate-[0.85]"
                    loading="lazy"
                  />
                  
                  {/* Overlay on Hover */}
                  <div 
                    className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100 px-4"
                    style={{ background: 'linear-gradient(to bottom, rgba(201, 167, 160, 0.85), rgba(201, 167, 160, 0.95))' }}
                  >
                    <div className="text-center text-white">
                      <p className="mb-3 leading-relaxed text-sm sm:text-base font-light">
                        {wedding.description}
                      </p>
                      <div className="flex items-center justify-center gap-2 uppercase tracking-wider text-[10px] sm:text-[11px] font-sans">
                        View Gallery
                        <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Wedding Info */}
                <div>
                  <h3 className="font-serif mb-2 sm:mb-3 text-xl sm:text-2xl md:text-3xl text-[#6F6F6F] font-light">
                    {wedding.couple}
                  </h3>
                  
                  <div className="space-y-1.5 sm:space-y-2">
                    <div className="flex items-center gap-2 text-[#9A9A9A] text-xs sm:text-sm font-light">
                      <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-[#C9A7A0] flex-shrink-0" />
                      <span className="truncate">{wedding.location}</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-[#9A9A9A] text-xs sm:text-sm font-light">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-3 w-3 sm:h-4 sm:w-4 text-[#C9A7A0] flex-shrink-0" />
                        <span>{wedding.date}</span>
                      </div>
                      {wedding.guests > 0 && (
                        <div className="flex items-center gap-2">
                          <Users className="h-3 w-3 sm:h-4 sm:w-4 text-[#C9A7A0] flex-shrink-0" />
                          <span>{wedding.guests} Guests</span>
                        </div>
                      )}
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
              className="text-center py-16 md:py-20"
            >
              <p className="text-sm sm:text-base text-[#9A9A9A] font-light">
                No weddings found in this category. Please try another filter.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Wedding Detail Modal */}
      {selectedWedding && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 overflow-y-auto bg-black/90 p-4"
          onClick={() => setSelectedWedding(null)}
        >
          <div className="min-h-screen flex items-center justify-center">
            <div 
              className="relative max-w-6xl w-full bg-white rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedWedding(null)}
                className="absolute right-4 top-4 z-10 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 transition-all"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Header */}
              <div className="p-6 md:p-8 border-b border-[#ECECEC]">
                <h2 className="font-serif text-3xl md:text-4xl text-[#C9A7A0] font-light mb-2">
                  {selectedWedding.couple}
                </h2>
                <div className="flex flex-wrap gap-4 text-[#6F6F6F]">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-[#C9A7A0]" />
                    <span>{selectedWedding.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-[#C9A7A0]" />
                    <span>{selectedWedding.date}</span>
                  </div>
                  {selectedWedding.guests > 0 && (
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-[#C9A7A0]" />
                      <span>{selectedWedding.guests} Guests</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Story */}
              <div className="p-6 md:p-8 border-b border-[#ECECEC] bg-[#FAFAFA]">
                <h3 className="font-serif text-xl text-[#C9A7A0] font-light mb-3">Their Story</h3>
                <p className="text-[#6F6F6F] leading-relaxed">{selectedWedding.story}</p>
              </div>

              {/* Gallery */}
              <div className="p-6 md:p-8">
                <h3 className="font-serif text-xl text-[#C9A7A0] font-light mb-6">Photo Gallery</h3>
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                  {selectedWedding.gallery.map((img, idx) => (
                    <div
                      key={idx}
                      className="relative aspect-[4/5] overflow-hidden rounded-lg cursor-pointer group"
                      onClick={() => setLightboxImage(img)}
                    >
                      <img
                        src={img}
                        alt={`${selectedWedding.couple} - ${idx + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="p-6 md:p-8 bg-[#F2E8E6] text-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 uppercase tracking-[2px] transition-all duration-500 px-8 py-4 text-[11px] bg-[#C9A7A0] text-white hover:bg-[#B8948D] font-sans"
                >
                  Plan Your Wedding Like {selectedWedding.couple.split(' & ')[0]} & {selectedWedding.couple.split(' & ')[1]}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Lightbox Modal */}
      {lightboxImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute right-4 top-4 rounded-full bg-white/20 p-2 text-white hover:bg-white/30 transition-all"
          >
            <X className="h-6 w-6" />
          </button>
          <motion.img
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            src={lightboxImage}
            alt="Full size"
            className="max-h-[90vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}

      {/* Testimonials Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-[#F2E8E6] px-4 md:px-8">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <p className="mb-4 uppercase tracking-[3px] text-[11px] text-[#9A9A9A] font-sans">
              Testimonials
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#C9A7A0] font-light">
              What Our Couples Say
            </h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 md:p-8 rounded-sm shadow-sm"
                style={{ border: '1px solid #ECECEC' }}
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current text-[#C9A7A0]" style={{ color: '#C9A7A0' }} />
                  ))}
                </div>
                <p className="text-[#6F6F6F] leading-relaxed mb-4 text-sm md:text-base font-light italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center justify-between">
                  <p className="font-serif text-[#C9A7A0] font-medium">
                    {testimonial.name}
                  </p>
                  <p className="text-[11px] uppercase tracking-wider text-[#9A9A9A] font-sans">
                    {testimonial.type}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
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
            <h2 className="font-serif mb-4 md:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-[#C9A7A0] font-light">
              Let's Create Your Heavenly Story
            </h2>
            <p className="leading-relaxed mb-8 md:mb-10 text-sm sm:text-base text-[#6F6F6F] font-light max-w-2xl mx-auto">
              Ready to begin planning the celebration of your dreams? Book your complimentary consultation
              and let's bring your vision to life with elegance, beauty, and perfection.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 uppercase tracking-[2px] transition-all duration-500 px-6 sm:px-8 md:px-12 py-4 sm:py-5 text-[11px] sm:text-xs bg-[#F2E8E6] text-[#6F6F6F] border border-transparent hover:bg-[#C9A7A0] hover:text-white font-sans"
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