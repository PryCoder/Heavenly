// src/pages/AdditionalServicesPage.tsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Camera,
  Heart,
  Plane,
  Brush,
  PenTool,
  User,
  BookOpen,
  Utensils,
  ArrowRight,
  Calendar,
  Check,
  X,
} from 'lucide-react';
import { useState } from 'react';

import maternityi1 from '/nimishadipak/fwdmaternityphotoshoot/mat-h-1 (1).jpg';
import maternityi2 from '/nimishadipak/fwdmaternityphotoshoot/mat-h-1 (2).jpg';
import maternityi3 from '/nimishadipak/fwdmaternityphotoshoot/mat-h-1 (3).jpg';
import maternityi4 from '/nimishadipak/fwdmaternityphotoshoot/mat-h-1 (4).jpg';
import preweddingi1 from '/prewedding/fwdpreweddingshoot/pre-wedding - hw-1 (1).jpg';
import preweddingi2 from '/prewedding/fwdpreweddingshoot/pre-wedding - hw-1 (2).jpg';
import preweddingi3 from '/prewedding/fwdpreweddingshoot/pre-wedding - hw-1 (3).jpg';
import preweddingi4 from '/prewedding/fwdpreweddingshoot/pre-wedding - hw-1 (4).jpg';
import weddingImage1 from '/shivammansi/fwdwedding/wd-2 (1).jpg';
import weddingImage2 from '/shivammansi/fwdwedding/wed-1 (7).jpg';
import weddingImage3 from '/prewedding/fwdpreweddingshoot/pre-wedding - hw-1 (6).jpg';
import weddingImage4 from '/christianwed/fwdchristianwedding/chr-1.jpg';
import bride1 from '/brideshoot/fwdbridephotoshoot/br-H-1 (3).jpg';
import bride2 from '/brideshoot/fwdbridephotoshoot/br-H-1 (4).jpg';
import wedding1 from '/bhaktisagar/fwdheavenlywedsphotos/bk-h-1 (1).jpg';
import wedding2 from '/bhaktisagar/fwdheavenlywedsphotos/bk-h-1 (4).jpg';
import wedding3 from '/shivammansi/fwdwedding/wed-1 (4).jpg';
import wedding4 from '/shivammansi/fwdwedding/wed-1 (3).jpg';

const additionalServicePhoto = (fileName: string) => `/fwdadditionalservicesphotos/${encodeURIComponent(fileName)}`;

const ADDITIONAL_SERVICE_IMAGES = {
  preWedding: [
    additionalServicePhoto('pre-wedding - 3 (1).jpg'),
    additionalServicePhoto('pre-wedding - 4(2).jpg'),
  ],
  maternity: [
    additionalServicePhoto('MATERNITY PHOTOHOOT - 1.jpg'),
    additionalServicePhoto('MATERNITY - 4.jpg'),
  ],
  destination: [
    additionalServicePhoto('destination wedding - 3 (1).jpg'),
    additionalServicePhoto('destination wedding - 3 (2).jpg'),
    additionalServicePhoto('destination wedding - 3 (1).png'),
  ],
  editing: [
    additionalServicePhoto('editing services -1 .jpeg'),
    additionalServicePhoto('editing services - 2.png'),
  ],
  invitation: [
    additionalServicePhoto('wedding invitation -1.jpeg'),
    additionalServicePhoto('wedding invitation - 2.jpeg'),
    additionalServicePhoto('wedding invitation 3.jpg'),
  ],
  makeup: [
    additionalServicePhoto('MAKE UP ARTIST - 1 (1).jpeg'),
    additionalServicePhoto('MAKE UP ARTIST - 1 (2).jpeg'),
    additionalServicePhoto('MAKE UP ARTIST - 1 (3).jpeg'),
  ],
  album: [
    additionalServicePhoto('wedding album - 1.jpeg'),
    additionalServicePhoto('wedding album - (2).jpeg'),
    additionalServicePhoto('wedding album - (3).jpeg'),
  ],
  catering: [
    additionalServicePhoto('catering -1 (1).jpg'),
    additionalServicePhoto('catering -1 (2).jpg'),
    additionalServicePhoto('catering -1 (3).jpg'),
    additionalServicePhoto('catering -1 (4).jpg'),
  ],
} as const;

const pickFour = (primary: string[], fallback: string[] = []) => {
  const result: string[] = [];
  const addUnique = (items: string[]) => {
    for (const item of items) {
      if (result.length >= 4) return;
      if (!result.includes(item)) result.push(item);
    }
  };

  addUnique(primary);
  addUnique(fallback);

  // If still short (e.g., only 2-3 images exist), repeat from primary/fallback to reach 4.
  const pool = [...primary, ...fallback].filter(Boolean);
  while (result.length < 4 && pool.length > 0) {
    result.push(pool[result.length % pool.length]);
  }

  return result.slice(0, 4);
};

interface AdditionalService {
  id: string;
  title: string;
  icon: React.ElementType;
  description: string;
  features: string[];
  href: string;
  images: string[];
}

export default function AdditionalServicesPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const additionalServices: AdditionalService[] = [
    {
      id: 'pre-wedding',
      title: 'Pre-Wedding Shoots',  // Capital W and S
      icon: Camera,
      description: 'Capture the excitement and romance before your big day with a stunning pre-wedding photoshoot.',
      features: [
        'Concept planning based on your story',
        'Location scouting and guidance',
        'Professional photography & cinematic videography',
        'Candid and natural moments capture',
        'High-resolution edited images and films',
        'Drone shots for cinematic appeal',
        'Professional makeup artist for a flawless look',
        'Complete shoot coordination',
      ],
      href: '/services/pre-wedding',
      images: pickFour([...ADDITIONAL_SERVICE_IMAGES.preWedding], [preweddingi1, preweddingi2, preweddingi3, preweddingi4]),
    },
    {
      id: 'maternity',
      title: 'Maternity Photoshoot',  // Capital M
      icon: Heart,
      description: 'Celebrate the beautiful journey of parenthood with a professional maternity photoshoot.',
      features: [
        'Experienced photographers and videographers dedicated to capturing your special moments perfectly.',
        'High-quality images and cinematic videos that beautifully tell your story.',
        'Creative angles, storytelling visuals, and dreamy frames for a film-like experience.',
        'Professionally edited photos and videos with soft tones, color grading, and artistic enhancements.',
        'A beautifully crafted short film capturing the most special moments of your maternity journey.',
        'Professional makeup services to ensure you look radiant and confident.',
        'Elegant maternity gowns and styling guidance to enhance your look and comfort.',
      ],
      href: '/services/maternity',
      images: pickFour([ maternityi2, maternityi1],[...ADDITIONAL_SERVICE_IMAGES.maternity]),
    },
    {
      id: 'destination',
      title: 'Destination Wedding',
      icon: Plane,
      description: 'Exchange vows in breathtaking locations around the world with our destination expertise.',
      features: [
        'Destination consultation and location scouting',
        'Venue selection and booking assistance',
        'Travel and accommodation coordination',
        'Vendor sourcing at destination',
        'Budget planning and management',
        'Wedding design and styling concept',
        'Guest management and itinerary planning',
        'Logistics and timeline coordination',
        'On-site coordination with full team',
        'Photography & videography coverage',
        'Local permits and requirements handling',
        'Post-wedding wrap-up services',
        'Makeup Artist',
      ],
      href: '/services/destination',
      images: pickFour([...ADDITIONAL_SERVICE_IMAGES.destination], [weddingImage1, weddingImage2, weddingImage3, weddingImage4]),
    },
    {
      id: 'editing',
      title: 'Editing Services',
      icon: Brush,
      description: 'Professional photo and video editing to enhance every precious moment.',
      features: [
        'High-end retouching, color correction, skin smoothing, and enhancement for flawless images.',
        'Cinematic Video Editing – Story-driven edits with smooth transitions, music synchronization, and a cinematic feel.',
        'Professional color tones that enhance mood, lighting, and overall visual appeal.',
        'Highlight Films – Short, engaging videos capturing the essence of your event with emotional storytelling.',
        'Reels & Social Media Edits – Trendy, eye-catching edits perfect for Instagram and other platforms.',
        'Background Enhancement',
        'Sound Design & Music Sync – Perfectly balanced audio with cinematic sound effects and music.',
      ],
      href: '/services/editing',
      images: ADDITIONAL_SERVICE_IMAGES.editing,
    },
    {
      id: 'invitation',
      title: 'Wedding Invitations',
      icon: PenTool,
      description: 'Beautifully crafted invitations that set the tone for your celebration.',
      features: [
        'Custom Invitation Design – Personalized designs tailored to your theme, culture, and preferences.',
        'Digital E-Invites – Stylish and animated invitations perfect for WhatsApp & social media sharing.',
        'Luxury Print Invitations',
        'Theme-Based Designs – Invitations designed to match your wedding theme and aesthetics.',
        'RSVP & Wedding Website Integration – Easy guest management with digital RSVP options.',
      ],
      href: '/services/invitations',
      images: ADDITIONAL_SERVICE_IMAGES.invitation,
    },
    {
      id: 'makeup',
      title: 'Make Up Artists',
      icon: User,
      description: 'Expert makeup artists to make you look and feel your best on your special day.',
      features: [
        'Pre-Wedding Makeup Trial – Personalized trial session to perfect your look before the big day.',
        'Bridal & Family Makeup – Stunning makeup for the bride, bridesmaids, and mother-of-the-bride.',
        'Hairstyling Services – Elegant hairstyles customized for all hair types and preferences.',
        'Premium Products – Use of high-quality, hypoallergenic products safe for all skin types.',
        'On-Location Service',
        'Touch-Up Support – Complimentary touch-up kit and assistance to keep you looking fresh throughout the event.',
      ],
      href: '/services/makeup',
      images: ADDITIONAL_SERVICE_IMAGES.makeup,
    },
    {
      id: 'album',
      title: 'Wedding Albums',
      icon: BookOpen,
      description: 'Beautifully designed albums to preserve your memories for generations.',
      features: [
        'Customized Album Design',
        'Magazine-Style Albums – Trendy, editorial-style designs that give your album a modern and stylish look.',
        'Luxury Finishes – Premium materials with elegant textures like matte, glossy, metallic, and velvet covers.',
        'Professional Creative Team – Skilled designers and editors dedicated to delivering perfection in every detail.',
        'High-Quality Printing',
        'Elegant Storytelling Layouts',
        'Premium Binding',
      ],
      href: '/services/album',
      images: ADDITIONAL_SERVICE_IMAGES.album, 
    },
    {
      id: 'catering',
      title: 'Caterings',
      icon: Utensils,
      description: 'Exquisite culinary experiences tailored to your taste and style.',
      features: [
        'Customized Menu Planning – Menus to suit your taste, culture, and wedding theme.',
        'Multi-Cuisine Options',
        'Live Food Counters',
        'Premium Quality Ingredients',
        'Professional Service Staff – Well-trained team ensuring smooth and courteous service.',
        'Elegant Food Presentation – Stylish setups and décor to match your wedding theme.',
        'Beverage & Dessert Stations – Refreshing drinks and delicious sweets to complete the celebration.',
        'Hygiene & Safety Standards',
      ],
      href: '/services/catering',
      images: pickFour([...ADDITIONAL_SERVICE_IMAGES.catering], [wedding1, wedding2, wedding3, wedding4]),
    },
  ];

  return (
    <div className="min-h-screen w-full bg-white" style={{ paddingTop: 'clamp(90px, 15vw, 117px)' }}>
      {/* Hero Section */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="mx-auto max-w-[900px] px-4 sm:px-6 lg:px-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p
              className="mb-4 uppercase tracking-widest"
              style={{ fontSize: '11px', letterSpacing: '3px', color: '#9A9A9A' }}
            >
              Heavenly Weds
            </p>
            <h1
              className="font-heading mb-6 sm:mb-8"
              style={{ fontSize: 'clamp(34px, 7vw, 64px)', lineHeight: '1.15', color: '#C9A7A0', fontWeight: 400 }}
            >
              Additional Services
            </h1>
            <p
              className="leading-relaxed"
              style={{ fontSize: 'clamp(14px, 3.5vw, 18px)', lineHeight: '1.8', color: '#6F6F6F' }}
            >
              Enhance your wedding experience with our specialized services. From pre-wedding shoots
              to catering, we offer everything you need to make your celebration truly unforgettable.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Individual Service Sections */}
      {additionalServices.map((service, index) => (
        <motion.section
          key={service.id}
          id={service.id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="py-12 md:py-16 lg:py-20"
          style={{ backgroundColor: index % 2 === 0 ? '#FFFFFF' : '#FAFAFA' }}
        >
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
            {/* Service Header */}
            <div className="mb-12 text-center">
              <div
                className="mx-auto mb-6 inline-flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full"
                style={{ backgroundColor: '#F2E8E6' }}
              >
                <service.icon className="h-8 w-8 sm:h-10 sm:w-10" style={{ color: '#C9A7A0' }} />
              </div>
              <h2
                className="font-heading mb-4"
                style={{ fontSize: 'clamp(26px, 5.5vw, 42px)', lineHeight: '1.2', color: '#C9A7A0', fontWeight: 400 }}
              >
                {service.title}
              </h2>
              <p
                className="mx-auto max-w-2xl leading-relaxed"
                style={{ fontSize: 'clamp(14px, 3.5vw, 18px)', lineHeight: '1.8', color: '#6F6F6F' }}
              >
                {service.description}
              </p>
            </div>

            {/* Image Gallery Grid */}
            <div className="mb-12">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {service.images.map((image, imgIndex) => (
                  <motion.div
                    key={imgIndex}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: imgIndex * 0.1 }}
                    className="group relative cursor-pointer overflow-hidden rounded-lg"
                    onClick={() => setSelectedImage(image)}
                  >
                    <img
                      src={image}
                      alt={`${service.title} ${imgIndex + 1}`}
                      className="h-56 sm:h-64 md:h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/20" />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Features and CTA */}
            <div className="mx-auto max-w-[900px]">
              <div className="mb-8 rounded-lg p-5 sm:p-8" style={{ backgroundColor: '#F2E8E6' }}>
                <p
                  className="mb-6 text-center uppercase tracking-wider"
                  style={{ fontSize: '12px', letterSpacing: '3px', color: '#9A9A9A' }}
                >
                  Our Services
                </p>
                <div className="grid gap-3 md:grid-cols-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 flex-shrink-0" style={{ color: '#C9A7A0' }} />
                      <span style={{ fontSize: '14px', lineHeight: '1.6', color: '#6F6F6F' }}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <Link
                  to="/contact"
                  className="inline-flex w-full sm:w-auto justify-center items-center gap-2 uppercase tracking-widest transition-all duration-500"
                  style={{
                    padding: '16px 40px',
                    fontSize: '11px',
                    letterSpacing: '2px',
                    backgroundColor: '#C9A7A0',
                    color: '#FFFFFF',
                    border: 'none',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#B8948D';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#C9A7A0';
                  }}
                >
                  Learn More About {service.title}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </motion.section>
      ))}

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute right-4 top-4 rounded-full bg-white/20 p-2 transition-all hover:bg-white/30"
          >
            <X className="h-6 w-6 text-white" />
          </button>
          <motion.img
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            src={selectedImage}
            alt="Full size"
            className="max-h-[90vh] max-w-[90vw] object-contain"
            decoding="async"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}

      {/* CTA Section */}
      <section className="py-12 md:py-16 lg:py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="mx-auto max-w-[800px] px-4 sm:px-6 lg:px-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="mx-auto mb-8 flex items-center justify-center rounded-full"
              style={{ width: 'clamp(80px, 18vw, 100px)', height: 'clamp(80px, 18vw, 100px)', backgroundColor: '#F2E8E6' }}
            >
              <Calendar className="h-12 w-12" style={{ color: '#C9A7A0' }} />
            </div>
            <h2
              className="font-heading mb-6"
              style={{ fontSize: 'clamp(26px, 5.5vw, 42px)', lineHeight: '1.2', color: '#C9A7A0', fontWeight: 400 }}
            >
              Ready to Enhance Your Celebration?
            </h2>
            <p
              className="mx-auto mb-10 max-w-2xl leading-relaxed"
              style={{ fontSize: 'clamp(14px, 3.5vw, 16px)', lineHeight: '1.8', color: '#6F6F6F' }}
            >
              Let us help you add those special touches that make your wedding uniquely yours.
              Contact us to customize a package that includes your favorite additional services.
            </p>
            <Link
              to="/contact"
              className="inline-flex w-full sm:w-auto justify-center items-center gap-2 uppercase tracking-widest transition-all duration-500"
              style={{
                padding: '18px 48px',
                fontSize: '12px',
                letterSpacing: '2px',
                backgroundColor: '#F2E8E6',
                color: '#6F6F6F',
                border: '1px solid transparent',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#C9A7A0';
                e.currentTarget.style.color = '#FFFFFF';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#F2E8E6';
                e.currentTarget.style.color = '#6F6F6F';
              }}
            >
              <Calendar className="h-5 w-5" />
              Schedule Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}