import React from "react";
import "../../index.css";
import "./Carrousel.css";

import logo from "../../img/logo.webp";
import carouselHome01lg from "../../img/carousel-home01-lg.jpg";
import carouselHome02lg from "../../img/carousel-home02-lg.jpg";
import carouselHome04lg from "../../img/carousel-home04-lg.jpg";
import carouselHome05lg from "../../img/carousel-home05-lg.jpg";
import carouselHome06lg from "../../img/carousel-home06-lg.jpg";
import carouselHome07lg from "../../img/carousel-home07-lg.jpg";

import carouselHome01sm from "../../img/carousel-home01-sm.jpg";
import carouselHome02sm from "../../img/carousel-home02-sm.jpg";
import carouselHome04sm from "../../img/carousel-home04-sm.jpg";
import carouselHome05sm from "../../img/carousel-home05-sm.jpg";
import carouselHome06sm from "../../img/carousel-home06-sm.jpg";
import carouselHome07sm from "../../img/carousel-home07-sm.jpg";

function Carrousel() {
  return (
    <main >
      <section className="position-relative m-1">

        <div className="logo-carrousel d-none d-md-flex">
          <img src={logo} alt="img" className="w-50" />
        </div>

          {/**carrousel */}
        <div 
          id="slide-home"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item" data-bs-interval="2000">
              <img
                src={carouselHome01lg}
                className="img-slide d-none d-md-block w-100 h-100"
                alt="img"
              />
              <img
                src={carouselHome01sm}
                className="img-slide d-md-none w-100 h-100"
                alt="img"
              />
            </div>
            <div className="carousel-item active" data-bs-interval="2000">
              <img
                src={carouselHome02lg}
                className="d-none d-md-block w-100 h-100"
                alt="img"
              />
              <img
                src={carouselHome02sm}
                className="d-md-none w-100 h-100"
                alt="img"
              />
            </div>

            <div className="carousel-item" data-bs-interval="2000">
              <img
                src={carouselHome04lg}
                className="d-none d-md-block w-100 h-100"
                alt="img"
              />
              <img
                src={carouselHome04sm}
                className="d-md-none w-100 h-100"
                alt="img"
              />
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img
                src={carouselHome05lg}
                className="d-none d-md-block w-100 h-100"
                alt="img"
              />
              <img
                src={carouselHome05sm}
                className="d-md-none w-100 h-100"
                alt="img"
              />
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img
                src={carouselHome06lg}
                className="d-none d-md-block w-100 h-100"
                alt="img"
              />
              <img
                src={carouselHome06sm}
                className="d-md-none w-100 h-100"
                alt="img"
              />
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img
                src={carouselHome07lg}
                className="d-none d-md-block w-100 h-100"
                alt="img"
              />
              <img
                src={carouselHome07sm}
                className="d-md-none w-100 h-100"
                alt="img"
              />
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#slide-home"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#slide-home"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>

      </section>
    </main>
  );
}

export default Carrousel;
