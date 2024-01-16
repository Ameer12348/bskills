import React from 'react'
import Courses from '../Main/Courses'
import Recite from '../Footer/Recite'
import Footer from '../Footer/Footer'
import { Helmet } from 'react-helmet'

const AllCourses = () => {
  return (
    <>
      <Helmet>
        <title>Bskills - All Courses</title>
        <meta name='description' content='Admissions are open for new batches of Web Development, Amazon, Android/iOS Development, Graphics Designing, Digital Marketing, Networking, Shorthand, MS Office, IELTS, Spoken English and other programs.' />
        <meta name='keywords' content='Web Developent,Andriod Development,iOS Development, Graphic Designing, Digital Marketing, Networking & Data Communication,Search Engine Optimization, Computer Hardware Engineer, MS Office, Shorthand, Stenotypist, IELTS, TOEFL, PTE and Spoken English' />
        <meta name="robots" content="index,follow"/>
      </Helmet>
        <div className='py-5' style={{minHeight:"50vh"}}>
            <h1 className='text-center text-dark fw-bold' style={{fontSize:"36px"}}>Our <span className='text-danger'>Courses</span></h1>
            <p className='text-center mt-3 mb-3 px-3 ' style={{fontSize:"18px" ,color:'#3f444a'}}>Admissions are open for new batches of Web Development, Amazon, Android/iOS Development, Graphics Designing, Digital Marketing, Networking, Shorthand, MS Office, IELTS, Spoken English and other programs.</p>
            <Courses/>
        </div>
        <Recite/>
        <Footer/>
    </>
  )
}

export default AllCourses