import React from "react";

const HeroSection = () => {
  return (
    <section className=" text-black min-h-screen flex items-center px-6 py-12 md:px-16 lg:px-24 pt-20">
      <div className="max-w-7xl bg-green-500/10 backdrop-blur-md mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-10 py-5 rounded-2xl">
        {/* Left Side: Content */}
        <div className="space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
            Hassle-free
            <br />
            Nikah registration
            <br />
            every single day.
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-lg leading-relaxed">
            “A simple digital process, a secure registration system, and a
            trusted approval flow — built to make your Nikah registration
            smooth, fast, and stress-free so you can focus on what truly
            matters.”
          </p>

          <button className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:ring-purple-200 font-medium rounded-xl text-sm px-6 py-2.5">
            Shop the Ritual Set
          </button>
        </div>

        {/* Right Side: Image Grid */}
        <div className="grid grid-cols-3 gap-4">
          {/* Main Large Image */}
          <div className="col-span-3">
            <img
              src="https://i.ibb.co.com/5gDRNv89/love-arya-SUw-Po4-Er-QCc-unsplash.jpg"
              alt="Morning Coffee"
              className="w-full h-80 md:h-[450px] object-cover rounded-[2rem]"
            />
          </div>

          {/* Bottom Three Small Images */}
          <div className="h-32 md:h-48">
            <img
              src="https://i.ibb.co.com/BRL5WrZ/mustafa-fatemi-Zvjr-Ca-PDU1c-unsplash.jpg"
              alt="Ritual detail 1"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
          <div className="h-32 md:h-48">
            <img
              src="https://i.ibb.co.com/RGKn4mvv/hafida-abousalih-Iko-P607-TQa-A-unsplash.jpg"
              alt="Ritual detail 2"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
          <div className="h-32 md:h-48">
            <img
              src="https://i.ibb.co.com/My0RDsVD/pexels-akshay-patil-2160317876-36634992.jpg"
              alt="Ritual detail 3"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
