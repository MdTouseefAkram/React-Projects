import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Services from './components/Services'

const App = () => {
  return (

    <BrowserRouter>
       <Navbar/> 
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/services" element={<Services/>}/>
  
        </Routes> 
    </BrowserRouter>

    
  )
}

export default App