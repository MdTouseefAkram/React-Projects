import React from 'react'
import {Outlet} from 'react-router-dom'

//! (Parent Component → Outlet HERE ✅)
const Users = () => {
  return (
    <>
    <div>Users</div>
    <Outlet/>
    </>
  )
}

export default Users

// This is the ONLY place you write <Outlet />
{/* <Outlet /> is written inside the parent component, not the child */}
// Outlet is written in the parent component to render its nested child routes.

/*
Why?
! <Outlet /> is a placeholder where the child route’s component will render.

So:
Parent component → decides where child should appear
Child component → just renders its own UI
*/

/*
! 🔹 What is <Outlet />?
<Outlet /> is a placeholder component provided by react-router-dom.
! 👉 It tells React Router where to render the child (nested) route inside a parent route.

! Simple words:
“Render the matched child route here”

! 🔹 Why do we need <Outlet />?
? Without <Outlet />, nested routes will never appear, even if the URL is correct.

! 🔹 Where do we use <Outlet />?
✅ We use <Outlet /> ONLY in the Parent Component
❌ We do NOT write <Outlet /> in child components

! 🔹 Where do we write <Outlet />?
📌 Inside the parent route component JSX

! 🔹 How Routing Works (URL → Component)
| URL          | Component Rendered      |
| ------------ | ----------------------- |
| `/users`     | `Users`    |
| `/users/list` | `Users` + `UserList` |
| `/users/profile` | `Users` + `UserProfile` |

? 👉 Users always loads
? 👉 Child replaces <Outlet />

! 🔹 Common Mistakes (Very Important ⚠️)
! ❌ Writing <Outlet /> in child component
❌ Forgetting <Outlet /> in parent
❌ Expecting child route to render automatically

!🔹 One-Line Interview Answer 🎯
! Outlet is a placeholder component in React Router used in parent components to render nested child routes dynamically.
*/