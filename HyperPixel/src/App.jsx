import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Devlogs from './pages/Devlogs';
import OtherProjects from './pages/OtherProjects';

export default function App() {
  const themes = ["vermelho", "windows", "rec"];
  const [themeIndex, setThemeIndex] = useState(0);

  const currentTheme = themes[themeIndex];

  const handleNextTheme = () => {
    setThemeIndex((prev) => (prev + 1) % themes.length);
  };

  return (
    <div>
      <Header
        theme={currentTheme}
        handleNextTheme={handleNextTheme}
      />

      <Routes>
        <Route path="/" element={<Home theme={currentTheme} />} />
        <Route path="/aboutMe" element={<AboutMe theme={currentTheme} />} />
        <Route path="/devlogs" element={<Devlogs theme={currentTheme} />} />
        <Route path="/otherProjects" element={<OtherProjects theme={currentTheme} />} />
      </Routes>

      <Footer />
    </div>
  );
}
