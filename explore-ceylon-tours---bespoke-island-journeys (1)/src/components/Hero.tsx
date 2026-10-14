import React from 'react';
import { ArrowRight, Calendar, ShieldCheck, MapPin } from 'lucide-react';

interface HeroProps {
  onExploreTours: () => void;
  onPlanCustomTrip: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreTours, onPlanCustomTrip }) => {
  // High-resolution authentic photograph of Nine Arch Bridge in Ella, Sri Lanka
  const nineArchBridgeImage =
    'https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=2600&q=90';

  return (
    <section
      id="home"
      className="relative min-h-[92vh] sm:min-h-screen flex items-center pt-28 pb-20 overflow-hidden w-full"
      style={{
        backgroundImage: `url('${nineArchBridgeImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Subtle Dark Emerald-Green Overlay so photograph is clearly visible while text is easy to read */}
      <div className="absolute inset-0 bg-[#002217]/55" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#002217]/85 via-[#002217]/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#002217]/90 via-transparent to-black/30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0F382A]/85 backdrop-blur-md border border-[#3f6656]/70 text-white text-[11px] sm:text-xs font-semibold tracking-wider uppercase mb-5 shadow-xl">
            <ShieldCheck className="w-4 h-4 text-[#79a28f]" />
            <span>Sri Lanka's Premier Bespoke Travel Operator</span>
          </div>

          {/* Eyebrow with Brand & Tagline */}
          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-bold tracking-[0.22em] uppercase mb-3">
            <span className="text-[#fdaa3d]">EXPLORE CEYLON TOURS</span>
            <span className="text-white/40">&bull;</span>
            <span className="text-[#ffddba]">BESPOKE ISLAND JOURNEYS</span>
          </div>

          {/* Main Heading: Large, Bold, Bright White text with "Lanka" in Gold */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6 drop-shadow-2xl">
            Discover the Beauty of Sri <span className="text-[#D4881A] font-bold">Lanka</span>
          </h1>

          {/* Subtitle */}
          <p className="text-white/95 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-2xl mb-10 drop-shadow-md">
            Experience the magic of Sri Lanka with unforgettable journeys, breathtaking landscapes,
            rich culture, wildlife adventures, and personalized tours crafted to your rhythm.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onExploreTours}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#D4881A] hover:bg-[#ba7410] text-white text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-300 shadow-xl shadow-[#D4881A]/35 hover:shadow-[#D4881A]/55 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>EXPLORE OUR TOURS</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onPlanCustomTrip}
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/35 text-white text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 shadow-lg"
            >
              <Calendar className="w-4 h-4 text-white/95" />
              <span>PLAN CUSTOM TRIP</span>
            </button>
          </div>

          {/* Scenic Location Chip */}
          <div className="mt-10 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/15 text-white/80 text-[11px] font-medium">
            <MapPin className="w-3.5 h-3.5 text-[#D4881A]" />
            <span>Nine Arch Bridge &bull; Demodara, Ella Highlands</span>
          </div>
        </div>
      </div>
    </section>
  );
};
