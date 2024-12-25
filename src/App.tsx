//import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Values from './components/Values';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-to-b from-baaz-navy to-baaz-navy/90 text-white"
    >
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Values />
        <Contact />
      </main>
      <Footer />
    </motion.div>
  );
}

export default App;