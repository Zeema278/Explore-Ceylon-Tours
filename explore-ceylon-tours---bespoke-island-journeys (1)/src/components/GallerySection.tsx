import React, { useState } from 'react';
import { Maximize2, MapPin } from 'lucide-react';
import { GalleryPhoto, GALLERY_PHOTOS } from '../data/toursData';

interface GallerySectionProps {
  onOpenLightbox: (photo: GalleryPhoto) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenLightbox }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'beaches' | 'mountains' | 'wildlife' | 'heritage'>('all');

  const filterTabs = [
    { key: 'all', label: 'ALL PHOTOS' },
    { key: 'beaches', label: 'BEACHES' },
    { key: 'mountains', label: 'MOUNTAINS & TEA' },
    { key: 'wildlife', label: 'WILDLIFE' },
    { key: 'heritage', label: 'HERITAGE' },
  ] as const;

  const filteredPhotos = activeFilter === 'all'
    ? GALLERY_PHOTOS
    : GALLERY_PHOTOS.filter((p) => p.category === activeFilter);

  return (
    <section id="gallery" className="py-20 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header and Filter Pills */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6">
          <div>
            <div className="text-[11px] font-bold tracking-[0.2em] text-[#875300] uppercase mb-1.5">
              VISUAL CHRONICLES
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#0F382A] tracking-tight">
              Island Highlights Through the Lens
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#414844] max-w-2xl font-normal">
              A glimpse of the emerald landscapes and royal heritage awaiting your footsteps.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveFilter(tab.key)}
                  className={`px-3.5 py-1.5 rounded-full text-[10.5px] font-bold tracking-wider uppercase transition-all duration-300 ${
                    isActive
                      ? 'bg-[#002217] text-white shadow-sm'
                      : 'bg-white hover:bg-[#efeeeb] text-[#414844] border border-[#e3ddd3]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => onOpenLightbox(photo)}
              className="group cursor-pointer relative h-64 sm:h-72 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 bg-[#0F382A]/20 border border-[#e3ddd3]"
            >
              <img
                src={photo.image}
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Expand Icon */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>

              {/* Category chip */}
              <div className="absolute top-3 left-3">
                <span className="text-[9.5px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#002217]/80 text-[#c1ecd7] border border-[#3f6656]">
                  {photo.categoryLabel}
                </span>
              </div>

              {/* Caption & Location Bottom */}
              <div className="absolute bottom-0 inset-x-0 p-4 text-white">
                <div className="flex items-center gap-1 text-[11px] font-medium text-[#ffddba] mb-1">
                  <MapPin className="w-3 h-3 text-[#D4881A]" />
                  <span>{photo.location}</span>
                </div>
                <h3 className="font-serif text-base font-bold text-white leading-snug">
                  {photo.title}
                </h3>
                <p className="text-white/75 text-xs font-light mt-1 line-clamp-1">
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
