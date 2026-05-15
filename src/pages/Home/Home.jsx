import React, { useEffect } from "react";
import Banner from "../../components/Banner";
import Hero from "../../components/Hero";
import HelpSection from "../../components/HelpSection";
import ChoicenUs from "../../components/ChoiceUs";
import Gallery from "../../components/Gallery";
import Contact from "../Contact/Contact";
import { useLocation } from "react-router";
import About from "../../components/About";
import Showcase from "../../components/Showcase";
import FAQ from "../../components/FAQ";


const Home = () => {
  const location = useLocation();

  // 👉 scroll after navigation from navbar
  useEffect(() => {
  if (location.state?.scrollTo) {
    const section = document.getElementById(location.state.scrollTo);

    if (section) {
      setTimeout(() => {
        const yOffset = -90; // navbar height adjust
        const y =
          section.getBoundingClientRect().top +
          window.pageYOffset +
          yOffset;

        window.scrollTo({
          top: y,
          behavior: "smooth",
        });
      }, 150);
    }
  }
}, [location]);

  return (
    <div className="bg-gradient-to-br from-purple-200 to-pink-100">
      {/* HERO / HOME */}
      <section id="home">
        <Banner />
      </section>

      <HelpSection />
      <ChoicenUs />

      {/* SERVICES */}
      <section id="services">
        <Hero />
      </section>

      {/* GALLERY */}
      <section id="gallery">
        <Gallery />
      </section>
      
      <section>
        <Showcase/>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <Contact />
      </section>
      <section id="about">
        <About/>
      </section>
      <section id="faq">
        <FAQ/>
      </section>
    </div>
  );
};

export default Home;
