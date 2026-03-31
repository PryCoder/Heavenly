import { motion } from 'framer-motion';
import { Heart, Award, Users, Sparkles, Globe, Calendar, Camera, Edit, Film } from 'lucide-react';
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
    { number: '12+', label: 'Years Experience' },
    { number: '20+', label: 'Countries' },
    { number: '98%', label: 'Client Satisfaction' },
  ];

  const team = [
    {
      name: 'Harish Vipin Parekh',
      role: 'Founder & CEO',
      description: 'Founder & CEO of Heavenly Weds, a subsidiary of Parekh Productions. With over 12 years in the film industry, luxury event planning, and execution. With exceptional expertise for storytelling and giving creative direction to every celebration, crafting experiences that are elegant, seamless, and truly unforgettable.',
    },
    {
      name: 'Nipa Parekh',
      role: 'Lead Wedding Designer',
      description: 'A creative visionary, Nipa Parekh brings elegance and detail to every celebration. With a passion for design and decor, she elevates weddings into beautifully curated, unforgettable experiences.',
    },
    {
      name: 'Sanjay Singh',
      role: 'Director of Photography',
      description: 'A highly skilled and talented DOP, Sanjay Singh brings vision and creativity to every frame. With a sharp eye for detail and a passion for storytelling, he captures moments with elegance, emotion, and cinematic brilliance.',
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
              About Us
            </p>
            <h1 className="font-heading mb-8" style={{ fontSize: '64px', lineHeight: '1.15', color: '#C9A7A0', fontWeight: 400 }}>
              Heavenly Weds
            </h1>
            <p className="leading-relaxed mb-6" style={{ fontSize: '18px', lineHeight: '1.8', color: '#6F6F6F' }}>
              At Heavenly Weds, we are a professional team of passionate wedding photographers and cinematographers dedicated to capturing the
              most beautiful moments of your special day. With creativity, precision, and attention to detail, we transform real emotions and unforgettable
              memories into timeless photographs and cinematic films.
            </p>
            <p className="leading-relaxed" style={{ fontSize: '16px', lineHeight: '1.8', color: '#9A9A9A' }}>
              From pre-wedding shoots to wedding day coverage and creative editing, our team ensures every smile, every glance, and every heartfelt
              moment is captured perfectly. We believe every love story is unique, and our mission is to tell your story in the most elegant and memorable way.
              Based in Mumbai & London, capturing love stories worldwide.
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
                Designing Timeless Celebrations
              </h2>
              <p className="leading-relaxed mb-6" style={{ fontSize: '16px', lineHeight: '1.8', color: '#6F6F6F' }}>
                We believe true luxury is found in the finest details — the soft glow of sunset, beautifully curated florals, and the effortless rhythm of every
                special moment. Each element is thoughtfully designed to reflect the essence of your unique love story.
              </p>
              <p className="leading-relaxed mb-8" style={{ fontSize: '16px', lineHeight: '1.8', color: '#9A9A9A' }}>
                Our approach combines precise planning with creative vision, crafting experiences that feel seamless, refined, and unforgettable.
                From photography to videography and editing, we preserve every emotion, turning your moments into a cinematic story that lasts forever.
                From your first consultation to your final dance, we stand by your side at every step — transforming stress into joy and dreams into
                memories you'll treasure for a lifetime.
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
                src="https://bp37mc8dd9.preview.c36.airoapp.ai/airo-assets/images/pages/about/philosophy"
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
              Meet Our Experts
            </p>
            <h2 className="font-heading mb-6" style={{ fontSize: '42px', lineHeight: '1.2', color: '#C9A7A0', fontWeight: 400 }}>
              The Dream Team
            </h2>
            <p className="mx-auto leading-relaxed" style={{ maxWidth: '700px', fontSize: '16px', lineHeight: '1.8', color: '#6F6F6F' }}>
              Our team is passionate about every single frame we capture. We work hard to ensure that you cherish every moment of
              your special day through our expert wedding photography. With creativity, dedication, and attention to detail, we focus on preserving the emotions, beauty, and unforgettable
              memories of your wedding. Let us make your wedding Heavenly!
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
                    src={`/image-${index + 1}.png`}
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
              Capturing Love Worldwide
            </h2>
            <p className="leading-relaxed mb-8" style={{ fontSize: '16px', lineHeight: '1.8', color: '#6F6F6F' }}>
              Based in Mumbai & London, we capture love stories across the globe. From pre-wedding shoots in scenic locations to full-day wedding coverage,
              our team brings creativity, precision, and cinematic storytelling to every frame. Whether it's an intimate ceremony or a grand celebration,
              we ensure every smile, glance, and heartfelt moment is preserved perfectly.
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
              Let Us Make Your Wedding Heavenly!
            </h2>
            <p className="leading-relaxed mb-10" style={{ fontSize: '16px', lineHeight: '1.8', color: '#6F6F6F' }}>
              Ready to begin planning the celebration of your dreams? Book your complimentary consultation
              and let's bring your vision to life with elegance, beauty, and perfection.
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