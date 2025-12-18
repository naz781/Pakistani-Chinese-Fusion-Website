import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import pic1 from '../../public/assets/review_pictures/pic1.jpg';
import pic2 from '../../public/assets/review_pictures/pic2.jpg';
import pic3 from '../../public/assets/review_pictures/pic3.jpg';
import pic4 from '../../public/assets/review_pictures/pic4.jpg';
import pic5 from '../../public/assets/review_pictures/pic5.jpg';
import pic6 from '../../public/assets/review_pictures/pic6.jpg';
import pic7 from '../../public/assets/review_pictures/pic7.jpg';
import pic8 from '../../public/assets/review_pictures/pic8.jpg';
import pic9 from '../../public/assets/review_pictures/pic9.jpg';
import pic10 from '../../public/assets/review_pictures/pic10.jpg';
import pic11 from '../../public/assets/review_pictures/pic11.jpg';
import pic12 from '../../public/assets/review_pictures/pic12.jpg';
import pic13 from '../../public/assets/review_pictures/pic13.jpg';
import pic14 from '../../public/assets/review_pictures/pic14.jpg';

const images = [
  pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic13, pic14, pic12, pic11
];

export function ImageSlider({ interval = 4000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 6; // show 6 images at once

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev - 1 < 0 ? images.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, interval);
    return () => clearInterval(timer);
  }, [interval]);

  // Get visible images with wrap-around
  const getVisibleImages = () => {
    const visibleImages = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % images.length;
      visibleImages.push({
        src: images[index],
        index: index,
        key: `${index}-${currentIndex}`
      });
    }
    return visibleImages;
  };

  const visibleImages = getVisibleImages();

  return (
    <div className="w-full bg-gradient-to-b from-gray-50 to-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Customer Moments Gallery
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            See our happy customers enjoying their meals
          </p>
        </div>

        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute -left-3 md:-left-4 top-1/2 -translate-y-1/2 z-10 bg-white p-2 md:p-3 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
            aria-label="Previous images"
          >
            <ChevronLeft size={20} className="text-gray-800 md:w-6 md:h-6" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute -right-3 md:-right-4 top-1/2 -translate-y-1/2 z-10 bg-white p-2 md:p-3 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
            aria-label="Next images"
          >
            <ChevronRight size={20} className="text-gray-800 md:w-6 md:h-6" />
          </button>

          {/* Image Container */}
          <div className="flex gap-3 md:gap-4 px-8 md:px-12 overflow-x-auto scrollbar-hide">
            {visibleImages.map((item, position) => (
              <motion.div
                key={item.key}
                className="flex-shrink-0 rounded-xl md:rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                style={{ 
                  width: `${100 / visibleCount}%`,
                  minWidth: `${100 / visibleCount}%`,
                  flex: '0 0 auto'
                }}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  transition: { delay: position * 0.05 }
                }}
                whileHover={{ y: -4 }}
              >
                {/* Image Container with Consistent Height */}
                <div className="relative w-full h-32 sm:h-36 md:h-40">
                  <img
                    src={item.src}
                    alt={`Customer photo ${item.index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-all duration-300" />
                  
                  {/* Image Counter */}
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-1.5 py-0.5 rounded-md">
                    {item.index + 1}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center items-center mt-8 gap-1.5">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-red-600 scale-125 w-3'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>

        {/* Controls Info */}
        <div className="text-center mt-6">
          <div className="inline-flex items-center gap-3 text-sm text-gray-500">
          </div>
        </div>

        
      </div>
    </div>
  );
}

// Hide scrollbar for cleaner look
const styles = `
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
`;

// Add styles to head
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}