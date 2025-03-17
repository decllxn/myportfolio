import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="py-20 bg-white text-black transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6">
        {/* Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Let's Work Together
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.form
            className="space-y-6 bg-gray-100 p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <div>
              <label className="block text-lg font-semibold">Name</label>
              <motion.input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition"
                whileFocus={{ scale: 1.05 }}
              />
            </div>

            <div>
              <label className="block text-lg font-semibold">Email</label>
              <motion.input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition"
                whileFocus={{ scale: 1.05 }}
              />
            </div>

            <div>
              <label className="block text-lg font-semibold">Message</label>
              <motion.textarea
                placeholder="Your Message"
                rows="4"
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition"
                whileFocus={{ scale: 1.02 }}
              />
            </div>

            <motion.button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              Send Message
            </motion.button>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            className="flex flex-col justify-center items-center space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          >
            <p className="text-lg font-semibold">Email Me</p>
            <a
              href="mailto:munene.declan1@gmail.com"
              className="text-xl font-bold hover:text-gray-600 transition"
            >
              munene.declan1@gmail.com
            </a>

            {/* Social Links */}
            <div className="flex space-x-6">
              <motion.a
                href="#"
                className="text-3xl text-black hover:text-gray-600 transition"
                whileHover={{ scale: 1.2 }}
              >
                <FaGithub />
              </motion.a>
              <motion.a
                href="#"
                className="text-3xl text-black hover:text-gray-600 transition"
                whileHover={{ scale: 1.2 }}
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                href="#"
                className="text-3xl text-black hover:text-gray-600 transition"
                whileHover={{ scale: 1.2 }}
              >
                <FaTwitter />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;