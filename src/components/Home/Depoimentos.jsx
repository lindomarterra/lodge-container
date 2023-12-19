import React  from 'react' 
import '../../index.css'
import { LiaCommentAlt } from "react-icons/lia";

function Depoimentos() {
    
     return (


        <section className='mb-5 pb-5' >
            <div className='container-sm'>
                <hr/>

                <div className='mb-4'>
                    <h5 className='text-black-50 fw-bolder py-2 text-uppercase mb-0 pb-0'> Depoimentos </h5>
                    <small className='mt-0 pt-0 text-black-50' > Depoimentos de nossos hospedes!  </small>
                </div>
               
                   {/* DESKTOP CAROUSEL */}
                <div className='carousel slide d-none w-100 d-lg-block mb-5 '  
                        data-bs-ride="carousel" id='slide-depoimentos-desktop' >

                   <div className='carousel-inner'>

                        <div className="carousel-item active" data-bs-interval='10000' >
                            <div className="row">

                                <div className="col-6">
                                    <div className='' >
                                        <div style={{fontStyle:'italic', height:'175px'}} className='txt-comment border border-3 rounded-3 text-black-50 p-4 overflow-y-auto' >"Desde a arquitetura, a limpeza, a decoração, o lago maravilhoso que fica em frente à pousada com stand up e boia para você aproveitar...até o café da manhã...e principalmente o carinho do Thiago, que é o dono. A estadia foi maravilhosa e contribuiu para que nossas férias e nossa experiência em Capitólio fosse inesquecível".
                                        </div>
                                        <h6 className='text-end mt-1' > Ingrid </h6>
                                    </div>
                                </div>
                                
                                <div className="col-6">
                                    <div className='' >
                                        <div style={{fontStyle:'italic', height:'175px'}} className='txt-comment border border-3 rounded-3 text-black-50 p-4 overflow-y-auto' >"O local é muito aconchegante, o quarto é ótimo, tem ventilador de teto e ar condicionado , a cama éconfortável o chuveiro é sensacional, ... o dono do local Tiago é muito atencioso , deu suporte o tempo todo , indicou passeios ... Sem dúvidas se voltarmos a Capitólio ficaremos aqui"...
                                        </div>
                                        <h6 className='text-end mt-1' > Jamila </h6>
                                    </div>
                                </div>
                                
                            </div>


                        </div>

                        <div className="carousel-item" data-bs-interval='10000' >
                            <div className="row">

                                <div className="col-6">
                                    <div style={{fontStyle:'italic', height:'175px'}} className='txt-comment border border-3 rounded-3 text-black-50 p-4 overflow-y-auto' >
                                        <p >"O local é muito aconchegante, o quarto é ótimo, tem ventilador de teto e ar condicionado , a cama éconfortável o chuveiro é sensacional, ... o dono do local Tiago é muito atencioso , deu suporte o tempo todo , indicou passeios ... Sem dúvidas se voltarmos a Capitólio ficaremos aqui"...
                                        </p>
                                    </div>
                                    <h6 className='text-end mt-1' > Jamila </h6>
                                </div>

                                <div className="col-6">
                                    <div style={{fontStyle:'italic', height:'175px'}} className='txt-comment border border-3 rounded-3 text-black-50 p-4 overflow-y-auto' >
                                        <p >"Cama e banheiro perfeitos !!!Localização calma e tranquila e o conceito da pousada de se desligar da correria é um presente extra !!! A beleza e simplicidade que o mundo moderno esta nos roubando estava presente em todos os detalhes.A lagoa, a pesca, a noite estrelada, as redes e a tranquilidade foram simplesmente brilhante !!!O Atendimento do Thiago e equipe foi cordial , educado, prestativo e muito atencioso com minha filha, minha irmã e meus pais...Vamos voltar com certeza absoluta".
                                        </p>
                                    </div>
                                    <h6 className='text-end mt-1' > Juliana </h6>
                                </div>
                                
                            </div>


                        </div>

                   </div>        

                </div>


                   {/* BTN CALL MODAL */}
                <div className='text-end' >
                    <button className='btnVerTodos fw-bold border-0 p-2 rounded-2' > ver todos </button>
                </div>


                


            </div>
        </section> 
    )
}

export default Depoimentos