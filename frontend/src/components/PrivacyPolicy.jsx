import { useState } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
  const [showToast, setShowToast] = useState(false);
  const navigate = useNavigate();

  const handleAccept = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
      navigate("/");
    }, 3000);
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black to-gray-900 text-white px-6 py-12">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(circle,_rgba(0,255,255,0.2)_0%,_rgba(0,0,0,1)_100%)] opacity-40 blur-2xl"></div>

      {/* Back to Home Button */}
      <motion.button
        onClick={() => navigate("/")}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        whileHover={{ scale: 1.1, boxShadow: "0px 0px 15px #00FFFF" }}
        className="fixed top-4 left-4 md:top-12 md:left-12 px-4 py-2 flex items-center space-x-2 
                   bg-gray-900/80 border border-cyan-400 shadow-[0_0_20px_#00FFFF] 
                   text-white font-semibold rounded-lg transition-all duration-300 backdrop-blur-md 
                   z-10"  // Ensures button is above other elements
      >
        <FaArrowLeft className="text-cyan-400" />
        <span>Back to Home</span>
      </motion.button>

      {/* Privacy Policy Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative w-full max-w-3xl bg-gray-900/70 border border-cyan-500 
                   shadow-[0_0_40px_#00FFFF] p-8 rounded-xl flex flex-col backdrop-blur-md mt-12"
      >
        {/* Cyberpunk Glowing Edge */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r 
                        from-cyan-400/30 to-transparent opacity-40 blur-xl"></div>

        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-center text-cyan-400 mb-6 tracking-wide">
          Privacy Policy
        </h1>

        {/* Policy Content (Scrollable) */}
        <div className="flex-grow max-h-[60vh] min-h-[300px] overflow-y-auto 
                        p-6 space-y-6 border border-cyan-500 rounded-lg 
                        bg-gray-800/60 shadow-inner backdrop-blur-lg scrollbar-thin 
                        scrollbar-thumb-cyan-500 scrollbar-track-transparent">
          <p className="text-lg text-gray-300 leading-relaxed">
            This Privacy Policy explains how <span className="text-cyan-400 font-semibold">Declan Munene</span> ("we", "our", "us") collects, uses, and protects any information you provide when using this website.
          </p>

          <h2 className="text-2xl font-bold text-cyan-400">1. Information We Collect</h2>
          <p className="text-gray-300">
            We may collect the following information:
            <ul className="list-disc pl-6">
              <li>Your name and email when you contact us.</li>
              <li>Technical data such as IP address and browser type.</li>
              <li>Usage data, including interactions on this website.</li>
            </ul>
          </p>

          <h2 className="text-2xl font-bold text-cyan-400">2. How We Use Your Information</h2>
          <p className="text-gray-300">
            We use the collected data to:
            <ul className="list-disc pl-6">
              <li>Improve the functionality and experience of this site.</li>
              <li>Respond to inquiries and messages.</li>
              <li>Analyze website traffic for improvements.</li>
            </ul>
          </p>

          <h2 className="text-2xl font-bold text-cyan-400">3. Data Protection & Security</h2>
          <p className="text-gray-300">
            We implement security measures to protect your data from unauthorized access, but we cannot guarantee absolute security.
          </p>

          <h2 className="text-2xl font-bold text-cyan-400">4. Cookies & Tracking</h2>
          <p className="text-gray-300">
            We may use cookies to enhance your browsing experience. You can disable cookies in your browser settings.
          </p>

          <h2 className="text-2xl font-bold text-cyan-400">5. Third-Party Services</h2>
          <p className="text-gray-300">
            This website may contain links to third-party sites, but we are not responsible for their privacy policies or practices.
          </p>

          <h2 className="text-2xl font-bold text-cyan-400">6. Your Rights</h2>
          <p className="text-gray-300">
            You have the right to:
            <ul className="list-disc pl-6">
              <li>Request access to your personal data.</li>
              <li>Request corrections or deletions of your data.</li>
              <li>Opt out of certain data collection practices.</li>
            </ul>
          </p>

          <h2 className="text-2xl font-bold text-cyan-400">7. Changes to This Policy</h2>
          <p className="text-gray-300">
            We may update this policy from time to time. By continuing to use this website, you accept the updated policy.
          </p>

          <h2 className="text-2xl font-bold text-cyan-400">8. Contact</h2>
          <p className="text-gray-300">
            If you have any questions about this Privacy Policy, you can contact us at <span className="text-cyan-400">munene.declan1@gmail.com</span>.
          </p>
        </div>

        {/* Accept Button */}
        <button
          onClick={handleAccept}
          className="mt-6 w-full px-6 py-3 bg-cyan-500 text-black font-semibold 
                     text-lg rounded-full shadow-[0_0_20px_#00FFFF] transition-all 
                     duration-300 hover:scale-105 hover:shadow-[0_0_30px_#00FFFF]"
        >
          Accept & Continue
        </button>
      </motion.div>

      {/* Toast Notification */}
      {showToast && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-6 right-6 bg-gray-900 border border-cyan-400 
                     p-4 rounded-lg shadow-lg flex items-center space-x-3"
        >
          <FaCheckCircle className="text-cyan-400 text-xl" />
          <span className="text-white">Privacy Policy Accepted. Redirecting to Home...</span>
        </motion.div>
      )}
    </section>
  );
};

export default PrivacyPolicy;