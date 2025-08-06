import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Devlogs from './pages/Devlogs';
import OtherProjects from './pages/OtherProjects';
import './pages/CSS/main.css'

export default function App() {
  const themes = ["vermelho", "windows", "rec"];
  const themesColor = ['theme-red', 'theme-windows', 'theme-cm'];

  // Load theme index from localStorage, default to 0
  const [themeIndex, setThemeIndex] = useState(() => {
    const saved = localStorage.getItem('themeIndex');
    return saved !== null ? Number(saved) : 0;
  });

  // Set theme class on html element whenever themeIndex changes
  useEffect(() => {
    document.documentElement.className = themesColor[themeIndex];
    localStorage.setItem('themeIndex', themeIndex); // Save on change
  }, [themeIndex, themesColor]);

  const handleNextTheme = () => {
    setThemeIndex((prev) => (prev + 1) % themes.length);
  };

  return (
    <div>
      <Header
        theme={themes[themeIndex]}
        handleNextTheme={handleNextTheme}
      />

      <Routes>
        <Route path="/" element={<Home theme={themes[themeIndex]} />} />
        <Route path="/aboutMe" element={<AboutMe theme={themes[themeIndex]} />} />
        <Route path="/devlogs" element={<Devlogs theme={themes[themeIndex]} />} />
        <Route path="/otherProjects" element={<OtherProjects theme={themes[themeIndex]} />} />
      </Routes>

      <Footer />
    </div>
  );
}
