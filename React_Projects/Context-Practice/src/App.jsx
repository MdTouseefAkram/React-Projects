import React from 'react'
import UserProvider from './context/UserContext'
import DisplayUser from './components/DisplayUser'
import DisplayAge from './components/DisplayAge'

//! Step 2
//wrap the compennents in Provider not context.
const App = () => {
  return (
    <>
    <UserProvider>
      <DisplayUser/>
      <DisplayAge/>
    </UserProvider>
    </>
  )
}

export default App