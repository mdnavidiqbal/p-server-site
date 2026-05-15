import React from "react";
import { Calendar, User, ArrowRight } from "lucide-react"; // Icons-er jonno

const blogs = [
  {
    id: 1,
    image: "https://i.ibb.co.com/DH7dMGbP/pexels-hassanshoots1-11881283.jpg",
    date: "May 12, 2026",
    author: "Admin",
    title: "Mastering the Art of Canyon Photography",
    description: "Discover the secrets of capturing the perfect light and shadows in deep canyons.",
  },
  {
    id: 2,
    image: "https://i.ibb.co.com/zhGP0B5w/pexels-edmond-dantes-8556222.jpg",
    date: "May 10, 2026",
    author: "Iris K.",
    title: "Peaceful Morning: Paddling on Ancient Lakes",
    description: "How spending time on water can improve your mental health and focus.",
  },
  {
    id: 3,
    image: "https://i.ibb.co.com/M5kFTpW8/pexels-cedric-fauntleroy-8154794.jpg",
    date: "May 08, 2026",
    author: "Marcus T.",
    title: "Encounter with the Giants: Bears on Cliffside",
    description: "Safety tips and ethical guidelines for wildlife photography in the wild.",
  },
  {
    id: 4,
    image: "https://i.ibb.co.com/Ng9xb57b/pexels-cedric-fauntleroy-8154789.jpg",
    date: "May 05, 2026",
    author: "Priya N.",
    title: "Mystical Mist: Exploring the High Mountains",
    description: "The best mountain ranges to visit during the fog season this year.",
  },
  {
    id: 5,
    image: "https://i.ibb.co.com/VWbwPjqq/pexels-cedric-fauntleroy-8154681.jpg",
    date: "May 02, 2026",
    author: "Elliot V.",
    title: "Into the Dark: Pine Forest Exploration",
    description: "A guide to the most untouched pine forests in the northern hemisphere.",
  },
  {
    id: 6,
    image: "https://i.ibb.co.com/cWnzwpm/pexels-anthonyshkraba-production-8837538.jpg",
    date: "April 28, 2026",
    author: "Admin",
    title: "Caring for Your Pug During Cold Winter",
    description: "Expert tips to keep your furry friend warm and healthy this season.",
  },
];

const BlogCard = ({ blog }) => {
  return (
    <div className="group bg-zinc-900/40 border border-zinc-800 rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-all duration-300">
      {/* Image Section */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover grayscale brightness-90 transition-all duration-500 group-hover:grayscale-0 group-hover:scale-110"
        />
      </div>

      {/* Content Section */}
      <div className="p-6">
        <div className="flex items-center gap-4 text-zinc-500 text-xs mb-4">
          <div className="flex items-center gap-1">
            <Calendar size={14} />
            <span>{blog.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <User size={14} />
            <span>{blog.author}</span>
          </div>
        </div>

        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors line-clamp-2">
          {blog.title}
        </h3>
        
        <p className="text-zinc-400 text-sm mb-6 line-clamp-3 leading-relaxed">
          {blog.description}
        </p>

        <button className="flex items-center gap-2 text-white font-semibold text-sm hover:gap-4 transition-all">
          Read More <ArrowRight size={16} className="text-emerald-500" />
        </button>
      </div>
    </div>
  );
};

const BlogPage = () => {
  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h4 className="text-emerald-500 font-mono text-sm uppercase tracking-[0.3em] mb-4">Latest Insights</h4>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Blog & Articles</h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full"></div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPage;