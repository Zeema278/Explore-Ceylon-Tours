import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, User, Compass } from 'lucide-react';
import { COMPANY_CONTACT } from '../data/toursData';

interface NavbarProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [headerTheme, setHeaderTheme] = useState<'sandstone' | 'glass' | 'dark'>('sandstone');

  const cycleHeaderTheme = () => {
    const next = headerTheme === 'sandstone' ? 'glass' : headerTheme === 'glass' ? 'dark' : 'sandstone';
    setHeaderTheme(next);
  };

  const isLight = headerTheme === 'sandstone' && !scrolled;
  const isGlass = headerTheme === 'glass' && !scrolled;
  const isDark = headerTheme === 'dark';

  const getHeaderClasses = () => {
    if (scrolled) {
      if (headerTheme === 'dark') {
        return 'bg-[#002217]/95 backdrop-blur-md shadow-md border-b border-[#0F382A] py-3 text-white';
      }
      return 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-sm border-b border-[#0F382A]/10 py-3 text-[#1b1c1a]';
    }

    if (isGlass) {
      return 'bg-black/25 backdrop-blur-md border-b border-white/15 py-4 text-white';
    }
    if (isDark) {
      return 'bg-[#002217]/90 backdrop-blur-sm border-b border-[#0F382A] py-4 text-white';
    }
    return 'bg-[#FAF8F5]/90 backdrop-blur-sm border-b border-[#0F382A]/5 py-4 text-[#1b1c1a]';
  };

  const navLinks = [
    { label: 'HOME', href: '#home' },
    { label: 'ABOUT US', href: '#about' },
    { label: 'OUR TOURS', href: '#tours' },
    { label: 'DESTINATIONS', href: '#destinations' },
    { label: 'GALLERY', href: '#gallery' },
    { label: 'CONTACT', href: '#contact' },
  ];

  const isWhiteText = isGlass || isDark;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${getHeaderClasses()}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-full bg-[#0F382A] border border-[#ffddba]/20 flex items-center justify-center text-[#D4881A] shadow-sm transition-transform duration-300 group-hover:scale-105">
              <Compass className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span
                className={`font-serif text-lg tracking-wider font-bold leading-tight ${
                  isWhiteText ? 'text-white' : 'text-[#0F382A]'
                }`}
              >
                EXPLORE CEYLON
              </span>
              <span className="text-[9px] uppercase tracking-[0.2em] text-[#D4881A] font-semibold">
                Bespoke Island Journeys
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-[12px] font-semibold tracking-[0.08em] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#D4881A] hover:after:w-full after:transition-all after:duration-300 ${
                  isWhiteText
                    ? 'text-white/85 hover:text-white'
                    : 'text-[#1b1c1a]/80 hover:text-[#0F382A]'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Items */}
          <div className="hidden md:flex items-center gap-3.5">
            {/* Header Theme Cycle Toggle */}
            <button
              onClick={cycleHeaderTheme}
              className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border transition-colors ${
                isWhiteText
                  ? 'border-white/20 bg-white/10 hover:bg-white/20 text-white'
                  : 'border-[#0F382A]/20 bg-[#FAF8F5] hover:bg-[#efeeeb] text-[#0F382A]'
              }`}
              title="Change header background style (Sandstone / Glass / Dark)"
            >
              Header: {headerTheme}
            </button>

            {/* Phone Numbers */}
            <div className="flex items-center gap-2">
              <a
                href={`tel:${COMPANY_CONTACT.phoneCall}`}
                className={`flex items-center gap-1.5 text-xs font-semibold transition-colors ${
                  isWhiteText ? 'text-white/90 hover:text-[#ffddba]' : 'text-[#1b1c1a] hover:text-[#D4881A]'
                }`}
                title="Call 0767247699"
              >
                <Phone className="w-3.5 h-3.5 text-[#D4881A]" />
                <span>{COMPANY_CONTACT.phoneDisplay}</span>
              </a>
              <span className={isWhiteText ? 'text-white/30 text-xs' : 'text-black/20 text-xs'}>/</span>
              <a
                href={`tel:${COMPANY_CONTACT.phone2Call}`}
                className={`flex items-center gap-1.5 text-xs font-semibold transition-colors ${
                  isWhiteText ? 'text-white/90 hover:text-[#ffddba]' : 'text-[#1b1c1a] hover:text-[#D4881A]'
                }`}
                title="Call 0760256625"
              >
                <Phone className="w-3.5 h-3.5 text-[#D4881A]" />
                <span>{COMPANY_CONTACT.phone2Display}</span>
              </a>
            </div>

            {/* WhatsApp CTA (strictly to 0767247699) */}
            <a
              href={COMPANY_CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#002217] hover:bg-[#0F382A] text-white text-[11px] font-bold uppercase tracking-wider px-4 py-2 rounded-full transition-all duration-300 shadow-sm hover:shadow-md hover:scale-[1.02] border border-[#ffddba]/20"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366] fill-[#25D366]" />
              <span>CHAT ON WHATSAPP</span>
            </a>

            {/* User Icon / Direct Quick Booking */}
            <button
              onClick={() => onOpenBooking()}
              title="Plan your trip"
              className={`w-8 h-8 rounded-full border flex items-center justify-center transition-colors ${
                isWhiteText
                  ? 'border-white/30 text-white hover:bg-white hover:text-[#0F382A]'
                  : 'border-[#0F382A]/20 text-[#0F382A] hover:bg-[#0F382A] hover:text-white'
              }`}
            >
              <User className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={cycleHeaderTheme}
              className={`p-1.5 rounded text-[10px] uppercase font-bold border ${
                isWhiteText ? 'border-white/30 text-white' : 'border-[#0F382A]/20 text-[#0F382A]'
              }`}
            >
              {headerTheme}
            </button>
            <a
              href={COMPANY_CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#002217] text-[#25D366]"
            >
              <MessageCircle className="w-4 h-4 fill-[#25D366]" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${
                isWhiteText ? 'text-white hover:bg-white/10' : 'text-[#0F382A] hover:bg-[#efeeeb]'
              }`}
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF8F5] border-b border-[#0F382A]/10 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-bold tracking-wider text-[#0F382A] py-2 border-b border-[#0F382A]/5"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-2">
              <div className="text-[10px] font-bold uppercase tracking-wider text-[#875300]">
                Direct Island Hotline
              </div>
              <div className="flex flex-col gap-1.5">
                <a
                  href={`tel:${COMPANY_CONTACT.phoneCall}`}
                  className="flex items-center gap-2 text-xs font-semibold text-[#1b1c1a]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#D4881A]" />
                  <span>{COMPANY_CONTACT.phoneDisplay}</span>
                </a>
                <a
                  href={`tel:${COMPANY_CONTACT.phone2Call}`}
                  className="flex items-center gap-2 text-xs font-semibold text-[#1b1c1a]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#D4881A]" />
                  <span>{COMPANY_CONTACT.phone2Display}</span>
                </a>
              </div>
              <a
                href={COMPANY_CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#002217] text-white text-xs font-bold py-2.5 rounded-full mt-1"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
                <span>CHAT ON WHATSAPP</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
