import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t bg-white" style={{ borderColor: '#ECECEC' }}>
      <div className="mx-auto" style={{ maxWidth: '1320px', padding: '80px 60px 40px' }}>
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4 flex flex-col">
              <span className="font-heading uppercase" style={{ fontSize: '24px', letterSpacing: '1.5px', fontWeight: 400, color: '#6F6F6F' }}>HEAVENLY</span>
              <span style={{ fontSize: '32px', marginTop: '-4px', fontFamily: 'var(--font-script)', fontWeight: 400, color: '#C9A7A0' }}>Weds</span>
            </div>
            <p className="mb-6 leading-relaxed" style={{ fontSize: '14px', lineHeight: '1.8', color: '#9A9A9A' }}>Creating unforgettable luxury weddings across the world's most breathtaking destinations.</p>
            <div className="flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300" style={{ borderColor: '#ECECEC', color: '#9A9A9A' }} aria-label="Instagram"><Instagram className="h-5 w-5" /></a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300" style={{ borderColor: '#ECECEC', color: '#9A9A9A' }} aria-label="Facebook"><Facebook className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 uppercase tracking-widest" style={{ fontSize: '11px', letterSpacing: '2px', fontWeight: 500, color: '#6F6F6F' }}>Services</h4>
            <ul className="space-y-3" style={{ fontSize: '14px', color: '#9A9A9A' }}>
              <li><a href="/services" className="transition-colors duration-300 hover:text-[#C9A7A0]">Complete Wedding Planning</a></li>
              <li><a href="/services" className="transition-colors duration-300 hover:text-[#C9A7A0]">Destination Weddings</a></li>
              <li><a href="/services" className="transition-colors duration-300 hover:text-[#C9A7A0]">Venue Selection</a></li>
              <li><a href="/services" className="transition-colors duration-300 hover:text-[#C9A7A0]">Design & Decor</a></li>
            
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 uppercase tracking-widest" style={{ fontSize: '11px', letterSpacing: '2px', fontWeight: 500, color: '#6F6F6F' }}>Company</h4>
            <ul className="space-y-3" style={{ fontSize: '14px', color: '#9A9A9A' }}>
              <li><a href="/about" className="transition-colors duration-300 hover:text-[#C9A7A0]">About Us</a></li>
              <li><a href="/portfolio" className="transition-colors duration-300 hover:text-[#C9A7A0]">Portfolio</a></li>
              <li><a href="/contact" className="transition-colors duration-300 hover:text-[#C9A7A0]">Contact</a></li>
              <li><a href="/blog" className="transition-colors duration-300 hover:text-[#C9A7A0]">Blog</a></li>
              
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 uppercase tracking-widest" style={{ fontSize: '11px', letterSpacing: '2px', fontWeight: 500, color: '#6F6F6F' }}>Get in Touch</h4>
            <ul className="space-y-4" style={{ fontSize: '14px', color: '#9A9A9A' }}>
              <li className="flex items-start gap-3"><Mail className="mt-0.5 h-4 w-4 flex-shrink-0" /><a href="mailto:hello@heavenlyweds.com" className="transition-colors duration-300 hover:text-[#C9A7A0]">heavenlywedss@gmail.com</a></li>
              <li className="flex items-start gap-3"><Phone className="mt-0.5 h-4 w-4 flex-shrink-0" /><a href="tel:+911234567890" className="transition-colors duration-300 hover:text-[#C9A7A0]">+91 86577 54937 / +91 95948 88516</a></li>
              <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" /><span>Mumbai, India</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t pt-8 text-center" style={{ borderColor: '#ECECEC', fontSize: '13px', color: '#9A9A9A' }}>
          <p>&copy; {new Date().getFullYear()} Heavenly Weds. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
