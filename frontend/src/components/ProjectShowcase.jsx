import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

// Example Project Data
const projects = [
  {
    name: "Portfolio Website",
    description: "A sleek and interactive portfolio showcasing my projects, built with React and Django.",
    liveLink: "#",
    githubLink: "#",
    image: "/images/portfolio.png", // Replace with actual image
  },
  {
    name: "API Management System",
    description: "A RESTful API management platform with authentication and monitoring.",
    liveLink: "#",
    githubLink: "#",
    image: "/images/api-system.png",
  },
  {
    name: "E-commerce Platform",
    description: "A fully functional e-commerce website with product management and payments.",
    liveLink: "#",
    githubLink: "#",
    image: "/images/ecommerce.png",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const ProjectsShowcase = () => {
  return (
    <section id="projects" className="py-20 bg-white text-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Projects Showcase
        </motion.h2>

        {/* Project Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5, boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.2)" }}
              transition={{ duration: 0.4 }}
              className="relative bg-white rounded-xl shadow-xl overflow-hidden cursor-pointer transform transition-all"
            >
              {/* Image with Hover Zoom */}
              <div className="relative overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-56 object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              {/* Project Info */}
              <div className="p-6 relative">
                <h3 className="text-2xl font-semibold text-black">{project.name}</h3>
                <p className="text-gray-700 mt-3">{project.description}</p>

                {/* Links */}
                <div className="mt-6 flex space-x-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-black hover:text-gray-600 transition-colors"
                  >
                    <FaExternalLinkAlt className="mr-1" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-black hover:text-gray-600 transition-colors"
                  >
                    <FaGithub className="mr-1" />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;