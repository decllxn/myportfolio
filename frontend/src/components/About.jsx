import { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaPython,
  FaCuttlefish,
  FaJava,
  FaReact,
  FaDatabase,
  FaLinux,
  FaLeaf,
  FaBootstrap,
  FaCss3Alt,
} from "react-icons/fa";

// Skill Data
const skills = [
  { name: "Django", percentage: 95, icon: <FaPython className="text-yellow-500" /> },
  { name: "APIs", percentage: 90, icon: <FaPython className="text-yellow-500" /> },
  { name: "C", percentage: 75, icon: <FaCuttlefish className="text-blue-600" /> },
  { name: "Java", percentage: 85, icon: <FaJava className="text-red-600" /> },
  { name: "React.js", percentage: 65, icon: <FaReact className="text-blue-400" /> },
  { name: "PostgreSQL", percentage: 65, icon: <FaDatabase className="text-blue-500" /> },
  { name: "Scripting", percentage: 70, icon: <FaLinux className="text-gray-800" /> },
  { name: "Spring", percentage: 60, icon: <FaLeaf className="text-green-600" /> },
  { name: "Bootstrap", percentage: 80, icon: <FaBootstrap className="text-purple-500" /> },
  { name: "Tailwind CSS", percentage: 80, icon: <FaCss3Alt className="text-teal-400" /> },
];

const About = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const skillControls = useAnimation();
  const [backendCrashed, setBackendCrashed] = useState(false);
  const [showCrashPopup, setShowCrashPopup] = useState(false);
  const pageControls = useAnimation();

  // Easter Egg Click Handler (Triggers Falling Animation)
  const handleEasterEggClick = async () => {
    setBackendCrashed(true);

    // Shake the screen for a crash effect
    await pageControls.start({
      x: [-5, 5, -5, 5, 0],
      transition: { duration: 0.4, ease: "easeInOut" },
    });

    await skillControls.start((i) => ({
      y: [0, Math.random() * 300 + 200], // Fall distance
      rotate: [0, Math.random() * 360], // Random rotation
      opacity: [1, 0], // Fade out as they fall
      transition: { duration: 1.5, ease: "easeIn" },
    }));

    // Delay before showing crash popup
    setTimeout(() => setShowCrashPopup(true), 1600);
  };

  // Restore Skills
  const restoreSkills = async () => {
    setShowCrashPopup(false); // Hide popup

    await skillControls.start({ y: 0, rotate: 0, opacity: 1, transition: { duration: 1, ease: "easeOut" } });

    setBackendCrashed(false);
  };

  return (
    <motion.section
      animate={pageControls}
      className="py-16 bg-gray-100 dark:bg-black text-black dark:text-white transition-colors duration-300 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          About Me
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left Side - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="md:w-1/2 text-center md:text-left"
          >
            <p className="text-lg leading-relaxed">
              Hi, I'm <span className="font-semibold">Declan Munene</span>, a backend developer specializing in
              <span className="text-gray-600 dark:text-gray-300 font-semibold"> Django & RESTful APIs</span>. I design
              and build scalable, high-performance backend systems that power modern web applications.
            </p>
            <p className="mt-4 text-lg leading-relaxed">
              With a background in <span className="font-semibold">Electronics and Computer Engineering</span>, I have a
              deep understanding of system architecture and software development. I have worked as a{" "}
              <span className="font-semibold">Project Manager</span> (6 months, contract) and have experience in
              freelancing.
            </p>

            {/* Backup Easter Egg Button */}
            {!backendCrashed && (
              <button
                onClick={handleEasterEggClick}
                className="mt-6 bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition"
              >
                Oops, missed something? Click me!
              </button>
            )}
          </motion.div>

          {/* Right Side - Skills & Animation */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="grid grid-cols-3 md:grid-cols-3 gap-6 md:w-1/2 relative"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="relative flex justify-center items-center w-24 h-24 md:w-28 md:h-28"
                custom={index}
                animate={skillControls}
                initial={{ y: 0, rotate: 0 }}
              >
                {/* Circular Progress Animation */}
                <svg className="absolute w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle className="text-gray-300 dark:text-gray-600" strokeWidth="6" stroke="currentColor" fill="transparent" r="40" cx="50" cy="50" />
                  <motion.circle
                    className="text-blue-500"
                    strokeWidth="6"
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r="40"
                    cx="50"
                    cy="50"
                    strokeDasharray="251.2"
                    strokeDashoffset={251.2 - (skill.percentage / 100) * 251.2}
                    initial={{ strokeDashoffset: 251.2 }}
                    animate={{ strokeDashoffset: 251.2 - (skill.percentage / 100) * 251.2 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />
                </svg>
                <div className="absolute flex flex-col items-center">
                  {skill.icon}
                  <span className="text-xs font-semibold mt-1">{skill.name}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Easter Egg - Floating API Icon */}
      {!backendCrashed && (
        <motion.div
          className="absolute w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-lg cursor-pointer"
          animate={{ x: ["1000%", "-300%"], y: ["0%", "400%", "-700%"], rotate: [0, 30, -30] }}
          transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
          onClick={handleEasterEggClick}
        >
          <span className="text-sm font-bold">API</span>
        </motion.div>
      )}

      {/* Crash Popup */}
      {showCrashPopup && (
        <motion.div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-xl font-bold">Oops, the server has crashed!</h2>
            <button onClick={restoreSkills} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg">
              Click here to boot up server
            </button>
          </div>
        </motion.div>
      )}
    </motion.section>
  );
};

export default About;