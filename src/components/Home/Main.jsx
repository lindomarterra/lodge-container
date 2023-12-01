import React from 'react' 
import '../../index.css'
import NavbarBooking from './NavbarBooking'

import carouselHome01lg from '../../../src/img/carousel-home01-lg.jpg'
import carouselHome02lg from '../../../src/img/carousel-home02-lg.jpg'
import carouselHome03lg from '../../../src/img/carousel-home03-lg.jpg'
import carouselHome04lg from '../../../src/img/carousel-home04-lg.jpg'
import carouselHome05lg from '../../../src/img/carousel-home05-lg.jpg'
import carouselHome06lg from '../../../src/img/carousel-home06-lg.jpg'
import carouselHome07lg from '../../../src/img/carousel-home07-lg.jpg'

import carouselHome01sm from '../../../src/img/carousel-home01-sm.jpg'
import carouselHome02sm from '../../../src/img/carousel-home02-sm.jpg'
import carouselHome03sm from '../../../src/img/carousel-home03-sm.jpg'
import carouselHome04sm from '../../../src/img/carousel-home04-sm.jpg'
import carouselHome05sm from '../../../src/img/carousel-home05-sm.jpg'
import carouselHome06sm from '../../../src/img/carousel-home06-sm.jpg'
import carouselHome07sm from '../../../src/img/carousel-home07-sm.jpg'


function Main() {
    return ( 
        <main>

            <section  className='main-home position-relative' >
    
                  <div className='div-logo-home d-none d-md-flex' >
                      LOGO
                 </div>

            
                  <div id="slide-home" className="carousel slide carousel-fade" data-bs-ride='carousel' >
    
                    <div className="carousel-inner">

                        <div className="carousel-item">
                            <img src={carouselHome01lg} className="img-slide-home d-none d-md-block w-100 h-100" alt="img" />
                            <img src={carouselHome01sm} className="img-slide-home d-md-none w-100 h-100" alt="img" />
                        </div>
                        <div className="carousel-item active">
                            <img src={carouselHome02lg} className="img-slide-home d-none d-md-block w-100 h-100" alt="img" />
                            <img src={carouselHome02sm} className="img-slide-home d-md-none w-100 h-100" alt="img" />
                        </div>
                        <div className="carousel-item">
                            <img src={carouselHome03lg} className="img-slide-home d-none d-md-block w-100 h-100" alt="img" />
                            <img src={carouselHome03sm} className="img-slide-home d-md-none w-100 h-100" alt="img" />
                        </div>
                        <div className="carousel-item">
                            <img src={carouselHome04lg} className="img-slide-home d-none d-md-block w-100 h-100" alt="img" />
                            <img src={carouselHome04sm} className="img-slide-home d-md-none w-100 h-100" alt="img" />
                        </div>
                        <div className="carousel-item">
                            <img src={carouselHome05lg} className="img-slide-home d-none d-md-block w-100 h-100" alt="img" />
                            <img src={carouselHome05sm} className="img-slide-home d-md-none w-100 h-100" alt="img" />
                        </div>
                        <div className="carousel-item">
                            <img src={carouselHome06lg} className="img-slide-home d-none d-md-block w-100 h-100" alt="img" />
                            <img src={carouselHome06sm} className="img-slide-home d-md-none w-100 h-100" alt="img" />
                        </div>
                        <div className="carousel-item">
                            <img src={carouselHome07lg} className="img-slide-home d-none d-md-block w-100 h-100" alt="img" />
                            <img src={carouselHome07sm} className="img-slide-home d-md-none w-100 h-100" alt="img" />
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

            <NavbarBooking    />




          

        </main>
    )
}

export default Main