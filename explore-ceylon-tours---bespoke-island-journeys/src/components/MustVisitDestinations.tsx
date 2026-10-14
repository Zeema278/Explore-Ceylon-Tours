import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Destination, DESTINATIONS } from '../data/toursData';

interface MustVisitDestinationsProps {
  onSelectDestination: (destination: Destination) => void;
  onInquireDestination: (destinationName?: string) => void;
}

export const MustVisitDestinations: React.FC<MustVisitDestinationsProps> = ({
  onSelectDestination,
  onInquireDestination
}) => {
  return (
    <section id="destinations" className="py-20 bg-white border-t border-[#efeeeb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="text-[11px] font-bold tracking-[0.2em] text-[#875300] uppercase mb-1.5">
              TOP ATTRACTIONS
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#0F382A] tracking-tight">
              Must-Visit Wonders of Ceylon
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#414844] max-w-2xl font-normal">
              From mist-cloaked cloud forests to royal stone fortresses and sunlit coastlines.
            </p>
          </div>

          <button
            onClick={() => onInquireDestination()}
            className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-[#0F382A] hover:text-[#D4881A] transition-colors self-start md:self-auto group"
          >
            <span>INQUIRE ABOUT A DESTINATION</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* 8 Cards Grid (4 columns on lg, 2 on sm) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {DESTINATIONS.map((dest) => (
            <div
              key={dest.id}
              onClick={() => onSelectDestination(dest)}
              className="group cursor-pointer relative rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 bg-[#002217] flex flex-col justify-end h-80 sm:h-88 border border-[#0F382A]/20 hover:border-[#D4881A]/40 hover:-translate-y-1"
            >
              {/* Image */}
              <img
                src={dest.image}
                alt={dest.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Scrim Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              {/* Top Badge */}
              <div className="absolute top-3 left-3 z-10">
                <span className="text-[9.5px] uppercase font-bold tracking-[0.14em] px-2.5 py-1 rounded bg-black/60 backdrop-blur-md text-white border border-white/20">
                  {dest.badge}
                </span>
              </div>

              {/* Bottom Card Content */}
              <div className="relative z-10 p-4 sm:p-5 flex flex-col justify-end">
                <h3 className="font-serif text-lg sm:text-xl font-bold text-white mb-1.5 tracking-tight group-hover:text-[#ffddba] transition-colors">
                  {dest.title}
                </h3>
                <p className="text-white/80 text-xs font-light line-clamp-2 leading-relaxed">
                  {dest.description}
                </p>

                <div className="mt-3 pt-2.5 border-t border-white/15 flex items-center justify-between text-[11px] font-semibold text-[#ffddba] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>View Details &amp; Season</span>
                  <span className="text-white">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
