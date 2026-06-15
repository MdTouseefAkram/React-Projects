import React from 'react'
import { Outlet } from 'react-router-dom'

const Users = () => {
  return (
    <>
    <div>Users</div>
    <Outlet/>
    </>
  )
}

export default Users

//! <Outlet /> is written inside the parent component, not the child.

/*
! Why?
<Outlet /> is a placeholder where the child route’s component will render.

! So:
Parent component → decides where child should appear
Child component → just renders its own UI

! Simple Rule (Remember this 🔒)
If a route has nested (child) routes → its component must contain <Outlet />.
*/