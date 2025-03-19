import { useState } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const TermsOfService = () => {
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

      {/* Terms of Service Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative w-full max-w-3xl bg-gray-900 border border-cyan-400 
                   shadow-[0_0_30px_#00FFFF] p-8 rounded-xl flex flex-col"
      >
        {/* Cyberpunk Glow Effect */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r 
                        from-cyan-400/20 to-transparent opacity-30 blur-xl"></div>

        {/* Heading */}
        <h1 className="text-3xl font-bold text-center text-cyan-400 mb-6">
          Terms of Service
        </h1>

        {/* Terms Content (Scrollable) */}
        <div className="flex-grow h-[60vh] min-h-[300px] overflow-y-auto 
                        p-4 space-y-4 border border-cyan-500 rounded-lg 
                        bg-gray-800/50 shadow-inner">
          <p>
            Welcome to Declan Munene's portfolio. By using this website, you
            agree to the following terms and conditions:
          </p>

          <h2 className="text-xl text-cyan-400">1. Acceptance of Terms</h2>
          <p>
            By accessing and using this website, you acknowledge that you have
            read, understood, and agreed to be bound by these terms.
          </p>

          <h2 className="text-xl text-cyan-400">2. Intellectual Property</h2>
          <p>
            All content, including code, designs, and text, is owned by Declan
            Munene. Unauthorized use, reproduction, or distribution is
            prohibited.
          </p>

          <h2 className="text-xl text-cyan-400">3. Limitation of Liability</h2>
          <p>
            This website is provided "as is" without warranties. The owner is
            not responsible for any damages resulting from the use of this site.
          </p>

          <h2 className="text-xl text-cyan-400">4. Changes to Terms</h2>
          <p>
            These terms may be updated at any time. Continued use of the site
            means you accept any modifications.
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
          <span className="text-white">Terms Accepted. Redirecting to Home...</span>
        </motion.div>
      )}
    </section>
  );
};

export default TermsOfService;