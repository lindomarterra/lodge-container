import React  from 'react' 
import '../../index.css'
import galeria01 from '../.././img/galeriafotos01.webp'
import galeria02 from '../.././img/galeriafotos02.webp'
import galeria03 from '../.././img/galeriafotos03.webp'
import galeria04 from '../.././img/galeriafotos04.webp'
import galeria05 from '../.././img/galeriafotos05.webp'
import galeria06 from '../.././img/galeriafotos06.webp'
import galeria07 from '../.././img/galeriafotos07.webp'
import galeria08 from '../.././img/galeriafotos08.webp'


function Galeriafotos() {
    
     return (
        <section className='mb-5 pb-5' >

            <div className='container-md'>
                <hr/>
                <div className='mb-4'>
                    <h5 className='text-black-50 fw-bolder py-2 text-uppercase mb-0 pb-0'> Galeria de fotos </h5>
                    <small className='mt-0 pt-0 text-black-50' > Confira </small>
                </div>


                <div className='carousel slide' id='galeria-fotos'  >

                    <div className="carousel-indicators">
                        <p type="button" data-bs-target="#galeria-fotos" data-bs-slide-to="0" className="active">
                            Estrutura
                        </p>
                        <p type="button" data-bs-target="#galeria-fotos" data-bs-slide-to="1" >Café da manhã</p>
                        <p type="button" data-bs-target="#galeria-fotos" data-bs-slide-to="2" >Atividades</p>
                    </div>

                    <div className='carousel-inner'>

                        <div className='carousel-item active'>
                             <div className='row'>

                                <div className="col-6 col-md-4 col-lg-3">
                                     <img src={galeria01} alt="img" className='mb-4 d-block w-100' />          
                                </div>
                                <div className="col-6 col-md-4 col-lg-3">
                                     <img src={galeria02} alt="img" className='mb-4 d-block w-100' />          
                                </div>
                                <div className="col-6 col-md-4 col-lg-3">
                                     <img src={galeria03} alt="img" className='mb-4 d-block w-100' />          
                                </div>
                                <div className="col-6 col-md-4 col-lg-3">
                                     <img src={galeria04} alt="img" className='mb-4 d-block w-100' />          
                                </div>
                                <div className="col-6 col-md-4 col-lg-3">
                                     <img src={galeria05} alt="img" className='mb-4 d-block w-100' />          
                                </div>
                                <div className="col-6 col-md-4 col-lg-3">
                                     <img src={galeria06} alt="img" className='mb-4 d-block w-100' />          
                                </div>
                                <div className="col-6 col-md-4 col-lg-3">
                                     <img src={galeria07} alt="img" className='mb-4 d-block w-100' />          
                                </div>
                                <div className="col-6 col-md-4 col-lg-3">
                                     <img src={galeria08} alt="img" className='mb-4 d-block w-100' />          
                                </div>
                                
                            </div>  
                        </div>

                        <div className='carousel-item'>
                             <div className='row'>

                                <div className="col-6 col-md-4 col-lg-3">
                                     <img src={galeria01} alt="img" className='mb-4 d-block w-100' />          
                                </div>
                                <div className="col-6 col-md-4 col-lg-3">
                                     <img src={galeria02} alt="img" className='mb-4 d-block w-100' />          
                                </div>
                                <div className="col-6 col-md-4 col-lg-3">
                                     <img src={galeria03} alt="img" className='mb-4 d-block w-100' />          
                                </div>
                                <div className="col-6 col-md-4 col-lg-3">
                                     <img src={galeria04} alt="img" className='mb-4 d-block w-100' />          
                                </div>
                                <div className="col-6 col-md-4 col-lg-3">
                                     <img src={galeria05} alt="img" className='mb-4 d-block w-100' />          
                                </div>
                                <div className="col-6 col-md-4 col-lg-3">
                                     <img src={galeria06} alt="img" className='mb-4 d-block w-100' />          
                                </div>
                                <div className="col-6 col-md-4 col-lg-3">
                                     <img src={galeria07} alt="img" className='mb-4 d-block w-100' />          
                                </div>
                                <div className="col-6 col-md-4 col-lg-3">
                                     <img src={galeria08} alt="img" className='mb-4 d-block w-100' />          
                                </div>
                                
                            </div>  
                        </div>

                        <div className='carousel-item'>
                             <div className='row'>

                                <div className="col-6 col-md-4 col-lg-3">
                                     <img src={galeria01} alt="img" className='mb-4 d-block w-100' />          
                                </div>
                                <div className="col-6 col-md-4 col-lg-3">
                                     <img src={galeria02} alt="img" className='mb-4 d-block w-100' />          
                                </div>
                                <div className="col-6 col-md-4 col-lg-3">
                                     <img src={galeria03} alt="img" className='mb-4 d-block w-100' />          
                                </div>
                                <div className="col-6 col-md-4 col-lg-3">
                                     <img src={galeria04} alt="img" className='mb-4 d-block w-100' />          
                                </div>
                                <div className="col-6 col-md-4 col-lg-3">
                                     <img src={galeria05} alt="img" className='mb-4 d-block w-100' />          
                                </div>
                                <div className="col-6 col-md-4 col-lg-3">
                                     <img src={galeria06} alt="img" className='mb-4 d-block w-100' />          
                                </div>
                                <div className="col-6 col-md-4 col-lg-3">
                                     <img src={galeria07} alt="img" className='mb-4 d-block w-100' />          
                                </div>
                                <div className="col-6 col-md-4 col-lg-3">
                                     <img src={galeria08} alt="img" className='mb-4 d-block w-100' />          
                                </div>
                                
                            </div>  
                        </div>

                    </div>

                </div>


            </div>


        </section> 
    )
}

export default Galeriafotos