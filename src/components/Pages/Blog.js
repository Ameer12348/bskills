import React from 'react'
import Recite from '../Footer/Recite'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

const Blog = () => {
  return (
    <>
      <Helmet>
      <title>Bskills - Blogs</title>
        <meta name='description' content='This blog is about freelancing' />
        <meta name='keywords' content='bskills blog, blog of bskills , blog , what is freelancing , freelancing' />
        <meta name="robots" content="index,follow" />
        

      </Helmet>
    
        <div className='py-5 container' style={{minHeight:"50vh"}}>
            <h1 className='text-center text-dark fw-bold' style={{fontSize:"36px"}}>Blog <span className='text-danger'>List</span></h1>
            <p className='text-center mt-3 mb-3 px-3 mb-5' style={{fontSize:"18px" ,color:'#3f444a'}}>Fusce id sem at ligula laoreet hendrerit venenatis sed purus. Ut pellentesque maximus lacus, nec pharetra augue.</p>
            <div className="blog mt-5 px-3">
                <h1 className='mb-3' style={{fontSize:"36px",fontWeight:"700"}}>What is Freelancing?</h1>
                <h4 className='mb-4' style={{fontSize:"20px",fontWeight:"700"}}>Freelancing</h4>
                <p style={{color:"#636363"}}>Freelancing is a work arrangement in which individuals, often referred to as freelancers or independent contractors, offer their services to clients or businesses on a project-by-project basis. Freelancers typically work independently and are not bound by long-term employment contracts. They have the flexibility to choose their clients, set their own rates, and determine their work schedules. Freelancers can provide a wide range of services, such as writing, graphic design, web development, digital marketing, consulting, and more. They may work remotely or on-site, depending on the nature of the project and client preferences. Freelancing offers both professionals and businesses advantages, including flexibility, access to specialized talent, and cost-effectiveness. Popular platforms like Upwork, Fiverr, and Freelancer.com facilitate freelancing by connecting freelancers with clients and providing tools for project management, payment processing, and communication. Freelancing has become increasingly popular in recent years, allowing individuals to pursue diverse career paths and businesses to access expertise on a project-specific basis.</p>
                <div className="author">
                    <p className='mb-2 mt-5' style={{color:"#636363"}}>Written by:</p>
                    <h4  className='fw-bold' style={{fontSize:"20px"}}>Mhuammad Bilal</h4>
                    <p style={{color:"#636363",fontSize:"14px"}}> Monday, September 25, 2023 </p>
                    <Link className='text-decoration-none text-dark border border-dark border-1 rounded px-5 py-1 '>Read More</Link>
                </div>
            </div>
        </div>
        <Recite/>
        <Footer/>

    </>
  )
}

export default Blog