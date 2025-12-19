import { MapPin } from 'lucide-react';

export function MapSection() {
  const address = "30 Nassau Blvd, Garden City, NY 11530";
  const encodedAddress = encodeURIComponent(address);
  
  // Fixed Google Maps URL
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
  
  // Clean embedded map without extra controls/text
  const iframeSrc = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=15&ie=UTF8&iwloc=&output=embed&hl=en&maptype=roadmap&controls=0`;

  return (
    <section className="bg-gray-50 py-12">
      <div className="w-full max-w-7xl mx-auto px-4">
        {/* MAP CONTAINER */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          {/* IFRAME MAP */}
          <iframe
            src={iframeSrc}
            width="100%"
            height="500"
            className="w-full h-[400px] md:h-[500px]"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Location"
          />
          
          {/* CLICKABLE OVERLAY */}
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 bg-black/20 hover:bg-black/30 flex flex-col items-center justify-center text-center transition-colors duration-300 group"
          >
            <div className="bg-white/90 backdrop-blur-sm px-8 py-6 rounded-xl shadow-2xl transform group-hover:scale-105 transition-transform duration-300">
              <MapPin size={48} className="text-red-600 mx-auto mb-3" />
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                {address}
              </h3>
              <p className="text-gray-600 font-medium">
                Click to open in Google Maps
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
