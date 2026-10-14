import React from 'react';
import {
  Compass,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Globe,
  Instagram,
  Facebook,
  Youtube
} from 'lucide-react';
import { COMPANY_CONTACT } from '../data/toursData';

interface FooterProps {
  onSelectTourCategory?: (cat: string) => void;
  onSelectDestination?: (dest: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectTourCategory,
  onSelectDestination
}) => {
  return (
    <footer className="bg-[#FAF8F5] text-[#1b1c1a] border-t border-[#efeeeb] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-14">
          {/* Brand Column (5 cols) */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-full bg-[#0F382A] flex items-center justify-center text-[#ffddba]">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <span className="font-serif text-lg font-bold text-[#0F382A] tracking-wider block leading-tight">
                  Explore Ceylon Tours
                </span>
                <span className="text-[9px] uppercase tracking-[0.2em] text-[#875300] font-semibold">
                  Bespoke Island Journeys
                </span>
              </div>
            </div>

            <div className="font-serif italic text-base text-[#D4881A] mb-3">
              Discover the Beauty of Sri Lanka
            </div>

            <p className="text-xs text-[#414844] leading-relaxed max-w-sm mb-6 font-normal">
              Curated passage through the resplendent emerald hill country, royal kingdoms, wild
              sanctuaries, and sun-kissed Indian ocean shores. Handcrafted authentic itineraries
              steeped in centuries of island hospitality.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="#home"
                aria-label="Website"
                className="w-8 h-8 rounded-full border border-[#0F382A]/20 flex items-center justify-center text-[#0F382A] hover:bg-[#0F382A] hover:text-white transition-colors"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href="#gallery"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full border border-[#0F382A]/20 flex items-center justify-center text-[#0F382A] hover:bg-[#0F382A] hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#about"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full border border-[#0F382A]/20 flex items-center justify-center text-[#0F382A] hover:bg-[#0F382A] hover:text-white transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#gallery"
                aria-label="YouTube"
                className="w-8 h-8 rounded-full border border-[#0F382A]/20 flex items-center justify-center text-[#0F382A] hover:bg-[#0F382A] hover:text-white transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: OUR TOURS (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#0F382A] mb-4">
              OUR TOURS
            </h4>
            <ul className="space-y-2.5 text-xs text-[#414844]">
              <li>
                <a href="#tours" className="hover:text-[#D4881A] transition-colors">
                  Cultural Heritage
                </a>
              </li>
              <li>
                <a href="#tours" className="hover:text-[#D4881A] transition-colors">
                  Wild Safari Expeditions
                </a>
              </li>
              <li>
                <a href="#tours" className="hover:text-[#D4881A] transition-colors">
                  Hill Country &amp; Tea Trails
                </a>
              </li>
              <li>
                <a href="#tours" className="hover:text-[#D4881A] transition-colors">
                  Coastal &amp; Surfing Escapes
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#D4881A] transition-colors">
                  Bespoke Honeymoons
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: DESTINATIONS (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#0F382A] mb-4">
              DESTINATIONS
            </h4>
            <ul className="space-y-2.5 text-xs text-[#414844]">
              <li>
                <a href="#destinations" className="hover:text-[#D4881A] transition-colors">
                  Sigiriya &amp; Dambulla
                </a>
              </li>
              <li>
                <a href="#destinations" className="hover:text-[#D4881A] transition-colors">
                  Ella &amp; Nuwara Eliya
                </a>
              </li>
              <li>
                <a href="#destinations" className="hover:text-[#D4881A] transition-colors">
                  Galle Fort &amp; South Coast
                </a>
              </li>
              <li>
                <a href="#destinations" className="hover:text-[#D4881A] transition-colors">
                  Yala &amp; Udawalawe
                </a>
              </li>
              <li>
                <a href="#destinations" className="hover:text-[#D4881A] transition-colors">
                  Kandy Sacred City
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: DIRECT ISLAND CONCIERGE (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#0F382A] mb-4">
              DIRECT ISLAND CONCIERGE
            </h4>
            <p className="text-xs text-[#414844] leading-relaxed mb-4">
              Connect directly with our registered travel architects to shape your bespoke itinerary.
            </p>

            <div className="space-y-2.5 text-xs text-[#1b1c1a] mb-5">
              <div className="text-[10px] font-bold uppercase tracking-wider text-[#875300]">
                Direct Island Hotline
              </div>
              <a
                href={`tel:${COMPANY_CONTACT.phoneCall}`}
                className="flex items-center gap-2 hover:text-[#D4881A] transition-colors"
                title="Call 0767247699"
              >
                <Phone className="w-3.5 h-3.5 text-[#D4881A]" />
                <span className="font-semibold text-sm">{COMPANY_CONTACT.phoneDisplay}</span>
              </a>
              <a
                href={`tel:${COMPANY_CONTACT.phone2Call}`}
                className="flex items-center gap-2 hover:text-[#D4881A] transition-colors"
                title="Call 0760256625"
              >
                <Phone className="w-3.5 h-3.5 text-[#D4881A]" />
                <span className="font-semibold text-sm">{COMPANY_CONTACT.phone2Display}</span>
              </a>
              <a
                href={`mailto:${COMPANY_CONTACT.email}`}
                className="flex items-center gap-2 hover:text-[#D4881A] transition-colors pt-1"
              >
                <Mail className="w-3.5 h-3.5 text-[#D4881A]" />
                <span>{COMPANY_CONTACT.email}</span>
              </a>
              <div className="flex items-center gap-2 text-[#414844]">
                <MapPin className="w-3.5 h-3.5 text-[#D4881A]" />
                <span>{COMPANY_CONTACT.address}</span>
              </div>
            </div>

            <a
              href={COMPANY_CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#002217] hover:bg-[#0F382A] text-white text-xs font-bold tracking-wider uppercase transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
              <span>WHATSAPP INQUIRY</span>
            </a>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 border-t border-[#efeeeb] flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#414844] gap-4">
          <p>
            &copy; 2025 Explore Ceylon Tours. All rights reserved. Registered Sri Lanka Tourism Development Authority.
          </p>
          <div className="flex items-center gap-6">
            <a href="#about" className="hover:underline">Terms &amp; Conditions</a>
            <a href="#about" className="hover:underline">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
