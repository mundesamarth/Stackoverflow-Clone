import React from "react";
import { Routes,Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Auth from "./pages/Auth/Auth";
import Question from './pages/Questions/Question'
import AskQuestion from "./pages/AskQuestion/AskQuestion";
const AllRoutes = () => {
  return (

     <Routes>
         <Route path="/" element={<Home />}/>
         <Route path="/Auth" element={<Auth />}/>
         <Route path="/Questions" element={<Question />}/>
         <Route path="/AskQuestion" element={<AskQuestion />}/>
     </Routes>

  )
}


export default AllRoutes;