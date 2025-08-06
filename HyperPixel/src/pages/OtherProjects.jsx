
import imgThemes from "../data/themeImg";
import CardFlex from "../Components/CardFlex";
import JogoDaCobrinha from "../Components/JogoDaCobrinha";

export default function OtherProjects({ theme }){
    return(
        <div id="OtherProjects">

            <div id="Hamster">

                <div id="texto">
                    <p>Desculpa, nada para ser visto  </p>
                    <p>aqui, só um jogo da cobrinha.</p>
                </div>
                
                <img src={imgThemes[theme].figHamster} alt="a" />
            </div>

            <div id="Card">
                               
                
                <CardFlex width={41.4375} height={43.5}>
                  <JogoDaCobrinha />
                </CardFlex>
            </div>
            
        </div>
    )
}