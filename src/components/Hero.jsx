


import React from "react";
import nikha from "../assets/Online Nikah Registration.png";
import document from "../assets/Document Verification.png";
import cirtificate from "../assets/Digital Nikah Certificate.jpg";
import kazi from "../assets/Kazi Booking System.jpg";
import service from "../assets/customer-service-vs-customer-support.png";
import payment from "../assets/Secure Payment System.jpeg";

const Hero = () => {
  return (
    <div className="pt-6 pb-6 px-4">
      
      <h1 className="text-center font-bold text-2xl sm:text-3xl lg:text-4xl pt-5 pb-5">
        Our Services
      </h1>

      <div className="max-w-6xl mx-auto rounded-lg bg-gradient-to-r from-[#ed4264] to-[#ffedbc] p-4 sm:p-6">
        
        <div className="container mx-auto py-8">
          
          {/* Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Card */}
            <div className="bg-gradient-to-r from-[#c04848] to-[#480048] hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6 rounded-lg shadow-sm w-full">
              <img src={nikha} alt="" className="w-full h-40 object-cover rounded-md" />
              <h5 className="mt-4 mb-2 text-xl sm:text-2xl font-semibold text-white">
                Online Nikah Registration
              </h5>
              <p className="text-gray-300 text-sm sm:text-base">
                Users can easily complete their nikah registration from home
                through this service. By submitting required information and
                uploading documents, the process becomes quick and hassle-free.
              </p>
            </div>

            {/* Card */}
            <div className="bg-gradient-to-r from-[#c04848] to-[#480048] hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6 rounded-lg shadow-sm w-full">
              <img src={document} alt="" className="w-full h-40 object-cover rounded-md" />
              <h5 className="mt-4 mb-2 text-xl sm:text-2xl font-semibold text-white">
                Document Verification
              </h5>
              <p className="text-gray-300 text-sm sm:text-base">
                This service ensures that all submitted documents (such as NID,
                birth certificate, etc.) are properly verified.
              </p>
            </div>

            {/* Card */}
            <div className="bg-gradient-to-r from-[#c04848] to-[#480048] hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6 rounded-lg shadow-sm w-full">
              <img src={cirtificate} alt="" className="w-full h-40 object-cover rounded-md" />
              <h5 className="mt-4 mb-2 text-xl sm:text-2xl font-semibold text-white">
                Digital Nikah Certificate
              </h5>
              <p className="text-gray-300 text-sm sm:text-base">
                After successful registration, users will receive a digital
                nikah certificate which can be downloaded anytime.
              </p>
            </div>

            {/* Card */}
            <div className="bg-gradient-to-r from-[#c04848] to-[#480048] hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6 rounded-lg shadow-sm w-full">
              <img src={kazi} alt="" className="w-full h-40 object-cover rounded-md" />
              <h5 className="mt-4 mb-2 text-xl sm:text-2xl font-semibold text-white">
                Kazi Booking System
              </h5>
              <p className="text-gray-300 text-sm sm:text-base">
                Users can book a kazi for a specific date and time easily.
              </p>
            </div>

            {/* Card */}
            <div className="bg-gradient-to-r from-[#c04848] to-[#480048] hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6 rounded-lg shadow-sm w-full">
              <img src={service} alt="" className="w-full h-40 object-cover rounded-md" />
              <h5 className="mt-4 mb-2 text-xl sm:text-2xl font-semibold text-white">
                Customer Support Service
              </h5>
              <p className="text-gray-300 text-sm sm:text-base">
                24/7 support available via chat or phone for quick help.
              </p>
            </div>

            {/* Card */}
            <div className="bg-gradient-to-r from-[#c04848] to-[#480048] hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6 rounded-lg shadow-sm w-full">
              <img src={payment} alt="" className="w-full h-40 object-cover rounded-md" />
              <h5 className="mt-4 mb-2 text-xl sm:text-2xl font-semibold text-white">
                Secure Payment System
              </h5>
              <p className="text-gray-300 text-sm sm:text-base">
                Safe online payment with multiple options like mobile banking and cards.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;