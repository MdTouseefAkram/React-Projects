import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

//! step 3
//consume data using useContext() hook.

const DisplayUser = () => {
    //Acces the data with useContext with passing which context varaible name is created with use createContext(), not the provider. 
    let {userName} = useContext(UserContext); 

  return (
    <div>DisplayUser : {userName}</div>
  )
}

export default DisplayUser