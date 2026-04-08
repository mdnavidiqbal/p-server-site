// import React, { useEffect } from "react";
// import { useNavigate } from "react-router";

// const Intro = () => {
//   const navigate = useNavigate();

//   return (
//     <div>
//       <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-500 to-pink-500 text-white">
//         {/* Animation Section */}
//         <div className="animate-bounce mb-10">
//           <h1 className="text-5xl font-bold">Welcome!</h1>
//         </div>

//         <p className="text-xl mb-10">Your amazing journey starts here.</p>

//         {/* Get Started Button */}
//         <button
//           onClick={() => navigate("/home")}
//           className="px-8 py-3 bg-white text-purple-600 font-bold rounded-lg shadow-lg hover:bg-purple-100 transition duration-300"
//         >
//           Get Started
//         </button>
//       </div>
      
//     </div>
//   );
// };

// export default Intro;


import React from "react";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";

const Intro = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}   // শুরুতে নিচে + invisible
      animate={{ opacity: 1, y: 0 }}    // শেষে normal position
      transition={{ duration: 0.8 }}    // animation speed
      className="w-full font-sans"
    >

      {/* 🔥 Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-[#c04848] to-[#480048] text-white text-center px-5">
        
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
          সহজ, নিরাপদ এবং দ্রুত অনলাইনে আপনার বিবাহ নিবন্ধন সম্পন্ন করুন
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

      {/* 💡 Features Section */}
      <section className="py-20 bg-gray-100 text-center px-6">
        <h2 className="text-3xl font-bold mb-12">Why Choose Us?</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[1,2,3].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-xl font-bold mb-2">
                {index === 0 && "Easy Process"}
                {index === 1 && "Secure System"}
                {index === 2 && "Fast Approval"}
              </h3>
              <p>
                {index === 0 && "Simple steps to complete your nikah registration online."}
                {index === 1 && "Your personal data is secure with us."}
                {index === 2 && "Quick processing and approval without delays."}
              </p>
            </motion.div>
          ))}
        </div>
      </section>\
      <section>
          
      </section>

      {/* ❤️ CTA */}
      <section className="py-20 bg-gradient-to-r from-[#480048] to-[#c04848] text-white text-center px-6">
        <h2 className="text-3xl font-bold mb-6">
          Start Your Journey Today
        </h2>

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