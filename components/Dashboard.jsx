import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

function Dashboard() {
  return (
    <>
       <div className="maincan" style={{marginTop:"100px"}}>
          <Header/>
          <Outlet/>
          <Footer/>
       </div>
      
    </>
  )
}

export default Dashboard
