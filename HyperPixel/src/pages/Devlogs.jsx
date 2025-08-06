import Card from "../Components/Card";
import imgThemes from "../data/themeImg";
import img from "/assets/img/home/corvo-home/corvo-windows.png";
export default function Devlogs({ theme }){
    return(
        <div id="Devlogs">
            <div id="PrimeiraParte">

                <div>
                    <Card width={24.6875} height={28.8125} img={img} />
                    <h2>Bla Bla project 1</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint animi officiis excepturi quae. Numquam delectus facere ducimus veniam, architecto iste facilis laborum, quibusdam sequi ipsum minima ex sit voluptatibus deleniti?</p>
                     <a href="" className="VerMais">&gt;&gt;Veja mais</a>
                </div>
                <div>
                    <Card width={24.6875} height={28.8125} img={img} />
                    <h2>Bla Bla project 1</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint animi officiis excepturi quae. Numquam delectus facere ducimus veniam, architecto iste facilis laborum, quibusdam sequi ipsum minima ex sit voluptatibus deleniti?</p>
                     <a href="" className="VerMais">&gt;&gt;Veja mais</a>
                </div>
                <div>
                    <Card width={24.6875} height={28.8125} img={img} />
                    <h2>Bla Bla project 1</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint animi officiis excepturi quae. Numquam delectus facere ducimus veniam, architecto iste facilis laborum, quibusdam sequi ipsum minima ex sit voluptatibus deleniti?</p>
                    
                    <a href="" className="VerMais">&gt;&gt;Veja mais</a>
                </div>
                
                
                
               
            </div>

            <div id="Estrelas1">
                <img id="Direita" src={imgThemes[theme].estrelaDDevlogs} alt="" />
                <img id="Esquerda" src={imgThemes[theme].estrelaEDevlogs} alt="" />
            </div>
             
            <div id="SegundaParte">
               <h3>Mais Devlogs</h3>
              
                <div id="MaisDevlogs">
                     
                      <div>
                        <a href="#">&#62;&#62;More Devlogs</a>
                        <a href="#">&#62;&#62;More Devlogs</a>
                        <a href="#">&#62;&#62;More Devlogs</a>
                    </div>
                    <div>
                        <a href="#">&#62;&#62;More Devlogs</a>
                        <a href="#">&#62;&#62;More Devlogs</a>
                        <a href="#">&#62;&#62;More Devlogs</a>
                    </div>
                    <div>
                        <a href="#">&#62;&#62;More Devlogs</a>
                        <a href="#">&#62;&#62;More Devlogs</a>
                        <a href="#">&#62;&#62;More Devlogs</a>
                    </div>
                    <div>
                        <a href="#">&#62;&#62;More Devlogs</a>
                        <a href="#">&#62;&#62;More Devlogs</a>
                        <a href="#">&#62;&#62;More Devlogs</a>
                    </div>
                    <div>
                        <a href="#">&#62;&#62;More Devlogs bla bla bla bla</a>
                        <a href="#">&#62;&#62;More Devlogs</a>
                        <a href="#">&#62;&#62;More Devlogs</a>
                    </div>
                    <div>
                        <a href="#">&#62;&#62;More Devlogs</a>
                        <a href="#">&#62;&#62;More Devlogs</a>
                        <a href="#">&#62;&#62;More Devlogs</a>
                    </div>

                </div>

                <img src={imgThemes[theme].estrelaMaisDevlogs} alt="" />
                
                
            </div>

        

            


        </div>
    )
}