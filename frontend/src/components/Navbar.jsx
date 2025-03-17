import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ theme, setTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white text-black shadow-lg dark:bg-black dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-wide uppercase">
          Declan
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg">
          {['Home', 'About', 'Projects', 'Contact'].map((item, index) => (
            <li key={index} className="group relative">
              <Link
                to={item.toLowerCase()}
                className="transition-all duration-300 hover:text-gray-600 dark:hover:text-gray-400"
              >
                {item}
              </Link>
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gray-500 dark:bg-gray-600 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Right Section: Theme Toggle & Mobile Menu */}
        <div className="flex items-center gap-4">
          {/* Dark/Light Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="transition-transform duration-300 hover:scale-110 p-2 bg-gray-200 dark:bg-gray-700 rounded-full"
          >
            {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
          </button>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="fixed top-0 left-0 w-full h-screen bg-gray-100 text-black dark:bg-black dark:text-white flex flex-col items-center justify-center space-y-6 text-lg transition-colors duration-300"
          >
            {/* Close Button */}
            <button className="absolute top-6 right-6" onClick={() => setIsOpen(false)}>
              <X size={28} />
            </button>

            {/* Animated Menu Items */}
            {['Home', 'About', 'Projects', 'Contact'].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
              >
                <Link
                  to={item.toLowerCase()}
                  className="transition-all duration-300 hover:text-gray-600 dark:hover:text-gray-400 text-xl font-semibold"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;