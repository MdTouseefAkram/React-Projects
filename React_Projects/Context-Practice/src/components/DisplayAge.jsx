import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const DisplayAge = () => {
    //Acces the data with useContext with passing which context varaible name is created with use createContext(), not the provider. 
    let {age} = useContext(UserContext);
  return (
    <div>DisplayAge : {age}</div>
  )
}

export default DisplayAge