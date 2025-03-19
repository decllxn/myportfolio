import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import "../styles/Testimonials.css"

// Testimonials Data
const testimonials = [
  {
    name: "Kenneth Ngaine",
    role: "CEO @ Beisawa",
    quote: "Declan built a robust supermarket website for my business using Django and React. Highly recommend him!",
    rating: 5,
  },
  {
    name: "Blessings Malik",
    role: "Backend Mentor @ ALX Africa",
    quote: "Declan was one of my best students. His deep understanding of Django & Django Rest Framework is impressive!",
    rating: 5,
  },
  {
    name: "Michelle Muthoni",
    role: "Classmate, Electronics & Computer Engineering",
    quote: "A brilliant developer with a keen eye for backend optimization. It’s always great working with him!",
    rating: 4,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-black text-white relative">
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        {/* Section Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12 neon-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Testimonials
        </motion.h2>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 15px rgba(0, 255, 255, 0.8)",
              }}
              className="relative bg-gray-900 p-6 rounded-xl shadow-lg transform transition-all border border-cyan-500 neon-border"
            >
              {/* Glitching Quotes */}
              <FaQuoteLeft className="text-cyan-400 text-3xl absolute top-5 left-5 glitch-effect" />
              <FaQuoteRight className="text-cyan-400 text-3xl absolute bottom-5 right-5 glitch-effect" />

              {/* Name & Role */}
              <h3 className="text-xl font-semibold text-cyan-400 cyber-font">
                {testimonial.name}
              </h3>
              <p className="text-gray-400 text-sm">{testimonial.role}</p>

              {/* Testimonial Quote */}
              <p className="text-gray-300 italic my-4">"{testimonial.quote}"</p>

              {/* Star Rating */}
              <div className="flex space-x-1 text-cyan-300 glow-effect">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;