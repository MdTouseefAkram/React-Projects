// 3️⃣ DisplayUser.jsx (Access Context Data using useContext() hook)

import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext';

const DisplayUser = () => {

const {user} = useContext(UserContext); //! useContext() is a React Hook used to read (consume) data from a Context created by createContext(). useContext() is a React Hook that allows components to access shared data from a Context Provider without passing props manually.
  return (
    <div>Current User: {user} </div>
  )
}

export default DisplayUser;

/*
! Context API has 3 main parts:

Provider → supplies the data. (The Provider supplies data to all components inside its tree (its children).)
Context value → the data itself. (Context value = user)
Consumer (useContext) → reads the data
*/