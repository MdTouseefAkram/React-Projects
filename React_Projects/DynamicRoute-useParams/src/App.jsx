import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Users from './components/Users'
import UserDetails from './components/UserDetails'
import Admin from './components/Admin'

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
         {/*  Dynamic Route - we can write this way directly also. */}
        {/* <Route path="/users/:id" element={<UserDetails />} /> */}

         {/*  Dynamic Route - or we can wrap our the dynamic route. note - when type on URL users then User component render simply but users type users/anything then UsersDetails component get renderd because it mapped with dynamic route with dynamic parameter :userId*/}
        <Route path='users' element={<Users/>}>
          <Route path=':userId' element={<UserDetails/>}/>   {/* :userId → dynamic parameter */}
          <Route path='admin' element={<Admin/>}/>
          {/* Here - when user type users/admin on URL then Admin component get renderd because this admin route is specily mapped with Admin component,
           it does not render UserDetails component , pepople might thought users/admin is goes to users/:userId , here :userId = admin, No because
          here we specily define users.adim for Admin component, react router check firts specily defined routes then goes to dynamic routes which accept 
          any string. Suppose , If admin is not here then UserDetails get render becuse users/:userId = users/admin, this happen on that time but currently 
          here it not, here Admin component rendered.*/}   
          </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

/*
! 1️⃣ What is Dynamic Routing? (Simple Words)
? Dynamic routing means:
The URL contains a variable part (dynamic value) instead of a fixed path.

❌ Static Route
/product/1
/product/2
/product/3

You would need many routes ❌

! Dynamic Route
/product/:id

Here:
! :id is dynamic
It can be 1, 2, 99, abc etc.
👉 One route handles many pages

! 2️⃣ What is useParams()?
? useParams() is a React Router hook that:
? Reads dynamic values from the URL

! Example URL:
/product/5
const { id } = useParams();
!👉 id = "5"

! 3️⃣ Real-World Example (Best for Understanding)
Scenario:
? You have an E-commerce app
? Product List page
? Product Details page
? Each product has unique ID
*/

/*
! Interview-Ready Definition ✅

! Dynamic Routing
Dynamic routing allows us to create routes with variable parameters so that a single route can handle multiple URLs.
Here, Dynamic Route example
/product/:id
:id is dynamic

! useParams
useParams() is a hook from React Router used to access dynamic parameters from the URL.

!🔥 Most Common Interview Question
! Q: Why is useParams() needed?
Answer:
To fetch or display data based on dynamic values present in the URL, such as product ID, user ID, blog slug, etc.
*/

/*
! 🧠 How React Router Thinks (Important)
In nested routes, child paths are relative to the parent path.

Parent
path="users"

Child
path=":userId"

➡️ Final URL becomes:
/users/:userId

! So React Router automatically joins them:
! users + :userId = /users/:userId
! That’s why you should NOT write /users/:userId again inside the child.

! ❌ What You Should NOT Do
<Route path="users" element={<Users />}>
  ❌ <Route path="/users/:userId" element={<UserDetails />} />
</Route>

! Why this is wrong:
Child routes must be relative
Absolute paths (/users/...) break nesting
! <Outlet /> won’t work correctly

! Final Rule (Remember This)
| Scenario           | What to write    |
| ------------------ | ---------------- |
| Nested child route | `:userId`        |
| NOT nested         | `/users/:userId` |
| Static child route | `admin`          |
| Dynamic route      | `:paramName`     |

write only :userId
*/