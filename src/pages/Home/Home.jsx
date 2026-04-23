import React from "react";
import Banner from "../../components/Banner";
import Hero from "../../components/Hero";
import HelpSection from "../../components/HelpSection";
import ChoicenUs from "../../components/ChoiceUs";



const Home = () => {
  return (
    <div className="bg-amber-50">
      <Banner></Banner>
      <HelpSection></HelpSection>
      <ChoicenUs></ChoicenUs>
      <Hero></Hero>
    </div>
  );
};

export default Home;
