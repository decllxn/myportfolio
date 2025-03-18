import { useEffect } from "react";
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

// Skills Data
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

const Technologies = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start((i) => ({
        width: `${skills[i].percentage}%`,
        transition: { duration: 1.5, ease: "easeOut", delay: i * 0.2 },
      }));
    }
  }, [inView, controls]);

  return (
    <section className="py-16 bg-black text-white transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-200 tracking-wide">
          Technologies & Skills
        </h2>

        {/* Skills Progress Bars */}
        <div ref={ref} className="space-y-6">
          {skills.map((skill, index) => (
            <div key={index} className="relative">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  {skill.icon}
                  <span className="text-lg font-semibold">{skill.name}</span>
                </div>
                <span className="text-sm font-semibold text-gray-400">{skill.percentage}%</span>
              </div>

              {/* Futuristic Progress Bar */}
              <div className="relative w-full h-3 bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  className="absolute h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg"
                  initial={{ width: "0%" }}
                  animate={controls}
                  custom={index}
                  style={{ borderRadius: "6px" }}
                />
              </div>

              {/* Glowing Outer Layer */}
              <div className="absolute top-0 left-0 w-full h-full opacity-30 bg-blue-500 blur-lg rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;