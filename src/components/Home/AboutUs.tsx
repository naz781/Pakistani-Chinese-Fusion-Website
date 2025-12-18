import { useInView } from 'react-intersection-observer';
import { motion } from 'motion/react';
import vid1 from "../../public/assets/banners/aboutus.mp4";

export function AboutUs() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <div className="min-h-screen bg-white">
      {/* Story Section with Video */}
      <section ref={ref} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left - Video */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <video
                src={vid1}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover rounded-2xl"
              />
            </motion.div>
            {/* Right - Text */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 text-lg text-gray-700 leading-relaxed"
            >
              {/* Small Red Heading */}
              <h3 className="text-red-600 text-xl font-semibold uppercase">About Khao Halal Chinese</h3>
              {/* Big Main Heading */}
              <h2 className="text-5xl font-bold mb-6">Crafting Authentic Halal Chinese Flavours</h2>
              <p>
                At KHAO Halal Chinese, we believe everyone should enjoy authentic-style Chinese food without compromise.
              </p>
              <p>
                That’s why we offer a 100% Halal menu — prepared with halal-certified meats and ingredients, 
                and cooked in a clean, respectful environment.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
