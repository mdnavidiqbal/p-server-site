import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import TextType from "./TextType";

const images = [
  "https://images.unsplash.com/photo-1529636798458-92182e662485?q=80&w=1600",
  "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600",
  "https://images.unsplash.com/photo-1591604466107-ec97de577aff?q=80&w=1600",
  "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1600",
  "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=1600",
];

const Banner = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative w-full h-[880px] overflow-hidden">
      {/* Slider */}
      <div
        className="flex h-full transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {images.map((img, index) => (
          <div
            key={index}
            className="w-full h-full flex-shrink-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${img})`,
            }}
          ></div>
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center lg:text-left">
            {/* <h1 className="font-bold text-white text-3xl sm:text-4xl lg:text-[50px]">
              Join NO.1 Muslim Nikha <br /> Registartion Site 
            </h1> */}
            <TextType className="font-bold text-white text-3xl sm:text-4xl lg:text-[50px]"
              text={[
                "Join NO.1 Muslim Nikha",
                "Registartion Site",
                "All The Best",
                "Happy Journey!",
              ]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor
              cursorCharacter="_"
              texts={[
                "Welcome to React Bits! Good to see you!",
                "Build some amazing experiences!",
              ]}
              deletingSpeed={50}
              variableSpeedEnabled={false}
              variableSpeedMin={60}
              variableSpeedMax={120}
              cursorBlinkDuration={0.5}
            />
            {/* <p className="mt-4 text-white text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Begin your forever journey with us. Online Nikah Service brings
              couples together. We aim to provide quick and affordable Nikah
              services.
              <br className="hidden sm:block" />
              Our Islamic Nikah service allows you to perform your Nikah
              ceremony from the comfort of your home.
            </p> */}
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-8">
              <Link
                to="/createbiodata"
                className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-6 py-2.5"
              >
                Create Bio-data
              </Link>
              <Link
                to="/kabinnama"
                className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-6 py-2.5"
              >
                Online Registration
              </Link>
            </div>
          </div>
        </div> 
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              current === index ? "bg-white scale-125" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Banner;
