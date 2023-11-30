import React from 'react' 
import '../../index.css'

import carouselHome01 from '../../../src/img/carousel-home01.webp'
import carouselHome02 from '../../../src/img/carousel-home02.webp'
import carouselHome03 from '../../../src/img/carousel-home03.webp'
import carouselHome04 from '../../../src/img/carousel-home04.webp'
import carouselHome05 from '../../../src/img/carousel-home05.webp'


function Main() {
    return ( 
        <main>


            <section className='position-relative' >
    
                  <div className='div-logo-home' >
                      LOGO
                 </div>

            
    
                  <div id="slide-home" className="carousel slide carousel-fade" data-bs-ride='carousel' >
    
                    <div className="carousel-inner" >
                        <div className="carousel-item active">
                            <img src={carouselHome01} className="d-block w-100" alt="img" />
                        </div>
                        <div className="carousel-item">
                            <img src={carouselHome02} className="d-block w-100" alt="img" />
                        </div>
                        <div className="carousel-item">
                            <img src={carouselHome03} className="d-block w-100" alt="img" />
                        </div>
                        <div className="carousel-item">
                            <img src={carouselHome04} className="d-block w-100" alt="img" />
                        </div>
                        <div className="carousel-item">
                            <img src={carouselHome05} className="d-block w-100" alt="img" />
                        </div>
                    </div>
    
                        <button className="carousel-control-prev" type="button" data-bs-target="#slide-home" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" ></span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#slide-home" data-bs-slide="next">
                            <span className="carousel-control-next-icon" ></span>
                        </button>
    
                    </div>
    
            </section>

        </main>
    )
}

export default Main