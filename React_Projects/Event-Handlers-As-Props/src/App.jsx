import React from 'react'
import Newsletter from './components/Newsletter'
import Contact from './components/Contact'

const App = () => {
  return (
    <>
    <Contact/>
    <Newsletter/>
    </>
  )
}

export default App

//! Another IMP topic -Event Delegation, look at last in <ActionButton/> component theroy part.
//! Event Delegation is a JavaScript technique in which a single event listener is attached to a parent element to handle events from its child elements. It works using event bubbling and helps improve performance by reducing the number of event listeners.