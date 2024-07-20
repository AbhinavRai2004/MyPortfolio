"use client";

import { useState } from "react";
import AboutSection from "./components/homepage/about";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const lightModeStyles = {
    backgroundColor: 'white',
    color: 'black',
  };
  
  const darkModeStyles = {
    backgroundColor: 'black',
    color: 'white',
  };

  const commonStyles = {
    minHeight: '100vh',
    margin: 0,
    padding: 0,
    transition: 'background-color 0.3s, color 0.3s',
  };

  const appliedStyles = darkMode ? darkModeStyles : lightModeStyles;

  return (
    <div style={{ ...commonStyles, ...appliedStyles }}>
      <button 
        onClick={toggleDarkMode} 
        style={{ 
          position: 'fixed', 
          top: '10px', 
          right: '10px',
          padding: '10px',
          cursor: 'pointer',
          backgroundColor: darkMode ? 'white' : 'black',
          color: darkMode ? 'black' : 'white',
          border: 'none',
          borderRadius: '5px'
        }}
      >
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      <HeroSection />
      <AboutSection />
      <Skills />
      <Projects />
      <Education />
      <ContactSection />
    </div>
  );
}
