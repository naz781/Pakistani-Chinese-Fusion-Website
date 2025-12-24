import { useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { menuItems, categories} from "../components/MenuData"
import { Footer } from '../components/Footer';
export function MenuPage() {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 600], [0, 150]);

  const backgroundOpacity = useTransform(scrollY, [0, 800], [0.6, 0.3]);
  const [activeCategory, setActiveCategory] = useState('soup');
  const [sidebarOpen, setSidebarOpen] = useState(false);
return (
  <div className="relative min-h-[200vh] overflow-hidden">
    {/* Parallax Background */}
    <motion.div
      style={{ y: backgroundY, opacity: backgroundOpacity }}
      className="fixed inset-0 z-0"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-10" />
   
            <img
              src="/assets/banners/mainbanner.jpeg"
              alt="Background"
              className="w-full h-full object-cover"
            />
    </motion.div>

    {/* Content */}
    <div className="relative z-10">
      {/* Hero */}
      <section className="pt-32 pb-20 text-white text-center">
        <h1 className="text-6xl md:text-7xl mb-6">Our Menu</h1>
        <p className="text-xl md:text-2xl text-amber-300">
          100% Halal • Authentic Fusion • Made with Love
        </p>
      </section>

      {/* Menu Content */}
      <div className="bg-white">
        {/* Categories */}
        <div className="sticky top-20 bg-white shadow-md z-40">
          <div className="max-w-7xl mx-auto px-4 py-6">
  {/* MOBILE CATEGORIES - DISPLAY ALL IN ORDER */}
<div className="md:hidden px-4 py-6">
  {['soup', 'appetizers', 'chicken', 'beef', 'seafood', 'noodles', 'vegetable', 'rice', 'drinks'].map((catId) => {
    const category = categories.find((c) => c.id === catId);
    if (!category) return null;
    return (
      <div key={category.id} className="mb-8">
        <h2 className="text-xl font-semibold mb-4">{category.name}</h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 gap-6"
        >
          {menuItems[category.id]?.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl flex gap-4"
            >
              {item.image && (
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 rounded-lg object-cover"
                />
              )}
              <div className="flex-1">
                <div className="flex justify-between mb-1">
                  <h3 className="text-lg font-medium">{item.name}</h3>
                  <span className="text-red-600">{item.price}</span>
                </div>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    );
  })}
</div>
            {/* DESKTOP BUBBLES */}
            <div className="hidden md:flex overflow-x-auto gap-4">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 rounded-lg transition-all whitespace-nowrap ${
                    activeCategory === category.id
                      ? 'bg-red-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
        {/* Menu Items */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {menuItems[activeCategory].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl"
                >
                  <div className="flex gap-4">
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-24 rounded-lg object-cover"
                      />
                    )}
                    <div className="flex-1">
                      <div className="flex justify-between mb-2">
                        <h3 className="text-xl">{item.name}</h3>
                        <span className="text-red-600">{item.price}</span>
                      </div>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Note */}
        <section className="py-12 bg-amber-50 text-center">
          <p className="text-gray-700">
            <strong>Note:</strong> All dishes are 100% halal certified.
          </p>
        </section>

        <Footer />
      </div>
    </div>
  </div>
);
}


