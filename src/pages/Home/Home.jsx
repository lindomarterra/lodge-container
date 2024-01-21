import React from 'react' 
import Header from '../../components/Header/Header'
import NavbarBooking from '../../components/NavbarBooking/NavbarBooking'
import Carrousel from '../../components/Carrousel/Carrousel'
import GaleriaFotos from '../../components/GaleriaFotos/GaleriaFotos'
import Acomodacoes from '../../components/Acomodacoes/Acomodacoes'
import Depoimentos from '../../components/Depoimentos/Depoimentos'
import GoogleMaps from '../../components/GoogleMaps/GoogleMap'
import Footer from '../../components/Footer/Footer'

function Home() {
    return ( 
        <section>
            <NavbarBooking/>
            <Header/>
            <Carrousel/>
            <GaleriaFotos/>
            <Acomodacoes/>
            <Depoimentos/>
            <GoogleMaps/>           
            <Footer/>
        </section>
    )
}

export default Home