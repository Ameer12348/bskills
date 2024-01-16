import React from 'react'
import './Hero.scss'
import { FaUser } from "react-icons/fa";
import { IoDiamondOutline } from "react-icons/io5";
import { FaGraduationCap } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
const Hero = () => {
  return (
      <div className='container-fluid py-5 px-3 px-sm-5 hero-1'>
        {/* first hero section start */}
        <div className="container p-0 m-auto">
            <div className="row">
                <div className="col-12 col-lg-7 p-sm-5 p-2 ps-4 ps-sm-2">
                    <h1 className='text-light' style={{fontSize:'42px'}}>Bskills IT Training Center
                        <br/>
                        <span className='fw-normal' style={{fontSize:'32px'}}>our passion, your business</span>
                    </h1>
                    <h2 className='text-light py-3' style={{fontSize:'32px' }}>Lahore</h2>
                    <div className="row row-cols-1 row-cols-md-2 g-5">
                        <div>
                            <div className='d-flex '>
                                <div className='bg-danger me-3 d-flex justify-content-center align-items-center  px-4 py-2 text-light'  style={{fontSize:'30px'}}>
                                    <FaUser />
                                </div>
                                <h4 className='text-light' style={{fontSize:'22px'}}>
                                    expert
                                    <br/>
                                    <span className='fw-normal' style={{fontSize:'16px'}}>trainers</span>
                                </h4>
                            </div>
                        </div>
                        <div>
                            <div className='d-flex '>
                                <div className='bg-danger me-3 d-flex justify-content-center align-items-center  px-4 py-2 text-light'  style={{fontSize:'30px'}}>
                                    <IoDiamondOutline />
                                </div>
                                <h4 className='text-light' style={{fontSize:'22px'}}>
                                    empower
                                    <br/>
                                    <span className='fw-normal' style={{fontSize:'16px'}}>students</span>
                                </h4>
                            </div>
                        </div>
                        <div>
                            <div className='d-flex '>
                                <div className='bg-danger me-3 d-flex justify-content-center align-items-center  px-4 py-2 text-light'  style={{fontSize:'30px'}}>
                                    <FaGraduationCap />
                                </div>
                                <h4 className='text-light' style={{fontSize:'22px'}}>
                                    better
                                    <br/>
                                    <span className='fw-normal' style={{fontSize:'16px'}}>career</span>
                                </h4>
                            </div>
                        </div>
                        <div>
                            <div className='d-flex '>
                                <div className='bg-danger me-3 d-flex justify-content-center align-items-center  px-4 py-2 text-light'  style={{fontSize:'30px'}}>
                                    <FaStar />
                                </div>
                                <h4 className='text-light' style={{fontSize:'22px'}}>
                                    quality
                                    <br/>
                                    <span className='fw-normal' style={{fontSize:'16px'}}>trainings</span>
                                </h4>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-12 col-lg-5 p-sm-5 p-2">
                    <div className='d-flex flex-column align-items-center justify-content-center bg-light rounded p-4'  style={{border:"3px dashed black"}}>
                        <p className='my-2' style={{fontSize:'18px'}}>GET INFORMATION FORM THE</p>
                        <h1 className='text-danger fw-bold' style={{fontSize:"48px"}}>ADMISSIONS</h1>
                        <p className='fw-medium'>FILL BELOW DETAILS</p>
                        <form className='row g-3 '>
                                <div className='py-1 d-flex col-md-6 col-12 '>
                                    <input className=' border-bottom-1 d-block m-auto' style={{border:'0px' ,borderBottom:'1px solid gray',width:'90%'}} placeholder='Name' type="text" />
                                </div>
                                <div className='py-1 d-flex col-md-6 col-12 '>
                                    <input className=' border-bottom-1 d-block m-auto' style={{border:'0px' ,borderBottom:'1px solid gray',width:'90%'}} placeholder='Email' type="email" />
                                </div>
                                <div className='py-1 d-flex col-md-6 col-12 '>
                                    <input className=' border-bottom-1 d-block m-auto' style={{border:'0px' ,borderBottom:'1px solid gray',width:'90%'}} placeholder='Phone' type="tel"  />
                                </div>
                                <div className='py-1 d-flex col-md-6 col-12 '>
                                    <input className=' border-bottom-1 d-block m-auto' style={{border:'0px' ,borderBottom:'1px solid gray',width:'90%'}} placeholder='Description' type="text"  />
                                </div>
                                <div className='py-1 d-flex col-12 px-2'>
                                    <button  className='d-block bg-danger border-0 rounded py-2  m-auto text-light fw-medium' style={{width:'100%',fontSize:'20px'}}  onClick={e=>{e.preventDefault()}}>Submit</button>
                                </div>
                        </form> 
                    </div>
                </div>
            </div>
        </div>
        {/* first hero section end */}
    </div>
  )
}

export default Hero