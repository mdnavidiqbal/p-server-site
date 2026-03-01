import React from "react";

const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 lg:pt-20">
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
        
        {/* Left Content */}
        <div className="text-center lg:text-left pb-15">
          <h1 className="font-bold text-3xl sm:text-4xl lg:text-[50px]">
            Online Nikah Site
          </h1>

          <p className="mt-4 text-sm sm:text-base leading-relaxed">
            Begin your forever journey with us. Online Nikah Service brings
            couples together. We aim to provide quick and affordable Nikah
            services to couples.
            <br className="hidden sm:block" />
            Our Islamic Nikah service allows you to perform your Nikah ceremony
            from the comfort of your home and ensures an easy and affordable
            solution for your e-Nikah.
            <br className="hidden sm:block" />
            Please contact on WhatsApp before booking the Nikah.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-8">
            <button
              type="button"
              className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-6 py-2.5"
            >
              Contact Us
            </button>

            <button
              type="button"
              className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-6 py-2.5"
            >
              Registration
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2">
          <img
            className="w-full h-auto rounded-xl object-cover"
            src="https://i.ibb.co.com/JFWF9mVx/back-view-islamic-couple-spending-time-together.jpg"
            alt="Nikah Banner"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
