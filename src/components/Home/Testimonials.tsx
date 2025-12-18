import { useState } from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Star, Quote } from 'lucide-react';
import ToobaHashmi from "../../public/assets/reviews/ToobaHashmi.png";
import shahedIslam from "../../public/assets/reviews/shahedIslam.png";
import harisalvi from "../../public/assets/reviews/harisalvi.png";
import ahad from "../../public/assets/reviews/ahad.png";
import AishaBadshah from "../../public/assets/reviews/AishaBadshah.png";
export function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [expandedIndexes, setExpandedIndexes] = useState([]); // Track expanded reviews

  const testimonials = [
    {
      name: 'Tooba Hashmi',
      location: 'New York, NY',
      rating: 5,
      text: "We had a fantastic dining experience at Khao Halal Chinese! Everything we ordered was absolutely delicious. The Fish Chilli was bursting with flavor, perfectly cooked and just the right amount of spice. The Hakka Noodles and the American Chicken Chopsuey was a standout – savory, crispy, flavorful, and cooked to perfection. To top it all off, the Mango Lassi was incredibly refreshing and creamy – one of the best we've had! The staff were genuinely friendly and attentive, making us feel welcome from the moment we walked in. Highly recommend this place if you’re looking for a flavorful meal and friendly service. We’ll definitely be coming back soon!",
      image: ToobaHashmi
    },
    {
      name: 'Shahed Islam',
      location: 'Garden City, NY',
      rating: 5,
      text: "Just tried out Khao Chinese in Garden City. They opened a few weeks ago near our place. It’s not fancy or fine dining — more like a chill spot to hang out and eat good food. Staff was super friendly and welcoming. We ordered Chicken wings, Masala fries, Hakka chicken, Crispy beef chili, Chicken fried rice, Tom yum soup. Everything was tasty. Honestly, it’s way better than most other halal Chinese places we’ve been to. Definitely gonna go back. Support your local spots!",
      image:shahedIslam
    },
    {
      name: 'Zoya Shahid',
      location: 'New York, NY',
      rating: 5,
      text: "Had an amazing experience at Khao Halal Chinese! The food was fresh, flavorful, and cooked to perfection. I ordered the sesame chicken and lollipop chicken, both were absolutely delicious. The mango lassi was super refreshing and paired perfectly with the meal. The staff was super friendly and welcoming, and the place was clean with a nice atmosphere. Can’t wait to come back and try more from the menu!",
      image: null
    },
    {
      name: 'Haris Alvi',
      location: 'New York, NY',
      rating: 5,
      text: "Khao Halal Chicken blew me away! From the moment I walked in, the aroma of freshly grilled spices set the tone for an amazing meal. I ordered the chicken chilli and was genuinely impressed — the chicken was perfectly seasoned, tender, and juicy. The rice was fragrant and fluffy, and the white and red sauces were the perfect combo of creamy and spicy. Portion sizes were generous and everything tasted fresh and authentic. Staff was friendly and made great recommendations. Must-try!",
      image: harisalvi
    },
    {
      name: 'Ahad',
      location: 'Long Island, NY',
      rating: 5,
      text: "Our stop en route from Boston to eastern Long Island was totally worth it. Delicious food, excellent service, piping hot and ready upon arrival. Ahmed is your guy! Tried the Hakka Shrimp, Sesame Chicken, Mixed Special Fried Rice, and Crispy Beef Chilli. Loved the Asian Fusion flavors, especially that rice was basmati instead of sticky! Finger licking good.",
      image: ahad
    },
    {
      name: 'Aisha Badsha',
      location: 'Garden City, NY',
      rating: 5,
      text: "Khao Chinese is honestly so good! The food always tastes fresh and full of flavor—everything I’ve tried has been amazing. The portions are great, the staff is super nice, and the service is fast. The place has a chill, cozy vibe that makes it perfect for grabbing dinner with friends or just a quick takeout night. Definitely one of my favorite spots for Chinese food!",
      image: AishaBadshah
    }
  ];

  const toggleReadMore = (index) => {
    setExpandedIndexes(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const truncateText = (text, maxLength = 250) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <section ref={ref} className="py-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl mb-4">What Our Guests Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it—hear from our satisfied customers
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => {
            const isExpanded = expandedIndexes.includes(index);
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 relative"
              >
                <Quote className="absolute top-6 right-6 text-red-100 w-12 h-12" />
                
                <div className="flex items-center gap-4 mb-6">
                 {testimonial.image ? (
  <img
    src={testimonial.image}
    alt={testimonial.name}
    className="w-16 h-16 rounded-full object-cover"
  />
) : (
  <div className="
    w-16 h-16
    rounded-full
    bg-red-600
    flex items-center justify-center
    text-white
    text-2xl
    font-semibold
  ">
    {testimonial.name.charAt(0)}
  </div>
)}

                  <div>
                    <p className="text-lg font-semibold">{testimonial.name}</p>
                    <p className="text-gray-500 text-sm">{testimonial.location}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed italic">
                  "{isExpanded ? testimonial.text : truncateText(testimonial.text)}"
                  {testimonial.text.length > 250 && (
                    <button
                      onClick={() => toggleReadMore(index)}
                      className="ml-2 text-red-600 font-semibold hover:underline"
                    >
                      {isExpanded ? ' Show Less' : ' Read More'}
                    </button>
                  )}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
