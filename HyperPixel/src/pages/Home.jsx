import './CSS/main.css';
import Card from "../Components/Card";
import img from "../assets/img/home/corvo-home/corvo-windows.png";
import imgThemes from "../data/themeImg";


export default function Home( { theme } ) {
    return(
        <div className='Home'>

            <div className="HomeCards">
                <div className="PrimeiroCard">
                    <Card width={26.8475} height={17.70625} img={img}/>
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
                    <Card width={26.625} height={18.9375} img={img}/>
                    <img  className='Corvo' src={imgThemes[theme].imgCorvo} alt="a" />
                    <img  className='Flores' src={imgThemes[theme].floresSb} alt="a" />
                </div>
            </div>

            <div className='CaveiraHome'>
                <img  src={imgThemes[theme].imgCaveira} alt="a" />
                <Card className="Radio" width={15.5} height={9.125} img={img}/>
            </div>
    
        </div>
        
    )
}