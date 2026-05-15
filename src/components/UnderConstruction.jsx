import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router';
import { Settings, Hammer, Rocket, ArrowLeft } from 'lucide-react';

const UnderConstruction = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6 overflow-hidden relative">
      
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-[150px]" />

      <div className="max-w-2xl w-full text-center relative z-10">
        
        {/* Animated Icon Section */}
        <div className="relative flex justify-center mb-10">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 flex justify-center items-center opacity-20"
          >
            <Settings size={180} className="text-emerald-500" />
          </motion.div>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative bg-zinc-900 p-8 rounded-[2.5rem] border border-zinc-800 shadow-2xl"
          >
            <Hammer size={60} className="text-emerald-400 animate-bounce" />
          </motion.div>
        </div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-emerald-500 font-mono text-sm uppercase tracking-[0.4em] mb-4">
            Feature in Progress
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Something Great is <br />
            <span className="italic font-serif text-zinc-500 text-3xl md:text-5xl">Under Construction</span>
          </h1>
          <p className="text-zinc-400 text-lg mb-10 leading-relaxed max-w-md mx-auto">
            We are working on this feature to make your **Nikah Registration** experience even easier. It will be launched very soon!
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button 
            onClick={() => navigate(-1)}
            className="px-8 py-3 bg-zinc-900 text-white rounded-full font-bold border border-zinc-800 hover:bg-zinc-800 transition-all flex items-center gap-2"
          >
            <ArrowLeft size={18} /> Go Back
          </button>
          
          <div className="px-8 py-3 bg-white/5 backdrop-blur-md text-emerald-400 rounded-full font-bold border border-emerald-500/20 flex items-center gap-2">
            <Rocket size={18} /> Launching Soon
          </div>
        </motion.div>

        {/* Progress Bar Mockup */}
        <div className="mt-16 max-w-xs mx-auto">
          <p className="text-zinc-500 text-xs mb-2 uppercase tracking-widest font-bold">Build Progress: 75%</p>
          <div className="h-1.5 w-full bg-zinc-900 rounded-full overflow-hidden border border-zinc-800">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "75%" }}
              transition={{ duration: 2, delay: 0.5 }}
              className="h-full bg-gradient-to-r from-emerald-600 to-emerald-400"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default UnderConstruction;