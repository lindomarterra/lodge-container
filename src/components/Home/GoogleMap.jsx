import React from 'react' 

function GoogleMap() {
    return (

        <section className='mb-5 pb-5 m-2 border border-2 h-50 ' >
            
        <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3735.272808976877!2d-46.06799692556505!3d-20.57691378096169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b419ab619588af%3A0x70b4cfe75917235a!2sPousada%20Villa%20Container%20Lodge%20-%20Capit%C3%B3lio!5e0!3m2!1sen!2sbr!4v1703192718433!5m2!1sen!2sbr" 
        title='Responsive Google map'
        width="100%" 
        height="100%" 
        allowfullscreen
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">

        </iframe>

        </section>

    )
}

export default GoogleMap