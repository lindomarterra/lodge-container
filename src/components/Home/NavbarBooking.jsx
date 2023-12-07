import React, { useState } from 'react' 
import '../../index.css'
import { VscCalendar } from "react-icons/vsc"
import { IoIosArrowDown } from "react-icons/io"
import { IoIosArrowUp } from "react-icons/io"
import { GoPeople } from "react-icons/go"
import { IoIosAddCircleOutline } from "react-icons/io"
import { IoIosRemoveCircleOutline } from "react-icons/io"
import { FaCircleArrowLeft } from "react-icons/fa6"
import { FaCircleArrowRight } from "react-icons/fa6"
import { IoBedSharp } from "react-icons/io5"



function NavbarBooking() {

    const [calendarOpen, setCalendarOpen]=useState(false)
    const [dateBooking, setDateBooking]=useState(false)
    const [qtdGuest, setQtdGuest]=useState(2)
    const [qtdKids, setQtdKids]=useState(0)

    const shiftArrow=()=>{setCalendarOpen(!calendarOpen)}
    const shiftArrowDateBooking=()=>{setDateBooking(!dateBooking)}

    const addGuest=()=>{ if(qtdGuest >= 4){ setQtdGuest(4) }else{ setQtdGuest(qtdGuest + 1) } }
    const removeGuest=()=>{ if(qtdGuest <= 1){ setQtdGuest(1) }else{ setQtdGuest(qtdGuest - 1) } }

    const addKids=()=>{ if(qtdKids >= 4){ setQtdKids(4) }else{ setQtdKids(qtdKids + 1) } }
    const removeKids=()=>{ if(qtdKids <= 0){ setQtdKids(0) }else{ setQtdKids(qtdKids - 1) } }


  
    return (
        <body>

            <nav style={{backgroundColor:'grey',zIndex:'100'}} className='position-fixed bottom-0 w-100' >
                    <form style={{backgroundColor:'rgba(44, 99, 121, 0.74)'}}  className='py-2'>
                       <div className='container-fluid'>
                           <div className="row">
                
                                <div className='col-6 col-lg-3 '>
                                     <div className='bg-light d-flex rounded-5 justify-content-around align-items-center py-2'>
                                        <VscCalendar  style={{fontSize:'1.5rem'}}  />
                                        <div  > 01 dez - 02 dez </div>
                                        {calendarOpen ?
                                            <IoIosArrowUp   style={{fontSize:'1.5rem', cursor:'pointer'}} onClick={shiftArrow} data-bs-dimiss='#staticBackdrop' />
                
                                         :
                                            <IoIosArrowDown   style={{fontSize:'1.5rem', cursor:'pointer'}} onClick={shiftArrow}
                                             data-bs-toggle='modal' data-bs-target='#staticBackdrop'/>
                                        }
                
                                    </div>
                                </div>

                                <div className='col-6 col-lg-3 '>
                                   <div className='bg-light d-flex rounded-5 justify-content-around align-items-center py-2'>
                                        <GoPeople  style={{fontSize:'1.5rem'}}  />
                                        <div > <span> {qtdGuest + qtdKids} </span> Hóspedes </div>
                                        <IoBedSharp style={{fontSize:'1.5rem'}} />
                                        <div  > 1 </div>

                                        {dateBooking ?
                                            <IoIosArrowUp   style={{fontSize:'1.5rem', cursor:'pointer'}} 
                                            onClick={shiftArrowDateBooking} data-bs-dimiss='#date-booking-modal' />
                
                                         :
                                            <IoIosArrowDown   style={{fontSize:'1.5rem', cursor:'pointer'}} 
                                            onClick={shiftArrowDateBooking}
                                             data-bs-toggle='modal' data-bs-target='#date-booking-modal'/>
                                        }
                
                                    </div>
                                </div>


                           </div>
                       </div>
                    </form>
            </nav>


                   {/* MODAL CALENDAR */}
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" >
                   <div className="modal-dialog modal-xl">
                     <div className="modal-content">

                        <div className="modal-body">
                        
                          <div id="carouselCalendar" className="carousel slide " >
                          <div className="carousel-inner">

                            <div className="carousel-item active"  >

                                <div className='row g-5' >
                                    <div className='col-md-6' >
                                        <h6 className='text-black-50 text-center'>JANEIRO/2024</h6>
                                        <hr/>
                                        <table className='table table-borderless' >
                                            <thead className='text-center' >
                                                <tr style={{fontSize:'0.8rem'}}>
                                                    <th className='text-black-50'>DOM</th>
                                                    <th className='text-black-50'>SEG</th>
                                                    <th className='text-black-50'>TER</th>
                                                    <th className='text-black-50'>QUA</th>
                                                    <th className='text-black-50'>QUI</th>
                                                    <th className='text-black-50'>SEX</th>
                                                    <th className='text-black-50'>SAB</th>
                                                </tr>
                                            </thead>
                                            <tbody className='text-center' >
                                                <tr style={{fontSize:'0.8rem'}}>
                                                    <td className='date-hover'>1</td>
                                                    <td className='date-hover'>1</td>
                                                    <td className='date-hover'>2</td>
                                                    <td className='date-hover'>3</td>
                                                    <td className='date-hover'>4</td>
                                                    <td className='date-hover'>5</td>
                                                    <td className='date-hover'>6</td>
                                                </tr>
                                                <tr style={{fontSize:'0.8rem'}}>
                                                    <td className='date-hover' >7</td>
                                                    <td className='date-hover' >8</td>
                                                    <td className='date-hover' >9</td>
                                                    <td className='date-hover' >10</td>
                                                    <td className='date-hover' >11</td>
                                                    <td className='date-hover' >12</td>
                                                    <td className='date-hover' >13</td>
                                                </tr>
                                                <tr style={{fontSize:'0.8rem'}}>
                                                    <td className='date-hover' >14</td>
                                                    <td className='date-hover' >15</td>
                                                    <td className='date-hover' >16</td>
                                                    <td className='date-hover' >17</td>
                                                    <td className='date-hover' >18</td>
                                                    <td className='date-hover' >19</td>
                                                    <td className='date-hover' >20</td>
                                                </tr>
                                                 <tr style={{fontSize:'0.8rem'}}>
                                                    <td className='date-hover' >21</td>
                                                    <td className='date-hover' >22</td>
                                                    <td className='date-hover' >23</td>
                                                    <td className='date-hover' >24</td>
                                                    <td className='date-hover' >25</td>
                                                    <td className='date-hover' >26</td>
                                                    <td className='date-hover' >27</td>
                                                </tr>
                                                <tr style={{fontSize:'0.8rem'}}>
                                                    <td className='date-hover' >28</td>
                                                    <td className='date-hover' >29</td>
                                                    <td className='date-hover' >30</td>
                                                    <td className='date-hover' >31</td>
                                                    <td className='date-hover' >1</td>
                                                    <td className='date-hover' >1</td>
                                                    <td className='date-hover' >1</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className='col-md-6' >
                                        <h6 className='text-black-50 text-center'>FEVEREIRO/2024</h6>
                                        <hr/>
                                        <table className='table table-borderless' >
                                            <thead className='text-center' >
                                                <tr style={{fontSize:'0.8rem'}}>
                                                    <th className='text-black-50'>DOM</th>
                                                    <th className='text-black-50'>SEG</th>
                                                    <th className='text-black-50'>TER</th>
                                                    <th className='text-black-50'>QUA</th>
                                                    <th className='text-black-50'>QUI</th>
                                                    <th className='text-black-50'>SEX</th>
                                                    <th className='text-black-50'>SAB</th>
                                                </tr>
                                            </thead>
                                            <tbody className='text-center' >
                                                <tr style={{fontSize:'0.8rem'}}>
                                                    <td></td>
                                                    <td>1</td>
                                                    <td>2</td>
                                                    <td>3</td>
                                                    <td>4</td>
                                                    <td>5</td>
                                                    <td>6</td>
                                                </tr>
                                                <tr style={{fontSize:'0.8rem'}}>
                                                    <td>7</td>
                                                    <td>8</td>
                                                    <td>9</td>
                                                    <td>10</td>
                                                    <td>11</td>
                                                    <td>12</td>
                                                    <td>13</td>
                                                </tr>
                                                <tr style={{fontSize:'0.8rem'}}>
                                                    <td>14</td>
                                                    <td>15</td>
                                                    <td>16</td>
                                                    <td>17</td>
                                                    <td>18</td>
                                                    <td>19</td>
                                                    <td>20</td>
                                                </tr>
                                                 <tr style={{fontSize:'0.8rem'}}>
                                                    <td>21</td>
                                                    <td>22</td>
                                                    <td>23</td>
                                                    <td>24</td>
                                                    <td>25</td>
                                                    <td>26</td>
                                                    <td>27</td>
                                                </tr>
                                                <tr style={{fontSize:'0.8rem'}}>
                                                    <td>28</td>
                                                    <td>29</td>
                                                    <td>30</td>
                                                    <td>31</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                  
                            </div>

                              <div className="carousel-item"  >

                                <div className='row g-5' >
                                    <div className='col-md-6' >
                                        <h6 className='text-black-50 text-center'>FEVEREIRO/2024</h6>
                                        <hr/>
                                        <table className='table table-borderless ' >
                                            <thead className='text-center' >
                                                <tr style={{fontSize:'0.8rem'}}>
                                                    <th className='text-black-50'>DOM</th>
                                                    <th className='text-black-50'>SEG</th>
                                                    <th className='text-black-50'>TER</th>
                                                    <th className='text-black-50'>QUA</th>
                                                    <th className='text-black-50'>QUI</th>
                                                    <th className='text-black-50'>SEX</th>
                                                    <th className='text-black-50'>SAB</th>
                                                </tr>
                                            </thead>
                                            <tbody className='text-center' >
                                                <tr style={{fontSize:'0.8rem'}}>
                                                    <td></td>
                                                    <td>1</td>
                                                    <td>2</td>
                                                    <td>3</td>
                                                    <td>4</td>
                                                    <td>5</td>
                                                    <td>6</td>
                                                </tr>
                                                <tr style={{fontSize:'0.8rem'}}>
                                                    <td>7</td>
                                                    <td>8</td>
                                                    <td>9</td>
                                                    <td>10</td>
                                                    <td>11</td>
                                                    <td>12</td>
                                                    <td>13</td>
                                                </tr>
                                                <tr style={{fontSize:'0.8rem'}}>
                                                    <td>14</td>
                                                    <td>15</td>
                                                    <td>16</td>
                                                    <td>17</td>
                                                    <td>18</td>
                                                    <td>19</td>
                                                    <td>20</td>
                                                </tr>
                                                 <tr style={{fontSize:'0.8rem'}}>
                                                    <td>21</td>
                                                    <td>22</td>
                                                    <td>23</td>
                                                    <td>24</td>
                                                    <td>25</td>
                                                    <td>26</td>
                                                    <td>27</td>
                                                </tr>
                                                <tr style={{fontSize:'0.8rem'}}>
                                                    <td>28</td>
                                                    <td>29</td>
                                                    <td>30</td>
                                                    <td>31</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className='col-md-6' >
                                        <h6 className='text-black-50 text-center'>MARÇO/2024</h6>
                                        <hr/>
                                        <table className='table table-borderless ' >
                                            <thead className='text-center' >
                                                <tr style={{fontSize:'0.8rem'}}>
                                                    <th className='text-black-50'>DOM</th>
                                                    <th className='text-black-50'>SEG</th>
                                                    <th className='text-black-50'>TER</th>
                                                    <th className='text-black-50'>QUA</th>
                                                    <th className='text-black-50'>QUI</th>
                                                    <th className='text-black-50'>SEX</th>
                                                    <th className='text-black-50'>SAB</th>
                                                </tr>
                                            </thead>
                                            <tbody className='text-center' >
                                                <tr style={{fontSize:'0.8rem'}}>
                                                    <td></td>
                                                    <td>1</td>
                                                    <td>2</td>
                                                    <td>3</td>
                                                    <td>4</td>
                                                    <td>5</td>
                                                    <td>6</td>
                                                </tr>
                                                <tr style={{fontSize:'0.8rem'}}>
                                                    <td>7</td>
                                                    <td>8</td>
                                                    <td>9</td>
                                                    <td>10</td>
                                                    <td>11</td>
                                                    <td>12</td>
                                                    <td>13</td>
                                                </tr>
                                                <tr style={{fontSize:'0.8rem'}}>
                                                    <td>14</td>
                                                    <td>15</td>
                                                    <td>16</td>
                                                    <td>17</td>
                                                    <td>18</td>
                                                    <td>19</td>
                                                    <td>20</td>
                                                </tr>
                                                 <tr style={{fontSize:'0.8rem'}}>
                                                    <td>21</td>
                                                    <td>22</td>
                                                    <td>23</td>
                                                    <td>24</td>
                                                    <td>25</td>
                                                    <td>26</td>
                                                    <td>27</td>
                                                </tr>
                                                <tr style={{fontSize:'0.8rem'}}>
                                                    <td>28</td>
                                                    <td>29</td>
                                                    <td>30</td>
                                                    <td>31</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                  
                            </div>

                              <div className="carousel-item"  >

                                <div className='row g-5' >
                                    <div className='col-md-6' >
                                        <h6 className='text-black-50 text-center'>MARÇO/2024</h6>
                                        <hr/>
                                        <table className='table table-borderless ' >
                                            <thead className='text-center' >
                                                <tr style={{fontSize:'0.8rem'}}>
                                                    <th className='text-black-50'>DOM</th>
                                                    <th className='text-black-50'>SEG</th>
                                                    <th className='text-black-50'>TER</th>
                                                    <th className='text-black-50'>QUA</th>
                                                    <th className='text-black-50'>QUI</th>
                                                    <th className='text-black-50'>SEX</th>
                                                    <th className='text-black-50'>SAB</th>
                                                </tr>
                                            </thead>
                                            <tbody className='text-center' >
                                                <tr style={{fontSize:'0.8rem'}}>
                                                    <td></td>
                                                    <td>1</td>
                                                    <td>2</td>
                                                    <td>3</td>
                                                    <td>4</td>
                                                    <td>5</td>
                                                    <td>6</td>
                                                </tr>
                                                <tr style={{fontSize:'0.8rem'}}>
                                                    <td>7</td>
                                                    <td>8</td>
                                                    <td>9</td>
                                                    <td>10</td>
                                                    <td>11</td>
                                                    <td>12</td>
                                                    <td>13</td>
                                                </tr>
                                                <tr style={{fontSize:'0.8rem'}}>
                                                    <td>14</td>
                                                    <td>15</td>
                                                    <td>16</td>
                                                    <td>17</td>
                                                    <td>18</td>
                                                    <td>19</td>
                                                    <td>20</td>
                                                </tr>
                                                 <tr style={{fontSize:'0.8rem'}}>
                                                    <td>21</td>
                                                    <td>22</td>
                                                    <td>23</td>
                                                    <td>24</td>
                                                    <td>25</td>
                                                    <td>26</td>
                                                    <td>27</td>
                                                </tr>
                                                <tr style={{fontSize:'0.8rem'}}>
                                                    <td>28</td>
                                                    <td>29</td>
                                                    <td>30</td>
                                                    <td>31</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className='col-md-6' >
                                        <h6 className='text-black-50 text-center'>ABRIL/2024</h6>
                                        <hr/>
                                        <table className='table table-borderless ' >
                                            <thead className='text-center' >
                                                <tr style={{fontSize:'0.8rem'}}>
                                                    <th className='text-black-50'>DOM</th>
                                                    <th className='text-black-50'>SEG</th>
                                                    <th className='text-black-50'>TER</th>
                                                    <th className='text-black-50'>QUA</th>
                                                    <th className='text-black-50'>QUI</th>
                                                    <th className='text-black-50'>SEX</th>
                                                    <th className='text-black-50'>SAB</th>
                                                </tr>
                                            </thead>
                                            <tbody className='text-center' >
                                                <tr style={{fontSize:'0.8rem'}}>
                                                    <td></td>
                                                    <td>1</td>
                                                    <td>2</td>
                                                    <td>3</td>
                                                    <td>4</td>
                                                    <td>5</td>
                                                    <td>6</td>
                                                </tr>
                                                <tr style={{fontSize:'0.8rem'}}>
                                                    <td>7</td>
                                                    <td>8</td>
                                                    <td>9</td>
                                                    <td>10</td>
                                                    <td>11</td>
                                                    <td>12</td>
                                                    <td>13</td>
                                                </tr>
                                                <tr style={{fontSize:'0.8rem'}}>
                                                    <td>14</td>
                                                    <td>15</td>
                                                    <td>16</td>
                                                    <td>17</td>
                                                    <td>18</td>
                                                    <td>19</td>
                                                    <td>20</td>
                                                </tr>
                                                 <tr style={{fontSize:'0.8rem'}}>
                                                    <td>21</td>
                                                    <td>22</td>
                                                    <td>23</td>
                                                    <td>24</td>
                                                    <td>25</td>
                                                    <td>26</td>
                                                    <td>27</td>
                                                </tr>
                                                <tr style={{fontSize:'0.8rem'}}>
                                                    <td>28</td>
                                                    <td>29</td>
                                                    <td>30</td>
                                                    <td>31</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                  
                            </div>

                          </div>

                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselCalendar" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselCalendar" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                </button>

                                <div className='text-center'>
                                    <FaCircleArrowLeft  style={{cursor:'pointer'}} className='fs-2 m-2 arrowSlideCalendarHover'  data-bs-target="#carouselCalendar" data-bs-slide="prev" />
                                    <FaCircleArrowRight style={{cursor:'pointer'}} className='fs-2 m-2 arrowSlideCalendarHover'  data-bs-target="#carouselCalendar" data-bs-slide="next" />
                                </div> 

                         </div>                 
                                        


                       </div>

                       <div class="modal-footer">            
                         <button className="btn btn-sm btn-secondary fw-bolder" onClick={shiftArrow} data-bs-dismiss="modal"> Fechar </button>
                         <button type="button" className="btn btn-sm btn-success fw-bolder "> Confirmar Data </button>
                     </div>
                    </div>
                  </div>
             </div>                            


                  {/* MODAL DATE BOOKING */}
            <div className="modal fade" id="date-booking-modal" data-bs-backdrop="static" >
                   <div className="modal-dialog">
                     <div className="modal-content">

                        <div className="modal-body">
                        
                            <div className=''>
                                <h5 className='text-center'> Acomodação 1 </h5>

                                <div className='d-flex justify-content-between align-items-center' >
                                    <div>
                                        <p className='fs-6 fw-bold mb-0 pb-0' >adultos </p>
                                        <span style={{fontSize:'0.7rem'}} className='mt-0 pt-0'>(a partir de 7 anos)</span>
                                    </div>
                                    <div className='d-flex align-items-center'  >
                                         <IoIosRemoveCircleOutline role='button' className='fs-2' onClick={removeGuest} /> 
                                         <span className='mx-2 fw-bolder fs-5 '> {qtdGuest} </span>
                                         <IoIosAddCircleOutline role='button' className='fs-2' onClick={addGuest} />
                                    </div>
                                </div>

                                <div className='d-flex justify-content-between align-items-center' >
                                    <div>
                                        <p className='fs-6 fw-bold mb-0 pb-0'>crianças </p>
                                        <span style={{fontSize:'0.7rem'}} className='mt-0 pt-0'>(menores de 6 anos)</span>
                                    </div>
                                    <div className='d-flex align-items-center'  >
                                         <IoIosRemoveCircleOutline role='button' className='fs-2' onClick={removeKids} /> 
                                         <span className='mx-2 fw-bolder fs-5 '> {qtdKids} </span>
                                         <IoIosAddCircleOutline role='button' className='fs-2' onClick={addKids} />
                                    </div>
                                </div>
                                
                              {addKids}
                                 
                            </div>                                                   

                       </div>

                       <div class="modal-footer d-flex justify-content-between ">            
                         <button className="btn btn-sm btn-secondary fw-bolder" onClick={shiftArrowDateBooking} data-bs-dismiss="modal"> Fechar </button>
                         <button type="button" className="btn btn-sm btn-primary fw-bolder "> Avançar </button>
                     </div>
                    </div>
                  </div>
            </div>                            

        





        </body>
    )
}

export default NavbarBooking