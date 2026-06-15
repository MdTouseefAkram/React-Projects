import React from 'react'

const Greeting = ({name,age}) => {
  return (
    <>
        <h2>Hello, {name}</h2>
        <p>Your age is {age}</p>
    </>
  )
};

// Setting default props 
Greeting.defaultProps={
    name:"Guest",
    age:25,
};

export default Greeting
//! defaultProps is supported for functional components in React up to React 17.
//! defaultProps still works on class components, but it’s deprecated for functional components in React 18+.
//! Use ES6 default parameters { name = "Guest", age = 25 } in functional components instead