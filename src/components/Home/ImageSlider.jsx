import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  "/assets/review_pictures/pic1.jpg",
  "/assets/review_pictures/pic2.jpg",
  "/assets/review_pictures/pic3.jpg",
  "/assets/review_pictures/pic4.jpg",
  "/assets/review_pictures/pic5.jpg",
  "/assets/review_pictures/pic6.jpg",
  "/assets/review_pictures/pic7.jpg",
  "/assets/review_pictures/pic8.jpg",
  "/assets/review_pictures/pic11.jpg",
  "/assets/review_pictures/pic12.jpg",
  "/assets/review_pictures/pic13.jpg",
  "/assets/review_pictures/pic14.jpg",
];

export function ImageSlider({ interval = 4000 }) {
  const [currentIndex, setCurrentIndex] = useState(images.length);
  const [visibleCount, setVisibleCount] = useState(5);
  const [shouldAnimate, setShouldAnimate] = useState(true);

  /* Responsive visible count */
  useEffect(() => {
    const update = () => {
      setVisibleCount(window.innerWidth < 768 ? 4 : 5);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  /* Infinite buffer */
  const extendedImages = [...images, ...images, ...images];

  /* Controls */
  const nextSlide = () => setCurrentIndex((i) => i + 1);
  const prevSlide = () => setCurrentIndex((i) => i - 1);

  /* Autoplay */
  useEffect(() => {
    const id = setInterval(nextSlide, interval);
    return () => clearInterval(id);
  }, [interval]);

  /* Seamless reset */
  useEffect(() => {
    if (currentIndex === images.length * 2) {
      setShouldAnimate(false);
      setCurrentIndex(images.length);
    }

    if (currentIndex === images.length - 1) {
      setShouldAnimate(false);
      setCurrentIndex(images.length * 2 - 1);
    }
  }, [currentIndex]);

  /* Re-enable animation after instant jump */
  useEffect(() => {
    if (!shouldAnimate) {
      requestAnimationFrame(() => setShouldAnimate(true));
    }
  }, [shouldAnimate]);

  const actualIndex = ((currentIndex % images.length) + images.length) % images.length;

  return (
    <div className="w-full bg-gradient-to-b from-gray-50 to-white py-10">
      <div className="max-w-7xl mx-auto px-8 sm:px-6">

        {/* Header */}
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
              hover:shadow-xl hover:scale-110 transition-all"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-4 mt-12 -translate-y-1/2 z-10
              bg-white p-2 md:p-3 rounded-full shadow-lg
              hover:shadow-xl hover:scale-110 transition-all"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Slider */}
          <motion.div
            className="flex pr-24"
            animate={{ x: `-${(100 / visibleCount) * currentIndex}%` }}
            transition={
              shouldAnimate
                ? { duration: 0.5, ease: 'easeInOut' }
                : { duration: 0 }
            }
          >
            {extendedImages.map((img, i) => (
              <motion.div
                key={i}
                className="flex-shrink-0 mx-4 rounded-xl overflow-hidden shadow-md hover:shadow-lg"
                style={{
                  width: `${100 / visibleCount}%`,
                  minWidth: `${100 / visibleCount}%`,
                }}
                whileHover={{ y: -4 }}
              >
                <div className="relative h-32 sm:h-36 md:h-40">
                  <img
                    src={img}
                    alt={`Customer ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-8 gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(images.length + i)}
              className={`h-2 rounded-full transition-all ${
                i === actualIndex
                  ? 'bg-red-600 w-4'
                  : 'bg-gray-300 w-2'
              }`}
            />
          ))}
        </div>

      </div>
    </div>
  );
}
