import { motion } from 'framer-motion';
import { 
  BookOpen, Calendar, Heart, ArrowRight, Star, 
  Clock, Users, Camera, MapPin, Globe, Award,
  ChevronRight, Download, Sparkles, GraduationCap,
  CreditCard, Shield, Plane, Umbrella, GlassWater,
  Gift, Music, Church, Landmark, Utensils, Wine,
  Sun, Ship, Crown, Feather, Search
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function GuidesPage() {
  const categories = [
    { id: 'all', name: 'All Guides', active: true },
    { id: 'planning', name: 'Planning', active: false },
    { id: 'destinations', name: 'Destinations', active: false },
    { id: 'vendors', name: 'Vendors', active: false },
    { id: 'real-weddings', name: 'Real Weddings', active: false },
    { id: 'budget', name: 'Budget', active: false }
  ];

  const featuredGuides = [
    {
      id: 1,
      title: 'The Ultimate Destination Wedding Timeline',
      description: 'A month-by-month guide to planning your wedding abroad, from 18 months out to the big day.',
      category: 'Planning',
      readTime: '12 min read',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80',
      author: 'Sophia Martinez',
      date: 'Mar 15, 2024',
      featured: true
    },
    {
      id: 2,
      title: 'Italian Wedding Traditions You Should Know',
      description: 'Incorporate authentic Italian rituals into your celebration, from la serenata to confetti tossing.',
      category: 'Culture',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1534265264056-4a5e9c816aa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80',
      author: 'Marco Rossi',
      date: 'Mar 12, 2024',
      featured: true
    },
    {
      id: 3,
      title: 'French Wedding Etiquette: A Complete Guide',
      description: 'Navigate French wedding customs with confidence, from vin d\'honneur to pièce montée.',
      category: 'Culture',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1549144511-f099e773c147?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80',
      author: 'Claire Dubois',
      date: 'Mar 10, 2024',
      featured: true
    }
  ];

  const destinationGuides = [
    {
      country: 'Italy',
      icon: Landmark,
      color: 'text-[#C9A7A0]',
      guides: [
        { title: 'Tuscany Wedding Guide', readTime: '15 min' },
        { title: 'Lake Como Venue Guide', readTime: '12 min' },
        { title: 'Amalfi Coast Planning', readTime: '10 min' },
        { title: 'Italian Legal Requirements', readTime: '8 min' }
      ]
    },
    {
      country: 'France',
      icon: Crown,
      color: 'text-[#C9A7A0]',
      guides: [
        { title: 'Provence Wedding Guide', readTime: '14 min' },
        { title: 'French Riviera Venues', readTime: '12 min' },
        { title: 'Château Wedding Guide', readTime: '11 min' },
        { title: 'French Wedding Laws', readTime: '9 min' }
      ]
    },
    {
      country: 'India',
      icon: Feather,
      color: 'text-[#C9A7A0]',
      guides: [
        { title: 'Rajasthan Palace Weddings', readTime: '16 min' },
        { title: 'Goa Beach Wedding Guide', readTime: '12 min' },
        { title: 'Indian Wedding Traditions', readTime: '14 min' },
        { title: 'Legal Requirements India', readTime: '10 min' }
      ]
    }
  ];

  const planningGuides = [
    {
      icon: Calendar,
      title: 'Timeline & Checklist',
      description: 'Complete wedding planning timeline from engagement to honeymoon',
      articles: ['18-Month Planning Timeline', 'Month-by-Month Checklist', 'Last Week Checklist']
    },
    {
      icon: CreditCard,
      title: 'Budget & Finance',
      description: 'Smart ways to budget for your destination wedding',
      articles: ['Average Costs by Destination', 'Hidden Fees to Watch For', 'Payment Schedule Guide']
    },
    {
      icon: Users,
      title: 'Guest Management',
      description: 'Handle invitations, travel, and accommodations for your guests',
      articles: ['Guest List Template', 'Travel Coordination Tips', 'Welcome Bag Ideas']
    },
    {
      icon: Shield,
      title: 'Legal Requirements',
      description: 'Marriage laws and paperwork for popular destinations',
      articles: ['Italy Legal Guide', 'France Legal Guide', 'India Legal Guide']
    }
  ];

  const vendorGuides = [
    {
      category: 'Photography',
      icon: Camera,
      tips: ['Finding your style', 'Questions to ask', 'Shot list template']
    },
    {
      category: 'Catering',
      icon: Utensils,
      tips: ['Menu tasting guide', 'Dietary accommodations', 'Wine pairing tips']
    },
    {
      category: 'Music',
      icon: Music,
      tips: ['Local bands vs. DJs', 'Ceremony music guide', 'Playlist recommendations']
    },
    {
      category: 'Florals',
      icon: Heart,
      tips: ['Seasonal flowers', 'Local florists', 'Bouquet styles']
    }
  ];

  const popularArticles = [
    {
      title: '10 Questions to Ask Your Destination Wedding Planner',
      views: '12.5k reads',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=60&h=60&q=80'
    },
    {
      title: 'How to Plan a Wedding in 12 Months or Less',
      views: '10.2k reads',
      image: 'https://images.unsplash.com/photo-1464368081811-1740e3b80f10?ixlib=rb-4.0.3&auto=format&fit=crop&w=60&h=60&q=80'
    },
    {
      title: 'Destination Wedding Invitation Wording Guide',
      views: '8.7k reads',
      image: 'https://images.unsplash.com/photo-1464368081811-1740e3b80f10?ixlib=rb-4.0.3&auto=format&fit=crop&w=60&h=60&q=80'
    },
    {
      title: 'What to Wear: Destination Wedding Attire Guide',
      views: '7.9k reads',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=60&h=60&q=80'
    }
  ];

  const latestArticles = [
    {
      title: 'How to Choose the Perfect Wedding Date in Italy',
      description: 'Consider weather, peak seasons, and local festivals when selecting your wedding date...',
      date: 'Mar 8, 2024',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80'
    },
    {
      title: 'Top 10 Lake Como Wedding Venues',
      description: 'Discover the most romantic villas and hotels on Italy\'s most famous lake...',
      date: 'Mar 5, 2024',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1534265264056-4a5e9c816aa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80'
    },
    {
      title: 'A Guide to French Wedding Traditions',
      description: 'From the vin d\'honneur to the pièce montée, understand French wedding customs...',
      date: 'Mar 2, 2024',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1549144511-f099e773c147?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80'
    },
    {
      title: 'Indian Wedding Planning: What to Expect',
      description: 'Navigate the beautiful complexity of a multi-day Indian wedding celebration...',
      date: 'Feb 28, 2024',
      readTime: '12 min read',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80'
    }
  ];

  const resources = [
    { name: 'Wedding Budget Calculator', type: 'Excel Sheet', downloads: '2.5k' },
    { name: 'Guest List Tracker', type: 'Template', downloads: '1.8k' },
    { name: 'Vendor Comparison Worksheet', type: 'PDF', downloads: '1.2k' },
    { name: 'Site Visit Checklist', type: 'PDF', downloads: '3.1k' }
  ];

  const expertTips = [
    {
      quote: "Start venue scouting at least 12 months in advance for peak season dates.",
      author: "Sophia Martinez",
      role: "Senior Planner"
    },
    {
      quote: "Always build in buffer days before the wedding for travel delays.",
      author: "James Chen",
      role: "Travel Coordinator"
    },
    {
      quote: "Consider a welcome party to thank guests for making the journey.",
      author: "Elena Vitale",
      role: "Event Designer"
    }
  ];

  const browseTopics = [
    'Planning Timeline', 'Budgeting', 'Venue Selection', 
    'Vendors', 'Legal', 'Guest Travel', 'Real Weddings', 'Traditions'
  ];

  return (
    <div className="bg-white pt-[117px]">
      {/* Hero Section */}
      <section className="relative py-16 md:py-20 lg:py-24 px-4 md:px-8 bg-[#FAFAFA]">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center mb-6 w-16 h-16 rounded-full bg-[#F2E8E6]">
              <BookOpen className="h-8 w-8 text-[#C9A7A0]" />
            </div>
            <h1 className="font-heading mb-4 text-4xl sm:text-5xl md:text-6xl text-[#C9A7A0] font-light">
              Wedding Planning Guides
            </h1>
            <p className="text-lg text-[#6F6F6F] max-w-2xl mx-auto">
              Expert advice, destination insights, and practical resources to help you plan 
              the perfect destination wedding.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-8 px-4 md:px-8 border-b border-[#E5D5D0]">
        <div className="mx-auto max-w-2xl">
          <div className="relative">
            <input
              type="text"
              placeholder="Search guides..."
              className="w-full px-5 py-3 pl-12 border border-[#E5D5D0] rounded-sm focus:outline-none focus:border-[#C9A7A0] text-[#6F6F6F]"
            />
            <Search className="absolute left-4 top-3.5 h-5 w-5 text-[#9A9A9A]" />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-6 px-4 md:px-8 border-b border-[#E5D5D0]">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`px-5 py-2 rounded-full text-sm transition-colors ${
                  category.active
                    ? 'bg-[#C9A7A0] text-white'
                    : 'bg-[#FAFAFA] text-[#6F6F6F] hover:bg-[#F2E8E6]'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Guides */}
      <section className="py-16 px-4 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-heading text-2xl md:text-3xl text-[#C9A7A0] font-light">
              Featured Guides
            </h2>
            <Link 
              to="/guides/all"
              className="flex items-center gap-1 text-sm text-[#C9A7A0] hover:gap-2 transition-all"
            >
              View all
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredGuides.map((guide, index) => (
              <motion.div
                key={guide.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <Link to={`/guides/${guide.id}`}>
                  <div className="relative overflow-hidden rounded-sm h-48 mb-4">
                    <img
                      src={guide.image}
                      alt={guide.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs text-[#6F6F6F]">
                        {guide.category}
                      </span>
                    </div>
                  </div>
                  <h3 className="font-heading text-lg text-[#C9A7A0] mb-2 group-hover:underline">
                    {guide.title}
                  </h3>
                  <p className="text-sm text-[#6F6F6F] mb-3 line-clamp-2">
                    {guide.description}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-[#9A9A9A]">
                    <span>By {guide.author}</span>
                    <span>•</span>
                    <span>{guide.date}</span>
                    <span>•</span>
                    <span>{guide.readTime}</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Planning Guides */}
      <section className="py-16 bg-[#FAFAFA] px-4 md:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-heading text-2xl md:text-3xl text-[#C9A7A0] font-light mb-8 text-center">
            Quick Planning Guides
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {planningGuides.map((guide, index) => {
              const IconComponent = guide.icon;
              return (
                <motion.div
                  key={guide.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-sm shadow-sm"
                >
                  <IconComponent className="h-8 w-8 text-[#C9A7A0] mb-4" />
                  <h3 className="font-heading text-lg text-[#C9A7A0] mb-2">{guide.title}</h3>
                  <p className="text-sm text-[#6F6F6F] mb-4">{guide.description}</p>
                  <ul className="space-y-2">
                    {guide.articles.map((article, idx) => (
                      <li key={idx}>
                        <Link 
                          to="#"
                          className="flex items-center gap-2 text-xs text-[#9A9A9A] hover:text-[#C9A7A0] transition-colors"
                        >
                          <ChevronRight className="h-3 w-3" />
                          {article}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Destination Guides */}
      <section className="py-16 px-4 md:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-heading text-2xl md:text-3xl text-[#C9A7A0] font-light mb-8">
            Destination Guides
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {destinationGuides.map((destination, index) => {
              const IconComponent = destination.icon;
              return (
                <motion.div
                  key={destination.country}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="border border-[#E5D5D0] rounded-sm p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <IconComponent className={`h-6 w-6 ${destination.color}`} />
                    <h3 className="font-heading text-xl text-[#C9A7A0]">{destination.country}</h3>
                  </div>
                  <ul className="space-y-3">
                    {destination.guides.map((guide, idx) => (
                      <li key={idx}>
                        <Link 
                          to="#"
                          className="flex items-center justify-between group"
                        >
                          <span className="text-sm text-[#6F6F6F] group-hover:text-[#C9A7A0]">
                            {guide.title}
                          </span>
                          <span className="text-xs text-[#9A9A9A]">{guide.readTime}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vendor Guides */}
      <section className="py-16 bg-[#FAFAFA] px-4 md:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-heading text-2xl md:text-3xl text-[#C9A7A0] font-light mb-8">
            Vendor Selection Guides
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {vendorGuides.map((vendor, index) => {
              const IconComponent = vendor.icon;
              return (
                <motion.div
                  key={vendor.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-sm"
                >
                  <IconComponent className="h-8 w-8 text-[#C9A7A0] mb-3" />
                  <h3 className="font-heading text-lg text-[#C9A7A0] mb-3">{vendor.category}</h3>
                  <ul className="space-y-2">
                    {vendor.tips.map((tip, idx) => (
                      <li key={idx} className="text-xs text-[#6F6F6F] flex items-center gap-2">
                        <span className="w-1 h-1 bg-[#C9A7A0] rounded-full" />
                        {tip}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular Articles Sidebar Style */}
      <section className="py-16 px-4 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content - Recent Articles */}
            <div className="lg:col-span-2">
              <h2 className="font-heading text-2xl text-[#C9A7A0] font-light mb-6">
                Latest Articles
              </h2>
              <div className="space-y-6">
                {latestArticles.map((article, index) => (
                  <div key={index} className="flex gap-4 pb-6 border-b border-[#E5D5D0] last:border-0">
                    <img 
                      src={article.image} 
                      alt="Article thumbnail"
                      className="w-20 h-20 object-cover rounded-sm"
                    />
                    <div>
                      <h3 className="font-heading text-lg text-[#C9A7A0] mb-2">
                        {article.title}
                      </h3>
                      <p className="text-sm text-[#6F6F6F] mb-2">
                        {article.description}
                      </p>
                      <div className="flex items-center gap-3 text-xs text-[#9A9A9A]">
                        <span>{article.date}</span>
                        <span>•</span>
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Popular Reads */}
              <div className="bg-[#FAFAFA] p-6 rounded-sm mb-6">
                <h3 className="font-heading text-lg text-[#C9A7A0] mb-4">Popular Reads</h3>
                <div className="space-y-4">
                  {popularArticles.map((article, index) => (
                    <div key={index} className="flex gap-3">
                      <img 
                        src={article.image} 
                        alt=""
                        className="w-12 h-12 object-cover rounded-sm"
                      />
                      <div>
                        <h4 className="text-sm text-[#6F6F6F] mb-1 line-clamp-2">{article.title}</h4>
                        <span className="text-xs text-[#9A9A9A]">{article.views}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Free Resources */}
              <div className="bg-[#FAFAFA] p-6 rounded-sm">
                <h3 className="font-heading text-lg text-[#C9A7A0] mb-4">Free Resources</h3>
                <div className="space-y-3">
                  {resources.map((resource, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm text-[#6F6F6F]">{resource.name}</h4>
                        <p className="text-xs text-[#9A9A9A]">{resource.type} • {resource.downloads} downloads</p>
                      </div>
                      <button className="text-[#C9A7A0] hover:text-[#B89690]">
                        <Download className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Tips */}
      <section className="py-16 bg-[#FAFAFA] px-4 md:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl text-[#C9A7A0] font-light mb-8 text-center">
            Expert Tips
          </h2>
          
          <div className="grid gap-4 md:grid-cols-3">
            {expertTips.map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-sm relative"
              >
                <div className="absolute -top-2 -left-2 text-4xl text-[#C9A7A0] opacity-30">"</div>
                <p className="text-sm text-[#6F6F6F] italic mb-4 relative z-10">"{tip.quote}"</p>
                <div>
                  <p className="font-medium text-sm text-[#C9A7A0]">{tip.author}</p>
                  <p className="text-xs text-[#9A9A9A]">{tip.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-4 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Gift className="h-10 w-10 mx-auto mb-4 text-[#C9A7A0]" />
          <h2 className="font-heading text-2xl text-[#C9A7A0] font-light mb-2">
            Get Planning Tips in Your Inbox
          </h2>
          <p className="text-sm text-[#6F6F6F] mb-6">
            Subscribe for weekly guides, destination spotlights, and exclusive resources.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 border border-[#E5D5D0] rounded-sm focus:outline-none focus:border-[#C9A7A0] text-sm text-[#6F6F6F]"
            />
            <button className="px-6 py-3 bg-[#C9A7A0] text-white text-sm uppercase tracking-[2px] hover:bg-[#B89690] transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-xs text-[#9A9A9A] mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* Browse Topics */}
      <section className="py-12 border-t border-[#E5D5D0] px-4 md:px-8">
        <div className="mx-auto max-w-7xl">
          <h3 className="text-center text-sm text-[#6F6F6F] mb-4">Browse by Topic</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {browseTopics.map((topic, index) => (
              <Link
                key={topic}
                to={`/guides/topic/${topic.toLowerCase().replace(/\s+/g, '-')}`}
                className="px-4 py-2 bg-[#FAFAFA] rounded-full text-xs text-[#6F6F6F] hover:bg-[#F2E8E6] transition-colors"
              >
                {topic}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}