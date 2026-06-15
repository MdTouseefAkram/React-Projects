import React, { useState } from "react";
import Navbar from "./components/Navbar";

const App = () => {
  const [isActive, setIsActive] = useState(true);

  return (
    <>
      <Navbar />
      {/* ! 2️⃣ Inline Styling */}
      <h1 style={{ color: "blue", backgroundColor: "yellow" }}>Hello World</h1>
      {/* 3️⃣ Conditional Styling (Very Important 🔥 Interview) . -> Note - React router give .active class.*/}
      <button className={isActive ? "active" : "normal"}>Click Me</button>
    </>
  );
};

export default App;

/*
! In React, there are 5 main ways to style components:
! 1️⃣ External CSS (Most Common & Best Practice ✅)
👉 Same as normal CSS.
👉 Create a .css file and import it.

! 2️⃣ Inline Styling
👉 Written inside JSX using style={{}}
👉 Uses JavaScript object

! ⚠ Important:
! CSS properties become camelCase
background-color ❌
backgroundColor ✅

! ❌ Not best for:
Large styling
Reusable styles

! 3️⃣ Conditional Styling (Very Important 🔥 Interview)
Used with className.

! This is commonly used in:
NavLink
Forms
Toggle buttons
Dark mode
*/

/*! 4️⃣ CSS Modules (Advanced & Professional)
    Prevents class name conflicts. */
    
    //! In component file.
    //import styles from './Navbar.module.css'
    // <h1 className={styles.title}>Hello</h1>

    //! In css file 
    //.title {
    // color: green;
// }

/*
! 5️⃣ Styled Components (Library-Based Styling)
! Install:
npm install styled-components

import styled from "styled-components";

const Button = styled.button`
  background: black;
  color: white;
  padding: 10px;
`;

function App() {
  return <Button>Click Me</Button>; // here Button is which we created in variable not regular <button>.
}

! 👉 Used in modern React projects.
*/

/*
! 🔥 Best Practice (For Interviews)
If interviewer asks:
! What is best practice for styling in React?
Answer:
! Small project → External CSS
! Large project → CSS Modules
! Dynamic styling → Conditional className
! Component-based styling → Styled Components

! ✅ Why className?
Because class is reserved keyword in JavaScript.
*/

/*
🔥 Main Ways to Style in React
External CSS (Most Common & Best Practice)
Inline Styling
CSS Modules
Styled Components (Advanced)

! "Styling in React means applying CSS to components to control UI design. It can be done using external CSS files, inline styles, CSS modules, or styled-components. The best practice is component-based CSS where each component has its own CSS file for better maintainability."
🚀 Best Practice (Important for You as Full Stack Developer)

✔ Use external CSS for normal styling
✔ Use conditional className for dynamic styling
✔ Keep one CSS file per component
✔ Avoid too much inline styling
*/

/* -----------------------------------------------------------------------------------------------
!! What is index.css and App.css and why we use ??

!✅ 1️⃣ index.css — What is it?
! 📌 Purpose: Global styling for the entire application.

It is imported inside index.js (or main.jsx).

! 🔥 Why we use index.css?
Because:
It applies styles to the whole app

Used for:
Reset CSS
Default fonts
Body background
Global margin/padding removal
Common utility classes

👉 Think of it like base foundation styling

! ✅ 2️⃣ App.css — What is it?
! 📌 Purpose: Styling specifically for the App component.

It is imported inside App.jsx.

! 🔥 Why we use App.css?
Because:
It styles only the App component
! Keeps App-related styles separate
Makes project clean & modular

! 🎯 Simple Difference (Very Clear)
| File      | Scope              | Used For                       |
| --------- | ------------------ | ------------------------------ |
! | index.css | Global             | Body styling, reset CSS, fonts |
! | App.css   | App component only | Layout of main App             |

In large MERN apps: -------------------------------------------------
!! index.css → Global reset, default font, theme variables
!! App.css → Layout wrapper (header, sidebar container)
!! Component folder → Each component has its own CSS

! ⚠ Important Interview Point

If interviewer asks:
!!! Why not write everything in index.css?
You answer:
! "If we write everything in index.css, it becomes messy and hard to maintain. Component-based styling improves readability, scalability, and maintainability."

! 🚀 Best Practice for You

Since you're preparing for interviews:

! ✔ Keep global styles in index.css
! ✔ Keep layout styles in App.css
! ✔ Keep component styles inside their own folders
! ✔ Avoid putting everything in one file
*/


/*
! ✅ What is : in .btn:hover ?
The : is used to define a pseudo-class in CSS.
So:
.btn:hover

means:
! 👉 "Apply this style when the element with class btn is in the hover state."

🔥 What is a Pseudo-Class?
A pseudo-class defines a special state of an element.
It starts with :.

! General syntax:
selector:pseudo-class {
  property: value;
}

! 🧠 Common Pseudo-Classes (Important for Interview)
| Pseudo-Class   | Meaning                       |
| -------------- | ----------------------------- |
!| `:hover`       | When mouse is over element    |
| `:active`      | When element is clicked       |
| `:focus`       | When input is selected        |
| `:visited`     | When link was already visited |
| `:first-child` | First child of parent         |


🧠 Interview Answer (Short & Smart)

If interviewer asks:

! What is :hover?
You can say:
":hover is a CSS pseudo-class used to apply styles when the user places the mouse pointer over an element."

! Since you're learning React seriously, understanding pseudo-classes helps in:
Buttons
NavLinks
Forms
Interactive UI
Professional UI design
*/

/*
! Difference between css module and external css.
✅ 1️⃣ External CSS (Normal CSS)
📌 What it is?
! Regular .css file imported into a component.

Example:

Button.css

.btn {
  background-color: blue;
  color: white;
}

import "./Button.css";

function Button() {
  return <button className="btn">Click</button>;
}

! ❗ Problem with External CSS
! CSS is global by default.

! If two components use:

.btn {
  color: red;
}

! They will conflict.

Example:
! Navbar.css → .btn { color: red; }
! Card.css   → .btn { color: green; }
!! Note - if use same clasName in diff components, then css apply automatically without import in case of external css, it makes conflict but css module it not happen even  we use same className it won't compile without import.

Now styling becomes unpredictable.

! ✅ 2️⃣ CSS Modules
📌 What it is?
! A CSS file with .module.css extension.

Example:

Button.module.css

.btn {
  background-color: blue;
  color: white;
}

import styles from "./Button.module.css";

function Button() {
  return <button className={styles.btn}>Click</button>;
}

🔥 What React Does Internally

React converts class name into something unique like:
Button_btn__x8h23


So it becomes:
<button class="Button_btn__x8h23">

Now no other component can override it.

!🎯 Key Differences
| Feature       | External CSS      | CSS Module               |
| ------------- | ----------------- | ------------------------ |
! | Scope         | Global            | Local (component scoped) |
| File Name     | `.css`            | `.module.css`            |
| Class Usage   | `className="btn"` | `className={styles.btn}` |
| Conflict Risk | High              | No conflict              |
| Best For      | Small projects    | Large scalable apps      |

🧠 Interview Answer (Professional Version)
! "External CSS is global and can cause naming conflicts across components. CSS Modules provide locally scoped class names, preventing style conflicts and improving maintainability in large React applications."

! 🏆 Real Industry Practice
! Small apps → External CSS
! Medium/Large apps → CSS Modules or Tailwind
! Enterprise apps → CSS Modules / Styled Components
*/

/* 
! 🥇 ✅ Best Practice (Recommended)
! 👉 Keep CSS near the component that uses it

src/
 ├── components/
 │    ├── Navbar/
 │    │     ├── Navbar.jsx
 │    │     ├── Navbar.module.css
 │    ├── Footer/
 │    │     ├── Footer.jsx
 │    │     ├── Footer.module.css

! 🔥 Why this is best?
Easy to maintain
Easy to delete component (CSS also deleted)
No confusion
Clean architecture
Used in production projects

! 👉 This is called co-located styling (CSS lives with its component).

! 🥈 Alternative Way (Separate CSS Folder)
 src/
 ├── components/
 │     ├── Navbar.jsx
 │     ├── Footer.jsx
 │
 ├── styles/
 │     ├── Navbar.css
 │     ├── Footer.css
 │     ├── global.css
 
! ❌ Why this is not preferred?
Hard to track which CSS belongs to which component
Becomes messy in large projects
Not scalable

! 🏆 Final Industry Rule
| Type of CSS                     | Where to Keep           |
| ------------------------------- | ----------------------- |
! | Component-specific CSS          | Inside component folder |
! | Page-specific CSS               | Inside page folder      |
! | Global CSS (body, reset, fonts) | `src/styles/global.css` |

*/


/*
!----------------------------------------------------------
! <div style={{ color: "red" }}></div> why two {{}}

?? <div style={{ color: "red" }}></div>

!!! there are two {} but they are doing different jobs.

! Why two {}?

! 1st {} → JSX escape to write JavaScript
Whenever you write JavaScript inside JSX, you use:

{ ... }

! So this:

style={ ... }

! means:

? “I am passing a JavaScript value to the style prop”

! 2nd {} → JavaScript object

! The style prop in React expects an object, like:

{ color: "red" }

! So you write:

style={{ color: "red" }}
Final breakdown
<div style={{ color: "red" }}></div>

| Part                     | Meaning                |
| ------------------------ | ---------------------- |
! | outer `{}`               | JSX → enter JavaScript |
! | inner `{ color: "red" }` | JavaScript object      |

Simple way to remember

! 👉 style expects an object
! 👉 JSX needs {} to enter JavaScript

! So:

style = { JS object }
       = { { color: "red" } }


!!!! Why CSS is written as an object in React?
! 1. JSX works with JavaScript

! In React:

<div style={{ color: "red" }}></div>

! Here style is not a string like HTML.

! It is a JavaScript object.

! 2. JavaScript cannot understand CSS string directly

? ❌ Not valid in React:

? <div style="color: red;"></div>

! Because React treats JSX as JavaScript, not HTML.

! 3. React needs a JS-friendly format

! So CSS is converted into an object:

{
  color: "red",
  backgroundColor: "blue"
}

! Then React converts this object into real CSS in the browser.

! 4. CamelCase rules (important)

In objects, CSS properties are written in camelCase:

| CSS              | React           |
| ---------------- | --------------- |
!| background-color | backgroundColor |
| font-size        | fontSize        |
| text-align       | textAlign       |

! Example:

<div style={{ backgroundColor: "black", fontSize: "20px" }}></div>

! 5. React converts object → real CSS

! This:

<div style={{ color: "red" }}></div>

! Becomes in browser:

? color: red;

!!! 6. Why object is useful

! (A) Dynamic CSS

! You can use variables easily:

? const color = "red";

? <div style={{ color }}></div>

! (B) Conditional styling

? <div style={{ color: isActive ? "green" : "gray" }}></div>

! (C) JavaScript power

! You can compute styles:

? <div style={{ fontSize: 10 + 5 + "px" }}></div>

! 7. Simple analogy

! HTML CSS → string language
! React style → JavaScript object

! So React says:

! “Since I am already JavaScript, I will use objects instead of strings.”

! Interview Answer

! CSS in React is written as a JavaScript object because JSX is based on JavaScript, not HTML. The style attribute accepts a JS object where CSS properties are written in camelCase, allowing dynamic and programmatic styling inside components.

!!!
! Inline Styles Must Be Objects

! ❌ Wrong

<div style="color:red">Hello</div>

! ✅ Correct

<div style={{ color: "red" }}>Hello</div>

! Outer {} = JavaScript expression
! Inner {} = JavaScript object
*/