import React from "react";
import Header from "./components/Header/Header";
import 'bootstrap/dist/css/bootstrap.css';
import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Pages/Homepage";
import AllCourses from "./components/Pages/AllCourses";
import Aboutus from "./components/Pages/Aboutus";
import Blog from "./components/Pages/Blog";
import Videos from "./components/Pages/Videos";
import Coursedetail from "./components/Pages/Coursedetail";
import SearchCourse from "./components/Pages/SearchCourse";
import Campuses from "./components/Pages/Campuses";
const App = () => {
  return (
    <div style={{overflowX:'hidden'}}>
        <Header/>
        <Routes>
          <Route path="/"  element={<Homepage/>}/>
          <Route path="/courses"  element={<AllCourses/>}/>
          <Route path="/aboutus"  element={<Aboutus/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/videos" element={<Videos/>}/>
          <Route path="/course/:id" element={<Coursedetail/>}/>
          <Route path="/search/:title" element={<SearchCourse/>}/>
          <Route path="/campus" element={<Campuses/>}/>

        </Routes>
    </div>
  );
};

export default App;
