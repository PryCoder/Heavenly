import { motion } from 'framer-motion';
import { Heart, Award, Users, Sparkles, Calendar } from 'lucide-react';
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
    <div className="bg-white min-h-screen" style={{ paddingTop: 'clamp(90px, 15vw, 117px)' }}>
      {/* Hero Section */}
      <section className="py-16 md:py-20 lg:py-24 px-4 sm:px-8">
        <div className="mx-auto max-w-[900px] text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-4 uppercase tracking-[3px] text-[11px] text-[#9A9A9A] font-sans">
              About Us
            </p>
            <h1 className="font-serif mb-6 md:mb-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-[#C9A7A0] font-light">
              Heavenly Weds
            </h1>
            <p className="text-base sm:text-lg leading-relaxed text-[#6F6F6F] font-light mb-6">
              At Heavenly Weds, we are a professional team of passionate wedding photographers and cinematographers dedicated to capturing the
              most beautiful moments of your special day. With creativity, precision, and attention to detail, we transform real emotions and unforgettable
              memories into timeless photographs and cinematic films.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#9A9A9A] font-light">
              From pre-wedding shoots to wedding day coverage and creative editing, our team ensures every smile, every glance, and every heartfelt
              moment is captured perfectly. We believe every love story is unique, and our mission is to tell your story in the most elegant and memorable way.
              Based in Mumbai & London, capturing love stories worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 px-4 sm:px-8 bg-[#F2E8E6]">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-2 gap-8 sm:gap-10 md:gap-12 md:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="font-serif mb-2 text-3xl sm:text-4xl md:text-5xl text-[#C9A7A0] font-light leading-none">
                  {stat.number}
                </div>
                <div className="uppercase tracking-[2px] text-[10px] sm:text-[11px] text-[#6F6F6F] font-sans">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-16 md:py-20 lg:py-24 px-4 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:gap-16 lg:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="mb-4 uppercase tracking-[3px] text-[11px] text-[#9A9A9A] font-sans">
                Our Philosophy
              </p>
              <h2 className="font-serif mb-6 text-3xl sm:text-4xl md:text-5xl leading-tight text-[#C9A7A0] font-light">
                Designing Timeless Celebrations
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-[#6F6F6F] font-light mb-6">
                We believe true luxury is found in the finest details — the soft glow of sunset, beautifully curated florals, and the effortless rhythm of every
                special moment. Each element is thoughtfully designed to reflect the essence of your unique love story.
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-[#9A9A9A] font-light mb-8">
                Our approach combines precise planning with creative vision, crafting experiences that feel seamless, refined, and unforgettable.
                From photography to videography and editing, we preserve every emotion, turning your moments into a cinematic story that lasts forever.
                From your first consultation to your final dance, we stand by your side at every step — transforming stress into joy and dreams into
                memories you'll treasure for a lifetime.
              </p>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 uppercase tracking-[2px] transition-all duration-500 px-6 sm:px-8 py-4 text-[11px] bg-[#F2E8E6] text-[#6F6F6F] hover:bg-[#C9A7A0] hover:text-white font-sans"
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
              className="relative w-full overflow-hidden rounded-sm aspect-[4/3] sm:aspect-[16/10]"
            >
              <img
                src="https://bp37mc8dd9.preview.c36.airoapp.ai/airo-assets/images/pages/about/philosophy"
                alt="Luxury wedding setup"
                className="absolute inset-0 h-full w-full object-cover"
                style={{ filter: 'brightness(0.98) saturate(0.85)' }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-20 lg:py-24 px-4 sm:px-8 bg-[#FAFAFA]">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 md:mb-16"
          >
            <p className="mb-4 uppercase tracking-[3px] text-[11px] text-[#9A9A9A] font-sans">
              Our Core Values
            </p>
            <h2 className="font-serif mb-2 md:mb-6 text-3xl sm:text-4xl md:text-5xl leading-tight text-[#C9A7A0] font-light">
              What Drives Us
            </h2>
          </motion.div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-sm p-6 sm:p-8"
              >
                <div className="mb-5 inline-flex items-center justify-center w-14 h-14 bg-[#F2E8E6]">
                  <value.icon className="h-6 w-6 text-[#C9A7A0]" />
                </div>
                <h3 className="font-serif mb-3 text-lg sm:text-xl text-[#6F6F6F] font-medium">
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#9A9A9A]">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-16 md:py-20 lg:py-24 px-4 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 md:mb-16"
          >
            <p className="mb-4 uppercase tracking-[3px] text-[11px] text-[#9A9A9A] font-sans">
              Meet Our Experts
            </p>
            <h2 className="font-serif mb-4 md:mb-6 text-3xl sm:text-4xl md:text-5xl leading-tight text-[#C9A7A0] font-light">
              Heavenly Weds Team
            </h2>
            <p className="mx-auto text-sm sm:text-base leading-relaxed text-[#6F6F6F] font-light max-w-2xl">
              Our team is passionate about every single frame we capture. We work hard to ensure that you cherish every moment of
              your special day through our expert wedding photography. With creativity, dedication, and attention to detail, we focus on preserving the emotions, beauty, and unforgettable
              memories of your wedding. Let us make your wedding Heavenly!
            </p>
          </motion.div>

          <div className="grid gap-10 md:gap-12 md:grid-cols-3">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="text-center"
              >
                <div className="mb-6 overflow-hidden rounded-sm w-full aspect-[3/4]">
                  <img
                    src={`/image-${index + 1}.png`}
                    alt={member.name}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    style={{ filter: 'brightness(0.98) saturate(0.85)' }}
                    loading="lazy"
                  />
                </div>
                <h3 className="font-serif mb-2 text-xl sm:text-2xl text-[#6F6F6F] font-medium">
                  {member.name}
                </h3>
                <p className="mb-4 uppercase tracking-[2px] text-[11px] text-[#C9A7A0] font-sans">
                  {member.role}
                </p>
                <p className="text-sm leading-relaxed text-[#9A9A9A]">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach */}
     

      {/* CTA Section */}
      <section className="py-16 md:py-20 lg:py-24 px-4 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif mb-4 md:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-[#C9A7A0] font-light">
              Let Us Make Your Wedding Heavenly!
            </h2>
            <p className="text-sm sm:text-base leading-relaxed mb-8 md:mb-10 text-[#6F6F6F] font-light max-w-2xl mx-auto">
              Ready to begin planning the celebration of your dreams? Book your complimentary consultation
              and let's bring your vision to life with elegance, beauty, and perfection.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 uppercase tracking-[2px] transition-all duration-500 px-6 sm:px-8 md:px-12 py-4 sm:py-5 text-[11px] sm:text-xs bg-[#F2E8E6] text-[#6F6F6F] hover:bg-[#C9A7A0] hover:text-white font-sans"
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