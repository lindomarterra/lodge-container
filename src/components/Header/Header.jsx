import React from "react";
import logo from "../../img/logo.webp";
import { Link } from "react-router-dom";
import "../../index.css";
import "./Header.css";

function Header() {
  return (
    <header>
      <nav
        style={{ zIndex: "300", backgroundColor: "#fff" }}
        className="navbar navbar-expand-md position-fixed top-0 w-100 mt-0"
      >
        <div className="container-fluid ">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
          >
            {" "}
            <span className="navbar-toggler-icon"></span>
          </button>

          <Link to="/">
            {" "}
            <img
              src={logo}
              alt="img"
              style={{ width: "60px", height: "70px", cursor: "pointer" }}
              className="navbar-brand text-decoration-none"
            />
          </Link>

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <div className="d-md-flex justify-content-between w-100">
              <div>
                <Link
                  to="/pousada"
                  className="header-hover fw-bolder text-decoration-none"
                >
                  A Pousada
                </Link>
                <Link
                  to="/acomodacoes"
                  className="header-hover fw-bolder text-decoration-none"
                >
                  Acomodações
                </Link>
                <Link
                  to="/fotos"
                  className="header-hover fw-bolder text-decoration-none"
                >
                  Fotos
                </Link>
              </div>
              <div>
                <Link
                  to="minhaConta"
                  className="header-hover fw-bolder text-decoration-none"
                >
                  Minha Conta
                </Link>
                <Link
                  to="minhasBuscas"
                  className="header-hover fw-bolder text-decoration-none"
                >
                  Minhas Buscas
                </Link>
                <Link
                  to="contato"
                  className="header-hover fw-bolder text-decoration-none"
                >
                  Contato
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
