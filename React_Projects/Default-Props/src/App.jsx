import React from 'react'
import Greeting from './components/Greeting'

const App = () => {
  return (
    <>
    <h1>Default Props Example</h1>
      <Greeting name="Touseef" age={22}/> {/* Passed props */}
      <Greeting/>   {/* Will use default props */}
    </>
  )
}

export default App

/*
! The defaultProps is a feature in React that allows you to specify default values for props. If a parent component does not pass a 
value for a particular prop, the default value set in defaultProps will be used instead..

! What is defaultProps?
In React, defaultProps is a static property that can be assigned to a component to specify default values for props. 
These default values are used when the parent component does not pass a value for a particular prop. This helps ensure that 
your components have sensible defaults, preventing issues when a prop is missing.

! What are Default Props?
Default props are default values for a component’s props in React. They are used when the parent component does not pass a value 
for a particular prop. This ensures that your component always has some value to work with.

! Why use Default Props?
To prevent undefined values in your component.
To make components more robust and reusable.
To provide a fallback value when a prop is optional.
*/