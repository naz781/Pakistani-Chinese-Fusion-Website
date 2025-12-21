import { useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { X } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Footer } from '../components/Footer';

import mainbanner from "../public/assets/banners/mainbanner.jpeg";
import { MenuImages } from '../components/MenuImages';
import Sesame_Chicken from '../public/assets/menuitems/img90_Sesame_Chicken_Plate.jpg';
import Chicken_Manchurian from '../public/assets/menuitems/img18_Chicken_Manchurian.jpg';
import Chicken_W_Garlic from '../public/assets/menuitems/img19_Chicken_W_Garlic.jpg';
import Hakka_Chicken from '../public/assets/menuitems/img20_Hakka_Chicken.jpg';
import Chicken_Bamboo_Shoot from '../public/assets/menuitems/img21_Chicken_Bamboo_Shoot.jpg';
import Chicken_Chilli from '../public/assets/menuitems/img22_Chicken_Chilli.jpg';
import Chicken_w_Mushrooms from '../public/assets/menuitems/img23_Chicken_w_mashrooms.jpg';
import Black_Pepper_Chicken from '../public/assets/menuitems/img24_Black_Pepper_Beef.jpg'; // check if correct
import Hunan_Chicken from '../public/assets/menuitems/img25_hunan_chicken.jpg';

import Chicken_Corn_Soup from '../public/assets/menuitems/img26_Chicken_Corn_Soup.jpg';
import Hot_Sour_Soup from '../public/assets/menuitems/img27_Hot_Sour_Soup.jpg';
import Egg_Drop_Soup from '../public/assets/menuitems/img28_Egg_Drop_Soup.jpg';
import Wonton_Soup from '../public/assets/menuitems/img29_Wonton_Soup.jpg';
import Tom_Yum_Soup from '../public/assets/menuitems/img30_Tom_Yum_Soup.jpg';

import Beef_Broccoli from '../public/assets/menuitems/img31_Beef_Broccoli.jpg';
import Sesame_Beef from '../public/assets/menuitems/img32_Sesame_Beef.jpg';
import Hakka_Beef from '../public/assets/menuitems/img33_Hakka_Beef.jpg';
import Beef_w_Garlic_Sauce from '../public/assets/menuitems/img34_Beef_w_Garlic_Sauce.jpg';
import Beef_w_Mushrooms from '../public/assets/menuitems/img35_Beef_w_Mushrooms.jpg';
import Beef_w_Scallion from '../public/assets/menuitems/img36_Beef_w_Scallion.jpg';
import Beef_Bamboo_Shoot from '../public/assets/menuitems/img37_Beef_Bamboo_Shoot.jpg';
import Crispy_Beef_Chilli from '../public/assets/menuitems/img38_Crispy_Beef_Chilli.jpg';
import Hunan_Beef from '../public/assets/menuitems/img39_Hunan_Beef.jpg';
import Black_Pepper_Beef from '../public/assets/menuitems/img24_Black_Pepper_Beef.jpg';

import Shrimp_Broccoli from '../public/assets/menuitems/img40_Shrimp_Broccoli.jpg';
import Sesame_Shrimp from '../public/assets/menuitems/img41_Sesame_Shrimp.jpg';
import Shrimp_w_Garlic_Sauce from '../public/assets/menuitems/img42_Shrimp_w_Garlic_Sauce.jpg';
import Hakka_Shrimp from '../public/assets/menuitems/img43_Hakka_Shrimp.jpg';
import Shrimp_Bamboo_Shoot from '../public/assets/menuitems/img44_Shrimp_Bamboo_shoot.jpg';
import Shrimp_Chilli from '../public/assets/menuitems/img45_Shrimp_Chilli.jpg';
import Shrimp_w_Mushrooms from '../public/assets/menuitems/img46_Shrimp_w_Mushrooms.jpg';
import Shrimp_Manchurian from '../public/assets/menuitems/img47_shrimp_manchurian.jpg';
import Fish_Chilli from '../public/assets/menuitems/img50_Fish_Chilli.jpg';
import Fish_Fry_Whole from '../public/assets/menuitems/img51_Fish_Fry_Whole.jpg';

import Chicken_Lo_Mein from '../public/assets/menuitems/img52_Chicken_Lo_Mein.jpg';
import Beef_Lo_Mein from '../public/assets/menuitems/img53_Beef_Lo_Mein.jpg';
import Shrimp_Lo_Mein from '../public/assets/menuitems/img54_Shrimp_Lo_Mein.jpg';
import Tofu_Lo_Mein from '../public/assets/menuitems/img55_Tofu_Lo_Mein.jpg';
import Vegetable_Lo_Mein from '../public/assets/menuitems/img56_Vegetable_Lo_Mein.jpg';
import Singapore_Noodles from '../public/assets/menuitems/img58_Singapore_Noodles.jpg';

import Egg_Roll from '../public/assets/menuitems/img13_Lollipop_Chicken.jpg';
import Chicken_Roll from '../public/assets/menuitems/img88_Chicken_Roll.webp';
import Chicken_Wonton from '../public/assets/menuitems/img113_chicken_wontons_thumb_230x300.jpg';
import Chicken_Wings from '../public/assets/menuitems/img128_Chicken_Wings_300x300.jpg';
import Masala_Fries from '../public/assets/menuitems/img137_Masala_Fries.jpg';

import Lassi from '../public/assets/menuitems/img62_Mango_Lassi.jpg';
import Chai_Tea from '../public/assets/menuitems/img63_Chai_Tea.jpg';
import Green_Tea from '../public/assets/menuitems/img64_Green_Tea.jpg';
import Can_Soda from '../public/assets/menuitems/img67_Bottled_JuiceSoda.jpg'; // maybe replace with soft drink image
import Fruit_Smoothie from '../public/assets/menuitems/img68_Fruit_Smoothie.jpg';

import Broccoli_w_Garlic_Sauce from '../public/assets/menuitems/img69_Broccoli_w_Garlic_Sauce.jpg';
import Sesame_Tofu from '../public/assets/menuitems/img70_Sesame_Tofu.jpg';
import Vegetable_Tofu from '../public/assets/menuitems/img71_Vegetable_Tofu.jpg';
import Hakka_Vegetable from '../public/assets/menuitems/img72_Hakka_Vegetable.jpg';
import Paneer_Chilli from '../public/assets/menuitems/img73_Paneer_Chilli.jpg';
import Tofu_Chilli from '../public/assets/menuitems/img74_Tofu_Chilli.jpg';

import Chicken_Fried_Rice from '../public/assets/menuitems/img75_Chicken_Fried_Rice.jpg';
import Beef_Fried_Rice from '../public/assets/menuitems/img76_Beef_Fried_Rice.jpg';
import Shrimp_Fried_Rice from '../public/assets/menuitems/img77_Shrimp_Fried_Rice.jpg';
import Veg_Fried_Rice from '../public/assets/menuitems/img78_Veg_Fried_Rice.jpg';
import Mixed_Special_Fried_Rice from '../public/assets/menuitems/img79_Mixed_Special_Fried_Rice.jpg';
import White_Rice_pint from '../public/assets/menuitems/img80_White_Rice_pint.jpg';
export function GalleryPage() {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 2000], [0, 400]);
  const backgroundOpacity = useTransform(scrollY, [0, 800], [0.6, 0.3]);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const galleryImages = [
  // 🐔 Chicken
  { url: Sesame_Chicken, title: 'Sesame Chicken', category: 'Chicken' },
  { url: Chicken_Manchurian, title: 'Chicken Manchurian', category: 'Chicken' },
  { url: Chicken_W_Garlic, title: 'Chicken w/ Garlic', category: 'Chicken' },
  { url: Hakka_Chicken, title: 'Hakka Chicken', category: 'Chicken' },
  { url: Chicken_Bamboo_Shoot, title: 'Chicken Bamboo Shoot', category: 'Chicken' },
  { url: Chicken_Chilli, title: 'Chicken Chilli', category: 'Chicken' },
  { url: Chicken_w_Mushrooms, title: 'Chicken w/ Mushrooms', category: 'Chicken' },
  { url: Black_Pepper_Chicken, title: 'Black Pepper Chicken', category: 'Chicken' },
  { url: Hunan_Chicken, title: 'Hunan Chicken', category: 'Chicken' },

  // 🍲 Soups
  { url: Chicken_Corn_Soup, title: 'Chicken Corn Soup', category: 'Soups' },
  { url: Hot_Sour_Soup, title: 'Hot & Sour Soup', category: 'Soups' },
  { url: Egg_Drop_Soup, title: 'Egg Drop Soup', category: 'Soups' },
  { url: Wonton_Soup, title: 'Wonton Soup', category: 'Soups' },
  { url: Tom_Yum_Soup, title: 'Tom Yum Soup', category: 'Soups' },

  // 🥩 Beef
  { url: Beef_Broccoli, title: 'Beef Broccoli', category: 'Beef' },
  { url: Sesame_Beef, title: 'Sesame Beef', category: 'Beef' },
  { url: Hakka_Beef, title: 'Hakka Beef', category: 'Beef' },
  { url: Beef_w_Garlic_Sauce, title: 'Beef w/ Garlic Sauce', category: 'Beef' },
  { url: Beef_w_Mushrooms, title: 'Beef w/ Mushrooms', category: 'Beef' },
  { url: Beef_w_Scallion, title: 'Beef w/ Scallion', category: 'Beef' },
  { url: Beef_Bamboo_Shoot, title: 'Beef Bamboo Shoot', category: 'Beef' },
  { url: Crispy_Beef_Chilli, title: 'Crispy Beef Chilli', category: 'Beef' },
  { url: Hunan_Beef, title: 'Hunan Beef', category: 'Beef' },
  { url: Black_Pepper_Beef, title: 'Black Pepper Beef', category: 'Beef' },

  // 🍤 Seafood
  { url: Shrimp_Broccoli, title: 'Shrimp Broccoli', category: 'Seafood' },
  { url: Sesame_Shrimp, title: 'Sesame Shrimp', category: 'Seafood' },
  { url: Shrimp_w_Garlic_Sauce, title: 'Shrimp w/ Garlic Sauce', category: 'Seafood' },
  { url: Hakka_Shrimp, title: 'Hakka Shrimp', category: 'Seafood' },
  { url: Shrimp_Bamboo_Shoot, title: 'Shrimp Bamboo Shoot', category: 'Seafood' },
  { url: Shrimp_Chilli, title: 'Shrimp Chilli', category: 'Seafood' },
  { url: Shrimp_w_Mushrooms, title: 'Shrimp w/ Mushrooms', category: 'Seafood' },
  { url: Shrimp_Manchurian, title: 'Shrimp Manchurian', category: 'Seafood' },
  { url: Fish_Chilli, title: 'Fish Chilli', category: 'Seafood' },
  { url: Fish_Fry_Whole, title: 'Whole Fried Fish', category: 'Seafood' },

  // 🍜 Noodles
  { url: Chicken_Lo_Mein, title: 'Chicken Lo Mein', category: 'Noodles' },
  { url: Beef_Lo_Mein, title: 'Beef Lo Mein', category: 'Noodles' },
  { url: Shrimp_Lo_Mein, title: 'Shrimp Lo Mein', category: 'Noodles' },
  { url: Tofu_Lo_Mein, title: 'Tofu Lo Mein', category: 'Noodles' },
  { url: Vegetable_Lo_Mein, title: 'Vegetable Lo Mein', category: 'Noodles' },
  { url: Singapore_Noodles, title: 'Singapore Noodles', category: 'Noodles' },

  // 🍚 Rice
  { url: Chicken_Fried_Rice, title: 'Chicken Fried Rice', category: 'Rice' },
  { url: Beef_Fried_Rice, title: 'Beef Fried Rice', category: 'Rice' },
  { url: Shrimp_Fried_Rice, title: 'Shrimp Fried Rice', category: 'Rice' },
  { url: Veg_Fried_Rice, title: 'Vegetable Fried Rice', category: 'Rice' },
  { url: Mixed_Special_Fried_Rice, title: 'Mixed Special Fried Rice', category: 'Rice' },
  { url: White_Rice_pint, title: 'White Rice', category: 'Rice' },

  // 🥗 Vegetarian
  { url: Broccoli_w_Garlic_Sauce, title: 'Broccoli w/ Garlic Sauce', category: 'Vegetarian' },
  { url: Sesame_Tofu, title: 'Sesame Tofu', category: 'Vegetarian' },
  { url: Vegetable_Tofu, title: 'Vegetable Tofu', category: 'Vegetarian' },
  { url: Hakka_Vegetable, title: 'Hakka Vegetable', category: 'Vegetarian' },
  { url: Paneer_Chilli, title: 'Paneer Chilli', category: 'Vegetarian' },
  { url: Tofu_Chilli, title: 'Tofu Chilli', category: 'Vegetarian' },

  // 🍟 Sides & Drinks
  { url: Egg_Roll, title: 'Egg Roll', category: 'Sides' },
  { url: Chicken_Roll, title: 'Chicken Roll', category: 'Sides' },
  { url: Chicken_Wonton, title: 'Chicken Wonton', category: 'Sides' },
  { url: Chicken_Wings, title: 'Chicken Wings', category: 'Sides' },
  { url: Masala_Fries, title: 'Masala Fries', category: 'Sides' },

  { url: Lassi, title: 'Mango Lassi', category: 'Drinks' },
  { url: Chai_Tea, title: 'Chai Tea', category: 'Drinks' },
  { url: Green_Tea, title: 'Green Tea', category: 'Drinks' },
  { url: Can_Soda, title: 'Soft Drink', category: 'Drinks' },
  { url: Fruit_Smoothie, title: 'Fruit Smoothie', category: 'Drinks' },
];

  const categories = ['All', 'Dishes', 'Kitchen', 'Ambiance'];

  const filteredImages = activeFilter === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

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
              Gallery
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-amber-300 max-w-3xl mx-auto"
            >
              A Visual Journey Through Our Culinary Creations
            </motion.p>
          </div>
        </section>

        {/* Gallery Content */}
        <div className="bg-white">
          {/* Filter Buttons */}
          {/* <section className="py-8 sticky top-20 bg-white shadow-md z-40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    onClick={() => setActiveFilter(category)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-6 py-2 rounded-lg transition-all ${
                      activeFilter === category
                        ? 'bg-red-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>
            </div>
          </section> */}

          {/* Gallery Grid */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                key={activeFilter}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
              >
                {filteredImages.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-2xl transition-all cursor-pointer aspect-square"
                    onClick={() => setSelectedImage(image.url)}
                  >
                    <ImageWithFallback
                      src={image.url}
                      alt={image.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                      <div className="p-4 text-white w-full">
                        <h3 className="text-lg mb-1">{image.title}</h3>
                        <p className="text-sm text-amber-300">{image.category}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Instagram CTA */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-4xl mx-auto text-center px-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl mb-4"
              >
                Share Your Experience
              </motion.h2>
              <p className="text-gray-600 mb-6">
                Tag us @khao.nyc on Instagram to be featured in our gallery!
              </p>
              <motion.a
                href="https://www.instagram.com/khaohalalchinese/"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg transition-colors"
              >
                Follow Us on Instagram
              </motion.a>
            </div>
          </section>

          <Footer />
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-amber-300 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <motion.img
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            src={selectedImage}
            alt="Full size"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </div>
  );
}
