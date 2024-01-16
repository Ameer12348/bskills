import React from 'react'
import Recite from '../Footer/Recite'
import Footer from '../Footer/Footer'
import { Helmet } from 'react-helmet'

const Aboutus = () => {
  return (
    <>
    <Helmet>
      <title>Bskills - About us</title>
      <meta name="description" content="BSkills Offering Web Developent,Andriod Development,iOS Development, Graphic Designing, Digital Marketing, Networking & Data Communication, Search Engine Optimization, Computer Hardware Engineer, MS Office, Shorthand, Stenotypist, IELTS, TOEFL, PTE and Spoken English" />
    <meta name="keywords" content="Web Developent,Andriod Development,iOS Development, Graphic Designing, Digital Marketing, Networking & Data Communication,Search Engine Optimization, Computer Hardware Engineer, MS Office, Shorthand, Stenotypist, IELTS, TOEFL, PTE and Spoken English"/>
    <meta name="robots" content="index,follow" />

    </Helmet>
        <div className='py-5 container' style={{minHeight:"50vh"}}>
          <h1 className='text-center text-dark fw-bold' style={{fontSize:"36px"}}>About <span className='text-danger'>Bskills</span></h1>
          <p className='text-center mt-3 mb-3 px-3 ' style={{fontSize:"18px" ,color:'#3f444a'}}>Learn advance skills with <strong>Bskills </strong></p>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5 mt-3">
            <div className='px-5 ps-sm-0'>
              <h3 style={{fontSize:"18px"}}>Establishment</h3>
              <p style={{fontSize:"14px",color:"#636363"}}> Bskills is a training institution established in 2023 </p>
            </div>
            <div className='px-5 ps-sm-0'>
              <h3 style={{fontSize:"18px"}}>Aim</h3>
              <p style={{fontSize:"14px",color:"#636363"}}>We aim to make new ways so you can pursue your interest</p>
            </div>
            <div className='px-5 ps-sm-0'>
              <h3 style={{fontSize:"18px"}}>Values</h3>
              <p style={{fontSize:"14px",color:"#636363"}}>Our utmost aim is to create value and empower our students</p>
            </div>
            <div className='px-5 ps-sm-0'>
              <h3 style={{fontSize:"18px"}}>Faculty</h3>
              <p style={{fontSize:"14px",color:"#636363"}}>Learn from industrial experts who are passionate about teaching</p>
            </div>
            <div className='px-5 ps-sm-0'>
              <h3 style={{fontSize:"18px"}}>Career</h3>
              <p style={{fontSize:"14px",color:"#636363"}}>Learning advanced skills is a key for better and brighter career building</p>
            </div>
            <div className='px-5 ps-sm-0'>
              <h3 style={{fontSize:"18px"}}>Training</h3>
              <p style={{fontSize:"14px",color:"#636363"}}>Providing quality training is our priority</p>
            </div>
          </div>
        </div>
        <Recite/>
        <Footer/>
        

    </>
  )
}

export default Aboutus