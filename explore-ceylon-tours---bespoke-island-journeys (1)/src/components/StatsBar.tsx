import React from 'react';

export const StatsBar: React.FC = () => {
  const stats = [
    {
      value: '500+',
      label: 'JOURNEYS',
      subtext: 'Curated Private Expeditions'
    },
    {
      value: '99.4%',
      label: 'REVIEWS',
      subtext: 'Traveler Satisfaction Score'
    },
    {
      value: '100%',
      label: 'TAILOR-MADE',
      subtext: 'Bespoke Island Itineraries'
    },
    {
      value: '24/7',
      label: 'SUPPORT',
      subtext: 'Island Concierge Assistance'
    }
  ];

  return (
    <section className="bg-[#002217] border-y border-[#0F382A]/50 py-7 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center sm:items-start text-center sm:text-left ${
                idx > 0 ? 'pt-4 md:pt-0 md:pl-8' : ''
              }`}
            >
              <div className="flex items-baseline gap-1.5 mb-0.5">
                <span className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
                  {stat.value}
                </span>
                <span className="text-[10px] sm:text-xs font-bold tracking-widest text-[#fdaa3d] uppercase">
                  {stat.label}
                </span>
              </div>
              <p className="text-white/70 text-xs sm:text-sm font-light tracking-wide">
                {stat.subtext}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
