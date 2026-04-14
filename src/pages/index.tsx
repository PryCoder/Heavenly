import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import weddingImage1 from '/shivammansi/fwdwedding/wd-2 (1).jpg';
import weddingImage2 from '/shivammansi/fwdwedding/wd-2 (2).jpg';
import weddingImage7 from '/shivammansi/fwdwedding/wed-1 (3).jpg';
import weddingImage8 from '/shivammansi/fwdwedding/wed-1 (4).jpg';
import christianWed1 from '/christianwed/fwdchristianwedding/chr-1.jpg';
import christianWed2 from '/christianwed/fwdchristianwedding/chr-1 (2).jpg';

export default function HomePage() {
  // Hero image slider state
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [heroVideoFailed, setHeroVideoFailed] = useState(false);
  const heroImages = [
    weddingImage1,
    weddingImage2,
    weddingImage7,
    christianWed2
  ];
  const heroVideoSrc = 'https://player.cloudinary.com/embed/?cloud_name=do4h3t3mk&public_id=home_page_1_zq0jbq';
  const API_URL = import.meta.env.VITE_API_URL
  useEffect(() => {
    const checkHealth = async () => {
      try {
        const res = await fetch(`${API_URL}/api/health`);
        const data = await res.json();
        console.log("Health API:", data);
      } catch (error) {
        console.error("Health API error:", error);
      }
    };

    checkHealth();
  }, []);
  useEffect(() => {
    if (!heroVideoFailed) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [heroVideoFailed, heroImages.length]);

  return (
    <div className="min-h-screen" style={{ paddingTop: 'clamp(80px, 15vw, 117px)' }}>
      <title>Luxury Destination Weddings | HEAVENLY WEDS</title>
      <meta name="description" content="Creating unforgettable luxury weddings across the world's most breathtaking destinations." />

      {/* Hero Section - 2-Part Layout */}
      <section className="relative">
        {/* PART 1: Top White Text Area */}
        <div className="relative bg-white" style={{ 
          paddingTop: 'clamp(30px, 8vw, 56px)', 
          paddingBottom: 'clamp(20px, 6vw, 36px)' 
        }}>
          <div className="mx-auto flex items-center justify-center" style={{ 
            maxWidth: '1320px', 
            padding: '0 clamp(16px, 5vw, 60px)' 
          }}>
            {/* Centered Text Block */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center w-full"
              style={{ maxWidth: '780px' }}>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(32px, 8vw, 52px)',
                  lineHeight: '1.15',
                  color: '#C9A7A0',
                  fontWeight: 400,
                  letterSpacing: '0.5px',
                  marginBottom: '0',
                  marginTop: '0',
                  padding: '0 10px'
                }}>
                Where Dreams Become Reality
              </motion.h1>
              
              {/* Subtitle - Italic */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontStyle: 'italic',
                  fontSize: 'clamp(18px, 4vw, 26px)',
                  lineHeight: '1.3',
                  color: '#8C8C8C',
                  fontWeight: 400,
                  letterSpacing: '0px',
                  marginTop: 'clamp(10px, 2vw, 14px)',
                  marginBottom: '0',
                  padding: '0 15px'
                }}>
                Exquisite celebrations in the world's most enchanting locations
              </motion.p>
              
              {/* Small Tagline */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                style={{
                  fontFamily: 'var(--font-sans)',
                  textTransform: 'uppercase',
                  fontSize: 'clamp(10px, 2vw, 12px)',
                  letterSpacing: 'clamp(2px, 1vw, 3.5px)',
                  color: '#7A7A7A',
                  fontWeight: 400,
                  marginTop: 'clamp(15px, 3vw, 20px)',
                  marginBottom: '0'
                }}>
                Elegance · Refinement · Class
              </motion.p>
            </motion.div>

            {/* Decorative Blog Stamp - hidden on mobile/tablet */}
            <div className="absolute right-8 top-1/2 hidden -translate-y-1/2 xl:block" style={{ opacity: 0.5, transform: 'translateY(-50%) rotate(-10deg)' }}>
              <div className="flex h-28 w-28 items-center justify-center rounded-full" style={{ border: '1.5px solid #C9A7A0' }}>
                <div className="text-center">
                  <p className="mb-0" style={{ fontFamily: 'var(--font-script)', fontSize: '22px', color: '#C9A7A0', fontWeight: 400, lineHeight: '1' }}>Blog</p>
                  <p className="uppercase" style={{ fontSize: '8px', letterSpacing: '1.5px', color: '#B5A09A', marginTop: '2px' }}>Explore</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PART 2: Bottom Image Slider */}
        <div className="relative overflow-hidden" style={{ 
          height: 'clamp(300px, 78vh, 900px)', 
          minHeight: 'clamp(300px, 60vh, 650px)' 
        }}>
          {/* Background Video (falls back to image slider if video missing) */}
          <div className="absolute inset-0">
            {!heroVideoFailed ? (
              <video
                className="absolute inset-0 h-full w-full object-cover"
                src={'/home page2.mp4'}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster={heroImages[0]}
                onError={() => setHeroVideoFailed(true)}
                style={{ filter: 'brightness(0.98) saturate(0.85)' }}
              />
            ) : (
              <AnimatePresence initial={false}>
                <motion.img
                  key={currentImageIndex}
                  src={heroImages[currentImageIndex]}
                  alt="Luxury destination wedding"
                  className="absolute inset-0 h-full w-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.4, ease: 'easeInOut' }}
                  style={{ filter: 'brightness(0.98) saturate(0.85)' }} />
              </AnimatePresence>
            )}
          </div>

          {/* Bottom Caption Strip with Slider Dots */}
          <div className="absolute bottom-0 left-0 right-0 z-10 bg-white" style={{ 
            height: 'clamp(70px, 12vw, 90px)', 
            borderTop: '1px solid #ECECEC' 
          }}>
            <div className="flex h-full flex-col items-center justify-center" style={{ gap: 'clamp(8px, 2vw, 16px)' }}>
              {/* Caption Text */}
              <p className="uppercase text-center px-4" style={{ 
                fontSize: 'clamp(9px, 2vw, 11px)', 
                letterSpacing: 'clamp(2px, 1vw, 3.5px)', 
                color: '#9A9A9A', 
                fontWeight: 400 
              }}>
                Creating Timeless Moments
              </p>
              
              {/* Slider Dots (only shown if video fails to load) */}
              {heroVideoFailed && (
                <div className="flex items-center" style={{ gap: 'clamp(8px, 2vw, 12px)' }}>
                  {heroImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className="rounded-full transition-all duration-300"
                      style={{
                        width: index === currentImageIndex ? 'clamp(6px, 1.5vw, 8px)' : 'clamp(5px, 1.2vw, 7px)',
                        height: index === currentImageIndex ? 'clamp(6px, 1.5vw, 8px)' : 'clamp(5px, 1.2vw, 7px)',
                        backgroundColor: index === currentImageIndex ? '#8A8A8A' : '#D8D8D8',
                        border: 'none',
                        cursor: 'pointer'
                      }}
                      aria-label={`Go to slide ${index + 1}`} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section style={{ padding: 'clamp(60px, 10vw, 120px) 0' }}>
        <div className="mx-auto" style={{ 
          maxWidth: '1200px', 
          padding: '0 clamp(16px, 5vw, 60px)' 
        }}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.6 }} 
            className="text-center w-full"
            style={{ maxWidth: '800px', margin: '0 auto' }}
          >
            <p className="mb-4 uppercase tracking-widest" style={{ 
              fontSize: 'clamp(10px, 2vw, 11px)', 
              letterSpacing: 'clamp(2px, 1vw, 3px)', 
              color: '#9A9A9A' 
            }}>
              About Us
            </p>
            <h2 className="font-heading mb-6" style={{ 
              fontSize: 'clamp(32px, 8vw, 44px)', 
              lineHeight: '1.3', 
              color: '#C9A7A0', 
              fontWeight: 400,
              padding: '0 10px'
            }}>
              Crafting Timeless Celebrations
            </h2>
            <p className="leading-relaxed px-4" style={{ 
              fontSize: 'clamp(14px, 3vw, 16px)', 
              lineHeight: '1.8', 
              color: '#6F6F6F' 
            }}>
              For over a decade, we have been creating extraordinary wedding experiences 
              in the world's most breathtaking destinations. Our approach combines 
              meticulous planning with creative vision, ensuring every detail reflects 
              your unique love story.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section style={{ 
        padding: 'clamp(60px, 8vw, 80px) 0', 
        backgroundColor: '#FAFAFA' 
      }}>
        <div className="mx-auto" style={{ 
          maxWidth: '1320px', 
          padding: '0 clamp(16px, 5vw, 60px)' 
        }}>
          <div className="grid gap-8 md:gap-12 lg:gap-16 grid-cols-1 lg:grid-cols-2">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6 }} 
              className="group"
            >
              <div className="mb-6 overflow-hidden rounded-lg">
                <img 
                  src="https://bp37mc8dd9.preview.c36.airoapp.ai/airo-assets/images/pages/home/service-planning" 
                  alt="Complete wedding planning" 
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ height: 'clamp(250px, 40vw, 400px)' }} 
                />
              </div>
              <div className="flex items-center gap-3 mb-4">
                <Sparkles style={{ width: 'clamp(18px, 3vw, 20px)', height: 'clamp(18px, 3vw, 20px)', color: '#C9A7A0' }} />
                <h3 className="font-heading" style={{ 
                  fontSize: 'clamp(22px, 5vw, 28px)', 
                  color: '#6F6F6F', 
                  fontWeight: 400 
                }}>
                  Complete Wedding Planning
                </h3>
              </div>
              <p className="mb-6 leading-relaxed" style={{ 
                fontSize: 'clamp(14px, 2.5vw, 15px)', 
                lineHeight: '1.8', 
                color: '#9A9A9A' 
              }}>
                From the first consultation to your final farewell, we orchestrate every 
                element of your celebration with precision and care.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6, delay: 0.2 }} 
              className="group"
            >
              <div className="mb-6 overflow-hidden rounded-lg">
                <img 
                  src="https://bp37mc8dd9.preview.c36.airoapp.ai/airo-assets/images/pages/home/service-venue" 
                  alt="Destination venue curation" 
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ height: 'clamp(250px, 40vw, 400px)' }} 
                />
              </div>
              <div className="flex items-center gap-3 mb-4">
                <MapPin style={{ width: 'clamp(18px, 3vw, 20px)', height: 'clamp(18px, 3vw, 20px)', color: '#C9A7A0' }} />
                <h3 className="font-heading" style={{ 
                  fontSize: 'clamp(22px, 5vw, 28px)', 
                  color: '#6F6F6F', 
                  fontWeight: 400 
                }}>
                  Destination & Venue Curation
                </h3>
              </div>
              <p className="mb-6 leading-relaxed" style={{ 
                fontSize: 'clamp(14px, 2.5vw, 15px)', 
                lineHeight: '1.8', 
                color: '#9A9A9A' 
              }}>
                Discover extraordinary venues in the world's most romantic destinations, 
                from historic villas to pristine beachfront estates.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section style={{ padding: 'clamp(60px, 10vw, 120px) 0' }}>
        <div className="mx-auto" style={{ 
          maxWidth: '1320px', 
          padding: '0 clamp(16px, 5vw, 60px)' 
        }}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.6 }} 
            className="mb-12 md:mb-16 text-center"
          >
            <p className="mb-4 uppercase tracking-widest" style={{ 
              fontSize: 'clamp(10px, 2vw, 11px)', 
              letterSpacing: 'clamp(2px, 1vw, 3px)', 
              color: '#9A9A9A' 
            }}>
              Portfolio
            </p>
            <h2 className="font-heading mb-6" style={{ 
              fontSize: 'clamp(32px, 8vw, 44px)', 
              lineHeight: '1.3', 
              color: '#C9A7A0', 
              fontWeight: 400 
            }}>
              Recent Celebrations
            </h2>
          </motion.div>
          <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {[weddingImage1, weddingImage2, weddingImage7, weddingImage8, christianWed1, christianWed2].map((imgSrc, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.6, delay: index * 0.1 }} 
                className="group overflow-hidden rounded-lg"
              >
                <img 
                  src={imgSrc} 
                  alt={`Wedding ${index + 1}`} 
                  className="w-full object-cover transition-all duration-700 group-hover:scale-105"
                  style={{ 
                    height: 'clamp(250px, 40vw, 380px)', 
                    filter: 'brightness(0.95)' 
                  }} 
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ 
        padding: 'clamp(60px, 8vw, 100px) 0', 
        backgroundColor: '#FAFAFA' 
      }}>
        <div className="mx-auto" style={{ 
          maxWidth: '1200px', 
          padding: '0 clamp(16px, 5vw, 60px)' 
        }}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.6 }} 
            className="mb-12 md:mb-16 text-center"
          >
            <p className="mb-4 uppercase tracking-widest" style={{ 
              fontSize: 'clamp(10px, 2vw, 11px)', 
              letterSpacing: 'clamp(2px, 1vw, 3px)', 
              color: '#9A9A9A' 
            }}>
              Testimonials
            </p>
            <h2 className="font-heading" style={{ 
              fontSize: 'clamp(32px, 8vw, 44px)', 
              lineHeight: '1.3', 
              color: '#C9A7A0', 
              fontWeight: 400,
              padding: '0 10px'
            }}>
              Kind Words from Our Couples
            </h2>
          </motion.div>
          <div className="grid gap-8 md:gap-12 grid-cols-1 md:grid-cols-2">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6 }} 
              className="bg-white rounded-lg"
              style={{ padding: 'clamp(24px, 5vw, 48px)' }}
            >
              <p className="font-heading italic mb-8 leading-relaxed" style={{ 
                fontSize: 'clamp(16px, 3vw, 18px)', 
                lineHeight: '1.8', 
                color: '#6F6F6F' 
              }}>
                "Heavenly Weds are the best for wedding planning! From decor to photography, everything was handled perfectly. The team made our big day stress-free and truly magical. Highly recommended!"
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src= {christianWed2} 
                  alt="Roy & Rachel" 
                  className="rounded-full object-cover"
                  style={{ width: 'clamp(48px, 8vw, 64px)', height: 'clamp(48px, 8vw, 64px)' }} 
                />
                <div>
                  <p className="font-heading mb-1" style={{ 
                    fontSize: 'clamp(14px, 2.5vw, 16px)', 
                    color: '#6F6F6F', 
                    fontWeight: 600 
                  }}>
                  Roy & Rachel
                  </p>
                  <p style={{ fontSize: 'clamp(12px, 2vw, 13px)', color: '#9A9A9A' }}>
                    Goa, India
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6, delay: 0.2 }} 
              className="bg-white rounded-lg"
              style={{ padding: 'clamp(24px, 5vw, 48px)' }}
            >
              <p className="font-heading italic mb-8 leading-relaxed" style={{ 
                fontSize: 'clamp(16px, 3vw, 18px)', 
                lineHeight: '1.8', 
                color: '#6F6F6F' 
              }}>
                "Heavenly Weds did a great pre-wedding photoshoot for us! They captured our moments beautifully and made the entire experience so comfortable and fun. Loved every bit of it — highly recommended!"
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src="https://bp37mc8dd9.preview.c36.airoapp.ai/airo-assets/images/pages/home/testimonial-1" 
                  alt="Nishita & Raj" 
                  className="rounded-full object-cover"
                  style={{ width: 'clamp(48px, 8vw, 64px)', height: 'clamp(48px, 8vw, 64px)' }} 
                />
                <div>
                  <p className="font-heading mb-1" style={{ 
                    fontSize: 'clamp(14px, 2.5vw, 16px)', 
                    color: '#6F6F6F', 
                    fontWeight: 600 
                  }}>
                   Nishita & Raj
                  </p>
                  <p style={{ fontSize: 'clamp(12px, 2vw, 13px)', color: '#9A9A9A' }}>
                    Udaipur, India
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ padding: 'clamp(60px, 10vw, 120px) 0' }}>
        <div className="mx-auto text-center" style={{ 
          maxWidth: '800px', 
          padding: '0 clamp(16px, 5vw, 60px)' 
        }}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading mb-6" style={{ 
              fontSize: 'clamp(32px, 8vw, 48px)', 
              lineHeight: '1.3', 
              color: '#C9A7A0', 
              fontWeight: 400,
              padding: '0 10px'
            }}>
              Let's Create Your Perfect Day
            </h2>
            <p className="mb-8 md:mb-10 leading-relaxed px-4" style={{ 
              fontSize: 'clamp(14px, 3vw, 16px)', 
              lineHeight: '1.8', 
              color: '#6F6F6F' 
            }}>
              Begin your journey with a complimentary consultation. We will discuss 
              your vision and start planning the celebration of your dreams.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 uppercase tracking-widest transition-all duration-500 w-full sm:w-auto justify-center"
              style={{ 
                padding: 'clamp(14px, 3vw, 16px) clamp(24px, 5vw, 40px)', 
                fontSize: 'clamp(10px, 2vw, 11px)', 
                letterSpacing: 'clamp(1.5px, 1vw, 2px)', 
                backgroundColor: '#F2E8E6', 
                color: '#6F6F6F', 
                border: '1px solid transparent', 
                textDecoration: 'none',
                borderRadius: '4px'
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
              <Calendar className="h-4 w-4" />
              Schedule Consultation
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/919594888516?text=hi"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed z-50 flex items-center justify-center rounded-full"
        style={{
          bottom: 'clamp(16px, 4vw, 32px)',
          right: 'clamp(16px, 4vw, 32px)',
          width: 'clamp(48px, 8vw, 60px)',
          height: 'clamp(48px, 8vw, 60px)',
          backgroundColor: '#25D366',
          color: '#FFFFFF',
          boxShadow: '0 8px 24px rgba(37, 211, 102, 0.3)',
        }}
        aria-label="Chat with us on WhatsApp"
      >
        <svg viewBox="0 0 24 24" width="clamp(24px, 4vw, 32px)" height="clamp(24px, 4vw, 32px)" fill="currentColor">
          <path d="M12.031 0C5.385 0 .002 5.385.002 12.031c0 2.124.553 4.195 1.603 6.01L.001 24l6.108-1.597c1.745.967 3.738 1.479 5.922 1.479 6.646 0 12.029-5.385 12.029-12.031C24.06 5.385 18.677 0 12.031 0zm3.847 17.279c-.168.475-.98.905-1.353.94-.343.033-.804.148-2.617-.591-2.18-.891-3.568-3.111-3.676-3.284-.108-.172-.876-1.164-.876-2.22 0-1.056.551-1.579.749-1.801.196-.222.428-.278.571-.278.143 0 .285.002.411.008.134.008.315-.052.493.376.183.438.625 1.536.681 1.651.056.115.093.25.019.394-.075.143-.113.232-.226.365-.113.133-.238.293-.342.404-.113.119-.233.248-.103.456.129.208.576.938 1.205 1.498.81.722 1.517.944 1.731 1.052.214.108.338.09.464-.055.126-.144.542-.634.689-.854.145-.221.293-.183.501-.105.208.077 1.311.618 1.536.732.225.114.375.172.431.267.056.095.056.552-.112 1.027z" />
        </svg>
      </motion.a>
    </div>
  );
}