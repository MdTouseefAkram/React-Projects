// 3️⃣ DisplayUser.jsx (Access Context Data using useContext() hook)

import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext';

const DisplayUser = () => {

const {user} = useContext(UserContext);
  return (
    <div>Current User: {user} </div>
  )
}

export default DisplayUser;