import React, { useContext } from 'react'
import { UserContext } from './Context';


const Welcome = () => {
    let {user} = useContext(UserContext);
  return (
    <>
    <h1>Welcome User</h1>
    <p>Name: {user.name} : Id :{user.id}</p>
    </>
  )
}

export default Welcome