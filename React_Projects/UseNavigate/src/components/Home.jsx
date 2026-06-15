import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    let navigate = useNavigate();

  return (
    <>
    <div>Home Page</div>
    <button onClick={()=>navigate('order-summary', {replace:true})}>Place Order</button>
    </>
  )
}

export default Home

/*
! useNavigate is a hook provided by React Router that lets you navigate (redirect) programmatically from one page to another using JavaScript, instead of clicking a <Link>.

👉 Think of it as:
!!!! “Redirect the user when something happens (login, submit, logout, button click)”-----

!👉 It is used when:
! You want to navigate after a button click
? You want to navigate after login / logout
? You want to navigate after form submit
? You don’t want to use <Link>

📌 In simple words:
! useNavigate helps you move from one page to another using JavaScript logic.

!! When do we use useNavigate?
Use useNavigate when:
! After login → go to dashboard
! After form submit → go to another page
! On logout → go to login page
! On button click → change route
*/

/*
! Step 4: Replace History (Important for Interview)
navigate("/login", { replace: true });


✅ Use this after logout so user cannot press back.

! useNavigate vs <Link>
| `<Link>`              | `useNavigate`                 |
| --------------------- | ----------------------------- |
| Used in JSX           | Used in JavaScript            |
| For normal navigation | For conditional / logic based |
| Example: menu         | Example: login, logout        |

Real-Life Example (Logout)
const handleLogout = () => {
  navigate("/login", { replace: true });
};

One-Line Interview Answer ⭐
! useNavigate is a React Router hook used for programmatic navigation, allowing route changes based on logic like login, logout, or form submission.
*/

/*
!GFG
! React Router v6 introduces the useNavigate() hook, making it easier and more flexible to navigate between different pages in your app. It replaces the older useHistory() hook.

With the useNavigate() hook, you can:

Go to a different page in your app.
! Navigate based on actions like button clicks.
Send data or parameters when moving to another page.

The useNavigate() hook in React Router v6 provides a programmatic way to navigate between routes in your application. 

Step 1: Install React Router
npm install react-router-dom@6
Step 2: Import the useNavigate Hook
To begin, you need to import the useNavigate hook from react-router-dom.

import { useNavigate } from 'react-router-dom';
Step 3: Call useNavigate() Inside Your Component
! Inside your functional component, call useNavigate() to access the navigate function. This function will allow you to programmatically change the route.

const navigate = useNavigate();
Step 4: Use navigate() to Change Routes
You can use the navigate function to navigate to a specific route. Here's the basic syntax:

navigate('/path');  // Navigates to '/path'
! Step 5: Using replace for One-Time Redirection
! You can also use the { replace: true } option to replace the current history entry. This is useful for cases like login redirects, where you don’t want users to be able to use the back button to return to the previous page.

navigate('/path', { replace: true });
Step 6: Navigating Back and Forward
To navigate back in the browser’s history, use a negative number (e.g., -1), and to move forward, use a positive number (e.g., 1):

navigate(-1);  // Goes back one step in historynavigate(1);   // Goes forward one step in history

!! When to Use useNavigate() vs. <Link>
! useNavigate(): Best suited for programmatic navigation triggered by code, such as after form submissions, authentication events, or specific actions that aren't directly related to user interaction.
! <Link> or <NavLink>: Ideal for declarative navigation, where the route change is a part of the UI and driven by user interaction, like in menu items, buttons, or navigation bars.
*/

/*    ----------------------------V.V.I-----------------------------------
! Diffrence between usenavigate and <Navigate/> where it use ?

! 1️⃣ useNavigate() – Imperative (Action-based navigation)
! What it is
A hook , Used inside a component,  Navigates after some action (button click, form submit, API success)

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