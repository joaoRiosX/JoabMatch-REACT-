import { useEffect, useRef } from "react";
import { Button } from "../../../../assets/components/button/button";
import Input from "../../../../assets/components/input/input"
import "./style.css"



export function CadastroLogin(){

    const inputRef = useRef<HTMLInputElement>(null);
    const input2Ref = useRef<HTMLInputElement>(null);
  
    useEffect(() => {
      const body = document.body;
  
      const handleSigninClick = () => {
        body.className = "sign-in-js";
      };
  
      const handleSignupClick = () => {
        body.className = "sign-up-js";
      };
  
      const btnSignin = document.getElementById("signin");
      const btnSignup = document.getElementById("signup");
  
      btnSignin?.addEventListener("click", handleSigninClick);
      btnSignup?.addEventListener("click", handleSignupClick);
  
      const formatCNPJ = (input: HTMLInputElement | null, e: KeyboardEvent) => {
        if (!input) return;
        const inputLength = input.value.length;
  
        if (inputLength === 2 || inputLength === 6) {
          input.value += ".";
        } else if (inputLength === 10) {
          input.value += "/";
        } else if (inputLength === 15) {
          input.value += "-";
        }
      };
  
      inputRef.current?.addEventListener("keypress", (e) => formatCNPJ(inputRef.current, e));
      input2Ref.current?.addEventListener("keypress", (e) => formatCNPJ(input2Ref.current, e));
  
      const loading = () => {
        const boxLoad = document.getElementById("boxLoad");
        if (boxLoad) {
          boxLoad.style.display = "none";
        }
      };
  
      document.addEventListener("DOMContentLoaded", () => {
        setTimeout(() => {
          console.log("DOMContentLoaded");
          loading();
        }, 1000);
      });
  
      // Cleanup function
      return () => {
        btnSignin?.removeEventListener("click", handleSigninClick);
        btnSignup?.removeEventListener("click", handleSignupClick);
        inputRef.current?.removeEventListener("keypress", (e) => formatCNPJ(inputRef.current, e));
        input2Ref.current?.removeEventListener("keypress", (e) => formatCNPJ(input2Ref.current, e));
      };
    }, []); 
    return(
        
        <div className="container">
        <div className="content first-content">
            <div className="first-column">
                <h2 className="title title-primary">JobMatch!</h2>
                <h3 className="tittle title-secondary"> Já possui uma conta?</h3>
                <Button id="signin" className="btn btnPrimaryE">clique aqui
                </Button>
            </div>    
            <div className="second-column">
                <h2 className="title title-second">Cadastro</h2>
                <form className="form">
                        <Input type="text" placeholder="Digite o nome da sua empresa..." label="Nome:"/>
                        <Input  type="text" id="cnpjInput" maxLength={18} placeholder="Digite seu CNPJ..." label="CNPJ:"/>
                        <Input type="email" placeholder="Digite seu Email..." label="Email:" />
                        <Input type="password" placeholder="digite sua Senha..." label="Senha:"/>
                        <Input type="password" placeholder="Confirme sua Senha..." label="Confirme sua Senha" />
                    
                    
                    <a href="../../pages/cadastroEmpresapt2/html/index.html" className="flex justify-center;">
                        <Button type="button" className="btn btnSecondE" id="nav">
                             Cadastrar
                         </Button>
                     </a>       
                </form>
            </div>
        </div>
        <div className="content second-content">
            <div className="first-column">
                <h2 className="title title-primary">JobMatch!</h2>
                <h2 className="tittle title-secondary">Não possui uma conta?<br/>
                    Crie uma agora</h2>
                <Button id="signup" className="btn btnPrimaryE">Criar Conta</Button>
            </div>
            <div className="second-column">
                <h2 className="title title-second">Entrar</h2>
                <form className="form">
                        <Input className="inputForm" type="text" id="cnpjInput2" maxLength={18} placeholder="Digite seu CNPJ..." label="CNPJ:"/>
                        <Input type="email" placeholder="Digite seu Email..." label="Email:"/>
                        <Input type="password" placeholder="digite sua Senha..." label="Senha:"/>
                    <a className="password" href="#">forgot your password?</a>
                    <Button className="btn btnSecondE">Entrar</Button>
                </form>
            </div>
        </div>
    </div>
  
    )
}
export default CadastroLogin;