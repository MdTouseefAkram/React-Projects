import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'

const App = () => {
  return (
    <>
   
      <BrowserRouter>
      {/* Always write <Navbar/> inside browserRouter because , navbar has routing like Link component which only works withing browserRouter. */}
       <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          {/* if i remove '/' i.e about then also works fine, but follow best practice.  */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

/*

Syntax to pass attributes:
<Link to = "/home" className="home" target="_blank">
     Home
</Link>

! The link component is used for Routing from one page to another page without loading the page itself.
! The Link component in React Router DOM is used to enable client-side navigation between different routes in a single-page application (SPA) without triggering a full page reload. 
! It works like a traditional HTML anchor (<a>) tag but manages the navigation internally within React's environment
*/

/*
https://chatgpt.com/c/694790fa-d818-8324-a5af-bac623a8ae47 best docs GPT.
*/