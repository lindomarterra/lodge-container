import React from 'react' 
import Header from '../../components/Header/Header'
import Carrousel from '../../components/Carrousel/Carrousel'
import QuemSomos from '../../components/QuemSomos/QuemSomos'
import GaleriaFotos from '../../components/GaleriaFotos/GaleriaFotos'
import Acomodacoes from '../../components/Acomodacoes/Acomodacoes'
import Depoimentos from '../../components/Depoimentos/Depoimentos'
import GoogleMaps from '../../components/GoogleMaps/GoogleMap'
import NavbarBooking from '../../components/NavbarBooking/NavbarBooking'
import Footer from '../../components/Footer/Footer'

function Home() {
    return ( 
        <section>
            <Header/>
            <Carrousel/>
            <QuemSomos/>
            <GaleriaFotos/>
            <Acomodacoes/>
            <Depoimentos/>
            <GoogleMaps/>
            <NavbarBooking/>
            <Footer/>
        </section>
    )
}

export default Home