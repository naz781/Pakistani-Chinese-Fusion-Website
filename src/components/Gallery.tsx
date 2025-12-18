import { useState } from 'react';
import { X } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import Chicken_Broccoli from '../public/assets/menuitems/img16_Chicken_Broccoli.jpg';
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
export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      url: 'https://images.unsplash.com/photo-1666190092689-e3968aa0c32c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWtpc3RhbmklMjBmb29kJTIwYmlyeWFuaXxlbnwxfHx8fDE3NjU4OTU3NDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Szechuan Biryani',
      category: 'Fusion'
    },
    {
      url: 'https://images.unsplash.com/photo-1594012009577-ba2826f91b4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwbm9vZGxlcyUyMHdva3xlbnwxfHx8fDE3NjU4OTU3NDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Stir-Fried Noodles',
      category: 'Chinese'
    },
    {
      url: 'https://images.unsplash.com/photo-1512314775505-50662bcee277?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGljeSUyMGFzaWFuJTIwZm9vZHxlbnwxfHx8fDE3NjU4OTU3NDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Spicy Chilli Karahi',
      category: 'Fusion'
    },
    {
      url: 'https://images.unsplash.com/photo-1476240070072-d734bba9f6c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdW1wbGluZ3MlMjBwbGF0ZXxlbnwxfHx8fDE3NjU3ODExMjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Handmade Dumplings',
      category: 'Chinese'
    },
    {
      url: 'https://images.unsplash.com/photo-1716816211590-c15a328a5ff0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXJyeSUyMHNwaWNlc3xlbnwxfHx8fDE3NjU4OTU3NDl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Aromatic Spices',
      category: 'Pakistani'
    },
    {
      url: 'https://images.unsplash.com/photo-1653724618366-abd0bde22c85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMHN0cmVldCUyMGZvb2R8ZW58MXx8fHwxNzY1ODQ3NTA4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Street Food Style',
      category: 'Fusion'
    },
    {
      url: 'https://images.unsplash.com/photo-1557105584-b2d9b0b266f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmlsbGVkJTIwa2ViYWJ8ZW58MXx8fHwxNzY1ODk1NzQ5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Grilled Kebabs',
      category: 'Pakistani'
    },
    {
      url: 'https://images.unsplash.com/photo-1739248047812-cf898eb58786?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwaW50ZXJpb3IlMjBkaW5pbmd8ZW58MXx8fHwxNzY1Nzk4NDk1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Restaurant Ambiance',
      category: 'Interior'
    },
    {
      url: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=600&fit=crop',
      title: 'Fine Dining Experience',
      category: 'Interior'
    },
    {
      url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop',
      title: 'Fresh Ingredients',
      category: 'Behind the Scenes'
    },
    {
      url: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&h=600&fit=crop',
      title: 'Kitchen Action',
      category: 'Behind the Scenes'
    },
    {
      url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop',
      title: 'Table Setting',
      category: 'Interior'
    }
  ];

  const categories = ['All', 'Fusion', 'Pakistani', 'Chinese', 'Interior', 'Behind the Scenes'];
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredImages = activeFilter === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-emerald-900 via-red-900 to-amber-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl mb-4">Gallery</h1>
          <p className="text-xl text-amber-200">A visual feast of our culinary creations</p>
        </div>
      </section>

      Filter Buttons
      <section className="py-8 bg-white sticky top-20 z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  activeFilter === category
                    ? 'bg-gradient-to-r from-emerald-600 to-amber-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer aspect-square"
                onClick={() => setSelectedImage(image.url)}
              >
                <ImageWithFallback
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <div className="p-4 text-white w-full">
                    <h3 className="text-lg mb-1">{image.title}</h3>
                    <p className="text-sm text-amber-300">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-amber-300 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <img
            src={selectedImage}
            alt="Full size"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Instagram CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl mb-4">Share Your Experience</h2>
          <p className="text-gray-600 mb-6">
            Tag us @silkandspice on Instagram to be featured in our gallery!
          </p>
          <a
            href="#"
            className="inline-block bg-gradient-to-r from-emerald-600 to-amber-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-shadow"
          >
            Follow Us on Instagram
          </a>
        </div>
      </section>
    </div>
  );
}
