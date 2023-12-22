import React from 'react' 
import { CgInstagram } from "react-icons/cg"
import { TfiYoutube } from "react-icons/tfi"
import { SiTripadvisor } from "react-icons/si"
import '../../index.css'

function UnderFooter() {
    return ( 
        <section style={{backgroundColor:'snow'}} className='mt-1 mb-5 pb-5'>
            <div className='p-5 text-center'>
                <span className='m-1 p-4 rounded-2 instaHover'><CgInstagram   className='fs-4 text-black '/></span>
                <span className='m-1 p-4 rounded-2 youTubeHover'><TfiYoutube  className='fs-4 text-black '/></span>
                <span className='m-1 p-4 rounded-2 tripHover'><SiTripadvisor  className='fs-4 text-black '/></span>            
            </div>
        </section>
    )
}

export default UnderFooter