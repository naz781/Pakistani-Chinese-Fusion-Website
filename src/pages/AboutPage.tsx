import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Award, ChefHat, Heart, Users } from 'lucide-react';
import { Footer } from '../components/Footer';
import pic from "../public/assets/banners/aboutuspic.jpg";
import vid1 from "../public/assets/banners/aboutus.mp4";
 import mainbanner from "../public/assets/banners/mainbanner.jpeg";
export function AboutPage() {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 2000], [0, 400]);
  const backgroundOpacity = useTransform(scrollY, [0, 800], [0.6, 0.3]);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const values = [
    {
      icon: <ChefHat className="w-16 h-16 text-red-600" />,
      title: '5-Star Excellence',
      description: 'Our chefs bring years of experience from Pakistan\'s most prestigious hotels'
    },
    {
      icon: <Heart className="w-16 h-16 text-pink-600" />,
      title: 'Authentic Fusion',
      description: 'True Pakistani-Chinese fusion that honors both culinary traditions'
    },
    {
      icon: <Award className="w-16 h-16 text-amber-600" />,
      title: '100% Halal',
      description: 'Certified halal ingredients and preparation in every dish'
    },
    {
      icon: <Users className="w-16 h-16 text-blue-600" />,
      title: 'Community First',
      description: 'Serving New York\'s diverse community with warmth and respect'
    }
  ];
  return (
    <div className="relative min-h-screen">
      {/* Parallax Background */}
      <motion.div
        style={{
          y: backgroundY,
          opacity: backgroundOpacity,
        }}
        className="fixed inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-10"></div>
    
            <img
              src={mainbanner}
              alt="Background"
              className="w-full h-full object-cover"
            />
      </motion.div>
      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-20 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-7xl mb-6"
            >
              About KHAO
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-amber-300 max-w-3xl mx-auto"
            >
              Where Pakistani Hospitality Meets Chinese Culinary Artistry
            </motion.p>
          </div>
        </section>
        {/* Main Content */}
        <div className="bg-white">
          {/* Story Section */}
          <section ref={ref} className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8 }}
                  className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl"
                >
         {/* <video
  src={vid1}
  autoPlay
  loop
  muted
  playsInline
  className="w-full h-full object-cover"
/> */}
 <img src={pic}
          alt="Background"
          className="w-full h-full object-cover"/>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="space-y-6 text-lg text-gray-700 leading-relaxed"
                >
                  <h2 className="text-4xl mb-6">Our Story</h2>
                  <p>
                    KHAO was born from a vision to bring authentic halal Chinese cuisine to New York, 
                    infused with the rich flavors and traditions of Pakistan. Our name means "to eat" 
                    in Urdu, reflecting our simple yet profound mission: to serve extraordinary food.
                  </p>
                  <p>
                    Our culinary team consists of master chefs trained in Pakistan's finest 5-star 
                    hotels, where they perfected their craft over decades. They bring with them not 
                    just technical excellence, but a deep understanding of how to balance bold Pakistani 
                    spices with delicate Chinese cooking techniques.
                  </p>
                  <p>
                    Every dish at KHAO is 100% halal certified, prepared with ingredients sourced from 
                    trusted suppliers. We believe that exceptional food should be accessible to everyone, 
                    and we're proud to serve the Muslim community and food lovers across New York.
                  </p>
                </motion.div>
              </div>
            </div>
          </section>
          {/* Values Section */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-5xl text-center mb-16"
              >
                Our Core Values
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center p-8 bg-white rounded-xl shadow-lg"
                  >
                    <div className="flex justify-center mb-6">{value.icon}</div>
                    <h3 className="text-2xl mb-4">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
          {/* Stats Section */}
          <section className="py-20 bg-gradient-to-r from-red-900 via-red-800 to-red-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <p className="text-5xl mb-2">15+</p>
                  <p className="text-xl text-amber-300">Years Experience</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <p className="text-5xl mb-2">100%</p>
                  <p className="text-xl text-amber-300">Halal Certified</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <p className="text-5xl mb-2">5000+</p>
                  <p className="text-xl text-amber-300">Happy Customers</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <p className="text-5xl mb-2">5★</p>
                  <p className="text-xl text-amber-300">Hotel Training</p>
                </motion.div>
              </div>
            </div>
          </section>
          <Footer />
        </div>
      </div>
    </div>
  );
}
