import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import OrderSummary from './components/OrderSummary';
import About from './components/About';
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='order-summary' element={<OrderSummary/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

/*
! Function useNavigate
useNavigate(): NavigateFunction
! Returns a function that lets you navigate programmatically in the browser in response to user interactions or effects.
! It's often better to use redirect in actions and loaders than this hook.
Returns NavigateFunction
*/