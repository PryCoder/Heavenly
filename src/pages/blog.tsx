import { motion } from 'framer-motion';
import { 
  Calendar, Heart, ArrowRight, Clock, User, 
  Tag, Search, ChevronRight, Eye, MessageCircle,
  Share2, Bookmark, Award, Camera, MapPin, Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts', count: 24 },
    { id: 'real-weddings', name: 'Real Weddings', count: 8 },
    { id: 'planning-tips', name: 'Planning Tips', count: 6 },
    { id: 'destinations', name: 'Destinations', count: 5 },
    { id: 'vendors', name: 'Vendors & Styling', count: 3 },
    { id: 'traditions', name: 'Traditions & Culture', count: 2 }
  ];

  const featuredPosts = [
    {
      id: 1,
      title: 'A Fairytale Wedding at Villa Balbianello, Lake Como',
      excerpt: 'How Sarah & Michael planned their dream Italian wedding with 80 guests from around the world.',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80',
      category: 'Real Weddings',
      author: 'Sophia Martinez',
      authorImage: 'https://images.unsplash.com/photo-1494790108777-2f1b3b1a7a6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&h=50&q=80',
      date: 'March 15, 2024',
      readTime: '8 min read',
      views: '2.4k',
      comments: 12,
      featured: true
    },
    {
      id: 2,
      title: 'The Ultimate Guide to a French Riviera Wedding',
      excerpt: 'From Cannes to Saint-Tropez, everything you need to know about planning a glamorous coastal celebration.',
      image: 'https://images.unsplash.com/photo-1549144511-f099e773c147?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80',
      category: 'Destinations',
      author: 'Claire Dubois',
      authorImage: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&h=50&q=80',
      date: 'March 10, 2024',
      readTime: '12 min read',
      views: '3.1k',
      comments: 8,
      featured: true
    }
  ];

  const topics = [
    'Real Weddings', 'Planning Tips', 'Venue Guides', 
    'Budget', 'Vendors', 'Legal', 'Traditions', 'Honeymoon'
  ];

  return (
    <div className="bg-white pt-[117px]">
      {/* Hero Section */}
      <section className="relative py-16 md:py-20 lg:py-24 px-4 md:px-8 bg-[#FAFAFA]">
        <div className="mx-auto max-w-7xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center mb-6 w-16 h-16 rounded-full bg-[#F2E8E6]">
              <Award className="h-8 w-8 text-[#C9A7A0]" />
            </div>
            <h1 className="font-heading mb-4 text-4xl sm:text-5xl md:text-6xl text-[#C9A7A0] font-light">
              The Journal
            </h1>
            <p className="text-lg text-[#6F6F6F] max-w-2xl mx-auto">
              Stories, inspiration, and expert advice for your destination wedding journey
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-8 px-4 md:px-8 border-b border-[#E5D5D0]">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full px-5 py-3 pl-12 border border-[#E5D5D0] rounded-sm focus:outline-none focus:border-[#C9A7A0] text-[#6F6F6F]"
              />
              <Search className="absolute left-4 top-3.5 h-5 w-5 text-[#9A9A9A]" />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-6 px-4 md:px-8 border-b border-[#E5D5D0]">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-5 py-2 rounded-full text-sm transition-colors flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? 'bg-[#C9A7A0] text-white'
                    : 'bg-[#FAFAFA] text-[#6F6F6F] hover:bg-[#F2E8E6]'
                }`}
              >
                {category.name}
                <span className={`text-xs ${
                  selectedCategory === category.id ? 'text-white/80' : 'text-[#9A9A9A]'
                }`}>
                  ({category.count})
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-12 px-4 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={`/blog/${post.id}`} className="group block">
                  <div className="relative overflow-hidden rounded-sm h-80 mb-4">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs text-[#6F6F6F]">
                        {post.category}
                      </span>
                    </div>
                    {post.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-[#C9A7A0] text-white rounded-full text-xs flex items-center gap-1">
                          <Sparkles className="h-3 w-3" />
                          Featured
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <h2 className="font-heading text-2xl text-[#C9A7A0] mb-2 group-hover:underline">
                    {post.title}
                  </h2>
                  <p className="text-[#6F6F6F] mb-4">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src={post.authorImage}
                        alt={post.author}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <div>
                        <p className="text-sm font-medium text-[#C9A7A0]">{post.author}</p>
                        <div className="flex items-center gap-2 text-xs text-[#9A9A9A]">
                          <Calendar className="h-3 w-3" />
                          {post.date}
                          <Clock className="h-3 w-3 ml-1" />
                          {post.readTime}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 text-xs text-[#9A9A9A]">
                      <span className="flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        {post.views}
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageCircle className="h-3 w-3" />
                        {post.comments}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sidebar Only Section - Fixed Width */}
      <section className="py-12 px-4 md:px-8 bg-[#FAFAFA]">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* About */}
            <div className="bg-white p-8 rounded-sm">
              <h3 className="font-heading text-xl text-[#C9A7A0] mb-4">About This Blog</h3>
              <p className="text-base text-[#6F6F6F] mb-4">
                Insights and inspiration from our team of destination wedding experts. Real stories, practical advice, and beautiful inspiration for your dream destination wedding.
              </p>
              <div className="flex items-center gap-2 text-sm text-[#C9A7A0]">
                <Camera className="h-4 w-4" />
                <span>100+ weddings featured</span>
              </div>
            </div>

            {/* Topics */}
            <div className="bg-white p-8 rounded-sm">
              <h3 className="font-heading text-xl text-[#C9A7A0] mb-4">Browse by Topic</h3>
              <div className="flex flex-wrap gap-3">
                {topics.map((topic) => (
                  <Link
                    key={topic}
                    to={`/blog/topic/${topic.toLowerCase().replace(/\s+/g, '-')}`}
                    className="px-4 py-2 bg-[#FAFAFA] rounded-full text-sm text-[#6F6F6F] hover:bg-[#F2E8E6] transition-colors"
                  >
                    {topic}
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-[#F2E8E6] p-8 rounded-sm">
              <h3 className="font-heading text-xl text-[#C9A7A0] mb-3">Never Miss a Post</h3>
              <p className="text-base text-[#6F6F6F] mb-6">
                Get the latest articles delivered to your inbox
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 border border-[#E5D5D0] rounded-sm focus:outline-none focus:border-[#C9A7A0] text-sm"
                />
                <button className="px-6 py-3 bg-[#C9A7A0] text-white text-sm uppercase tracking-[2px] hover:bg-[#B89690] transition-colors whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}