import aboutUsImage from "../../public/assets/banners/aboutuspic1.jpg";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { MapSection } from "./MapSection";
export default function ParallaxHero() {
  return (
    <>
      {/* HERO SECTION */}
      <section
        className="relative py-20 w-full h-[400px] md:h-[350px] lg:h-[400px] flex items-start justify-center mt-[60px] md:mt-[70px] lg:mt-[80px]"
        style={{
          backgroundImage: `url(${aboutUsImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Text Content */}
        <div className="ml-16  md:mt-0 relative z-10 text-center px-4 md:px-8 flex flex-col items-center justify-start h-full gap-6">
        <h1 className=" text-2xl md:text-4xl lg:text-5xl font-extrabold text-red-600 font-serif leading-snug tracking-wide mb-16 mx-16 drop-shadow-md">
          HERE’S HOW YOU CAN REACH US
</h1>

{/* Contact Info */}
<div className="ml-16 flex flex-col md:flex-row gap-6 justify-center items-center mt-8 py-12" >
  {/* Phone */}
  <div className="flex items-center gap-3">
    {/* Icon in red circle */}
    <div className="flex items-center justify-center w-12 h-12 bg-red-600 rounded-full">
      <FaPhoneAlt className="text-white text-lg md:text-xl" />
    </div>
    {/* Text */}
    <div className="-ml-4 text-left">
      <p className="text-sm md:text-base text-red-600 font-semibold">
        Call Us Now
      </p>
      <p className="font-semibold text-black text-sm md:text-base">
        +1 646 438 8888
      </p>
    </div>
  </div>

  {/* Location */}
  <div className="flex items-center gap-3">
    {/* Icon in red circle */}
    <div className="flex items-center justify-center w-12 h-12 bg-red-600 rounded-full">
      <FaMapMarkerAlt className="text-white text-lg md:text-xl" />
    </div>
    {/* Text */}
    <div className="text-left">
      <p className="text-sm md:text-base text-red-600 font-semibold">
        Our Location
      </p>
      <p className="font-semibold text-black text-sm md:text-base">
        30 Nassau Blvd,
      <br/> Garden City, NY 11530
      </p>
    </div>
  </div>
</div>

          </div>
      </section>
      {/* MAP SECTION */}
        <MapSection />
     
    </>
  );
}
