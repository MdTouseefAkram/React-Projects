import React from 'react'
import useFetch from '../hooks/useFetch'

const Users = () => {
    let users = useFetch("https://jsonplaceholder.typicode.com/users");

  return (
    <>
    <div>
        <h2>Users</h2>
        {users.map((user)=>(
            <p key={user.id}>{user.name}</p>
        ))}
    </div>
    </>
  )
}

export default Users