import React, { useRef } from "react";
import "./Header.scss";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaBars, FaXmark } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import nav_logo from '../images/main nav logo.png'
import orange_icon from '../images/Bskills Orange.png'
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const main_nav_links = useRef()
  let navtogglervar = 0;
  const navtogglerfun = ()=>{
    if (navtogglervar ===0 ) {
      main_nav_links.current.style = 'width:70% ; visibility:visible;'
      navtogglervar = 1
    } else {
      main_nav_links.current.style = 'width:0% ; visibility:hidden;'
      navtogglervar = 0 
    }
  }
  const searchinput = useRef()
  const navigate = useNavigate()
  return (
    <>
      {/* top nav code start */}
      <div className="container-fluid top-nav p-0 d-none d-lg-block">
        {/* top nav container start*/}
        <div className="container m-auto d-flex justify-content-between py-1">
          <ul className="d-flex p-0 m-0">
            <li className="list-unstyled px-2 mx-1 address-links" style={{border:'1px solid a3adb9'}}><a className="text-decoration-none" href="https://maps.app.goo.gl/GKUj8efc9cjDmtc4A" target="_main"> Walk Into :  10 Faiz Road, Muslim Town, Lahore </a></li>
            <li className="list-unstyled px-2 mx-1 address-links" style={{border:'1px solid a3adb9'}}><a className="text-decoration-none" href="tel:+923054447156" target="_main">Phone: +92-305-4447156</a></li>
          </ul>
          {/* top nav social links start */}
          <ul className="top-nav-social-links p-0 d-flex m-0" >
            <li className="list-unstyled px-1 mx-1"><a className="text-decoration-none" href="https://www.youtube.com/@BskillsOfficial" target="_main"><FaYoutube /></a></li>
            <li className="list-unstyled px-1 mx-1"><a className="text-decoration-none" href="http://www.fb.com/bskillsofficial" target="_main"><FaFacebookF/> </a></li>
            <li className="list-unstyled px-1 mx-1"><a className="text-decoration-none" href="https://www.instagram.com/bskillsofficial" target="_main"><FaInstagram /></a></li>
            <li className="list-unstyled px-1 mx-1"><a className="text-decoration-none" href="https://api.whatsapp.com/send?phone=923054447156" target="_main"><FaWhatsapp/> </a></li>
          </ul>
          {/* top nav social links end */}
        </div>
        {/* top nav container end*/}
      </div>
      {/* top nav code end */}



      {/* main nav start */ }
      <div className="container-fluid p-0 " style={{backgroundColor:'white'}}>
        <div className="container m-auto main-nav d-flex justify-content-between align-items-center position-relative p-2 m-0">
          <div className="logo-div">
            <Link to="/"><img className="img-fluid" src={nav_logo}  alt="" /></Link>
          </div>
          {/* logo div end */ }
          <button className="border-0 d-block d-lg-none d-flex justify-content-center align-items-center" style={{fontSize:'30px',backgroundColor:"white"}} onClick={()=>{navtogglerfun()}}>
            <FaBars />
          </button>
          {/* bar icon end */ }
          {/* main nav links start */ }
          <ul className="d-flex align-items-lg-center align-items-start main-nav-links  m-0 "   ref={main_nav_links}>
            <li className="list-unstyled d-block d-lg-none mt-2">
              <button className="border-1  border-dark  p-2 my-1 d-flex justify-content-center align-items-center" style={{backgroundColor:'inherit'}} onClick={()=>{navtogglerfun()}}>
                <FaXmark/>
              </button>
            </li>
            <li className="list-unstyled">
              <Link  className="text-decoration-none px-lg-2 py-lg-3 py-2 my-1 my-lg-0 d-inline-block nav-anchor" to='/'>Home</Link>
            </li>
            <li className="list-unstyled">
              <Link  className="text-decoration-none px-lg-2 py-lg-3 py-2 my-1 my-lg-0 d-inline-block nav-anchor" to='/courses'>All Courses</Link>
            </li>
            <li className="list-unstyled right-100 about-section-toggle d-none d-lg-block">
              <Link  className="text-decoration-none px-lg-2 py-lg-3 py-2 my-1 my-lg-0 d-inline-block nav-anchor " to='/'>About Us</Link>
            </li>
            {/* about us links start */}
            <ul className="row row-cols-lg-4 row-cols-1  about-us-links p-lg-0 ps-3" >
              <li className="list-unstyled ps-5 d-none d-lg-block py-5">
                <img className="img-fluid" src={orange_icon} alt="" />
              </li>
              <li className="list-unstyled p-5 d-none d-lg-block"> 
                <p style={{fontSize:'14px'}}>Welcome to BSkills, Admissions are open for new batches of Web Development, Amazon, Android/iOS Development, Graphics Designing, Digital Marketing, Networking, Shorthand, MS Office, IELTS, Spoken English and other programs.</p>
                <Link className="text-light fs-6 text-decoration-none rounded px-2 py-1" style={{backgroundColor:'#002147'}} to='/' >Read more</Link>
              </li>
              <li className="list-unstyled p-lg-5 d-flex flex-column">
                <Link className="text-decoration-none text-dark py-lg-1 py-2" to='/aboutus' >About Us</Link>
                <Link className="text-decoration-none text-dark py-lg-1 py-2"  to='/blog'> Our Blogs</Link>
                <Link className="text-decoration-none text-dark py-lg-1 py-2" to='/videos' > Our Videos</Link>
              </li>
              <li className="list-unstyled p-lg-5 d-flex flex-column">
                <Link className="text-decoration-none text-dark py-lg-1 py-2" > Contact Us</Link>
                <Link className="text-decoration-none text-dark py-lg-1 py-2" > Online Verification</Link>
              </li>
            </ul>
          {/* about us links end*/}
            <li className="list-unstyled">
              <Link  className="text-decoration-none px-lg-2 py-lg-3 py-2 my-1 my-lg-0 d-inline-block nav-anchor" to='/campus'>Our Campuses</Link>
            </li>
            <li className="list-unstyled">
              <Link  className="text-decoration-none px-lg-2 py-lg-3 py-2 my-1 my-lg-0 d-inline-block nav-anchor" to='/'>Contact</Link>
            </li>
            <li className="list-unstyled">
              <Link  className="text-decoration-none px-3 ms-lg-1 py-1 d-inline-block rounded text-light py-2 my-1 my-lg-0 bg-danger"  style={{fontSize:'16px',fontWeight:'600'}} to='/'>online verification</Link>
            </li>
          </ul>
          {/* main nav links end */ }
         

        </div>
      </div>
      {/* main nav end */ }
      <div className="container-fluid p-0" style={{backgroundColor:'#002147'}}>
        <div className="container row justify-content-center m-auto">
          <form  className="col-12 cols-sm-11 col-md-10 col-lg-9 col-xl-8 col-xxl-7 py-3 px-0 position-relative search-form">
            <button className="position-absolute left-0 top-50  ps-2 border-0 d-flex justify-content-center align-items-center cursor-aero" onClick={e=>e.preventDefault()} style={{cursor:'aero',translate:'0% -50%',fontSize:'30px',backgroundColor:'transparent'}}><CiSearch /></button>
            <input  className="w-75 py-md-3 py-2 border-0 rounded-start me-0" style={{paddingLeft:'50px'}} ref={searchinput}  type="text" placeholder="Search..." />
            <button className="w-25 border-0 py-md-3 py-2 bg-danger text-light fw-semibold rounded-end text-nowrap ms-0" onClick={e=>{e.preventDefault();navigate(`/search/${searchinput.current.value}`)}} >Search</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Header;
