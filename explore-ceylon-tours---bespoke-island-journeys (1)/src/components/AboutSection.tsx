import React from 'react';
import { Phone, CheckCircle2, Award, Sparkles, MapPin, ShieldCheck, Heart } from 'lucide-react';
import { COMPANY_CONTACT } from '../data/toursData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white border-t border-[#efeeeb] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Image with Badges */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#0F382A]/10 bg-[#FAF8F5]">
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
                alt="Sri Lanka Southern Coastline and Palm Bluffs"
                className="w-full h-[460px] sm:h-[540px] object-cover object-center transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />

              {/* Sustainable & Ethical Top Badge */}
              <div className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#002217]/85 backdrop-blur-md border border-[#79a28f]/40 text-[#c1ecd7] text-[10.5px] font-bold tracking-wider uppercase shadow-md">
                <Sparkles className="w-3.5 h-3.5 text-[#25D366]" />
                <span>SUSTAINABLE & ETHICAL</span>
              </div>

              {/* Floating Bottom Badge: 12+ Years */}
              <div className="absolute bottom-5 left-5 right-5 sm:right-auto sm:max-w-xs p-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-[#e3ddd3] shadow-xl flex items-center gap-3.5 animate-in fade-in duration-500">
                <div className="w-11 h-11 rounded-full bg-[#FAF8F5] border-2 border-[#D4881A] flex items-center justify-center text-[#D4881A] shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-serif text-lg font-bold text-[#0F382A] leading-tight">
                    12+ Years
                  </div>
                  <div className="text-[10.5px] font-bold uppercase tracking-wider text-[#875300]">
                    SHARING THE WONDERS OF SRI LANKA
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial & Pillars */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Eyebrow */}
            <div className="text-[11px] font-bold tracking-[0.2em] text-[#875300] uppercase mb-2">
              ABOUT EXPLORE CEYLON TOURS
            </div>

            {/* Title */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0F382A] tracking-tight leading-[1.18] mb-5">
              Curators of Authentic Island Memories &amp; Unrivaled Local Warmth
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base text-[#414844] leading-relaxed mb-6 font-normal">
              Welcome to <strong className="text-[#0F382A] font-semibold">Explore Ceylon Tours</strong>, your trusted travel partner dedicated to unlocking Sri Lanka's soul. We believe an island so rich in royal history, pristine biodiversity, and genuine smiles deserves more than hurried checklist tourism.
            </p>

            {/* Director Quote Callout Box */}
            <div className="relative p-5 sm:p-6 rounded-xl bg-[#FAF8F5] border-l-4 border-[#D4881A] border-y border-r border-[#efeeeb] mb-8 shadow-sm">
              <span className="font-serif text-4xl leading-none text-[#D4881A] font-bold block mb-1">
                “
              </span>
              <p className="font-serif italic text-sm sm:text-base text-[#1b1c1a] leading-relaxed mb-3">
                We don't merely transfer guests from city to coast; we open doors to private
                monastery tea gardens, insider safari tracks, and time-honored village hearths.
              </p>
              <div className="text-[10px] font-bold tracking-[0.16em] uppercase text-[#875300]">
                — ISLAND TOUR OPERATIONS DIRECTOR
              </div>
            </div>

            {/* 3 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8 pt-2">
              {/* Pillar 1 */}
              <div>
                <div className="w-8 h-8 rounded-lg bg-[#FAF8F5] border border-[#0F382A]/15 flex items-center justify-center text-[#0F382A] mb-2.5">
                  <MapPin className="w-4 h-4 text-[#0F382A]" />
                </div>
                <h4 className="font-serif text-base font-bold text-[#0F382A] mb-1">
                  Local Mastery
                </h4>
                <p className="text-xs text-[#414844] leading-relaxed">
                  Native chauffeurs with deep geographical and cultural insight.
                </p>
              </div>

              {/* Pillar 2 */}
              <div>
                <div className="w-8 h-8 rounded-lg bg-[#FAF8F5] border border-[#0F382A]/15 flex items-center justify-center text-[#0F382A] mb-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#0F382A]" />
                </div>
                <h4 className="font-serif text-base font-bold text-[#0F382A] mb-1">
                  Safety &amp; Comfort
                </h4>
                <p className="text-xs text-[#414844] leading-relaxed">
                  Modern insured fleet with 24/7 dedicated control desk monitoring.
                </p>
              </div>

              {/* Pillar 3 */}
              <div>
                <div className="w-8 h-8 rounded-lg bg-[#FAF8F5] border border-[#0F382A]/15 flex items-center justify-center text-[#0F382A] mb-2.5">
                  <Heart className="w-4 h-4 text-[#D4881A]" />
                </div>
                <h4 className="font-serif text-base font-bold text-[#0F382A] mb-1">
                  True Hospitality
                </h4>
                <p className="text-xs text-[#414844] leading-relaxed">
                  Sri Lankan 'Ayubowan' warmth that turns journeys into family friendships.
                </p>
              </div>
            </div>

            {/* Bottom Row: Call Buttons + Registration Badge */}
            <div className="flex flex-wrap items-center gap-4 pt-2 border-t border-[#efeeeb]">
              <div className="flex flex-wrap items-center gap-2.5">
                <a
                  href={`tel:${COMPANY_CONTACT.phoneCall}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#002217] hover:bg-[#0F382A] text-white text-xs font-bold tracking-wider uppercase transition-all duration-300 shadow-md hover:scale-[1.02]"
                  title="Call 0767247699"
                >
                  <Phone className="w-3.5 h-3.5 text-[#D4881A]" />
                  <span>CALL {COMPANY_CONTACT.phoneDisplay}</span>
                </a>
                <a
                  href={`tel:${COMPANY_CONTACT.phone2Call}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-[#FAF8F5] text-[#0F382A] border border-[#0F382A]/30 text-xs font-bold tracking-wider uppercase transition-all duration-300 shadow-sm hover:scale-[1.02]"
                  title="Call 0760256625"
                >
                  <Phone className="w-3.5 h-3.5 text-[#D4881A]" />
                  <span>CALL {COMPANY_CONTACT.phone2Display}</span>
                </a>
              </div>

              <div className="inline-flex items-center gap-2 text-xs font-medium text-[#414844]">
                <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
                <span>Government Tourism Registered</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
