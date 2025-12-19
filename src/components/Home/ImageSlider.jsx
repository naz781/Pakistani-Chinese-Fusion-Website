import React, { useEffect, useState, useRef } from 'react';
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
  const [visibleCount, setVisibleCount] = useState(6); // default desktop
  const containerRef = useRef(null);

  // Update visibleCount based on screen width
  useEffect(() => {
    const updateVisibleCount = () => {
      setVisibleCount(window.innerWidth < 768 ? 4 : 5); // mobile < md = 5
    };
    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  // Duplicate images for infinite loop
  const infiniteImages = [...images, ...images];

  const nextSlide = () => setCurrentIndex(prev => prev + 1);
  const prevSlide = () => setCurrentIndex(prev => prev - 1);

  useEffect(() => {
    const timer = setInterval(nextSlide, interval);
    return () => clearInterval(timer);
  }, [interval]);

  // Reset index when reaching duplicate halfway
  useEffect(() => {
    if (currentIndex >= images.length) {
      setTimeout(() => {
        setCurrentIndex(0);
        if (containerRef.current) {
          containerRef.current.style.transition = 'none';
          containerRef.current.style.transform = 'translateX(0%)';
        }
        setTimeout(() => {
          if (containerRef.current) containerRef.current.style.transition = '';
        }, 50);
      }, 500);
    } else if (currentIndex < 0) {
      setTimeout(() => {
        setCurrentIndex(images.length - 1);
        if (containerRef.current) {
          containerRef.current.style.transition = 'none';
          containerRef.current.style.transform = `translateX(-${(100 / visibleCount) * (images.length - 1)}%)`;
        }
        setTimeout(() => {
          if (containerRef.current) containerRef.current.style.transition = '';
        }, 50);
      }, 500);
    }
  }, [currentIndex, visibleCount]);

  return (
    <div className="w-full bg-gradient-to-b from-gray-50 to-white py-10">
      <div className="max-w-7xl mx-auto px-8 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Customer Moments Gallery
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            See our happy customers enjoying their meals
          </p>
        </div>

        <div className="relative overflow-hidden">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-4 mt-12 -translate-y-1/2 z-10
                       bg-white p-2 md:p-3 rounded-full shadow-lg
                       hover:shadow-xl hover:scale-110 transition-all duration-300"
            aria-label="Previous images"
          >
            <ChevronLeft size={20} className="text-gray-800 md:w-6 md:h-6" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-4 mt-12 -translate-y-1/2 z-10
                       bg-white p-2 md:p-3 rounded-full shadow-lg
                       hover:shadow-xl hover:scale-110 transition-all duration-300"
            aria-label="Next images"
          >
            <ChevronRight size={20} className="text-gray-800 md:w-6 md:h-6" />
          </button>

          {/* Sliding Row */}
          <motion.div
            ref={containerRef}
            className="flex gap-0 pr-24"
            style={{ x: `-${(100 / visibleCount) * currentIndex}%` }}
            animate={{ x: `-${(100 / visibleCount) * currentIndex}%` }}
            transition={{ type: 'tween', duration: 0.5, ease: 'easeInOut' }}
          >
            {infiniteImages.map((img, i) => (
              <motion.div
                key={i}
                className="flex-shrink-0 rounded-xl md:rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 mx-4"
                style={{
                  width: `${100 / visibleCount}%`,
                  minWidth: `${100 / visibleCount}%`,
                  flex: '0 0 auto'
                }}
                whileHover={{ y: -4 }}
              >
                <div className="relative w-full h-32 sm:h-36 md:h-40">
                  <img
                    src={img}
                    alt={`Customer photo ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-all duration-300" />
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-1.5 py-0.5 rounded-md">
                    {(i % images.length) + 1}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center items-center mt-8 gap-1.5">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                index === currentIndex % images.length
                  ? 'bg-red-600 scale-125 w-3'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// Hide scrollbar
const styles = `
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
`;

if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}
