import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const UpdateUser = () => {
    let {setUser} = useContext(UserContext);
    function handleChangeUser(){
        setUser('Akram');
    }

  return (
    <>
    <button onClick={handleChangeUser}>Change User Name</button>
    
    </>
  )
}

export default UpdateUser