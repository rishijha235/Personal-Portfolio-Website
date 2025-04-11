import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TechShowcase from './components/TechShowcase';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [showTechShowcase, setShowTechShowcase] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (showTechShowcase) {
    return <TechShowcase onClose={() => setShowTechShowcase(false)} />;
  }

  return (
    <div className="min-h-screen text-white">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="relative">
        <section id="home" className="min-h-screen pt-16 bg-gradient-to-b from-gray-900 via-gray-800 to-indigo-900">
          <Home />
        </section>
        <section id="about" className="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-blue-900">
          <About />
        </section>
        <section id="skills" className="min-h-screen bg-gradient-to-b from-blue-900 via-cyan-900 to-teal-900">
          <Skills />
        </section>
        <section id="projects" className="min-h-screen bg-gradient-to-b from-teal-900 via-emerald-900 to-gray-900">
          <Projects />
        </section>
        <section id="contact" className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
          <Contact />
          <Footer onShowTechStack={() => setShowTechShowcase(true)} />
        </section>
      </main>
    </div>
  );
}

export default App;