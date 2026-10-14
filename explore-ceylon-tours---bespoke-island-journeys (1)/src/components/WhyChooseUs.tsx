import React from 'react';
import { UserCheck2, Car, Compass, Sliders, ArrowUpRight } from 'lucide-react';

interface WhyChooseUsProps {
  onPlanTrip: (preference?: string) => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onPlanTrip }) => {
  const cards = [
    {
      icon: <UserCheck2 className="w-5 h-5 text-[#0F382A]" />,
      title: 'Friendly & Personalized Service',
      text: 'Dedicated local tour managers who tailor every detail to your pace, dietary preferences, and travel style from touchdown to departure.',
      actionText: 'TAILORED JUST FOR YOU',
      preference: 'Personalized Custom Itinerary'
    },
    {
      icon: <Car className="w-5 h-5 text-[#0F382A]" />,
      title: 'Comfortable & Reliable Transfers',
      text: 'Modern, fully air-conditioned fleet of premium sedans, vans, and SUVs with experienced, English-speaking professional drivers.',
      actionText: 'PUNCTUAL & IMMACULATE',
      preference: 'Airport & Intercity Chauffeur'
    },
    {
      icon: <Compass className="w-5 h-5 text-[#0F382A]" />,
      title: 'Memorable Sri Lankan Experiences',
      text: 'Authentic cultural immersions, secret jungle viewpoints, home-cooked feasts, and wildlife encounters beyond typical tourist trails.',
      actionText: 'UNFILTERED AUTHENTICITY',
      preference: 'Authentic Cultural Experience'
    },
    {
      icon: <Sliders className="w-5 h-5 text-[#0F382A]" />,
      title: 'Flexible Tour Packages',
      text: 'Fully customizable multi-day and day tours tailored to your schedule, preferences, and budget with transparent pricing and zero hidden fees.',
      actionText: '100% FREE CUSTOMIZATION',
      preference: 'Flexible Multi-Day Tour'
    }
  ];

  return (
    <section className="py-20 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-[11px] font-bold tracking-[0.2em] text-[#875300] uppercase mb-2">
            THE CEYLON DISTINCTION
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#0F382A] tracking-tight mb-3">
            Why Travel With Explore Ceylon Tours
          </h2>
          <p className="text-xs sm:text-sm text-[#414844] font-normal leading-relaxed">
            Experience stress-free island voyages marked by reliability, exclusivity, and heartfelt
            Sri Lankan hospitality.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-xl p-6 border border-[#e3ddd3] hover:border-[#0F382A]/30 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                {/* Icon box */}
                <div className="w-11 h-11 rounded-lg bg-[#FAF8F5] border border-[#0F382A]/10 flex items-center justify-center mb-5 group-hover:bg-[#0F382A] group-hover:text-white transition-colors duration-300">
                  <div className="group-hover:text-white transition-colors">
                    {card.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-serif text-lg font-bold text-[#0F382A] mb-3 leading-snug">
                  {card.title}
                </h3>

                {/* Body */}
                <p className="text-xs text-[#414844] leading-relaxed mb-6 font-normal">
                  {card.text}
                </p>
              </div>

              {/* Action Link */}
              <button
                onClick={() => onPlanTrip(card.preference)}
                className="inline-flex items-center gap-1 text-[11px] font-bold tracking-wider text-[#875300] hover:text-[#0F382A] transition-colors uppercase pt-3 border-t border-[#efeeeb] w-full text-left"
              >
                <span>{card.actionText}</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
