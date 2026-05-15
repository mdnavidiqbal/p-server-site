import React from 'react';
import { ExternalLink, LayoutGrid } from 'lucide-react';

const showcaseData = [
  { id: 1, img: "https://i.ibb.co.com/nqn8c6rs/img1.webp", title: "Samart Document", category: "Smart Document" },
  { id: 2, img: "https://i.ibb.co.com/67mStxBy/img2.jpg", title: "Access Globally", category: "Access Globally" },
  { id: 3, img: "https://i.ibb.co.com/jPbn29Qw/img3.jpg", title: "Secure Document", category: "Secure Document" },
  { id: 4, img: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=800", title: "Mobile App", category: "UX/UI" },
  { id: 5, img: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800", title: "Dev Tools", category: "Software" },
  { id: 6, img: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=800", title: "Graphic Design", category: "Visuals" },
];

const Showcase = () => {
  const doubledData = [...showcaseData, ...showcaseData];

  return (
    <section className="bg-black py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-emerald-400 font-mono text-sm mb-4 tracking-[0.2em] uppercase">
              <LayoutGrid size={16} />
              <span>Selected Works</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-semibold text-white tracking-tight leading-tight">
              We build digital documents that <span className="text-zinc-500 italic font-serif">actually matter.</span>
            </h2>
          </div>
          <div className="hidden md:block">
            <button className="px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-zinc-200 transition-all">
              View All Projects
            </button>
          </div>
        </div>
      </div>

      {/* Modern Slider with Gradient Mask */}
      <div className="relative mask-gradient">
        <div className="animate-showcase flex gap-8 hover:[animation-play-state:paused] cursor-pointer">
          {doubledData.map((item, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 w-[380px] md:w-[500px] h-[300px] md:h-[350px] relative group rounded-[2rem] overflow-hidden border border-zinc-800/50"
            >
              {/* Image with zoom effect */}
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-emerald-400 text-xs font-mono mb-2 uppercase tracking-widest">{item.category}</span>
                <div className="flex justify-between items-end">
                  <h3 className="text-white text-2xl font-medium">{item.title}</h3>
                  <div className="bg-white/10 backdrop-blur-md p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
                    <ExternalLink size={20} className="text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile view 'View All' button */}
      <div className="mt-12 text-center md:hidden">
        <button to className="px-8 py-3 bg-zinc-900 text-white rounded-full font-medium border border-zinc-800">
          View All Projects
        </button>
      </div>
    </section>
  );
};

export default Showcase;