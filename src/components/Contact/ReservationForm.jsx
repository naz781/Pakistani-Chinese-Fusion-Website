import { useState } from 'react';
import { motion } from 'motion/react';
import { Send } from 'lucide-react';

export function ReservationForm() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', date: '', time: '', guests: '2', message: ''
  });
  const whatsappNumber = '5164838888'; 
  const handleSubmit = e => {
    e.preventDefault();
    const message = `Reservation Request:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Date: ${formData.date}
Time: ${formData.time}
Number of Guests: ${formData.guests}
Special Requests: ${formData.message || 'None'}`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    setFormData({ name: '', email: '', phone: '', date: '', time: '', guests: '2', message: '' });
  };
  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="bg-gray-50 p-8 rounded-2xl shadow-lg"
    >
      <div className="p-4">Make a Reservation</div>
      <div className="space-y-5">
        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Full Name *"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-4 border rounded-xl"
          required
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email Address *"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-4 border rounded-xl"
          required
        />

        {/* Phone */}
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number *"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-4 border rounded-xl"
          required
        />

        {/* Date & Time */}
        <div className="grid grid-cols-2 gap-4">
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full p-4 border rounded-xl"
            required
          />
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="w-full p-4 border rounded-xl"
            required
          />
        </div>

        {/* Guests */}
        <select
          name="guests"
          value={formData.guests}
          onChange={handleChange}
          className="w-full p-4 border rounded-xl"
          required
        >
          {[1,2,3,4,5,6,7,8,9,10].map(n => (
            <option key={n} value={n}>{n} {n===1 ? 'Guest' : 'Guests'}</option>
          ))}
          <option value="10+">10+ Guests</option>
        </select>

        {/* Special Requests */}
        <textarea
          name="message"
          rows={4}
          placeholder="Special Requests (Optional)"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-4 border rounded-xl resize-none"
        />

        {/* Submit Button */}
        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-red-600 text-white py-4 rounded-xl flex items-center justify-center gap-2"
        >
          <Send size={20} /> Reserve via WhatsApp
        </motion.button>
      </div>
    </motion.form>
  );
}
