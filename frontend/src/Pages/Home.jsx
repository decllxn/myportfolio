import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';

const Home = ({ theme, setTheme }) => {
  return (
    <div>
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <About />
    </div>
  );
};

export default Home;