import React from 'react'
import Greeting from './components/Greeting'

const App = () => {
  return (
    <>
    <h1>Default Props Example(Modern Approach in Functional Component)</h1>
    <Greeting name="Touseef" age={22}/> {/* Passed props */}
    <Greeting/> {/* Here props is not passed so default props define in Greeting.jsx in function definition will taken as values. */}
    </>
  )
}

export default App