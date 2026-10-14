import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { COMPANY_CONTACT } from '../data/toursData';

export const FloatingAction: React.FC = () => {
  return (
    <aside aria-label="Quick contact" className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2.5">
      {/* Floating WhatsApp Action */}
      <a
        href={COMPANY_CONTACT.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Explore Ceylon on WhatsApp"
        className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
      >
        <MessageCircle className="w-5 h-5 fill-white" />
        <span className="hidden sm:inline text-xs font-bold tracking-wider uppercase">
          Quick WhatsApp
        </span>
      </a>
    </aside>
  );
};
