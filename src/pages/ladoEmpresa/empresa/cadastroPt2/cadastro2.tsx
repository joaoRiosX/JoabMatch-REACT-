import "./style.css"
import Input from "../../../assets/components/input/input"
import { Button } from "../../../assets/components/button/button";
export function Cadastro2(){
    return(
        <main className="container">
            <div className="content">
                <div className="tittle">
                    <h2 className="title titleSecond">Cadastro</h2>
                </div>
                <div className="form">
                    <form action="" className="cadastro">
                        <div className="firstCollum">
                            
                            <div>
                                <label htmlFor="NomeEMpresa" className="labelTop">Nome da Empresa:</label>
                            </div>
                            <Input placeholder={"digite o nome da sua empresa:"}  name={"NomeEmpresa"} type={"text"} className={"inputFix"} required/>
                            <div>
                                <label htmlFor="CEP" className="labelTop">CEP:</label>
                            </div>
                            <Input placeholder={"digite o CEP:"}  type={"text"} name={"CEP"} className={"inputFix"} required/>
                            <div>
                                <label htmlFor="Cidade" className="labelTop">Cidade:</label>
                            </div>
                            <Input placeholder={"digite a sua Cidade:"}  name={"Cidade"} type={"text"} className={"inputFix"} required/>
                            <div>
                                <label htmlFor="Estado" className="labelTop">Estado:</label>
                            </div>
                            <Input placeholder={"digite o seu estado:"}  name={"Estado"} type={"text"} className={"inputFix"} required/>
                            <div>
                                <label htmlFor="Bairro" className="labelTop">Bairro:</label>
                            </div>
                            <Input placeholder={"digite o seu bairro:"}  name={"Bairro"} type={"text"} className={"inputFix"} required/>
                            <div>
                                <label htmlFor="Numero" className="labelTop">Numero:</label>
                            </div>
                            <Input placeholder={"digite o seu numero:"}  name={"Numero"} type={"text"} className={"inputFix"} required/>
                            <div>
                                <label htmlFor="Rua" className="labelTop">Rua:</label>
                            </div>
                            <Input placeholder={"digite o nome da sua rua:"}  name={"Rua"} type={"text"} className={"inputFix"} required/>
                            <div>
                                <label htmlFor="Complemento" className="labelTop">Complemento:</label>
                            </div>
                            <Input placeholder={"digite o Complemento:"}  name={"Complemento"} type={"text"} className={"inputFix"} />
                            <div>
                                <Button className={"btn btnSecondE max-w-fit "}>Voltar</Button>  
                            </div>
                            
                        </div>
                        <div className="secondCollum">
                                <div>
                                <label htmlFor="Telefone" className="labelTop">Telefone:</label>
                            </div>
                            <Input placeholder={"digite o telefone:"}  name={"telefone"} type={"text"} className={"inputFix"} /><div>
                                <label htmlFor="Segmento" className="labelTop">Segmento de atuação:</label>
                            </div>
                            <Input placeholder={"digite o Segmento de atuação:"}  name={"Segmento"} type={"text"} className={"inputFix"} /><div>
                                <label htmlFor="Renda" className="labelTop">Renda mensal:</label>
                            </div>
                            <Input placeholder={"digite a Renda Mensal da Empresa:"}  name={"Renda"} type={"text"} className={"inputFix"} /><div>
                                <label htmlFor="QtdFuncionarios" className="labelTop">Quantidade de funcionarios:</label>
                            </div>
                            <Input placeholder={"digite a quantidade de funcionarios:"}  type={"QtdFuncionarios"} className={"inputFix"} /><div>
                                <label htmlFor="TipoProduto" className="labelTop">Tipo de produto:</label>
                            </div>
                            <Input placeholder={"digite o Tipo do produto:"}  name={"TipoProduto"} type={"text"} className={"inputFix"} />
                            <div>
                                <label htmlFor="" className="labelTop">Documento de validação</label>
                            </div>
                            <Button className={"btn btnSecondE"}>Arquivo</Button>

                            <div>
                                <Button className={"btn btnSecondE "}>Finalizar cadastro</Button>
                            </div>
                        </div>
                    </form>
                </div>
                
            </div>  
        </main>
    );
}

export default Cadastro2;