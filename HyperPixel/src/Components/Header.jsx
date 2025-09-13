import './CSS/main.css'
import { Link } from 'react-router-dom';

export default function Header({ theme, handleNextTheme }) {
  // Mova a função para cá:
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <div className="Header">
      <div className="Pages">
        <Link to="/"><span>H</span>ome</Link>
        <Link to="/aboutMe"><span>A</span>bout me</Link>
        <Link to="/devlogs"><span>D</span>evlogs</Link>
        <Link to="/otherProjects"><span>O</span>ther projects</Link>
      </div>

      <div id='OutrasFuncoes'>
        <button onClick={toggleFullscreen}>
        ⛶ Tela cheia
      </button>
      <button onClick={handleNextTheme}>
        <span>C</span>hange color theme
      </button>
      </div>
      
    </div>
  );
}