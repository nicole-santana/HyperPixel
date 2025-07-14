import Home from "/src/pages/Home.jsx";
import AboutMe from "/src/pages/AboutMe.jsx";
import Devlogs from "/src/pages/Devlogs.jsx";
import OtherProjects from "/src/pages/OtherProjects.jsx";
import { Routes, Route } from 'react-router-dom';


export default function App(){
    return(
        <div>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/aboutMe" element={<AboutMe />}/> 
                <Route path="/otherProjects" element={<OtherProjects />}/> 
                <Route path="/devlogs" element={<Devlogs />}/>
            </Routes>


            
        </div>
    )
}