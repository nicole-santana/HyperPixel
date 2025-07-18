import './CSS/main.css';
import Card from "../Components/Card";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import img from "../assets/img/home/corvo-home/corvo-windows.png";
import imgThemes from "../data/themeImg";


export default function Home( { theme } ) {
    return(
        <div>

            <div className="HomeCards">
                <div className="PrimeiroCard">
                    <Card width={20} height={20} img={img}/>
                    <h1>
                        <span>Meu</span>
                        <span>blog</span>
                        <span>sobre</span>
                        <span>tech</span>
                    </h1>
                </div>

                <div className="SegundoCard">
                    <h1>
                        <span>e coisas</span>
                        <span>que faço</span>
                        <span>com ela</span>
                    </h1>
                    <Card width={20} height={20} img={img}/>
                </div>
            </div>

            <div>
                <img src={imgThemes[theme].imgCaveira} alt="a" />
                <Card width={20} height={20} img={img}/>
            </div>
    
        </div>
        
    )
}