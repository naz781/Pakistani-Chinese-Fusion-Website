import { Phone, MapPin } from "lucide-react";
import pic1 from '../../public/assets/banners/aboutuspic1.jpg';

export default function ContactHero() {
  return (
    <section
      className="relative w-full h-[200vh] min-h-[900px] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${pic1.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/30" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold tracking-wide mb-8 text-black drop-shadow-lg">
          READY TO TASTE? HERE'S HOW YOU CAN REACH US:
        </h1>

        {/* Contact Info */}
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
          {/* Call */}
          <div className="flex items-center gap-3 backdrop-blur-sm bg-white/20 p-2.5 rounded-lg">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600">
              <Phone className="text-white" size={16} />
            </div>
            <div className="text-left">
              <p className="text-black text-xs md:text-sm">Call Us Now</p>
              <p className="text-black font-bold text-sm md:text-base">+5164838888</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-3 backdrop-blur-sm bg-white/20 p-2.5 rounded-lg">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600">
              <MapPin className="text-white" size={16} />
            </div>
            <div className="text-left">
              <p className="text-black text-xs md:text-sm">Our Location</p>
              <p className="text-black font-bold text-sm md:text-base max-w-xs">
                30 Nassau Blvd, Garden City, NY 11530
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
