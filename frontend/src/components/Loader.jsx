import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-white dark:bg-black transition-all duration-300">
      <div className="relative">
        {/* Glowing rotating ring */}
        <motion.div
          className="w-24 h-24 border-4 border-gray-300 dark:border-gray-700 border-t-transparent rounded-full animate-spin"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        ></motion.div>

        {/* Pulsating core (Data Packet Effect) */}
        <motion.div
          className="absolute inset-0 flex justify-center items-center"
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-10 h-10 bg-black dark:bg-white rounded-full shadow-lg"></div>
        </motion.div>

        {/* Text effect */}
        <motion.p
          className="absolute w-full text-center bottom-[-3rem] text-lg font-semibold text-gray-700 dark:text-gray-300 tracking-widest"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Booting up...
        </motion.p>
      </div>
    </div>
  );
};

export default Loader;