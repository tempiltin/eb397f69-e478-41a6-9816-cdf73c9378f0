import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NavbarTop from '../Components/Navbar/NavbarTop'
import Home from '../Pages/Home'
import SedbarLeft from "../Components/Navbar/sedbarLeft"

const Routers = () => {
  return <>
      <NavbarTop />
      <SedbarLeft />
  <Routes>

    <Route path='/' element={<Home />}/>
  </Routes>
  
  
  </>
}

export default Routers