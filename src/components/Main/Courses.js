import React from 'react'
import { courses } from '../data/course'
import { Link } from 'react-router-dom'
import './Courses.scss'
const Courses = () => {
  return (
    <div className='container p-2'>
      <div className="row g-5 row-cols-1 row-cols-lg-2 mb-5">
      {
        courses.map(ele=>{

          return(
              <div className=' py-2'>
                <Link  to={`/course/${ele.id}`} onClick={()=>{window.scrollTo(0,0)}} className='text-decoration-none w-100 d-block text-dark py-3 px-4 position-relative course-link'>
                  <span className='text-light px-2' style={{position:'absolute' ,top:'10px',right:'10px',backgroundColor:'#607d8b'}}>{ele.rating} </span>
                  <h3 className='fw-bold' style={{fontSize:'20px'}}>{ele.title} </h3>
                  <p className='fw-medium mb-2'>{ele.outline[0].outlines.join(' ') } </p>
                  <p style={{fontSize:'13px',color:'#636363'}} >{ele.description.slice(0,100)}... </p>
                  <div className='buttons d-flex justify-content-evenly mt-2'>
                    <button className=' w-25 border-0 text-light py-2 px-2 fw-medium' style={{fontSize:'14px',background:'linear-gradient( #1aa5d8, #1386b1)'}}>View Details </button>
                    <button className=' w-25 border-0  py-2 px-2 fw-medium' style={{fontSize:'14px',color:'#636363'}}>Available</button>
                    <button className=' w-25 border-0  py-2 px-2 fw-medium' style={{fontSize:'14px',color:'#636363'}}>Book Now</button>
                  </div>
                </Link>
              </div>
              
        )
      })
    }
    {/* bootstrap row end */ }
    </div>
  </div>

  )
}

export default Courses