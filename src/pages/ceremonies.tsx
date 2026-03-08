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
    <div className="bg-white pt-[117px]">
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
              Sacred Ceremonies & Rituals
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
                  {/* Header */}
                  <div className="mb-6 md:mb-8 text-center">
                    <p className="mb-2 uppercase tracking-[3px] text-[11px] text-[#9A9A9A]">
                      {ceremony.subtitle}
                    </p>
                    <h2 className="font-heading mb-3 md:mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-[#C9A7A0] font-light">
                      {ceremony.name}
                    </h2>
                    <p className="mx-auto leading-relaxed text-sm sm:text-base text-[#6F6F6F] max-w-3xl">
                      {ceremony.description}
                    </p>
                  </div>

                  {/* Content Grid */}
                  <div className="grid gap-6 md:gap-8 grid-cols-1 lg:grid-cols-2 mb-6 md:mb-8">
                    {/* Significance */}
                    <div>
                      <h3 className="mb-3 md:mb-4 uppercase tracking-[2px] text-[11px] sm:text-xs text-[#9A9A9A]">
                        Significance
                      </h3>
                      <p className="leading-relaxed text-sm sm:text-base text-[#6F6F6F]">
                        {ceremony.significance}
                      </p>
                    </div>

                    {/* Traditions */}
                    <div>
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
                    </div>
                  </div>

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

      {/* Planning Features */}
      <section className="py-16 md:py-20 lg:py-24 bg-[#F2E8E6] px-4 md:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 md:mb-12 lg:mb-16"
          >
            <p className="mb-4 uppercase tracking-[3px] text-[11px] text-[#9A9A9A]">
              Our Expertise
            </p>
            <h2 className="font-heading mb-4 md:mb-6 text-3xl sm:text-4xl md:text-5xl leading-tight text-[#C9A7A0] font-light">
              Planning Multi-Day Celebrations
            </h2>
            <p className="mx-auto leading-relaxed text-sm sm:text-base text-[#6F6F6F] max-w-3xl">
              Coordinating multiple ceremonies requires expertise, cultural knowledge, and meticulous attention to detail. 
              We ensure each event flows seamlessly into the next.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {planningFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 sm:p-8 rounded-sm bg-white"
              >
                <div
                  className="inline-flex items-center justify-center mb-4 md:mb-6 rounded-full w-16 h-16 sm:w-20 sm:h-20 bg-[#F2E8E6]"
                >
                  <feature.icon className="h-6 w-6 sm:h-8 sm:w-8 text-[#C9A7A0]" />
                </div>
                <h3 className="font-heading mb-2 md:mb-3 text-lg sm:text-xl text-[#6F6F6F] font-medium">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-[#9A9A9A]">
                  {feature.description}
                </p>
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