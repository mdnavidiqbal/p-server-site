import React, { Component } from "react";
import { Link } from "react-router";

class HelpSection extends Component {
  render() {
    return (
      <div className="pt-6">
        <div className="max-w-[1240px] mx-auto  bg-gradient-to-r from-[#fbd3e9] to-[#bb377d] rounded-lg overflow-hidden flex flex-col-reverse md:flex-row items-center">
          {/* Text Section */}
          <div className="p-6 md:p-20 w-full md:w-1/2 text-center md:text-left">
            <h1 className="font-bold text-3xl sm:text-4xl text-white mb-4">
              Need help with Vibe <br /> coding?
            </h1>
            <p className="font-semibold text-white mb-6 text-sm sm:text-base">
              Get matched with the right expert to keep building and{" "}
              <br className="hidden sm:block" /> marketing your project
            </p>
            <Link className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600e text-white font-bold p-3 rounded-lg ">
              Find An Expert
            </Link>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2 p-6 md:p-10 flex justify-center">
            <div
              className="w-[300px] sm:w-[400px] rounded-lg overflow-hidden shadow-lg 
            bg-gradient-to-r from-[#fbd3e9] to-[#bb377d] p-2"
            >
              <img
                className="w-full h-auto object-cover rounded-lg"
                src={"https://i.ibb.co/jkXsmrdn/pexels-caio-56759.jpg"}
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
