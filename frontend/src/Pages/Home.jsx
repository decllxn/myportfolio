import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import ProjectsShowcase from '../components/ProjectShowcase';
import Technologies from '../components/Technologies';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ScrollToTop from "../components/ScrollToTop";

const Home = ({ theme, setTheme }) => {
  return (
    <div>
      <Navbar theme={theme} setTheme={setTheme} />
      <ScrollToTop />
      <Hero />
      <About />
      <Technologies />
      <ProjectsShowcase />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;