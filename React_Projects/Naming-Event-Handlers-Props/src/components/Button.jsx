import React from 'react'

const Button = ({onSmash, children}) => {
  return (
    <>
    <button onClick={onSmash}>{children}</button> 
    {/* children props accepts and pass button name mentioned in Parent component. All button name and handler comes from parent by passing it and recive here and used. becoz in App.js <Button/> is component. so we pass data like button name within <button/> component from parent like Upload Image button, this text comes with children props and render in this (Button.jsx)  button with name inside , that is Image upload.
    //! From App.jsx we recieve button name in children and handler function for invoking in onSmash.
    */}
    </>
  )
}

export default Button