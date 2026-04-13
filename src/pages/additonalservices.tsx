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
  Gift,
  BookOpen,
  Utensils,
  ArrowRight,
  Calendar,
  Check,
  X,
} from 'lucide-react';
import { useState } from 'react';
import maternityi1 from '/nimishadipak/fwdmaternityphotoshoot/mat-h-1 (1).jpg'
import maternityi2 from '/nimishadipak/fwdmaternityphotoshoot/mat-h-1 (2).jpg'
import maternityi3 from '/nimishadipak/fwdmaternityphotoshoot/mat-h-1 (3).jpg'
import maternityi4 from '/nimishadipak/fwdmaternityphotoshoot/mat-h-1 (4).jpg'
import preweddingi1 from '/prewedding/fwdpreweddingshoot/pre-wedding - hw-1 (1).jpg'
import preweddingi2 from '/prewedding/fwdpreweddingshoot/pre-wedding - hw-1 (2).jpg'
import preweddingi3 from '/prewedding/fwdpreweddingshoot/pre-wedding - hw-1 (3).jpg'
import preweddingi4 from '/prewedding/fwdpreweddingshoot/pre-wedding - hw-1 (4).jpg'
import weddingImage1 from '/shivammansi/fwdwedding/wd-2 (1).jpg';
import weddingImage2 from '/shivammansi/fwdwedding/wed-1 (7).jpg';
import weddingImage3 from '/prewedding/fwdpreweddingshoot/pre-wedding - hw-1 (6).jpg'
import weddingImage4 from '/christianwed/fwdchristianwedding/chr-1.jpg';
import bride1 from '/brideshoot/fwdbridephotoshoot/br-H-1 (3).jpg';
import bride2 from '/brideshoot/fwdbridephotoshoot/br-H-1 (4).jpg';
import wedding1 from '/bhaktisagar/fwdheavenlywedsphotos/bk-h-1 (1).jpg';
import wedding2 from '/bhaktisagar/fwdheavenlywedsphotos/bk-h-1 (4).jpg';
import wedding3 from '/shivammansi/fwdwedding/wed-1 (4).jpg';
import wedding4 from '/shivammansi/fwdwedding/wed-1 (3).jpg';
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
      title: 'Pre-wedding shoot',
      icon: Camera,
      description: 'Capture the excitement and romance before your big day with a stunning pre-wedding photoshoot.',
      features: [
        'Consultation to understand your love story and vision',
        'Selection of picturesque locations (local or destination)',
        'Professional guidance on poses and emotions',
        'High-resolution edited digital images',
        'Behind-the-scenes candid captures',
        'Option to include drone shots for cinematic flair',
        'Quick turnaround of edited photos',
      ],
      href: '/services/pre-wedding',
      images: [
        preweddingi1,
        preweddingi2,
        preweddingi3,
        preweddingi4,
      ],
    },
    {
      id: 'maternity',
      title: 'Maternity Photoshoot',
      icon: Heart,
      description: 'Celebrate the beautiful journey of parenthood with a professional maternity photoshoot.',
      features: [
        'Consultation to plan the theme and style',
        'Studio or on-location shoot options',
        'Access to a collection of elegant maternity gowns',
        'Professional hair and makeup artist (optional)',
        'Artistic editing to enhance the glow of motherhood',
        'High-quality digital images and prints',
        'Private online gallery for easy sharing',
      ],
      href: '/services/maternity',
      images: [
        maternityi1,
        maternityi2,
         maternityi3,
         maternityi4,
      ],
    },
    {
      id: 'destination',
      title: 'Destination Wedding',
      icon: Plane,
      description: 'Exchange vows in breathtaking locations around the world with our destination expertise.',
      features: [
        'Complete destination wedding planning and coordination',
        'Venue scouting and booking assistance',
        'Travel and accommodation arrangements for guests',
        'On-site vendor management at the destination',
        'Legal paperwork and permit assistance',
        'Full photography and videography coverage',
        'Welcome dinner and post-wedding event planning',
      ],
      href: '/services/destination',
      images: [
        weddingImage1,
        weddingImage2,
        weddingImage3,
        weddingImage4,
      ],
    },
    {
      id: 'editing',
      title: 'Editing Services',
      icon: Brush,
      description: 'Professional photo and video editing to enhance every precious moment.',
      features: [
        'Color correction and exposure adjustments',
        'Skin smoothing and blemish removal',
        'Background cleanup and object removal',
        'Artistic filters and mood enhancement',
        'Video color grading and sound design',
        'Same-day or express editing options available',
        'Secure file transfer and confidentiality',
      ],
      href: '/services/editing',
      images: [
        'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800',
        'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800',
        'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800',
        'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800',
      ],
    },
    {
      id: 'invitation',
      title: 'Wedding Invitation',
      icon: PenTool,
      description: 'Beautifully crafted invitations that set the tone for your celebration.',
      features: [
        'Custom design consultation',
        'Premium paper and printing options',
        'Handcrafted embellishments (ribbons, wax seals, etc.)',
        'Envelope addressing and calligraphy services',
        'Coordinating RSVP cards and inserts',
        'Digital proofs with unlimited revisions',
        'Worldwide shipping and delivery',
      ],
      href: '/services/invitations',
      images: [
        'https://imgs.search.brave.com/vlTUiZ0eunRG878zclBDfnKhuWmg5CApKXUnZ5oD8Zo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/YnJpZGVzLmNvbS90/aG1iL1ByMllvc3hE/cnRzT2RrYkl2bUhX/UlljUVE0ST0vZml0/LWluLzE1MDB4NjQw/L2ZpbHRlcnM6bm9f/dXBzY2FsZSgpOm1h/eF9ieXRlcygxNTAw/MDApOnN0cmlwX2lj/YygpOmZvcm1hdCh3/ZWJwKS9NaXhib29r/LTQ1MWNhMzI1OWFj/MDRiMGQ5OTM5NDc5/ODQyNGMwYjg0Lmpw/Zw',
        'https://imgs.search.brave.com/lBnrBybDArSkdXO76erRLlwe9gsYm7g-3eYhPR63NtI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMDgv/Njk2LzQ2My9zbWFs/bC9sdXh1cnktd2Vk/ZGluZy1pbnZpdGF0/aW9uLXRlbXBsYXRl/LWZyZWUtdmVjdG9y/LmpwZw',
        'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800',
        'https://imgs.search.brave.com/bmeqYZaneyEqdgaEIRUdmywCVNLRVg1SQ8d25LdjH-4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA0Lzc1LzQzLzM4/LzM2MF9GXzQ3NTQz/Mzg1MV9IanNkMnYy/UDdJV2QzdjB1bUFt/bndpVWpTNlZFdmVX/Yi5qcGc',
      ],
    },
    {
      id: 'makeup',
      title: 'Make Up Artist',
      icon: User,
      description: 'Expert makeup artists to make you look and feel your best on your special day.',
      features: [
        'Pre-wedding makeup trial session',
        'Bridal, bridesmaid, and mother-of-the-bride makeup',
        'Airbrush makeup for long-lasting wear',
        'Hairstyling for all hair types',
        'Use of premium, hypoallergenic products',
        'On-location service at your venue',
        'Touch-up kit and assistance throughout the event',
      ],
      href: '/services/makeup',
      images: [
        "https://imgs.search.brave.com/HUStIwD36gIxx46-Z6yLpObdF7N5v1MLsYaQbF2hzHQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTc1/OTg2MTA1MC9waG90/by9wb3J0cmFpdC1v/Zi1iZWF1dGlmdWwt/aW5kaWFuLWJyaWRl/LWdldHRpbmctcmVh/ZHktZm9yLWhlci13/ZWRkaW5nLWNlcmVt/b255LmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz0tenUyVlBT/eFlrcW9HMV9CS0NI/a0lDRlR3Zi1pdTdw/UEFiYW1qTXROU1E4/PQ",
        "https://imgs.search.brave.com/tKZFEXCc0ea7u1gOHZuOE7WIdop5G-m26EvazCIBbGg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM0/MDMwMjUzNS9waG90/by9iZWF1dGlmdWwt/aW5kaWFuLXdvbWFu/LWdldHRpbmctcmVh/ZHktdG8tYS13ZWRk/aW5nLXJlY2VwdGlv/bi1hdC10aGUtYmVh/dXR5LXBhcmxvci5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/R3poaXZ0YXFMSURY/QlE2OVIwRGxJT2Z3/WTRhT1lVSTY3Z3hX/S1RNM29vQT0",
        bride1,
        bride2
      ]
    },
    {
      id: 'e-invites',
      title: 'Wedding E-Invites',
      icon: Gift,
      description: 'Elegant digital invitations for the modern, eco-conscious couple.',
      features: [
        'Custom animated or static digital designs',
        'Interactive RSVP tracking and guest management',
        'Wedding website integration',
        'SMS and WhatsApp sharing options',
        'Real-time guest list updates',
        'Eco-friendly and cost-effective solution',
        'Technical support for guest accessibility',
      ],
      href: '/services/e-invites',
      images: [
        'https://imgs.search.brave.com/Pu79DZ6yfFgyAQeC_J9dG9cXES19Nzs_YH3iWwaK1xk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTIw/NDI0NDU5Ny92ZWN0/b3Ivd2VkZGluZy1m/bG9yYWwtaW52aXRh/dGlvbi10aGFuay15/b3UtbW9kZXJuLWNh/cmQtcm9zZW1hcnkt/ZXVjYWx5cHR1cy1i/cmFuY2hlcy13cmVh/dGgtb24td2hpdGUu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PXhQcUN4LUo1cmYx/NklPRkhPR0x4Yktz/WUVpWlVQcGRva0Fj/VWo0UnpQUnc9',
        'https://imgs.search.brave.com/2K4hYmxgig0E8uk2JbUjXVCkpzL5mpcdNLOSp9b8VAY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tYXJr/ZXRwbGFjZS5jYW52/YS5jb20vRUFHendm/dmRwMk0vMS8wLzE2/MDB3L2NhbnZhLXBl/YWNoLWVsZWdhbnQt/ZmxvcmFsLXdlZGRp/bmctaW52aXRhdGlv/bi1sYW5kc2NhcGUt/QzdsaFFUN3JfQkUu/anBn',
        'https://imgs.search.brave.com/dIVmNXmKDf5CAD5cT278UjAWDY4Fqg04d1RUB8DkvSU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zc3It/cmVsZWFzZXMtY2Ru/LnBhcGVybGVzc3Bv/c3QuY29tL19uZXh0/L3N0YXRpYy92aWRl/by9QYXBlclNvdXJj/ZUhvbGlkYXlCYW5u/ZXItMDg4MGJjZGM2/YmM5YWU0MTAwNmE2/NzdjZDdmN2E4ZTY4/OTc1MmY1OTQxY2Q1/NmIxNzNiN2Y1NDdh/YTA0NzkyZi5wbmc',
        'https://imgs.search.brave.com/ohlb1xkSp0M2UF1NmzkhBSinUgfP4ARracE9sUh_X2k/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAzLzU0Lzk2LzEz/LzM2MF9GXzM1NDk2/MTMxM19SQkY0aXZK/SnJtaFQ2bnkybTZK/OGhaUWExRE85OXpH/Ui5qcGc',
      ],
    },
    {
      id: 'album',
      title: 'Wedding Album',
      icon: BookOpen,
      description: 'Beautifully designed albums to preserve your memories for generations.',
      features: [
        'Custom album design consultation',
        'Lay-flat pages with premium photo paper',
        'Leather, linen, or acrylic cover options',
        'Handcrafted box presentation',
        'Pre-wedding and wedding day photo layouts',
        'Unlimited design revisions until perfect',
        'Archival quality for lasting preservation',
      ],
      href: '/services/album',
      images: [
        wedding1,
        wedding2,
        wedding3,
        wedding4,
      ],
    },
    {
      id: 'catering',
      title: 'Catering',
      icon: Utensils,
      description: 'Exquisite culinary experiences tailored to your taste and style.',
      features: [
        'Personalized menu tasting session',
        'Custom menu design (global cuisines, dietary needs)',
        'Live food stations and interactive counters',
        'Beverage pairing and bar service',
        'Elegant tableware and setup coordination',
        'Staffing for service and cleanup',
        'Wedding cake and dessert table design',
      ],
      href: '/services/catering',
      images: [
        'https://images.unsplash.com/photo-1555244162-803834f70033?w=800',
        'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800',
        'https://imgs.search.brave.com/bgfrEkB3S34FU3fzeMIwdkNapwqdxV9xGPnu-4_ywkU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly91cy4x/MjNyZi5jb20vNDUw/d20vbGVsaWs4My9s/ZWxpazgzMTcwMS9s/ZWxpazgzMTcwMTAw/MDU1LzcwMTkxMDM2/LWNhdGVyaW5nLWZv/b2Qtd2VkZGluZy1l/dmVudC10YWJsZS5q/cGc_dmVyPTY',
        'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800',
      ],
    },
  ];

  return (
    <div className="bg-white" style={{ paddingTop: '117px' }}>
      {/* Hero Section */}
      <section style={{ padding: '100px 0 80px' }}>
        <div className="mx-auto text-center" style={{ maxWidth: '900px', padding: '0 60px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p
              className="mb-4 uppercase tracking-widest"
              style={{ fontSize: '11px', letterSpacing: '3px', color: '#9A9A9A' }}
            >
              Enhanced Options
            </p>
            <h1
              className="font-heading mb-8"
              style={{ fontSize: '64px', lineHeight: '1.15', color: '#C9A7A0', fontWeight: 400 }}
            >
              Additional Services
            </h1>
            <p
              className="leading-relaxed"
              style={{ fontSize: '18px', lineHeight: '1.8', color: '#6F6F6F' }}
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
          style={{
            padding: index % 2 === 0 ? '80px 0' : '80px 0',
            backgroundColor: index % 2 === 0 ? '#FFFFFF' : '#FAFAFA',
          }}
        >
          <div className="mx-auto" style={{ maxWidth: '1400px', padding: '0 60px' }}>
            {/* Service Header */}
            <div className="mb-12 text-center">
              <div
                className="mx-auto mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full"
                style={{ backgroundColor: '#F2E8E6' }}
              >
                <service.icon className="h-10 w-10" style={{ color: '#C9A7A0' }} />
              </div>
              <h2
                className="font-heading mb-4"
                style={{ fontSize: '42px', lineHeight: '1.2', color: '#C9A7A0', fontWeight: 400 }}
              >
                {service.title}
              </h2>
              <p
                className="mx-auto leading-relaxed"
                style={{ maxWidth: '700px', fontSize: '18px', lineHeight: '1.8', color: '#6F6F6F' }}
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
                      className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/20" />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Features and CTA */}
            <div className="mx-auto" style={{ maxWidth: '900px' }}>
              <div className="mb-8 rounded-lg p-8" style={{ backgroundColor: '#F2E8E6' }}>
                <p
                  className="mb-6 text-center uppercase tracking-wider"
                  style={{ fontSize: '12px', letterSpacing: '3px', color: '#9A9A9A' }}
                >
                  What's Included
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
                  className="inline-flex items-center gap-2 uppercase tracking-widest transition-all duration-500"
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
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}

      {/* CTA Section */}
      <section style={{ padding: '80px 0 100px', backgroundColor: '#FFFFFF' }}>
        <div className="mx-auto text-center" style={{ maxWidth: '800px', padding: '0 60px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="mx-auto mb-8 flex items-center justify-center rounded-full"
              style={{ width: '100px', height: '100px', backgroundColor: '#F2E8E6' }}
            >
              <Calendar className="h-12 w-12" style={{ color: '#C9A7A0' }} />
            </div>
            <h2
              className="font-heading mb-6"
              style={{ fontSize: '42px', lineHeight: '1.2', color: '#C9A7A0', fontWeight: 400 }}
            >
              Ready to Enhance Your Celebration?
            </h2>
            <p
              className="mx-auto mb-10 max-w-2xl leading-relaxed"
              style={{ fontSize: '16px', lineHeight: '1.8', color: '#6F6F6F' }}
            >
              Let us help you add those special touches that make your wedding uniquely yours.
              Contact us to customize a package that includes your favorite additional services.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 uppercase tracking-widest transition-all duration-500"
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