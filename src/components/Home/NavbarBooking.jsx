import React, { useState } from 'react' 
import '../../index.css'
import { VscCalendar } from "react-icons/vsc"
import { IoIosArrowDown } from "react-icons/io"
import { IoIosArrowUp } from "react-icons/io"


function NavbarBooking() {


    const [calendarOpen, setCalendarOpen]=useState(false)

    const modalCalendar=()=>{
          setCalendarOpen(!calendarOpen)
    }


    return (

            <nav style={{zIndex:'100', backgroundColor:'grey'}} className='position-fixed bottom-0 w-100' >

                <form style={{backgroundColor:'rgba(44, 99, 121, 0.74)'}} action="" className='py-2'>

                   <div className='container-fluid'>
                       <div className="row">
                        
                            <div className='col-6 col-lg-3 '>
                                 <div className='bg-light d-flex rounded-5 justify-content-around align-items-center py-2'>

                                    <VscCalendar  style={{fontSize:'1.5rem'}}  />      

                                    <div  > 01 dez - 02 dez </div>

                                    {calendarOpen ? 
                                     <IoIosArrowUp   style={{fontSize:'1.5rem', cursor:'pointer'}} onClick={modalCalendar}  /> 
                                     : 
                                    <IoIosArrowDown   style={{fontSize:'1.5rem', cursor:'pointer'}} onClick={modalCalendar} />  
                                    }
                                                                      

                                </div>   
                            </div>      
    

                        

                       
                        
                        </div> 

                   </div>

                </form>


            </nav>


    )
}

export default NavbarBooking