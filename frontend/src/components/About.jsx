import { useState, useEffect, useRef } from "react";
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
  FaExclamationTriangle,
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
  const [easterEggPosition, setEasterEggPosition] = useState({ x: 0, y: 0 });
  const easterEggRef = useRef(null);

  // Easter Egg Click Handler (Triggers Falling Animation)
  const handleEasterEggClick = async () => {
    setBackendCrashed(true);

    // Shake effect for crash simulation
    await pageControls.start({
      x: [-5, 5, -5, 5, 0],
      transition: { duration: 0.4, ease: "easeInOut" },
    });

    // Falling animation
    await Promise.all(
      skills.map((_, i) =>
        skillControls.start((index) =>
          index === i
            ? {
                y: [0, Math.random() * 300 + 200], // Fall distance
                rotate: [0, Math.random() * 360], // Random rotation
                opacity: [1, 0], // Fade out as they fall
                transition: { duration: 1.5, ease: "easeIn" },
              }
            : {}
        )
      )
    );

    // Only after all skills fall off, show crash popup
    setTimeout(() => setShowCrashPopup(true), 100);
  };

  // Restore Skills
  const restoreSkills = async () => {
    setShowCrashPopup(false);

    await skillControls.start((i) => ({
      y: [200, -10, 0], // Start below, slightly overshoot, then settle
      rotate: [Math.random() * 360, 0], // Rotate back to normal
      opacity: [0, 1], // Fade back in
      scale: [0.8, 1.1, 1], // Slight bounce effect
      transition: { duration: 1.2, ease: "easeOut", delay: i * 0.05 },
    }));

    setBackendCrashed(false);
  };

  useEffect(() => {
    const moveEasterEgg = () => {
      if (easterEggRef.current) {
        const maxX = window.innerWidth - easterEggRef.current.offsetWidth;
        const maxY = window.innerHeight - easterEggRef.current.offsetHeight;

        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        setEasterEggPosition({ x: randomX, y: randomY });

        // Random Motion
        const randomMotionX = Math.random() * 20 - 10;
        const randomMotionY = Math.random() * 20 - 10;

        setEasterEggPosition((prev) => ({
          x: Math.max(0, Math.min(maxX, prev.x + randomMotionX)),
          y: Math.max(0, Math.min(maxY, prev.y + randomMotionY)),
        }));
      }
    };

    moveEasterEgg();
    const intervalId = setInterval(moveEasterEgg, 2000); // Move every 2 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <motion.section
      animate={pageControls}
      className="py-16 bg-gray-100 dark:bg-black text-black dark:text-white transition-colors duration-300 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative">
        {/* Floating API Button */}
        {!backendCrashed && (
          <motion.button
            ref={easterEggRef}
            onClick={handleEasterEggClick}
            className="absolute bg-blue-600 text-white py-2 px-4 rounded-full shadow-md hover:bg-blue-700 transition cursor-pointer"
            style={{ left: easterEggPosition.x, top: easterEggPosition.y }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            API
          </motion.button>
        )}

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
              <span className="text-gray-600 dark:text-gray-300 font-semibold"> Django & RESTful APIs</span>.
            </p>
            <p className="mt-4 text-lg leading-relaxed">
              With a background in <span className="font-semibold">Electronics and Computer Engineering</span>, I have a
              deep understanding of system architecture and software development.
            </p>
          </motion.div>

          {/* Right Side - Skills OR Warning Message */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="md:w-1/2 relative"
          >
            {!showCrashPopup ? (
              <div className="grid grid-cols-3 md:grid-cols-3 gap-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="relative flex justify-center items-center w-24 h-24 md:w-28 md:h-28"
                    custom={index}
                    animate={skillControls}
                    initial={{ y: 0, rotate: 0 }}
                  >
                    <svg className="absolute w-full h-full">
                      <circle
                        cx="50%"
                        cy="50%"
                        r="40%"
                        stroke="#ccc"
                        strokeWidth="4"
                        fill="transparent"
                      />
                      <motion.circle
                        cx="50%"
                        cy="50%"
                        r="40%"
                        stroke={skill.icon.props.className.split(" ")[1]}
                        strokeWidth="4"
                        fill="transparent"
                        strokeDasharray={`${skill.percentage * 2.51}, 251`}
                        style={{ transformOrigin: "50% 50%", transform: "rotate(-90deg)" }}
                        initial={{ strokeDashoffset: 251 }}
                        animate={{ strokeDashoffset: 251 - skill.percentage * 2.51 }}
                        transition={{
                          duration: 1.2, ease: "easeInOut"
                        }}
                      />
                    </svg>
                    <div className="absolute flex flex-col items-center">
                      {skill.icon}
                      <span className="text-xs font-semibold mt-1">{skill.name}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div
                className="bg-yellow-500 text-black p-6 rounded-lg shadow-lg flex flex-col items-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <FaExclamationTriangle className="text-5xl mb-3 text-black" />
                <h2 className="text-lg font-bold">⚠️ Server Crash Detected! ⚠️</h2>
                <p className="text-center mt-2">The backend has stopped responding. Click below to reboot.</p>
                <button
                  onClick={restoreSkills}
                  className="mt-4 bg-black text-yellow-500 px-4 py-2 rounded-lg shadow-md hover:bg-gray-900 transition"
                >
                  Restart Server
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
