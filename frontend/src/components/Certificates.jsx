import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaExternalLinkAlt } from "react-icons/fa";

const certificates = [
  {
    title: "Backend Development",
    issuer: "Alx Africa",
    date: "November 2025",
    link: " ",
    image: "/alx-cert1.jpeg", // Add image to public/certificates/
  },
  {
    title: "Professional Foundations",
    issuer: "Alx Africa",
    date: "March 2025",
    link: " ",
    image: "/alx-cert2.jpeg",
  },
];

const Certificates = () => {
  const navigate = useNavigate();

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center 
                        bg-gradient-to-b from-black to-gray-900 text-white px-6 py-12">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(circle,_rgba(0,255,255,0.2)_0%,_rgba(0,0,0,1)_100%)] opacity-40 blur-2xl"></div>

      {/* Back to Home Button */}
      <motion.button
        onClick={() => navigate("/")}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        whileHover={{ scale: 1.1, boxShadow: "0px 0px 15px #00FFFF" }}
        className="fixed top-6 left-6 md:top-12 md:left-12 px-4 py-2 flex items-center space-x-2 
                   bg-gray-900/80 border border-cyan-400 shadow-[0_0_20px_#00FFFF] 
                   text-white font-semibold rounded-lg transition-all duration-300 backdrop-blur-md"
      >
        <FaArrowLeft className="text-cyan-400" />
        <span>Back to Home</span>
      </motion.button>

      {/* Certificates Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative w-full max-w-5xl bg-gray-900/70 border border-cyan-500 
                   shadow-[0_0_40px_#00FFFF] p-8 rounded-xl flex flex-col backdrop-blur-md text-center"
      >
        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-cyan-400 mb-6 tracking-wide">
          My Certificates
        </h1>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/70 border border-cyan-500 p-4 rounded-lg shadow-lg 
                         flex flex-col items-center text-center space-y-3 relative overflow-hidden
                         transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_#00FFFF]"
              whileHover={{ scale: 1.05 }}
            >
              {/* Certificate Image */}
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-40 object-cover rounded-md border border-gray-700"
              />
              
              {/* Certificate Info */}
              <h2 className="text-xl font-semibold text-cyan-400">{cert.title}</h2>
              <p className="text-gray-300">{cert.issuer}</p>
              <p className="text-gray-400 text-sm">{cert.date}</p>

              {/* View Certificate Button */}
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center px-4 py-2 bg-cyan-500 text-black font-semibold 
                           rounded-full shadow-[0_0_20px_#00FFFF] transition-all 
                           duration-300 hover:scale-105 hover:shadow-[0_0_30px_#00FFFF]"
              >
                View <FaExternalLinkAlt className="ml-2" />
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Certificates;