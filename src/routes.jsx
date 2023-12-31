import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home/Home'
import Acomodacoes from './pages/Acomodacoes/Acomodacoes'
import Contato from './pages/Contato/Contato'
import Fotos from './pages/Fotos/Fotos'
import MinhaConta from './pages/MinhaConta/MinhaConta'
import MinhasBuscas from './pages/MinhasBuscas/MinhasBuscas'
import Pousada from './pages/Pousada/Pousada'
import Quarto1 from './pages/Quartos/Quarto'


function AppRoutes() {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Home/> } ></Route>
                <Route path='/acomodacoes' element={ <Acomodacoes/> } ></Route>
                <Route path='/contato' element={ <Contato/> } ></Route>
                <Route path='/fotos' element={ <Fotos/> } ></Route>
                <Route path='/minhaConta' element={ <MinhaConta/> } ></Route>
                <Route path='/minhasBuscas' element={ <MinhasBuscas/> } ></Route>
                <Route path='/pousada' element={ <Pousada/> } ></Route>
                <Route path='/quarto1' element={ <Quarto1/> } ></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes