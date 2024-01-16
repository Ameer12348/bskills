import React from 'react'
import Hero from '../Header/Hero'
import { envin } from '../data/envin'
import Courses from '../Main/Courses'
import Recite from '../Footer/Recite'
import Footer from '../Footer/Footer'
import { Helmet } from 'react-helmet'
const Homepage = () => {
  return (
    <>
    <Helmet>
    <meta name="description" content="BSkills Offering Web Developent,Andriod Development,iOS Development, Graphic Designing, Digital Marketing, Networking & Data Communication, Search Engine Optimization, Computer Hardware Engineer, MS Office, Shorthand, Stenotypist, IELTS, TOEFL, PTE and Spoken English" />
    <meta name="keywords" content="Web Developent,Andriod Development,iOS Development, Graphic Designing, Digital Marketing, Networking & Data Communication,Search Engine Optimization, Computer Hardware Engineer, MS Office, Shorthand, Stenotypist, IELTS, TOEFL, PTE and Spoken English"/>
    <meta name="robots" content="index,follow" />
    <title>Bskills - IT Training Center</title>

    </Helmet>
      <Hero/>  
        <div className="container p-0">
          <h1 className='text-center text-danger fw-bold mt-5 mb-3 ' style={{fontSize:"36px"}}>IT <span className='text-dark'>Training</span> Center</h1>
          <p className='text-center mt-3 mb-5 fw-light' style={{fontSize:"18px" ,color:'#3f444a'}}>Admissions are open for new batches of Web Development, Amazon, Android/iOS Development, Graphics Designing, Digital Marketing, Networking, Shorthand, MS Office, IELTS, Spoken English and other programs.</p>
          {/* environment div start  */}
          <div className="row mb-5 m-auto row-cols-1  row-cols-md-2 row-cols-lg-3 row-cols-xxl-4 g-3 environment">
            {
              envin.map(ele=>{
                return (
                  <div className='position-relative py-0' style={{zIndex:'3',background:'rgba(0,0,200,0.8)',backgroundClip:"content-box"}} key={ele.title}>
                    <img className='w-100' src={ele.image} style={{opacity:'0.4'}}  alt="" />
                    <p className='w-75 text-center px-3' style={{fontSize:"18px",position:'absolute' ,top:'50%',left:'50%',translate:'-50% -50%',color:'white',fontWeight:'600',zIndex:'4'}}>{ele.title} </p>
                  </div>
                )
              })
            }
          </div>
          {/* environment div end */}
          <h1 className='text-center text-dark fw-bold' style={{fontSize:"36px"}}>Our <span className='text-danger'>Courses</span></h1>
          <p className='text-center mt-3 mb-3 px-3 ' style={{fontSize:"18px" ,color:'#3f444a'}}>Admissions are open for new batches of Web Development, Amazon, Android/iOS Development, Graphics Designing, Digital Marketing, Networking, Shorthand, MS Office, IELTS, Spoken English and other programs.</p>
        </div>
        <Courses/>
        <Recite/>
        <Footer/>
      

    
    </>
  )
}

export default Homepage