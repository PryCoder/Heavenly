import { motion } from 'framer-motion';
import { Sparkles, Heart, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

// Mehendi - Rita (Feb 18th 2019)
import ritaMehendi1 from '/fwdmehendiritafeb18th2019/234w56.jpg';
import ritaMehendi2 from '/fwdmehendiritafeb18th2019/46534.jpg';
import ritaMehendi3 from '/fwdmehendiritafeb18th2019/5435.jpg';
import ritaMehendi4 from '/fwdmehendiritafeb18th2019/543333333333.jpg';

// Haldi - Namrata & Anshuman (30th Nov 2024)
import namrataAnshumanHaldi1 from '/fwdnamrataanshuman/1.jpg';
import namrataAnshumanHaldi2 from '/fwdnamrataanshuman/HD-1 (1).jpg';
import namrataAnshumanHaldi3 from '/fwdnamrataanshuman/HD-1 (2).jpg';

// Haldi - Siddharth & Bhavya (19th Dec 2023)
import siddharthBhavyaHaldi1 from '/fwdsiddharthbhavya/2.jpg';
import siddharthBhavyaHaldi2 from '/fwdsiddharthbhavya/3.jpg';
import siddharthBhavyaHaldi3 from '/fwdsiddharthbhavya/bh-1 (1).jpg';
import siddharthBhavyaHaldi4 from '/fwdsiddharthbhavya/bh-1 (2).jpg';
import siddharthBhavyaHaldi5 from '/fwdsiddharthbhavya/bh-1 (3).jpg';
import siddharthBhavyaHaldi6 from '/fwdsiddharthbhavya/bh-1 (4).jpg';

// Reception - Manki & Roshini (6th Oct 2022)
import mankiRoshiniReception1 from '/fwdmankiroshini/1.jpg';
import mankiRoshiniReception2 from '/fwdmankiroshini/5DM41467.jpg';
import mankiRoshiniReception3 from '/fwdmankiroshini/5DM41470.jpg';
import mankiRoshiniReception4 from '/fwdmankiroshini/5DM42062.jpg';
import mankiRoshiniReception5 from '/fwdmankiroshini/5DM42129.jpg';
import mankiRoshiniReception6 from '/fwdmankiroshini/5DM49911.jpg';
import mankiRoshiniReception7 from '/fwdmankiroshini/5DM49997.jpg';

interface Ceremony {
  id: string;
  name: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
  description: string;
  significance: string;
  traditions: string[];
  uniquenessPoints?: string[];
  servicePoints?: string[];
  duration: string;
  colorTheme: string;
  coupleName?: string;
  ceremonyDate?: string;
  galleryImages?: string[];
}

export default function CeremoniesPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const ceremonies: Ceremony[] = [
    {
      id: 'mehendi-rita',
      name: 'Mehendi',
      subtitle: 'The Art Of Henna – Rita',
      imageSrc: ritaMehendi1,
      imageAlt: 'Rita Mehendi ceremony celebration',
      description:
        'Mehendi Ceremony Magic — Captured Forever\n\nCelebrate the vibrant colors, joyful laughter, and beautiful traditions of your Mehendi ceremony with us.\n\nAt our wedding photography and videography services, we don\'t just click pictures — we capture emotions, moments, and memories that last a lifetime.\n\nLet us turn your Mehendi into timeless and heavenly memories.',
      significance: 'The Mehendi ceremony is a joyful pre-wedding celebration where intricate henna designs are applied to the bride\'s hands and feet, symbolizing love, joy, and the bond between the couple.',
      traditions: [
        'Intricate henna application on bride and family members',
        'Traditional folk songs and dance performances',
        'Haldi (turmeric) application for glowing skin',
        'Gift exchanges and blessings from elders',
        'Colorful decor with vibrant flowers and fabrics',
      ],
      uniquenessPoints: [
        'Creative and candid photography styles',
        'Cinematic videography that tells your story',
        'Highlight videos with professional editing',
        'A well-trained and passionate team',
        'Attention to every small detail',
      ],
      servicePoints: [
        'Mehendi artist arrangements',
        'Professional photography',
        'Cinematographers',
        'Highlight video editing',
        'Complete event coverage',
      ],
      duration: '3-4 hours',
      colorTheme: 'Green, Yellow, Orange',
      coupleName: 'Rita',
      ceremonyDate: 'Feb 18th, 2019',
      galleryImages: [ritaMehendi1, ritaMehendi2, ritaMehendi3, ritaMehendi4],
    },
    {
      id: 'haldi-namrata-anshuman',
      name: 'Haldi',
      subtitle: 'The Turmeric Blessing – Namrata & Anshuman',
      imageSrc: namrataAnshumanHaldi1,
      imageAlt: 'Namrata & Anshuman Haldi ceremony',
      description:
        'Haldi Ceremony — A Splash of Love and Joy\n\nA beautiful celebration filled with laughter, traditions, and vibrant yellow moments.\n\nAs wedding photographers and videographers, our main focus is to ensure that every shot is captured beautifully with perfection and care.\n\nAt Heavenly Weds, we believe in turning every moment into something magical.\n\nFrom playful rituals to joyful candid smiles — Heavenly Weds captures every frame like a heavenly dream.',
      significance: 'The Haldi ceremony is a sacred pre-wedding ritual where turmeric paste is applied to the couple for glowing skin, ward off evil spirits, and bless them for their new journey.',
      traditions: [
        'Application of turmeric paste on couple',
        'Blessings from married women',
        'Playful rituals between families',
        'Traditional folk songs and dances',
        'Water and flower games',
      ],
      uniquenessPoints: [
        'Capturing every shot with precision and creativity',
        'Candid and natural photography',
        'Cinematic videography',
        'Professional, high-quality editing',
        'A well-trained and dedicated team',
      ],
      servicePoints: [
        'Professional photography services',
        'Cinematographers',
        'Expert photo and video editing',
        'Complete Haldi ceremony coverage',
      ],
      duration: '2-3 hours',
      colorTheme: 'Yellow, Orange, White',
      coupleName: 'Namrata & Anshuman',
      ceremonyDate: '30th November 2024',
      galleryImages: [namrataAnshumanHaldi1, namrataAnshumanHaldi2, namrataAnshumanHaldi3],
    },
    {
      id: 'haldi-siddharth-bhavya',
      name: 'Haldi',
      subtitle: 'The Turmeric Blessing – Siddharth & Bhavya',
      imageSrc: siddharthBhavyaHaldi1,
      imageAlt: 'Siddharth & Bhavya Haldi ceremony',
      description:
        'Haldi Ceremony — A Splash of Love and Joy\n\nA beautiful celebration filled with laughter, traditions, and vibrant yellow moments.\n\nAs wedding photographers and videographers, our main focus is to ensure that every shot is captured beautifully with perfection and care.\n\nAt Heavenly Weds, we believe in turning every moment into something magical.\n\nFrom playful rituals to joyful candid smiles — Heavenly Weds captures every frame like a heavenly dream.',
      significance: 'The Haldi ceremony is a sacred pre-wedding ritual where turmeric paste is applied to the couple for glowing skin, ward off evil spirits, and bless them for their new journey.',
      traditions: [
        'Application of turmeric paste on couple',
        'Blessings from married women',
        'Playful rituals between families',
        'Traditional folk songs and dances',
        'Water and flower games',
      ],
      uniquenessPoints: [
        'Capturing every shot with precision and creativity',
        'Candid and natural photography',
        'Cinematic videography',
        'Professional, high-quality editing',
        'A well-trained and dedicated team',
      ],
      servicePoints: [
        'Professional photography services',
        'Cinematographers',
        'Expert photo and video editing',
        'Complete Haldi ceremony coverage',
      ],
      duration: '2-3 hours',
      colorTheme: 'Yellow, Orange, White',
      coupleName: 'Siddharth & Bhavya',
      ceremonyDate: '19th December 2023',
      galleryImages: [siddharthBhavyaHaldi1, siddharthBhavyaHaldi2, siddharthBhavyaHaldi3, siddharthBhavyaHaldi4, siddharthBhavyaHaldi5, siddharthBhavyaHaldi6],
    },
    {
      id: 'sangeet',
      name: 'Sangeet',
      subtitle: 'Night of Music & Dance',
      imageSrc: '/shivammansi/fwdwedding/wed-1 (4).jpg',
      imageAlt: 'Sangeet night celebration',
      description:
        'Night of Music and Dance — Sangeet Ceremony\n\nA night where music, dance, and celebration come alive. Let every magical moment be captured with perfection.\n\nWe specialize in wedding photography and videography that goes beyond just visuals — we capture emotions, energy, and unforgettable memories.\n\nFrom electrifying dance performances to joyful candid moments, we capture it all beautifully to create heavenly memories for you.',
      significance: '',
      traditions: [],
      uniquenessPoints: [
        'Creative and candid photography',
        'Cinematic storytelling through videos',
        'Capturing real emotions and lively performances',
        'High-quality highlight video editing',
        'A well-trained and professional team',
      ],
      servicePoints: [
        'Professional photography',
        'Cinematographers',
        'Highlight video editing services',
        'Complete Sangeet ceremony coverage',
      ],
      duration: '4-6 hours',
      colorTheme: 'Bold, Vibrant Colors',
    },
    {
      id: 'wedding',
      name: 'Wedding Ceremony',
      subtitle: 'The Sacred Union',
      imageSrc: '/shivammansi/fwdwedding/wd-2 (1).jpg',
      imageAlt: 'Wedding ceremony couple moment',
      description:
        'Wedding Ceremony — Crafted by Heavenly Weds\n\nYour wedding is a once-in-a-lifetime story of love, emotions, and beautiful beginnings.\n\nOur main motive as wedding photographers and videographers is to ensure every single moment is captured beautifully and feels nothing less than heavenly.\n\nFrom emotional vows to joyful celebrations — our professional team captures every frame like a heavenly story.',
      significance: '',
      traditions: [],
      uniquenessPoints: [
        'Capturing every shot with perfection and elegance',
        'Creative and candid photography',
        'Cinematic videography that tells your love story',
        'Professional, high-quality editing',
        'A skilled and passionate team',
      ],
      servicePoints: [
        'Professional photography services',
        'Cinematographers',
        'Expert photo and video editing',
        'Complete wedding ceremony coverage',
      ],
      duration: '3-5 hours',
      colorTheme: 'Red, Gold, Maroon',
    },
    {
      id: 'reception-manki-roshini',
      name: 'Reception',
      subtitle: 'Grand Celebration – Manki & Roshini',
      imageSrc: mankiRoshiniReception1,
      imageAlt: 'Manki & Roshini Reception celebration',
      description:
        'Grand Celebration – Wedding Reception 💍✨\nby Heavenly Weds\n\nAn evening of elegance, love, and grand celebrations ✨\nWhere every smile shines brighter and every moment feels magical 💫\n\nAt Heavenly Weds, we capture your reception with stunning photography & cinematic videography — turning every frame into a timeless memory 📸🎥\n\nFrom grand entries to unforgettable moments —\nWe capture every frame like a heavenly dream ✨',
      significance: 'The wedding reception is a grand celebration where families and friends come together to bless the newlyweds, with dinner, dance, and joyful festivities.',
      traditions: [
        'Grand entry of the couple',
        'Cake cutting ceremony',
        'First dance as a married couple',
        'Speeches and toasts from family',
        'Dinner and dance celebrations',
      ],
      uniquenessPoints: [
        'Elegant & candid photography',
        'Cinematic videography coverage',
        'Capturing emotions, glamour & celebrations',
        'Professional, high-quality editing',
        'A skilled & experienced team',
      ],
      servicePoints: [
        'Professional photography services',
        'Cinematographers',
        'Expert photo & video editing',
        'Complete reception coverage',
      ],
      duration: '4-5 hours',
      colorTheme: 'Elegant, Sophisticated Palette',
      coupleName: 'Manki & Roshini',
      ceremonyDate: '6th October 2022',
      galleryImages: [mankiRoshiniReception1, mankiRoshiniReception2, mankiRoshiniReception3, mankiRoshiniReception4, mankiRoshiniReception5, mankiRoshiniReception6, mankiRoshiniReception7],
    },
  ];

  return (
    <div className="bg-white pt-[117px]">
      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute right-4 top-4 rounded-full bg-white/20 p-2 text-white hover:bg-white/30 transition-all z-10"
          >
            ✕
          </button>
          <motion.img
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            src={selectedImage}
            alt="Full size"
            className="max-h-[90vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}

      {/* Hero Section */}
      <section className="py-16 md:py-20 lg:py-24 px-4 md:px-8">
        <div className="mx-auto max-w-[900px] px-4 sm:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-4 uppercase tracking-[3px] text-[11px] text-[#9A9A9A]">
              Traditional Celebrations
            </p>
            <h1 className="font-heading mb-6 md:mb-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-[#C9A7A0] font-light">
              Ceremonies & Rituals
            </h1>
            <p className="text-base sm:text-lg leading-relaxed text-[#6F6F6F] max-w-3xl mx-auto">
              Indian weddings are a beautiful tapestry of ceremonies, each with its own significance and traditions. 
              We honor these sacred rituals while creating celebrations that reflect your unique love story.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Ceremonies List */}
      <section className="py-12 md:py-16 lg:py-24 px-4 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="space-y-16 md:space-y-20 lg:space-y-24">
            {ceremonies.map((ceremony, index) => (
              <motion.div
                key={ceremony.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
              >
                <div 
                  className="rounded-sm p-6 sm:p-8 md:p-10 lg:p-12 border border-[#ECECEC]"
                  style={{ backgroundColor: index % 2 === 0 ? '#FFFFFF' : '#FAFAFA' }}
                >
                  {/* Couple & Date Info */}
                  {ceremony.coupleName && (
                    <div className="mb-4 text-center">
                      <p className="text-sm text-[#C9A7A0] font-medium">{ceremony.coupleName}</p>
                      {ceremony.ceremonyDate && (
                        <p className="text-xs text-[#9A9A9A]">{ceremony.ceremonyDate}</p>
                      )}
                    </div>
                  )}

                  {/* Header */}
                  <div className="mb-6 md:mb-8 text-center">
                    <p className="mb-2 uppercase tracking-[3px] text-[11px] text-[#9A9A9A]">
                      {ceremony.subtitle}
                    </p>
                    <h2 className="font-heading mb-3 md:mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-[#C9A7A0] font-light">
                      {ceremony.name}
                    </h2>

                    {/* MAIN IMAGE - FIXED with object-contain */}
                    <div className="mx-auto mb-5 md:mb-6 max-w-4xl overflow-hidden rounded-sm bg-[#f5f5f5]">
                      <img
                        src={ceremony.imageSrc}
                        alt={ceremony.imageAlt}
                        className="w-full h-[250px] sm:h-[320px] md:h-[400px] object-contain hover:scale-105 transition-transform duration-500 cursor-pointer"
                        loading="lazy"
                        onClick={() => setSelectedImage(ceremony.imageSrc)}
                      />
                    </div>

                    <p
                      className="mx-auto leading-relaxed text-sm sm:text-base text-[#6F6F6F] max-w-3xl"
                      style={{ whiteSpace: 'pre-line' }}
                    >
                      {ceremony.description}
                    </p>
                  </div>

                  {/* Content Grid */}
                  <div className="grid gap-6 md:gap-8 grid-cols-1 lg:grid-cols-2 mb-6 md:mb-8">
                    {/* What makes us unique? */}
                    <div>
                      {ceremony.uniquenessPoints && ceremony.uniquenessPoints.length > 0 ? (
                        <>
                          <h3 className="mb-3 md:mb-4 uppercase tracking-[2px] text-[11px] sm:text-xs text-[#9A9A9A]">
                            What makes us unique?
                          </h3>
                          <ul className="space-y-2">
                            {ceremony.uniquenessPoints.map((point, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <Sparkles className="h-4 w-4 flex-shrink-0 mt-1 text-[#C9A7A0]" />
                                <span className="text-xs sm:text-sm text-[#6F6F6F] leading-relaxed">
                                  {point}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </>
                      ) : (
                        <>
                          <h3 className="mb-3 md:mb-4 uppercase tracking-[2px] text-[11px] sm:text-xs text-[#9A9A9A]">
                            Significance
                          </h3>
                          <p
                            className="leading-relaxed text-sm sm:text-base text-[#6F6F6F]"
                            style={{ whiteSpace: 'pre-line' }}
                          >
                            {ceremony.significance}
                          </p>
                        </>
                      )}
                    </div>

                    {/* Our Services Include */}
                    <div>
                      {ceremony.servicePoints && ceremony.servicePoints.length > 0 ? (
                        <>
                          <h3 className="mb-3 md:mb-4 uppercase tracking-[2px] text-[11px] sm:text-xs text-[#9A9A9A]">
                            Our Services Include
                          </h3>
                          <ul className="space-y-2">
                            {ceremony.servicePoints.map((service, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <Sparkles className="h-4 w-4 flex-shrink-0 mt-1 text-[#C9A7A0]" />
                                <span className="text-xs sm:text-sm text-[#6F6F6F] leading-relaxed">
                                  {service}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </>
                      ) : (
                        <>
                          <h3 className="mb-3 md:mb-4 uppercase tracking-[2px] text-[11px] sm:text-xs text-[#9A9A9A]">
                            Key Traditions
                          </h3>
                          <ul className="space-y-2">
                            {ceremony.traditions.map((tradition, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <Sparkles className="h-4 w-4 flex-shrink-0 mt-1 text-[#C9A7A0]" />
                                <span className="text-xs sm:text-sm text-[#6F6F6F] leading-relaxed">
                                  {tradition}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Gallery Preview Section */}
                  {ceremony.galleryImages && ceremony.galleryImages.length > 0 && (
                    <div className="mt-6 mb-6 pt-4 border-t border-[#ECECEC]">
                      <h3 className="mb-4 uppercase tracking-[2px] text-[11px] sm:text-xs text-[#9A9A9A] text-center">
                        Gallery Preview
                      </h3>
                      <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4">
                        {ceremony.galleryImages.slice(0, 8).map((img, idx) => (
                          <div 
                            key={idx} 
                            className="overflow-hidden rounded-sm bg-[#f5f5f5] cursor-pointer group"
                            onClick={() => setSelectedImage(img)}
                          >
                            <img
                              src={img}
                              alt={`${ceremony.name} gallery ${idx + 1}`}
                              className="w-full h-[180px] sm:h-[200px] md:h-[220px] object-contain hover:scale-105 transition-transform duration-500"
                              loading="lazy"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Details Bar */}
                  <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 pt-6 md:pt-8 border-t border-[#ECECEC]">
                    <div className="flex items-center gap-3">
                      <Calendar className="h-5 w-5 text-[#C9A7A0] flex-shrink-0" />
                      <div>
                        <p className="uppercase tracking-[2px] text-[10px] text-[#9A9A9A]">
                          Typical Duration
                        </p>
                        <p className="text-sm sm:text-base text-[#6F6F6F] font-medium">
                          {ceremony.duration}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Sparkles className="h-5 w-5 text-[#C9A7A0] flex-shrink-0" />
                      <div>
                        <p className="uppercase tracking-[2px] text-[10px] text-[#9A9A9A]">
                          Color Theme
                        </p>
                        <p className="text-sm sm:text-base text-[#6F6F6F] font-medium">
                          {ceremony.colorTheme}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Ceremonies */}
      <section className="py-16 md:py-20 lg:py-24 px-4 md:px-8">
        <div className="mx-auto max-w-4xl px-4 sm:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading mb-4 md:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-[#C9A7A0] font-light">
              Your Traditions, Your Way
            </h2>
            <p className="leading-relaxed mb-4 md:mb-6 text-sm sm:text-base text-[#6F6F6F]">
              Every family has unique traditions and customs. Whether you're planning all five ceremonies or 
              selecting specific events, we work with you to honor your heritage while creating a celebration 
              that feels authentically yours.
            </p>
            <p className="leading-relaxed text-xs sm:text-sm text-[#9A9A9A]">
              We also specialize in fusion weddings, blending Indian traditions with Western elements, 
              and can accommodate regional variations from across India and the diaspora.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-[#FAFAFA] px-4 md:px-8">
        <div className="mx-auto max-w-3xl px-4 sm:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center mb-6 md:mb-8 rounded-full w-20 h-20 md:w-24 md:h-24 bg-[#F2E8E6]">
              <Heart className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 text-[#C9A7A0]" />
            </div>
            <h2 className="font-heading mb-4 md:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-[#C9A7A0] font-light">
              Let's Plan Your Celebration
            </h2>
            <p className="leading-relaxed mb-8 md:mb-10 text-sm sm:text-base text-[#6F6F6F]">
              Schedule a complimentary consultation to discuss your vision for each ceremony. We'll guide you 
              through the traditions, help you plan the timeline, and ensure every moment is perfect.
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