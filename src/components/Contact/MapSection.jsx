import { MapPin } from 'lucide-react';

export function MapSection() {
  const address = "30 Nassau Blvd, Garden City, NY 11530";
  const encodedAddress = encodeURIComponent(address);

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
  const iframeSrc = `https://maps.google.com/maps?q=${encodedAddress}&output=embed`;

  return (
    <section className="bg-gray-50">
      <div className="w-full">

        {/* <h2 className="text-4xl font-bold text-center mb-12">
          Find Us
        </h2> */}

        {/* CLICKABLE MAP */}
        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative block rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
        >
          {/* MAP */}
          <iframe
            src={iframeSrc}
            width="100%"
            height="500"
            className="w-full h-[500px]"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center pointer-events-none">
            <MapPin size={64} className="text-white drop-shadow-lg mb-4" />
            <h3 className="text-2xl font-semibold text-white drop-shadow-lg">
              {address}
            </h3>
            <p className="text-white/90 mt-2">
              Click to open in Google Maps
            </p>
          </div>
        </a>

      </div>
    </section>
  );
}
