import React from 'react'
import UserProvider from './context/UserContext'
import DisplayUser from './components/DisplayUser'
import DisplayAge from './components/DisplayAge'

//! Step 2
//wrap the compennents in Provider not context.
const App = () => {
  return (
    <>
    {/* DisplayUser and DisplayAge are wrapped inside the Context Provider and can access the shared context data. */}
    <UserProvider>
      <DisplayUser/>
      <DisplayAge/>
    </UserProvider>
    </>
  )
}

export default App

//! Context API is a React feature that allows global state sharing across components without prop drilling using createContext, Provider, and useContext.