import React from 'react'
import "./Header.css"
import { Link , NavLink , useNavigate } from 'react-router-dom'

function Header() {

  const navigate = useNavigate()

  return (
    <>
        <div className='can'>
           <div className='can1'>
              <span>My project</span>
           </div>
           <div className='can2'>
               <div><NavLink to="/" className={({ isActive }) => isActive ? "active" : "deactive"}>Home</NavLink></div>
               <div><NavLink to="/about" className={({ isActive }) => isActive ? "active" : "deactive"}>About</NavLink></div>
               <div><NavLink to="/contact" className={({ isActive }) => isActive ? "active" : "deactive"}>Contact</NavLink></div>
           </div>
           <div className='can3'>
               <button onClick={() => navigate(-1)}>Back</button>
               <button onClick={() => navigate(1)}>Forward</button>
           </div>
        </div>
    </>
  )
}

export default Header
