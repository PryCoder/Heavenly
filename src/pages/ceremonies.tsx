import { motion } from 'framer-motion';
import { Sparkles, Heart, Calendar, Music } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Ceremony {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  significance: string;
  traditions: string[];
  duration: string;
  colorTheme: string;
}

export default function CeremoniesPage() {
  const ceremonies: Ceremony[] = [
    {
      id: 'mehendi',
      name: 'Mehendi',
      subtitle: 'The Art of Henna',
      description: 'A vibrant celebration where intricate henna designs are applied to the bride\'s hands and feet. This joyous occasion brings together the bride\'s female friends and family for an afternoon of music, dance, and bonding.',
      significance: 'The depth of the henna color is believed to represent the depth of love between the couple. It\'s a time for the bride to relax and be pampered before the wedding festivities.',
      traditions: [
        'Professional henna artists create intricate designs',
        'Traditional folk songs and dance performances',
        'Colorful décor with marigolds and drapes',
        'Light refreshments and sweets',
        'Photo opportunities with vibrant backdrops',
        'Groom\'s name hidden in the henna design',
      ],
      duration: '3-4 hours',
      colorTheme: 'Green, Yellow, Orange',
    },
    {
      id: 'sangeet',
      name: 'Sangeet',
      subtitle: 'Night of Music & Dance',
      description: 'A spectacular evening of music, dance, and entertainment where both families come together to celebrate. Choreographed performances, live music, and joyful dancing create an unforgettable night of celebration.',
      significance: 'The Sangeet brings both families together in a spirit of joy and unity. It\'s an opportunity for families to bond, showcase their talents, and create lasting memories through music and dance.',
      traditions: [
        'Choreographed dance performances by family and friends',
        'Live music or DJ entertainment',
        'Professional dancers and performers',
        'Elaborate stage and lighting setup',
        'Cocktails and dinner service',
        'Games and interactive entertainment',
      ],
      duration: '4-6 hours',
      colorTheme: 'Bold, Vibrant Colors',
    },
    {
      id: 'haldi',
      name: 'Haldi',
      subtitle: 'The Turmeric Blessing',
      description: 'An intimate morning ceremony where a paste of turmeric, sandalwood, and rose water is applied to the bride and groom by their loved ones. This purifying ritual is filled with laughter, blessings, and joyful moments.',
      significance: 'Turmeric is believed to purify and bless the couple before their wedding. The yellow paste symbolizes prosperity and is thought to ward off evil spirits while giving the skin a natural glow.',
      traditions: [
        'Application of turmeric paste by family members',
        'Traditional songs and blessings',
        'Bright yellow and orange décor',
        'Flower decorations and marigold garlands',
        'Light breakfast and refreshments',
        'Playful moments and photo opportunities',
      ],
      duration: '2-3 hours',
      colorTheme: 'Yellow, Orange, White',
    },
    {
      id: 'wedding',
      name: 'Wedding Ceremony',
      subtitle: 'The Sacred Union',
      description: 'The main wedding ceremony is a sacred and elaborate ritual conducted by a priest. From the grand entrance to the seven sacred vows, every moment is steeped in tradition and spiritual significance.',
      significance: 'The wedding ceremony represents the sacred union of two souls and two families. Each ritual has deep spiritual meaning, from the exchange of garlands to the seven circles around the sacred fire.',
      traditions: [
        'Grand baraat (groom\'s procession) with music and dancing',
        'Varmala (exchange of garlands)',
        'Kanyadaan (giving away of the bride)',
        'Saptapadi (seven sacred vows around the fire)',
        'Sindoor and mangalsutra ceremony',
        'Blessings from elders and guests',
      ],
      duration: '3-5 hours',
      colorTheme: 'Red, Gold, Maroon',
    },
    {
      id: 'reception',
      name: 'Reception',
      subtitle: 'Grand Celebration',
      description: 'A glamorous evening celebration where the newlyweds are introduced as a married couple. This elegant affair features fine dining, entertainment, speeches, and dancing as families and friends celebrate the union.',
      significance: 'The reception is a formal celebration where the couple is welcomed into their new life together. It\'s an opportunity to thank guests and celebrate with those who couldn\'t attend the traditional ceremonies.',
      traditions: [
        'Grand entrance of the newlyweds',
        'Cake cutting ceremony',
        'First dance as a married couple',
        'Speeches and toasts',
        'Multi-course dinner service',
        'DJ and dance floor entertainment',
      ],
      duration: '4-5 hours',
      colorTheme: 'Elegant, Sophisticated Palette',
    },
  ];

  const planningFeatures = [
    {
      icon: Sparkles,
      title: 'Cultural Expertise',
      description: 'Deep understanding of traditions and customs across different regions and communities',
    },
    {
      icon: Heart,
      title: 'Personalized Approach',
      description: 'We honor your family traditions while incorporating your unique style and preferences',
    },
    {
      icon: Music,
      title: 'Entertainment Curation',
      description: 'Access to the finest musicians, dancers, and performers for authentic celebrations',
    },
    {
      icon: Calendar,
      title: 'Seamless Coordination',
      description: 'Expert management of multiple events across several days with flawless execution',
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
              Traditional Celebrations
            </p>
            <h1 className="font-heading mb-8" style={{ fontSize: '64px', lineHeight: '1.15', color: '#C9A7A0', fontWeight: 400 }}>
              Sacred Ceremonies & Rituals
            </h1>
            <p className="leading-relaxed" style={{ fontSize: '18px', lineHeight: '1.8', color: '#6F6F6F' }}>
              Indian weddings are a beautiful tapestry of ceremonies, each with its own significance and traditions. 
              We honor these sacred rituals while creating celebrations that reflect your unique love story.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Ceremonies List */}
      <section style={{ padding: '60px 0 120px' }}>
        <div className="mx-auto" style={{ maxWidth: '1200px', padding: '0 60px' }}>
          <div className="space-y-24">
            {ceremonies.map((ceremony, index) => (
              <motion.div
                key={ceremony.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
              >
                <div className="rounded-sm p-12" style={{ border: '1px solid #ECECEC', backgroundColor: index % 2 === 0 ? '#FFFFFF' : '#FAFAFA' }}>
                  {/* Header */}
                  <div className="mb-8 text-center">
                    <p className="mb-2 uppercase tracking-widest" style={{ fontSize: '11px', letterSpacing: '3px', color: '#9A9A9A' }}>
                      {ceremony.subtitle}
                    </p>
                    <h2 className="font-heading mb-4" style={{ fontSize: '48px', lineHeight: '1.1', color: '#C9A7A0', fontWeight: 400 }}>
                      {ceremony.name}
                    </h2>
                    <p className="mx-auto leading-relaxed" style={{ maxWidth: '800px', fontSize: '16px', lineHeight: '1.8', color: '#6F6F6F' }}>
                      {ceremony.description}
                    </p>
                  </div>

                  {/* Content Grid */}
                  <div className="grid gap-8 md:grid-cols-2 mb-8">
                    {/* Significance */}
                    <div>
                      <h3 className="mb-4 uppercase tracking-wider" style={{ fontSize: '12px', letterSpacing: '2px', color: '#9A9A9A' }}>
                        Significance
                      </h3>
                      <p className="leading-relaxed" style={{ fontSize: '15px', lineHeight: '1.8', color: '#6F6F6F' }}>
                        {ceremony.significance}
                      </p>
                    </div>

                    {/* Traditions */}
                    <div>
                      <h3 className="mb-4 uppercase tracking-wider" style={{ fontSize: '12px', letterSpacing: '2px', color: '#9A9A9A' }}>
                        Key Traditions
                      </h3>
                      <ul className="space-y-2">
                        {ceremony.traditions.map((tradition, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Sparkles className="h-4 w-4 flex-shrink-0 mt-1" style={{ color: '#C9A7A0' }} />
                            <span style={{ fontSize: '14px', lineHeight: '1.6', color: '#6F6F6F' }}>
                              {tradition}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Details Bar */}
                  <div className="grid gap-4 md:grid-cols-2 pt-8" style={{ borderTop: '1px solid #ECECEC' }}>
                    <div className="flex items-center gap-3">
                      <Calendar className="h-5 w-5" style={{ color: '#C9A7A0' }} />
                      <div>
                        <p className="uppercase tracking-wider" style={{ fontSize: '10px', letterSpacing: '2px', color: '#9A9A9A' }}>
                          Typical Duration
                        </p>
                        <p style={{ fontSize: '14px', color: '#6F6F6F', fontWeight: 500 }}>
                          {ceremony.duration}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Sparkles className="h-5 w-5" style={{ color: '#C9A7A0' }} />
                      <div>
                        <p className="uppercase tracking-wider" style={{ fontSize: '10px', letterSpacing: '2px', color: '#9A9A9A' }}>
                          Color Theme
                        </p>
                        <p style={{ fontSize: '14px', color: '#6F6F6F', fontWeight: 500 }}>
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

      {/* Planning Features */}
      <section style={{ padding: '80px 0 100px', backgroundColor: '#F2E8E6' }}>
        <div className="mx-auto" style={{ maxWidth: '1200px', padding: '0 60px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="mb-4 uppercase tracking-widest" style={{ fontSize: '11px', letterSpacing: '3px', color: '#9A9A9A' }}>
              Our Expertise
            </p>
            <h2 className="font-heading mb-6" style={{ fontSize: '48px', lineHeight: '1.2', color: '#C9A7A0', fontWeight: 400 }}>
              Planning Multi-Day Celebrations
            </h2>
            <p className="mx-auto leading-relaxed" style={{ maxWidth: '700px', fontSize: '16px', lineHeight: '1.8', color: '#6F6F6F' }}>
              Coordinating multiple ceremonies requires expertise, cultural knowledge, and meticulous attention to detail. 
              We ensure each event flows seamlessly into the next.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {planningFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-8 rounded-sm"
                style={{ backgroundColor: '#FFFFFF' }}
              >
                <div
                  className="inline-flex items-center justify-center mb-6 rounded-full"
                  style={{ width: '80px', height: '80px', backgroundColor: '#F2E8E6' }}
                >
                  <feature.icon className="h-8 w-8" style={{ color: '#C9A7A0' }} />
                </div>
                <h3 className="font-heading mb-3" style={{ fontSize: '20px', color: '#6F6F6F', fontWeight: 500 }}>
                  {feature.title}
                </h3>
                <p style={{ fontSize: '14px', lineHeight: '1.7', color: '#9A9A9A' }}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Ceremonies */}
      <section style={{ padding: '100px 0' }}>
        <div className="mx-auto text-center" style={{ maxWidth: '900px', padding: '0 60px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading mb-6" style={{ fontSize: '48px', lineHeight: '1.2', color: '#C9A7A0', fontWeight: 400 }}>
              Your Traditions, Your Way
            </h2>
            <p className="leading-relaxed mb-6" style={{ fontSize: '16px', lineHeight: '1.8', color: '#6F6F6F' }}>
              Every family has unique traditions and customs. Whether you're planning all five ceremonies or 
              selecting specific events, we work with you to honor your heritage while creating a celebration 
              that feels authentically yours.
            </p>
            <p className="leading-relaxed mb-10" style={{ fontSize: '15px', lineHeight: '1.8', color: '#9A9A9A' }}>
              We also specialize in fusion weddings, blending Indian traditions with Western elements, 
              and can accommodate regional variations from across India and the diaspora.
            </p>
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
              Let's Plan Your Celebration
            </h2>
            <p className="leading-relaxed mb-10" style={{ fontSize: '16px', lineHeight: '1.8', color: '#6F6F6F' }}>
              Schedule a complimentary consultation to discuss your vision for each ceremony. We'll guide you 
              through the traditions, help you plan the timeline, and ensure every moment is perfect.
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
