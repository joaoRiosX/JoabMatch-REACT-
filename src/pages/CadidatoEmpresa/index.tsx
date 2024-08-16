import "./style.css"
import { User, IdCard } from 'lucide-react';

export function EscolhaPerfil(){
    return(
        <main>
            <div className="center">
                <div className="flex flex-col gap-3">
                    <h1 className="tittle-primary">JobMatch</h1>
                    <p className="tittle-third">Conectando talentos à oportunidades</p>
                </div>

                <h2 className="tittle-secondary">Antes de darmos continuade, você é:</h2>

                <div className="escolha flex gap-16">
                    <a href="">
                        <div className="candidato flex  items-center justify-center">
                            <User className="i w-28 h-28"/>
                            <span className="w-fit h-6">candidato</span>
                            
                            
                        </div>
                    </a> 
                    <a href=""> 
                        <div className="empresa flex items-center justify-center">
                            <IdCard className="i w-28 h-28 "/>
                            <span className="w-fit h-6">empresa</span>
                        </div>
                    </a>
                
                </div>
            </div>
        </main>
          
    )
}

export  default EscolhaPerfil;