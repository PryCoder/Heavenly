import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

// Menu structure with dropdowns
interface MenuItem {
  name: string;
  href: string;
  children?: MenuItem[];
}

const menuStructure: MenuItem[] = [
  { name: 'ABOUT US', href: '/about' },
  { name: 'PORTFOLIO', href: '/portfolio' },
  {
    name: 'SERVICES',
    href: '/services',
    children: [
      { name: 'Full Wedding Planning', href: '/services/full-planning' },
      { name: 'Partial Planning', href: '/services/partial-planning' },
      { name: 'Day-Of Coordination', href: '/services/day-of' },
    ],
  },
  {
    name: 'LOCATIONS',
    href: '/locations',
    children: [
      { name: 'Italy', href: '/locations/italy' },
      { name: 'France', href: '/locations/france' },
      { name: 'India', href: '/locations/india' },
    ],
  },
  { name: 'CEREMONIES', href: '/ceremonies' },
  {
    name: 'VENUES',
    href: '/venues',
    children: [
      { name: 'Lake Como', href: '/venues/lake-como' },
      { name: 'Tuscany', href: '/venues/tuscany' },
      { name: 'French Riviera', href: '/venues/french-riviera' },
    ],
  },
  { name: 'GUIDES', href: '/guides' },
  { name: 'BLOG', href: '/blog' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const headerRef = useRef<HTMLElement>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Handle scroll for shadow effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setMobileOpenDropdown(null);
    setOpenDropdown(null);
  }, [location.pathname]);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
        setOpenDropdown(null);
        setMobileOpenDropdown(null);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (isMenuOpen && headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setIsMenuOpen(false);
        setMobileOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
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
    }, 200); // Small delay for better UX
  };

  // Toggle mobile dropdown
  const toggleMobileDropdown = (e: React.MouseEvent, name: string) => {
    e.preventDefault();
    e.stopPropagation();
    setMobileOpenDropdown(mobileOpenDropdown === name ? null : name);
  };

  return (
    <header 
      ref={headerRef}
      className="fixed top-0 z-50 w-full bg-white transition-shadow duration-300" 
      style={{ 
        boxShadow: scrolled 
          ? '0 4px 12px rgba(0,0,0,0.08)' 
          : '0 1px 3px rgba(0,0,0,0.04)',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
        backgroundColor: scrolled ? 'rgba(255,255,255,0.98)' : '#FFFFFF'
      }}
    >
      {/* Main Header - 117px height */}
      <div className="relative" style={{ height: '117px' }}>
        <div className="mx-auto flex h-full max-w-[1902px] items-center justify-between" style={{ paddingLeft: '82px', paddingRight: '82px' }}>
          
          {/* Logo - Two Font Treatment */}
          <Link 
            to="/" 
            className="flex flex-col transition-opacity duration-300 hover:opacity-70" 
            style={{ marginTop: '27px', alignSelf: 'flex-start' }}
            aria-label="HeavenlyWeds Home"
          >
            {/* HEAVENLY - Serif uppercase */}
            <span 
              className="font-heading uppercase"
              style={{
                fontSize: '32px',
                lineHeight: '32px',
                letterSpacing: '1.5px',
                fontWeight: 400,
                color: '#6F6F6F',
              }}
            >
              HEAVENLY
            </span>
            {/* WEDS - Script font */}
            <span
              className="text-[46px] leading-[46px] -mt-[6px] font-normal text-[#C9A7A0]"
            >
              Weds
            </span>
          </Link>

          {/* Right Side Container */}
          <div className="hidden lg:flex flex-col items-end gap-3">
            {/* Top Right CTA Section */}
            <div className="flex items-center" style={{ gap: '20px', marginTop: '16px' }}>
              <Link
                to="/contact"
                className="uppercase tracking-wider transition-colors duration-300 hover:text-[#C9A7A0]"
                style={{
                  fontSize: '11px',
                  letterSpacing: '1.5px',
                  fontWeight: 400,
                  color: '#9A9A9A',
                }}
              >
                CONTACT US
              </Link>
              <Link
                to="/lets-plan"
                className="uppercase transition-all duration-300 hover:bg-[#E8DCD8] hover:text-[#6F6F6F]"
                style={{
                  height: '30px',
                  borderRadius: '16px',
                  padding: '8px 18px',
                  fontSize: '11px',
                  letterSpacing: '1.5px',
                  fontWeight: 400,
                  backgroundColor: '#F2E8E6',
                  color: '#8A8A8A',
                  display: 'inline-flex',
                  alignItems: 'center',
                }}
              >
                LET'S PLAN
              </Link>
            </div>

            {/* Main Navigation */}
            <nav className="flex" style={{ gap: '30px', marginTop: '4px' }} role="navigation" aria-label="Main navigation">
              {menuStructure.map((item) => (
                <div 
                  key={item.name} 
                  className="relative"
                  onMouseEnter={() => item.children && handleMouseEnter(item.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    to={item.href}
                    className="uppercase tracking-wider transition-colors duration-300 relative group"
                    style={{
                      fontSize: '12px',
                      lineHeight: '14px',
                      letterSpacing: '2.5px',
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
                    {item.children && <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${openDropdown === item.name ? 'rotate-180' : ''}`} />}
                    
                    {/* Active/Hover underline */}
                    <span 
                      className={`absolute bottom-[-4px] left-0 right-0 h-[1px] transition-all duration-300 origin-left ${
                        isActive(item.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                      style={{ backgroundColor: '#C9A7A0' }}
                    />
                  </Link>

                  {/* Dropdown Menu */}
                  {item.children && openDropdown === item.name && (
                    <div 
                      className="absolute top-full left-0 mt-4 bg-white rounded-sm shadow-lg z-50"
                      style={{
                        minWidth: '220px',
                        border: '1px solid #ECECEC',
                        padding: '12px 0',
                      }}
                      role="menu"
                      onMouseEnter={() => handleMouseEnter(item.name)}
                      onMouseLeave={handleMouseLeave}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.href}
                          className="block px-6 py-3 transition-all duration-200 hover:bg-[#F2E8E6] hover:text-[#C9A7A0]"
                          style={{
                            fontSize: '13px',
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
            className="lg:hidden transition-colors duration-300"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
              setMobileOpenDropdown(null); // Close any open mobile dropdowns
            }}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            style={{ color: '#6F6F6F' }}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Slide-in from right */}
      <div 
        className={`fixed top-[117px] right-0 bottom-0 w-full max-w-md bg-white shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden z-40 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{
          borderLeft: '1px solid #ECECEC',
          overflowY: 'auto',
        }}
      >
        <div className="px-8 py-8 space-y-2">
          {menuStructure.map((item) => (
            <div key={item.name} className="border-b border-gray-100 last:border-0">
              {/* Menu Item */}
              <div className="flex items-center justify-between">
                <Link
                  to={item.href}
                  className="block py-3 uppercase tracking-widest transition-colors flex-1"
                  style={{
                    fontSize: '13px',
                    letterSpacing: '2px',
                    color: isActive(item.href) ? '#C9A7A0' : '#6F6F6F',
                    fontWeight: isActive(item.href) ? 500 : 400,
                    textDecoration: 'none',
                  }}
                  onClick={(e) => {
                    if (!item.children) {
                      setIsMenuOpen(false);
                    } else {
                      e.preventDefault();
                      toggleMobileDropdown(e, item.name);
                    }
                  }}
                >
                  {item.name}
                </Link>
                {item.children && (
                  <button
                    onClick={(e) => toggleMobileDropdown(e, item.name)}
                    className="p-2 transition-transform duration-200 hover:text-[#C9A7A0]"
                    style={{
                      color: '#8A8A8A',
                    }}
                    aria-label={`Toggle ${item.name} submenu`}
                    aria-expanded={mobileOpenDropdown === item.name}
                  >
                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${mobileOpenDropdown === item.name ? 'rotate-180' : ''}`} />
                  </button>
                )}
              </div>

              {/* Mobile Dropdown (Accordion) */}
              {item.children && (
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    mobileOpenDropdown === item.name ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                  style={{
                    borderLeft: mobileOpenDropdown === item.name ? '2px solid #F2E8E6' : '2px solid transparent',
                    marginLeft: '8px',
                  }}
                >
                  <div className="pl-4 space-y-1 py-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        to={child.href}
                        className="block py-2 transition-colors hover:text-[#C9A7A0]"
                        style={{
                          fontSize: '13px',
                          color: isActive(child.href) ? '#C9A7A0' : '#9A9A9A',
                          fontWeight: isActive(child.href) ? 500 : 400,
                          textDecoration: 'none',
                          paddingLeft: '16px',
                        }}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Mobile CTA Buttons */}
          <div className="border-t pt-6 mt-6 space-y-4" style={{ borderColor: '#ECECEC' }}>
            <Link
              to="/contact"
              className="block text-center py-3 uppercase tracking-wider transition-colors hover:text-[#C9A7A0]"
              style={{
                fontSize: '12px',
                letterSpacing: '2px',
                color: '#9A9A9A',
                textDecoration: 'none',
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              CONTACT US
            </Link>
            <Link
              to="/lets-plan"
              className="block text-center uppercase transition-all duration-300 hover:bg-[#E8DCD8] hover:text-[#6F6F6F]"
              style={{
                borderRadius: '16px',
                padding: '12px 24px',
                fontSize: '12px',
                letterSpacing: '2px',
                backgroundColor: '#F2E8E6',
                color: '#6F6F6F',
                textDecoration: 'none',
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              LET'S PLAN
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 lg:hidden z-30"
          style={{ top: '117px' }}
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