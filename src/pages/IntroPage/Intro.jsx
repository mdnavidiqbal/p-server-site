import React from "react";
import { Link, useNavigate } from "react-router";
import { motion } from "framer-motion";
import ShinyText from "../../components/Design/ShinyText";
import BorderGlow from "../../components/BorderGlow";

const Intro = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full font-sans"
    >
      {/* 🔥 Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-[#c04848] to-[#480048] text-white text-center ">
        <img
          src="https://i.ibb.co.com/1Y85ddPQ/wedding-img-removebg-preview.png"
          alt=""
        />

        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
        >
          Online Nikah Registration
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-lg md:text-xl mb-8 max-w-xl"
        >
          Complete your marriage registration online—simple, secure, and fast.
        </motion.p>

        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.9 }}
          onClick={() => navigate("/home")}
          className="px-8 py-3 bg-white text-[#480048] font-bold rounded-full shadow-lg hover:scale-105 transition duration-300"
        >
          Get Started
        </motion.button>
      </section>
      <section className="bg-gradient-to-r from-[#480048] to-[#c04848]">
        <div className=" text-white min-h-screen py-20 px-6 relative overflow-hidden font-sans">
          {/* Background Grid Pattern */}

          {/* Floating Neon Object */}
          {/* <div className="absolute top-20 right-10 w-16 h-16 bg-purple-600 rounded-lg blur-xl opacity-30 animate-pulse"></div> */}

          {/* Section Header */}
          {/* <div className="text-center mb-16 relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              Our Vision<span className="text-purple-500">_</span>
            </h2>
          </div> */}

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1,  }}
            className="group relative p-6 sm:p-8 transition-all duration-300"
          >
            <div className="text-center mb-16 relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                Our Vision<span className="text-purple-500">_</span>
              </h2>
            </div>
          </motion.div>

          {/* Content Container */}
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 relative z-10">
            {/* Left Side: Video Card */}
            <div className="w-full lg:w-1/2 p-[2px] rounded-3xl ">
              <BorderGlow
                edgeSensitivity={30}
                glowColor="80 80 180"
                backgroundColor="#120F17"
                borderRadius={28}
                glowRadius={140}
                glowIntensity={1}
                coneSpread={25}
                animated={false}
                colors={["#c084fc", "#f472b6", "#38bdf8"]}
              >
                <div className="bg-[#1a0b2e] rounded-3xl p-6 shadow-2xl">
                  {/* Video Container */}
                  <div className="relative group overflow-hidden rounded-2xl mb-6 aspect-video bg-black">
                    <video
                      className="w-full h-full object-cover opacity-90 transition-opacity duration-500 group-hover:opacity-100"
                      controls
                      poster="image_6aab2a.jpg" // ভিডিওর ওপর ইমেজটি থাম্বনেইল হিসেবে থাকবে
                    >
                      <source
                        src="/src/assets/banner-video.mp4"
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>

                    {/* প্লে বাটনটি ভিডিওর ওপরে সুন্দর দেখানোর জন্য (Optional overlay) */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:hidden transition-all">
                      <div className="bg-pink-500/80 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg">
                        <svg
                          className="w-8 h-8 ml-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.841z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <h3 className="text-2xl font-bold mb-4 leading-tight">
                    Complete Your Registration
                  </h3>
                  <button className="bg-[#6322ef] hover:bg-[#501bd1] px-6 py-2.5 rounded-lg text-sm font-semibold transition-colors">
                    Let's Did it..
                  </button>
                </div>
              </BorderGlow>
            </div>

            {/* Right Side: Info */}
            <div className="w-full lg:w-1/2 space-y-6">
              <h1 className="text-3xl md:text-4xl font-bold leading-tight text-purple-400">
                Kickstart your journey in <br />
                <span className="text-white">Nikha Registration</span>
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
                Welcome to our Online Nikha Registration! Dive into the world of
                modern document store with a secure platform
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link to={'/home'} className="bg-[#6322ef] hover:bg-[#501bd1] text-white px-8 py-3 rounded-lg font-medium transition-all transform hover:scale-105 shadow-lg shadow-purple-500/20">
                  Explore
                </Link>
                <button className="border border-purple-500/50 hover:bg-purple-500/10 text-white px-8 py-3 rounded-lg font-medium transition-all">
                  Success
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 💡 Features Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-[#c04848] to-[#480048] text-black text-center px-4 sm:px-6">
        <ShinyText
          className="font-bold text-2xl sm:text-3xl md:text-4xl pb-8 sm:pb-10 bg-gradient-to-r from-[#134E5E] to-[#71B280] bg-clip-text text-transparent pt-10 sm:pt-20"
          text="✨ Why to chose us_ _ _?"
          speed={2}
          delay={0}
          color="#71B280"
          shineColor="#ffffff"
          spread={120}
          direction="left"
          yoyo={false}
          pauseOnHover={false}
          disabled={false}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 max-w-6xl mx-auto px-4">
          {[1, 2, 3].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative p-6 sm:p-8 bg-white/80 backdrop-blur-lg border border-gray-100 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-6 text-xl font-bold">
                {index + 1}
              </div>

              <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-gray-800">
                {index === 0 && "Easy Process"}
                {index === 1 && "Secure System"}
                {index === 2 && "Fast Approval"}
              </h3>

              <p className="text-gray-600 leading-relaxed text-sm sm:text-[15px]">
                {index === 0 &&
                  "Simple and guided steps to complete your nikah registration online without hassle."}
                {index === 1 &&
                  "We ensure top-level security so your personal and legal data stays protected."}
                {index === 2 &&
                  "Experience lightning-fast processing and approval with zero unnecessary delay."}
              </p>
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 bg-gradient-to-r from-blue-50 to-indigo-50 transition duration-300 -z-10"></div>
            </motion.div>
          ))}
        </div>
      </section>

      <section></section>

      {/* ❤️ CTA */}
      <section className="py-20 bg-gradient-to-r from-[#480048] to-[#c04848] text-white text-center px-6">
        <h2 className="text-3xl font-bold mb-6">Start Your Journey Today</h2>

        <button
          onClick={() => navigate("/registration")}
          className="px-8 py-3 bg-white text-[#480048] font-bold rounded-full hover:scale-105 transition"
        >
          Create Account
        </button>
      </section>
    </motion.div>
  );
};

export default Intro;
