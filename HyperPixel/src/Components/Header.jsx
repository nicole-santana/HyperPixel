import './CSS/main.css'

import { Link } from 'react-router-dom';

export default function Header(){
    return(
        <div className="Header">

            <div className="Pages">
                <Link to="/"><span>H</span>ome</Link>
                <Link to="/aboutMe"><span>A</span>bout me</Link>
                <Link to="/devlogs"><span>D</span>evlogs</Link>
                <Link to="/otherProjects"><span>O</span>ther projects</Link>
        
                
            </div>
            

            <button><span>C</span>hange color theme</button>
        </div>
       

    )
}