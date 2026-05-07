import React from 'react';

const images = [
  { id: 1, src: 'https://i.ibb.co.com/DH7dMGbP/pexels-hassanshoots1-11881283.jpg', alt: 'Canyon landscape' },
  { id: 2, src: 'https://i.ibb.co.com/zhGP0B5w/pexels-edmond-dantes-8556222.jpg', alt: 'Person paddling on lake' },
  { id: 3, src: 'https://i.ibb.co.com/M5kFTpW8/pexels-cedric-fauntleroy-8154794.jpg', alt: 'Bear on cliffside' },
  { id: 4, src: 'https://i.ibb.co.com/Ng9xb57b/pexels-cedric-fauntleroy-8154789.jpg', alt: 'Mountain range in mist' },
  { id: 5, src: 'https://i.ibb.co.com/VWbwPjqq/pexels-cedric-fauntleroy-8154681.jpg', alt: 'Dark pine forest' },
  { id: 6, src: 'https://i.ibb.co.com/cWnzwpm/pexels-anthonyshkraba-production-8837538.jpg', alt: 'Pug wrapped in blanket' },
];

const ImageCard = ({ src, alt }) => {
  return (
    // mb-[2px] use kora hoyeche nichey gap rakhar jonno
    <div className="mb-[2px] break-inside-avoid leading-[0]">
      <div className="group relative overflow-hidden rounded-md cursor-pointer">
        <img
          src={src}
          alt={alt}
          className="w-100 h-70 pt-5 grayscale brightness-75 transition-all duration-500 ease-in-out group-hover:grayscale-0 group-hover:scale-110 group-hover:brightness-100"
        />
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </div>
  );
};

const Gallery = () => {
  return (
    // flex and items-center diye screen er center e ana hoyeche
    <div>
      <div className="flex items-center justify-center  min-h-screen p-4">
      {/* max-w-lg or max-w-md diye image size choto rakha hoyeche */}
      <div className="w-full max-w-7xl mx-auto">
        
        {/* gap-[2px] diye image er side gap control kora hoyeche */}
        <div className="lg:columns-3 md:columns-3 sm:columns-2 gap-3">
          {images.map((image) => (
            <ImageCard key={image.id} src={image.src} alt={image.alt} />
          ))}
        </div>

      </div>
    </div>
    </div>
  );
};

export default Gallery;