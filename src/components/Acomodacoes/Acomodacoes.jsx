import React from "react";
import "../../index.css";
import "./Acomodacoes.css";
import acomodacoes1 from "../../img/acomodacoes1.webp";
import acomodacoes2 from "../../img/acomodacoes2.webp";
import acomodacoes3 from "../../img/acomodacoes3.webp";
import acomodacoes4 from "../../img/acomodacoes4.webp";
import acomodacoes5 from "../../img/acomodacoes5.webp";
import { Link } from "react-router-dom";

function Acomodacoes() {
  return (
    <section className="mb-5 pb-5">
      <div className="container-sm">

        <div className="mb-4">
          <h5 className="text-black-50 fw-bolder py-2 text-uppercase mb-0 pb-0">
            {" "}
            Acomodações{" "}
          </h5>
          <small className="mt-0 pt-0 text-black-50">
            {" "}
            Conheça nossas acomodações{" "}
          </small>
        </div>

        {/*MOBILE  CAROUSEL*/}
        <div
          className="carousel slide d-sm-none"
          data-bs-ride="carousel"
          id="slide-acomodacoes-mobile"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row">
                <div className="col-12">
                  <div className="d-flex flex-column text-center border border-1 border-blck-50">
                    <img
                      src={acomodacoes1}
                      alt="img"
                      className="w-100 d-block"
                    />
                    <h5 className="my-3 text-black-50 ">
                      {" "}
                      SUÍTE LUXO SUPERIOR{" "}
                    </h5>
                    <p className="truncar-3l text-black-50 p-2">
                      1° andar, cama casal queen, ar condicionado, frigobar,
                      ventilador de teto, cafeteira, wi-fi, banheiro privativo,
                      vista para a lagoa e varanda exclusiva. Capacidade 2
                      pessoas.
                    </p>

                    <button
                      type="button"
                      className="rounded-5 mx-4 mb-3 p-2 fw-bolder border border-2 border-light btn-detalhes"
                    >
                      DETALHES
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="row">
                <div className="col-12">
                  <div className="d-flex flex-column text-center border border-1 border-blck-50">
                    <img
                      src={acomodacoes2}
                      alt="img"
                      className="w-100 d-block"
                    />
                    <h5 className="my-3 text-black-50 "> SUÍTE LUXO TÉRREO </h5>
                    <p className="truncar-3l text-black-50 p-2">
                      Térreo, cama casal queen, ar condicionado, frigobar,
                      ventilador de teto, cafeteira, wi-fi, banheiro privativo,
                      vista para a lagoa e varanda exclusiva. Capacidade 2
                      pessoas
                    </p>

                    <button
                      type="button"
                      className="rounded-5 mx-4 mb-3 p-2 fw-bolder border border-2 border-light btn-detalhes"
                    >
                      DETALHES
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="row">
                <div className="col-12">
                  <div className="d-flex flex-column text-center border border-1 border-blck-50">
                    <img
                      src={acomodacoes3}
                      alt="img"
                      className="w-100 d-block"
                    />
                    <h5 className="my-3 text-black-50 ">
                      {" "}
                      SUÍTE STANDART CASAL{" "}
                    </h5>
                    <p className="truncar-3l text-black-50 p-2">
                      1° andar, cama casal queen, ar condicionado, ventilador de
                      teto, cafeteira, wi-fi, banheiro privativo. Capacidade 2
                      pessoas.
                    </p>

                    <button
                      type="button"
                      className="rounded-5 mx-4 mb-3 p-2 fw-bolder border border-2 border-light btn-detalhes"
                    >
                      DETALHES
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="row">
                <div className="col-12">
                  <div className="d-flex flex-column text-center border border-1 border-blck-50">
                    <img
                      src={acomodacoes4}
                      alt="img"
                      className="w-100 d-block"
                    />
                    <h5 className="my-3 text-black-50 ">
                      {" "}
                      SUÍTE STANDART DUPLO{" "}
                    </h5>
                    <p className="truncar-3l text-black-50 p-2">
                      1° andar, cama casal queen bipartida, ar condicionado,
                      ventilador de teto, cafeteira, wi-fi, banheiro privativo.
                      Capacidade 2 pessoas.
                    </p>

                    <button
                      type="button"
                      className="rounded-5 mx-4 mb-3 p-2 fw-bolder border border-2 border-light btn-detalhes"
                    >
                      DETALHES
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="row">
                <div className="col-12">
                  <div className="d-flex flex-column text-center border border-1 border-blck-50">
                    <img
                      src={acomodacoes5}
                      alt="img"
                      className="w-100 d-block"
                    />
                    <h5 className="my-3 text-black-50 ">
                      {" "}
                      SUÍTE STANDART FAMILIA{" "}
                    </h5>
                    <p className="truncar-3l text-black-50 p-2">
                      Térreo, cama de casal, beliche, ar condicionado,
                      ventilador de teto, wi-fi, banheiro privativo.
                      <br />
                      Capacidade 4 pessoas.
                    </p>

                    <button
                      type="button"
                      className="rounded-5 mx-4 mb-3 p-2 fw-bolder border border-2 border-light btn-detalhes"
                    >
                      DETALHES
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            type="button"
            className="carousel-control-prev"
            data-bs-target="#slide-acomodacoes-mobile"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Prev</span>
          </button>
          <button
            type="button"
            className="carousel-control-next"
            data-bs-target="#slide-acomodacoes-mobile"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        {/* TABLET  CAROUSEL*/}
        <div
          className="carousel slide carousel-dark d-none d-sm-block d-lg-none "
          data-bs-ride="carousel"
          id="slide-acomodacoes-tabled"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row">
                <div className="col-6">
                  <div className="d-flex flex-column text-center border border-1 border-blck-50">
                    <img
                      src={acomodacoes1}
                      alt="img"
                      className="w-100 d-block"
                    />
                    <h5 className="my-3 text-black-50 ">
                      {" "}
                      SUÍTE LUXO SUPERIOR{" "}
                    </h5>
                    <p className="truncar-3l text-black-50 p-2">
                      1° andar, cama casal queen, ar condicionado, frigobar,
                      ventilador de teto, cafeteira, wi-fi, banheiro privativo,
                      vista para a lagoa e varanda exclusiva. Capacidade 2
                      pessoas.
                    </p>

                    <button
                      type="button"
                      className="rounded-5 mx-4 mb-3 p-2 fw-bolder border border-2 border-light btn-detalhes"
                    >
                      DETALHES
                    </button>
                  </div>
                </div>

                <div className="col-6">
                  <div className="d-flex flex-column justify-content-between text-center border border-1 border-blck-50">
                    <img
                      src={acomodacoes2}
                      alt="img"
                      className="w-100 d-block"
                    />
                    <h5 className="my-3 text-black-50 "> SUÍTE LUXO TÉRREO </h5>
                    <p className="truncar-3l text-black-50 p-2">
                      Térreo, cama casal queen, ar condicionado, frigobar,
                      ventilador de teto, cafeteira, wi-fi, banheiro privativo,
                      vista para a lagoa e varanda exclusiva. Capacidade 2
                      pessoas
                    </p>

                    <button
                      type="button"
                      className="rounded-5 mx-4 mb-3 p-2 fw-bolder border border-2 border-light btn-detalhes"
                    >
                      DETALHES
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="row">
                <div className="col-6">
                  <div className="d-flex flex-column text-center border border-1 border-blck-50">
                    <img
                      src={acomodacoes2}
                      alt="img"
                      className="w-100 d-block"
                    />
                    <h5 className="my-3 text-black-50 "> SUÍTE LUXO TÉRREO </h5>
                    <p className="truncar-3l text-black-50 p-2">
                      Térreo, cama casal queen, ar condicionado, frigobar,
                      ventilador de teto, cafeteira, wi-fi, banheiro privativo,
                      vista para a lagoa e varanda exclusiva. Capacidade 2
                      pessoas
                    </p>

                    <button
                      type="button"
                      className="rounded-5 mx-4 mb-3 p-2 fw-bolder border border-2 border-light btn-detalhes"
                    >
                      DETALHES
                    </button>
                  </div>
                </div>

                <div className="col-6">
                  <div className="d-flex flex-column text-center border border-1 border-blck-50">
                    <img
                      src={acomodacoes3}
                      alt="img"
                      className="w-100 d-block"
                    />
                    <h5 className="my-3 text-black-50 ">
                      {" "}
                      SUÍTE STANDART CASAL{" "}
                    </h5>
                    <p className="truncar-3l text-black-50 p-2">
                      1° andar, cama casal queen, ar condicionado, ventilador de
                      teto, cafeteira, wi-fi, banheiro privativo. Capacidade 2
                      pessoas.
                    </p>

                    <button
                      type="button"
                      className="rounded-5 mx-4 mb-3 p-2 fw-bolder border border-2 border-light btn-detalhes"
                    >
                      DETALHES
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="row">
                <div className="col-6">
                  <div className="d-flex flex-column text-center border border-1 border-blck-50">
                    <img
                      src={acomodacoes3}
                      alt="img"
                      className="w-100 d-block"
                    />
                    <h5 className="my-3 text-black-50 ">
                      {" "}
                      SUÍTE STANDART CASAL{" "}
                    </h5>
                    <p className="truncar-3l text-black-50 p-2">
                      1° andar, cama casal queen, ar condicionado, ventilador de
                      teto, cafeteira, wi-fi, banheiro privativo. Capacidade 2
                      pessoas.
                    </p>

                    <button
                      type="button"
                      className="rounded-5 mx-4 mb-3 p-2 fw-bolder border border-2 border-light btn-detalhes"
                    >
                      DETALHES
                    </button>
                  </div>
                </div>

                <div className="col-6">
                  <div className="d-flex flex-column text-center border border-1 border-blck-50">
                    <img
                      src={acomodacoes4}
                      alt="img"
                      className="w-100 d-block"
                    />
                    <h5 className="my-3 text-black-50 ">
                      {" "}
                      SUÍTE STANDART DUPLO{" "}
                    </h5>
                    <p className="truncar-3l text-black-50 p-2">
                      1° andar, cama casal queen bipartida, ar condicionado,
                      ventilador de teto, cafeteira, wi-fi, banheiro privativo.
                      Capacidade 2 pessoas.
                    </p>

                    <button
                      type="button"
                      className="rounded-5 mx-4 mb-3 p-2 fw-bolder border border-2 border-light btn-detalhes"
                    >
                      DETALHES
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="row">
                <div className="col-6">
                  <div className="d-flex flex-column text-center border border-1 border-blck-50">
                    <img
                      src={acomodacoes4}
                      alt="img"
                      className="w-100 d-block"
                    />
                    <h5 className="my-3 text-black-50 ">
                      {" "}
                      SUÍTE STANDART DUPLO{" "}
                    </h5>
                    <p className="truncar-3l text-black-50 p-2">
                      1° andar, cama casal queen bipartida, ar condicionado,
                      ventilador de teto, cafeteira, wi-fi, banheiro privativo.
                      Capacidade 2 pessoas.
                    </p>

                    <button
                      type="button"
                      className="rounded-5 mx-4 mb-3 p-2 fw-bolder border border-2 border-light btn-detalhes"
                    >
                      DETALHES
                    </button>
                  </div>
                </div>

                <div className="col-6">
                  <div className="d-flex flex-column text-center border border-1 border-blck-50">
                    <img
                      src={acomodacoes5}
                      alt="img"
                      className="w-100 d-block"
                    />
                    <h5 className="my-3 text-black-50 ">
                      {" "}
                      SUÍTE STANDART FAMILIA{" "}
                    </h5>
                    <p className="truncar-3l text-black-50 p-2">
                      Térreo, cama de casal, beliche, ar condicionado,
                      ventilador de teto, wi-fi, banheiro privativo.
                      <br />
                      Capacidade 4 pessoas.
                    </p>

                    <button
                      type="button"
                      className="rounded-5 mx-4 mb-3 p-2 fw-bolder border border-2 border-light btn-detalhes"
                    >
                      DETALHES
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-5">
            <div className="carousel-indicators ">
              <button
                type="button"
                data-bs-target="#slide-acomodacoes-tabled"
                data-bs-slide-to="0"
                className="active bg-black-50"
              ></button>
              <button
                type="button"
                data-bs-target="#slide-acomodacoes-tabled"
                data-bs-slide-to="1"
                className="bg-black-50"
              ></button>
              <button
                type="button"
                data-bs-target="#slide-acomodacoes-tabled"
                data-bs-slide-to="2"
                className="bg-black-50"
              ></button>
              <button
                type="button"
                data-bs-target="#slide-acomodacoes-tabled"
                data-bs-slide-to="3"
                className="bg-black-50"
              ></button>
            </div>
          </div>
        </div>

        {/* DESKTOP CAROUSEL */}
        <div
          className="carousel slide carousel-dark d-none w-100 d-lg-block "
          data-bs-ride="carousel"
          id="slide-acomodacoes"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row">
                <div className="col-4">
                  <div className="d-flex flex-column text-center border border-1 border-blck-50">
                    <img
                      src={acomodacoes1}
                      alt="img"
                      className="w-100 d-block"
                    />
                    <h5 className="my-3 text-black-50 ">
                      {" "}
                      SUÍTE LUXO SUPERIOR{" "}
                    </h5>
                    <p className="truncar-3l text-black-50 p-2">
                      1° andar, cama casal queen, ar condicionado, frigobar,
                      ventilador de teto, cafeteira, wi-fi, banheiro privativo,
                      vista para a lagoa e varanda exclusiva. Capacidade 2
                      pessoas.
                    </p>

                    <button
                      type="button"
                      className="rounded-5 mx-4 mb-3 p-2 fw-bolder border border-2 border-light btn-detalhes"
                    >
                      {" "}
                      DETALHES
                    </button>
                  </div>
                </div>

                <div className="col-4">
                  <div className="d-flex flex-column justify-content-between text-center border border-1 border-blck-50">
                    <img
                      src={acomodacoes2}
                      alt="img"
                      className="w-100 d-block"
                    />
                    <h5 className="my-3 text-black-50 "> SUÍTE LUXO TÉRREO </h5>
                    <p className="truncar-3l text-black-50 p-2">
                      Térreo, cama casal queen, ar condicionado, frigobar,
                      ventilador de teto, cafeteira, wi-fi, banheiro privativo,
                      vista para a lagoa e varanda exclusiva. Capacidade 2
                      pessoas
                    </p>

                    <button
                      type="button"
                      className="rounded-5 mx-4 mb-3 p-2 fw-bolder border border-2 border-light btn-detalhes"
                    >
                      DETALHES
                    </button>
                  </div>
                </div>

                <div className="col-4">
                  <div className="d-flex flex-column text-center border border-1 border-blck-50">
                    <img
                      src={acomodacoes3}
                      alt="img"
                      className="w-100 d-block"
                    />
                    <h5 className="my-3 text-black-50 ">
                      {" "}
                      SUÍTE STANDART CASAL{" "}
                    </h5>
                    <p className="truncar-3l text-black-50 p-2">
                      1° andar, cama casal queen, ar condicionado, ventilador de
                      teto, cafeteira, wi-fi, banheiro privativo. Capacidade 2
                      pessoas.
                    </p>

                    <Link
                      to="/quarto1"
                      className="rounded-5 mx-4 mb-3 p-2 fw-bolder border border-2 border-light btn-detalhes"
                    >
                      DETALHES
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="row">
                <div className="col-4">
                  <div className="d-flex flex-column text-center border border-1 border-blck-50">
                    <img
                      src={acomodacoes2}
                      alt="img"
                      className="w-100 d-block"
                    />
                    <h5 className="my-3 text-black-50 "> SUÍTE LUXO TÉRREO </h5>
                    <p className="truncar-3l text-black-50 p-2">
                      Térreo, cama casal queen, ar condicionado, frigobar,
                      ventilador de teto, cafeteira, wi-fi, banheiro privativo,
                      vista para a lagoa e varanda exclusiva. Capacidade 2
                      pessoas
                    </p>

                    <button
                      type="button"
                      className="rounded-5 mx-4 mb-3 p-2 fw-bolder border border-2 border-light btn-detalhes"
                    >
                      DETALHES
                    </button>
                  </div>
                </div>

                <div className="col-4">
                  <div className="d-flex flex-column text-center border border-1 border-blck-50">
                    <img
                      src={acomodacoes3}
                      alt="img"
                      className="w-100 d-block"
                    />
                    <h5 className="my-3 text-black-50 ">
                      {" "}
                      SUÍTE STANDART CASAL{" "}
                    </h5>
                    <p className="truncar-3l text-black-50 p-2">
                      1° andar, cama casal queen, ar condicionado, ventilador de
                      teto, cafeteira, wi-fi, banheiro privativo. Capacidade 2
                      pessoas.
                    </p>

                    <button
                      type="button"
                      className="rounded-5 mx-4 mb-3 p-2 fw-bolder border border-2 border-light btn-detalhes"
                    >
                      DETALHES
                    </button>
                  </div>
                </div>

                <div className="col-4">
                  <div className="d-flex flex-column text-center border border-1 border-blck-50">
                    <img
                      src={acomodacoes4}
                      alt="img"
                      className="w-100 d-block"
                    />
                    <h5 className="my-3 text-black-50 ">
                      {" "}
                      SUÍTE STANDART DUPLO{" "}
                    </h5>
                    <p className="truncar-3l text-black-50 p-2">
                      1° andar, cama casal queen bipartida, ar condicionado,
                      ventilador de teto, cafeteira, wi-fi, banheiro privativo.
                      Capacidade 2 pessoas.
                    </p>

                    <button
                      type="button"
                      className="rounded-5 mx-4 mb-3 p-2 fw-bolder border border-2 border-light btn-detalhes"
                    >
                      DETALHES
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="row">
                <div className="col-4">
                  <div className="d-flex flex-column text-center border border-1 border-blck-50">
                    <img
                      src={acomodacoes3}
                      alt="img"
                      className="w-100 d-block"
                    />
                    <h5 className="my-3 text-black-50 ">
                      {" "}
                      SUÍTE STANDART CASAL{" "}
                    </h5>
                    <p className="truncar-3l text-black-50 p-2">
                      1° andar, cama casal queen, ar condicionado, ventilador de
                      teto, cafeteira, wi-fi, banheiro privativo. Capacidade 2
                      pessoas.
                    </p>

                    <button
                      type="button"
                      className="rounded-5 mx-4 mb-3 p-2 fw-bolder border border-2 border-light btn-detalhes"
                    >
                      DETALHES
                    </button>
                  </div>
                </div>

                <div className="col-4">
                  <div className="d-flex flex-column text-center border border-1 border-blck-50">
                    <img
                      src={acomodacoes4}
                      alt="img"
                      className="w-100 d-block"
                    />
                    <h5 className="my-3 text-black-50 ">
                      {" "}
                      SUÍTE STANDART DUPLO{" "}
                    </h5>
                    <p className="truncar-3l text-black-50 p-2">
                      1° andar, cama casal queen bipartida, ar condicionado,
                      ventilador de teto, cafeteira, wi-fi, banheiro privativo.
                      Capacidade 2 pessoas.
                    </p>

                    <button
                      type="button"
                      className="rounded-5 mx-4 mb-3 p-2 fw-bolder border border-2 border-light btn-detalhes"
                    >
                      DETALHES
                    </button>
                  </div>
                </div>

                <div className="col-4">
                  <div className="d-flex flex-column text-center border border-1 border-blck-50">
                    <img
                      src={acomodacoes5}
                      alt="img"
                      className="w-100 d-block"
                    />
                    <h5 className="my-3 text-black-50 ">
                      {" "}
                      SUÍTE STANDART FAMILIA{" "}
                    </h5>
                    <p className="truncar-3l text-black-50 p-2">
                      Térreo, cama de casal, beliche, ar condicionado,
                      ventilador de teto, wi-fi, banheiro privativo.
                      <br />
                      Capacidade 4 pessoas.
                    </p>

                    <button
                      type="button"
                      className="rounded-5 mx-4 mb-3 p-2 fw-bolder border border-2 border-light btn-detalhes"
                    >
                      DETALHES
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-5">
            <div className="carousel-indicators ">
              <button
                type="button"
                data-bs-target="#slide-acomodacoes"
                data-bs-slide-to="0"
                className="active bg-black-50"
              ></button>
              <button
                type="button"
                data-bs-target="#slide-acomodacoes"
                data-bs-slide-to="1"
                className="bg-black-50"
              ></button>
              <button
                type="button"
                data-bs-target="#slide-acomodacoes"
                data-bs-slide-to="2"
                className="bg-black-50"
              ></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Acomodacoes;
