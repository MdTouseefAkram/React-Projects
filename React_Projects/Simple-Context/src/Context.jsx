import React, { createContext } from 'react'


export let UserContext = createContext();

const UserProvider = ({children}) => {
    let user = {name:"Md Touseef Akram" , id: 1};

  return (
    <>
    <UserContext.Provider value={{user}}>
        {children}
    </UserContext.Provider>
    </>
  )
}

export default UserProvider;