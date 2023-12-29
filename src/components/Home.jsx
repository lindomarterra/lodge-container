import React from 'react' 
import '../index.css'
import logo from './img/logo.webp'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Main from './Main'
import Pousada from './Pousada'
import Pageacomodacoes from './PageAcomodacoes'
import Fotos from './Fotos'

function Home() {
    return ( 
        <header >
            <Router>
                <nav className='container-lg navbar navbar-expand-md'>
                    <div className='container-fluid '>
                        <Link to="/main" >  <img src={logo}  alt='img' style={{width:'60px', height:'70px', cursor:'pointer'}} className='navbar-brand text-decoration-none'/>
                        </Link>
                        
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"                  data-bs-target="#navbarNavDropdown">    <span className="navbar-toggler-icon"></span>
                        </button>
                                
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        
                            <div className='d-md-flex justify-content-between w-100'>
                                <div className='d-md-flex' >
                                    <Link to="/pousada" className='link-page-home fw-bolder text-decoration-none'>A Pousada 
                                    </Link>
                                    <Link to="/acomodacoes" className='link-page-home fw-bolder text-decoration-none'>Acomodações 
                                    </Link>
                                    <Link to="/fotos" className='link-page-home fw-bolder text-decoration-none'>Fotos 
                                    </Link>
                                </div>
                                <div className='d-md-flex' >
                                    <p className='link-page-home fw-bolder'> Minha Conta </p>
                                    <p className='link-page-home fw-bolder'> Minhas Buscas </p>
                                    <p className='link-page-home fw-bolder'> Contato  </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>

                <Routes>
                    <Route exact path="/main" element={<Main/>}/>
                    <Route exact path="/pousada" element={<Pousada/>}/>
                    <Route exact path="/acomodacoes" element={<Pageacomodacoes/>}/>
                    <Route exact path="/fotos" element={<Fotos/>}/>
                </Routes> 

            </Router>
</header>
    )
}

export default Home