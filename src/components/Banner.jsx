// import React from "react";
// import { useEffect, useState } from "react";
// import { Link } from "react-router";

// const images = [
//   "https://i.ibb.co.com/JFWF9mVx/back-view-islamic-couple-spending-time-together.jpg",
//   "https://i.ibb.co.com/0y7L1w7/muslim-wedding-couple.jpg",
//   "https://i.ibb.co.com/3WfQKkF/islamic-marriage-nikah.jpg",
// ];

// const Banner = () => {

//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % images.length);
//     }, 4000); // 4 sec por por change hobe

//     return () => clearInterval(interval);
//   }, []);


//   return (
//     // <div className="w-500px bg-[#FAF7F3] rounded-lg">
//     //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 lg:pt-20">
//     //     <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
//     //       {/* Left Content */}
//     //       <div className="text-center lg:text-left pb-15">
//     //         <h1 className="font-bold text-3xl sm:text-4xl lg:text-[50px]">
//     //           Online Nikah Site
//     //         </h1>

//     //         <p className="mt-4 text-sm sm:text-base leading-relaxed">
//     //           Begin your forever journey with us. Online Nikah Service brings
//     //           couples together. We aim to provide quick and affordable Nikah
//     //           services to couples.
//     //           <br className="hidden sm:block" />
//     //           Our Islamic Nikah service allows you to perform your Nikah
//     //           ceremony from the comfort of your home and ensures an easy and
//     //           affordable solution for your e-Nikah.
//     //           <br className="hidden sm:block" />
//     //           Please contact on WhatsApp before booking the Nikah.
//     //         </p>

//     //         {/* Buttons */}
//     //         <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-8">
//     //           <Link
//     //             to="/createbiodata"
//     //             className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-6 py-2.5"
//     //           >
//     //             Create Bio-data
//     //           </Link>
//     //           <button
//     //             type="button"
//     //             className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-6 py-2.5"
//     //           >
//     //             Registration
//     //           </button>
//     //         </div>
//     //       </div>

//     //       {/* Right Image */}
//     //       <div className="w-full lg:w-1/2">
//     //         <img
//     //           className="w-full h-auto rounded-xl object-cover"
//     //           src="https://i.ibb.co.com/JFWF9mVx/back-view-islamic-couple-spending-time-together.jpg"
//     //           alt="Nikah Banner"
//     //         />
//     //       </div>
//     //     </div>
//     //   </div>
//     // </div>
//     <div
//       className="w-full min-h-[500px] bg-cover bg-center relative transition-all duration-1000"
//       style={{
//         backgroundImage: `url(${images[current]})`,
//       }}
//     >
//       {/* Dark overlay for better text visibility */}
//       <div className="absolute inset-0 bg-black/50"></div>

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
//         <div className="flex flex-col items-center lg:items-start text-center lg:text-left pb-20">
//           <h1 className="font-bold text-white text-3xl sm:text-4xl lg:text-[50px]">
//             Online Nikah Site
//           </h1>

//           <p className="mt-4 text-white text-sm sm:text-base leading-relaxed max-w-2xl">
//             Begin your forever journey with us. Online Nikah Service brings
//             couples together. We aim to provide quick and affordable Nikah
//             services.
//             <br className="hidden sm:block" />
//             Our Islamic Nikah service allows you to perform your Nikah ceremony
//             from the comfort of your home.
//           </p>

//           {/* Buttons */}
//           <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-8">
//             <Link
//               to="/createbiodata"
//               className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-6 py-2.5"
//             >
//               Create Bio-data
//             </Link>

//             <button
//               type="button"
//               className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-6 py-2.5"
//             >
//               Registration
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;


import React, { useEffect, useState } from "react";
import { Link } from "react-router";

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
    <div className="relative w-full h-[500px] overflow-hidden">
      
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
            
            <h1 className="font-bold text-white text-3xl sm:text-4xl lg:text-[50px]">
              Online Nikah Site
            </h1>

            <p className="mt-4 text-white text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Begin your forever journey with us. Online Nikah Service brings
              couples together. We aim to provide quick and affordable Nikah services.
              <br className="hidden sm:block" />
              Our Islamic Nikah service allows you to perform your Nikah ceremony
              from the comfort of your home.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-8">
              <Link
                to="/createbiodata"
                className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-6 py-2.5"
              >
                Create Bio-data
              </Link>

              <button
                type="button"
                className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-6 py-2.5"
              >
                Registration
              </button>
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