import React from "react";
import nikha from "../assets/Online Nikah Registration.png";
import document from "../assets/Document Verification.png";
import cirtificate from "../assets/Digital Nikah Certificate.jpg";
import kazi from "../assets/Kazi Booking System.jpg";
import service from "../assets/customer-service-vs-customer-support.png";
import payment from "../assets/Secure Payment System.jpeg";
import BorderGlow from "./BorderGlow";
import Gallery from "./Gallery";
import TextType from "./TextType";

const Hero = () => {
  return (
    <div className="pt-6 pb-6 px-4 w-full h-full overflow-hidden">
      <h1 className="text-center">
        <TextType
          className="font-bold text-black text-3xl sm:text-4xl lg:text-[50px] lg:text-4xl pt-5 pb-5"
          text={["Our Services"]}
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
      </h1>

      <div className="max-w-6xl mx-auto rounded-lg bg-gradient-to-r from-[#23074d] to-[#ffedbc] p-4 sm:p-6">
        <div className="container mx-auto py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <BorderGlow
              edgeSensitivity={30}
              glowColor="40 80 80"
              backgroundColor="#120F17"
              borderRadius={28}
              glowRadius={40}
              glowIntensity={1}
              coneSpread={25}
              animated={false}
              colors={["#c084fc", "#f472b6", "#38bdf8"]}
            >
              <div style={{ padding: "2em" }} className="w-full">
                <img
                  src={nikha}
                  alt=""
                  className="w-full h-40 object-cover rounded-md"
                />
                <h5 className="mt-4 mb-2 text-xl sm:text-2xl font-semibold text-white">
                  Online Nikah Registration
                </h5>
                <p className="text-gray-300 text-sm sm:text-base">
                  Users can easily complete their nikah registration from home
                  through this service. By submitting required information and
                  uploading documents, the process becomes quick and
                  hassle-free.
                </p>
              </div>
            </BorderGlow>
            <BorderGlow
              edgeSensitivity={30}
              glowColor="40 80 80"
              backgroundColor="#120F17"
              borderRadius={28}
              glowRadius={40}
              glowIntensity={1}
              coneSpread={25}
              animated={false}
              colors={["#c084fc", "#f472b6", "#38bdf8"]}
            >
              <div style={{ padding: "2em" }} className="w-full">
                <img
                  src={document}
                  alt=""
                  className="w-full h-40 object-cover rounded-md"
                />
                <h5 className="mt-4 mb-2 text-xl sm:text-2xl font-semibold text-white">
                  Document Verification
                </h5>
                <p className="text-gray-300 text-sm sm:text-base">
                  This service ensures that all submitted documents (such as
                  NID, birth certificate, etc.) are properly verified.
                </p>
              </div>
            </BorderGlow>
            <BorderGlow
              edgeSensitivity={30}
              glowColor="40 80 80"
              backgroundColor="#120F17"
              borderRadius={28}
              glowRadius={40}
              glowIntensity={1}
              coneSpread={25}
              animated={false}
              colors={["#c084fc", "#f472b6", "#38bdf8"]}
            >
              <div style={{ padding: "2em" }} className="w-full">
                <img
                  src={cirtificate}
                  alt=""
                  className="w-full h-40 object-cover rounded-md"
                />
                <h5 className="mt-4 mb-2 text-xl sm:text-2xl font-semibold text-white">
                  Digital Nikah Certificate
                </h5>
                <p className="text-gray-300 text-sm sm:text-base">
                  After successful registration, users will receive a digital
                  nikah certificate which can be downloaded anytime. Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Numquam incidunt
                  doloremque aliquam voluptatem tempora placeat quae, quam
                  quidem tenetur vitae?
                </p>
              </div>
            </BorderGlow>
            <BorderGlow
              edgeSensitivity={30}
              glowColor="40 80 80"
              backgroundColor="#120F17"
              borderRadius={28}
              glowRadius={40}
              glowIntensity={1}
              coneSpread={25}
              animated={false}
              colors={["#c084fc", "#f472b6", "#38bdf8"]}
            >
              <div style={{ padding: "2em" }} className="w-full">
                <img
                  src={kazi}
                  alt=""
                  className="w-full h-40 object-cover rounded-md"
                />
                <h5 className="mt-4 mb-2 text-xl sm:text-2xl font-semibold text-white">
                  Kazi Booking System
                </h5>
                <p className="text-gray-300 text-sm sm:text-base">
                  Users can book a kazi for a specific date and time easily.
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Temporibus recusandae iure magni obcaecati error! Fuga
                  expedita suscipit eos reprehenderit voluptas?
                </p>
              </div>
            </BorderGlow>
            <BorderGlow
              edgeSensitivity={30}
              glowColor="40 80 80"
              backgroundColor="#120F17"
              borderRadius={28}
              glowRadius={40}
              glowIntensity={1}
              coneSpread={25}
              animated={false}
              colors={["#c084fc", "#f472b6", "#38bdf8"]}
            >
              <div style={{ padding: "2em" }} className="w-full">
                <img
                  src={service}
                  alt=""
                  className="w-full h-40 object-cover rounded-md"
                />
                <h5 className="mt-4 mb-2 text-xl sm:text-2xl font-semibold text-white">
                  Customer Support Service
                </h5>
                <p className="text-gray-300 text-sm sm:text-base">
                  24/7 support available via chat or phone for quick help. Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Non quasi
                  impedit dolorum vel iure ut totam, dignissimos commodi!
                  Deleniti, temporibus?
                </p>
              </div>
            </BorderGlow>
            <BorderGlow
              edgeSensitivity={30}
              glowColor="40 80 80"
              backgroundColor="#120F17"
              borderRadius={28}
              glowRadius={40}
              glowIntensity={1}
              coneSpread={25}
              animated={false}
              colors={["#c084fc", "#f472b6", "#38bdf8"]}
            >
              <div style={{ padding: "2em" }} className="w-full">
                <img
                  src={payment}
                  alt=""
                  className="w-full h-40 object-cover rounded-md"
                />
                <h5 className="mt-4 mb-2 text-xl sm:text-2xl font-semibold text-white">
                  Secure Payment System
                </h5>
                <p className="text-gray-300 text-sm sm:text-base">
                  Safe online payment with multiple options like mobile banking
                  and cards. Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Dolorem odio reprehenderit fugiat velit? Doloremque
                  itaque ullam modi quisquam dolorum! Unde.
                </p>
              </div>
            </BorderGlow>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
