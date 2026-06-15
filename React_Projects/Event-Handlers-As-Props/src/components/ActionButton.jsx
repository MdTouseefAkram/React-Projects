import React from 'react'

const ActionButton = ({text, onClick}) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

export default ActionButton

/*
! Props for communication
For parent to child communication , we use props
! For child to parent communication, we also use props
! But this time, we pass event handlers as props.

! Event handlers as props summary
When you need a child component to communicate with its parent, you pass event handlers as props.

The child says something happened and the parent decides what to do about it.

You will use it every time ,you build a reusable component that need different behaviors in different places.
*/

/*
!---------------------------------------------------------------------
! Passing Event Handlers as Props
? Event handlers can be passed down to child components as props. This allows child components to communicate back to the parent and trigger actions in the parent when events occur.

! Passing event handlers as props 
Often you’ll want the parent component to specify a child’s event handler. Consider buttons: depending on where you’re using a Button component, you might want to execute a different function—perhaps one plays a movie and another uploads an image.

! Event Handlers as Props in React

! Event Handler as Prop means passing a function from a parent component to a child component through props, so the child can call that function when an event occurs.

! Parent Component

import Button from "./Button";

function App() {
  const handleClick = () => {
    alert("Button Clicked!");
  };

  return (
    <div>
      <Button onClick={handleClick} />
    </div>
  );
}

export default App;

! Child Component

function Button({ onClick }) {
  return (
    <button onClick={onClick}>
      Click Me
    </button>
  );
}

export default Button;

! How It Works

! Step 1

! Parent creates a function:

const handleClick = () => {
  alert("Button Clicked!");
};

! Step 2

! Parent passes it as a prop:

? <Button onClick={handleClick} />

! Here:

! onClick = handleClick

! Step 3

! Child receives it:

? function Button({ onClick })

! Step 4

! Child attaches it to an event:

? <button onClick={onClick}>

! When the button is clicked:

onClick()

! runs, which actually calls:

handleClick()

! from the parent.

! Why Use Event Handlers as Props?

It allows the parent component to control what happens while the child component only handles the UI.

! Child (Reusable)

function Button({ onClick, text }) {
  return <button onClick={onClick}>{text}</button>;
}

! Parent 1

<Button
  text="Delete"
  onClick={() => console.log("Delete")}
/>

! Parent 2

<Button
  text="Save"
  onClick={() => console.log("Save")}
/>

! Same button component, different behavior.

! Real-Life Example

function App() {
  const buyProduct = () => {
    console.log("Product Purchased");
  };

  return <ProductCard onBuy={buyProduct} />;
}

!function ProductCard({ onBuy }) {
  return (
    <button onClick={onBuy}>
      Buy Now
    </button>
  );
}

! The child (ProductCard) doesn't know what "buying" means. It simply calls the function provided by the parent.

! Rule
! When a child component needs to notify the parent that something happened (button click, form submit, delete action, etc.), pass an event handler function as a prop from the parent to the child. This is a very common React pattern.

! Event Handlers as Props are still heavily used today in React. They are a fundamental React pattern and there is no replacement for most parent-to-child event communication.

Interview Answer

! Q: Are event handlers as props still used nowadays?

Answer:
! Yes. Event handlers as props are a core React pattern and are widely used in modern React applications. They are the standard way for a child component to trigger actions defined in a parent component. Context API and state management libraries can help avoid prop drilling, but they do not replace event handlers as props for normal parent-child communication.

*/

/*
!--------------------------------------------------------------------------------------------------------------------------------------------------------------------
! What is Event Delegation?

Event Delegation is a technique where you attach one event listener to a parent element instead of attaching event listeners to multiple child elements.

! It works because of event bubbling.

! Without Event Delegation

? Suppose you have 3 list items:

<ul>
  <li>Apple</li>
  <li>Banana</li>
  <li>Mango</li>
</ul>

! You can add a click listener to each item:

li1.addEventListener("click", handleClick);
li2.addEventListener("click", handleClick);
li3.addEventListener("click", handleClick);

! ❌ 3 event listeners are created.

! With Event Delegation

! Add only one listener to the parent:

const ul = document.querySelector("ul");

ul.addEventListener("click", (e) => {
  console.log(e.target.textContent);
});

! Now:

Click Apple → Apple
Click Banana → Banana
Click Mango → Mango

! ✅ Only 1 event listener is used.

! How does it work?

! When you click:

<li>Banana</li>

! The event first occurs on:

li

! Then bubbles up to:

ul

! The parent <ul> receives the event and can determine which child was clicked using:

e.target

! Visual Flow
Click Banana
      ↓
li
      ↓
ul   ← listener is here
      ↓
body
      ↓
document

! Because the event bubbles upward, the parent can handle it.

! Example in React

function App() {
  const handleClick = (e) => {
    console.log(e.target.textContent);
  };

  return (
    <ul onClick={handleClick}>
      <li>Apple</li>
      <li>Banana</li>
      <li>Mango</li>
    </ul>
  );
}

! Output when clicking Mango:

Mango

! Benefits

! ✅ Fewer event listeners

! ✅ Better performance for large lists

✅ Works for dynamically added elements

✅ Cleaner code

! Interview Definition

! Event Delegation is a JavaScript technique in which a single event listener is attached to a parent element to handle events from its child elements. It works using event bubbling and helps improve performance by reducing the number of event listeners.

! Difference Between Event Propagation and Event Delegation

? Many beginners confuse these two concepts, but they are different.

| Event Propagation                                       | Event Delegation                                                           |
| ------------------------------------------------------- | -------------------------------------------------------------------------- |
| Describes **how events travel** through the DOM.        | A technique that **uses event propagation** to handle events efficiently.  |
| Has two phases: **Capturing** and **Bubbling**.         | Usually implemented using the **bubbling phase**.                          |
| Browser behavior.                                       | Developer technique/pattern.                                               |
| Explains event flow.                                    | Uses event flow to reduce event listeners.                                 |
!| Example: Click on button → event bubbles to parent div. | Example: One click listener on `<ul>` handles clicks for all `<li>` items. |

! Relationship Between Them

! Event Delegation works because of Event Propagation (Bubbling).

Click li
   ↓
Event bubbles
   ↓
ul receives event
   ↓
Parent handles it
 
! Without bubbling, event delegation would not work.

!---------------------------------------------------------------------------------------

! What is Strict Mode in React?

! Strict Mode is a development-only tool in React that helps identify potential problems, unsafe code, and side effects in your application.

!! It does not affect production builds.

? How to Use It

Usually in main.jsx or index.js:

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

! What Does Strict Mode Do?

! 1. Detects Side Effects

! React intentionally runs some functions twice in development to find bugs caused by side effects.

! Example:

function App() {
  console.log("Component Rendered");

  return <h1>Hello</h1>;
}

You may see:

Component Rendered
Component Rendered

! This happens only in development mode with Strict Mode enabled.

! 2. Detects Unsafe Lifecycle Methods

? For older class components, React warns about deprecated lifecycle methods.

! 3. Warns About Deprecated APIs

It helps identify APIs that may be removed in future React versions.

! 4. Helps Find Missing Cleanup

! Example:

useEffect(() => {
  const timer = setInterval(() => {
    console.log("Running");
  }, 1000);

  return () => clearInterval(timer);
}, []);

! Strict Mode can help expose issues when effects don't clean up properly.

!!!!!! Why Does React Render Twice? !!!!!!

? In development, Strict Mode intentionally:

! Re-renders components
! Re-runs effects
! Re-runs cleanup functions

! This helps catch code that causes unexpected side effects.

Example:

useEffect(() => {
  console.log("Effect");

  return () => {
    console.log("Cleanup");
  };
}, []);

In development you may see:

Effect
Cleanup
Effect

This is expected behavior.

! Does It Affect Production?

❌ No

! Strict Mode checks run only during development.

! Production build:

! npm run build

! will not have these extra checks.

! Benefits

✅ Finds bugs early

✅ Detects side effects

✅ Encourages best practices

✅ Warns about deprecated APIs

✅ Helps prepare code for future React versions

Interview Answer

! React Strict Mode is a development-only feature that helps identify potential problems in a React application. It performs additional checks, warns about unsafe patterns, and intentionally re-renders components and effects in development to detect side effects and cleanup issues. It has no impact on production builds.
*/