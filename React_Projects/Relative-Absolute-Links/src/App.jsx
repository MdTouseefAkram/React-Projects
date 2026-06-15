import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Users from './components/Users'
import UserProfile from './components/UserProfile'
import UserList from './components/UserList'

//! Golden Rule (Remember This 🔥)
// If your route is nested → use RELATIVE paths. Not starts with / .
// If your navigation is global → use ABSOLUTE paths . Always starts with / .
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path='users' element={<Users/>}></Route> It is a RELATIVE ROUTE PATH.becouase It does NOT start with / . It is usually written inside <Routes>. In React Router v6, route paths are relative by default. React Router automatically treats it as: /users .
          URL: /users
          Component rendered: Users
          */}

          <Route path='/users' element={<Users/>}>  {/* ABSOLUTE Path - This is ABSOLUTE because it starts with / . It always means: /users.*/}

            {/* RELATIVE Paths - They depend on parent /users.Final paths become: /users/profile and /users/list. */}
            <Route path='profile' element={<UserProfile/>}/>
            <Route path='list' element={<UserList/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

/*
! Relative Link (React Router DOM – v6)
! A relative link is a <Link> whose to path is resolved relative to the current route, not from / (root).

! Rule to Remember (🔥)
Inside nested routes → use relative links
Outside / navbar → absolute links
*/


/*
!!! 1. Absolute Links
✅ Definition
! An absolute link always starts from the root (/) of the application.
! 👉 It does NOT depend on the current route.

🔹 Example
<Link to="/users/profile">Profile</Link>

No matter where you are, this will always go to:
http://localhost:3000/users/profile

!!!🔹 Absolute Route Path
<Route path="/users/profile" element={<UserProfile />} />

! ✅ When to use
Top-level navigation (Navbar, Sidebar)
When you want fixed & predictable routing
Redirecting from anywhere in the app

! 2. Relative Links
✅ Definition
! A relative link depends on the current URL.
! 👉 It does NOT start with /

🔹 Example
Assume current URL:
/users
<Link to="profile">Profile</Link>

➡️ Final URL becomes:
/users/profile

!!!🔹 Relative Route Path (Nested Routes)
<Route path="profile" element={<UserProfile />} />

! ✅ When to use
? Inside nested routes
Cleaner and shorter code
Recommended in React Router v6+

! 5. Absolute vs Relative – Quick Comparison
| Feature                        | Absolute Link | Relative Link |
| ------------------------------ | ------------- | ------------- |
?| Starts with `/`                | ✅ Yes         | ❌ No          |
?| Depends on current route       | ❌ No          | ✅ Yes         |
| Used in Navbar                 | ✅ Yes         | ❌ Rare        |
| Used in nested routes          | ❌ Verbose     | ✅ Best        |
| React Router v6 recommendation | ❌             | ✅             |

! 6. Golden Rule (Remember This 🔥)
! If your route is nested → use RELATIVE paths
! If your navigation is global → use ABSOLUTE paths
*/

/*
!! Important distinction (INTERVIEW POINT 🔥)
| Code                      | What it is              | Absolute / Relative |
| ------------------------- | ----------------------- | ------------------- |
?| `<Route path="users" />`  | Route definition        | Relative path     |
?| `<Route path="/users" />` | Route definition        | Absolute path     |
| `<Link to="users" />`     | Link (navigation)       | Relative link     |
| `<Link to="/users" />`    | Link (navigation)       | Absolute link     |
| `navigate("users")`       | Programmatic navigation | Relative          |
| `navigate("/users")`      | Programmatic navigation | Absolute          |

! Key takeaway (remember this sentence)
? Route path defines WHERE a component renders.
? Link to defines HOW you navigate.

So:
❌ <Route> is not a link
! ✅ path="users" is a relative route path, resolved to /users
*/

/* ------------------------------------------
! ✅ Short, correct answer (React Router v6+)
! At top level, the recommended path is:
<Route path="users" element={<Users />} />


!! ✔ Without /
! Why users is recommended (not /users) 🔥
In React Router v6+:
! Routes are relative by default
Cleaner & more consistent with nested routing
Easier to refactor later

<Routes>
!  <Route path="users" element={<Users />} />
</Routes>

! React Router automatically treats it as:
/users

Is /users wrong?
❌ No, it is NOT wrong
<Route path="/users" element={<Users />} />

This still works perfectly.
But 👇
! Comparison (Interview-ready)
| Path style | Works? | Recommended?      | Why                |
| ---------- | ------ | ----------------- | ------------------ |
| `users`    | ✅ Yes  | ⭐ YES             | Relative, v6 style |
| `/users`   | ✅ Yes  | ⚠️ Less preferred | Old v5 habit       |
*/

/*
! It is absolute ✅
! Why?
? <Route path="/users" element={<Users />} />

! The path starts with /
Any route that starts with / is an absolute path
It matches exactly this URL:
http://localhost:3000/users

Quick rule (remember this for interviews 👇)
| Path format | Type         | Example                 |
| ----------- | ------------ | ----------------------- |
?| `/users`    | **Absolute** | Matches from root `/`   |
?| `users`     | **Relative** | Depends on parent route |

---------------------------------------------------------------------

!!!--- It is ABSOLUTE ✅ (even though it looks relative)-------
Explanation (very important concept)
<Routes>
?  <Route path="users" element={<Users />} />
</Routes>

! The route is defined at the root <Routes> level
So React Router treats "users" as:
! /users

👉 Resulting URL:
http://localhost:3000/users

! Why this confuses many people 🤯
| Situation                           | Path `"users"` means    |
| ----------------------------------- | ----------------------- |
?| **Top-level `<Routes>`**            | `/users` → **Absolute** |
| **Nested inside another `<Route>`** | Relative to parent      |

*/
