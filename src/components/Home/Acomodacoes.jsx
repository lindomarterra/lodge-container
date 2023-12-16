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
               

               {/* DESKTOP CAROUSEL */}
                <div className='carousel slide p-4'  data-bs-ride="carousel" id='slide-acomodacoes' >

                    <div className='carousel-inner '>

                        <div className="carousel-item active">
                            <div className="row">

                                <div className="col-4">
                                    <div className="d-flex flex-column text-center border border-1 border-blck-50">
                                        <img src={acomodacoes1} alt="img" className='w-100 d-block' />
                                        <h5 className='my-3 text-black-50 '> SUÍTE LUXO SUPERIOR </h5>
                                        <p className='truncar-3l text-black-50 fs-6 p-2'>
                                            1° andar, cama casal queen, ar condicionado, frigobar, ventilador de teto, cafeteira, wi-fi, banheiro privativo, vista para a lagoa e varanda exclusiva. Capacidade 2 pessoas.
                                        </p>
                                       
                                        <button type='button' className='rounded-5 mx-4 mb-3 p-2 fw-bolder border border-2 border-light btn-detalhes' >DETALHES</button>
                                    </div>
                                </div>
                                
                                <div className="col-4">
                                    <div className="d-flex flex-column justify-content-between text-center border border-1 border-blck-50">
                                        <img src={acomodacoes2} alt="img" className='w-100 d-block' />
                                        <h5 className='my-3 text-black-50 '> SUÍTE LUXO TÉRREO </h5>
                                        <p className='truncar-3l text-black-50 fs-6 p-2'>
                                        Térreo, cama casal queen, ar condicionado, frigobar, ventilador de teto, cafeteira, wi-fi, banheiro privativo, vista para a lagoa e varanda exclusiva. Capacidade 2 pessoas
                                        </p>
                                       
                                        <button type='button' className='rounded-5 mx-4 mb-3 p-2 fw-bolder border border-2 border-light btn-detalhes' >DETALHES</button>
                                    </div>
                                </div>

                                <div className="col-4">
                                    <div className="d-flex flex-column text-center border border-1 border-blck-50">
                                        <img src={acomodacoes3} alt="img" className='w-100 d-block' />
                                        <h5 className='my-3 text-black-50 '> SUÍTE STANDART CASAL </h5>
                                        <p className='trauncar-3l text-black-50 fs-6 p-2'>
                                        1° andar, cama casal queen, ar condicionado, ventilador de teto, cafeteira, wi-fi, banheiro privativo. Capacidade 2 pessoas.
                                        </p>
                                       
                                        <button type='button' className='rounded-5 mx-4 mb-3 p-2 fw-bolder border border-2 border-light btn-detalhes' >DETALHES</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <div className="row">
                                                              
                                <div className="col-4">
                                    <div className="d-flex flex-column text-center border border-1 border-blck-50">
                                        <img src={acomodacoes2} alt="img" className='w-100 d-block' />
                                        <h5 className='my-3 text-black-50 '> SUÍTE LUXO TÉRREO </h5>
                                        <p className='truncar-3l text-black-50 fs-6 p-2'>
                                        Térreo, cama casal queen, ar condicionado, frigobar, ventilador de teto, cafeteira, wi-fi, banheiro privativo, vista para a lagoa e varanda exclusiva. Capacidade 2 pessoas
                                        </p>
                                       
                                        <button type='button' className='rounded-5 mx-4 mb-3 p-2 fw-bolder border border-2 border-light btn-detalhes' >DETALHES</button>
                                    </div>
                                </div>

                                <div className="col-4">
                                    <div className="d-flex flex-column text-center border border-1 border-blck-50">
                                        <img src={acomodacoes3} alt="img" className='w-100 d-block' />
                                        <h5 className='my-3 text-black-50 '> SUÍTE STANDART CASAL </h5>
                                        <p className='truncar-3l text-black-50 fs-6 p-2'>
                                        1° andar, cama casal queen, ar condicionado, ventilador de teto, cafeteira, wi-fi, banheiro privativo. Capacidade 2 pessoas.
                                        </p>
                                       
                                        <button type='button' className='rounded-5 mx-4 mb-3 p-2 fw-bolder border border-2 border-light btn-detalhes' >DETALHES</button>
                                    </div>
                                </div>

                                <div className="col-4">
                                    <div className="d-flex flex-column text-center border border-1 border-blck-50">
                                        <img src={acomodacoes4} alt="img" className='w-100 d-block' />
                                        <h5 className='my-3 text-black-50 '> SUÍTE STANDART DUPLO </h5>
                                        <p className='truncar-3l text-black-50 fs-6 p-2'>
                                        1° andar, cama casal queen bipartida, ar condicionado, ventilador de teto, cafeteira, wi-fi, banheiro privativo. Capacidade 2 pessoas.
                                        </p>
                                       
                                        <button type='button' className='rounded-5 mx-4 mb-3 p-2 fw-bolder border border-2 border-light btn-detalhes' >DETALHES</button>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="carousel-item">
                            <div className="row">

                                <div className="col-4">
                                    <div className="d-flex flex-column text-center border border-1 border-blck-50">
                                        <img src={acomodacoes3} alt="img" className='w-100 d-block' />
                                        <h5 className='my-3 text-black-50 '> SUÍTE STANDART CASAL </h5>
                                        <p className='truncar-3l text-black-50 fs-6 p-2'>
                                        1° andar, cama casal queen, ar condicionado, ventilador de teto, cafeteira, wi-fi, banheiro privativo. Capacidade 2 pessoas.
                                        </p>
                                       
                                        <button type='button' className='rounded-5 mx-4 mb-3 p-2 fw-bolder border border-2 border-light btn-detalhes' >DETALHES</button>
                                    </div>
                                </div>

                                <div className="col-4">
                                    <div className="d-flex flex-column text-center border border-1 border-blck-50">
                                        <img src={acomodacoes4} alt="img" className='w-100 d-block' />
                                        <h5 className='my-3 text-black-50 '> SUÍTE STANDART DUPLO </h5>
                                        <p className='truncar-3l text-black-50 fs-6 p-2'>
                                        1° andar, cama casal queen bipartida, ar condicionado, ventilador de teto, cafeteira, wi-fi, banheiro privativo. Capacidade 2 pessoas.
                                        </p>
                                       
                                        <button type='button' className='rounded-5 mx-4 mb-3 p-2 fw-bolder border border-2 border-light btn-detalhes' >DETALHES</button>
                                    </div>
                                </div>

                                <div className="col-4">
                                    <div className="d-flex flex-column text-center border border-1 border-blck-50">
                                        <img src={acomodacoes5} alt="img" className='w-100 d-block' />
                                        <h5 className='my-3 text-black-50 '> SUÍTE STANDART FAMILIA </h5>
                                        <p className='truncar-3l text-black-50 fs-6 p-2'>
                                        Térreo, cama de casal, beliche, ar condicionado, ventilador de teto, wi-fi, banheiro privativo. Capacidade 4 pessoas.
                                        </p>
                                       
                                        <button type='button' className='rounded-5 mx-4 mb-3 p-2 fw-bolder border border-2 border-light btn-detalhes' >DETALHES</button>
                                    </div>
                                </div>


                            </div>
                        </div>

                    </div>

                    <div className="carousel-indicators"  >
                        <button type="button" data-bs-target="#slide-acomodacoes" data-bs-slide-to="0" className="active">A</button>
                        <button type="button" data-bs-target="#slide-acomodacoes" data-bs-slide-to="1" >B</button>
                        <button type="button" data-bs-target="#slide-acomodacoes" data-bs-slide-to="2" >C</button>
                    </div>


                </div>

            </div>
        </section> 
    )
}

export default Acomodacoes