import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import LeadFormSection from '../components/LeadFormSection';
import CTASection from '../components/CTASection';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <LeadFormSection />
      <CTASection />
    </>
  );
};

export default HomePage;
