import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

const Home = ({ theme, setTheme }) => {
  return (
    <div>
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
    </div>
  );
};

export default Home;