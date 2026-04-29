import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

// Menu structure with dropdowns
interface MenuItem {
  name: string;
  href: string;
  children?: MenuItem[];
  disabled?: boolean;
}

const menuStructure: MenuItem[] = [
  { name: 'HOME PAGE', href: '/' },
  { name: 'ABOUT US', href: '/about' },
  {
    name: 'SERVICES',
    href: '/services',
    children: [
      { name: 'Full Wedding Planning', href: '/services/full-planning' },
      { name: 'Photography & Videography', href: '/services/photography' },
      { name: 'Destination', href: '/services/destination' },
      {name: 'Additional Services', href: '/services/additionalservices'}
    ],
  },
  { name: 'PORTFOLIO', href: '/portfolio' },
  { name: 'WEDDING FILMS', href: '/wedding-films' },
  { name: 'LOCATIONS', href: '/locations' },
  { name: 'CEREMONIES', href: '/ceremonies' },
  {
    name: 'VENUES',
    href: '/venues',
    children: [
      { name: 'Lake Como', href: '/venues/lake-como' },
      { name: 'Tuscany', href: '/venues/tuscany' },
      { name: 'French Riviera', href: '/venues/french-riviera' },
      { name: 'The Leela Palace, Rajasthan', href: '/venues/the-leela-palace-rajasthan' },
    ],
  },
  { name: 'BLOG', href: '/blog' },
  { name: 'CONTACT US', href: '/contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const headerRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // Handle scroll for shadow effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle click outside for mobile menu
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (isMenuOpen && 
          mobileMenuRef.current && 
          !mobileMenuRef.current.contains(e.target as Node) &&
          menuButtonRef.current &&
          !menuButtonRef.current.contains(e.target as Node)) {
        setIsMenuOpen(false);
        setMobileOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [isMenuOpen]);

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  // Check if current path matches menu item
  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  // Handle mouse enter for desktop dropdown
  const handleMouseEnter = (itemName: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setOpenDropdown(itemName);
  };

  // Handle mouse leave for desktop dropdown with delay
  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 200);
  };

  // Toggle mobile dropdown
  const toggleMobileDropdown = (e: React.MouseEvent, name: string) => {
    e.preventDefault();
    e.stopPropagation();
    setMobileOpenDropdown(prev => prev === name ? null : name);
  };

  return (
    <header 
      ref={headerRef}
      className="fixed top-0 z-50 w-full bg-white transition-shadow duration-300" 
      style={{ 
        boxShadow: scrolled 
          ? '0 4px 20px rgba(0,0,0,0.08)' 
          : '0 1px 3px rgba(0,0,0,0.04)',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
        backgroundColor: scrolled ? 'rgba(255,255,255,0.98)' : '#FFFFFF'
      }}
    >
      {/* Main Header - Reduced height */}
      <div className="relative" style={{ 
        height: 'clamp(70px, 12vw, 90px)'  // Reduced from 90px-117px to 70px-90px
      }}>
        <div className="mx-auto flex h-full max-w-[1902px] items-center justify-between px-4 sm:px-6 lg:px-[60px]">  {/* Reduced padding */}
          
          {/* Logo - Adjusted sizing */}
          <Link
            to="/"
            className="flex items-center h-full transition-opacity duration-300 hover:opacity-70"
            aria-label="HeavenlyWeds Home"
            onClick={() => {
              setIsMenuOpen(false);
              setMobileOpenDropdown(null);
            }}
          >
            <img
              src="/heavenly logo- png-brown.png"
              alt="HeavenlyWeds Logo"
              className="h-full w-auto max-w-[140px] sm:max-w-[180px] md:max-w-[220px] lg:max-w-[260px] object-contain transition-transform duration-300"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </Link>

          {/* Desktop Navigation - Reduced gap */}
          <div className="hidden lg:flex items-center gap-6">  {/* Added gap between nav and button */}
            <nav className="flex gap-[20px]" role="navigation" aria-label="Main navigation">  {/* Reduced from 30px to 20px */}
              {menuStructure.map((item) => (
                <div 
                  key={item.name} 
                  className="relative"
                  onMouseEnter={() => item.children && handleMouseEnter(item.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  {item.disabled ? (
                    <span
                      className="uppercase tracking-wider relative whitespace-nowrap"
                      style={{
                        fontSize: '11px',  // Reduced from 12px
                        lineHeight: '13px',
                        letterSpacing: '2px',  // Reduced from 2.5px
                        fontWeight: 400,
                        color: '#B5B5B5',
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        cursor: 'not-allowed',
                      }}
                      aria-disabled="true"
                      title="Coming soon"
                    >
                      {item.name}
                    </span>
                  ) : item.name === 'CONTACT US' ? (
                    // Contact Us Button - Filled background, reduced size
                    <Link
                      to={item.href}
                      className="uppercase tracking-wider transition-all duration-300 relative whitespace-nowrap px-4 py-1.5 rounded-md"
                      style={{
                        fontSize: '11px',
                        lineHeight: '13px',
                        letterSpacing: '2px',
                        fontWeight: 500,
                        color: '#FFFFFF',
                        backgroundColor: '#C9A7A0',
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        border: 'none',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#B89690';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#C9A7A0';
                      }}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <Link
                      to={item.href}
                      className="uppercase tracking-wider transition-colors duration-300 relative group whitespace-nowrap"
                      style={{
                        fontSize: '11px',  // Reduced from 12px
                        lineHeight: '13px',
                        letterSpacing: '2px',  // Reduced from 2.5px
                        fontWeight: 400,
                        color: isActive(item.href) ? '#C9A7A0' : '#8A8A8A',
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                      }}
                      aria-haspopup={item.children ? 'true' : 'false'}
                      aria-expanded={openDropdown === item.name}
                    >
                      {item.name}
                      {item.children && (
                        <ChevronDown
                          className={`h-3 w-3 transition-transform duration-200 ${
                            openDropdown === item.name ? 'rotate-180' : ''
                          }`}
                        />
                      )}

                      {/* Active/Hover underline */}
                      <span
                        className={`absolute bottom-[-4px] left-0 right-0 h-[1px] transition-all duration-300 origin-left ${
                          isActive(item.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                        }`}
                        style={{ backgroundColor: '#C9A7A0' }}
                      />
                    </Link>
                  )}

                  {/* Desktop Dropdown */}
                  {item.children && openDropdown === item.name && (
                    <div 
                      className="absolute top-full left-0 mt-3 bg-white rounded-sm shadow-lg z-50"  // Reduced mt-4 to mt-3
                      style={{
                        minWidth: '200px',  // Reduced from 220px
                        border: '1px solid #ECECEC',
                        padding: '8px 0',  // Reduced padding
                      }}
                      role="menu"
                      onMouseEnter={() => handleMouseEnter(item.name)}
                      onMouseLeave={handleMouseLeave}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.href}
                          className="block px-5 py-2 transition-all duration-200 hover:bg-[#F2E8E6] hover:text-[#C9A7A0]"  // Reduced padding
                          style={{
                            fontSize: '12px',  // Reduced from 13px
                            color: isActive(child.href) ? '#C9A7A0' : '#6F6F6F',
                            fontWeight: isActive(child.href) ? 500 : 400,
                            textDecoration: 'none',
                          }}
                          role="menuitem"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* Mobile Menu Button */}
          <button
            ref={menuButtonRef}
            className="lg:hidden transition-colors duration-300 p-2 -mr-2 relative z-[60]"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
              setMobileOpenDropdown(null);
            }}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            style={{ color: '#6F6F6F' }}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}  {/* Reduced icon size */}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Slide-in from right */}
      <div 
        ref={mobileMenuRef}
        className={`fixed top-0 right-0 bottom-0 w-full sm:w-[380px] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden z-[55] ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{
          borderLeft: '1px solid #ECECEC',
          overflowY: 'auto',
          WebkitOverflowScrolling: 'touch',
          top: 'clamp(70px, 12vw, 90px)',  // Matches reduced header height
        }}
      >
        <div className="px-5 py-6 space-y-2">  {/* Reduced padding */}
          {menuStructure.map((item) => (
            <div key={item.name} className="border-b border-gray-100 last:border-0">
              {/* Menu Item */}
              <div className="flex items-center justify-between">
                {item.disabled ? (
                  <div
                    className="flex-1 text-left py-2 uppercase tracking-widest"  // Reduced padding
                    style={{
                      fontSize: '13px',  // Reduced from 14px
                      letterSpacing: '1.8px',
                      color: '#B5B5B5',
                      fontWeight: 400,
                      cursor: 'not-allowed',
                    }}
                    aria-disabled="true"
                    title="Coming soon"
                  >
                    {item.name}
                  </div>
                ) : item.children ? (
                  <button
                    onClick={(e) => toggleMobileDropdown(e, item.name)}
                    className="flex-1 text-left py-2 uppercase tracking-widest transition-colors"  // Reduced padding
                    style={{
                      fontSize: '13px',
                      letterSpacing: '1.8px',
                      color: isActive(item.href) ? '#C9A7A0' : '#6F6F6F',
                      fontWeight: isActive(item.href) ? 500 : 400,
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                    aria-expanded={mobileOpenDropdown === item.name}
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    className="block py-2 uppercase tracking-widest transition-colors flex-1"  // Reduced padding
                    style={{
                      fontSize: '13px',
                      letterSpacing: '1.8px',
                      color: isActive(item.href) ? '#C9A7A0' : '#6F6F6F',
                      fontWeight: isActive(item.href) ? 500 : 400,
                      textDecoration: 'none',
                    }}
                    onClick={() => {
                      setIsMenuOpen(false);
                      setMobileOpenDropdown(null);
                    }}
                  >
                    {item.name}
                  </Link>
                )}
                {item.children && (
                  <button
                    onClick={(e) => toggleMobileDropdown(e, item.name)}
                    className="p-1 transition-transform duration-200 hover:text-[#C9A7A0]"  // Reduced padding
                    style={{
                      color: '#8A8A8A',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                    aria-label={`Toggle ${item.name} submenu`}
                    aria-expanded={mobileOpenDropdown === item.name}
                  >
                    <ChevronDown 
                      className={`h-3.5 w-3.5 transition-transform duration-200 ${
                        mobileOpenDropdown === item.name ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                )}
              </div>

              {/* Mobile Dropdown (Accordion) */}
              {item.children && (
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    mobileOpenDropdown === item.name ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="pl-3 space-y-1 py-2 border-l-2 border-[#F2E8E6] ml-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        to={child.href}
                        className="block py-1.5 transition-colors hover:text-[#C9A7A0]"  // Reduced padding
                        style={{
                          fontSize: '12px',
                          color: isActive(child.href) ? '#C9A7A0' : '#9A9A9A',
                          fontWeight: isActive(child.href) ? 500 : 400,
                          textDecoration: 'none',
                          paddingLeft: '14px',
                        }}
                        onClick={() => {
                          setIsMenuOpen(false);
                          setMobileOpenDropdown(null);
                        }}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/40 lg:hidden transition-opacity duration-300 z-[50]"
          style={{ 
            top: 'clamp(70px, 12vw, 90px)',  // Matches reduced header height
            backdropFilter: 'blur(2px)'
          }}
          onClick={() => {
            setIsMenuOpen(false);
            setMobileOpenDropdown(null);
          }}
          aria-hidden="true"
        />
      )}
    </header>
  );
}