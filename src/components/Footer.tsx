import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-red-950 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl mb-4 tracking-wider">KHAO</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Authentic Halal Chinese with Pakistani flair, crafted by 5-star hotel chefs in the heart of New York.
            </p>
            <div className="flex gap-4">
              <motion.a
                href="https://www.instagram.com/khaohalalchinese/"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="text-gray-300 hover:text-red-400 transition-colors"
              >
                <Instagram size={24} />
              </motion.a>
              <motion.a
                href="https://www.facebook.com/profile.php?id=61575022847569&"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="text-gray-300 hover:text-red-400 transition-colors"
              >
                <Facebook size={24} />
              </motion.a>
              <motion.a
                href="https://www.facebook.com/people/Khao-Halal-Chinese/61575022847569/"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="text-gray-300 hover:text-red-400 transition-colors"
              >
                <Twitter size={24} />
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  {/* 123 Fusion Avenue<br /> */}
                  30 Nassau Blvd, Garden City, NY 11530
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-red-400 flex-shrink-0" />
                <span className="text-gray-300">(516) 483-8888</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-red-400 flex-shrink-0" />
                <span className="text-gray-300">Khaochineseny@gmail.com</span>
              </li>
            </ul>
          </motion.div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl mb-6">Opening Hours</h4>
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" />
              <div className="text-gray-300 space-y-2">
                <p> Monday to Sunday</p>
                
                <p className="text-sm">12:00 to 10:00</p>
                <a href="/contact" className="text-gray-300 hover:text-red-400 transition-colors"><p className="mt-3">Call for Catering Services</p></a>
                
                <p className="text-sb mt-3">Walk-ins Welcome</p>
               
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="/menu" className="text-gray-300 hover:text-red-400 transition-colors">
                  Our Menu
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-red-400 transition-colors">
                  Reservations
                </a>
              </li>
              <li>
                {/* <a href="#catering" className="text-gray-300 hover:text-red-400 transition-colors">
                  Catering Services
                </a> */}
              </li>
              <li>
                <a href="/about" className="text-gray-300 hover:text-red-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#halal" className="text-gray-300 hover:text-red-400 transition-colors">
                  Halal Certification
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; 2025-2026 KHAO Restaurant. All rights reserved.
            </p> 
            <div className="flex gap-6 text-sm">
              <a href="#privacy" className="text-gray-400 hover:text-red-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-gray-400 hover:text-red-400 transition-colors">
                Terms of Service
              </a>
              <a href="#accessibility" className="text-gray-400 hover:text-red-400 transition-colors">
                Accessibility
              </a>
            </div>
          </div>
          <p className="text-center text-gray-500 text-xs mt-6">
            100% Halal Certified • Proudly serving New York's diverse community
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
