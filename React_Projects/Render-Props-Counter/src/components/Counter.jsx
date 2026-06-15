//! Step 1: Create Logic Component
import React, { useState } from 'react'

const Counter = ({render}) => {
  let [count, setCount] = useState(0);

  // return (
  //   <>
    
  //   </>
  // )
  return  render(count, ()=> setCount(count+1));
};

export default Counter

/*
!🔹 Alternative (Using children instead of render)

const Counter = ({ children }) => {
  const [count, setCount] = useState(0);

  return children(count, () => setCount(count + 1));
};

!!!! for using children, simply replace render with children and rest same.
*/