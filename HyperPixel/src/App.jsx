import Card from "./Components/Card";
import img from "/src/assets/img/home/sb-rosas-home/Rosas-vermelho.png";

export default function App(){
    return(
        <div>
            <Card width={20} height={20} src={img} />
        </div>
    )
}