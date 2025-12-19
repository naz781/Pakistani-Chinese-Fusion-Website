import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="h-screen flex items-center justify-center text-white relative overflow-hidden">
      {/* Static Hero Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1675691607355-24a2ac1e9ee1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwdGVtcGxlJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc2NTg1MDI2OXww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1 
            className="text-7xl md:text-9xl mb-6 tracking-wider"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            KHAO
          </motion.h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="space-y-4"
        >
          <p className="text-2xl md:text-3xl text-amber-300 tracking-wide">
            Authentic Halal Chinese
          </p>
          <p className="text-xl md:text-2xl text-gray-200">
          Chinese Fusion • New York
          </p>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mt-6">
           Experience the artistry of our elite culinary team, bringing the excellence of 5-star hotel kitchens to authentic halal Chinese fusion.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-12 flex gap-4 justify-center flex-wrap"
        >
          <a
            href="/menu"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg transition-all transform hover:scale-105"
          >
            View Menu
          </a>
        <a
href="tel:+15164838888"
  className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-lg transition-all transform hover:scale-105"
>
  Call Us Now
</a>

        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={scrollToContent}
        >
          <ChevronDown size={40} className="text-amber-300 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
