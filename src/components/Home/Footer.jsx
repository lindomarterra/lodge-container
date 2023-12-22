import React from 'react' 
import { MdOutlineStarBorder } from "react-icons/md"
import { BsFillTelephoneFill } from "react-icons/bs"
import { MdOutlineEmail } from "react-icons/md"
import { FaLocationDot } from "react-icons/fa6"

function Footer() {
    return ( 
        <footer className='p-2' >
            <div className='container-md' >
                <div className="row">
                    
                    <div className="col-md-6 col-md-4 col-lg-3">
                        <div className="d-flex flex-column justify-content-between p-2">
                            <div className='divTop'>
                                <small className='fw-bold' > POUSADA VILLA CONTAINER LODGE </small>
                                <small className='text-black-50 '> CNPJ: 31.707.370/0001-97 </small>
                                <div>
                                    <MdOutlineStarBorder className='fs-3 bg-danger '  />
                                    <MdOutlineStarBorder className='fs-3  '  />
                                </div>
                            </div>        
                            <div className='divBottom'>
                                <BsFillTelephoneFill />
                                <small> Whatsapp:  +55 (03) 7 9992-5234 </small>
                            </div>  
                        </div>
                    </div>

                    <div className="col-md-6 col-md-4 col-lg-3">
                        <div className="d-flex justify-content-center align-items-center p-2">
                                <p>reservas@villacontainerlodge.com.br</p>
                                <MdOutlineEmail />
                        </div>
                    </div>

                    <div className="col-md-6 col-md-4 col-lg-3">
                        <div className="d-flex justify-content-center align-items-center p-2">
                            <FaLocationDot />            
                            <div className='divEndereco' >
                                <p> Estrada Macaúbas, Km1.5, Centro </p>
                                <p>Capitólio, MinasGerais, Brasil</p>
                                <p>CEP: 37.930-000</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-md-4 col-lg-3">
                        <div className="d-flex justify-content-center align-items-center p-2">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dolorem impedit quod nam nisi veniam, animi earum eveniet cumque commodi officia molestias. Voluptatem eius molestias est dolore ipsum id doloremque.
                        </div>
                    </div>


                </div>
            </div>   
        </footer>
    )
}

export default Footer