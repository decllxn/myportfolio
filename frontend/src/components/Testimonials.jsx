import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

// Example Testimonials Data
const testimonials = [
  {
    name: "John Doe",
    role: "Software Engineer @ TechCorp",
    quote: "Working with Declan was an amazing experience. His expertise in backend development is unmatched!",
    rating: 5,
    image: "/images/john.jpg", // Replace with actual image
  },
  {
    name: "Jane Smith",
    role: "Project Manager @ StartupX",
    quote: "Declan is a highly skilled developer who delivers quality work on time. Would highly recommend!",
    rating: 4,
    image: "/images/jane.jpg",
  },
  {
    name: "Alex Johnson",
    role: "CTO @ Innovate Inc.",
    quote: "His attention to detail and problem-solving skills make him an asset to any team!",
    rating: 5,
    image: "/images/alex.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12"
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
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(255, 255, 255, 0.2)" }}
              className="relative bg-gray-900 rounded-xl p-6 shadow-lg overflow-hidden transform transition-all"
            >
              {/* Quotes Icon */}
              <FaQuoteLeft className="text-gray-600 text-3xl absolute top-5 left-5" />
              <FaQuoteRight className="text-gray-600 text-3xl absolute bottom-5 right-5" />

              {/* Image & Name */}
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full border-2 border-gray-700 object-cover"
                />
                <div>
                  <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-400">{testimonial.role}</p>
                </div>
              </div>

              {/* Testimonial Quote */}
              <p className="text-gray-300 italic mb-4">{testimonial.quote}</p>

              {/* Star Rating */}
              <div className="flex space-x-1 text-yellow-500">
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