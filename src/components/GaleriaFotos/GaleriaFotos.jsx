import React from "react";
import "../../index.css";
import './GaleriaFotos.css'
import galeria01 from "../../img/galeriafotos01.webp";
import galeria02 from "../../img/galeriafotos02.webp";
import galeria03 from "../../img/galeriafotos03.webp";
import galeria04 from "../../img/galeriafotos04.webp";
import galeria05 from "../../img/galeriafotos05.webp";
import galeria06 from "../../img/galeriafotos06.webp";
import galeria07 from "../../img/galeriafotos07.webp";
import galeria08 from "../../img/galeriafotos08.webp";
import galeria09 from "../../img/galeriafotos09.webp";
import galeria10 from "../../img/galeriafotos10.webp";
import galeria11 from "../../img/galeriafotos11.webp";
import galeria12 from "../../img/galeriafotos12.webp";
import galeria13 from "../../img/galeriafotos13.webp";
import galeria14 from "../../img/galeriafotos14.webp";
import galeria15 from "../../img/galeriafotos15.webp";

function GaleriaFotos() {
  return (
    <section className="mb-4 pb-4">
      <div className="container-md">
        <div className="mb-4">
          <h5 className="text-black-50 fw-bolder py-2 text-uppercase mb-0 pb-0">
            {" "}
            Galeria de fotos{" "}
          </h5>
          <small className="mt-0 pt-0 text-black-50"> Confira </small>
        </div>

        <div className="carousel carousel-fade" id="galeria-fotos">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="d-flex justify-content-center align-items-center">
                <p
                  className="mx-2 trigger-slide fw-semibold active text-decoration-underline"
                  data-bs-target="#galeria-fotos"
                  data-bs-slide-to="0"
                >
                  Estrutura
                </p>
                <p
                  className="mx-2 trigger-slide fw-semibold"
                  data-bs-target="#galeria-fotos"
                  data-bs-slide-to="1"
                >
                  Café da manhã
                </p>
                <p
                  className="mx-2 trigger-slide fw-semibold"
                  data-bs-target="#galeria-fotos"
                  data-bs-slide-to="2"
                >
                  Atividades
                </p>
              </div>
              <div className="row g-1">
                <div className="col-6 col-md-4 col-lg-3 overflow-hidden">
                  <img
                    src={galeria01}
                    alt="img"
                    className="d-block w-100 h-100 img-slide"
                  />
                </div>
                <div className="col-6 col-md-4 col-lg-3 overflow-hidden">
                  <img
                    src={galeria02}
                    alt="img"
                    className="d-block w-100 h-100 img-slide"
                  />
                </div>
                <div className="col-6 col-md-4 col-lg-3 overflow-hidden">
                  <img
                    src={galeria03}
                    alt="img"
                    className="d-block w-100 h-100 img-slide"
                  />
                </div>
                <div className="col-6 col-md-4 col-lg-3 overflow-hidden">
                  <img
                    src={galeria04}
                    alt="img"
                    className="d-block w-100 h-100 img-slide"
                  />
                </div>
                <div className="col-6 col-md-4 col-lg-3 overflow-hidden">
                  <img
                    src={galeria05}
                    alt="img"
                    className="d-block w-100 h-100 img-slide"
                  />
                </div>
                <div className="col-6 col-md-4 col-lg-3 overflow-hidden">
                  <img
                    src={galeria06}
                    alt="img"
                    className="d-block w-100 h-100 img-slide"
                  />
                </div>
                <div className="col-6 col-md-4 col-lg-3 overflow-hidden">
                  <img
                    src={galeria07}
                    alt="img"
                    className="d-block w-100 h-100 img-slide"
                  />
                </div>
                <div className="col-6 col-md-4 col-lg-3 overflow-hidden">
                  <img
                    src={galeria08}
                    alt="img"
                    className="d-block w-100 h-100 img-slide"
                  />
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="d-flex justify-content-center align-items-center">
                <p
                  className="mx-2 trigger-slide fw-semibold"
                  data-bs-target="#galeria-fotos"
                  data-bs-slide-to="0"
                >
                  Estrutura
                </p>
                <p
                  className="mx-2 trigger-slide fw-semibold active text-decoration-underline"
                  data-bs-target="#galeria-fotos"
                  data-bs-slide-to="1"
                >
                  Café da manhã
                </p>
                <p
                  className="mx-2 trigger-slide fw-semibold"
                  data-bs-target="#galeria-fotos"
                  data-bs-slide-to="2"
                >
                  Atividades
                </p>
              </div>
              <div className="row g-1">
                <div className="col-6 col-md-4 col-lg-3 overflow-hidden">
                  <img
                    src={galeria09}
                    alt="img"
                    className="d-block w-100 h-100 img-slide"
                  />
                </div>
                <div className="col-6 col-md-4 col-lg-3 overflow-hidden">
                  <img
                    src={galeria10}
                    alt="img"
                    className="d-block w-100 h-100 img-slide"
                  />
                </div>
                <div className="col-6 col-md-4 col-lg-3 overflow-hidden">
                  <img
                    src={galeria11}
                    alt="img"
                    className="d-block w-100 h-100 img-slide"
                  />
                </div>
                <div className="col-6 col-md-4 col-lg-3 overflow-hidden">
                  <img
                    src={galeria12}
                    alt="img"
                    className="d-block w-100 h-100 img-slide"
                  />
                </div>
                <div className="col-6 col-md-4 col-lg-3 overflow-hidden">
                  <img
                    src={galeria13}
                    alt="img"
                    className="d-block w-100 h-100 img-slide"
                  />
                </div>
                <div className="col-6 col-md-4 col-lg-3 overflow-hidden">
                  <img
                    src={galeria11}
                    alt="img"
                    className="d-block w-100 h-100 img-slide"
                  />
                </div>
                <div className="col-6 col-md-4 col-lg-3 overflow-hidden">
                  <img
                    src={galeria12}
                    alt="img"
                    className="d-block w-100 h-100 img-slide"
                  />
                </div>
                <div className="col-6 col-md-4 col-lg-3 overflow-hidden">
                  <img
                    src={galeria13}
                    alt="img"
                    className="d-block w-100 h-100 img-slide"
                  />
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="d-flex justify-content-center align-items-center">
                <p
                  className="mx-2 trigger-slide fw-semibold"
                  data-bs-target="#galeria-fotos"
                  data-bs-slide-to="0"
                >
                  Estrutura
                </p>
                <p
                  className="mx-2 trigger-slide fw-semibold"
                  data-bs-target="#galeria-fotos"
                  data-bs-slide-to="1"
                >
                  Café da manhã
                </p>
                <p
                  className="mx-2 trigger-slide fw-semibold active text-decoration-underline"
                  data-bs-target="#galeria-fotos"
                  data-bs-slide-to="2"
                >
                  Atividades
                </p>
              </div>
              <div className="row g-1">
                <div className="col-6 col-md-4 col-lg-3 overflow-hidden">
                  <img
                    src={galeria14}
                    alt="img"
                    className="d-block w-100 h-100 img-slide"
                  />
                </div>
                <div className="col-6 col-md-4 col-lg-3 overflow-hidden">
                  <img
                    src={galeria15}
                    alt="img"
                    className="d-block w-100 h-100 img-slide"
                  />
                </div>
                <div className="col-6 col-md-4 col-lg-3 overflow-hidden">
                  <img
                    src={galeria11}
                    alt="img"
                    className="d-block w-100 h-100 img-slide"
                  />
                </div>
                <div className="col-6 col-md-4 col-lg-3 overflow-hidden">
                  <img
                    src={galeria12}
                    alt="img"
                    className="d-block w-100 h-100 img-slide"
                  />
                </div>
                <div className="col-6 col-md-4 col-lg-3 overflow-hidden">
                  <img
                    src={galeria13}
                    alt="img"
                    className="d-block w-100 h-100 img-slide"
                  />
                </div>
                <div className="col-6 col-md-4 col-lg-3 overflow-hidden">
                  <img
                    src={galeria11}
                    alt="img"
                    className="d-block w-100 h-100 img-slide"
                  />
                </div>
                <div className="col-6 col-md-4 col-lg-3 overflow-hidden">
                  <img
                    src={galeria12}
                    alt="img"
                    className="d-block w-100 h-100 img-slide"
                  />
                </div>
                <div className="col-6 col-md-4 col-lg-3 overflow-hidden">
                  <img
                    src={galeria13}
                    alt="img"
                    className="d-block w-100 h-100 img-slide"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GaleriaFotos;
