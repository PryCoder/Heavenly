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

  const blogPosts = [
    {
      id: 3,
      title: '10 Questions to Ask Your Destination Wedding Planner',
      excerpt: 'Essential questions that will help you find the perfect planner for your vision and budget.',
      image: 'https://images.unsplash.com/photo-1464368081811-1740e3b80f10?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80',
      category: 'Planning Tips',
      author: 'Elena Vitale',
      date: 'March 8, 2024',
      readTime: '6 min read',
      views: '1.8k',
      comments: 5
    },
    {
      id: 4,
      title: 'Indian Wedding Traditions: A Complete Guide',
      excerpt: 'Understanding the beautiful ceremonies that make Indian weddings truly magical.',
      image: 'https://images.unsplash.com/photo-1534265264056-4a5e9c816aa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80',
      category: 'Traditions',
      author: 'Priya Sharma',
      date: 'March 5, 2024',
      readTime: '10 min read',
      views: '2.2k',
      comments: 7
    },
    {
      id: 5,
      title: 'Top 10 Tuscany Wedding Venues for 2024',
      excerpt: 'Our curated selection of the most romantic villas and estates in the Italian countryside.',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80',
      category: 'Destinations',
      author: 'Marco Rossi',
      date: 'March 2, 2024',
      readTime: '8 min read',
      views: '3.4k',
      comments: 15
    },
    {
      id: 6,
      title: 'How to Style a Provençal Wedding',
      excerpt: 'Lavender, olive branches, and rustic elegance: capturing the essence of the South of France.',
      image: 'https://images.unsplash.com/photo-1549144511-f099e773c147?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80',
      category: 'Vendors & Styling',
      author: 'Sophie Martin',
      date: 'Feb 28, 2024',
      readTime: '7 min read',
      views: '1.5k',
      comments: 4
    },
    {
      id: 7,
      title: 'A Magical Wedding in Udaipur\'s City Palace',
      excerpt: 'How Meera & Raj planned a royal Indian wedding that blended tradition with modern luxury.',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80',
      category: 'Real Weddings',
      author: 'Anita Desai',
      date: 'Feb 25, 2024',
      readTime: '9 min read',
      views: '2.9k',
      comments: 11
    },
    {
      id: 8,
      title: 'Destination Wedding Photography: What to Know',
      excerpt: 'Tips for choosing the right photographer and planning your wedding album.',
      image: 'https://images.unsplash.com/photo-1464368081811-1740e3b80f10?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80',
      category: 'Vendors & Styling',
      author: 'James Wilson',
      date: 'Feb 22, 2024',
      readTime: '6 min read',
      views: '1.2k',
      comments: 3
    }
  ];

  const popularPosts = [
    {
      title: 'How to Plan a Wedding in 12 Months',
      views: '15.2k',
      image: 'https://images.unsplash.com/photo-1464368081811-1740e3b80f10?ixlib=rb-4.0.3&auto=format&fit=crop&w=60&h=60&q=80'
    },
    {
      title: 'Lake Como vs Tuscany: Which is Right for You?',
      views: '12.8k',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=60&h=60&q=80'
    },
    {
      title: 'Average Cost of a Destination Wedding',
      views: '11.4k',
      image: 'https://images.unsplash.com/photo-1534265264056-4a5e9c816aa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=60&h=60&q=80'
    },
    {
      title: 'French Wedding Traditions Explained',
      views: '9.7k',
      image: 'https://images.unsplash.com/photo-1549144511-f099e773c147?ixlib=rb-4.0.3&auto=format&fit=crop&w=60&h=60&q=80'
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
        <div className="mx-auto max-w-4xl text-center">
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
        <div className="mx-auto max-w-2xl">
          <div className="relative">
            <input
              type="text"
              placeholder="Search articles..."
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

      {/* Main Blog Grid */}
      <section className="py-12 px-4 md:px-8 bg-[#FAFAFA]">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Blog Posts */}
            <div className="lg:col-span-2">
              <h2 className="font-heading text-2xl text-[#C9A7A0] font-light mb-6">
                Latest Articles
              </h2>
              
              <div className="space-y-8">
                {blogPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link to={`/blog/${post.id}`} className="flex gap-6 group">
                      <div className="flex-shrink-0 w-40 h-32 overflow-hidden rounded-sm">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs px-2 py-1 bg-[#F2E8E6] rounded-full text-[#6F6F6F]">
                            {post.category}
                          </span>
                          <span className="text-xs text-[#9A9A9A]">{post.date}</span>
                        </div>
                        <h3 className="font-heading text-lg text-[#C9A7A0] mb-2 group-hover:underline">
                          {post.title}
                        </h3>
                        <p className="text-sm text-[#6F6F6F] mb-2 line-clamp-2">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center gap-3 text-xs text-[#9A9A9A]">
                          <span>By {post.author}</span>
                          <span>•</span>
                          <span>{post.readTime}</span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Eye className="h-3 w-3" />
                            {post.views}
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Load More */}
              <div className="mt-12 text-center">
                <button className="px-8 py-3 border border-[#C9A7A0] text-[#6F6F6F] text-sm uppercase tracking-[2px] hover:bg-[#F2E8E6] transition-colors">
                  Load More Articles
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* About */}
              <div className="bg-white p-6 rounded-sm mb-6">
                <h3 className="font-heading text-lg text-[#C9A7A0] mb-4">About This Blog</h3>
                <p className="text-sm text-[#6F6F6F] mb-4">
                  Insights and inspiration from our team of destination wedding experts. Real stories, practical advice, and beautiful inspiration.
                </p>
                <div className="flex items-center gap-2 text-sm text-[#C9A7A0]">
                  <Camera className="h-4 w-4" />
                  <span>100+ weddings featured</span>
                </div>
              </div>

              {/* Popular Posts */}
              <div className="bg-white p-6 rounded-sm mb-6">
                <h3 className="font-heading text-lg text-[#C9A7A0] mb-4">Popular Posts</h3>
                <div className="space-y-4">
                  {popularPosts.map((post, index) => (
                    <Link key={index} to="#" className="flex gap-3 group">
                      <img
                        src={post.image}
                        alt=""
                        className="w-16 h-16 object-cover rounded-sm"
                      />
                      <div>
                        <h4 className="text-sm text-[#6F6F6F] mb-1 group-hover:text-[#C9A7A0] line-clamp-2">
                          {post.title}
                        </h4>
                        <span className="text-xs text-[#9A9A9A]">{post.views} reads</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Topics */}
              <div className="bg-white p-6 rounded-sm mb-6">
                <h3 className="font-heading text-lg text-[#C9A7A0] mb-4">Browse by Topic</h3>
                <div className="flex flex-wrap gap-2">
                  {topics.map((topic, index) => (
                    <Link
                      key={topic}
                      to={`/blog/topic/${topic.toLowerCase().replace(/\s+/g, '-')}`}
                      className="px-3 py-1 bg-[#FAFAFA] rounded-full text-xs text-[#6F6F6F] hover:bg-[#F2E8E6] transition-colors"
                    >
                      {topic}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-[#F2E8E6] p-6 rounded-sm">
                <h3 className="font-heading text-lg text-[#C9A7A0] mb-2">Never Miss a Post</h3>
                <p className="text-sm text-[#6F6F6F] mb-4">
                  Get the latest articles delivered to your inbox
                </p>
                <div className="flex flex-col gap-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="px-4 py-2 border border-[#E5D5D0] rounded-sm focus:outline-none focus:border-[#C9A7A0] text-sm"
                  />
                  <button className="px-4 py-2 bg-[#C9A7A0] text-white text-sm uppercase tracking-[2px] hover:bg-[#B89690] transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="py-16 px-4 md:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="font-heading text-2xl text-[#C9A7A0] font-light mb-4">
            Follow Our Journey
          </h2>
          <p className="text-[#6F6F6F] mb-8">@yourweddingcompany on Instagram</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="relative overflow-hidden rounded-sm aspect-square group">
                <img
                  src={`https://images.unsplash.com/photo-${item === 1 ? '1511795409834-ef04bbd61622' : item === 2 ? '1534265264056-4a5e9c816aa4' : item === 3 ? '1549144511-f099e773c147' : '1464368081811-1740e3b80f10'}?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80`}
                  alt="Instagram post"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Heart className="h-6 w-6 text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}