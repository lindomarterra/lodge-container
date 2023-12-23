import React from 'react' 
import '../../index.css'
import { IoMdStar } from "react-icons/io"
import { BsFillTelephoneFill } from "react-icons/bs"
import { MdOutlineEmail } from "react-icons/md"
import { FaLocationDot } from "react-icons/fa6"
import { CgInstagram } from "react-icons/cg"
import { TfiYoutube } from "react-icons/tfi"
import { SiTripadvisor } from "react-icons/si"

function Footer() {
    return ( 
        <footer style={{backgroundColor:'whitesmoke'}} className='py-5' >
            <div className='container-md' >

                <div className="row">
                    
                    <div className="col-md-6 col-lg-4">
                        <div className="p-2 " >
                            <small className='fw-bold' > POUSADA VILLA CONTAINER LODGE </small> 
                            <small className='text-black-50'> CNPJ:31.707.370/0001-97 </small>
                            <div>
                                <IoMdStar className='text-warning fs-5' />
                                <IoMdStar className='text-warning fs-5' />
                                <IoMdStar className='text-warning fs-5' />
                                <IoMdStar className='text-warning fs-5' />
                                <IoMdStar className='text-black-50 fs-5 opacity-25' />
                            </div>                            
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4">
                        <div className="p-2 ">
                            <p>
                                <span > <MdOutlineEmail className='fs-4 me-1 text-black-50' /></span>
                                <small className='pt-1 text-black-50 reservasHover' >reservas@villacontainerlodge.com.br</small>
                            </p>
                            <p>
                                <BsFillTelephoneFill className='fs-5 me-1 text-black-50' />
                                <small className='ms-2 zapHover text-black-50' > Whatsapp:  +55 (03) 7 9992-5234 </small>
                            </p>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4">
                        <div className="p-2 d-flex align-items-center ">
                            <FaLocationDot className='me-2 fs-3 text-black-50' />            
                            <div className='text-black-50 enderecoHover ' >
                                <small> Estrada Macaúbas, Km 1.5, Centro </small> <br/>
                                <small>Capitólio, Minas Gerais, Brasil</small> <br/>
                                <small>CEP: 37.930-000</small>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='p-5 text-center'>
                <span className='m-1 p-4 rounded-2 instaHover'><CgInstagram   className='fs-4 text-black '/></span>
                <span className='m-1 p-4 rounded-2 youTubeHover'><TfiYoutube  className='fs-4 text-black '/></span>
                <span className='m-1 p-4 rounded-2 tripHover'><SiTripadvisor  className='fs-4 text-black '/></span>            
            </div>

            </div>   
        </footer>
    )
}

export default Footer