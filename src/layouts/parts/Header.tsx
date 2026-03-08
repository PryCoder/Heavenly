import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Locations', href: '/locations' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white"
      style={{ borderBottom: '1px solid #ECECEC', height: '117px' }}
    >
      <div
        className="mx-auto flex h-full items-center justify-between"
        style={{ maxWidth: '1400px', padding: '0 60px' }}
      >
        {/* Logo */}
        <Link
          to="/"
          className="font-heading"
          style={{ fontSize: '22px', color: '#C9A7A0', fontWeight: 400, letterSpacing: '2px', textDecoration: 'none' }}
        >
          HEAVENLY WEDS
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="uppercase tracking-wider transition-colors duration-300"
              style={{
                fontSize: '11px',
                letterSpacing: '2px',
                color: location.pathname === link.href ? '#C9A7A0' : '#6F6F6F',
                textDecoration: 'none',
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#6F6F6F' }}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white" style={{ borderTop: '1px solid #ECECEC', padding: '20px 30px' }}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 uppercase tracking-wider"
              style={{
                fontSize: '12px',
                letterSpacing: '2px',
                color: location.pathname === link.href ? '#C9A7A0' : '#6F6F6F',
                textDecoration: 'none',
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
