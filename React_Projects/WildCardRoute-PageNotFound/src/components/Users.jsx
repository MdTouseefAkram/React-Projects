import React from 'react'
import { Outlet } from 'react-router-dom'

const Users = () => {
  return (
    <>
    <div>Users</div>

    <Outlet/> 
    {/* Only outlet used when nested wildcard route is define, then only use. if wildcard route define globally , then no need of Outlet. only of we want specific nested error page handling (section-specific 404) then nested wildcard is used and then outlet is should write here, in parant component. (outlet is used for proper child routing.) */}
    </>
  )
}

export default Users