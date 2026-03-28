import React from "react";
import nikha from "../assets/Online Nikah Registration.png";
import document from "../assets/Document Verification.png";
import cirtificate from "../assets/Digital Nikah Certificate.jpg";
import kazi from "../assets/Kazi Booking System.jpg";
import service from "../assets/customer-service-vs-customer-support.png";
import payment from "../assets/Secure Payment System.jpeg"

const Hero = () => {
  return (
    <div className="pt-6 pb-6">
      <h1 className="text-center font-bold text-4xl pt-5 pb-5">Our Services</h1>
      <div className="max-w-6xl mx-auto rounded-lg bg-gradient-to-r from-[#ed4264] to-[#ffedbc] p-6">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-3 justify-center gap-x-8 gap-y-12">
            <div className="bg-gradient-to-r from-[#c04848] to-[#480048] hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 max-w-sm p-6 border border-gray-200 rounded-lg shadow-sm w-full">
              <img src={nikha} alt="" />
              <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-white">
                Online Nikah Registration
              </h5>
              <p className="mb-6 text-gray-300">
                Users can easily complete their nikah registration from home
                through this service. By submitting required information and
                uploading documents, the process becomes quick and hassle-free.
              </p>
            </div>
            <div className="bg-gradient-to-r from-[#c04848] to-[#480048] hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 max-w-sm p-6 border border-gray-200 rounded-lg shadow-sm w-full">
              <img src={document} alt="" />
              <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-white">
                Document Verification
              </h5>
              <p className="mb-6 text-gray-300">
                This service ensures that all submitted documents (such as NID,
                birth certificate, etc.) are properly verified. It helps
                maintain accuracy and security in the registration process.
              </p>
            </div>
            <div className="bg-gradient-to-r from-[#c04848] to-[#480048] hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 max-w-sm p-6 border border-gray-200 rounded-lg shadow-sm w-full">
              <img src={cirtificate} alt="" />
              <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-white">
                Digital Nikah Certificate
              </h5>
              <p className="mb-6 text-gray-300">
                After successful registration, users will receive a digital
                nikah certificate. It can be easily downloaded, printed, and
                used whenever needed
              </p>
            </div>
            <div className="bg-gradient-to-r from-[#c04848] to-[#480048] hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 max-w-sm p-6 border border-gray-200 rounded-lg shadow-sm w-full">
              <img src={kazi} alt="" />
              <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-white">
                Kazi Booking System
              </h5>
              <p className="mb-6 text-gray-300">
                Users can book a kazi for a specific date and time through this
                feature. It saves time and reduces the complexity of arranging
                the ceremony.
              </p>
            </div>
            <div className="bg-gradient-to-r from-[#c04848] to-[#480048] hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 max-w-sm p-6 border border-gray-200 rounded-lg shadow-sm w-full">
              <img src={service} alt="" />
              <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-white">
                Customer Support Service
              </h5>
              <p className="mb-6 text-gray-300">
                The website provides 24/7 customer support to assist users with
                any issues. Support is available through live chat or phone for
                quick help
              </p>
            </div>
            <div className="bg-gradient-to-r from-[#c04848] to-[#480048]  hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 max-w-sm p-6 border border-gray-200 rounded-lg shadow-sm w-full">
              <img src={payment} alt="" />
              <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-white">
                Secure Payment System
              </h5>
              <p className="mb-6 text-gray-300">
                This service allows users to make online payments safely.
                Multiple payment options like mobile banking and cards are
                supported for convenience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
