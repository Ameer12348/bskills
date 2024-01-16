import Recite from '../Footer/Recite'
import Footer from '../Footer/Footer'
import { Link, useParams } from 'react-router-dom'
import { courses } from '../data/course'
const SearchCourse = () => {
    const search = useParams()
    const searchdata = courses.filter(ele=> ele.title.toLowerCase().includes(search.title.toLowerCase()))
    console.log(searchdata);
  return (
    <>
        <div className='py-5' style={{minHeight:"50vh"}}>
            <h1 className='text-center text-dark fw-bold' style={{fontSize:"36px"}}>Our <span className='text-danger'>Courses</span></h1>
            <p className='text-center mt-3 mb-3 px-3 ' style={{fontSize:"18px" ,color:'#3f444a'}}>Admissions are open for new batches of Web Development, Amazon, Android/iOS Development, Graphics Designing, Digital Marketing, Networking, Shorthand, MS Office, IELTS, Spoken English and other programs.</p>
            <div className='container p-2'>
              <div className="row g-5 row-cols-1 row-cols-lg-2 mb-5">
                {
                searchdata.map(ele=>{
        
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
        </div>
        
        <Recite/>
        <Footer/>
    </>
  )
}

export default SearchCourse