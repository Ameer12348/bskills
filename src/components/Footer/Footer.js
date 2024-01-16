import React from 'react'
import { Link } from 'react-router-dom'
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
const Footer = () => {
  return (
    <>
    <div className='container-fluid p-0' style={{backgroundColor:"#002147"}}>
        <div className="container py-5">
            <div className="row">
                <div className="col-12 col-lg-4 px-2 ps-3 ps-sm-2 py-4" style={{borderTop:"1px solid #838384"}}>
                    <h4 className='text-light fw-bold mb-4' style={{fontSize:"15px"}}>POPULAR COURSES</h4>
                    <div className="row row-cols-2">
                        <Link className='text-decoration-none py-1' style={{fontSize:"13px",color:"#838384"}}>Graphic Design</Link>
                        <Link className='text-decoration-none py-1' style={{fontSize:"13px",color:"#838384"}}>Whiteboard Animation</Link>
                        <Link className='text-decoration-none py-1' style={{fontSize:"13px",color:"#838384"}}>Video Editing</Link>
                    </div>
                </div>
                <div className="col-12 col-lg-4 p-2 ps-3 ps-sm-2 py-4" style={{borderTop:"1px solid #838384"}}>
                    <h4 className='text-light fw-bold mb-4' style={{fontSize:"15px"}}>COURSES</h4>
                    <div className="row row-cols-2">
                        <Link className='text-decoration-none py-1' style={{fontSize:"13px",color:"#838384"}}>Amazon</Link>
                        <Link className='text-decoration-none py-1' style={{fontSize:"13px",color:"#838384"}}>Web Development</Link>
                        <Link className='text-decoration-none py-1' style={{fontSize:"13px",color:"#838384"}}>MS Office</Link>
                        <Link className='text-decoration-none py-1' style={{fontSize:"13px",color:"#838384"}}>Digital Marketing</Link>
                    </div>
                </div>
                <div className="col-12 col-lg-4 p-2 ps-3 ps-sm-2 py-4" style={{borderTop:"1px solid #838384"}}>
                    <h4 className='text-light fw-bold mb-4' style={{fontSize:"15px"}}>HELP & SUPPORT</h4>
                    <div className="row row-cols-2">
                        <Link className='text-decoration-none py-1' style={{fontSize:"13px",color:"#838384"}}>Contact us</Link>
                        <Link className='text-decoration-none py-1' style={{fontSize:"13px",color:"#838384"}}>About us</Link>
                        <Link className='text-decoration-none py-1' style={{fontSize:"13px",color:"#838384"}}>Online Verification</Link>
                    </div>
                </div>
            </div>
            <div className="row mt-2" style={{borderTop:"1px solid #838384"}}>
                <div className="col-12 col-lg-4 px-2 ps-3 ps-sm-2 pt-4" >
                    <h4 className='text-light fw-bold mb-4' style={{fontSize:"15px"}}>GET IN TOUCH</h4>
                    <p style={{fontSize:"13px",color:"#838384"}}>Address: <a className="text-decoration-none" style={{fontSize:"13px",color:"#838384"}} href="https://maps.app.goo.gl/GKUj8efc9cjDmtc4A"  target="_main"> 10 Faiz Road, Muslim Town, Lahore </a></p>
                    <p style={{fontSize:"13px",color:"#838384"}}>Phone: <a className="text-decoration-none" style={{fontSize:"13px",color:"#838384"}} href="tel:+923054447156" target="_main">+92-305-4447156</a></p>
                    <p style={{fontSize:"13px",color:"#838384"}}>Email: <a className="text-decoration-none" style={{fontSize:"13px",color:"#838384"}} href="mailto:info@bskills.net">info@bskills.net</a></p>
                </div>
                <div className="col-12 col-lg-4 px-2 ps-3 ps-sm-2 pt-4" >
                    <h4 className='text-light fw-bold mb-4' style={{fontSize:"15px"}}>SOCIAL MEDIA</h4>
                    <div className='d-flex'>
                        <a className="text-decoration-none p-2 rounded-circle d-flex justify-content-center align-items me-2" style={{border:"1px solid #838384",color:"white"}} href="https://www.youtube.com/@BskillsOfficial" target="_main"><FaYoutube /></a>
                        <a className="text-decoration-none p-2 rounded-circle d-flex justify-content-center align-items me-2" style={{border:"1px solid #838384",color:"white"}} href="http://www.fb.com/bskillsofficial" target="_main"><FaFacebookF/> </a>
                        <a className="text-decoration-none p-2 rounded-circle d-flex justify-content-center align-items me-2" style={{border:"1px solid #838384",color:"white"}} href="https://www.instagram.com/bskillsofficial" target="_main"><FaInstagram /></a>
                        <a className="text-decoration-none p-2 rounded-circle d-flex justify-content-center align-items me-2" style={{border:"1px solid #838384",color:"white"}} href="https://api.whatsapp.com/send?phone=923054447156" target="_main"><FaWhatsapp/> </a>
                    </div>
        
                </div>

            </div>
        </div>
        
    </div>
    <p className='text-center py-2 m-0' style={{backgroundColor:'#01172f',fontSize:"13px",color:"#838384",verticalAlign:'center'}}>A Product of  <a className='text-decoration-none fw-bold ms-2' style={{color:'darkred',fontSize:"16px"}} href="/">IT BRAND TECH</a></p>
    </>
  )
}

export default Footer