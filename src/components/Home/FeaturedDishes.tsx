import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { MenuImages } from '../MenuImages';

export function FeaturedDishes() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const dishes = [
    { name: 'Chicken Lo Mein', desc: 'Lo mein noodles with chicken', price: '$10.99 / $13.99', image: MenuImages.Chicken_Lo_Mein },
    { name: 'Beef Lo Mein', desc: 'Lo mein noodles with beef', price: '$10.99 / $13.99', image: MenuImages.Beef_Lo_Mein },
    { name: 'Sesame Chicken', desc: 'Crispy chicken glazed in sweet sesame sauce', price: '$13.99', image: MenuImages.Sesame_Chicken },
    { name: 'Chicken Corn Soup', desc: 'Chicken, sweet corn, smooth broth', price: '$5.99 / $7.99', image: MenuImages.Chicken_Corn_Soup },
    { name: 'Shrimp Broccoli', desc: 'Shrimp sautéed with broccoli', price: '$14.99', image: MenuImages.Shrimp_Broccoli },
    { name: 'Veg Fried Rice', desc: 'Vegetable fried rice', price: '$8.99 / $9.99', image: MenuImages.Veg_Fried_Rice }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  return (
    <section ref={ref} className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl mb-4">Featured Fusion Dishes</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Signature creations where Pakistani tradition meets Chinese innovation
          </p>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {dishes.map((dish, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            ><div className="relative h-64 overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full"
                >
                  <ImageWithFallback
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-full">
                  {dish.price}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl mb-3">{dish.name}</h3>
                <p className="text-gray-600 leading-relaxed">{dish.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
