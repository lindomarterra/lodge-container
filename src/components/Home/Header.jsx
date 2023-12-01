import React from 'react' 
import { FaReact } from "react-icons/fa";
import '../../index.css'

function Header() {
    return ( 

            <header className='header-home border-bottom border-light' >
           
                <nav className='container-lg navbar navbar-expand-md'>
                    <div className='container-fluid '>

                        <FaReact  style={{width:'40px', height:'40px', cursor:'pointer'}} className='navbar-brand d-md-none'/>
                        
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"                  data-bs-target="#navbarNavDropdown">    <span className="navbar-toggler-icon"></span>
                        </button>    

                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            
                            <div className='d-md-flex justify-content-between w-100'>
                                <div className='d-md-flex' >
                                    <p className='link-page-home fw-bolder'> A Pousada </p>
                                    <p className='link-page-home fw-bolder'> Acomodações </p>
                                    <p className='link-page-home fw-bolder'> Fotos  </p>
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

            </header>
    )
}

export default Header