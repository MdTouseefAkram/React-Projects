import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import UserList from './components/UserList'
import UserProfile from './components/UserProfile'
import Users from './components/Users'

const App = () => {
  return (
     <>
        <BrowserRouter>
            <Routes>
                {/* Parent route - users (Note- In <Users/> component , we should write Outlet here only.) */}
                <Route path='users' element={<Users/>}>
                    {/* Child routes (Note- child components does not requierd to write Outlet)*/}
                    <Route path='profile' element = {<UserProfile/>}/>
                    <Route path='list' element={<UserList/>}/>

                </Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App

//! <Outlet /> is a placeholder where the child route’s component will render.
//! <Outlet /> renders the matched child route inside the parent route’s UI. 
// <Outlet /> is a placeholder component in React Router DOM that tells React where to render child (nested) routes inside a parent component.

/*
src/
│── components/
│    ├── Users.jsx        ← Parent
│    ├── UserList.jsx     ← Child
│    ├── UserProfile.jsx  ← Child
│
│── App.jsx

*/
/*
! <Outlet /> is written inside the parent component, not the child
! Write <Outlet /> only in a component that has child (nested) routes.
If a component does NOT have nested routes → DO NOT write <Outlet />.
*/



/*
! Why path="users" (without /) is correct here
<Route path="users" element={<Users />}>
  <Route path="profile" element={<UserProfile />} />
  <Route path="list" element={<UserList />} />
</Route>

! 🔹 In React Router v6:
! Parent routes are written without /

Child routes are always relative to the parent
! React Router automatically builds the full path

! Final URLs created:
| Route     | Final URL        |
| --------- | ---------------- |
| `users`   | `/users`         |
| `profile` | `/users/profile` |
| `list`    | `/users/list`    |
So writing /users manually is not needed here.
❌ When /users would be WRONG
<Route path="/users" element={<Users />}>  ❌
! This makes it an absolute path, and nested routing will not work properly.

! Key Rule to Remember (Interview Tip)
✅ Nested Routes → NO /
❌ Absolute Routes → /

*/

/* Where you SHOULD write / in route?
! write / only in TOP-LEVEL routes or when you want an ABSOLUTE path.
Let’s make it crystal clear 👇 (React Router v6)

! ✅ 1️⃣ 
! 🔹 Top-level routes (root level)
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/login" element={<Login />} />
  <Route path="/users" element={<Users />} />
</Routes>

➡ These are not inside another <Route>, so / is correct.

🔹 When you want an ABSOLUTE path
<Link to="/users">Users</Link>
➡ No matter where you are, this always goes to /users.

! 🔹 Direct routing without nesting
! <Route path="/users/:id" element={<UserDetails />} />

!❌ 2️⃣ Where you should NOT write /

!🔹 Nested (child) routes
<Route path="users" element={<Users />}>
  <Route path="profile" element={<UserProfile />} />
  <Route path="list" element={<UserList />} />
</Route>

! ❌ Writing this is WRONG:
<Route path="/profile" />   // ❌

! ✅ 3️⃣ Inside Parent Component (Outlet case)
Users.jsx
<Link to="profile">Profile</Link>   // ✅ relative
<Link to="list">List</Link>         // ✅ relative

! ❌ Don’t do this inside nested UI:
<Link to="/profile">Profile</Link>  // ❌ wrong URL

! 🧠 Golden Rule (Remember this always)
| Situation           | Use `/` |
| ------------------- | ------- |
| Top-level route     | ✅ Yes   |
| Nested child route  | ❌ No    |
| Absolute navigation | ✅ Yes   |
| Relative navigation | ❌ No    |

! One-Line Interview Answer
! “Use / for absolute routes and top-level paths.
Avoid / in nested routes because React Router automatically appends the parent path.”
*/

/*
! ✅ What is Absolute Path (React Router – very simple)
An absolute path is a path that starts with / and is resolved from the root URL, not from the current route.

!🧠 Easy Definition (Interview-ready)
! Absolute path always starts from / (root) and does not depend on the current route.

!✅ Examples of Absolute Path
🔹 Route definition
<Route path="/users" element={<Users />} />
<Route path="/login" element={<Login />} />


!➡ These paths are absolute because they start from /.

🔹 Navigation using Link
<Link to="/users">Users</Link>

➡ No matter where you are, this always goes to:
http://localhost:3000/users

!🔹 useNavigate
navigate("/users");
!➡ Always navigates from the root.

! ❌ Not Absolute (Relative Path)
<Link to="profile">Profile</Link>

If current URL is:
/users

! ➡ Final URL becomes:
/users/profile
This is relative path, not absolute.

! 🔍 Absolute vs Relative (Side-by-Side)
| Type          | Starts With | Depends on current route? | Example          |
| ------------- | ----------- | ------------------------- | ---------------- |
| Absolute Path | `/`         | ❌ No                      | `/users/profile` |
| Relative Path | no `/`      | ✅ Yes                     | `profile`        |


!! Nested Routes Example (Important)
<Route path="users" element={<Users />}>
  <Route path="profile" element={<Profile />} />
</Route>

! Final URL:
/users/profile

! Here:
users → relative to root
profile → relative to users

!❗ Common Mistake
<Route path="/profile" element={<Profile />} /> // ❌
! Inside nested routes, this breaks nesting because /profile ignores parent path.

! 🎯 One-Line Memory Trick
! Starts with / → Absolute → From root
! No / → Relative → From current route
*/

/*
!🔹 Real-Life Analogy 🏠
Parent route = House
Child route = Rooms
<Outlet /> = Empty space where rooms appear
*/
