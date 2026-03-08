import { motion } from 'framer-motion';
import { Heart, Award, Users, Sparkles, Globe, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: 'Passion',
      description: 'We pour our hearts into every celebration, treating each wedding as if it were our own.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Uncompromising attention to detail and commitment to perfection in every element.',
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'Building lasting relationships with couples, understanding their unique love story.',
    },
    {
      icon: Sparkles,
      title: 'Creativity',
      description: 'Innovative designs and fresh perspectives that bring your vision to life.',
    },
  ];

  const stats = [
    { number: '500+', label: 'Weddings Planned' },
    { number: '15+', label: 'Years Experience' },
    { number: '25+', label: 'Countries' },
    { number: '98%', label: 'Client Satisfaction' },
  ];

  const team = [
    {
      name: 'Sophia Laurent',
      role: 'Founder & Creative Director',
      description: 'With over 15 years in luxury event planning, Sophia brings unparalleled expertise and artistic vision to every celebration.',
    },
    {
      name: 'Isabella Chen',
      role: 'Lead Wedding Designer',
      description: 'Isabella\'s eye for detail and passion for aesthetics creates breathtaking visual experiences that exceed expectations.',
    },
    {
      name: 'Aria Patel',
      role: 'Destination Specialist',
      description: 'Aria\'s global network and cultural expertise ensure seamless celebrations in the world\'s most enchanting locations.',
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
              Our Story
            </p>
            <h1 className="font-heading mb-8" style={{ fontSize: '64px', lineHeight: '1.15', color: '#C9A7A0', fontWeight: 400 }}>
              Where Dreams Meet Reality
            </h1>
            <p className="leading-relaxed mb-6" style={{ fontSize: '18px', lineHeight: '1.8', color: '#6F6F6F' }}>
              HeavenlyWeds was born from a simple belief: every love story deserves to be celebrated in extraordinary fashion. 
              We craft bespoke weddings that transcend expectations, transforming your vision into an unforgettable reality.
            </p>
            <p className="leading-relaxed" style={{ fontSize: '16px', lineHeight: '1.8', color: '#9A9A9A' }}>
              From intimate ceremonies in Tuscan vineyards to grand celebrations overlooking Lake Como, we orchestrate 
              moments of pure magic in the world's most breathtaking destinations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ padding: '60px 0', backgroundColor: '#F2E8E6' }}>
        <div className="mx-auto" style={{ maxWidth: '1200px', padding: '0 60px' }}>
          <div className="grid grid-cols-2 gap-12 md:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="font-heading mb-2" style={{ fontSize: '48px', lineHeight: '1', color: '#C9A7A0', fontWeight: 400 }}>
                  {stat.number}
                </div>
                <div className="uppercase tracking-wider" style={{ fontSize: '11px', letterSpacing: '2px', color: '#6F6F6F' }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section style={{ padding: '120px 0' }}>
        <div className="mx-auto" style={{ maxWidth: '1200px', padding: '0 60px' }}>
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="mb-4 uppercase tracking-widest" style={{ fontSize: '11px', letterSpacing: '3px', color: '#9A9A9A' }}>
                Our Philosophy
              </p>
              <h2 className="font-heading mb-6" style={{ fontSize: '42px', lineHeight: '1.2', color: '#C9A7A0', fontWeight: 400 }}>
                Crafting Timeless Celebrations
              </h2>
              <p className="leading-relaxed mb-6" style={{ fontSize: '16px', lineHeight: '1.8', color: '#6F6F6F' }}>
                We believe that luxury lies in the details—the perfect lighting at sunset, the carefully curated floral arrangements, 
                the seamless flow of each moment. Our approach combines meticulous planning with creative artistry, ensuring every 
                element reflects your unique love story.
              </p>
              <p className="leading-relaxed mb-8" style={{ fontSize: '16px', lineHeight: '1.8', color: '#9A9A9A' }}>
                From the first consultation to your final dance, we're with you every step of the way, transforming stress into 
                excitement and dreams into cherished memories.
              </p>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 uppercase tracking-widest transition-all duration-500"
                style={{
                  padding: '16px 40px',
                  fontSize: '11px',
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
                <Sparkles className="h-4 w-4" />
                Explore Our Services
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
              style={{ height: '500px' }}
            >
              <img
                src="/airo-assets/images/pages/about/philosophy"
                alt="Luxury wedding setup"
                className="h-full w-full object-cover rounded-sm"
                style={{ filter: 'brightness(0.98) saturate(0.85)' }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section style={{ padding: '80px 0 120px', backgroundColor: '#FAFAFA' }}>
        <div className="mx-auto" style={{ maxWidth: '1200px', padding: '0 60px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="mb-4 uppercase tracking-widest" style={{ fontSize: '11px', letterSpacing: '3px', color: '#9A9A9A' }}>
              What Drives Us
            </p>
            <h2 className="font-heading" style={{ fontSize: '42px', lineHeight: '1.2', color: '#C9A7A0', fontWeight: 400 }}>
              Our Core Values
            </h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-8 bg-white rounded-sm"
                style={{ border: '1px solid #ECECEC' }}
              >
                <div
                  className="inline-flex items-center justify-center mb-6 rounded-full"
                  style={{ width: '80px', height: '80px', backgroundColor: '#F2E8E6' }}
                >
                  <value.icon className="h-8 w-8" style={{ color: '#C9A7A0' }} />
                </div>
                <h3 className="font-heading mb-3" style={{ fontSize: '22px', color: '#6F6F6F', fontWeight: 500 }}>
                  {value.title}
                </h3>
                <p style={{ fontSize: '14px', lineHeight: '1.7', color: '#9A9A9A' }}>
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section style={{ padding: '120px 0' }}>
        <div className="mx-auto" style={{ maxWidth: '1200px', padding: '0 60px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="mb-4 uppercase tracking-widest" style={{ fontSize: '11px', letterSpacing: '3px', color: '#9A9A9A' }}>
              The Dream Team
            </p>
            <h2 className="font-heading mb-6" style={{ fontSize: '42px', lineHeight: '1.2', color: '#C9A7A0', fontWeight: 400 }}>
              Meet Our Experts
            </h2>
            <p className="mx-auto leading-relaxed" style={{ maxWidth: '700px', fontSize: '16px', lineHeight: '1.8', color: '#6F6F6F' }}>
              Our team of passionate professionals brings decades of combined experience in luxury event planning, 
              design, and destination management.
            </p>
          </motion.div>

          <div className="grid gap-12 md:grid-cols-3">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="text-center"
              >
                <div className="mb-6 overflow-hidden rounded-sm" style={{ height: '400px' }}>
                  <img
                    src={`/airo-assets/images/pages/about/team-${index + 1}`}
                    alt={member.name}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    style={{ filter: 'brightness(0.98) saturate(0.85)' }}
                  />
                </div>
                <h3 className="font-heading mb-2" style={{ fontSize: '24px', color: '#6F6F6F', fontWeight: 500 }}>
                  {member.name}
                </h3>
                <p className="mb-4 uppercase tracking-wider" style={{ fontSize: '11px', letterSpacing: '2px', color: '#C9A7A0' }}>
                  {member.role}
                </p>
                <p style={{ fontSize: '14px', lineHeight: '1.7', color: '#9A9A9A' }}>
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section style={{ padding: '80px 0 120px', backgroundColor: '#F2E8E6' }}>
        <div className="mx-auto text-center" style={{ maxWidth: '900px', padding: '0 60px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center mb-8 rounded-full" style={{ width: '100px', height: '100px', backgroundColor: '#FFFFFF' }}>
              <Globe className="h-12 w-12" style={{ color: '#C9A7A0' }} />
            </div>
            <h2 className="font-heading mb-6" style={{ fontSize: '42px', lineHeight: '1.2', color: '#C9A7A0', fontWeight: 400 }}>
              Worldwide Celebrations
            </h2>
            <p className="leading-relaxed mb-8" style={{ fontSize: '16px', lineHeight: '1.8', color: '#6F6F6F' }}>
              From the romantic shores of Lake Como to the majestic palaces of Rajasthan, we bring our expertise to 
              the world's most stunning destinations. Our global network of trusted vendors and venues ensures seamless 
              execution, no matter where your dream celebration takes place.
            </p>
            <Link
              to="/locations"
              className="inline-flex items-center gap-2 uppercase tracking-widest transition-all duration-500"
              style={{
                padding: '16px 40px',
                fontSize: '11px',
                letterSpacing: '2px',
                backgroundColor: '#FFFFFF',
                color: '#6F6F6F',
                border: '1px solid transparent',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#C9A7A0';
                e.currentTarget.style.color = '#FFFFFF';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#FFFFFF';
                e.currentTarget.style.color = '#6F6F6F';
              }}
            >
              <Globe className="h-4 w-4" />
              Explore Destinations
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '100px 0' }}>
        <div className="mx-auto text-center" style={{ maxWidth: '800px', padding: '0 60px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading mb-6" style={{ fontSize: '48px', lineHeight: '1.2', color: '#C9A7A0', fontWeight: 400 }}>
              Let's Create Your Perfect Day
            </h2>
            <p className="leading-relaxed mb-10" style={{ fontSize: '16px', lineHeight: '1.8', color: '#6F6F6F' }}>
              Ready to begin planning the celebration of your dreams? Schedule a complimentary consultation 
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
