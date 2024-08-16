import { Routes, Route } from "react-router-dom";
import { CadastroLogin } from '../pages/ladoEmpresa/empresa/loginEmpresa/Login'
import { Home } from '../pages/Home/index'

export function RoutesPage(){
    return(
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/login" element={<CadastroLogin />}/>
        </Routes>
    )
}

export default RoutesPage;