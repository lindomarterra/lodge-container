import React  from 'react' 
import '../../index.css'
import acomodacoes1 from '../.././img/acomodacoes1.webp'
import acomodacoes2 from '../.././img/acomodacoes2.webp'
import acomodacoes3 from '../.././img/acomodacoes3.webp'
import acomodacoes4 from '../.././img/acomodacoes4.webp'
import acomodacoes5 from '../.././img/acomodacoes5.webp'






function Acomodacoes() {
    
     return (
        <section className='mb-5 pb-5' >

            <div className='container-md'>
                <hr/>
                <div className='mb-4'>
                    <h5 className='text-black-50 fw-bolder py-2 text-uppercase mb-0 pb-0'> Acomodações </h5>
                    <small className='mt-0 pt-0 text-black-50' > Conheça nossas acomodações  </small>
                </div>
               
                <div className='carousel slide' id='acomodacoes-fotos'  >

                    <div className='carousel-inner '>

                        <div className="carousel-item active">
                            <div className="row">
                                <div className="col-4">
                                    <div className="d-flex flex-column text-center border border-1 border-blck-50">
                                        <img src={acomodacoes1} alt="img" className='w-100 d-block' />
                                        <h5 className='my-3 text-black-50 '> SUÍTE LUXO SUPERIOR </h5>
                                        <span className='text-black-50 fs-6 p-2'>
                                            1° andar, cama casal queen, ar condicionado, frigobar, ventilador de teto, cafeteira, wi-fi, banheiro privativo, vista para a lagoa e varanda exclusiva. Capacidade 2 pessoas.
                                        </span>
                                       
                                        <button type='button' className='rounded-5 mx-4 my-3 p-2 fw-bolder border border-2 border-light btn-detalhes' >DETALHES</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>


            </div>


        </section> 
    )
}

export default Acomodacoes