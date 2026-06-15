import React from 'react'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
    <Navbar/>

     {[...Array(50)].map((_, index) => (
        <p key={index}>
          Content Line {index + 1}
        </p>
      ))}
    </>
  )
}

export default App