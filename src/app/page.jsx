'use client';

import Footer from '../components/Footer';
import HeroSection from '../components/home/HeroSection';
import ClientsSection from '../components/home/ClientsSection';
import SuccessStories from '../components/home/SuccessStories';
import JourneySection from '../components/home/JourneySection';
import ProductDevelopmentProcess from '../components/home/ProductDevelopmentProcess';
import TechnologiesSection from '../components/home/TechnologiesSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import IndustriesSection from '../components/home/IndustriesSection';
import AwardsSection from '../components/home/AwardsSection';
import BlogsSection from '../components/home/BlogsSection';
import CTASection from '../components/home/CTASection';

export default function Home() {
  return (
    <>
      <div className="bg-white">
        <HeroSection />
        <ClientsSection />
        <SuccessStories />
        <JourneySection />
        <ProductDevelopmentProcess />
        <TechnologiesSection />
        <TestimonialsSection />
        <IndustriesSection />
        <AwardsSection />
        <BlogsSection />
        <CTASection />
      </div>
      <Footer />
    </>
  );
}
