import { motion } from "framer-motion";
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
  { name: "Django", percentage: 95, icon: <FaPython className="text-yellow-500 text-4xl" /> },
  { name: "APIs", percentage: 90, icon: <FaPython className="text-yellow-500 text-4xl" /> },
  { name: "C", percentage: 75, icon: <FaCuttlefish className="text-blue-600 text-4xl" /> },
  { name: "Java", percentage: 85, icon: <FaJava className="text-red-600 text-4xl" /> },
  { name: "React.js", percentage: 65, icon: <FaReact className="text-blue-400 text-4xl" /> },
  { name: "PostgreSQL", percentage: 65, icon: <FaDatabase className="text-blue-500 text-4xl" /> },
  { name: "Scripting", percentage: 70, icon: <FaLinux className="text-gray-800 text-4xl" /> },
  { name: "Spring", percentage: 60, icon: <FaLeaf className="text-green-600 text-4xl" /> },
  { name: "Bootstrap", percentage: 80, icon: <FaBootstrap className="text-purple-500 text-4xl" /> },
  { name: "Tailwind CSS", percentage: 80, icon: <FaCss3Alt className="text-teal-400 text-4xl" /> },
];

const Skills = () => {
  return (
    <section className="py-16 bg-gray-100 dark:bg-black text-black dark:text-white transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          Skills & Technologies
        </motion.h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-center items-center">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="relative flex flex-col items-center space-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
            >
              {/* Circular Progress Bar */}
              <div className="relative w-24 h-24">
                <svg className="absolute w-full h-full" viewBox="0 0 100 100">
                  {/* Background Circle */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="#e5e7eb"
                    strokeWidth="5"
                    fill="transparent"
                  />
                  {/* Animated Progress Circle */}
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke={skill.icon.props.className.split(" ")[1]}
                    strokeWidth="5"
                    fill="transparent"
                    strokeDasharray="251.2"
                    strokeDashoffset="251.2"
                    strokeLinecap="round"
                    animate={{
                      strokeDashoffset: 251.2 - (skill.percentage / 100) * 251.2,
                    }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                  />
                </svg>
                {/* Skill Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {skill.icon}
                </div>
              </div>

              {/* Skill Name */}
              <span className="text-lg font-semibold">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;