import Card from "../Components/Card";
import img from "/assets/img/home/corvo-home/corvo-windows.png";
import imgThemes from "../data/themeImg";



export default function AboutMe({ theme }) {
    return (
        <div id="AboutMe">
            <div>
                <div id="CardAboutMe">
                    <Card  width={47.875} height={43.125} img={img} />
                </div>
                
                <img id="Arvore" src={imgThemes[theme].figArvore} alt="" />
                <p>
                    <span>
                        Sem credibilidade, sem diploma,
                    </span>
            
                    <span> sem foto.</span>
                </p>
            </div>
        </div>
    );
}