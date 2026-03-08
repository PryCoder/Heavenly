import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Mail, Phone, MapPin, CheckCircle, XCircle, X } from 'lucide-react';
import { useState, useEffect } from 'react';

// ── Toast Component ────────────────────────────────────────────────────────
type ToastType = 'success' | 'error';
interface ToastProps { type: ToastType; message: string; onClose: () => void; }

function Toast({ type, message, onClose }: ToastProps) {
  useEffect(() => {
    const t = setTimeout(onClose, 5000);
    return () => clearTimeout(t);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50 w-[calc(100%-32px)] sm:w-auto max-w-[380px]"
      style={{
        padding: '16px 20px',
        backgroundColor: '#FFFFFF',
        border: `1px solid ${type === 'success' ? '#C9A7A0' : '#EF4444'}`,
        boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
      }}
    >
      <div className="flex items-start gap-3">
        {type === 'success'
          ? <CheckCircle className="text-[#C9A7A0] flex-shrink-0 mt-0.5" size={20} />
          : <XCircle className="text-[#EF4444] flex-shrink-0 mt-0.5" size={20} />
        }
        <p className="text-sm sm:text-base text-[#6F6F6F] leading-relaxed flex-1 font-light">{message}</p>
        <button onClick={onClose} className="flex-shrink-0 hover:opacity-70 transition-opacity">
          <X size={16} className="text-[#9A9A9A]" />
        </button>
      </div>
    </motion.div>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────
const EMPTY_FORM = { name: '', email: '', phone: '', date: '', eventType: '', location: '', guests: '', budget: '', message: '' };

export default function ContactPage() {
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{ type: ToastType; message: string } | null>(null);

  const showToast = (type: ToastType, message: string) => setToast({ type, message });
  const closeToast = () => setToast(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    closeToast();

    try {
      const res = await fetch('http://localhost:5100/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        const msg = data.errors?.[0]?.msg || data.message || 'Submission failed. Please try again.';
        throw new Error(msg);
      }

      showToast('success', "Thank you! We've received your inquiry and will be in touch within 24 hours.");
      setFormData(EMPTY_FORM);
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Something went wrong. Please try again or contact us directly.';
      showToast('error', message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="bg-white pt-[117px]">
      {/* Hero Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8">
        <div className="mx-auto max-w-4xl px-4 sm:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-4 uppercase tracking-[3px] text-[10px] sm:text-[11px] text-[#9A9A9A] font-sans">
              Get in Touch
            </p>
            <h1 className="font-serif mb-4 md:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-[#C9A7A0] font-light">
              Schedule Your Consultation
            </h1>
            <p className="text-sm sm:text-base leading-relaxed text-[#6F6F6F] max-w-3xl mx-auto font-light">
              Begin your journey with a complimentary consultation. Share your vision with us, and let's start planning the celebration of your dreams.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-8 md:py-12 lg:py-16 px-4 sm:px-6 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:gap-16 grid-cols-1 lg:grid-cols-2">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif mb-6 md:mb-8 text-2xl sm:text-3xl md:text-4xl text-[#C9A7A0] font-light">
                Tell Us About Your Vision
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block uppercase tracking-[2px] text-[10px] sm:text-[11px] text-[#6F6F6F] font-sans">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full transition-all duration-300 text-sm sm:text-base bg-white border border-[#ECECEC] focus:border-[#C9A7A0] outline-none px-4 py-3 sm:px-5 sm:py-4 text-[#6F6F6F] font-light"
                      style={{ borderColor: '#ECECEC' }}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-2 block uppercase tracking-[2px] text-[10px] sm:text-[11px] text-[#6F6F6F] font-sans">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full transition-all duration-300 text-sm sm:text-base bg-white border border-[#ECECEC] focus:border-[#C9A7A0] outline-none px-4 py-3 sm:px-5 sm:py-4 text-[#6F6F6F] font-light"
                    />
                  </div>
                </div>

                <div className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="mb-2 block uppercase tracking-[2px] text-[10px] sm:text-[11px] text-[#6F6F6F] font-sans">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full transition-all duration-300 text-sm sm:text-base bg-white border border-[#ECECEC] focus:border-[#C9A7A0] outline-none px-4 py-3 sm:px-5 sm:py-4 text-[#6F6F6F] font-light"
                    />
                  </div>

                  <div>
                    <label htmlFor="date" className="mb-2 block uppercase tracking-[2px] text-[10px] sm:text-[11px] text-[#6F6F6F] font-sans">
                      Wedding Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full transition-all duration-300 text-sm sm:text-base bg-white border border-[#ECECEC] focus:border-[#C9A7A0] outline-none px-4 py-3 sm:px-5 sm:py-4 text-[#6F6F6F] font-light"
                    />
                  </div>
                </div>

                <div className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2">
                  <div>
                    <label htmlFor="eventType" className="mb-2 block uppercase tracking-[2px] text-[10px] sm:text-[11px] text-[#6F6F6F] font-sans">
                      Type of Event *
                    </label>
                    <select
                      id="eventType"
                      name="eventType"
                      required
                      value={formData.eventType}
                      onChange={handleChange}
                      className="w-full transition-all duration-300 text-sm sm:text-base bg-white border border-[#ECECEC] focus:border-[#C9A7A0] outline-none px-4 py-3 sm:px-5 sm:py-4 text-[#6F6F6F] font-light"
                    >
                      <option value="">Select event type</option>
                      <option value="wedding">Wedding</option>
                      <option value="engagement">Engagement</option>
                      <option value="reception">Reception</option>
                      <option value="sangeet">Sangeet</option>
                      <option value="mehendi">Mehendi</option>
                      <option value="haldi">Haldi</option>
                      <option value="multiple">Multiple Events</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="budget" className="mb-2 block uppercase tracking-[2px] text-[10px] sm:text-[11px] text-[#6F6F6F] font-sans">
                      Budget Range *
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      required
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full transition-all duration-300 text-sm sm:text-base bg-white border border-[#ECECEC] focus:border-[#C9A7A0] outline-none px-4 py-3 sm:px-5 sm:py-4 text-[#6F6F6F] font-light"
                    >
                      <option value="">Select budget range</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="100k-250k">$100,000 - $250,000</option>
                      <option value="250k-500k">$250,000 - $500,000</option>
                      <option value="500k-1m">$500,000 - $1,000,000</option>
                      <option value="1m+">$1,000,000+</option>
                    </select>
                  </div>
                </div>

                <div className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2">
                  <div>
                    <label htmlFor="location" className="mb-2 block uppercase tracking-[2px] text-[10px] sm:text-[11px] text-[#6F6F6F] font-sans">
                      Preferred Location
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="e.g., Tuscany, Udaipur"
                      className="w-full transition-all duration-300 text-sm sm:text-base bg-white border border-[#ECECEC] focus:border-[#C9A7A0] outline-none px-4 py-3 sm:px-5 sm:py-4 text-[#6F6F6F] font-light placeholder:text-[#9A9A9A]"
                    />
                  </div>

                  <div>
                    <label htmlFor="guests" className="mb-2 block uppercase tracking-[2px] text-[10px] sm:text-[11px] text-[#6F6F6F] font-sans">
                      Number of Guests
                    </label>
                    <select
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full transition-all duration-300 text-sm sm:text-base bg-white border border-[#ECECEC] focus:border-[#C9A7A0] outline-none px-4 py-3 sm:px-5 sm:py-4 text-[#6F6F6F] font-light"
                    >
                      <option value="">Select range</option>
                      <option value="50-100">50-100</option>
                      <option value="100-200">100-200</option>
                      <option value="200-300">200-300</option>
                      <option value="300+">300+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block uppercase tracking-[2px] text-[10px] sm:text-[11px] text-[#6F6F6F] font-sans">
                    Tell Us About Your Vision *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full transition-all duration-300 text-sm sm:text-base bg-white border border-[#ECECEC] focus:border-[#C9A7A0] outline-none px-4 py-3 sm:px-5 sm:py-4 text-[#6F6F6F] font-light resize-y"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 uppercase tracking-[2px] transition-all duration-500 px-6 sm:px-8 md:px-10 py-4 sm:py-5 text-[11px] sm:text-xs font-sans"
                  style={{ 
                    backgroundColor: isSubmitting ? '#E5E5E5' : '#F2E8E6', 
                    color: '#6F6F6F',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.backgroundColor = '#C9A7A0';
                      e.currentTarget.style.color = '#FFFFFF';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.backgroundColor = '#F2E8E6';
                      e.currentTarget.style.color = '#6F6F6F';
                    }
                  }}
                >
                  <Calendar className="h-4 w-4" />
                  {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="font-serif mb-6 md:mb-8 text-2xl sm:text-3xl md:text-4xl text-[#C9A7A0] font-light">
                Get in Touch
              </h2>

              <div className="space-y-6 md:space-y-8">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#F2E8E6]">
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-[#C9A7A0]" />
                  </div>
                  <div>
                    <h3 className="font-serif mb-1 sm:mb-2 text-base sm:text-lg md:text-xl text-[#6F6F6F] font-medium">
                      Email Us
                    </h3>
                    <p className="text-sm sm:text-base text-[#9A9A9A] leading-relaxed font-light break-all">
                      hello@heavenlyweds.com<br />
                      inquiries@heavenlyweds.com
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#F2E8E6]">
                    <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-[#C9A7A0]" />
                  </div>
                  <div>
                    <h3 className="font-serif mb-1 sm:mb-2 text-base sm:text-lg md:text-xl text-[#6F6F6F] font-medium">
                      Call Us
                    </h3>
                    <p className="text-sm sm:text-base text-[#9A9A9A] leading-relaxed font-light">
                      +1 (555) 123-4567<br />
                      Mon-Fri: 9am - 6pm EST
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#F2E8E6]">
                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-[#C9A7A0]" />
                  </div>
                  <div>
                    <h3 className="font-serif mb-1 sm:mb-2 text-base sm:text-lg md:text-xl text-[#6F6F6F] font-medium">
                      Visit Us
                    </h3>
                    <p className="text-sm sm:text-base text-[#9A9A9A] leading-relaxed font-light">
                      123 Luxury Lane<br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 md:mt-10 lg:mt-12 rounded-lg p-6 sm:p-8 bg-[#F2E8E6]">
                <h3 className="font-serif mb-4 text-xl sm:text-2xl md:text-3xl text-[#C9A7A0] font-light">
                  What to Expect
                </h3>
                <ul className="space-y-2 md:space-y-3">
                  {[
                    'Complimentary 60-minute consultation',
                    'Personalized wedding vision discussion',
                    'Venue and location recommendations',
                    'Custom planning package proposal'
                  ].map((item, index) => (
                    <li key={index} className="flex gap-3 text-sm sm:text-base text-[#6F6F6F] leading-relaxed font-light">
                      <span className="text-[#C9A7A0]">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Toast Notification */}
      <AnimatePresence>
        {toast && (
          <Toast
            type={toast.type}
            message={toast.message}
            onClose={closeToast}
          />
        )}
      </AnimatePresence>
    </div>
  );
}