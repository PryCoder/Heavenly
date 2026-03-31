import { motion } from 'framer-motion';
import { Check, ArrowRight, Calendar, Sparkles, Heart, Camera, Plane, Brush } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  idealFor: string;
  href: string;
  featured?: boolean;
  icon?: React.ElementType;
}

export default function ServicesPage() {
  const services: Service[] = [
    {
      id: 'full-planning',
      title: 'Full Wedding Planning',
      subtitle: 'Complete End-to-End Service',
      description: 'Our comprehensive service covers every detail, ensuring a seamless and unforgettable celebration.',
      features: [
        'Three planning consultations',
        'Ticket reservations to accommodations',
        'Arrangements for pickup & drop facilities',
        'Complete vendor sourcing and management',
        'Budget creation and tracking',
        'Venue selection and contract negotiation',
        'Design concept to floral decor and styling',
        'Timeline and logistics coordination',
        'Guest management and RSVP tracking',
        'Rehearsal coordination',
        'Full day-of coordination with our expert team',
        'Professional photography and videography coverage',
        'Creative editing for timeless photos and cinematic films',
        'Post-wedding wrap-up services',
      ],
      idealFor: 'Couples who want to be deeply involved in selecting elements of their day but need a professional sounding board, vendor curation, and logistical oversight.',
      href: '/services/full-planning',
      featured: true,
      icon: Calendar,
    },
    {
      id: 'photo-video',
      title: 'Photography & Videography',
      subtitle: 'Cinematic Storytelling',
      description: 'Our comprehensive service covers every detail, ensuring a seamless and unforgettable celebration.',
      features: [
        'Initial consultation and vision planning',
        'Creative direction and concept development',
        'Pre-wedding shoot planning and execution',
        'Wedding day photography & videography coverage',
        'High-end cinematic filming techniques',
        'Professional photo editing and retouching',
        'Cinematic video editing and highlight films',
        'Timeline coordination for seamless coverage',
        'Assistance with styling and shot planning',
        'Dedicated team for smooth execution',
        'Makeup Artist (Optional)',
        'Props (Optional)',
      ],
      idealFor: 'Couples who want to be deeply involved in selecting elements of their day but need a professional sounding board, vendor curation, and logistical oversight.',
      href: '/services/photo-video',
      icon: Camera,
    },
    {
      id: 'destination',
      title: 'Destination Wedding Services',
      subtitle: 'Worldwide Celebrations',
      description: 'We curate unforgettable destination weddings, ensuring every detail is flawlessly executed no matter where your celebration takes you.',
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
      idealFor: 'Couples who want to be deeply involved in selecting elements of their day but need a professional sounding board, vendor curation, and logistical oversight.',
      href: '/services/destination',
      icon: Plane,
    },
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Initial Consultation',
      description: 'We begin with a complimentary consultation to understand your vision, style, and priorities for your celebration.',
    },
    {
      number: '02',
      title: 'Proposal & Agreement',
      description: 'Receive a detailed proposal outlining our services, timeline, and investment. Once agreed, we begin your journey.',
    },
    {
      number: '03',
      title: 'Planning & Design',
      description: 'We dive into the details—venue selection, vendor curation, design development, and meticulous planning.',
    },
    {
      number: '04',
      title: 'Coordination & Execution',
      description: 'As your wedding approaches, we finalize every detail and ensure flawless execution on your special day.',
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
            <p className="mb-4 uppercase tracking-widest" style={{ fontSize: '11px', letterSpacing: '3px', color: '#9A9A9A' }}>
              Our Services
            </p>
            <h1 className="font-heading mb-8" style={{ fontSize: '64px', lineHeight: '1.15', color: '#C9A7A0', fontWeight: 400 }}>
              Tailored to Your Vision
            </h1>
            <p className="leading-relaxed" style={{ fontSize: '18px', lineHeight: '1.8', color: '#6F6F6F' }}>
              Whether you need complete planning from start to finish, expert photography and cinematography, 
              or a stunning destination wedding, we offer comprehensive services designed to bring your dream celebration to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ padding: '60px 0 120px' }}>
        <div className="mx-auto" style={{ maxWidth: '1400px', padding: '0 60px' }}>
          <div className="grid gap-8 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative flex flex-col"
                style={{
                  border: service.featured ? '2px solid #C9A7A0' : '1px solid #ECECEC',
                  borderRadius: '2px',
                  padding: '48px 40px',
                  backgroundColor: service.featured ? '#FAFAFA' : '#FFFFFF',
                }}
              >
                {/* Featured Badge */}
                {service.featured && (
                  <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 uppercase tracking-wider"
                    style={{
                      padding: '8px 24px',
                      fontSize: '10px',
                      letterSpacing: '2px',
                      backgroundColor: '#C9A7A0',
                      color: '#FFFFFF',
                    }}
                  >
                    Most Popular
                  </div>
                )}

                {/* Service Icon */}
                {service.icon && (
                  <div className="mb-6">
                    <service.icon className="h-10 w-10" style={{ color: '#C9A7A0' }} />
                  </div>
                )}

                {/* Service Header */}
                <div className="mb-8">
                  <p className="mb-2 uppercase tracking-wider" style={{ fontSize: '11px', letterSpacing: '2px', color: '#9A9A9A' }}>
                    {service.subtitle}
                  </p>
                  <h2 className="font-heading mb-4" style={{ fontSize: '32px', lineHeight: '1.2', color: '#6F6F6F', fontWeight: 500 }}>
                    {service.title}
                  </h2>
                  <p className="leading-relaxed" style={{ fontSize: '15px', lineHeight: '1.7', color: '#6F6F6F' }}>
                    {service.description}
                  </p>
                </div>

                {/* Features List - Show first 5 features */}
                <div className="mb-8 flex-1">
                  <p className="mb-4 uppercase tracking-wider" style={{ fontSize: '11px', letterSpacing: '2px', color: '#9A9A9A' }}>
                    What's Included
                  </p>
                  <ul className="space-y-3">
                    {service.features.slice(0, 5).map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: '#C9A7A0' }} />
                        <span style={{ fontSize: '14px', lineHeight: '1.6', color: '#6F6F6F' }}>
                          {feature}
                        </span>
                      </li>
                    ))}
                    {service.features.length > 5 && (
                      <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: '#C9A7A0' }} />
                        <span style={{ fontSize: '14px', lineHeight: '1.6', color: '#6F6F6F', fontStyle: 'italic' }}>
                          + {service.features.length - 5} more services
                        </span>
                      </li>
                    )}
                  </ul>
                </div>

                {/* Ideal For */}
                <div className="mb-8 p-4 rounded-sm" style={{ backgroundColor: service.featured ? '#FFFFFF' : '#F2E8E6' }}>
                  <p className="mb-2 uppercase tracking-wider" style={{ fontSize: '10px', letterSpacing: '2px', color: '#9A9A9A' }}>
                    Ideal For
                  </p>
                  <p style={{ fontSize: '13px', lineHeight: '1.6', color: '#6F6F6F', fontStyle: 'italic' }}>
                    {service.idealFor}
                  </p>
                </div>

                {/* CTA Button */}
                <Link
                  to={service.href}
                  className="inline-flex items-center justify-center gap-2 uppercase tracking-widest transition-all duration-500"
                  style={{
                    padding: '16px 32px',
                    fontSize: '11px',
                    letterSpacing: '2px',
                    backgroundColor: service.featured ? '#C9A7A0' : '#F2E8E6',
                    color: service.featured ? '#FFFFFF' : '#6F6F6F',
                    border: 'none',
                    textDecoration: 'none',
                    textAlign: 'center',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#C9A7A0';
                    e.currentTarget.style.color = '#FFFFFF';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = service.featured ? '#C9A7A0' : '#F2E8E6';
                    e.currentTarget.style.color = service.featured ? '#FFFFFF' : '#6F6F6F';
                  }}
                >
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     
      {/* Why Choose Us */}
      <section style={{ padding: '100px 0' }}>
        <div className="mx-auto" style={{ maxWidth: '1000px', padding: '0 60px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="mb-4 uppercase tracking-widest" style={{ fontSize: '11px', letterSpacing: '3px', color: '#9A9A9A' }}>
              Why Choose Us
            </p>
            <h2 className="font-heading mb-6" style={{ fontSize: '42px', lineHeight: '1.2', color: '#C9A7A0', fontWeight: 400 }}>
              The Heavenly Weds Difference
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid gap-6 md:grid-cols-2"
          >
            <div className="flex items-start gap-4 p-6 rounded-sm" style={{ border: '1px solid #ECECEC' }}>
              <Heart className="h-6 w-6 flex-shrink-0" style={{ color: '#C9A7A0' }} />
              <div>
                <h3 className="font-medium mb-2" style={{ fontSize: '18px', color: '#6F6F6F' }}>Passionate Team</h3>
                <p style={{ fontSize: '14px', color: '#9A9A9A' }}>Dedicated photographers and cinematographers capturing your most beautiful moments.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 rounded-sm" style={{ border: '1px solid #ECECEC' }}>
              <Sparkles className="h-6 w-6 flex-shrink-0" style={{ color: '#C9A7A0' }} />
              <div>
                <h3 className="font-medium mb-2" style={{ fontSize: '18px', color: '#6F6F6F' }}>Creative Excellence</h3>
                <p style={{ fontSize: '14px', color: '#9A9A9A' }}>Blending artistry with innovation to deliver timeless elegance.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 rounded-sm" style={{ border: '1px solid #ECECEC' }}>
              <Camera className="h-6 w-6 flex-shrink-0" style={{ color: '#C9A7A0' }} />
              <div>
                <h3 className="font-medium mb-2" style={{ fontSize: '18px', color: '#6F6F6F' }}>Cinematic Storytelling</h3>
                <p style={{ fontSize: '14px', color: '#9A9A9A' }}>Transforming real emotions into timeless photographs and cinematic films.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 rounded-sm" style={{ border: '1px solid #ECECEC' }}>
              <Plane className="h-6 w-6 flex-shrink-0" style={{ color: '#C9A7A0' }} />
              <div>
                <h3 className="font-medium mb-2" style={{ fontSize: '18px', color: '#6F6F6F' }}>Global Reach</h3>
                <p style={{ fontSize: '14px', color: '#9A9A9A' }}>Based in Mumbai & London, capturing love stories worldwide.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '80px 0 100px', backgroundColor: '#FAFAFA' }}>
        <div className="mx-auto text-center" style={{ maxWidth: '800px', padding: '0 60px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center mb-8 rounded-full" style={{ width: '100px', height: '100px', backgroundColor: '#F2E8E6' }}>
              <Heart className="h-12 w-12" style={{ color: '#C9A7A0' }} />
            </div>
            <h2 className="font-heading mb-6" style={{ fontSize: '48px', lineHeight: '1.2', color: '#C9A7A0', fontWeight: 400 }}>
              Let's Create Your Perfect Day
            </h2>
            <p className="leading-relaxed mb-10" style={{ fontSize: '16px', lineHeight: '1.8', color: '#6F6F6F' }}>
              Ready to begin planning the celebration of your dreams? Schedule your complimentary consultation 
              and let's start bringing your vision to life.
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