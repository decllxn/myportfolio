import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Footer Links */}
        <motion.div
          className="flex flex-wrap justify-center space-x-6 md:space-x-8 text-gray-400 text-lg mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link
              to="/policy"
              className="hover:text-white transition duration-300"
            >
              Privacy Policy
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }}>
            <Link
              to="/terms"
              className="hover:text-white transition duration-300"
            >
              Terms of Service
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }}>
            <a
              href="/myresume2.pdf" // Replace with actual resume URL
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition duration-300"
            >
              Resume
            </a>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }}>
            <Link
              to="/certificates" // Replace with actual certificates page URL
              className="hover:text-white transition duration-300"
            >
              Certificates
            </Link>
          </motion.div>
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