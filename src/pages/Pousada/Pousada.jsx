import React from "react";
import { IoMdStar } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import Header from "../../components/Header/Header";
import imgPousada from "../../img/quemsomospage.webp";
import "./Pousada.css";
import { FaCalendarAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaHeadset } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaChild } from "react-icons/fa";
import { SiPix } from "react-icons/si";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { GiClick } from "react-icons/gi";



function Pousada() {
  return (
    <body >

      <Header />
      
      <main className="container" >

        {/** FIRST COMPONENT  */}
        <div style={{ marginTop: "100px" }} className="container-md" >
          <hr />
          <h6 className="text-black-50">Pousada Villa Container Lodge </h6>

          {/** Foto Pousada  */}          
          <div>
            <span>
              <IoMdStar className="text-warning fs-5" />
              <IoMdStar className="text-warning fs-5" />
              <IoMdStar className="text-warning fs-5" />
              <IoMdStar className="text-warning fs-5" />
              <IoMdStar className="text-black-50 fs-5 opacity-25" />
            </span>
            <small className="ms-2">
              <FaLocationDot className="me-2 fs-3 text-black-50" />
            </small>
            <small className="text-black-50">Capitólio, MG</small>
          </div>

          {/** Infos Pousada  */}          
          <div className="mt-4">
            <div className="row">

              <div className="col-lg-8">
                <img src={imgPousada} alt="img" className="w-100 h-100" />
              </div>

              <div className="col-lg-4">

                  {/**DESKTOP VERSION */}
                  <div className="d-none d-lg-block" >
                    <div className="divCheckInOut text-center position-relative" >
                          <span className="logoCalender rounded-5 p-3">
                            <FaCalendarAlt className="fs-3 text-light" />
                          </span>
                      
                          <div className="mt-5 ">
                            <span className="fs-6 text-black-50 fw-semibold">
                              CHECK <i>IN-OUT</i>
                            </span>
                            <br />
                            <span style={{ fontSize: "0.8rem" }} className="text-black-50">
                              CheckIn:<span className="fw-semibold"> 15:00</span>
                            </span>
                            <span style={{ fontSize: "0.8rem" }} className="ms-2 text-black-50">
                              CheckOut:<span className="fw-semibold"> 11:00 </span>
                            </span>
                          </div>
                      </div>
                      <div className="divCheckInOut text-center position-relative" >
                          <span className="logoCalender rounded-5 p-3">
                            <FaWhatsapp className="fs-2 text-light" />
                          </span>
                          <div className="mt-5 text-center">
                      
                          <span className="fs-6 text-black-50 fw-semibold ">
                            Atendimento via Whatsapp
                          </span>
                          <br />
                          <span style={{ fontSize: "0.8rem" }} className="text-black-50 ">
                            <Link
                              to="https://api.whatsapp.com/send?phone=55037999252346"
                              target="_blank"
                              className="text-black-50 fw-semibold whatsappLink"
                            >
                              Click aqui
                            </Link>{" "}
                            para dúvidas, sugestões ou reservas.
                          </span>
                        </div>
                      </div>
                      <div className="divCheckInOut text-center position-relative" >
                          <span className="logoCalender rounded-5 p-3">
                            <FaHeadset className="fs-2 text-light" />
                          </span>
                          <div className="mt-5 text-center">
                            <small className="text-black-50 fw-semibold fs-6">
                              Central de Reservas
                            </small>
                            <br />
                            <small style={{ fontSize: "0.8rem" }} className="text-black-50 fw-semibold ">                          
                            Se preferir, ligue para fazer a sua reserva!
                            </small>
                            <br />
                            <small style={{ fontSize: "0.9rem" }} className="text-black-50 fw-semibold ">                          
                            (37) 9 9925-2346
                            </small>
                        </div>
                      </div>
                  </div>

                  {/**MOBILE VERSION */}
                  <div className="d-sm-none container px-1">
                    <div className="divCheckInOut text-center position-relative" >
                          <span className="logoCalender rounded-5 p-3">
                            <FaCalendarAlt className="fs-3 text-light" />
                          </span>
                      
                          <div className="mt-5 ">
                            <span className="fs-6 text-black-50 fw-semibold">
                              CHECK <i>IN-OUT</i>
                            </span>
                            <br />
                            <span style={{ fontSize: "0.8rem" }} className="text-black-50">
                              CheckIn:<span className="fw-semibold"> 15:00</span>
                            </span>
                            <span style={{ fontSize: "0.8rem" }} className="ms-2 text-black-50">
                              CheckOut:<span className="fw-semibold"> 11:00 </span>
                            </span>
                          </div>
                      </div>
                      <div className="divCheckInOut text-center position-relative" >
                          <span className="logoCalender rounded-5 p-3">
                            <FaWhatsapp className="fs-2 text-light" />
                          </span>
                          <div className="mt-5 text-center">
                      
                          <span className="fs-6 text-black-50 fw-semibold ">
                            Atendimento via Whatsapp
                          </span>
                          <br />
                          <span style={{ fontSize: "0.8rem" }} className="text-black-50 ">
                            <Link
                              to="https://api.whatsapp.com/send?phone=55037999252346"
                              target="_blank"
                              className="text-black-50 fw-semibold whatsappLink"
                            >
                              Click aqui
                            </Link>{" "}
                            para dúvidas, sugestões ou reservas.
                          </span>
                        </div>
                      </div>
                      <div className="divCheckInOut text-center position-relative" >
                          <span className="logoCalender rounded-5 p-3">
                            <FaHeadset className="fs-2 text-light" />
                          </span>
                          <div className="mt-5 text-center">
                            <small className="text-black-50 fw-semibold fs-6">
                              Central de Reservas
                            </small>
                            <br />
                            <small style={{ fontSize: "0.8rem" }} className="text-black-50 fw-semibold ">                          
                            Se preferir, ligue para fazer a sua reserva!
                            </small>
                            <br />
                            <small style={{ fontSize: "0.9rem" }} className="text-black-50 fw-semibold ">                          
                            (37) 9 9925-2346
                            </small>
                        </div>
                      </div>
                  </div>

                  {/**TABLET VERSION */}
                  <div className="d-none d-sm-block d-lg-none" >
                    <div className="row mt-5 px-2">
                      <div className="divCheckInOut text-center position-relative col-sm-4" >
                          <span className="logoCalender rounded-5 p-3">
                            <FaCalendarAlt className="fs-3 text-light" />
                          </span>
                      
                          <div className="mt-5 ">
                            <span className="fs-6 text-black-50 fw-semibold">
                              CHECK <i>IN-OUT</i>
                            </span>
                            <br />
                            <span style={{ fontSize: "0.8rem" }} className="text-black-50">
                              CheckIn:<span className="fw-semibold"> 15:00</span>
                            </span>
                            <span style={{ fontSize: "0.8rem" }} className="ms-2 text-black-50">
                              CheckOut:<span className="fw-semibold"> 11:00 </span>
                            </span>
                          </div>
                      </div>
                      <div className="divCheckInOut text-center position-relative col-sm-4" >
                          <span className="logoCalender rounded-5 p-3">
                            <FaWhatsapp className="fs-2 text-light" />
                          </span>
                          <div className="mt-5 text-center">
                      
                          <span className="fs-6 text-black-50 fw-semibold ">
                            Atendimento via Whatsapp
                          </span>
                          <br />
                          <span style={{ fontSize: "0.8rem" }} className="text-black-50 ">
                            <Link
                              to="https://api.whatsapp.com/send?phone=55037999252346"
                              target="_blank"
                              className="text-black-50 fw-semibold whatsappLink"
                            >
                              Click aqui
                            </Link>{" "}
                            para dúvidas, sugestões ou reservas.
                          </span>
                        </div>
                      </div>
                      <div className="divCheckInOut text-center position-relative col-sm-4" >
                          <span className="logoCalender rounded-5 p-3">
                            <FaHeadset className="fs-2 text-light" />
                          </span>
                          <div className="mt-5 text-center">
                            <small className="text-black-50 fw-semibold fs-6">
                              Central de Reservas
                            </small>
                            <br />
                            <small style={{ fontSize: "0.8rem" }} className="text-black-50 fw-semibold ">                          
                            Se preferir, ligue para fazer a sua reserva!
                            </small>
                            <br />
                            <small style={{ fontSize: "0.9rem" }} className="text-black-50 fw-semibold ">                          
                            (37) 9 9925-2346
                            </small>
                        </div>
                      </div>
                    </div>
                  </div>
                    
              </div>
                              
            </div>
          </div>

        </div>  

        {/** Infos adicionais  */}
        <section className="my-5 mx-1 p-2">

            <div className="row backGroundSection py-3">
                <div className="col-6 col-lg-3" >
                    <div className="d-flex flex-column justify-content-center align-items-center pt-4" >
                      <FaChild  className="fs-1 text-black-50 mb-0" />
                      <span className="text-black-50 fw-semibold mt-3  text-center"> CRIANÇA NÃO PAGA </span>
                      <small style={{fontSize:'0.8rem', lineHeight:'16px'}} className="text-black-50 fw-normal">Até uma  Criança Gratuita</small>
                      <small style={{fontSize:'0.8rem', lineHeight:'16px'}} className="text-black-50 fw-normal">(idade de 0 à 6 anos)</small>
                    </div>
                </div>
                <div className="col-6 col-lg-3" >
                    <div className="d-flex flex-column justify-content-center align-items-center pt-4" >
                      <SiPix  className="fs-1 text-black-50 mb-0" />
                      <span className="text-black-50 fw-semibold mt-3  text-center"> PAGAMENTO COM PIX </span>
                      <small style={{fontSize:'0.8rem', lineHeight:'16px'}} className="text-black-50 fw-normal text-center">
                        Pague via PIX e ganhe 5% de desconto
                      </small>
                    </div>
                </div>
                <div className="col-6 col-lg-3" >
                    <div className="d-flex flex-column justify-content-center align-items-center pt-4" >
                      <AiFillSafetyCertificate  className="fs-1 text-black-50 mb-0" />
                      <span className="text-black-50 fw-semibold mt-3  text-center"> CERTIFICADO DE SEGURANÇA </span>
                      <small style={{fontSize:'0.8rem', lineHeight:'16px'}} className="text-black-50 text-center fw-normal">
                        Faça compras seguras e confiáveis pelo nosso site
                      </small>                      
                    </div>
                </div>
                <div className="col-6 col-lg-3" >
                    <div className="d-flex flex-column justify-content-center align-items-center pt-4" >
                      <GiClick  className="fs-1 text-black-50 mb-0" />
                      <span className="text-black-50 fw-semibold mt-3  text-center"> COMPRA RÁPIDO E FÁCIL </span>
                      <small style={{fontSize:'0.8rem', lineHeight:'16px'}} className="text-black-50 text-center fw-normal">
                        Em apenas poucos cliques, você finaliza sua compra
                      </small>                                
                    </div>
                </div>          
            </div>
            
        </section>
      

      </main>


    </body>
  );
}

export default Pousada;
