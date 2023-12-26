import React, {useState} from 'react' 
import imgQuemSomos from '../../img/quemsomospage.webp'
import '../../index.css'
import { FaRegClock } from "react-icons/fa"

function Quemsomos() {

    const [shiftSentence, setShiftSentence]=useState(true)
    const showParagraph=()=>{ setShiftSentence(!shiftSentence)}
 
    return (
        <section className='mb-4 py-4' >
            <div className='container-md'>
                <div className='mb-4'>
                    <h5 className='text-black-50 fw-bolder py-2 text-uppercase mb-0 pb-0'>quem somos</h5>
                    <small className='mt-0 pt-0 text-black-50' >Saiba mais</small>
                </div>

                <div className='row'>
                    <div className='col-lg-6'>
                        <img src={imgQuemSomos} alt="img" className='w-100 ' />
                    </div>
                    <div style={{backgroundColor:'rgba(223, 212, 212, 0.082', border:'1px solid #615e5e10'}} className='col-lg-6'>
                            <div className='p-3'>
                                <h5 className='text-black-50 fw-bolder'>Pousada Villa Container Lodge:</h5>
                                <p className='fs-6 text-black-50'>
                                A Villa Container Lodge está situado no município de Capitólio MG. Ela possui uma localização privilegiada, tendo uma linda vista e acesso para a represa de Furnas.
                                </p>
                                  
                                
                               {
                                shiftSentence ? 
                               <small style={{cursor:'pointer'}} className='text-black-50' onClick={showParagraph} >ver mais</small> 
                               : 
                               <div className='fs-6 text-black-50'>
                                
                                <p>Todos os quartos possuem banheiro privativo e completo e os quartos Luxo têm varanda com vistapara a lagoa e o nascer do sol.</p>

                                <p>Alguns quartos (Quartos Luxo e Standart Casal) da pousada dispõem de mesa de trabalho ecafeteira Nespresso. Apenas os quartos Luxo possuem frigobar. Todos os quartos possuem arcondicionado e ventilador de teto. </p>

                                <p>Servimos buffet de café da manhã e contamos com serviços adicionais como venda de bebidas (Cervejas, Refris, Sucos, Energéticos e Água), de petiscos e outros.</p>

                                <p>A pousada fica em uma zona rural a 4,5 Km do centro de Capitólio, enquanto Passos está a 74 kmda propriedade.</p>
                                
                                   <small style={{cursor:'pointer'}} className='text-black-50' onClick={showParagraph} > ver menos </small>
                               </div>
                               }
                                
                               

                            </div>
                            <div className='p-3'>
                                <h5 className='text-black-50 fw-bolder'>Comodidades:</h5>
                                <div className='fs-6 text-black-50' >
                                    <div className='row'>
                                        <div className='col-sm-6'>
                                            <ul className='ps-1' >
                                                <li className='me-2 pe-2'>Animais permitido</li>
                                                <li className='me-2 pe-2'>Ar condicionado split</li>
                                                <li className='me-2 pe-2'>Café da manhã incluso</li>
                                            </ul>
                                        </div>
                                        <div className='col-sm-6'>
                                            <ul className='ps-1' >
                                                <li className='me-2 pe-2'>Esportes aquáticos</li>
                                                <li className='me-2 pe-2'>Estacionamento gratuito</li>
                                                <li className='me-2 pe-2'>wi-fi grátis</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <FaRegClock className='fs-5 text-black-50 me-2' /> 
                                 <span className='fs-6 text-black-50 fw-semibold ' > Check-in: 15:00 | Check-out: 11:00 </span>
                            </div>
                    </div>
                    
                </div>
            </div>


        </section>
    )
}

export default Quemsomos