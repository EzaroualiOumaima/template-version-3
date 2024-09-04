import React from "react";
import Navbar from "./_components/Navbar";
import Hero from "./_components/Hero";
import Features from "./_components/Features";
import MobileApp from "./_components/MobileApp";
import Tools from "./_components/Tools";
import SecondSection from "./_components/SecondSection";
import Reviews from "./_components/Reviews";
import SliderComparison from "./_components/SliderComparison";
import Footer from "./_components/Footer";
import Pricing from "./_components/Pricing";
import CuverEdge from "./_components/CuverEdge";
const page = () => {
  return (
    <div className="dark:bg-[#121519]">
      <Navbar />
      <Hero />
      <Features />
      <SliderComparison />
      <Reviews />
      <MobileApp />
      <Pricing />
      <Tools />
      <SecondSection />
      <CuverEdge />
      <Footer />
    </div>
  );
};

export default page;
