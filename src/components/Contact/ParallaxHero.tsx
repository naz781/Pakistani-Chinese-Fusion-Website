import aboutUsImage from "../../public/assets/banners/catering.jpg";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { MapSection } from "./MapSection";

export default function ParallaxHero() {
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=30%20Nassau%20Blvd,%20Garden%20City,%20NY%2011530";
  return (
    <>
      {/* HERO SECTION - TWO COLUMN GRID */}
      <section className="w-full mt-[60px] md:mt-[70px] lg:mt-[80px] bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* LEFT COLUMN - IMAGE CARD */}
         <div className="w-full">
              <div className="relative w-full h-[300px] md:h-[350px] lg:h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={aboutUsImage} 
                  alt="About Us" 
                  className="w-full h-full object-cover"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
            </div>
            {/* RIGHT COLUMN - TEXT CONTENT */}
            <div className="w-full space-y-10">
              
              {/* Heading */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl mb-8 font-extrabold text-red-600 font-serif leading-tight tracking-wide">
                HERE'S HOW YOU CAN REACH US
              </h1>

              {/* Contact Cards */}
              <div className="space-y-6">
                
                {/* Phone Card */}
                <div className="flex items-center gap-5 bg-white px-6 py-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
<a href="tel:+15164838888"><div className="flex items-center gap-2 justify-center w-16 h-16 bg-red-600 rounded-full flex-shrink-0">
                   <FaPhoneAlt className="text-white text-xl" />
                  </div>
                  </a>
                  <div>
               <a href="tel:+15164838888">     
                    <p className=" text-sm text-red-600 font-semibold mb-1">
                      Call Us Now
                    </p>
                    </a>
                    <p className="font-bold text-gray-900 text-xl">
                      +1 646 438 8888
                    </p>
                  </div>
                </div>

             
{/* Location Card */}
<a
  href={googleMapsUrl}
  target="_blank"
  rel="noopener noreferrer"
  className="block"
>
  <div className="flex items-center gap-5 bg-white px-6 py-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
    <div className="flex items-center justify-center w-16 h-16 bg-red-600 rounded-full flex-shrink-0">
      <FaMapMarkerAlt className="text-white text-xl" />
    </div>
    <div>
      <p className="text-sm text-red-600 font-semibold mb-4">
        Our Location
      </p>
      <p className="font-bold text-gray-900 text-lg leading-relaxed">
        30 Nassau Blvd, Garden City,<br />NY 11530
      </p>
    </div>
  </div>
</a>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* MAP SECTION AT BOTTOM */}
      <MapSection />
    </>
  );
}