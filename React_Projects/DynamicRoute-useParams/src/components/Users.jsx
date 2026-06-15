import React from 'react'
import { Outlet } from 'react-router-dom'

const Users = () => {
  return (
    <>
    <div>Users</div> {/* 🔥 REQUIRED for nested routes */}
    <hr />
     {/* 🔥 REQUIRED for nested routes */}
      <Outlet />
    </>
        
  )
}

export default Users

/*
! For nested routes to render, the parent component (Users) MUST have <Outlet />.
*/

/*
! Why Users always renders?
Because Users is the PARENT route.

<Route path="users" element={<Users />}>
  <Route path=":userId" element={<UserDetails />} />
  <Route path="admin" element={<Admin />} />
</Route>

!📌 Rule (VERY IMPORTANT)
Parent route ALWAYS renders first
Child routes render inside <Outlet />

So whenever the URL starts with:
/users

! Users must render, because:
It owns the path /users
Children depend on it

so, user component render always becuase it parent , so it's text written inside return always display on UI.
*/