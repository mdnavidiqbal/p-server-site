import React from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react"; // Make sure to install lucide-react

const BranchCard = ({ city, address, phone, mob }) => (
  <div className="group bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-emerald-500/30 transition-all duration-300">
    <div className="flex items-center gap-4 mb-4">
      <div className="p-3 bg-emerald-50 text-emerald-600 rounded-lg group-hover:bg-emerald-600 group-hover:text-white transition-colors">
        <MapPin size={24} />
      </div>
      <div>
        <h3 className="text-xl font-bold text-gray-800">{city}</h3>
        <p className="text-emerald-600 text-sm font-medium">Branch Office</p>
      </div>
    </div>
    <div className="space-y-3 text-gray-600 text-sm leading-relaxed">
      <p>{address}</p>
      <div className="pt-2 border-t border-gray-50">
        <p className="flex items-center gap-2">
          <span className="font-semibold text-gray-800 text-xs uppercase">
            Call:
          </span>{" "}
          {phone}
        </p>
        <p className="flex items-center gap-2">
          <span className="font-semibold text-gray-800 text-xs uppercase">
            Mob:
          </span>{" "}
          {mob}
        </p>
      </div>
    </div>
  </div>
);

const Contact = () => {
  const branches = [
    {
      city: "Dhaka",
      address:
        "Way To Nikah, 3rd Floor, Noble Building, Bashundhara Madani Road, Dhaka.",
      phone: "7025115588",
      mob: "01702541166",
    },
    {
      city: "Mymensingh",
      address:
        "Way To Nikah, 3rd Floor, Mufizuddin Building, Noumuhol, A/B Guho Road, Mymensingh.",
      phone: "7025115588",
      mob: "01702544166",
    },
    {
      city: "Chattagram",
      address:
        "Way To Nikah, 3rd Floor, GEC Circle, Central Plaza, Chattagram, Bangladesh.",
      phone: "7025115588",
      mob: "01702544116",
    },
    {
      city: "Rajshahi",
      address:
        "Way To Nikah, 3rd Floor, Alupatti, Padma Garden Road, Rajshahi, Bangladesh.",
      phone: "7025115588",
      mob: "01702441166",
    },
  ];

  return (
    <div className="w-full h-full bg-gradient-to-tr from-[#f0f9ff] via-[#f5f5f5] to-[#e7f5ee] p-15 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
          We are here to <span className="text-emerald-600">assist you.</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Visit one of our branch offices or send us a message directly. We
          usually respond within 24 hours.
        </p>
      </div>

      {/* Cards Grid Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        {branches.map((branch, index) => (
          <BranchCard key={index} {...branch} />
        ))}
      </div>

      {/* Contact Form Section */}
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
        <div className="flex flex-col md:flex-row">
          {/* Info Side */}
          <div className="md:w-1/3 bg-emerald-600 p-10 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-4">Let's talk!</h2>
              <p className="text-emerald-100">
                Have questions about our services? Our team is ready to help you
                find the right path.
              </p>
            </div>
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-emerald-200" />
                <span>support@waytonikah.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-emerald-200" />
                <span>+880 1702-541166</span>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <form
            className="md:w-2/3 p-10 space-y-6 bg-white"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="How can we help you?"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
              ></textarea>
            </div>
            <button
              type="submit"
              className="group w-full sm:w-max px-8 py-4 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-200"
            >
              Send Message
              <Send
                size={18}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
