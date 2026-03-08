import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#FAFAFA', borderTop: '1px solid #ECECEC', padding: '60px 0 40px' }}>
      <div className="mx-auto" style={{ maxWidth: '1400px', padding: '0 60px' }}>
        <div className="grid gap-12 md:grid-cols-3 mb-12">
          {/* Brand */}
          <div>
            <p className="font-heading mb-4" style={{ fontSize: '20px', color: '#C9A7A0', fontWeight: 400, letterSpacing: '2px' }}>
              HEAVENLY WEDS
            </p>
            <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#9A9A9A' }}>
              Creating extraordinary wedding experiences in the world's most breathtaking destinations.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="mb-4 uppercase tracking-wider" style={{ fontSize: '11px', letterSpacing: '2px', color: '#6F6F6F' }}>
              Navigation
            </p>
            <div className="space-y-3">
              {[
                { label: 'Services', href: '/services' },
                { label: 'Portfolio', href: '/portfolio' },
                { label: 'Locations', href: '/locations' },
                { label: 'Contact', href: '/contact' },
              ].map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="block transition-colors duration-300"
                  style={{ fontSize: '14px', color: '#9A9A9A', textDecoration: 'none' }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-4 uppercase tracking-wider" style={{ fontSize: '11px', letterSpacing: '2px', color: '#6F6F6F' }}>
              Contact
            </p>
            <div className="space-y-2" style={{ fontSize: '14px', color: '#9A9A9A', lineHeight: '1.8' }}>
              <p>hello@heavenlyweds.com</p>
              <p>+1 (555) 123-4567</p>
              <p>123 Luxury Lane, New York, NY 10001</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ borderTop: '1px solid #ECECEC', paddingTop: '24px' }}>
          <p className="text-center uppercase tracking-wider" style={{ fontSize: '11px', letterSpacing: '2px', color: '#9A9A9A' }}>
            © {new Date().getFullYear()} Heavenly Weds. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
