import React, { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";

const faqData = [
  {
    question: "Is an online Nikah valid according to Shariah?",
    answer:
      "Yes, an online Nikah can be valid according to Shariah if all the required conditions (proposal, acceptance, and witnesses) are properly fulfilled. On our platform, we follow certified Kazi procedures and proper legal processes.",
  },
  {
    question: "What documents are required for registration?",
    answer:
      "Generally, copies of the bride and groom’s NID cards, digital birth certificates, and passport-size photos are required. If either party was previously married, a divorce certificate or death certificate may also be required.",
  },
  {
    question: "How will I receive the Nikah Nama?",
    answer:
      "After completing online registration and verification by the Kazi, we send a physical copy of the Nikah Nama to your address via courier. You can also download a digital copy from your dashboard.",
  },
  {
    question: "How long does the process take to complete?",
    answer:
      "Our system is very fast. If all documents are correct and witness verification is completed, the entire process is usually finished within 24 to 48 hours.",
  },
  {
    question: "Is our personal data safe?",
    answer:
      "Yes, we use end-to-end encryption. All your personal documents and photos are fully secure with us and are never shared anywhere except for legal purposes.",
  },
];

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div
      className={`border-b border-zinc-800 transition-all ${isOpen ? "bg-zinc-900/30" : ""}`}
    >
      <button
        onClick={onClick}
        className="w-full py-6 px-4 flex items-center justify-between text-left group"
      >
        <span
          className={`text-lg font-medium transition-colors ${isOpen ? "text-emerald-400" : "text-zinc-300 group-hover:text-white"}`}
        >
          {question}
        </span>
        <ChevronDown
          className={`text-zinc-500 transition-transform duration-300 ${isOpen ? "rotate-180 text-emerald-400" : ""}`}
          size={20}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-6 text-zinc-400 leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-mono uppercase tracking-widest mb-6">
            <HelpCircle size={14} />
            <span>Support Center</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Common{" "}
            <span className="text-emerald-500 italic font-serif">
              Questions
            </span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            Online Nikah registration niye apnar mone thaka proshno-gulo ekhane
            khujun.
          </p>
        </div>

        {/* Accordion list */}
        <div className="bg-zinc-900/20 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 p-8 rounded-[2rem] bg-gradient-to-r from-emerald-900/20 to-blue-900/20 border border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Any Question Now?
            </h3>
            <p className="text-zinc-400 text-sm">
              Our team are ready to support you
            </p>
          </div>
          <div className="flex gap-4">
            <Link
              to="/underconstruction"
              className="flex items-center gap-2 px-6 py-3 bg-emerald-500 text-black font-bold rounded-full hover:bg-emerald-400 transition-all"
            >
              <MessageCircle size={18} />
              WhatsApp
            </Link>
            <Link
              to="/underconstruction"
              className="flex items-center gap-2 px-6 py-3 bg-zinc-800 text-white font-bold rounded-full hover:bg-zinc-700 transition-all border border-zinc-700"
            >
              <Phone size={18} />
              Call Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
