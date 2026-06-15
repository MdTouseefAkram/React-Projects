import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <nav>
            <Link to='/'>Home</Link> {}
            <Link to='/about'>About</Link> 
            {/* if i remove '/' i.e about then also works fine. */}
        </nav>
    </>
  )
}

export default Navbar

/*
🧠 FIRST: Route path vs Link to
They are different concepts.
| Thing            | Defined where        | Purpose               |
| ---------------- | -------------------- | --------------------- |
| **Route `path`** | `<Route path="...">` | Defines URL structure |
| **Link `to`**    | `<Link to="...">`    | Navigates to a URL    |
👉 Rules apply independently to each

!1️⃣ Can I use Absolute LINK with Relative PATH?
✅ YES – Very common & correct
Routes
<Route path="/users" element={<Users />}>
  <Route path="profile" element={<Profile />} />  // relative PATH
</Route>

Link (Absolute)
<Link to="/users/profile">Profile</Link>

✔️ Works perfectly
✔️ Used in Navbars & global menus

📌 Reason:
Route path defines structure
Link just points to a URL

!2️⃣ Can I use Relative LINK with Absolute PATH?
✅ YES – Most recommended pattern
Routes
<Route path="/users" element={<Users />}>
  <Route path="profile" element={<Profile />} />
</Route>

Link (Relative)
<Link to="profile">Profile</Link>

✔️ Best for nested routes
✔️ Cleaner & maintainable

!3️⃣ Can I use Absolute LINK with Absolute PATH?
!✅ YES – Classic approach
<Route path="/login" element={<Login />} />
<Link to="/login">Login</Link>

✔️ Best for top-level navigation

!4️⃣ Can I use Relative LINK with Relative PATH?
!⚠️ YES, but only inside the parent route (V.V.I)
<Route path="/dashboard" element={<Dashboard />}>
  <Route path="settings" element={<Settings />} />
</Route>

<Link to="settings">Settings</Link>
---------------------------------------
! OR 2nd example
Nested Routes Example (BEST PRACTICE)
App.jsx

<Route path="/users" element={<Users />}>
  <Route path="profile" element={<UserProfile />} />
</Route>

Relative link
Users.jsx (Parent)

    <Link to="profile">Go to Profile</Link>
--------------------------------------------
! ✔️ Works only inside /dashboard , note - works only inside parent component page then click on setting link then work, go to /dashboard/setting.

🚫 What you should NOT mix
❌ Relative link in Navbar
<Link to="users" />   // ❌ risky

Because Navbar is not inside /users.

🔥 GOLDEN MENTAL MODEL (REMEMBER THIS)
🔹 Route PATH = URL definition
🔹 Link TO = URL navigation
🔹 They do NOT depend on each other

🧠 ONE DIAGRAM (Think Like This)
/users  (absolute path)
   └── profile (relative path)

Navbar → Link "/users/profile" (absolute)
Users.jsx → Link "profile" (relative)

!🎯 Interview One-Liners
Absolute path: Defines route from root
Relative path: Defines child route
Absolute link: Navigates from root
Relative link: Navigates from current route

👉 Any link can navigate to any path
👉 Just make sure the final URL exists
!!!---------------------------------------------------------------!
!!✅ BEST PRACTICE SUMMARY (FOLLOW THIS ALWAYS) (V.V.I)
| Scenario    | Route Path           | Link                 |
| ----------- | -------------------- | -------------------- |
| Top-level   | Absolute (`/users`)  | Absolute (`/users`)  |
| Nested      | Relative (`profile`) | Relative (`profile`) |
| Navbar      | Any                  | Absolute             |
| Inside page | Any                  | Relative             | or like absolute like /users/profile like or simply to = profile
!!!----------------------------------------------------------------!
!🧠 FINAL INTERVIEW ANSWER (BASED ON YOUR CODE)
Even though React Router v6 allows routes and links without /, best practice is:
Use absolute paths (/) for top-level routes
Use absolute links (/) in Navbar
Use relative paths and links only in nested routes
*/

/*
Let’s answer very clearly using rules + your exact examples, no ambiguity.
! ✅ Case 1
? <Route path="/login" element={<Login />} />
? <Link to="login">Login</Link>

❌ NOT recommended (conditionally works)
🔹 Why it sometimes works:
If this <Link> is rendered at /
current URL = /
to="login" → /login

✔ Works

🔹 Why it is dangerous:
If the same link is rendered at /dashboard
current URL = /dashboard
to="login" → /dashboard/login ❌

⚠️ Verdict:
✔ Technically valid
❌ Bad practice for global navigation

! ✅ Case 2
? <Route path="login" element={<Login />} />
? <Link to="/login">Login</Link>

❌ Route definition is NOT best practice

🔹 Why it works:
In React Router v6, top-level routes without / are treated as absolute
🔹 Why it’s discouraged:
Creates confusion in nested routing
Interviewers expect /login
Harder to scale

⚠️ Verdict:
✔ Technically valid
❌ Bad practice for route definition

!! ✅ BEST & CORRECT WAY (ALWAYS FOLLOW THIS)
? <Route path="/login" element={<Login />} />
? <Link to="/login">Login</Link>

✔ Works everywhere
✔ Clean & predictable
✔ Industry standard
✔ Interview-safe
🔥 When is this allowed?
!! ✔ Relative link + relative path (nested routes ONLY)
! <Route path="/dashboard" element={<Dashboard />}>
!  <Route path="login" element={<Login />} />
! </Route>

! <Link to="login">Login</Link>  // inside Dashboard only

!!🧠 FINAL RULE (MEMORIZE THIS)
🔹 Top-level route → absolute path (/login)
🔹 Navbar / global link → absolute link (/login)
🔹 Nested route → relative path (login)
!🔹 Link inside parent → relative link (login)

🎯 Interview One-Liner
You can mix absolute and relative syntactically, but best practice is to keep top-level routes and global links absolute, and use relative only inside nested routes.
*/

/* ------------------------------------------------------------------------
! <Route path="login" element={<Login />} /> 
! <Link to="login">Login</Link> , !! is it correct?

👉 Yes, it can be correct — but only in a specific situation.
Outside that situation, it’s not correct as a best practice.

! When this IS correct ✅ (the ONLY valid case)
? It is correct only when both are inside a parent route (nested routing).

! Example (CORRECT)
? <Route path="/auth" element={<AuthLayout />}>
?  <Route path="login" element={<Login />} />
? </Route>

! Inside AuthLayout.jsx:
? <Link to="login">Login</Link>
<Outlet />

Resulting URL
/auth/login

✔ Relative route path
✔ Relative link
✔ Same parent → works perfectly
✔ Best practice for nested routes

!! When this is NOT correct ❌ (most common mistake)
Top-level routing
? <Route path="login" element={<Login />} />
? <Link to="login">Login</Link>

! Why ❌
! Both are relative
! Depends on current URL
! Breaks if link is rendered from any other route
Not scalable
Interviewers will mark this wrong

!! Best practice for TOP-LEVEL routes ✅
<Route path="/login" element={<Login />} />
<Link to="/login">Login</Link>

✔ Works everywhere
✔ Predictable
✔ Industry standard

? Mental rule (never forget this)
!! Relative + Relative is OK only inside a parent route
Top-level = always Absolute + Absolute

One-line interview answer
! path="login" and to="login" is correct only for nested routes inside a parent; for top-level routing, both should be absolute.
*/