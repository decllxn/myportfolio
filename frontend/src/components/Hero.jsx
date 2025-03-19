import { motion } from "framer-motion";

const Hero = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-white text-black transition-colors duration-300 mt-20 md:mt-24 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center px-6 md:px-12">
        
        {/* Left Side: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center md:text-left md:w-1/2"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Engineering <span className="text-gray-600">Robust</span> &  
            <span className="text-gray-600"> Scalable</span> Backend Systems
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Backend developer specializing in <strong>Django</strong>, crafting efficient APIs, seamless database architectures,  
            and scalable server-side solutions that power modern web applications.
          </p>

          {/* CTA Buttons */}
          <div className="mt-6 flex justify-center md:justify-start space-x-4">
            <button
              onClick={() => scrollToSection("projects")}
              className="px-6 py-3 bg-black text-white rounded-full 
                         font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-6 py-3 border-2 border-black rounded-full 
                         font-semibold text-lg transition-all duration-300 hover:bg-black hover:text-white shadow-lg"
            >
              Get in Touch
            </button>
          </div>
        </motion.div>

        {/* Right Side: Profile Image with Bubbles Animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="relative w-60 h-60 md:w-96 md:h-96 mb-12 md:mb-0"
        >
          {/* Floating Bubbles (Higher Movement Before Fading) */}
          <div className="absolute inset-0 flex items-center justify-center">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0.5, 1, 1.5],
                  y: [-30, -150, -250], // Increased upward movement
                }}
                transition={{
                  duration: 4, // Slightly longer duration
                  delay: i * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute w-4 h-4 md:w-5 md:h-5 bg-gray-400 rounded-full opacity-50"
                style={{ left: `${Math.random() * 100}%` }}
              />
            ))}
          </div>

          {/* Profile Image */}
          <div className="relative w-full h-full overflow-hidden rounded-full border-4 border-gray-500 shadow-xl">
            <img
              src="/profile.jpeg"
              alt="Declan"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;