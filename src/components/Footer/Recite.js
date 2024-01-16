import React from 'react'
import bulb from '../images/bulb.png'
import { Link } from 'react-router-dom'
const Recite = () => {
  return (
    <div className="container-fluid py-5" style={{backgroundColor:'#f36b3b'}}>
      <div className='container px-5'>
        <div className='row'>
            <div className='col-md-2 col-12 my-3 my-md-0'><img src={bulb} alt="" style={{width:'90px',height:'90px'}} /> </div>
            <div className='col-md-8 col-12 my-3 my-md-0'>
                <h4 className='text-light fw-bold' style={{fontSize:"26px"}}>READ</h4>
                <p className='text-light ' style={{fontSize:'15px'}}>In the name of your Lord,who created - created man from a clinging substance. Read! And your Lord is the Most Generous.</p>
                <p className='text-light ' style={{textAlign:'right'}}>- Quran (Al-Alaq 96:1-3)</p>
            </div>
            <div className='col-md-2 col-12 my-3 my-md-0'>
              <Link className='btn btn-outline-light text-nowrap rounded-pill py-2 px-3'>Browse Our Courses</Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Recite