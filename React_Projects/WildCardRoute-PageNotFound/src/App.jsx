import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Users from './components/Users'
import UserProfile from './components/UserProfile'
import NoMatch from './components/NoMatch'

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
       
        <Route path='users' element={<Users/>}>  {/* Parent route */}
          <Route path='profile' element={<UserProfile/>}/> {/* child or nested route */}

          {/* 404 Not Found route - (wildcard route for child routes) (not best practice  go for global wildcard route.) */}
          {/*<Route path='*' element={<NoMatch/>}/>  Unmatched child routes. (note- wildcard route can be used in nested routes as well as top routes) */}
        </Route>

          {/* Global 404 - It handles all unmatched routes globally, not depend on parent users, if user type any wrong routes then page not found show, wildcard route hits. */}
          <Route path="*" element={<NoMatch />} />
          {/*(Best Parctice, it handles both global unmatch routes which is wrong from start and it can aslo handlo nested unmatch route, means parent route is coreect but child route is unmnatch.)*/}
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App



/*
! A * (asterisk) wildcard route is used to match all paths that don’t match any of the defined routes. It’s typically used to create a “404 Not Found” page.

!💡 Key Points:
! * always goes last in your <Routes> because React Router checks routes in order.
! Useful for error handling and redirecting unknown routes.
*/

/*  -----------------------------------------
! is wildcard route always use in nested routes ?
? No, a wildcard (*) route is not always used in nested routes. It can be used in both top-level routes and nested routes, depending on where you want to catch unmatched URLs. Let me clarify:

!! 1. Top-level wildcard route
Used when you want to catch any URL that doesn’t match any top-level route.

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="*" element={<NotFound />} /> {/* Top-level wildcard
</Routes>

Example:
/ → Home
/contact → NotFound (because no /contact route exists)

!! 2. Nested wildcard route
Used when you want to catch unmatched child routes inside a parent route.

<Route path="dashboard" element={<Dashboard />}>
  <Route path="stats" element={<Stats />} />
!  <Route path="*" element={<NotFound />} /> {/* Nested wildcard
</Route>

Example:
/dashboard/stats → Stats
/dashboard/anything-else → NotFound (nested 404)

! ✅ Key points
Not mandatory in nested routes; only needed if you want to handle unmatched nested paths.
! Wildcard can exist at both levels: top-level handles global unmatched paths, nested handles unmatched child paths.
! Always put the * at the end of the routes in that level.
*/

/*
Nested * is relative to its parent route.
! Global * should be at the top level of <Routes> to catch all unmatched URLs.
Don’t mix relative and absolute wildcard expectations.
--------------------------------------------------------------------------
? which is best practice , defining wildcard route globally or in nesting ?
. Global * (top-level wildcard)
<Routes>
  <Route path="users" element={<Users />} />
  <Route path="*" element={<NoMatch />} />
</Routes>

! When to use:
! You want one global 404 page for the entire app.
Simpler and cleaner for most apps.
! Any unmatched route anywhere in the app goes here.

! Pros:
Easy to manage.
Ensures no URL ever goes unhandled.
Keeps your routing simple.

! Cons:
! Cannot differentiate between invalid nested routes vs completely unknown routes (everything goes to the same 404). (we can write not found compoenent separately for nested route.)

!! 2. Nested * (inside parent route)
<Route path="users" element={<Users />}>
  <Route path="profile" element={<UserProfile />} />
  <Route path="*" element={<NoMatch />} /> {/* nested 404 
</Route>

! When to use:
! You want a nested 404 page for a specific section of your app.
Example: /users/* shows "User Section Not Found" instead of the global 404.

! Pros:
! Gives more context to the user (section-specific 404).
! Can render part of the parent layout (e.g., sidebar, header) along with the 404.

! Cons:
Only handles URLs under that parent route.
You may still need a global 404 for other unmatched paths.

!!! ✅ Best Practice ----------------------

! Use both:---
<Routes>
  <Route path="users" element={<Users />}>
    <Route path="profile" element={<UserProfile />} />
!   <Route path="*" element={<NoMatch section="users" />} /> {/* nested 404 
  </Route>

!  <Route path="*" element={<NoMatch />} /> // global 404
</Routes>

! Nested * → handles section-specific 404
! Global * → handles everything else
! This gives the best user experience and keeps your routing structured
*/