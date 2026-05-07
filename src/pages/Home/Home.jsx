import React from "react";
import Banner from "../../components/Banner";
import Hero from "../../components/Hero";
import HelpSection from "../../components/HelpSection";
import ChoicenUs from "../../components/ChoiceUs";
import HeroSection from "../../components/HeroSection";
import Gallery from "../../components/Gallery";






const Home = () => {
  return (
    <div className="bg-gradient-to-br from-purple-200 to-pink-100">
      <Banner></Banner>
      <HeroSection></HeroSection>
      <HelpSection></HelpSection>
      <ChoicenUs></ChoicenUs>
      <Hero></Hero>
      <Gallery></Gallery>
      
    </div>
  );
};

export default Home;
