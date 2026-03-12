import { motion } from 'framer-motion';
import { 
  Calendar, Heart, ArrowRight, Star, Clock, Users, 
  Camera, MapPin, Globe, ChevronRight, MessageCircle, 
  Phone, Mail, Video, Coffee, Target, Sparkles, 
  Shield, Award, CheckCircle, BookOpen, Compass,
  Download
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PlanPage() {
  const planningSteps = [
    {
      number: '01',
      title: 'Discovery',
      description: 'We learn about your vision, style, and dream destination to understand what makes your love story unique.',
      icon: Heart,
      color: 'bg-[#F9F0ED]'
    },
    {
      number: '02',
      title: 'Destination Selection',
      description: 'Based on your preferences, we recommend the perfect destinations and venues that match your vision.',
      icon: Globe,
      color: 'bg-[#F9F0ED]'
    },
    {
      number: '03',
      title: 'Curated Venues',
      description: 'Receive a handpicked selection of venues with detailed information, pricing, and availability.',
      icon: MapPin,
      color: 'bg-[#F9F0ED]'
    },
    {
      number: '04',
      title: 'Site Visits',
      description: 'We arrange and accompany you to tour your favorite venues (optional, but highly recommended).',
      icon: Camera,
      color: 'bg-[#F9F0ED]'
    },
    {
      number: '05',
      title: 'Proposal & Budget',
      description: 'Get a comprehensive proposal with venue costs, vendor recommendations, and budget breakdown.',
      icon: Target,
      color: 'bg-[#F9F0ED]'
    },
    {
      number: '06',
      title: 'Secure Your Date',
      description: 'Once you\'ve chosen your venue, we help with contracts, deposits, and begin the planning journey.',
      icon: CheckCircle,
      color: 'bg-[#F9F0ED]'
    }
  ];

  const services = [
    {
      title: 'Full Planning',
      description: 'Complete wedding planning from concept to execution, including vendor management and on-day coordination.',
      features: [
        'Venue research & selection',
        'Budget management',
        'Vendor contracts & negotiations',
        'Design & styling',
        'Guest management',
        'On-day coordination'
      ],
      ideal: 'Ideal for couples seeking a completely hands-off experience'
    },
    {
      title: 'Partial Planning',
      description: 'Expert guidance for couples who have started planning but need professional support to bring it together.',
      features: [
        'Vendor recommendations',
        'Budget review',
        'Design consultation',
        'Timeline creation',
        'Monthly check-ins',
        'On-day coordination'
      ],
      ideal: 'Ideal for couples who\'ve done initial research but want expert guidance'
    },
    {
      title: 'Month-Of Coordination',
      description: 'Stress-free execution in your final weeks, ensuring every detail is perfect on your big day.',
      features: [
        'Vendor confirmation',
        'Detailed timeline',
        'Rehearsal coordination',
        'On-day management',
        'Emergency kit',
        'Vendor liaison'
      ],
      ideal: 'Ideal for couples who\'ve planned everything but want professional execution'
    }
  ];

  const destinations = [
    {
      country: 'Italy',
      regions: ['Lake Como', 'Tuscany', 'Amalfi Coast', 'Venice', 'Florence'],
      image: 'https://images.unsplash.com/photo-1534265264056-4a5e9c816aa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80',
      href: '/locations/italy'
    },
    {
      country: 'France',
      regions: ['French Riviera', 'Provence', 'Paris', 'Loire Valley', 'Bordeaux'],
      image: 'https://images.unsplash.com/photo-1549144511-f099e773c147?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80',
      href: '/locations/france'
    },
    {
      country: 'India',
      regions: ['Rajasthan', 'Goa', 'Kerala', 'Udaipur', 'Jaipur'],
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80',
      href: '/locations/india'
    }
  ];

  const faqs = [
    {
      question: 'How far in advance should I start planning?',
      answer: 'For destination weddings, we recommend starting 12-18 months in advance. This allows ample time for venue booking, guest travel arrangements, and securing the best vendors.'
    },
    {
      question: 'Do I need to visit the destination before the wedding?',
      answer: 'While not mandatory, we highly recommend a site visit. We can arrange and accompany you to tour venues, meet vendors, and experience the location firsthand.'
    },
    {
      question: 'How do you handle language barriers with local vendors?',
      answer: 'Our team is fluent in multiple languages including Italian, French, and Hindi. We handle all vendor communications and contract translations.'
    },
    {
      question: 'What happens if there\'s bad weather on my wedding day?',
      answer: 'We always have a comprehensive backup plan for every venue, including indoor alternatives and weather contingency arrangements.'
    },
    {
      question: 'Can you help with guest travel and accommodation?',
      answer: 'Absolutely! We provide group booking coordination, welcome bag arrangements, and travel recommendations for your guests.'
    }
  ];

  const testimonials = [
    {
      quote: "They made our Lake Como wedding absolutely perfect. Every detail was handled with care and professionalism.",
      author: "Sarah & Michael",
      wedding: "Lake Como, Italy",
      image: "https://images.unsplash.com/photo-1522673607200-164d1b3ce5aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80"
    },
    {
      quote: "Planning a wedding from another country seemed daunting, but their team made it effortless. Best decision ever!",
      author: "Priya & David",
      wedding: "Udaipur, India",
      image: "https://images.unsplash.com/photo-1531747118685-ca8fa6e08806?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80"
    },
    {
      quote: "The attention to detail and local knowledge they brought to our Provence wedding was invaluable.",
      author: "Emma & Thomas",
      wedding: "Provence, France",
      image: "https://images.unsplash.com/photo-1522673607200-164d1b3ce5aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80"
    }
  ];

  const resources = [
    { name: 'Destination Wedding Checklist', type: 'PDF Guide' },
    { name: 'Budget Planning Worksheet', type: 'Excel Template' },
    { name: 'Vendor Comparison Tool', type: 'Interactive Tool' },
    { name: 'Guest Travel Tracker', type: 'Template' }
  ];

  return (
    <div className="bg-white pt-[117px]">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 lg:py-32 px-4 md:px-8 bg-[#FAFAFA] overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#C9A7A0] blur-3xl" />
          <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-[#C9A7A0] blur-3xl" />
        </div>
        
        <div className="relative mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center mb-6 w-16 h-16 rounded-full bg-[#F2E8E6]">
              <Compass className="h-8 w-8 text-[#C9A7A0]" />
            </div>
            <h1 className="font-heading mb-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#C9A7A0] font-light">
              Let's Plan Your Dream Wedding
            </h1>
            <p className="text-lg md:text-xl text-[#6F6F6F] max-w-3xl mx-auto mb-8">
              Every love story deserves a beautiful beginning. Let us guide you through 
              every step of creating your perfect destination wedding.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="#how-it-works"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#C9A7A0] text-white text-sm uppercase tracking-[2px] hover:bg-[#B89690] transition-colors"
              >
                How It Works
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="#services"
                className="inline-flex items-center gap-2 px-8 py-4 border border-[#C9A7A0] text-[#6F6F6F] text-sm uppercase tracking-[2px] hover:bg-[#F2E8E6] transition-colors"
              >
                Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4 md:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-[#C9A7A0] font-light mb-4">
              Your Journey Begins Here
            </h2>
            <p className="text-[#6F6F6F] max-w-2xl mx-auto">
              A simple, stress-free process designed to bring your vision to life
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {planningSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className={`${step.color} p-8 rounded-sm h-full`}>
                    <span className="text-4xl font-light text-[#C9A7A0] opacity-30 mb-4 block">
                      {step.number}
                    </span>
                    <IconComponent className="h-8 w-8 text-[#C9A7A0] mb-4" />
                    <h3 className="font-heading text-xl text-[#C9A7A0] mb-3">{step.title}</h3>
                    <p className="text-sm text-[#6F6F6F]">{step.description}</p>
                  </div>
                  {index < planningSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 text-[#C9A7A0]">
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-[#FAFAFA] px-4 md:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-[#C9A7A0] font-light mb-4">
              Planning Packages
            </h2>
            <p className="text-[#6F6F6F] max-w-2xl mx-auto">
              Choose the level of support that's right for you
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="font-heading text-2xl text-[#C9A7A0] mb-3">{service.title}</h3>
                <p className="text-sm text-[#6F6F6F] mb-6">{service.description}</p>
                
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-[#6F6F6F]">
                      <CheckCircle className="h-4 w-4 text-[#C9A7A0] flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <p className="text-xs text-[#9A9A9A] italic border-t border-[#E5D5D0] pt-4">
                  {service.ideal}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-20 px-4 md:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-[#C9A7A0] font-light mb-4">
              Our Destinations
            </h2>
            <p className="text-[#6F6F6F] max-w-2xl mx-auto">
              Specializing in the world's most romantic locations
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {destinations.map((dest, index) => (
              <motion.div
                key={dest.country}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={dest.href} className="group block">
                  <div className="relative overflow-hidden rounded-sm h-64 mb-4">
                    <img
                      src={dest.image}
                      alt={dest.country}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                  </div>
                  <h3 className="font-heading text-2xl text-[#C9A7A0] mb-2">{dest.country}</h3>
                  <p className="text-sm text-[#6F6F6F] mb-3">
                    {dest.regions.join(' • ')}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm text-[#C9A7A0] group-hover:gap-2 transition-all">
                    Explore {dest.country}
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-[#FAFAFA] px-4 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-3xl md:text-4xl text-[#C9A7A0] font-light mb-6">
                Why Couples Trust Us With Their Dream Wedding
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: Award,
                    title: '10+ Years Experience',
                    description: 'Over a decade of planning luxury destination weddings across three continents.'
                  },
                  {
                    icon: Globe,
                    title: 'Local Expertise',
                    description: 'Deep relationships with venues and vendors in every destination we serve.'
                  },
                  {
                    icon: Shield,
                    title: 'Stress-Free Planning',
                    description: 'We handle everything, so you can focus on celebrating your love.'
                  },
                  {
                    icon: Sparkles,
                    title: 'Personalized Approach',
                    description: 'Every wedding is unique, and we treat it that way.'
                  }
                ].map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <IconComponent className="h-6 w-6 text-[#C9A7A0]" />
                      </div>
                      <div>
                        <h3 className="font-heading text-lg text-[#C9A7A0] mb-1">{item.title}</h3>
                        <p className="text-sm text-[#6F6F6F]">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Happy couple at their destination wedding"
                className="rounded-sm shadow-lg"
              />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#C9A7A0]/10 rounded-full blur-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 md:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-[#C9A7A0] font-light mb-4">
              Love Stories
            </h2>
            <p className="text-[#6F6F6F] max-w-2xl mx-auto">
              Real couples, real experiences, unforgettable celebrations
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#FAFAFA] p-8 rounded-sm relative"
              >
                <div className="absolute -top-3 -left-3 text-6xl text-[#C9A7A0] opacity-20">"</div>
                <p className="text-[#6F6F6F] italic mb-6 relative z-10">{testimonial.quote}</p>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium text-[#C9A7A0]">{testimonial.author}</p>
                    <p className="text-xs text-[#9A9A9A]">{testimonial.wedding}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#FAFAFA] px-4 md:px-8">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl text-[#C9A7A0] font-light mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-[#6F6F6F]">
              Everything you need to know about planning your destination wedding
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-sm"
              >
                <h3 className="font-heading text-lg text-[#C9A7A0] mb-2">{faq.question}</h3>
                <p className="text-sm text-[#6F6F6F]">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Resources */}
      <section className="py-20 px-4 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-3xl md:text-4xl text-[#C9A7A0] font-light mb-4">
                Free Planning Resources
              </h2>
              <p className="text-[#6F6F6F] mb-8">
                Download our expert-created tools to start your planning journey
              </p>

              <div className="space-y-3">
                {resources.map((resource, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-[#FAFAFA] rounded-sm">
                    <div className="flex items-center gap-3">
                      <BookOpen className="h-5 w-5 text-[#C9A7A0]" />
                      <div>
                        <h4 className="font-medium text-sm text-[#6F6F6F]">{resource.name}</h4>
                        <p className="text-xs text-[#9A9A9A]">{resource.type}</p>
                      </div>
                    </div>
                    <button className="text-[#C9A7A0] hover:text-[#B89690]">
                      <Download className="h-5 w-5" />
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1464368081811-1740e3b80f10?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Wedding planning resources"
                className="rounded-sm shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20 bg-[#FAFAFA] px-4 md:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl text-[#C9A7A0] font-light mb-4">
              Ready to Begin?
            </h2>
            <p className="text-[#6F6F6F] mb-12">
              Choose how you'd like to start your journey with us
            </p>

            <div className="grid gap-6 md:grid-cols-3">
              <Link
                to="/contact"
                className="bg-white p-8 rounded-sm hover:shadow-lg transition-shadow group"
              >
                <MessageCircle className="h-8 w-8 text-[#C9A7A0] mx-auto mb-4" />
                <h3 className="font-heading text-lg text-[#C9A7A0] mb-2">Send a Message</h3>
                <p className="text-sm text-[#6F6F6F] mb-4">Tell us about your vision and we'll respond within 24 hours</p>
                <span className="inline-flex items-center gap-1 text-sm text-[#C9A7A0] group-hover:gap-2 transition-all">
                  Contact us
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>

              <Link
                to="/guides"
                className="bg-white p-8 rounded-sm hover:shadow-lg transition-shadow group"
              >
                <BookOpen className="h-8 w-8 text-[#C9A7A0] mx-auto mb-4" />
                <h3 className="font-heading text-lg text-[#C9A7A0] mb-2">Browse Guides</h3>
                <p className="text-sm text-[#6F6F6F] mb-4">Explore our planning guides and destination resources</p>
                <span className="inline-flex items-center gap-1 text-sm text-[#C9A7A0] group-hover:gap-2 transition-all">
                  View guides
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>

              <Link
                to="/locations"
                className="bg-white p-8 rounded-sm hover:shadow-lg transition-shadow group"
              >
                <Globe className="h-8 w-8 text-[#C9A7A0] mx-auto mb-4" />
                <h3 className="font-heading text-lg text-[#C9A7A0] mb-2">Explore Destinations</h3>
                <p className="text-sm text-[#6F6F6F] mb-4">Discover our featured locations and venues</p>
                <span className="inline-flex items-center gap-1 text-sm text-[#C9A7A0] group-hover:gap-2 transition-all">
                  Explore
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </div>

            <div className="mt-12 pt-12 border-t border-[#E5D5D0]">
              <p className="text-sm text-[#9A9A9A] mb-4">Prefer to talk?</p>
              <div className="flex flex-wrap justify-center gap-8">
                <a href="tel:+1234567890" className="flex items-center gap-2 text-[#6F6F6F] hover:text-[#C9A7A0]">
                  <Phone className="h-4 w-4" />
                  +1 (234) 567-890
                </a>
                <a href="mailto:hello@yourwebsite.com" className="flex items-center gap-2 text-[#6F6F6F] hover:text-[#C9A7A0]">
                  <Mail className="h-4 w-4" />
                  hello@yourwebsite.com
                </a>
                <a href="#" className="flex items-center gap-2 text-[#6F6F6F] hover:text-[#C9A7A0]">
                  <Video className="h-4 w-4" />
                  Schedule a video call
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}