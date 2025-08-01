import Card from "../Components/Card";
import imgThemes from "../data/themeImg";
import img from "/assets/img/home/corvo-home/corvo-windows.png";
export default function Devlogs({ theme }){
    return(
        <div>
            <div id="PrimeiraParte">
                <Card width={24.6875} height={28.8125} img={img} />
                
               <Card width={24.6875} height={28.8125} img={img} />
               
                <Card width={24.6875} height={28.8125} img={img} />
            </div>

            <div id="Estrelas1">
                <img id="Direita" src={imgThemes[theme].estrelaDDevlogs} alt="" />
                <img id="Esquerda" src={imgThemes[theme].estrelaEDevlogs} alt="" />
            </div>
        </div>
    )
}