import React from "react";
import { IoMdStar } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import Header from "../../components/Header/Header";
import imgPousada from "../../img/quemsomospage.webp";
import "./Pousada.css";
import { FaCalendarAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

function Pousada() {
  return (
    <body>
      <Header />

      <main style={{ marginTop: "100px" }} className="container">
        <hr />
        <h6 className="text-black-50">Pousada Villa Container Lodge </h6>
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

        <section className="mt-4">
          <div className="row">
            <div className="col-lg-7">
              <img src={imgPousada} alt="img" className="shadow-sm" />
            </div>
            <div className="col-lg-5 m-0 p-0">
              <div className="row">
                <div className="col-md-6">
                    <div style={{fontSize:'0.8rem'}} className="divCheckInOut text-center position-relative pt-5 pb-3">
                      <span className="logoCalender rounded-5 p-3" >
                       <FaCalendarAlt className="fs-3 text-light" />
                      </span>
                      <span className="fw-medium fs-6">CHECK <i>IN-OUT</i></span>
                      <br />
                      <span>
                        CheckIn:<span className="fw-medium"> 15:00</span>
                      </span>
                      <span className="ms-2">
                        CheckOut:<span className="fw-medium"> 11:00 </span>
                      </span>
                    </div>

                </div>
                <div className="col-md-6">
                    <div style={{fontSize:'0.8rem'}} className="divCheckInOut text-center position-relative pt-5 pb-3 px-2">
                      <span className="logoCalender rounded-5 p-3" >
                       <FaWhatsapp className="fs-3 text-light" />
                      </span>
                      <span className="fs-6"> Atendimento via Whatsapp </span>
                      <br />
                      <span className=""> <Link className="fw-medium">Click aqui</Link> para dúvidas, sugestões ou reservas.</span>
                    </div>

                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </body>
  );
}

export default Pousada;
