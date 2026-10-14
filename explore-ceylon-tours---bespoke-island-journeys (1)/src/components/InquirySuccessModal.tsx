import React from 'react';
import { CheckCircle2, MessageCircle, X, Calendar, Users, Briefcase, Phone } from 'lucide-react';
import { COMPANY_CONTACT } from '../data/toursData';

interface InquirySuccessModalProps {
  formData: any;
  onClose: () => void;
}

export const InquirySuccessModal: React.FC<InquirySuccessModalProps> = ({
  formData,
  onClose
}) => {
  if (!formData) return null;

  const whatsappMessage = `*New Tour Inquiry from Website*
*Name:* ${formData.fullName}
*Email:* ${formData.email}
*Phone/WhatsApp:* ${formData.phone}
*Travel Date:* ${formData.travelDate || 'Flexible'}
*Travelers:* ${formData.travelers}
*Service Requested:* ${formData.tourService}
*Notes/Special Requests:* ${formData.specialRequests || 'None provided'}`;

  const whatsappUrl = `https://wa.me/94767247699?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative max-w-lg w-full bg-white rounded-2xl shadow-2xl overflow-hidden border border-[#0F382A]/20">
        {/* Top Header */}
        <div className="bg-[#002217] p-6 text-white text-center relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="w-14 h-14 rounded-full bg-[#0F382A] border-2 border-[#ffddba] flex items-center justify-center mx-auto mb-3 text-[#25D366]">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <div className="text-[10px] font-bold tracking-[0.2em] text-[#ffddba] uppercase mb-1">
            AYUBOWAN &bull; INQUIRY RECEIVED
          </div>
          <h3 className="font-serif text-2xl font-bold">
            Your Sri Lankan Journey Begins
          </h3>
          <p className="text-xs text-white/75 mt-1 font-light">
            Our certified island concierge will review your preferences and respond within 3 hours.
          </p>
        </div>

        {/* Summary Card */}
        <div className="p-6 space-y-4">
          <div className="bg-[#FAF8F5] p-4 rounded-xl border border-[#efeeeb] space-y-2.5 text-xs text-[#1b1c1a]">
            <div className="flex justify-between items-center pb-2 border-b border-[#efeeeb]">
              <span className="text-[#875300] font-bold uppercase tracking-wider text-[10px]">
                Traveler Name
              </span>
              <span className="font-semibold">{formData.fullName}</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-[#efeeeb]">
              <span className="text-[#875300] font-bold uppercase tracking-wider text-[10px]">
                Tour Package
              </span>
              <span className="font-semibold text-right">{formData.tourService}</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-[#efeeeb]">
              <span className="text-[#875300] font-bold uppercase tracking-wider text-[10px]">
                Travelers
              </span>
              <span className="font-semibold">{formData.travelers}</span>
            </div>
            {formData.travelDate && (
              <div className="flex justify-between items-center">
                <span className="text-[#875300] font-bold uppercase tracking-wider text-[10px]">
                  Preferred Date
                </span>
                <span className="font-semibold">{formData.travelDate}</span>
              </div>
            )}
          </div>

          <div className="text-xs text-[#414844] leading-relaxed text-center px-2">
            Want instant confirmation or have immediate questions? Send your inquiry straight to our
            senior tour director via WhatsApp:
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-full bg-[#1da851] hover:bg-[#189345] text-white text-xs font-bold tracking-wider uppercase transition-all shadow-md hover:scale-[1.01]"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>CONFIRM VIA WHATSAPP NOW</span>
          </a>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold pt-1">
            <a
              href={`tel:${COMPANY_CONTACT.phoneCall}`}
              className="text-[#0F382A] hover:underline flex items-center gap-1"
              title="Call 0767247699"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4881A]" />
              <span>Call: {COMPANY_CONTACT.phoneDisplay}</span>
            </a>
            <span className="text-[#0F382A]/30">•</span>
            <a
              href={`tel:${COMPANY_CONTACT.phone2Call}`}
              className="text-[#0F382A] hover:underline flex items-center gap-1"
              title="Call 0760256625"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4881A]" />
              <span>Call: {COMPANY_CONTACT.phone2Display}</span>
            </a>
          </div>
        </div>

        <div className="p-4 bg-[#FAF8F5] border-t border-[#efeeeb] text-center">
          <button
            onClick={onClose}
            className="text-xs font-bold uppercase tracking-wider text-[#875300] hover:text-[#0F382A] transition-colors"
          >
            Done &amp; Continue Browsing
          </button>
        </div>
      </div>
    </div>
  );
};
