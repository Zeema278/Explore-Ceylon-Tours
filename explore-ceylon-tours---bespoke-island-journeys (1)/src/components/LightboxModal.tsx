import React from 'react';
import { X, MapPin } from 'lucide-react';
import { GalleryPhoto } from '../data/toursData';

interface LightboxModalProps {
  photo: GalleryPhoto | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ photo, onClose }) => {
  if (!photo) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-4xl w-full bg-[#002217] rounded-2xl overflow-hidden shadow-2xl border border-white/20"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/90 transition-colors"
          aria-label="Close Lightbox"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative max-h-[75vh] flex items-center justify-center bg-black">
          <img
            src={photo.image}
            alt={photo.title}
            className="w-full max-h-[75vh] object-contain"
          />
        </div>

        <div className="p-5 sm:p-6 bg-[#002217] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#fdaa3d] mb-1">
              <MapPin className="w-3.5 h-3.5 text-[#D4881A]" />
              <span>{photo.location}</span>
              <span className="text-white/40">•</span>
              <span className="uppercase text-[10px] tracking-wider text-white/70">
                {photo.categoryLabel}
              </span>
            </div>
            <h3 className="font-serif text-lg sm:text-xl font-bold text-white">
              {photo.title}
            </h3>
            <p className="text-xs text-white/75 mt-1 font-light max-w-xl">
              {photo.caption}
            </p>
          </div>

          <a
            href={`https://wa.me/94767247699?text=${encodeURIComponent(
              `Hello Explore Ceylon Tours, I saw the photo "${photo.title}" in ${photo.location} and would love to visit this place!`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#D4881A] hover:bg-[#ba7410] text-white text-xs font-bold uppercase tracking-wider transition-colors shrink-0"
          >
            Visit Here
          </a>
        </div>
      </div>
    </div>
  );
};
