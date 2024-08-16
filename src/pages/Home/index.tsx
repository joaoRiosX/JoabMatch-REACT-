import "./style.css"
import { Button } from "../../assets/components/button/button"
import Input from "../../assets/components/input/input"
import BannerTop from "./assets/Group 1.svg"
import Pernambucanas from "./assets/imagemPernambucanas.svg"
import Americanas from "./assets/imagemAmericanas.svg"
import Diafer from "./assets/imagemDiafer.svg"


export function Home(){
    return(
        <main>
                <form className="form w-full flex-row" action="" >
                    <Input type={"buscar"} id={"buscar"} placeholder={"Pesquisar"} className="w-full"/>
                    <i className="bi bi-search"></i>
                <div className="buttons-form">
                    <a href="#" className="flex justify-center">
                        <Button type={"button"} className={"btn btnPrimaryC max-w-fit"} id={"nav"}>Fale conosco</Button>
                    </a>

                    <a href="#" className="flex justify-center max-w-2">
                        <Button type={"button"} className={"btn btnPrimaryC max-w-fit"} id={"nav"}>Entrar</Button>
                    </a>
                </div>
                    
                
            </form>
        
            <div className="banner-top">
                <img src={BannerTop} alt=""/>
            </div>
            <div className="label">
                <h2>Você pode se interessar</h2>
            </div>
            <ul className="gallery">
                <li className="carrosel-img1 z-10"></li>    
                <li className="carrosel-img2"></li>
                <li className="carrosel-img3"></li>
                <li className="carrosel-img4"></li>
                <li className="carrosel-img5"></li>
            </ul>
            <div className="label">
                <h2>Empresas parceiras</h2>
            </div>
            <div className="div-empresas">
                <img src={Pernambucanas} alt=""/>
                <img src={Americanas} alt=""/>
                <img src={Diafer} alt=""/>
            </div>
        </main>
        

    )
}   

export default Home;