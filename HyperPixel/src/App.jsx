import Card from "./Components/Card";
import Header from "./Components/Header";
import Footer from './Components/Footer';
import img from "/src/assets/img/home/sb-rosas-home/Rosas-windows.png";
import Home from "/src/pages/Home.jsx";
import AboutMe from "/src/pages/AboutMe.jsx";
import Devlogs from "/src/pages/Devlogs.jsx";
import OtherProjects from "/src/pages/OtherProjects.jsx";

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