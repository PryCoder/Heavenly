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
      className="flex items-start gap-3"
      style={{
        position: 'fixed', top: '24px', right: '24px', zIndex: 9999,
        padding: '16px 20px', maxWidth: '380px', width: '100%',
        backgroundColor: '#FFFFFF',
        border: `1px solid ${type === 'success' ? '#C9A7A0' : '#EF4444'}`,
        boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
      }}
    >
      {type === 'success'
        ? <CheckCircle style={{ color: '#C9A7A0', flexShrink: 0, marginTop: '1px' }} size={20} />
        : <XCircle style={{ color: '#EF4444', flexShrink: 0, marginTop: '1px' }} size={20} />
      }
      <p style={{ fontSize: '14px', color: '#6F6F6F', lineHeight: '1.6', flex: 1 }}>{message}</p>
      <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0', flexShrink: 0 }}>
        <X size={16} style={{ color: '#9A9A9A' }} />
      </button>
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
        // Show first validation error if available, else server message
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
    <div className="bg-white" style={{ paddingTop: '117px' }}>
      {/* Hero Section */}
      <section style={{ padding: '80px 0 60px' }}>
        <div className="mx-auto text-center" style={{ maxWidth: '800px', padding: '0 60px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-4 uppercase tracking-widest" style={{ fontSize: '11px', letterSpacing: '3px', color: '#9A9A9A' }}>
              Get in Touch
            </p>
            <h1 className="font-heading mb-6" style={{ fontSize: '56px', lineHeight: '1.2', color: '#C9A7A0', fontWeight: 400 }}>
              Schedule Your Consultation
            </h1>
            <p className="leading-relaxed" style={{ fontSize: '16px', lineHeight: '1.8', color: '#6F6F6F' }}>
              Begin your journey with a complimentary consultation. Share your vision with us, and let's start planning the celebration of your dreams.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section style={{ padding: '60px 0 120px' }}>
        <div className="mx-auto grid gap-16 lg:grid-cols-2" style={{ maxWidth: '1200px', padding: '0 60px' }}>
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading mb-8" style={{ fontSize: '32px', lineHeight: '1.3', color: '#C9A7A0', fontWeight: 400 }}>
              Tell Us About Your Vision
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block uppercase tracking-wider" style={{ fontSize: '11px', letterSpacing: '2px', color: '#6F6F6F' }}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full transition-colors duration-300"
                    style={{ 
                      padding: '14px 18px', 
                      fontSize: '15px', 
                      border: '1px solid #ECECEC',
                      backgroundColor: '#FFFFFF',
                      color: '#6F6F6F'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#C9A7A0'}
                    onBlur={(e) => e.target.style.borderColor = '#ECECEC'}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block uppercase tracking-wider" style={{ fontSize: '11px', letterSpacing: '2px', color: '#6F6F6F' }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full transition-colors duration-300"
                    style={{ 
                      padding: '14px 18px', 
                      fontSize: '15px', 
                      border: '1px solid #ECECEC',
                      backgroundColor: '#FFFFFF',
                      color: '#6F6F6F'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#C9A7A0'}
                    onBlur={(e) => e.target.style.borderColor = '#ECECEC'}
                  />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="phone" className="mb-2 block uppercase tracking-wider" style={{ fontSize: '11px', letterSpacing: '2px', color: '#6F6F6F' }}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full transition-colors duration-300"
                    style={{ 
                      padding: '14px 18px', 
                      fontSize: '15px', 
                      border: '1px solid #ECECEC',
                      backgroundColor: '#FFFFFF',
                      color: '#6F6F6F'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#C9A7A0'}
                    onBlur={(e) => e.target.style.borderColor = '#ECECEC'}
                  />
                </div>

                <div>
                  <label htmlFor="date" className="mb-2 block uppercase tracking-wider" style={{ fontSize: '11px', letterSpacing: '2px', color: '#6F6F6F' }}>
                    Wedding Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full transition-colors duration-300"
                    style={{ 
                      padding: '14px 18px', 
                      fontSize: '15px', 
                      border: '1px solid #ECECEC',
                      backgroundColor: '#FFFFFF',
                      color: '#6F6F6F'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#C9A7A0'}
                    onBlur={(e) => e.target.style.borderColor = '#ECECEC'}
                  />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="eventType" className="mb-2 block uppercase tracking-wider" style={{ fontSize: '11px', letterSpacing: '2px', color: '#6F6F6F' }}>
                    Type of Event *
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    required
                    value={formData.eventType}
                    onChange={handleChange}
                    className="w-full transition-colors duration-300"
                    style={{ 
                      padding: '14px 18px', 
                      fontSize: '15px', 
                      border: '1px solid #ECECEC',
                      backgroundColor: '#FFFFFF',
                      color: '#6F6F6F'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#C9A7A0'}
                    onBlur={(e) => e.target.style.borderColor = '#ECECEC'}
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
                  <label htmlFor="budget" className="mb-2 block uppercase tracking-wider" style={{ fontSize: '11px', letterSpacing: '2px', color: '#6F6F6F' }}>
                    Budget Range *
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    required
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full transition-colors duration-300"
                    style={{ 
                      padding: '14px 18px', 
                      fontSize: '15px', 
                      border: '1px solid #ECECEC',
                      backgroundColor: '#FFFFFF',
                      color: '#6F6F6F'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#C9A7A0'}
                    onBlur={(e) => e.target.style.borderColor = '#ECECEC'}
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

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="location" className="mb-2 block uppercase tracking-wider" style={{ fontSize: '11px', letterSpacing: '2px', color: '#6F6F6F' }}>
                    Preferred Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="e.g., Tuscany, Udaipur"
                    className="w-full transition-colors duration-300"
                    style={{ 
                      padding: '14px 18px', 
                      fontSize: '15px', 
                      border: '1px solid #ECECEC',
                      backgroundColor: '#FFFFFF',
                      color: '#6F6F6F'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#C9A7A0'}
                    onBlur={(e) => e.target.style.borderColor = '#ECECEC'}
                  />
                </div>

                <div>
                  <label htmlFor="guests" className="mb-2 block uppercase tracking-wider" style={{ fontSize: '11px', letterSpacing: '2px', color: '#6F6F6F' }}>
                    Number of Guests
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full transition-colors duration-300"
                    style={{ 
                      padding: '14px 18px', 
                      fontSize: '15px', 
                      border: '1px solid #ECECEC',
                      backgroundColor: '#FFFFFF',
                      color: '#6F6F6F'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#C9A7A0'}
                    onBlur={(e) => e.target.style.borderColor = '#ECECEC'}
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
                <label htmlFor="message" className="mb-2 block uppercase tracking-wider" style={{ fontSize: '11px', letterSpacing: '2px', color: '#6F6F6F' }}>
                  Tell Us About Your Vision *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full transition-colors duration-300"
                  style={{ 
                    padding: '14px 18px', 
                    fontSize: '15px', 
                    border: '1px solid #ECECEC',
                    backgroundColor: '#FFFFFF',
                    color: '#6F6F6F',
                    resize: 'vertical'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#C9A7A0'}
                  onBlur={(e) => e.target.style.borderColor = '#ECECEC'}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 uppercase tracking-widest transition-all duration-500"
                style={{ 
                  padding: '16px 40px', 
                  fontSize: '11px', 
                  letterSpacing: '2px', 
                  backgroundColor: isSubmitting ? '#E5E5E5' : '#F2E8E6', 
                  color: '#6F6F6F', 
                  border: '1px solid transparent',
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
            <h2 className="font-heading mb-8" style={{ fontSize: '32px', lineHeight: '1.3', color: '#C9A7A0', fontWeight: 400 }}>
              Get in Touch
            </h2>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: '#F2E8E6' }}>
                  <Mail className="h-5 w-5" style={{ color: '#C9A7A0' }} />
                </div>
                <div>
                  <h3 className="mb-2 font-heading" style={{ fontSize: '18px', color: '#6F6F6F', fontWeight: 600 }}>
                    Email Us
                  </h3>
                  <p style={{ fontSize: '15px', color: '#9A9A9A', lineHeight: '1.6' }}>
                    hello@heavenlyweds.com<br />
                    inquiries@heavenlyweds.com
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: '#F2E8E6' }}>
                  <Phone className="h-5 w-5" style={{ color: '#C9A7A0' }} />
                </div>
                <div>
                  <h3 className="mb-2 font-heading" style={{ fontSize: '18px', color: '#6F6F6F', fontWeight: 600 }}>
                    Call Us
                  </h3>
                  <p style={{ fontSize: '15px', color: '#9A9A9A', lineHeight: '1.6' }}>
                    +1 (555) 123-4567<br />
                    Mon-Fri: 9am - 6pm EST
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: '#F2E8E6' }}>
                  <MapPin className="h-5 w-5" style={{ color: '#C9A7A0' }} />
                </div>
                <div>
                  <h3 className="mb-2 font-heading" style={{ fontSize: '18px', color: '#6F6F6F', fontWeight: 600 }}>
                    Visit Us
                  </h3>
                  <p style={{ fontSize: '15px', color: '#9A9A9A', lineHeight: '1.6' }}>
                    123 Luxury Lane<br />
                    New York, NY 10001
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 rounded-lg p-8" style={{ backgroundColor: '#F2E8E6' }}>
              <h3 className="font-heading mb-4" style={{ fontSize: '24px', color: '#C9A7A0', fontWeight: 400 }}>
                What to Expect
              </h3>
              <ul className="space-y-3" style={{ fontSize: '15px', color: '#6F6F6F', lineHeight: '1.8' }}>
                <li className="flex gap-3">
                  <span style={{ color: '#C9A7A0' }}>•</span>
                  <span>Complimentary 60-minute consultation</span>
                </li>
                <li className="flex gap-3">
                  <span style={{ color: '#C9A7A0' }}>•</span>
                  <span>Personalized wedding vision discussion</span>
                </li>
                <li className="flex gap-3">
                  <span style={{ color: '#C9A7A0' }}>•</span>
                  <span>Venue and location recommendations</span>
                </li>
                <li className="flex gap-3">
                  <span style={{ color: '#C9A7A0' }}>•</span>
                  <span>Custom planning package proposal</span>
                </li>
              </ul>
            </div>
          </motion.div>
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