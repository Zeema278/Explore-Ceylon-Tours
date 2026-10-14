import React from 'react';
import {
  ArrowRight,
  Car,
  Clock,
  ShieldCheck,
  Sparkles,
  Train,
  Coffee,
  Compass,
  Eye,
  Ship,
  Sun,
  Landmark,
  BookOpen,
  UserCheck
} from 'lucide-react';
import { TourService, TOUR_SERVICES } from '../data/toursData';

interface TourServicesProps {
  onSelectService: (service: TourService) => void;
  onBookService: (serviceName: string) => void;
}

export const TourServices: React.FC<TourServicesProps> = ({
  onSelectService,
  onBookService
}) => {
  const renderTagIcon = (iconName: string) => {
    switch (iconName) {
      case 'Clock':
        return <Clock className="w-3.5 h-3.5 text-[#D4881A]" />;
      case 'Car':
        return <Car className="w-3.5 h-3.5 text-[#D4881A]" />;
      case 'UserCheck':
        return <UserCheck className="w-3.5 h-3.5 text-[#D4881A]" />;
      case 'Train':
        return <Train className="w-3.5 h-3.5 text-[#D4881A]" />;
      case 'Coffee':
        return <Coffee className="w-3.5 h-3.5 text-[#D4881A]" />;
      case 'Compass':
        return <Compass className="w-3.5 h-3.5 text-[#D4881A]" />;
      case 'Eye':
        return <Eye className="w-3.5 h-3.5 text-[#D4881A]" />;
      case 'Ship':
        return <Ship className="w-3.5 h-3.5 text-[#D4881A]" />;
      case 'Sun':
        return <Sun className="w-3.5 h-3.5 text-[#D4881A]" />;
      case 'Landmark':
        return <Landmark className="w-3.5 h-3.5 text-[#D4881A]" />;
      case 'BookOpen':
        return <BookOpen className="w-3.5 h-3.5 text-[#D4881A]" />;
      default:
        return <Sparkles className="w-3.5 h-3.5 text-[#D4881A]" />;
    }
  };

  return (
    <section id="tours" className="py-20 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[0.18em] text-[#D4881A] uppercase mb-2">
              <span className="w-2 h-2 rounded-full border border-[#D4881A] flex items-center justify-center">
                <span className="w-1 h-1 bg-[#D4881A] rounded-full" />
              </span>
              <span>CURATED SIGNATURES</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F382A] tracking-tight">
              Our Tour Services
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#414844] max-w-2xl font-normal">
              Handcrafted travel experiences across paradise, guided by registered island specialists.
            </p>
          </div>

          <div className="hidden lg:flex items-center gap-2 text-xs font-bold tracking-widest text-[#875300] uppercase">
            <span className="w-8 h-[2px] bg-[#D4881A]" />
            <span>PRIVATE CHAUFFEUR & LUXURY TRANSPORT</span>
          </div>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {TOUR_SERVICES.map((service) => {
            const isDark = service.isDarkTheme;

            return (
              <div
                key={service.id}
                className={`group rounded-xl overflow-hidden transition-all duration-300 flex flex-col justify-between ${
                  isDark
                    ? 'bg-[#002217] text-white border border-[#0F382A] shadow-lg shadow-[#002217]/20 hover:border-[#D4881A]/50'
                    : 'bg-white text-[#1b1c1a] border border-[#e3ddd3] hover:border-[#0F382A]/30 shadow-sm hover:shadow-xl hover:-translate-y-1'
                }`}
              >
                <div>
                  {/* Card Media or Header */}
                  {isDark ? (
                    <div className="p-7 pb-4 bg-gradient-to-b from-[#0F382A]/60 to-transparent">
                      <div className="flex justify-between items-center mb-6">
                        <span className="text-[10px] uppercase font-bold tracking-[0.15em] px-2.5 py-1 rounded bg-black/40 text-[#c1ecd7] border border-[#3f6656]">
                          {service.badge}
                        </span>
                      </div>
                      <div className="flex flex-col items-center justify-center py-6 text-center border border-white/10 rounded-lg bg-black/20 my-2">
                        <div className="w-12 h-12 rounded-full bg-[#0F382A] flex items-center justify-center text-[#ffddba] mb-3">
                          <Car className="w-6 h-6" />
                        </div>
                        <span className="font-serif text-lg font-medium text-white/90">
                          {service.subtitle}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="relative h-48 sm:h-52 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                      <span className="absolute top-3 left-3 text-[10px] uppercase font-bold tracking-[0.15em] px-2.5 py-1 rounded-sm bg-black/60 text-white backdrop-blur-sm border border-white/20">
                        {service.badge}
                      </span>
                    </div>
                  )}

                  {/* Body Content */}
                  <div className="p-6">
                    <h3
                      className={`font-serif text-xl sm:text-2xl font-bold mb-2.5 tracking-tight ${
                        isDark ? 'text-white' : 'text-[#0F382A]'
                      }`}
                    >
                      {service.title}
                    </h3>
                    <p
                      className={`text-xs sm:text-sm leading-relaxed mb-6 ${
                        isDark ? 'text-white/75' : 'text-[#414844]'
                      }`}
                    >
                      {service.description}
                    </p>

                    {/* Metadata chips */}
                    <div className="flex flex-wrap items-center gap-4 text-xs font-medium pb-2">
                      {service.tags.map((tag, i) => (
                        <div
                          key={i}
                          className={`flex items-center gap-1.5 ${
                            isDark ? 'text-white/80' : 'text-[#1b1c1a]/80'
                          }`}
                        >
                          {renderTagIcon(tag.iconName)}
                          <span>{tag.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Action Footer */}
                <div
                  className={`px-6 py-4 border-t flex items-center justify-between transition-colors ${
                    isDark
                      ? 'border-white/10 bg-black/20 group-hover:bg-[#0F382A]/30'
                      : 'border-[#efeeeb] bg-[#FAF8F5]/60 group-hover:bg-[#FAF8F5]'
                  }`}
                >
                  <button
                    onClick={() => {
                      if (isDark) {
                        onBookService(service.title);
                      } else {
                        onSelectService(service);
                      }
                    }}
                    className={`inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase transition-colors ${
                      isDark
                        ? 'text-[#ffddba] hover:text-white'
                        : 'text-[#0F382A] hover:text-[#D4881A]'
                    }`}
                  >
                    <span>{service.ctaLabel}</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={() => onBookService(service.title)}
                    className="text-[11px] font-semibold text-[#875300] hover:underline"
                  >
                    Instant Quote
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
