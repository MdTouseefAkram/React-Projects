import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Users = () => {
  return (
    <>
    <h2>Users Page</h2>

    <nav>
        {/* Relative links - Link without / → Relative link. (No - / ,[/ start me nahi hoga])*/}
        <Link to="list">User List</Link> <br />
        <Link to="profile">User Profile</Link>

        {/* Absolute link - Link with / → Absolute link. (Yes - / , [/ start me hoga])*/}
        {/* <Link to="/users/profile">User Profile</Link> - ABSOLUTE Link (http://localhost:5173/users/profile)
        if we write like this <Link to="/profile">User Profile</Link> then link breaks, it does not show proper nesting. it shows like (http://localhost:5173/profile)
        */}
    </nav>
    
    <Outlet/>
    </>
  )
}

export default Users

/*
! It is RELATIVE ✅
! Why?
? <Link to="profile/user">User Profile</Link>
! It does not start with /
So React Router treats it as a relative path

! Rule to remember 🧠
! If to starts without /, it is relative.
! If it starts with /, it is absolute.
*/