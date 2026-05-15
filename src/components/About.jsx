import React from "react";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";

const teamMembers = [
  {
    name: "Iris Kowalski",
    role: "HEAD OF PRODUCT DESIGN",
    image: "https://i.ibb.co.com/CKP6knyF/ab4.jpg", 
    linkedin: "#",
  },
  {
    name: "Marcus Tenga",
    role: "HEAD OF ENGINEERING",
    image: "https://i.ibb.co.com/yFQC63Ps/ab3.jpg", 
    linkedin: "#",
  },
  {
    name: "Priya Natarajan",
    role: "HEAD OF BRAND",
    image: "https://i.ibb.co.com/9HHPHr5P/ab2.jpg", 
    linkedin: "#",
  },
  {
    name: "Elliot Vance",
    role: "HEAD OF OPERATIONS",
    image: "https://i.ibb.co.com/0p4qY8dw/ab1.jpg",
    linkedin: "#",
  },
];

// Ekhane 'image' prop-ti receive kora hoyeche
const TeamCard = ({ name, role, image, linkedin }) => (
  <div className="bg-[#121212] border border-zinc-800 rounded-2xl p-6 min-w-[280px] flex flex-col justify-between h-[420px] hover:border-zinc-600 transition-all group">
    <div>
      <h3 className="text-white text-xl font-medium">{name}</h3>
      <p className="text-zinc-500 text-[10px] mt-1 tracking-widest uppercase">
        {role}
      </p>
    </div>

    {/* Image Container */}
    <div className="flex justify-center items-center my-4 overflow-hidden rounded-xl h-48 bg-zinc-900/50">
      <img
        src={image || "https://i.ibb.co/3C5xJ7R/user.png"}
        alt={name}
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
      />
    </div>

    <div className="flex justify-between items-center mt-auto">
      <a
        href={linkedin}
        className="text-zinc-500 text-xs font-semibold tracking-widest uppercase hover:text-white transition-colors"
      >
        Linkedin
      </a>
      <div className="bg-[#E9A060] p-2 rounded-lg cursor-pointer group-hover:scale-110 transition-transform">
        <ArrowUpRight size={20} className="text-black" />
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <section id="about" className="bg-black text-white py-20 px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-start mb-16">
          <div className="mb-4 md:mb-0">
            <span className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-700 px-3 py-1 rounded-md text-[10px] text-[#E9A060] font-bold uppercase tracking-widest">
              <span className="w-1.5 h-1.5 bg-[#E9A060] rounded-full"></span>{" "}
              Team
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-normal leading-tight md:ml-24 max-w-4xl text-center">
            Our team builds with relentless craft, obsesses over the details
            most people skip, and ships the tools modern operators actually
            wanted.
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {teamMembers.map((member, index) => (
            <TeamCard key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
