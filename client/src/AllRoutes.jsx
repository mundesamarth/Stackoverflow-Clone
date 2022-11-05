import React from "react";
import { Routes,Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Auth from "./pages/Auth/Auth";
import Question from './pages/Questions/Question'
const AllRoutes = () => {
  return (

     <Routes>
         <Route path="/" element={<Home />}/>
         <Route path="/Auth" element={<Auth />}/>
         <Route path="/Questions" element={<Question />}/>
     </Routes>

  )
}


export default AllRoutes;