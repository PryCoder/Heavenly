import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const venues = [
  {
    id: 'lake-como',
    name: 'Lake Como',
    href: '/venues/lake-como',
    description: 'A romantic lakeside setting with timeless charm.',
  },
  {
    id: 'the-leela-palace-rajasthan',
    name: 'The Leela Palace, Rajasthan',
    href: '/venues/the-leela-palace-rajasthan',
    description: 'A regal lakeside palace setting in Udaipur.',
  },
  {
    id: 'tuscany',
    name: 'Tuscany',
    href: '/venues/tuscany',
    description: 'Countryside elegance with breathtaking views.',
  },
  {
    id: 'french-riviera',
    name: 'French Riviera',
    href: '/venues/french-riviera',
    description: 'Coastal luxury for unforgettable celebrations.',
  },
];

export default function VenuesPage() {
  return (
    <div className="min-h-screen bg-white" style={{ paddingTop: 'clamp(80px, 15vw, 117px)' }}>
      <title>Venues | HEAVENLY WEDS</title>
      <meta name="description" content="Wedding venues curated by Heavenly Weds." />

      <section style={{ padding: 'clamp(60px, 10vw, 110px) 0' }}>
        <div className="mx-auto" style={{ maxWidth: '1200px', padding: '0 clamp(16px, 5vw, 60px)' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10 text-center"
          >
            <p
              className="mb-4 uppercase tracking-widest"
              style={{
                fontSize: 'clamp(10px, 2vw, 11px)',
                letterSpacing: 'clamp(2px, 1vw, 3px)',
                color: '#9A9A9A',
              }}
            >
              Venues
            </p>
            <h1
              className="font-heading"
              style={{
                fontSize: 'clamp(34px, 8vw, 56px)',
                lineHeight: '1.15',
                color: '#C9A7A0',
                fontWeight: 400,
              }}
            >
              Explore Venues
            </h1>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {venues.map((venue, index) => (
              <motion.div
                key={venue.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-lg bg-white"
                style={{ border: '1px solid #ECECEC', padding: '28px' }}
              >
                <h2 className="font-heading mb-3" style={{ fontSize: '22px', color: '#6F6F6F', fontWeight: 500 }}>
                  {venue.name}
                </h2>
                <p className="mb-6" style={{ fontSize: '14px', lineHeight: '1.8', color: '#9A9A9A' }}>
                  {venue.description}
                </p>
                <Link
                  to={venue.href}
                  className="inline-flex items-center uppercase tracking-widest transition-all duration-300"
                  style={{
                    padding: '12px 18px',
                    fontSize: '11px',
                    letterSpacing: '2px',
                    backgroundColor: '#F2E8E6',
                    color: '#6F6F6F',
                    borderRadius: '4px',
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
                  View
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
