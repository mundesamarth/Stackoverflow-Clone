import React from 'react'
import './LeftSidebar.css'
import Globe from '../../assessts/Globe2.svg'
import {NavLink } from 'react-router-dom'
 
function LeftSidebar() {
  return (
    <div className='left-sidebar'>
     <nav className='side-nav'>
       <NavLink to = "/" className="side-nav-link" activeClass="active">
          <p>Home</p>
       </NavLink>
        <div className="side-nav-div">
          <div><p>PUBLIC</p></div>
          <NavLink to="/Questions" className="side-nav-link" activeClass="active">
            <img src={Globe} alt = "Globe "/>
            <p style={{paddingLeft:"10px"}}>Question</p>
          </NavLink>
           <NavLink to="/Tags" className="side-nav-link" activeClass="active">
            <p style={{paddingLeft:"30px"}}>Tags</p>
          </NavLink>
           <NavLink to="/Users" className="side-nav-link" activeClass="active">
            <p style={{paddingLeft:"30px"}}>Users</p>
          </NavLink>
        </div>
     </nav>
    </div>
  )
}

export default LeftSidebar
