import React, { createContext } from 'react'
//! Step 1
// Create Context
export let UserContext = createContext();

//create provider and receice chidren and wrap children in context.provider
const UserProvider = ({children}) => {
    let userName = "Md Touseef Akram";
    let age = 23;

  return (
    <>
    <UserContext.Provider value={{userName,age}}>
        {children}
    </UserContext.Provider>
    </>
  )
}

export default UserProvider