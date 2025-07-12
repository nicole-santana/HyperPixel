import Card from "./Components/Card";
import Header from "./Components/Header";
import Footer from './Components/Footer';
import img from "/src/assets/img/home/sb-rosas-home/Rosas-windows.png";

export default function App(){
    return(
        <div>
            <Header/>
            <Card width={30} height={30} src={img} />
            <Card width={30} height={30} src={img} />
            <Card width={30} height={30} src={img} />
            <Card width={30} height={30} src={img} />
            <Footer/>
            
            
        </div>
    )
}