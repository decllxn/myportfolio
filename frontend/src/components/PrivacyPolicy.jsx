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
    <section className="relative min-h-screen flex items-center justify-center bg-black text-white p-6">
      {/* Back to Home Navigation */}
      <motion.button
        onClick={() => navigate("/")}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        whileHover={{ scale: 1.1, boxShadow: "0px 0px 15px #00FFFF" }}
        className="absolute top-6 left-6 px-4 py-2 flex items-center space-x-2 
                   bg-gray-900 border border-cyan-400 shadow-[0_0_20px_#00FFFF] 
                   text-white font-semibold rounded-lg transition-all duration-300"
      >
        <FaArrowLeft className="text-cyan-400" />
        <span>Back to Home</span>
      </motion.button>

      {/* Privacy Policy Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative w-full max-w-3xl bg-gray-900 border border-cyan-400 
                   shadow-[0_0_30px_#00FFFF] p-8 rounded-xl overflow-hidden"
      >
        {/* Cyberpunk Glow Effect */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r 
                        from-cyan-400/20 to-transparent opacity-30 blur-xl"></div>

        {/* Heading */}
        <h1 className="text-3xl font-bold text-center text-cyan-400 mb-6">
          Privacy Policy
        </h1>

        {/* Policy Content (Scrollable) */}
        <div className="h-[60vh] overflow-y-auto p-4 space-y-4 
                        border border-cyan-500 rounded-lg bg-gray-800/50 shadow-inner">
          <p>
            This Privacy Policy explains how Declan Munene ("we", "our", "us") collects, uses, and protects any information you provide when using this website.
          </p>

          <h2 className="text-xl text-cyan-400">1. Information We Collect</h2>
          <p>
            We may collect the following information:
            <ul className="list-disc pl-6">
              <li>Your name and email when you contact us.</li>
              <li>Technical data such as IP address and browser type.</li>
              <li>Usage data, including interactions on this website.</li>
            </ul>
          </p>

          <h2 className="text-xl text-cyan-400">2. How We Use Your Information</h2>
          <p>
            We use the collected data to:
            <ul className="list-disc pl-6">
              <li>Improve the functionality and experience of this site.</li>
              <li>Respond to inquiries and messages.</li>
              <li>Analyze website traffic for improvements.</li>
            </ul>
          </p>

          <h2 className="text-xl text-cyan-400">3. Data Protection & Security</h2>
          <p>
            We implement security measures to protect your data from unauthorized access, but we cannot guarantee absolute security.
          </p>

          <h2 className="text-xl text-cyan-400">4. Cookies & Tracking</h2>
          <p>
            We may use cookies to enhance your browsing experience. You can disable cookies in your browser settings.
          </p>

          <h2 className="text-xl text-cyan-400">5. Third-Party Services</h2>
          <p>
            This website may contain links to third-party sites, but we are not responsible for their privacy policies or practices.
          </p>

          <h2 className="text-xl text-cyan-400">6. Your Rights</h2>
          <p>
            You have the right to:
            <ul className="list-disc pl-6">
              <li>Request access to your personal data.</li>
              <li>Request corrections or deletions of your data.</li>
              <li>Opt out of certain data collection practices.</li>
            </ul>
          </p>

          <h2 className="text-xl text-cyan-400">7. Changes to This Policy</h2>
          <p>
            We may update this policy from time to time. By continuing to use this website, you accept the updated policy.
          </p>

          <h2 className="text-xl text-cyan-400">8. Contact</h2>
          <p>
            If you have any questions about this Privacy Policy, you can contact us at <span className="text-cyan-400">munene.declan1@gmail.com</span>.
          </p>
        </div>

        {/* Accept Button */}
        <button
          onClick={handleAccept}
          className="mt-6 w-full px-6 py-3 bg-cyan-500 text-black font-semibold 
                     text-lg rounded-full shadow-[0_0_20px_#00FFFF] transition-all 
                     duration-300 hover:scale-105"
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