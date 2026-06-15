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