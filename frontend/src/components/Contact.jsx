import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { submitContactForm } from "../api";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [popupMessage, setPopupMessage] = useState("");
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupSuccess, setPopupSuccess] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await submitContactForm(formData);
      setPopupMessage("Message Successfully Delivered!");
      setPopupSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setPopupMessage("Failed to send message. Try again.");
      setPopupSuccess(false);
    }
    setPopupVisible(true);
    setTimeout(() => setPopupVisible(false), 3000); // Auto-hide popup
  };

  return (
    <section id="contact" className="py-20 bg-white text-black transition-colors duration-300 relative">
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
            onSubmit={handleSubmit}
            className="space-y-6 bg-gray-100 p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <div>
              <label className="block text-lg font-semibold">Name</label>
              <motion.input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition"
                whileFocus={{ scale: 1.05 }}
              />
            </div>

            <div>
              <label className="block text-lg font-semibold">Email</label>
              <motion.input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition"
                whileFocus={{ scale: 1.05 }}
              />
            </div>

            <div>
              <label className="block text-lg font-semibold">Message</label>
              <motion.textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
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
                href="https://github.com/decllxn"
                className="text-3xl text-black hover:text-gray-600 transition"
                whileHover={{ scale: 1.2 }}
              >
                <FaGithub />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/declan-munene-b4ab45278/"
                className="text-3xl text-black hover:text-gray-600 transition"
                whileHover={{ scale: 1.2 }}
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                href="https://x.com/Decllaan"
                className="text-3xl text-black hover:text-gray-600 transition"
                whileHover={{ scale: 1.2 }}
              >
                <FaTwitter />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Success/Error Popup */}
      {popupVisible && (
        <motion.div
          className={`fixed top-0 left-1/2 transform -translate-x-1/2 mt-5 p-4 rounded-lg shadow-lg text-white ${
            popupSuccess ? "bg-green-500" : "bg-red-500"
          } z-150`}         
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
        >
          {popupMessage}
        </motion.div>
      )}
    </section>
  );
};

export default Contact;