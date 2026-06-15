import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {

  //! Creating a portal - It takes two paarmeter
  //1. Jsx
  //2. dom node where we want to mount.
  return ReactDOM.createPortal (
    <div>React Portal</div>, 
    document.getElementById('portal')
  )
}

export default App

//! Syntax
//? ReactDOM.createPortal(child, container)
// Here, the child (like your modal JSX) is rendered into the container 
// (a DOM node outside your root div, often <div id="modal-root"></div>)