import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {

  //2nd way
  // let navLinkStyles = ({isActive})=>{ // using a css in JS solution
  //   return { // return object
  //     fontWeight: isActive ? 'bold' : 'normal',
  //     textdecoration: isActive ? 'none': 'underline',
  //   }
  // }
  return (
    <>
    <nav>
      {/* works same */}
      {/* <NavLink to='/'> Home</NavLink> */}
       {/* 2nd method, works same */}
      {/* <NavLink to='/' style={navLinkStyles}> Home</NavLink> */}
       {/* works same not good*/}
        <NavLink to='/' className={({isActive})=>isActive? "active": ""}> Home</NavLink>
        <NavLink to='/about' className={({isActive})=>isActive? "active": ""}> About</NavLink>
        <NavLink to='/contact' className={({isActive})=>isActive? "active": ""}> Contact</NavLink>
    </nav>
    </>
  )
}

export default Navbar

/*
! 3. style
!👉 Inline styling (string OR function)

<NavLink
  to="/contact"
?  style={({ isActive }) => ({
    color: isActive ? "red" : "black"
  })}
>
  Contact
</NavLink>
*/

/*
! The NavLink component extends Link by adding an "active" class styling. It is useful for highlighting active menu items in a navigation bar. 
It is used for highlighting the active path.

!! Features of NavLink
! Adds Active Class: Automatically applies an active class when the link matches the current route.
! Supports Custom Styling: Allows custom styles for active and inactive states.
! Exact Matching: By default, matches partially, but exact can be used for precise matching.

! ✅ What is NavLink in React JS?
NavLink is a special version of Link provided by react-router-dom.

👉 Main purpose:
To navigate between pages AND automatically apply styles to the active route.

! Difference between Link and NavLink
| Feature        | `Link`       | `NavLink`      |
| -------------- | ------------ | -------------- |
| Navigation     | ✅ Yes        | ✅ Yes          |
| Active styling | ❌ No         | ✅ Yes          |
| Best for       | Normal links | Menus / Navbar |

<NavLink to="/" end className="nav">
! ⚠ Why end on /?
!! Without end, / also matches /about, /contact.

! Link vs NavLink (Interview Answer)
? Link is used for navigation only.
? NavLink is used when we need navigation with active route styling.

! When should YOU use NavLink?
Since you’re preparing React interviews & notes, remember this rule:

! ✅ Navbar / Sidebar → NavLink
! ✅ Menu highlighting → NavLink

! ❌ Button click navigation → useNavigate
! ❌ Simple navigation → Link


🧠 How NavLink Works (Interview Answer)
? NavLink automatically checks the current URL and provides an isActive property.
? Based on isActive, we can apply styles or classes to highlight the active route.

🔥 Simple Interview One-Liner
! NavLink is used for navigation like Link, but it adds active styling to the currently matched route.
*/

/*
! Add active class or styles automatically. how style autmatcially ?

🔑 Key Idea (One Line)
NavLink automatically compares the current URL with its to path and sets isActive = true when they match.
When isActive is true, React Router gives you hooks to apply styles automatically.

! ✅ 3 AUTOMATIC WAYS NavLink STYLES ACTIVE LINKS
! ✅ WAY 1: className (Most Common & Best)
🔹 Code
<NavLink
  to="/about"
  className={({ isActive }) => isActive ? "active" : ""}
>
  About
</NavLink>

!🔹 What happens internally?
| Current URL | `isActive` | Class applied |
| ----------- | ---------- | ------------- |
| `/about`    | `true`     | `active`      |
| `/home`     | `false`    | `""`          |

!🔹 CSS (Auto applied)
.active {
  color: blue;
  border-bottom: 2px solid blue;
}

! 👉 You never manually check URL – React Router does it for you.

! ✅ WAY 2: style prop (Inline automatic styling)
🔹 Code
<NavLink
  to="/contact"
  style={({ isActive }) => ({
    color: isActive ? "red" : "black",
    fontWeight: isActive ? "bold" : "normal"
  })}
>
  Contact
</NavLink>

!🔹 Auto logic
If route matches → styles applied
If not → normal styles

! ✅ No CSS file required

! ✅ WAY 3: Default active behavior (Old version concept – ❌ NOT recommended)

Earlier versions of React Router used:

<NavLink to="/home" activeClassName="active">

? 🚫 This is removed in React Router v6+
Now function-based approach is mandatory

? 🔍 HOW NavLink KNOWS IT IS ACTIVE?
Internal Logic (Simple terms):

! React Router tracks browser URL
Example:

https://example.com/about

! NavLink checks:
currentURL === to

! If match →
isActive = true

React Router re-renders component automatically

🧠 Very Short Interview Answer
! NavLink automatically applies active styles using the isActive flag, which React Router sets by matching the current URL with the to path.

⚠️ IMPORTANT: Root ("/") Path Issue
<NavLink to="/">Home</NavLink>

! This stays active on all routes ❌

Fix using end
<NavLink to="/" end className={({ isActive }) =>
  isActive ? "active" : ""
}>
  Home
</NavLink>

! ✅ BEST PRACTICE (REAL PROJECTS)
<NavLink
  to="/dashboard"
  className={({ isActive }) =>
    isActive ? "nav-link active" : "nav-link"
  }
>
  Dashboard
</NavLink>

! 📌 Final Summary
| Method                 | Use Case            |
| ---------------------- | ------------------- |
| `className + isActive` | ⭐ Best practice     |
| `style + isActive`     | Small components    |
| `end` prop             | Fix `/` route issue |

-------------------------------------------------------------------
! isActive is NOT coming from you. It is provided automatically by NavLink (React Router).

You don’t create it.
You don’t import it.
React Router passes it to your function.

Your condition runs
isActive ? "active" : ""

true → "active"
false → ""

React Router then adds that class automatically to <a> tag.
.

!🔍 What NavLink Actually Renders
When NOT active:
<a href="/about" class="">About</a>

! When ACTIVE:
<a href="/about" class="active">About</a>

! 👉 Browser applies your CSS automatically.

🧠 Interview-Friendly Explanation
! NavLink passes an object to the className function. This object contains isActive, which React Router calculates by matching the current URL with the to path.

⚠️ BONUS: end Case (Very Common Question)
<NavLink to="/" end>


! Without end:
! /about → Home also active ❌

! With end:
! Only / → Home active ✅

🧩 Mental Model (Easy to Remember)
!! NavLink = Link + URL match check + isActive flag
*/

/*
! 🔑 Simple Definition
! end tells NavLink to match the URL EXACTLY, not partially.

❌ Problem WITHOUT end

<NavLink to="/">Home</NavLink>
<NavLink to="/about">About</NavLink>

Current URL:
/about

What happens?
/about starts with /

So Home becomes ACTIVE ❌
About also active ✅
!👉 This is called partial matching

✅ Solution WITH end
Code
<NavLink to="/" end>Home</NavLink>

Now matching rule:
currentURL === "/"

! Result:
| URL      | Home Active? |
| -------- | ------------ |
| `/`      | ✅ Yes        |
| `/about` | ❌ No         |

🧠 How end Works Internally (Simple)
Without end:
currentURL.startsWith(to)

With end:
currentURL === to

!📌 When SHOULD you use end?
| Case                          | Use `end`?         |
| ----------------------------- | ------------------ |
| Root path (`"/"`)             | ✅ YES              |
| Parent route (`"/dashboard"`) | ❌ NO               |
| Sidebar / Navbar              | Mostly YES for `/` |

!🔥 Real Example (Correct Navbar)
<NavLink to="/" end className={({ isActive }) =>
  isActive ? "active" : ""
}>
  Home
</NavLink>

<NavLink to="/about" className={({ isActive }) =>
  isActive ? "active" : ""
}>
  About
</NavLink>

🧠 One-Line Interview Answer
! end ensures NavLink matches the route exactly instead of partially.

! ⚠️ Common Mistake
❌ Using end everywhere

<NavLink to="/dashboard" end>Dashboard</NavLink>

This breaks:
/dashboard/profile ❌ inactive

! ✅ Correct Rule to Remember

! / → always use end
! Nested routes → do NOT use end
*/

/*
!🔑 What is className in NavLink? ------------------
! In NavLink, className is a special prop that decides which CSS class should be applied based on whether the link is active or not.
Unlike normal elements, NavLink allows className to be a function.

🎯 Interview One-Liner (Perfect Answer)
! In NavLink, className can be a function that receives isActive from React Router and returns a CSS class dynamically.

!!🆚 Normal Link vs NavLink
| Feature              | Link | NavLink |
| -------------------- | ---- | ------- |
| Navigation           | ✅    | ✅       |
| `className` function | ❌    | ✅       |
| `isActive`           | ❌    | ✅       |

!! <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}> explain this ??
<NavLink
  to="/about"
  className={({ isActive }) => isActive ? "active" : ""}
>
  About
</NavLink>
! 1️⃣ <NavLink to="/about">
This means:
👉 “When user clicks About, go to /about URL”

It works like <Link>, but with extra power

!2️⃣ className={ ... } 👉 why {}?
In JSX:

{} means write JavaScript inside JSX

So inside {} we are writing a JavaScript function.

!3️⃣ ({ isActive }) => ... 👉 what is this?
This is an arrow function.

! What React Router sends to this function:

{ 
  isActive: true or false 
}
You are using destructuring to directly get isActive.

Same as writing:
(props) => {
  const isActive = props.isActive
}
! 4️⃣ isActive ? "active" : "" 👉 what is this?
This is a ternary operator (short if–else).

Equivalent to:

if (isActive) {
  return "active"
} else {
  return ""
}
! 5️⃣ Final Behavior (Automatic Magic ✨)
If current URL is /about
isActive = true
className = "active"

Rendered HTML:

<a class="active" href="/about">About</a>
If current URL is /home
isActive = false

className = ""

Rendered HTML:

<a class="" href="/about">About</a>
! 6️⃣ Where does "active" go?
From your CSS file:

! css
.active {
  color: blue;
  border-bottom: 2px solid blue;
}
! Browser applies it automatically 🎯

🧠 Full Mental Model (Easy)
! NavLink checks URL → sets isActive → calls your function → returns class name → browser applies CSS

🎯 Interview-Ready One-Line Answer
! NavLink passes isActive to the className function, and based on that we conditionally apply the active CSS class.
*/

/*
! 🔹 What is style in NavLink?
👉 style lets you apply inline CSS to a NavLink.

! It can be:
Normal object
!!! Function (recommended) – gives access to isActive --------------

! ✅ 1️⃣ Simple style (no active logic)
<NavLink
  to="/about"
  style={{ color: "blue", textDecoration: "none" }}
>
  About
</NavLink>

? 📌 This applies the same style all the time.

!!✅ 2️⃣ style with isActive (MOST IMPORTANT) ------------------
<NavLink
  to="/about"
  style={({ isActive }) => ({
    color: isActive ? "red" : "black",
    fontWeight: isActive ? "bold" : "normal"
  })}
>
  About
</NavLink>


! Attributes in NavLink
| Attribute   | Purpose         |
| ----------- | --------------- |
| `to`        | Navigation path |
| `className` | CSS class       |
| `style`     | Inline style    |
| `end`       | Exact match     |
| `children`  | Content         |
| `id`        | HTML id         |
| `title`     | Tooltip         |
| `onClick`   | Click event     |


!! ⚡ When style function is OK
! ✔ Small & one-time change
<NavLink
  to="/login"
 ? style={({ isActive }) => ({
    color: isActive ? "green" : "gray"
  })}
>
  Login
</NavLink>

! ❌ Not good for large apps
! Inline styles are hard to reuse
! No hover, media queries, animations

! ✅ Correct & Valid NavLink Code
<NavLink
  to="/about"
?  className={({ isActive }) =>
?    isActive ? "red" : "grey"
  }
>
  About
</NavLink>

! ✔ Syntax is correct
! ✔ isActive works correctly
! ✔ Class changes automatically

!! ⚠️ Best Practice Improvement (Recommended) ----------

! Instead of color-based class names:

className={({ isActive }) =>
?  isActive ? "nav-link active" : "nav-link"
}

.nav-link {
  color: grey;
}

.nav-link.active {
  color: red;
}

! ✔ More professional
! ✔ Easy to change theme later
! ✔ Interview-friendly

🎯 Interview Answer
! Yes, it is correct. NavLink provides isActive, and we can return different class names based on the active route.
*/

/* --------------------------------------------------
! className={({ isActive }) => isActive ? "nav-link active" : "nav-link" }. we pass active why we pas nav-link active ?? This is best practice., it apllies basic css for nav links and when route match, active class added by navlink and additional css applies for active menu, so nav-link active, here two diffrent css added based on condition one for normal and commona for all nav link and one only for active menu.
You wrote:

className={({ isActive }) =>
  isActive ? "nav-link active" : "nav-link"
}

Let’s break it slowly and clearly, using best practice (important for interviews too).

! 1️⃣ Why do we pass "nav-link active" instead of only "active"?
! Because two different responsibilities are involved:

! 🔹 nav-link
This is your base class
It contains common styles for all links
(font-size, padding, color, margin, etc.)

! This should apply always, whether the link is active or not ---------------------

! 🔹 active
! This is a conditional class
! It is applied only when the route is active
! Used for highlighting (color change, underline, bold, etc.)
! 👉 So when the link is active, we want both:

! normal link styles (nav-link)
! active-specific styles (active)

! That’s why:
! "nav-link active"

! 2️⃣ What happens if we pass only "active"?
! ❌ Bad practice
isActive ? "active" : "nav-link"

! Problem:
! When active → nav-link styles are lost
! Your layout may break (padding, font size, spacing gone)

! 3️⃣ CSS example (this makes it crystal clear)
? .nav-link {
  text-decoration: none;
  padding: 10px;
  color: gray;
}

? .nav-link.active {
  color: red;
  font-weight: bold;
  border-bottom: 2px solid red;
}

! Behavior:
| Route State | Applied Class     | Result      |
| ----------- | ----------------- | ----------- |
!| Not Active  | `nav-link`        | Normal link |
| Active      | `nav-link active` | Highlighted |

! 5️⃣ Best practice (INTERVIEW ANSWER ⭐) ----------------------
! We pass "nav-link active" so that the base styles (nav-link) are always applied, and the active class is added only when the route 
! is active, ensuring consistent styling and proper UI behavior.

*/