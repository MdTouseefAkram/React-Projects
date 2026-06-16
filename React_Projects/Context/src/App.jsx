// 2️⃣ App.jsx (Wrap Components in Provider)
import React from 'react'
import DisplayUser from './components/DisplayUser'
import UpdateUser from './components/UpdateUser'
import { UserProvider } from './context/UserContext'

const App = () => {
  //! steps to implement Context.
  // 1️⃣ UserContext Setup
  //create context
  //create Provider and pass children prop and wrap the prop in context.Provider.
  // 2️⃣ App.jsx (Wrap Components in Provider)
  // 3️⃣ DisplayUser.jsx (Access Context Data using useContext() hook)
  

  return (
    <>
    {/* DisplayUser and UpdateUser are wrapped inside the Context Provider and can access the shared context data. */}
      <UserProvider>
        <div>
          <h1>Welcome</h1>
          <DisplayUser/>
          <UpdateUser/>
        </div>
      </UserProvider>
    
    </>
  )
}

export default App
 
//! Context API is a React feature that allows global state sharing across components without prop drilling using createContext, Provider, and useContext.