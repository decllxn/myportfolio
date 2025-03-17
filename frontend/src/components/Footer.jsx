import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Footer Links */}
        <motion.div
          className="flex justify-center space-x-8 text-gray-400 text-lg mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.a
            href="#"
            className="hover:text-white transition duration-300"
            whileHover={{ scale: 1.1 }}
          >
            Privacy Policy
          </motion.a>
          <motion.a
            href="#"
            className="hover:text-white transition duration-300"
            whileHover={{ scale: 1.1 }}
          >
            Terms of Service
          </motion.a>
        </motion.div>

        {/* Copyright Text */}
        <motion.p
          className="text-gray-500 text-sm"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          © 2025 Declan | All Rights Reserved
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;