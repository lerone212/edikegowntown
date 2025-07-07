
import React from 'react';
import Hero from '@/components/Hero';
import Countdown from '@/components/Countdown';
import EventDetails from '@/components/EventDetails';
import Expectations from '@/components/Expectations';
import FAQs from '@/components/FAQs';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <EventDetails />
      <Countdown />
      <Expectations />
      <FAQs />
      <Footer />
    </div>
  );
};

export default Index;
