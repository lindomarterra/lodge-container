import React from "react";
import "../../index.css";
import "./Depoimentos.css";
import Commas from "../../img/quotation-mark.png"

function Depoimentos() {
  return (
    <section className="mb-5 pb-5">
      <div className="container-sm">
        <hr />

        <div className="mb-4">
          <h5 className="text-black-50 fw-bolder py-2 text-uppercase mb-0 pb-0">
            {" "}
            Depoimentos{" "}
          </h5>
          <small className="mt-0 pt-0 text-black-50">
            {" "}
            Depoimentos de nossos hospedes!{" "}
          </small>
        </div>

        {/* MOBILE CAROUSEL */}
        <div
          className="carousel slide w-100 d-lg-none mb-4"
          data-bs-ride="carousel"
          id="slide-depoimentos-desktop"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <div className="position-relative">
                <div
                  style={{ fontStyle: "italic", height: "200px" }}
                  className="txt-comment border border-3 rounded-3 p-4 overflow-y-auto"
                >
                  <p>
                    "Desde a arquitetura, a limpeza, a decoração, o lago
                    maravilhoso que fica em frente à pousada com stand up e boia
                    para você aproveitar...até o café da manhã...e
                    principalmente o carinho do Thiago, que é o dono. A estadia
                    foi maravilhosa e contribuiu para que nossas férias e nossa
                    experiência em Capitólio fosse inesquecível".
                  </p>
                  <img
                    src={Commas}
                    alt="img"
                    className="position-absolute w-25 h-50 top-0 start-0 m-4 opacity-25"
                  />
                </div>
                <h6 className="text-end mt-1"> Ingrid </h6>
              </div>
            </div>

            <div className="carousel-item" data-bs-interval="10000">
              <div className="position-relative">
                <div
                  style={{ fontStyle: "italic", height: "200px" }}
                  className="txt-comment border border-3 rounded-3 p-4 overflow-y-auto"
                >
                  <p>
                    "O local é muito aconchegante, o quarto é ótimo, tem
                    ventilador de teto e ar condicionado , a cama éconfortável o
                    chuveiro é sensacional, ... o dono do local Tiago é muito
                    atencioso , deu suporte o tempo todo , indicou passeios ...
                    Sem dúvidas se voltarmos a Capitólio ficaremos aqui..."
                  </p>
                  <img
                    src={Commas}
                    alt="img"
                    className="position-absolute w-25 h-50 top-0 start-0 m-4 opacity-25"
                  />
                </div>
                <h6 className="text-end mt-1"> Jamile </h6>
              </div>
            </div>

            <div className="carousel-item" data-bs-interval="10000">
              <div className="position-relative">
                <div
                  style={{ fontStyle: "italic", height: "200px" }}
                  className="txt-comment border border-3 rounded-3 p-4 overflow-y-auto"
                >
                  <p>
                    "Cama e banheiro perfeitos!!! Localização calma e tranquila
                    e o conceito da pousada de se desligar da correria é um
                    presente extra !!! A beleza e simplicidade que o mundo
                    moderno esta nos roubando estava presente em todos os
                    detalhes.A lagoa, a pesca, a noite estrelada, as redes e a
                    tranquilidade foram simplesmente brilhante !!!O Atendimento
                    do Thiago e equipe foi cordial , educado, prestativo e muito
                    atencioso com minha filha, minha irmã e meus pais...Vamos
                    voltar com certeza absoluta !!".
                  </p>
                  <img
                    src={Commas}
                    alt="img"
                    className="position-absolute w-25 h-50 top-0 start-0 m-4 opacity-25"
                  />
                </div>
                <h6 className="text-end mt-1"> Juliana </h6>
              </div>
            </div>
          </div>
        </div>

        {/* DESKTOP CAROUSEL */}
        <div
          className="carousel slide d-none w-100 d-lg-block mb-5 "
          data-bs-ride="carousel"
          id="slide-depoimentos-desktop"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <div className="row">
                <div className="col-6 position-relative">
                  <div
                    style={{ fontStyle: "italic", height: "175px" }}
                    className="txt-comment border border-3 rounded-3 p-4 overflow-y-auto"
                  >
                    <p>
                      "Desde a arquitetura, a limpeza, a decoração, o lago
                      maravilhoso que fica em frente à pousada com stand up e
                      boia para você aproveitar...até o café da manhã...e
                      principalmente o carinho do Thiago, que é o dono. A
                      estadia foi maravilhosa e contribuiu para que nossas
                      férias e nossa experiência em Capitólio fosse
                      inesquecível".
                    </p>
                    <img
                      src={Commas}
                      alt="img"
                      className="position-absolute w-25 h-50 top-0 start-0 m-4 opacity-25"
                    />
                  </div>
                  <h6 className="text-end mt-1"> Ingrid </h6>
                </div>

                <div className="col-6 position-relative">
                  <div
                    style={{ fontStyle: "italic", height: "175px" }}
                    className="txt-comment border border-3 rounded-3 p-4 overflow-y-auto"
                  >
                    <p>
                      "O local é muito aconchegante, o quarto é ótimo, tem
                      ventilador de teto e ar condicionado , a cama éconfortável
                      o chuveiro é sensacional, ... o dono do local Tiago é
                      muito atencioso , deu suporte o tempo todo , indicou
                      passeios ... Sem dúvidas se voltarmos a Capitólio
                      ficaremos aqui"...
                    </p>
                    <img
                      src={Commas}
                      alt="img"
                      className="position-absolute w-25 h-50 top-0 start-0 m-4 opacity-25"
                    />
                  </div>
                  <h6 className="text-end mt-1"> Jamila </h6>
                </div>
              </div>
            </div>

            <div className="carousel-item" data-bs-interval="10000">
              <div className="row">
                <div className="col-6 position-relative">
                  <div
                    style={{ fontStyle: "italic", height: "175px" }}
                    className="txt-comment border border-3 rounded-3 p-4 overflow-y-auto"
                  >
                    <p>
                      "O local é muito aconchegante, o quarto é ótimo, tem
                      ventilador de teto e ar condicionado , a cama éconfortável
                      o chuveiro é sensacional, ... o dono do local Tiago é
                      muito atencioso , deu suporte o tempo todo , indicou
                      passeios ... Sem dúvidas se voltarmos a Capitólio
                      ficaremos aqui"...
                    </p>
                    <img
                      src={Commas}
                      alt="img"
                      className="position-absolute w-25 h-50 top-0 start-0 m-4 opacity-25"
                    />
                  </div>
                  <h6 className="text-end mt-1"> Jamila </h6>
                </div>

                <div className="col-6 position-relative">
                  <div
                    style={{ fontStyle: "italic", height: "175px" }}
                    className="txt-comment border border-3 rounded-3 p-4 overflow-y-auto"
                  >
                    <p>
                      "Cama e banheiro perfeitos!!! Localização calma e
                      tranquila e o conceito da pousada de se desligar da
                      correria é um presente extra !!! A beleza e simplicidade
                      que o mundo moderno esta nos roubando estava presente em
                      todos os detalhes.A lagoa, a pesca, a noite estrelada, as
                      redes e a tranquilidade foram simplesmente brilhante !!!O
                      Atendimento do Thiago e equipe foi cordial , educado,
                      prestativo e muito atencioso com minha filha, minha irmã e
                      meus pais...Vamos voltar com certeza absoluta !!".
                    </p>
                    <img
                      src={Commas}
                      alt="img"
                      className="position-absolute w-25 h-50 top-0 start-0 m-4 opacity-25"
                    />
                  </div>
                  <h6 className="text-end mt-1"> Juliana </h6>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BTN CALL MODAL */}
        <div className="text-end">
          <button
            className="btnVerTodos fw-bold border-0 px-3 py-2 rounded-1"
            data-bs-toggle="modal"
            data-bs-target="#modal-depoimentos"
          >
            {" "}
            ver todos{" "}
          </button>
        </div>

        {/** MODDAL */}
        <div className="modal fade" id="modal-depoimentos">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <div className="mb-3 ps-2">
                  <h5 className="text-black-50 fw-bolder py-2 text-uppercase mb-0 pb-0">
                    {" "}
                    Depoimentos{" "}
                  </h5>
                  <small className="mt-0 pt-0 text-black-50">
                    {" "}
                    Depoimentos de nossos hospedes!{" "}
                  </small>
                </div>
              </div>

              <div className="modal-body">
                <div className="py-4 mx-0">
                  <div className="mb-5 position-relative">
                    <div
                      style={{ fontStyle: "italic", height: "175px" }}
                      className="txt-comment border border-3 rounded-3 p-4 overflow-y-auto"
                    >
                      <p>
                        "Desde a arquitetura, a limpeza, a decoração, o lago
                        maravilhoso que fica em frente à pousada com stand up e
                        boia para você aproveitar...até o café da manhã...e
                        principalmente o carinho do Thiago, que é o dono. A
                        estadia foi maravilhosa e contribuiu para que nossas
                        férias e nossa experiência em Capitólio fosse
                        inesquecível."
                      </p>
                      <img
                        src={Commas}
                        alt="img"
                        className="position-absolute w-25 h-50 top-0 start-0 m-4 opacity-25"
                      />
                    </div>
                    <h6 className="text-end mt-1"> Ingrid </h6>
                  </div>

                  <div className="mb-5 position-relative">
                    <div
                      style={{ fontStyle: "italic", height: "175px" }}
                      className="txt-comment border border-3 rounded-3 p-4 overflow-y-auto"
                    >
                      <p>
                        "O local é muito aconchegante, o quarto é ótimo, tem
                        ventilador de teto e ar condicionado , a cama
                        éconfortável o chuveiro é sensacional, ... o dono do
                        local Tiago é muito atencioso , deu suporte o tempo todo
                        , indicou passeios ... Sem dúvidas se voltarmos a
                        Capitólio ficaremos aqui"...
                      </p>
                      <img
                        src={Commas}
                        alt="img"
                        className="position-absolute w-25 h-50 top-0 start-0 m-4 opacity-25"
                      />
                    </div>
                    <h6 className="text-end mt-1"> Jamila </h6>
                  </div>

                  <div className="mb-5 position-relative">
                    <div
                      style={{ fontStyle: "italic", height: "175px" }}
                      className="txt-comment border border-3 rounded-3 p-4 overflow-y-auto "
                    >
                      <p>
                        "Cama e banheiro perfeitos !!!Localização calma e
                        tranquila e o conceito da pousada de se desligar da
                        correria é um presente extra !!! A beleza e simplicidade
                        que o mundo moderno esta nos roubando estava presente em
                        todos os detalhes.A lagoa, a pesca, a noite estrelada,
                        as redes e a tranquilidade foram simplesmente brilhante
                        !!!O Atendimento do Thiago e equipe foi cordial ,
                        educado, prestativo e muito atencioso com minha filha,
                        minha irmã e meus pais...Vamos voltar com certeza
                        absoluta !!"
                      </p>
                      <img
                        src={Commas}
                        alt="img"
                        className="position-absolute w-25 h-50 top-0 start-0 m-4 opacity-25"
                      />
                    </div>
                    <h6 className="text-end mt-1"> Juliana </h6>
                  </div>
                </div>
              </div>

              <div className="model-footer text-end p-2 ">
                <button
                  style={{ backgroundColor: "grey" }}
                  className="btn text-white fw-bolder shadow-sm"
                  data-bs-dismiss="modal"
                >
                  {" "}
                  Fechar{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Depoimentos;
