import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const DisplayAge = () => {
    //Acces the data with useContext with passing which context varaible name is created with use createContext(), not the provider. 
    let {age} = useContext(UserContext); //! useContext() is a React Hook used to read (consume) data from a Context created by createContext(). useContext() is a React Hook that allows components to access shared data from a Context Provider without passing props manually.
  return (
    <div>DisplayAge : {age}</div>
  )
}

export default DisplayAge

/*
! Context API has 3 main parts:

Provider → supplies the data. (The Provider supplies data to all components inside its tree (its children).)
Context value → the data itself. (Context value = age)
Consumer (useContext) → reads the data
*/