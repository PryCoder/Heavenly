import { motion } from 'framer-motion';
import { Check, ArrowRight, Calendar, Sparkles, Heart } from 'lucide-react';
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
}

export default function ServicesPage() {
  const services: Service[] = [
    {
      id: 'full-planning',
      title: 'Full Wedding Planning',
      subtitle: 'Complete End-to-End Service',
      description: 'From the moment you say "yes" to your final dance, we handle every detail of your celebration. Our comprehensive planning service ensures a stress-free journey to your perfect day.',
      features: [
        'Unlimited planning consultations',
        'Complete vendor sourcing and management',
        'Budget creation and tracking',
        'Venue selection and contract negotiation',
        'Design concept and styling',
        'Timeline and logistics coordination',
        'Guest management and RSVP tracking',
        'Rehearsal coordination',
        'Full day-of coordination with team',
        'Post-wedding wrap-up services',
      ],
      idealFor: 'Couples seeking a completely hands-off planning experience',
      href: '/services/full-planning',
      featured: true,
    },
    {
      id: 'partial-planning',
      title: 'Partial Planning',
      subtitle: 'Guided Planning Support',
      description: 'Perfect for couples who want to be involved in the planning process but need expert guidance and support. We step in where you need us most.',
      features: [
        'Initial planning consultation',
        'Vendor recommendations and referrals',
        'Budget guidance and review',
        'Design consultation and mood boards',
        'Timeline creation',
        'Vendor contract review',
        'Monthly check-in meetings',
        'Final month coordination',
        'Rehearsal coordination',
        'Day-of coordination with assistant',
      ],
      idealFor: 'Couples who want to be involved but need professional guidance',
      href: '/services/partial-planning',
    },
    {
      id: 'day-of',
      title: 'Day-Of Coordination',
      subtitle: 'Seamless Execution',
      description: 'You\'ve done the planning—now let us bring it all together. Our day-of coordination ensures flawless execution so you can enjoy every moment.',
      features: [
        'Two planning meetings before the wedding',
        'Detailed timeline creation',
        'Vendor confirmation and coordination',
        'Rehearsal attendance and direction',
        'Setup oversight and styling',
        'Timeline management on wedding day',
        'Vendor coordination and troubleshooting',
        'Guest assistance and direction',
        'Emergency kit and problem-solving',
        'End-of-night breakdown coordination',
      ],
      idealFor: 'Organized couples who need expert execution on the day',
      href: '/services/day-of',
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

  const additionalServices = [
    'Destination wedding planning',
    'Multi-day celebration coordination',
    'Cultural ceremony expertise',
    'Luxury vendor network access',
    'Custom design and styling',
    'Guest accommodation coordination',
    'Welcome events and rehearsal dinners',
    'Post-wedding brunch planning',
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
              Whether you need complete planning from start to finish or expert coordination on your wedding day, 
              we offer flexible services designed to match your needs and bring your dream celebration to life.
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

                {/* Features List */}
                <div className="mb-8 flex-1">
                  <p className="mb-4 uppercase tracking-wider" style={{ fontSize: '11px', letterSpacing: '2px', color: '#9A9A9A' }}>
                    What's Included
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: '#C9A7A0' }} />
                        <span style={{ fontSize: '14px', lineHeight: '1.6', color: '#6F6F6F' }}>
                          {feature}
                        </span>
                      </li>
                    ))}
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

      {/* Our Process */}
      <section style={{ padding: '80px 0 120px', backgroundColor: '#F2E8E6' }}>
        <div className="mx-auto" style={{ maxWidth: '1200px', padding: '0 60px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="mb-4 uppercase tracking-widest" style={{ fontSize: '11px', letterSpacing: '3px', color: '#9A9A9A' }}>
              How We Work
            </p>
            <h2 className="font-heading mb-6" style={{ fontSize: '48px', lineHeight: '1.2', color: '#C9A7A0', fontWeight: 400 }}>
              Our Planning Process
            </h2>
            <p className="mx-auto leading-relaxed" style={{ maxWidth: '700px', fontSize: '16px', lineHeight: '1.8', color: '#6F6F6F' }}>
              A proven approach that transforms your vision into an unforgettable celebration
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div
                  className="inline-flex items-center justify-center mb-6 rounded-full"
                  style={{ width: '80px', height: '80px', backgroundColor: '#FFFFFF', border: '2px solid #C9A7A0' }}
                >
                  <span className="font-heading" style={{ fontSize: '28px', color: '#C9A7A0', fontWeight: 400 }}>
                    {step.number}
                  </span>
                </div>
                <h3 className="font-heading mb-3" style={{ fontSize: '20px', color: '#6F6F6F', fontWeight: 500 }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '14px', lineHeight: '1.7', color: '#9A9A9A' }}>
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
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
              Enhanced Options
            </p>
            <h2 className="font-heading mb-6" style={{ fontSize: '42px', lineHeight: '1.2', color: '#C9A7A0', fontWeight: 400 }}>
              Additional Services
            </h2>
            <p className="leading-relaxed" style={{ fontSize: '16px', lineHeight: '1.8', color: '#6F6F6F' }}>
              Enhance your planning experience with our specialized services
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid gap-4 md:grid-cols-2"
          >
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 rounded-sm"
                style={{ border: '1px solid #ECECEC' }}
              >
                <Sparkles className="h-5 w-5 flex-shrink-0" style={{ color: '#C9A7A0' }} />
                <span style={{ fontSize: '14px', color: '#6F6F6F' }}>
                  {service}
                </span>
              </div>
            ))}
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
              Let's Start Planning Together
            </h2>
            <p className="leading-relaxed mb-10" style={{ fontSize: '16px', lineHeight: '1.8', color: '#6F6F6F' }}>
              Schedule your complimentary consultation to discuss your vision and discover which service 
              is perfect for your celebration. We can't wait to hear your story.
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
