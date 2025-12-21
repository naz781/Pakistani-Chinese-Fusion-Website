import { motion, useScroll, useTransform } from 'motion/react';
import { HeroSection } from '../components/Contact/HeroSection';
import { ReservationForm } from '../components/Contact/ReservationForm';
import { MapSection } from '../components/Contact/MapSection';
import { Footer } from '../components/Footer';
import { ContactInfo } from '../components/Contact/ContactInfo';
import ParallaxHero from '../components/Contact/ParallaxHero';
  import mainbanner from "../public/assets/banners/mainbanner.jpeg"
export function ContactPage() {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 2000], [0, 400]);
  const backgroundOpacity = useTransform(scrollY, [0, 800], [0.6, 0.3]);

  return (
    <div className="relative min-h-screen">
      {/* Parallax Background */}
      <motion.div
        style={{ y: backgroundY, opacity: backgroundOpacity }}
        className="fixed inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-10"></div>
        <img
                  src={mainbanner}
                  alt="Background"
                  className="w-full h-full object-cover"
                />
      </motion.div>

      {/* Page Content */}
      <div className="relative z-10">
        <HeroSection />
        <ParallaxHero/>
        {/* <div className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactInfo />
            <ReservationForm />
          </div>
        </div>
        <MapSection /> */}
        <Footer />
      </div>
    </div>
  );
}
