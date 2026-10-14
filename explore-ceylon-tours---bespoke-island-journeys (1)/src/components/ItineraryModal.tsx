import React from 'react';
import { X, Check, Clock, Users, Calendar, ArrowRight, ShieldCheck, MessageCircle } from 'lucide-react';
import { TourService, COMPANY_CONTACT } from '../data/toursData';

interface ItineraryModalProps {
  service: TourService | null;
  onClose: () => void;
  onBookNow: (tourTitle: string) => void;
}

export const ItineraryModal: React.FC<ItineraryModalProps> = ({
  service,
  onClose,
  onBookNow
}) => {
  if (!service) return null;

  const whatsappInquiryUrl = `https://wa.me/94767247699?text=${encodeURIComponent(
    `Hello Explore Ceylon Tours, I am interested in booking or customizing the "${service.title}" package. Please provide rates and options.`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-[#0F382A]/20 my-8">
        {/* Header with image or emerald bar */}
        <div className="relative h-48 sm:h-56 bg-[#002217] overflow-hidden">
          {service.image ? (
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[#002217] via-[#0F382A] to-[#164e3b] flex items-center justify-center p-6 text-center" />
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 backdrop-blur-md text-white flex items-center justify-center hover:bg-black/80 transition-colors z-10"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Badge & Title */}
          <div className="absolute bottom-4 left-5 right-5 text-white">
            <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded bg-[#D4881A] text-white inline-block mb-2 shadow-sm">
              {service.badge}
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white drop-shadow-md">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 max-h-[60vh] overflow-y-auto space-y-6">
          <p className="text-sm text-[#414844] leading-relaxed">
            {service.description}
          </p>

          {/* Meta specs */}
          <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-[#FAF8F5] border border-[#efeeeb] text-xs">
            {service.duration && (
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#875300] block mb-0.5">
                  DURATION
                </span>
                <span className="font-semibold text-[#0F382A] flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#D4881A]" />
                  {service.duration}
                </span>
              </div>
            )}
            {service.idealFor && (
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#875300] block mb-0.5">
                  IDEAL FOR
                </span>
                <span className="font-semibold text-[#0F382A] flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-[#D4881A]" />
                  {service.idealFor}
                </span>
              </div>
            )}
          </div>

          {/* Highlights */}
          {service.highlights && service.highlights.length > 0 && (
            <div>
              <h4 className="font-serif text-base font-bold text-[#0F382A] mb-3">
                Experience Highlights
              </h4>
              <ul className="space-y-2">
                {service.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-[#414844]">
                    <div className="w-4 h-4 rounded-full bg-[#FAF8F5] border border-[#D4881A] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 text-[#D4881A]" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Inclusions */}
          {service.inclusions && service.inclusions.length > 0 && (
            <div>
              <h4 className="font-serif text-base font-bold text-[#0F382A] mb-3">
                What's Included
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#414844]">
                {service.inclusions.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Actions */}
        <div className="p-5 sm:p-6 bg-[#FAF8F5] border-t border-[#efeeeb] flex flex-col sm:flex-row items-center justify-between gap-3">
          <a
            href={whatsappInquiryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#002217] hover:bg-[#0F382A] text-white text-xs font-bold uppercase tracking-wider transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
            <span>Chat on WhatsApp</span>
          </a>

          <button
            onClick={() => {
              onClose();
              onBookNow(service.title);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#D4881A] hover:bg-[#ba7410] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md hover:scale-[1.02]"
          >
            <span>Book This Tour Package</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
