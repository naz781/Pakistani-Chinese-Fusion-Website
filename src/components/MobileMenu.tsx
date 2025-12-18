import { motion } from 'motion/react';
import { menuItems } from '../components/MenuData';

export function MobileMenu() {
  const allItems = Object.values(menuItems).flat();

  return (
    <div className="md:hidden grid grid-cols-1 gap-6">
      {allItems.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.02 }}
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl"
        >
          <div className="flex gap-4">
            {item.image && (
              <img src={item.image} alt={item.name} className="w-24 h-24 rounded-lg object-cover" />
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
    </div>
  );
}
