import React, { useState } from 'react'
import AddUser from './components/AddUser';
import DisplayUser from './components/DisplayUser';

const App = () => {

  let [user, setUser] = useState('');

  return (
    <>
    <AddUser setUser={setUser}/>
    <DisplayUser user={user}/>
    </>
  )
}

export default App

/*
!!! What is Lifting State Up in React?

! Lifting State Up means moving state from a child component to a common parent component so that multiple child components can share and use the same data.
! When two or more components need access to the same state, instead of keeping separate states in each child, you store the state in their parent and pass it down through props.

!! Lifting State Up in ReactJS

Lifting state up in ReactJS is the process of moving shared state to a common parent so multiple child components can access, update, and stay synchronized with the same data efficiently.

? Move shared state to the nearest common parent component.
? Parent holds the state instead of duplicating it in child components.
? Pass state and update functions to child components via props.
? Ensures consistency, synchronization, and easier state management in React.

! Purpose of Lifting State Up in React
Lifting state up in React is used to keep shared state centralized in a parent component, ensuring consistency, enabling communication between siblings, and making state management easier as the app grows.

? Synchronization: Keeps multiple components in sync with shared state.
? Sibling Communication: Allows siblings to share and update data via the parent.
? Centralized State: Simplifies debugging, maintenance, and updates.
? Consistency: Prevents state duplication and ensures a single source of truth.
? Implementing Lifting State Up in React

! Lifting state up involves a few simple steps:

? Identify the shared state: Determine which state values need to be accessed or modified by multiple components.
? Move the state to the common ancestor: Find the nearest parent component that can hold the state.
? Pass the state as props: The parent component will pass the shared state and any relevant handler functions (e.g., for updating the state) to its child components via props.
? Handle state updates: The child components will use the passed-down functions to update the parent component’s state.

! Example 1: If we have 2 components in our App.

A -> B where, A is parent of B.
keeping the same data in both Component A and B might cause inconsistency of data. 
Example 2: If we have 3 components in our App.

        A
       / \
      B   C
Component B has some data that component C also needs.
! Since components can only communicate with their parent or child, C cannot access B’s data directly.
*/

/*
! Sharing State Between Components
Sometimes, you want the state of two components to always change together. To do it, remove state from both of them, move it to their closest common parent, and then pass it down to them via props. This is known as lifting state up, and it’s one of the most common things you will do writing React code.

! To coordinate these two panels, you need to “lift their state up” to a parent component in three steps:

? Remove state from the child components.
? Pass hardcoded data from the common parent.
? Add state to the common parent and pass it down together with the event handlers.

!! A single source of truth for each state

! For each unique piece of state, you will choose the component that “owns” it. This principle is also known as having a “single source of truth”. 
! It doesn’t mean that all state lives in one place—but that for each piece of state, !! there is a specific component that holds that piece of information !!. Instead of duplicating shared state between components, lift it up to their common shared parent, and pass it down to the children that need it.

Your app will change as you work on it. It is common that you will move state down or back up while you’re still figuring out where each piece of the state “lives”. This is all part of the process!

! Example 
! Accordion (closest common parent)
Panel
Panel
! In this example, it’s the Accordion component. Since it’s above both panels and can control their props, it will become the “source of truth” 

! Recap

When you want to coordinate two components, move their state to their common parent.
Then pass the information down through props from their common parent.
Finally, pass the event handlers down so that the children can change the parent’s state.
It’s useful to consider components as “controlled” (driven by props) or “uncontrolled” (driven by state).
*/

/*
! What is Lifting State Up in React?

! Lifting State Up means moving state from a child component to a common parent component so that multiple child components can share and use the same data.
! When two or more components need access to the same state, instead of keeping separate states in each child, you store the state in their parent and pass it down through props.

! Problem Without Lifting State

Suppose you have two components:


InputBox


DisplayText


! When the user types in InputBox, you want DisplayText to show the same text.

❌ If both components have their own state, they cannot share data.

Flow Diagram

          App (Parent)
        ----------------
        text state lives here
               |
      --------------------
      |                  |
      ▼                  ▼
 InputBox         DisplayText
 (updates)         (reads)

! State is stored in App.


! InputBox updates the state.


! DisplayText receives the updated value.


! Both components stay synchronized.


! When Should You Lift State Up?

Lift state up when:
? ✅ Multiple components need the same data.
? ✅ One component updates data and another displays it.
? ✅ Components need to stay synchronized.

! Examples:

Search input + search results

Shopping cart

Form fields with live preview

Dark/Light theme toggle

User profile data shared across components


! Interview Definition
! Lifting State Up is a React pattern where state is moved from child components to their closest common parent component so that multiple components can share and synchronize the same data through props.

!!!! Is nowdays lifting state up is used or its replace?

! Modern React Rule of Thumb

| Situation                                | Recommended Approach    |
| ---------------------------------------- | ----------------------- |
!| State used by 2–3 related components     | Lifting State Up        |
| State needed across a section of the app | Context API             |
!| Complex global application state         | Redux Toolkit / Zustand |
| Reusable component logic                 | Custom Hooks            |

! Interview Answer

! Lifting State Up is not outdated and has not been replaced. It is still the recommended approach when a few sibling components need to share state. For larger applications where prop drilling becomes difficult, developers often use Context API, Redux Toolkit, Zustand, or other state management solutions. The modern React approach is to start with lifting state up and only introduce more advanced state management when necessary.
*/

/*
!------------------------------------------------------------------------------------------------------------------------
! ReactJS State vs Props

! In React, State allows components to manage and update internal data dynamically, while Props enables data to be passed from a parent component to a child component. Understanding their differences and use cases is essential for developing efficient React applications.

!!!! State in React !!!!
! State is a built-in object in React components that holds data or information about the component. It is mutable, which means it can be updated within the component using the setState method in class components or the useState hook in functional components.

State is local to the component and cannot be accessed by child components unless passed down as props.
It is mutable, meaning it can change over time based on user interactions or API responses.
When state updates, the component re-renders to reflect the changes.
Managed using useState in functional components or this.setState in class components.

import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

export default Counter;
Output

! count
! State in React

In this example

useState(0) initializes the state variable count with the value 0.
The setCount function is used to update the state whenever the button is clicked. This triggers a re-render, updating the displayed count.
Props in React
Props (short for Properties) are used to pass data from a parent component to a child component. Unlike state, props are immutable, meaning they cannot be modified within the receiving component.

! Props allow components to be reusable and dynamic.
!!! Props are read-only and cannot be changed by the child component.
! They help in data communication between components.
! Passed as attributes in JSX elements.

import React from 'react';

function Greeting({ name }) {
    return <h1>Hello, {name}!</h1>;
}

function App() {
    return <Greeting name="Jiya" />;
}

export default App;
Output

Props-in-React
Props in React
Here, the Greeting component receives a prop named name and displays a personalized message. The App component passes the value "Jiya" as a prop.

! When to Use State and Props?
Use State when you need to manage data that can change over time within a component (e.g., form inputs, counters, UI toggles).
Use Props when you need to pass data from a parent component to a child component to make components reusable.

Difference between State and Props in React

| Aspect               | State                                                                         | Props                                                              |
| -------------------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| **Definition**       | Data managed by a component that can change over time.                        | Data passed from a parent component to a child component.          |
| **Modification**     | Can be changed by the component itself.                                       | Cannot be changed by the receiving component; props are read-only. |
| **Communication**    | Used to manage data within a component.                                       | Used to communicate data from parent to child components.          |
| **Re-rendering**     | Updating state triggers a re-render of that component.                        | When props change, the child component re-renders.                 |
| **Ownership**        | Owned and controlled by the component itself.                                 | Owned and controlled by the parent component.                      |
| **Component Type**   | Used in class components (`this.state`) and function components (`useState`). | Used in both class and function components.                        |
| **Effect on Parent** | Changing state affects only the component that owns the state.                | Child cannot directly change props; parent controls them.          |
| **Responsibility**   | Managed by the component itself.                                              | Managed by the parent component.                                   |
| **Mutability**       | Mutable (can be updated).                                                     | Immutable (read-only in child).                                    |
| **Purpose**          | Store data that changes during the component lifecycle.                       | Pass data, functions, or configuration to child components.        |
| **Example**          | `const [count, setCount] = useState(0);`                                      | `<Button color="blue" onClick={handleClick} />`                    |

Easy Way to Remember

| State                              | Props                                 |
| ---------------------------------- | ------------------------------------- |
!| **State = Component's own memory** | **Props = Data received from parent** |
| Can change                         | Cannot change in child                |
| Managed inside component           | Managed by parent                     |
| `useState()`                       | Passed as attributes                  |


!!! Named vs Default import

Quick Comparison

| Feature           | Default Import              | Named Import                    |
| ----------------- | --------------------------- | ------------------------------- |
| Export Syntax     | `export default`            | `export`                        |
| Curly Braces `{}` | ❌ No                        | ✅ Yes                           |
!| Number per file   | One                         | Multiple                        |
!| Import Name       | Can be anything             | Must match export name          |
| Example           | `import User from "./User"` | `import { add } from "./utils"` |

! Easy Rule
export default → import ComponentName from "..."
export const/function → import { Name } from "..."

! State vs Hook in React

A state is data that changes over time, while a hook is a function that lets React components use features such as state, effects, refs, and context.

! State is a built-in object in React components that holds data or information about the component.

State

! State is the component's memory. It stores values that can change and cause the UI to update.

Here, count is the state value, and setCount updates it.

! Hook

! A hook is a special React function that adds capabilities to function components.

Hooks are not data themselves; they provide access to React features.
In React, a Hook is a special function that lets you use React features (such as state, lifecycle methods, context, etc.) inside function components.

! Definition

! Hooks are functions that allow function components to "hook into" React features.

! Simple Understanding

? Think of a Hook as:

! A special React function that gives extra powers to function components.

! Without Hooks, a function component is mostly just UI.

! With Hooks, it can:

Store data (state)
React to changes
Fetch APIs
Access DOM elements
Share logic with other components

! That's why Hooks are one of the most important concepts in modern React.

! Why do we use Hooks?

Hooks let function components:

Manage state (useState)
Handle side effects (useEffect)
Access context (useContext)
Improve performance (useMemo, useCallback)
Manage complex state (useReducer)
Create reusable logic (Custom Hooks)

Built-in React Hooks
! Hooks let you use different React features from your components. You can either use the built-in Hooks or combine them to build your own

Relationship
useState is a hook that creates and manages state.

In this example:

useState is the hook.

count is the state.

setCount is the function returned by the hook to update the state.

Quick Comparison
Easy way to remember

State = the information your component remembers.

Hook = the tool that lets your component use that information and other React features.

! What is JSX?

JSX (JavaScript XML) is a syntax that lets you write HTML-like code inside JavaScript.

Example:

const element = <h1>Hello World</h1>;

! JSX is not understood directly by browsers. Tools like Babel convert it into JavaScript:

const element = React.createElement("h1", null, "Hello World");

! What is a Component?

! A Component is a reusable piece of UI.

! Think of a component as a JavaScript function that returns JSX.

! Example:

function Welcome() {
  return <h1>Welcome to React</h1>;
}

! JSX vs Component
| JSX                       | Component                                                |
| ------------------------- | -------------------------------------------------------- |
| Syntax for writing UI     | Reusable UI block                                        |
| Looks like HTML           | Usually a function                                       |
| Returns UI elements       | Returns JSX                                              |
| Example: `<h1>Hello</h1>` | Example: `function Welcome() { return <h1>Hello</h1>; }` |

function Welcome() → Component
<h1>Hello</h1> → JSX

So:

! JSX is the code used to describe UI, and a Component is a reusable function that returns JSX.

! whay named import of useState?
useState is imported as a named import because React exports it as a named export, not a default export.

React exports useState like this
export function useState() {
  / React code
}

React has one default export
import React from "react";

Here React is the default export.

! And hooks are named exports:

import React, { useState, useEffect, useRef } from "react";
React → default import
useState → named import
useEffect → named import
useRef → named import

! what is vite
Vite (pronounced "veet", French for "fast") is a modern frontend build tool used to create React, Vue, and other web applications quickly.

It provides:

Fast project setup
Fast development server
Hot Module Replacement (HMR)
Optimized production builds


! What is children Prop in React?

children is a special prop in React that represents the content placed between a component's opening and closing tags.

! Example

function Card(props) {
  return <div>{props.children}</div>;
}

! Usage:

<Card>
  <h2>Hello</h2>
  <p>Welcome to React</p>
</Card>

! React automatically passes everything inside <Card>...</Card> as the children prop.

! Internally, it is similar to:

<Card
  children={
    <>
      <h2>Hello</h2>
      <p>Welcome to React</p>
    </>
  }
/>

! Using Destructuring

! Instead of props.children:

function Card({ children }) {
  return <div>{children}</div>;
}

! Usage remains the same:

<Card>
  <h2>Hello</h2>
</Card>
Why Use children?

! It makes components reusable and flexible.

! Without children:

function Card() {
  return (
    <div>
!      <h2>Fixed Content</h2>
    </div>
  );
}

! The content is always fixed.

! With children:

function Card({ children }) {
!  return <div>{children}</div>;
}

! Now you can put anything inside:

<Card>
  <h2>User Profile</h2>
</Card>

<Card>
  <button>Login</button>
</Card>

!!!! Real-World Example !!!!

function Modal({ children }) {
  return (
    <div className="modal">
      {children}
    </div>
  );
}

! Usage:

<Modal>
  <h1>Delete Account?</h1>
  <button>Confirm</button>
</Modal>

! The Modal component provides the layout, while the content comes from children.

! Easy Definition

!! children is a special React prop that contains whatever JSX is written between a component's opening and closing tags. It is used to create reusable wrapper components.

<Component>
  Some JSX
</Component>

! Here, "Some JSX" becomes the value of children

! types of conditional renering and when use ?

! Which One Should You Use?
| Method           | Use When                          |   |                                |
| ---------------- | --------------------------------- | - | ------------------------------ |
| `if...else`      | Complex logic                     |   |                                |
| `? :` Ternary    | Simple if-else                    |   |                                |
| `&&`             | Show something only if true       |   |                                |
| `                |                                   | ` | Provide fallback/default value |
| `switch`         | Multiple cases                    |   |                                |
| Element Variable | Large JSX blocks                  |   |                                |
| Early Return     | Loading, error, validation checks |   |                                |

!! Most Used in Real Projects !!
Early Return → Loading/Error states
Ternary (? :) → Two UI choices
Logical AND (&&) → Optional UI
Switch → Multiple roles/statuses

! These four cover the vast majority of React conditional rendering scenarios.

! Diff between real dom and virtual dom ?
! Real DOM vs Virtual DOM

| Feature      | Real DOM                            | Virtual DOM                            |
| ------------ | ----------------------------------- | -------------------------------------- |
| What is it?  | Actual DOM in the browser           | Lightweight JavaScript copy of the DOM |
| Update Speed | Slower                              | Faster                                 |
| Re-rendering | Updates the actual DOM directly     | Updates Virtual DOM first              |
| Performance  | More expensive for frequent updates | More efficient                         |
| Manipulation | Browser manipulates DOM nodes       | React manipulates JS objects           |
| Used By      | Vanilla JavaScript                  | React                                  |

!! Real DOM

! The Real DOM is the actual HTML structure rendered by the browser.

! Example:

<div>
  <h1>Count: 0</h1>
</div>

! When data changes, the browser may need to recalculate layout, repaint, and update the page.

document.getElementById("count").innerText = 1;

! Direct DOM operations can become expensive in large applications.


!! Virtual DOM

! The Virtual DOM is a JavaScript representation of the Real DOM maintained by React.

! Example (conceptually):

{
  type: "h1",
  props: {
    children: "Count: 0"
  }
}

! When state changes:

React creates a new Virtual DOM tree.
React compares it with the previous Virtual DOM tree (diffing).
React finds only the changed parts.
React updates only those parts in the Real DOM.

!!! how to see  real and virtual dom ? !!!

How to See the Real DOM?

! The Real DOM is easy to see in the browser.

Method 1: Inspect Element
Open your React app.
Press F12 or Right Click → Inspect.
Open the Elements tab.

You'll see the actual HTML rendered by the browser:

!<div id="root">
  <div>
    <h1>Count: 0</h1>
    <button>Increment</button>
  </div>
</div>

! This is the Real DOM.

! Method 2: Console

Select an element in the Elements tab and run:

$0

! or

document.getElementById("root")

! This returns a real DOM node.

!!! How to See the Virtual DOM? !!!

! The Virtual DOM is an internal React data structure, so you don't see it directly in the Elements tab.

! Best Way: React Developer Tools

Install:

! React Developer Tools (Chrome)

After installation:

Open your React app.
Press F12.
Open the Components tab.

! You'll see your React component tree:

App
 ├─ Header
 ├─ Counter
 └─ Footer

! This view is based on React's internal component structure and is the closest practical way to inspect what React is managing.

! Simple Visualization

! Real DOM (Browser)
<div>
  <h1>Count: 0</h1>
</div>

! Virtual DOM (Conceptually)
{
  type: "div",
  props: {
    children: [
      {
        type: "h1",
        props: {
          children: "Count: 0"
        }
      }
    ]
  }
}

! React stores structures similar to this internally.

! Interview Answer

? Real DOM → View in Browser DevTools → Elements tab.

? Virtual DOM → Cannot be viewed directly as HTML; use React Developer Tools → Components tab to inspect the React component tree that React uses to manage UI updates.


!!! What is Batching in React? !!!

! Batching means React groups multiple state updates together and performs one re-render instead of many re-renders.

! This improves performance.

! Without Batching (Concept)

Imagine React re-rendered after every update:

setCount(c => c + 1);
setCount(c => c + 1);
setCount(c => c + 1);

React would re-render:

Render 1
Render 2
Render 3

! This would be inefficient.

! With Batching

! React groups the updates:

setCount(c => c + 1);
setCount(c => c + 1);
setCount(c => c + 1);

! React processes them together:

0 → 1 → 2 → 3

and then performs:

! Only 1 re-render

! Example

import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(c => c + 1);  //! c or prevState any varible name for this parameter. Here previous state.
    setCount(c => c + 1);
    setCount(c => c + 1);
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleClick}>+3</button>
    </>
  );
}

When you click the button:

count = 0

After batching:

count = 3

and React re-renders only once.

! Why Use Functional Updates?

! ❌ This can give unexpected results:

setCount(count + 1);
setCount(count + 1);
setCount(count + 1);

! All three calls may use the same current value of count.

If count is 0:

setCount(1)
setCount(1)
setCount(1)

! Final value:

1

! ✅ Correct:

setCount(c => c + 1);  //! c or prevState any varible name for this parameter
setCount(c => c + 1);
setCount(c => c + 1);

! Each update receives the latest state.

! Final value:

3

! We use prevState when the next state depends on the previous state. It ensures React always uses the latest state value, especially when multiple state updates are batched together. Examples include counters, toggles, adding items to arrays, and updating objects based on existing state.

!!! Rules of JSX !!!

! 1. Return a Single Parent Element

! ❌ Wrong

return (
  <h1>Hello</h1>
  <p>Welcome</p>
);

! ✅ Correct

return (
  <div>
    <h1>Hello</h1>
    <p>Welcome</p>
  </div>
);

! Or use a Fragment:

return (
  <>
    <h1>Hello</h1>
    <p>Welcome</p>
  </>
);

! 2. Close All Tags

! JSX requires every tag to be closed.

! ❌ Wrong

<img src="logo.png">
<input>

! ✅ Correct

<img src="logo.png" />
<input />

! 3. Use className Instead of class

! class is a JavaScript keyword.

! ❌ Wrong

<div class="box">Hello</div>

! ✅ Correct

<div className="box">Hello</div>

! 4. Use htmlFor Instead of for

! ❌ Wrong

<label for="name">Name</label>

! ✅ Correct

<label htmlFor="name">Name</label>

! 5. JavaScript Goes Inside {}

! ❌ Wrong

<h1>Hello name</h1>

! ✅ Correct

const name = "Touseef";

<h1>Hello {name}</h1>

! You can also use expressions:

<h1>{5 + 5}</h1>

! 6. Use Camel Case for Attributes

! ❌ Wrong

<button onclick={handleClick}>Click</button>

! ✅ Correct

<button onClick={handleClick}>Click</button>

! Another example:

<div tabIndex="0"></div>

! 7. Inline Styles Must Be Objects

! ❌ Wrong

<div style="color:red">Hello</div>

! ✅ Correct

<div style={{ color: "red" }}>Hello</div>

! Outer {} = JavaScript expression
! Inner {} = JavaScript object

! 8. Comments Use 

! ❌ Wrong

<!-- Comment -->


! 9. Component Names Must Start with a Capital Letter

! ❌ Wrong

function button() {
  return <button>Click</button>;
}

<button />

! ✅ Correct

function Button() {
  return <button>Click</button>;
}

! <Button />

! React treats lowercase tags as HTML elements and uppercase names as components.

! 10. JSX Can Return Only Expressions Inside {}

! ✅ Valid:

<h1>{name}</h1>
<h1>{count + 1}</h1>

! ❌ Invalid:

! <h1>{if (true) {}}</h1>

! Use a ternary instead:

! <h1>{isLoggedIn ? "Welcome" : "Login"}</h1>

! Important JSX Rules:

Return a single parent element.
Close all tags.
Use className instead of class.
Use htmlFor instead of for.
Write JavaScript inside {}.
Use camelCase attributes (onClick, tabIndex).
Inline styles must be JavaScript objects.
Use // comment // for comments.
Component names start with a capital letter.
Only expressions can be used inside {}.

!!!!!! What is State in React? !!!!!!!!

! State is a component's memory. It stores data that can change over time, and when the state changes, React re-renders the component.

const [count, setCount] = useState(0);

! count

! is the state value.

! setCount

! is the state updater function.


| Part       | What it is               |
| ---------- | ------------------------ |
| `useState` | Hook                     |
!| `count`    | State                    |
| `setCount` | Function to update state |
| `0`        | Initial state value      |

!!! useState , 2nd arg function name can be anyname, it works fine.

!!! What is a Hook in React? !!!

! A Hook is a special React function that lets function components use React features such as:

? State
? Side effects
? Refs
? Context
? Performance optimizations

! Examples of Hooks
useState()
useEffect()
useRef()
useContext()
useMemo()
useCallback()

! Quick Comparison

| Feature                        | State                       | Hook                                  |
| ------------------------------ | --------------------------- | ------------------------------------- |
!| What is it?                    | Data that changes over time | Function that provides React features |
| Stores values?                 | ✅ Yes                       | ❌ No                                  |
| Causes re-render when updated? | ✅ Yes                       | Depends on the hook                   |
| Example                        | `count`                     | `useState()`                          |
| Purpose                        | Hold component data         | Add React functionality               |

! Interview Answer

! State is data managed by a component that can change over time and causes the component to re-render when updated. 
! State is a component's memory. It stores data that can change over time, and when the state changes, React re-renders the component.
! A Hook is a special React function that allows function components to use React features such as state, effects, refs, and context. For example, useState is a Hook that creates and manages state.

! What is a Component in React?

! A Component is a reusable piece of UI (User Interface).

! Think of a component as a JavaScript function that returns JSX.

! Interview Definition

? A component is a reusable and independent piece of UI in React. It is usually a JavaScript function that returns JSX. Components help break the UI into smaller, reusable, and maintainable pieces.

!!!!!!!!! Why Do We Use State Variables Instead of Normal JavaScript Variables in React? !!!!!!!!!!!!!!

Because React tracks state changes and re-renders the UI, but it does not track normal JavaScript variables.

! Changing a normal variable does not trigger a re-render.

! Normal JavaScript Variable ❌

function Counter() {
  let count = 0;

  const increment = () => {
    count++;
    console.log(count);
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
    </>
  );
}

! When you click:

Console: 1
Console: 2
Console: 3

! But the UI still shows:

! 0

! Why?

! Because React doesn't know that count changed.

! Changing a normal variable does not trigger a re-render.

!!! State Variable ✅

import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </>
  );
}

! When you click:

0 → 1 → 2 → 3

! The UI updates automatically.

!! Why?

! Because setCount() tells React:

!! "The state changed. Re-render the component."

?? Another Important Difference

?? Normal variables are recreated on every render.

function App() {
  let count = 0;

  console.log("Rendered");

  return <button>Click</button>;
}

! Every time the component renders:

count = 0

! again.

! So normal variables do not persist across renders.

! State Persists Between Renders

const [count, setCount] = useState(0);

! React stores this value outside the function and remembers it between renders.

! Comparison
| Feature                 | Normal Variable | State Variable |
| ----------------------- | --------------- | -------------- |
| Stores data             | ✅ Yes           | ✅ Yes          |
!| Persists across renders | ❌ No            | ✅ Yes          |
!| Triggers re-render      | ❌ No            | ✅ Yes          |
| React tracks changes    | ❌ No            | ✅ Yes          |
!| Used for UI data        | ❌ No            | ✅ Yes          |

! When to Use Each?

! Use Normal Variables For

const taxRate = 18;
const fullName = firstName + lastName;

! Values that don't need to update the UI.

! Use State For

const [count, setCount] = useState(0);
const [users, setUsers] = useState([]);
const [isOpen, setIsOpen] = useState(false);

! Values that change and should update the UI.

! Interview Answer

! We use state variables instead of normal JavaScript variables because React tracks state changes and re-renders the component when state is updated. Normal variables do not trigger re-renders and are recreated on every render, so they cannot reliably store UI-related data. State persists across renders and keeps the UI in sync with the data.

normal variables do not re renders the compoenent while updation but state do and react do not update UI without re render, suppose on onclick button data not updated on UI becoause of using normal JS variable. so we use state over normal js variable. but it updates in  console if we use normal js variable while onclick on button it show in console if we log , but not on UI becoz component does not re renders while updation because of not using state varible.

! Note-
! 1. changing variables doesn't make react update the screen (no re render).
! 2. Variables reset every time the component renders (no persistence).

!!! Reconciliation =
!👉 Diff old vs new virtual DOM
👉 Apply minimal updates to real DOM

!-------------------------------------------------------------------------------------------------------------------------------------
!!!!!! React Fiber !!!!!!!

! React Fiber is the core reconciliation engine introduced in React 16 to improve rendering performance and make UI updates smoother. It rewrites React’s rendering system to efficiently manage and prioritize update tasks.

! React Fiber is React’s reconciliation engine introduced in React 16. It is a complete rewrite of React’s internal rendering algorithm designed to make UI updates more efficient, interruptible, and prioritized.

!-------------------------------------------------------------------------------------
!!!!!!!!!!!! Why React Fiber was created ? !!!!!!!!!!!!!!!!!!!

? Before Fiber, React used a synchronous rendering model:

? When state changed, React would process the entire component tree in one go.
? Large updates could block the main thread, causing dropped frames and unresponsive UIs.

! Fiber solves this by breaking rendering work into smaller units that can be paused, resumed, prioritized, or even discarded.
! Fiber Splits rendering work into small units (chunks) and prioritizes important tasks.

! Key Concepts

! 1. Fiber Node

! A Fiber is a JavaScript object representing a React component instance.

? A Fiber node contains information such as:

{
  type: MyComponent,
  props: {...},
  stateNode: ...,
  child: ...,
  sibling: ...,
  return: ...,
  alternate: ...
}

! Fibers form a linked-tree structure instead of relying solely on the JavaScript call stack.

! 2. Incremental Rendering

? Instead of:

? Render entire tree
  ↓
? Commit changes

! Fiber does:

? Work on Component A
? ↓
? Pause if needed
? ↓
? Work on Component B
? ↓
? Resume later
? ↓
? Commit changes

! This allows React to keep the browser responsive.

! 3. Prioritization

!!!! Different updates can have different priorities: !!!!

? User input → highest priority
? Animations → high priority
? Data loading updates → lower priority
? Background work → lowest priority

! React can interrupt low-priority work to handle more important updates first.

! 4. Double Buffering

! Fiber maintains two trees:

! Current Tree (what's on screen)
! Work-In-Progress Tree (being prepared)

? When rendering finishes:

! Current Tree
      ↓ swap
! Work-In-Progress Tree

! This makes updates efficient and consistent.

!!! Fiber Phases !!!

! 1. Render Phase (Reconciliation)

! React:

Builds the work-in-progress tree
Calculates changes
Can be interrupted
! Component → Virtual DOM → Diffing

! 2. Commit Phase

! React:

! Applies DOM mutations
Runs lifecycle methods
Runs effects

! This phase is synchronous and cannot be interrupted.

DOM Updates
↓
Layout Effects
↓
Passive Effects

! Relationship to Concurrent React

Fiber is the foundation for features such as:

Concurrent Rendering
Suspense
Transitions (startTransition)
Automatic batching
Selective hydration
Streaming SSR

! Without Fiber, these modern React features would not be possible.

! Simplified Example

Suppose a page contains:

<App>
  <SearchBox />
  <LargeList />
</App>

! User types into SearchBox.

!! With old React:

Render SearchBox
Render LargeList
Update DOM

! The UI may freeze.

!! With Fiber:

Render SearchBox (high priority)
Pause
Update input immediately
Resume LargeList rendering later

! Result: smoother user experience.

! Interview Definition

! React Fiber is React's reconciliation architecture that represents components as Fiber nodes and enables incremental, interruptible, and prioritized rendering, forming the foundation for Concurrent React features.


!! React Fiber is the core reconciliation engine introduced in React 16 to improve rendering performance and make UI updates smoother. It rewrites React’s rendering system to efficiently manage and prioritize update tasks.

! A Fiber is a plain JavaScript object representing a unit of work in React’s rendering process.
? It enhances the reconciliation algorithm by breaking rendering into smaller, prioritized tasks.
? Enables better performance optimizations and smoother, more responsive UI updates.

!! Goals of React Fiber

! React Fiber is designed to improve animations and UI responsiveness by managing rendering work more efficiently. It introduces a smarter way to handle updates compared to the older reconciler.

!!!! Splits rendering work into small units (chunks) and prioritizes important tasks. !!!!
! Allows work to be paused, resumed, reused, or aborted when necessary.
Uses an asynchronous rendering model, unlike the old synchronous reconciler.

! Old reconciler
The Stack Reconciler was React’s old rendering engine, used before Fiber. It worked synchronously like a stack—once rendering started, it had to finish completely without interruption.

Synchronous processing: Rendering could not be paused or interrupted until the stack was empty.
! UI delays: User interactions (like typing in a text field) could lag if heavy rendering or network updates were in progress.
Limited responsiveness: Background updates blocked high-priority tasks, leading to poor user experience.

!! These limitations led to the need for a more flexible system, which is why React Fiber was introduced.

!! Features of Fiber
These are some features listed below.

! While fiber comes with different significant performance increases, it's not really about them. It's about the fundamental way React works.
Fiber makes React faster but it makes it smarter as well.
Fiber also improves the development of react and makes it so adding a new feature is significantly easier.

! Working of React fiber
! React Fiber is essentially a plain JavaScript object that represents a unit of work in the rendering process. React processes these fiber units during the render phase, where all the work is prepared and completed (finishWork). Finally, in the commit phase, React applies the processed changes to the DOM, making them visible to the user.

! 1. Render phase
! The Render Phase in React Fiber is responsible for preparing all the work needed to update the UI. This phase runs asynchronously and is not directly visible to the user.

! React processes fiber units of work during this phase.
! Supports task prioritization, pausing, resuming, or discarding work.
Internal methods like beginWork() and completeWork() handle fiber processing.

! 2. Commit phase
The Commit Phase is the stage where React applies all the prepared changes to the DOM. This phase is synchronous, visible to the user, and cannot be interrupted.

Uses commitWork() to apply updates directly to the DOM.
React uses time-slicing to prioritize work, handling high-priority. tasks first.
High-priority tasks (like animations) use requestAnimationFrame(), while low-priority tasks use requestIdleCallback().
If these browser APIs are unavailable, React falls back to polyfills to ensure consistent behavior.

! Structure of React Fiber: Let's start with a simple example. Whenever we change state that is work, whenever there is a life cycle function that has to be called that is work, whenever there is an update that leads to change in the DOM that is work. We can see that work heavily depends on the fiber.


function App() { // App 
    return (
        <div className="wrapper">// W
            <h2 className="h2">Heading h2</h2>
            <h3 className="h3">Heading h3</h3>
            <h4 className="h4">Heading h4</h4>
        </div>

    );
}
ReactDOM.render(<App />, 
    document.getElementById('root')); // HostRoot
Output

! Click to enlarge

! Fiber renders h2, h3, and h4 in a sequence. 
! This code shows div us root directory. Imagine a fiber tree starting with node div. This node has a child h2, h3, and h4. Fiber renders div first because it is a root, then it renders h2, h3, and h4 respectively.  h2, h3, and h4 are siblings of each other. 

! Fiber Tree
? Fiber Tree in React consists of two separate trees that help manage UI updates safely and efficiently.

! Current Tree represents what is currently rendered on the screen.
! WorkInProgress Tree is where React prepares all upcoming changes.

!!! After processing is complete, React swaps the pointers, making the workInProgress tree the new current tree without causing UI inconsistency.



!----------------------------------------------------------------------------------------------------

!!! Reconcilation or diif algo or react fiber , which currently use ? !!!

? Modern React uses the Fiber Architecture internally. Fiber performs Reconciliation, and during reconciliation it uses React's Diffing Algorithm to determine what has changed in the Virtual DOM and update the Real DOM efficiently.
? Fiber is the current architecture, while Reconciliation is the process and Diffing is the algorithm used inside that process.
? React Fiber is React’s reconciliation engine introduced in React 16. It is a complete rewrite of React’s internal rendering algorithm designed to make UI updates more efficient, interruptible, and prioritized.

! In modern React (React 16+ and current React 18/19), all three are related and are used together, but they are not the same thing.
| Concept           | Currently Used?           | Purpose                                                    |
| ----------------- | ------------------------- | ---------------------------------------------------------- |
| Reconciliation    | ✅ Yes                     | Process of comparing old UI and new UI                     |
| Diffing Algorithm | ✅ Yes                     | Algorithm used during reconciliation to find changes       |
!| React Fiber       | ✅ Yes (Core Architecture) | Internal engine that performs reconciliation and rendering |

! How they work together

!! When state changes:

? React creates a new Virtual DOM.
? Reconciliation starts.
? During reconciliation, React uses the Diffing Algorithm to compare the old and new Virtual DOM.
? The React Fiber architecture manages this entire process efficiently and updates only the changed parts of the real DOM.

! Example

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </>
  );
}

! When count changes:

? New Virtual DOM is created.
? Reconciliation begins.
? Diffing Algorithm finds that only <h1> changed.
? React Fiber schedules and performs the update.
? Real DOM updates only the text inside <h1>.

! Interview Answer

! What is currently used in React?

!! Modern React uses the Fiber Architecture internally. Fiber performs Reconciliation, and during reconciliation it uses React's Diffing Algorithm to determine what has changed in the Virtual DOM and update the Real DOM efficiently.

! So the hierarchy is:

React Fiber
    ↓
Reconciliation
    ↓
Diffing Algorithm
    ↓
DOM Updates

! Fiber is the current architecture, while Reconciliation is the process and Diffing is the algorithm used inside that process.
*/