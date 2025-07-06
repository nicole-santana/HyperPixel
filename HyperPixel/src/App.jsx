import Card from "./Components/Card";
import img from "/src/assets/img/home/caveira-home/caveira-vermelho.png"

export default function App(){
    return(
        <div>
            <Card width={400} height={200} src={img} />
        </div>
    )
}