import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import NavBar from './Navbar'


const Shared = () => {
  return (
    <div>
    <NavBar />
      <Outlet></Outlet>
      <Footer />
    </div>
  )
}

export default Shared