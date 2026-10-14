import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MessageCircle,
  ShieldCheck,
  Star,
  Clock,
  Compass,
  Send,
  Lock,
  Calendar,
  Users
} from 'lucide-react';
import { COMPANY_CONTACT } from '../data/toursData';

interface BookingSectionProps {
  initialService?: string;
  onInquirySubmitted: (formData: any) => void;
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  initialService = 'Grand Ceylon Island Tour (Custom)',
  onInquirySubmitted
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    travelDate: '',
    travelers: 'Couple / Pair (2 Persons)',
    tourService: initialService,
    specialRequests: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync initialService if changed externally
  React.useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, tourService: initialService }));
    }
  }, [initialService]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Please enter your full name';
    if (!formData.email.trim() || !formData.email.includes('@'))
      newErrors.email = 'Please provide a valid email address';
    if (!formData.phone.trim()) newErrors.phone = 'Please provide a contact or WhatsApp number';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onInquirySubmitted(formData);
    }, 600);
  };

  return (
    <section id="contact" className="py-20 bg-white border-t border-[#efeeeb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-[11px] font-bold tracking-[0.2em] text-[#875300] uppercase mb-1.5">
            BEGIN YOUR PASSAGE
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0F382A] tracking-tight mb-3">
            Plan Your Sri Lankan Adventure
          </h2>
          <p className="text-xs sm:text-sm text-[#414844] max-w-xl mx-auto font-normal leading-relaxed">
            Let our certified island specialists craft your bespoke itinerary or answer any travel
            questions with zero obligation.
          </p>
        </div>

        {/* Two-Column Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 rounded-2xl overflow-hidden shadow-2xl border border-[#0F382A]/10">
          {/* Left Column: Dark Emerald `#002217` Info Box */}
          <div className="lg:col-span-5 bg-[#002217] text-white p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden">
            {/* Ambient Background decoration */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#0F382A]/50 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#D4881A]/10 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10">
              {/* Brand Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-[#0F382A] flex items-center justify-center text-[#ffddba] border border-white/10">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-white tracking-wide">
                    Explore Ceylon Tours
                  </h3>
                  <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#fdaa3d]">
                    DISCOVER THE BEAUTY OF SRI LANKA
                  </div>
                </div>
              </div>

              {/* Lead paragraph */}
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-8">
                Whether you require a seamless private airport pickup in Colombo, an all-inclusive
                14-day grand expedition, or a bespoke tea country honeymoon, our team is directly
                reachable.
              </p>

              {/* Direct Island Hotline Card */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 mb-4">
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="w-10 h-10 rounded-lg bg-[#D4881A] flex items-center justify-center text-white shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-white/70">
                      DIRECT ISLAND HOTLINE
                    </div>
                    <div className="text-[11px] text-white/60 font-medium">
                      24/7 Island Concierge &bull; Tap to call
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  <a
                    href={`tel:${COMPANY_CONTACT.phoneCall}`}
                    className="flex items-center gap-2.5 p-2.5 rounded-lg bg-white/5 hover:bg-white/15 border border-white/10 hover:border-[#D4881A]/60 transition-all group"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#0F382A] border border-[#ffddba]/30 flex items-center justify-center text-[#ffddba] shrink-0">
                      <Phone className="w-3 h-3 text-[#D4881A] group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="font-serif text-base font-bold text-white tracking-wider group-hover:text-[#ffddba]">
                      {COMPANY_CONTACT.phoneDisplay}
                    </span>
                  </a>

                  <a
                    href={`tel:${COMPANY_CONTACT.phone2Call}`}
                    className="flex items-center gap-2.5 p-2.5 rounded-lg bg-white/5 hover:bg-white/15 border border-white/10 hover:border-[#D4881A]/60 transition-all group"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#0F382A] border border-[#ffddba]/30 flex items-center justify-center text-[#ffddba] shrink-0">
                      <Phone className="w-3 h-3 text-[#D4881A] group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="font-serif text-base font-bold text-white tracking-wider group-hover:text-[#ffddba]">
                      {COMPANY_CONTACT.phone2Display}
                    </span>
                  </a>
                </div>
              </div>

              {/* Official Email Card */}
              <a
                href={`mailto:${COMPANY_CONTACT.email}`}
                className="group block p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#D4881A]/50 hover:bg-white/10 transition-all mb-8"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#0F382A] border border-[#ffddba]/30 flex items-center justify-center text-[#ffddba] shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-white/60">
                      OFFICIAL CORRESPONDENCE
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-white/95 truncate">
                      {COMPANY_CONTACT.email}
                    </div>
                  </div>
                </div>
              </a>

              {/* Big WhatsApp Pill Button */}
              <a
                href={COMPANY_CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-full bg-[#1da851] hover:bg-[#189345] text-white text-xs font-bold tracking-wider uppercase transition-all duration-300 shadow-lg hover:shadow-[#1da851]/30 hover:scale-[1.01]"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>CHAT WITH US ON WHATSAPP</span>
              </a>
            </div>

            {/* Bottom Badges Row */}
            <div className="relative z-10 pt-8 mt-6 border-t border-white/10 flex flex-wrap items-center justify-between text-[10px] font-bold tracking-wider text-white/70 uppercase">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#25D366]" />
                LICENSED OPERATOR
              </span>
              <span className="flex items-center gap-1">
                <Star className="w-3.5 h-3.5 text-[#ffddba] fill-[#ffddba]" />
                5-STAR CERTIFIED
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#ffddba]" />
                24/7 DESK
              </span>
            </div>
          </div>

          {/* Right Column: White Interactive Form */}
          <div className="lg:col-span-7 bg-[#FAF8F5] p-8 sm:p-10 flex flex-col justify-center">
            <div className="mb-6">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F382A] tracking-tight">
                Request a Tailor-Made Itinerary
              </h3>
              <p className="text-xs sm:text-sm text-[#414844] mt-1 font-normal">
                Fill in your preferences and our travel architects will reply within 3 hours with a
                personalized quote.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-[10.5px] font-bold uppercase tracking-wider text-[#1b1c1a] mb-1">
                    FULL NAME *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. John Alexander"
                    className={`w-full px-3.5 py-2.5 rounded-lg bg-white border text-xs sm:text-sm text-[#1b1c1a] focus:outline-none transition-colors ${
                      errors.fullName
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-[#e3ddd3] focus:border-[#0F382A]'
                    }`}
                  />
                  {errors.fullName && (
                    <span className="text-[10px] text-red-600 mt-0.5 block">{errors.fullName}</span>
                  )}
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-[10.5px] font-bold uppercase tracking-wider text-[#1b1c1a] mb-1">
                    EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={`w-full px-3.5 py-2.5 rounded-lg bg-white border text-xs sm:text-sm text-[#1b1c1a] focus:outline-none transition-colors ${
                      errors.email
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-[#e3ddd3] focus:border-[#0F382A]'
                    }`}
                  />
                  {errors.email && (
                    <span className="text-[10px] text-red-600 mt-0.5 block">{errors.email}</span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Phone / WhatsApp */}
                <div>
                  <label className="block text-[10.5px] font-bold uppercase tracking-wider text-[#1b1c1a] mb-1">
                    PHONE / WHATSAPP NUMBER *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+44 7700 900077"
                    className={`w-full px-3.5 py-2.5 rounded-lg bg-white border text-xs sm:text-sm text-[#1b1c1a] focus:outline-none transition-colors ${
                      errors.phone
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-[#e3ddd3] focus:border-[#0F382A]'
                    }`}
                  />
                  {errors.phone && (
                    <span className="text-[10px] text-red-600 mt-0.5 block">{errors.phone}</span>
                  )}
                </div>

                {/* Preferred Travel Date */}
                <div>
                  <label className="block text-[10.5px] font-bold uppercase tracking-wider text-[#1b1c1a] mb-1">
                    PREFERRED TRAVEL DATE
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      name="travelDate"
                      value={formData.travelDate}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#e3ddd3] focus:border-[#0F382A] text-xs sm:text-sm text-[#1b1c1a] focus:outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Number of Travelers */}
                <div>
                  <label className="block text-[10.5px] font-bold uppercase tracking-wider text-[#1b1c1a] mb-1">
                    NUMBER OF TRAVELERS
                  </label>
                  <select
                    name="travelers"
                    value={formData.travelers}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#e3ddd3] focus:border-[#0F382A] text-xs sm:text-sm text-[#1b1c1a] focus:outline-none transition-colors"
                  >
                    <option value="Couple / Pair (2 Persons)">Couple / Pair (2 Persons)</option>
                    <option value="Family with Kids (3-5 Persons)">Family with Kids (3-5 Persons)</option>
                    <option value="Solo Traveler">Solo Traveler</option>
                    <option value="Private Group (6+ Persons)">Private Group (6+ Persons)</option>
                    <option value="Luxury VIP Charter">Luxury VIP Charter</option>
                  </select>
                </div>

                {/* Tour Service of Interest */}
                <div>
                  <label className="block text-[10.5px] font-bold uppercase tracking-wider text-[#1b1c1a] mb-1">
                    TOUR SERVICE OF INTEREST
                  </label>
                  <select
                    name="tourService"
                    value={formData.tourService}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#e3ddd3] focus:border-[#0F382A] text-xs sm:text-sm text-[#1b1c1a] focus:outline-none transition-colors"
                  >
                    <option value="Grand Ceylon Island Tour (Custom)">
                      Grand Ceylon Island Tour (Custom)
                    </option>
                    <option value="Airport Transfers">Airport Transfers &amp; Chauffeur</option>
                    <option value="Tea Plantation & Mountain Tours">
                      Tea Plantation &amp; Mountain Tours
                    </option>
                    <option value="Wildlife & Safari Adventures">
                      Wildlife &amp; Safari Adventures
                    </option>
                    <option value="Beach & Coastal Tours">Beach &amp; Coastal Tours</option>
                    <option value="Cultural & Heritage Tours">Cultural &amp; Heritage Tours</option>
                    <option value="Sightseeing Tours">Sightseeing Tours</option>
                  </select>
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label className="block text-[10.5px] font-bold uppercase tracking-wider text-[#1b1c1a] mb-1">
                  SPECIAL REQUESTS &amp; CUSTOM ITINERARY NOTES
                </label>
                <textarea
                  name="specialRequests"
                  rows={3}
                  value={formData.specialRequests}
                  onChange={handleChange}
                  placeholder="Tell us about places you wish to see, hotel style preferences (e.g., boutique luxury or eco-villas), or special celebrations..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#e3ddd3] focus:border-[#0F382A] text-xs sm:text-sm text-[#1b1c1a] focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* Submit CTA & Trust Indicator */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#875300] hover:bg-[#6c4100] text-white text-xs font-bold tracking-wider uppercase transition-all duration-300 shadow-md hover:scale-[1.01]"
                >
                  <span>{isSubmitting ? 'PROCESSING...' : 'SEND MY TOUR INQUIRY'}</span>
                  <Send className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-1.5 text-[11px] text-[#414844] mt-3">
                  <Lock className="w-3.5 h-3.5 text-[#0F382A]" />
                  <span>Zero Obligation &amp; Instant WhatsApp confirmation available</span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
