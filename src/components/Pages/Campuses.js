import React from 'react'
import Recite from '../Footer/Recite'
import Footer from '../Footer/Footer'
import './Campuses.scss'
import { Helmet } from 'react-helmet'
const Campuses = () => {
  return (

    <>
    <Helmet>
    <title>Bskills - Campuses</title>
    <meta name="description" content="BSkills Offering Web Developent,Andriod Development,iOS Development, Graphic Designing, Digital Marketing, Networking & Data Communication, Search Engine Optimization, Computer Hardware Engineer, MS Office, Shorthand, Stenotypist, IELTS, TOEFL, PTE and Spoken English" />
    <meta name="keywords" content="Web Developent,Andriod Development,iOS Development, Graphic Designing, Digital Marketing, Networking & Data Communication,Search Engine Optimization, Computer Hardware Engineer, MS Office, Shorthand, Stenotypist, IELTS, TOEFL, PTE and Spoken English"/>
    <meta name="robots" content="index,follow" />

    </Helmet>
        <div className='container-fluid p-0'>
            <div className="container-fluid campus-fluid mb-5"  >
                <div className="container py-5">
                    <h1 className='text-light text-center mb-4'>List of Our Campuses</h1>
                    <p className='text-light text-center fw-light' style={{fontSize:'15px'}}>Bskills is the biggest and the best Institute in this area. With good results and other activities.It has a huge area with Multi Campus. Each Campus is for different divisions.The environment is so friendly.The seniors and juniors have a good bonding on the campus.Our teachers and seniors are really helpful and friendly on the campus. Everyone contributes to having a peaceful campus.</p>
                    <button className='d-block mx-auto bg-transparent text-light  px-3 py-1 rounded-pill fw-light' style={{border:'1px solid #ffffff8f'}}>Total Campuses: 2</button>
                </div>
            </div>
            <Recite/>
            <Footer/>
        </div>
        
        

    </>
  )
}

export default Campuses