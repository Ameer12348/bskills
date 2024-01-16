import { courses } from '../data/course'
import { useParams } from 'react-router-dom'
import loginimg from '../images/student-login.jpg'
import Recite from '../Footer/Recite'
import Footer from '../Footer/Footer'
import { Helmet } from 'react-helmet'
const Coursedetail = () => {
    const {id} = useParams()
    const data = courses;
    const course = data.find(cor =>  cor.id === +id);


return (

    <>
        <Helmet>
            <title>Bskills - {course.title} </title>
            <meta name='description' content={course.description} />
            <meta name="robots" content="index,follow" />
        </Helmet>
        <div className="container py-5 " style={{minHeight:'50vh'}}>
            <div className="row">
                <div className="col-md-3">
                    <form className='px-3 py-3 rounded'  style={{backgroundColor:'#03294e',border:'2px dashed white'}}>
                        <h1 className='text-light mb-0' style={{fontSize:'24px'}}>Apply This Course</h1>
                        <p style={{fontSize:'14px',color:'#9c9c9c'}}>Just fill below form for apply.</p>
                        <div className='my-3' style={{width:'100%'}}>
                            <input className='w-100 p-2' style={{outline:"0px"}} type="text" placeholder='Name' />
                        </div>
                        <div className='my-3' style={{width:'100%'}}>
                            <input className='w-100 p-2' style={{outline:"0px"}} type="email" placeholder='Email' />
                        </div>
                        <div className='my-3' style={{width:'100%'}}>
                            <input className='w-100 p-2' style={{outline:"0px"}} type="tel" placeholder='Phone' />
                        </div>
                        <div className='my-3' style={{width:'100%'}}>
                            <select className='w-100 p-2' >
                                <option value="">{course.title}</option>
                            </select>
                        </div>
                        <button className='w-100 border-0 rounded py-2 fw-bold text-light bg-danger'  >APPLY NOW</button>
                    </form>
                </div>
                <div className="col-md-6 py-5" style={{minHeight:'20vh'}}>
                    <h2 className='fw-bold' style={{fontSize:"30px",color:'#203245'}}>{course.title} </h2>
                    <p style={{color:'#636363',fontSize:'14px'}}>{course.outline[0].outlines.join(' - ')} </p>
                    <hr />
                    <h3 className='fw-bold mt-5 mb-4' style={{fontSize:"25px",color:'#203245'}}>Course Description</h3>
                    <p dangerouslySetInnerHTML={{__html:course.description}} style={{fontSize:'15px',color:'#203245',lineHeight:"1.8"}}></p>
                    <div>
                        <h4 className='mt-5 mb-4' style={{fontSize:"20px",color:'#203245'}}>Course Outlines :-</h4>
                        {
                            course.outline.map(ele=>{
                                return(
                                <div className='mb-5'>
                                    <h6 className='mb-2' style={{fontSize:"18px"}}>{ele.title} </h6>
                                    <ul className='ps-2'>
                                        {ele.outlines.map(outline=>{
                                            return(
                                            <li className='list-unstyled mb-2 ps-1' style={{fontSize:"14px"}}>{outline} </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="login">
                        <div className='img-container rounded-top overflow-hidden position-relative p-0' style={{backgroundColor:'black',backgroundClip:'content-box',height:'150px'}}>
                            <img className='img-fluid ' style={{opacity:'0.3',objectFit:'cover'}} src={loginimg} alt="" />
                            <h4 className='fw-bold text-light position-absolute text-nowrap' style={{top:'50%',left:'50%',translate:"-50% -50%",fontSize:'22px'}}>Student Login</h4>
                        </div>
                        <form className='px-3 pt-2 border-1 border border-secondary border-top-0 pb-3 rounded-bottom' style={{width:"100%"}}>
                            <div style={{width:"100%"}} ><input className='p-2 my-2 rounded'  style={{width:"100%",outline:'0px',border:'1px solid gray'}} type="text" placeholder='Username' /></div>
                            <div style={{width:"100%"}} ><input className='p-2 my-2 rounded'  style={{width:"100%",outline:'0px',border:'1px solid gray'}} type="password" placeholder='Password'  /></div>
                            <button className='text-light border-0 bg-danger w-100 rounded py-1 mt-2 fw-bold' style={{letterSpacing:'1px',fontSize:'18px'}}>LOGIN</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <Recite/>
        <Footer/>
    </>
  )
}

export default Coursedetail