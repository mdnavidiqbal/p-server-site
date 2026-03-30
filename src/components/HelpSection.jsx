import React, { Component } from "react";
import { Link } from "react-router";

class HelpSection extends Component {
  render() {
    return (
      <div className="pt-26">
        <div className="max-w-[1240px] mx-auto  bg-gradient-to-r from-[#fbd3e9] to-[#bb377d] rounded-lg overflow-hidden flex flex-col-reverse md:flex-row items-center">
          {/* Text Section */}
          <div className="p-6 md:p-20 w-full md:w-1/2 text-center md:text-left">
            <h1 className="font-bold text-3xl sm:text-4xl text-white mb-4">
             Are you having trouble carrying wedding documents when you go out somewhere?
            </h1>
            <p className="font-semibold text-gray-500 mb-6 text-sm sm:text-base">
              So what's the delay? Sign Up now,register correctly{" "}
              <br className="hidden sm:block" /> and get rid of the hassle
            </p>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2 p-6 md:p-10 flex justify-center">
            <div
              className="w-[300px] sm:w-[400px] rounded-lg overflow-hidden shadow-lg 
            bg-gradient-to-r from-[#fbd3e9] to-[#bb377d] p-2"
            >
              <img
                className="w-full h-auto object-cover rounded-lg"
                src={"https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600"}
                alt="Vibe coding"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HelpSection;
