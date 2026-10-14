/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsBar } from './components/StatsBar';
import { TourServices } from './components/TourServices';
import { AboutSection } from './components/AboutSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { MustVisitDestinations } from './components/MustVisitDestinations';
import { GallerySection } from './components/GallerySection';
import { BookingSection } from './components/BookingSection';
import { Footer } from './components/Footer';
import { ItineraryModal } from './components/ItineraryModal';
import { DestinationModal } from './components/DestinationModal';
import { LightboxModal } from './components/LightboxModal';
import { InquirySuccessModal } from './components/InquirySuccessModal';
import { FloatingAction } from './components/FloatingAction';
import { TourService, Destination, GalleryPhoto } from './data/toursData';

export default function App() {
  const [selectedService, setSelectedService] = useState<TourService | null>(null);
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [lightboxPhoto, setLightboxPhoto] = useState<GalleryPhoto | null>(null);
  const [activeTourInquiry, setActiveTourInquiry] = useState<string>('Grand Ceylon Island Tour (Custom)');
  const [submittedInquiry, setSubmittedInquiry] = useState<any | null>(null);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookService = (serviceName: string) => {
    setActiveTourInquiry(serviceName);
    scrollToSection('contact');
  };

  const handleInquireDestination = (destinationName?: string) => {
    if (destinationName) {
      setActiveTourInquiry(`Custom Voyage featuring ${destinationName}`);
    }
    scrollToSection('contact');
  };

  const handlePlanCustomTrip = (preference?: string) => {
    if (preference) {
      setActiveTourInquiry(preference);
    }
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1b1c1a] flex flex-col font-sans">
      {/* Top Luxury Navigation */}
      <Navbar onOpenBooking={() => scrollToSection('contact')} />

      {/* Hero Section */}
      <main className="flex-1">
        <Hero
          onExploreTours={() => scrollToSection('tours')}
          onPlanCustomTrip={() => scrollToSection('contact')}
        />

        {/* 4 Key Statistics Bar */}
        <StatsBar />

        {/* Curated Tour Services (6 Cards Grid) */}
        <TourServices
          onSelectService={(service) => setSelectedService(service)}
          onBookService={handleBookService}
        />

        {/* About Explore Ceylon Tours */}
        <AboutSection />

        {/* Why Travel With Explore Ceylon Tours */}
        <WhyChooseUs onPlanTrip={handlePlanCustomTrip} />

        {/* Must-Visit Wonders of Ceylon (8 Destinations) */}
        <MustVisitDestinations
          onSelectDestination={(dest) => setSelectedDestination(dest)}
          onInquireDestination={handleInquireDestination}
        />

        {/* Visual Chronicles (Gallery with Filter Tabs & Lightbox) */}
        <GallerySection onOpenLightbox={(photo) => setLightboxPhoto(photo)} />

        {/* Plan Your Sri Lankan Adventure (Booking Engine) */}
        <BookingSection
          initialService={activeTourInquiry}
          onInquirySubmitted={(data) => setSubmittedInquiry(data)}
        />
      </main>

      {/* Comprehensive Footer */}
      <Footer />

      {/* Floating WhatsApp Action Pill */}
      <FloatingAction />

      {/* Modals */}
      {selectedService && (
        <ItineraryModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
          onBookNow={(title) => {
            setSelectedService(null);
            handleBookService(title);
          }}
        />
      )}

      {selectedDestination && (
        <DestinationModal
          destination={selectedDestination}
          onClose={() => setSelectedDestination(null)}
          onInquire={(title) => {
            setSelectedDestination(null);
            handleInquireDestination(title);
          }}
        />
      )}

      {lightboxPhoto && (
        <LightboxModal
          photo={lightboxPhoto}
          onClose={() => setLightboxPhoto(null)}
        />
      )}

      {submittedInquiry && (
        <InquirySuccessModal
          formData={submittedInquiry}
          onClose={() => setSubmittedInquiry(null)}
        />
      )}
    </div>
  );
}
