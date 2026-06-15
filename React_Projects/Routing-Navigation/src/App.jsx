import React from 'react'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/contact'
import Profile from './components/Profile_DynamicRoutes'
import LayoutOutlet from './components/LayoutParentRoute_Outlet'
import DashboardOutlet from './components/DashboardChildRoute'
import SettingOutlet from './components/SettingChildRoute'

const App = () => {
  return (
    <>

  

    {/* The useNavigate() hook in React Router (v6+) is used for programmatic navigation in a React application. 
      Allows you to navigate to a different route programmatically (without using <Link>).
      Useful when you want to navigate after some event (e.g., after form submission, button click).
    */}

    {/* define Routes */}
      <BrowserRouter>
      <Routes>
        {/* Parent Route */}
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/profile/:userId' element={<Profile/>}/>


         {/* with outlet, nesting routing ,
         benifit: 1️⃣ Reusable Layouts (DRY Principle)
        Instead of repeating the same layout (like header, sidebar, footer) in every page/component, you define it once in the parent component.
        Child components are displayed inside the <Outlet /> without duplicating code.*/}
        
        {/*!! wrapping child routes inside layout parent route. */}
        {/* Parent route from where child routing start. */}
        <Route path='/layout' element={<LayoutOutlet/>}>

        {/* V.V.I -> for nested routing, wrap the child routes inside parent route. */}
        {/* Define child Route or nested route */}
        <Route path='dashboard' element={<DashboardOutlet/>}/>  {/* /layout/dashboard and dont write / before dashboard in path. becoz child paths are relative. Always use relative paths (no starting slash) for nested child routes. */}
        <Route path='setting' element={<SettingOutlet/>}/>  {/* /layout/setting */}
      </Route>

        {/* http://localhost:5173/layout/dashboard */}
      {/* without outlet, nesting routing , child page open in a new page.(not sharing common layout parts).*/}
      {/* <Route path='/layout/dashboard' element={<DashboardOutlet/>}/> 
      <Route path='/layout/setting' element={<SettingOutlet/>}/> */}
     


         {/* Fallback */}
         {/* Redirect unknown paths to home */}
        <Route path="*" element={<Navigate to="/" />} />
        
      </Routes>
      </BrowserRouter>
    
    </>
  )
}

export default App

/*
! What is BrowserRouter in React Router?
BrowserRouter is a component provided by the React Router to provide the client-side routing with the support of the HTML5 history API.
If you want to change between the next page while navigation then BrowserRouter modifies the web browser address accordingly to provide 
the functionality of preserving the state of the application while changing the views.

Enables Routing: BrowserRouter wraps the application, allowing URL-based navigation without page reloads.
Defines Routes: Routes contain Route components, mapping paths (/, /about) to specific React components.
! BrowserRouter: Uses the HTML5 history API to keep your UI in sync with the URL.
! Routes: A container for all your route definitions.
! Route: Defines a single route with a path and the component to render.
! Link vs NavLink
! Link: Creates navigational links in your application.
! NavLink: Similar to Link but provides additional styling attributes when the link is active.
*/

/*
! Components of React Router DOM
These components help in defining routes, handling navigation, and managing dynamic content within a React application.

! BrowserRouter (<BrowserRouter>)
BrowserRouter Enables routing in a React application by wrapping the entire app.
It listens to changes in the URL and renders the correct components accordingly.

import { BrowserRouter } from "react-router-dom";
<BrowserRouter>
    <App />
</BrowserRouter>;

! Routes (<Routes>)
Routes acts as a container for all <Route> components.
Ensures that only one matching route is rendered at a time.

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
</Routes>;

! Route (<Route>)
Route defines a specific path and maps it to a React component.
When the URL matches the route path, the respective component is displayed.

<Route path="/contact" element={<Contact />} />

! Link (<Link>)
Used to navigate between pages without refreshing the page.
Unlike <a>, it prevents full-page reloads and enhances performance.

<Link to="/about">About Us</Link>

! NavLink (<NavLink>)
Works like <Link> but provides active styling when the route is active.
Useful for highlighting the active page in navigation menus.

<NavLink to="/home" className="nav-link">Home</NavLink>

! useParams (useParams())
useParams extracts dynamic parameters from the URL.
Helps in fetching user-specific or product-specific details based on the route.

import { useParams } from "react-router-dom";
function UserProfile() {
    let { id } = useParams();
    return <h1>User ID: {id}</h1>;
}

! useNavigate (useNavigate())
useNavigate Allows programmatic navigation between routes.
Useful for redirecting users after an action, such as form submission.

import { useNavigate } from "react-router-dom";
function Home() {
    const navigate = useNavigate();
    return <button onClick={() => navigate("/about")}>Go to About</button>;
}
*/

/* diff between navigate and link in react
!1. What is Link?
Link is used to create clickable navigation.
✔ Example:
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/about">About Page</Link>
    </nav>
  );
}

! Works like an anchor tag but does not reload the page.
Allows smooth SPA navigation.

!2. What is Navigate?
Navigate is used to redirect automatically based on conditions.

✔ Example: Redirect after login
import { Navigate } from "react-router-dom";

function Login({ isLoggedIn }) {
  if (isLoggedIn) {
    return <Navigate to="/dashboard" />;
  }

  return <h2>Please Login</h2>;
}

! If condition becomes true, user is automatically navigated.
! Best for protected routes, form submission, auth redirect.

!⭐ Real Use Case Comparison

!👉 Using Link
User clicks button to go to profile.

<Link to="/profile">Go to Profile</Link>

!👉 Using Navigate
Automatically go to login page if not authenticated.

if (!isAuth) {
  return <Navigate to="/login" replace />;
}

!🧠 When to use what?
? Use Link when:
You want user interaction.
Navigation should happen on click.

? Use Navigate when:
Navigation should happen without user clicking.
Redirect flows like:
After login
After logout
If user is not authenticated
If some form is successfully submitted

! Link vs Navigate in React Router (v6)
| Feature       | `Link`                                      | `Navigate`                                         |
| ------------- | ------------------------------------------- | -------------------------------------------------- |
| **Type**      | Component used for navigation via **click** | Component used for **programmatic navigation**     |
| **When Used** | When user manually clicks on something      | When navigation should happen **automatically**    |
| **Example**   | `<Link to="/home">Go Home</Link>`           | `<Navigate to="/home" />`                          |
| **Triggers**  | User action (click)                         | Code logic (conditions, redirects)                 |
| **Use Case**  | Buttons, menus, navigation bar              | Login redirects, protected routes, form submission |
| **Renders**   | Renders an `<a>`-like clickable element     | Does *not* render anything visible                 |

*/

/*
! 1. Introduction to React Router
What is routing in a Single Page Application (SPA)
Why React Router is needed
React Router DOM package installation:
npm install react-router-dom

! 2. Basic Routing
BrowserRouter vs HashRouter
Routes and Route components
Rendering components via Route
<Route path="/home" element={<Home />} />

Default routes (index route)

! 3. Navigation
Link vs NavLink
useNavigate hook for programmatic navigation
replace vs push in navigation
Active link styling using NavLink

! 4. Route Parameters
Dynamic routing with path parameters (:id)
<Route path="/user/:id" element={<User />} />

Accessing parameters with useParams hook
Optional parameters

! 5. Query Parameters
Accessing query parameters using useLocation
Parsing query strings
Example: /products?category=electronics

! 6. Nested Routes
Setting up parent and child routes
Outlet component for nested views
Passing props to nested routes
Index routes in nested routing
! <Outlet /> is written inside the parent component, not the child.
/*
! Why?
<Outlet /> is a placeholder where the child route’s component will render.
! So:
Parent component → decides where child should appear
Child component → just renders its own UI
! Simple Rule (Remember this 🔒)
If a route has nested (child) routes → its component must contain <Outlet />.
*

! 7. Redirects & Navigation Guards
Redirecting routes (Navigate component)
Protecting routes (private routes)
Conditional rendering of routes based on authentication
Example: Login required routes

! 8. 404 Page & Wildcard Routes
Handling unmatched routes
* path for 404 component

Example:
<Route path="*" element={<NotFound />} />

! 9. Programmatic Navigation
Using useNavigate to redirect after events
Navigation on button click or after form submission
Passing state during navigation

! 10. Advanced Concepts
Route-based code splitting (React.lazy + Suspense)
Animations on route transitions (optional)
Nested layouts for dashboards
Maintaining scroll position on route change
*/

/*
!! React Router (v6) – Complete Comparison Table
| Feature                       | `<Link>`                                                                       | `<NavLink>`                                                      | `useNavigate()`                                     | `navigate()`                                             | `<Navigate />`                                        |
| ----------------------------- | ------------------------------------------------------------------------------ | ---------------------------------------------------------------- | --------------------------------------------------- | -------------------------------------------------------- | ----------------------------------------------------- |
| **Definition**                | A component used to navigate between routes via user click without page reload | A special version of Link that knows whether it is active or not | A hook that gives access to the navigation function | The function used to perform navigation programmatically | A component used to redirect the user while rendering |
| **Why we use it**             | To replace traditional `<a>` tag for SPA navigation                            | To highlight or style active links automatically                 | To control navigation using JavaScript logic        | To actually move to another route                        | To redirect user conditionally in JSX                 |
| **Where we use it**           | Inside JSX (buttons, text, menus)                                              | Inside JSX (Navbar, Sidebar)                                     | Inside React components                             | Inside functions, events, effects                        | Inside component return (JSX)                         |
| **When we use it**            | When user clicks a link                                                        | When we need active menu indication                              | After login, submit, API success, condition         | Whenever navigation must happen via logic                | When redirecting during render                        |
| **Navigation type**           | Declarative                                                                    | Declarative                                                      | Imperative                                          | Imperative                                               | Declarative                                           |
| **User interaction required** | ✅ Yes                                                                          | ✅ Yes                                                            | ❌ No                                                | ❌ No                                                     | ❌ No                                                  |
| **Active route detection**    | ❌ No                                                                           | ✅ Yes                                                            | ❌ No                                                | ❌ No                                                     | ❌ No                                                  |
| **Programmatic navigation**   | ❌ No                                                                           | ❌ No                                                             | ✅ Yes                                               | ✅ Yes                                                    | ❌ No                                                  |
| **Redirect without click**    | ❌ No                                                                           | ❌ No                                                             | ✅ Yes                                               | ✅ Yes                                                    | ✅ Yes                                                 |
| **Can replace history**       | ❌ No                                                                           | ❌ No                                                             | ✅ Yes                                               | ✅ Yes                                                    | ✅ Yes                                                 |
| **Supports back / forward**   | ❌ No                                                                           | ❌ No                                                             | ✅ Yes                                               | ✅ Yes                                                    | ❌ No                                                  |
| **Used in logic (JS)**        | ❌ No                                                                           | ❌ No                                                             | ✅ Yes                                               | ✅ Yes                                                    | ❌ No                                                  |
| **Best use case**             | Simple page navigation                                                         | Navbar / active menu                                             | Login, logout, submit                               | Executing navigation                                     | Auth guard, protected routes                          |

! Simple Examples (For Understanding)
!🔗 <Link>
<Link to="/about">About</Link>
👉 When user clicks

!🎯 <NavLink>
<NavLink
  to="/home"
  className={({ isActive }) => isActive ? "active" : ""}
>
  Home
</NavLink>
👉 When menu needs active state

!🪝 useNavigate()
const navigate = useNavigate();
👉 To get navigation power

!🚀 navigate()
navigate("/dashboard");
navigate(-1);
👉 To move user via logic

!🔁 <Navigate />
{!isLoggedIn && <Navigate to="/login" replace />}
👉 To redirect during render

! Interview One-Line Memory Trick
? Link → click navigation
? NavLink → active navigation
? useNavigate → get control
? navigate → execute control
? Navigate → redirect component

!! Real-World Mapping (Very Important)
| Real Scenario          | Use                    |
| ---------------------- | ---------------------- |
| Website menu           | NavLink                |
| Button to another page | Link                   |
| Login success          | useNavigate + navigate |
| Logout                 | navigate               |
| Protected route        | Navigate               |
*/

/* ---Where you SHOULD write '/' in route?-----
! write / only in TOP-LEVEL routes or when you want an ABSOLUTE path.
Let’s make it crystal clear 👇 (React Router v6)

! ✅ 1. 
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

!❌ 2. Where you should NOT write /

!🔹 Nested (child) routes
<Route path="users" element={<Users />}>
  <Route path="profile" element={<UserProfile />} />
  <Route path="list" element={<UserList />} />
</Route>

! ❌ Writing this is WRONG:
<Route path="/profile" />   // ❌

! ✅ 3. Inside Parent Component (Outlet case)
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


/* ----------------
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

/* -------------
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

/* ---------------------------------------------------------
! Diffrence between useNavigate and <Navigate/> where it use ?

! 1️⃣ useNavigate() – Imperative (Action-based navigation)
! What it is
A hook
Used inside a component
Navigates after some action (button click, form submit, API success)

! When to use
✅ After login / logout
✅ On button click
✅ After form submit
✅ After API success/failure

! Example
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    / login logic
    navigate("/dashboard"); // redirect after action
  };

  return <button onClick={handleLogin}>Login</button>;
}

! Key points
Runs inside functions
You control when navigation happens
Similar to history.push() (old React Router)

!! 2️⃣ <Navigate /> – Declarative (Condition-based navigation)
! What it is
A component
Used inside JSX
Redirects automatically based on condition

! When to use
✅ Protected routes
✅ Auth checks
✅ Role-based access
✅ Default redirects

! Example – Protected Route
import { Navigate } from "react-router-dom";

function Dashboard({ isLoggedIn }) {
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return <h1>Dashboard</h1>;
}

! Key points
Works during render
No user action needed
Best for auth & route guards

! 🔥 Side-by-Side Comparison (Very Important)
| Feature  | `useNavigate()`             | `<Navigate />`         |
| -------- | --------------------------- | ---------------------- |
| Type     | Hook                        | Component              |
| Used in  | Functions / Events          | JSX return             |
| Trigger  | User action / logic         | Condition              |
| Best for | Button, submit, API success | Auth, protected routes |
| Control  | Manual                      | Automatic              |

🧠 Interview One-Line Answer
!! useNavigate is used for navigation after an action, while <Navigate /> is used for conditional redirection during rendering.

! ⚠️ Common Mistake (Interview Trap)
❌ Using useNavigate for auth guards
❌ Using <Navigate /> on button clicks

✅ Quick Rule to Remember
! Action → useNavigate()
! Condition → <Navigate />

*/