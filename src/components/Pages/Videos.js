import React from 'react'
import Recite from '../Footer/Recite'
import Footer from '../Footer/Footer'

const Videos = () => {
  return (
    <>
        <div className='py-5' style={{minHeight:"50vh"}}>
        <h1 className='text-center text-dark fw-bold' style={{fontSize:"36px"}}>Our <span className='text-danger'>Videos</span></h1>
        <p className='text-center mt-3 mb-3 px-3 mb-5' style={{fontSize:"18px" ,color:'#3f444a'}}>Here are our videos.</p>

        
        </div>
        <Recite/>
        <Footer/>
    </>
  )
}

export default Videos