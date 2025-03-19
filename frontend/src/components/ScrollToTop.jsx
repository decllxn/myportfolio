import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);

      setIsVisible(scrollTop > 300);
    };

    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.div
      className="fixed bottom-8 right-8 z-50 flex items-center justify-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      transition={{ duration: 0.3 }}
    >
      {/* Circular Progress Bar */}
      <div
        className="relative flex items-center justify-center w-16 h-16 cursor-pointer"
        onClick={scrollToTop}
      >
        {/* Background Circle */}
        <svg className="absolute w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="rgba(255, 255, 255, 0.2)"
            strokeWidth="6"
            fill="transparent"
          />
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="#00FFFF"
            strokeWidth="4"
            strokeDasharray="251.2"
            strokeDashoffset={`${251.2 - (scrollProgress / 100) * 251.2}`}
            fill="transparent"
            strokeLinecap="round"
            className="transition-all duration-200 ease-in-out"
          />
        </svg>

        {/* Arrow Icon */}
        <FaArrowUp className="text-cyan-400 text-3xl absolute transition-transform duration-200 hover:scale-110" />
      </div>
    </motion.div>
  );
};

export default ScrollToTop;