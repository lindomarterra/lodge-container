import React from 'react' 
import Header from '../../components/Header/Header'
import foto1 from '../../img/pageAcomodacoesFoto1.webp'
import './Acomodacoes.css'

function Acomodacoes() {
    return (
        <body>

            <Header/>
            
            <main style={{marginTop:'100px'}} className="container" >

                <hr/>

                <h4 className='text-black-50 fw-semibold' >Acomodações</h4>
                <p className="text-black-50" >Conheça nossas acomodações</p>

                <section className="mt-5">

                    <div style={{color:'grey'}} className='d-flex align-items-center justify-content-center border border-1 rounded-2' >
                        <div className="row" >

                            <div className="col-md-4" >
                                <img src={foto1} alt="img" className="w-100 h-100" />
                            </div>
    
                            <div className="col-md-4 py-5" >
                                <div className="border-end  border-md-1" >
                                    <h5 className="text-black-50 fw-semibold text-center" > Suíte Luxo Superior </h5>
                                    <p className="text-black-50 text-start px-3">
                                        <small >
                                            1° andar, cama casal queen, ar condicionado, frigobar, ventilador de teto, cafeteira, wi-fi,banheiro privativo, vista para a lagoa e varanda exclusiva. Capacidade 2 pessoas.
                                        </small>
                                    </p>
                                    <p style={{cursor:"pointer"}} className="fw-semibold text-end m-1 pe-2 maisDetalhes" >
                                        <small> <i> mais detalhes </i> </small>
                                    </p>
                                </div>                               
                            </div>
    
                            <div className="col-md-4 d-flex align-items-center justify-content-center ">
                                 <div className=''>
                                    <button className="px-5 p-2 rounded-2 fw-semibold bg-black opacity-50 text-light"> Reservar </button></div>
                                 </div>
                        </div>

                    </div>



                </section>


            </main>


            



        </body>
    )
}

export default Acomodacoes