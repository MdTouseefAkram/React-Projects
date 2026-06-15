import React from 'react'

const Greeting = ({name="Guest",age=25}) => { //! default parameter or defualt props when parent not send props value then these default values is considered.
  return (
    <>
        <h3>Hello, {name}</h3>
        <p>Your age is {age}</p>
    </>
  )
}

export default Greeting