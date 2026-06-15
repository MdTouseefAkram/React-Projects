// import React from 'react'
import { useEffect, useState } from "react"

const useFetch = (url) => {
    let [data, setData] = useState([]);

    useEffect(()=>{
        fetch(url)
        .then((res) => res.json())
        .then((result) => setData(result));
    },[url]);

    return data;
//   return (
//     <div>useFetch</div>
//   )
}

export default useFetch;

/*
! What is a Custom Hook in React?
A Custom Hook is a JavaScript function whose name starts with use and allows you to reuse stateful logic across multiple components.

Think of it like this:

? Component → Reuses UI
? Custom Hook → Reuses Logic
? Without Custom Hook

Suppose multiple components need:

Fetch API data
Handle loading state
Handle error state

You would write the same logic again and again.

! With Custom Hook
Write the logic once and reuse it everywhere.

! What is a Custom Hook in React?
A Custom Hook is a JavaScript function that:
Starts with the word use
Can use other React Hooks (useState, useEffect, etc.)
Allows you to reuse stateful logic across multiple components


! Why use Custom Hooks?
Without a custom hook, you might repeat the same logic in many components.

! Example: Fetching data from an API in multiple components.
! Instead of copying the same useEffect and useState code everywhere, create a custom hook once and reuse it.

Flow (Visual Representation)
Users Component
      │
      ▼
useFetch(url)
      │
      ▼
useState + useEffect
      │
      ▼
Fetch API Data
      │
      ▼
Return Data
      │
      ▼
Users Component Receives Data

! Interview Definition
! A Custom Hook is a reusable JavaScript function whose name starts with use. It allows us to extract and reuse stateful logic across multiple React components using built-in hooks such as useState, useEffect, and others.

! Built-in Hooks vs Custom Hooks
| Built-in Hooks | Custom Hooks |
| -------------- | ------------ |
| useState       | useCounter   |
| useEffect      | useFetch     |
| useReducer     | useAuth      |
| useMemo        | useTheme     |


! Key Point:
! A custom hook does not share state between components. It only shares the logic. Each component gets its own separate state.

! Interview Definition
! Custom Hook is a reusable JavaScript function that starts with use and allows us to extract and share stateful logic between React components without duplicating code.

! Why use Custom Hooks?

✅ Reuse logic
✅ Cleaner components
✅ Better code organization
✅ Easier maintenance
✅ Follows DRY (Don't Repeat Yourself)

! Examples of Custom Hooks
useCounter()
useFetch()
useLocalStorage()
useDebounce()
useWindowSize()
useTheme()

!!! V.V.I - A custom hook does not return JSX/UI. It returns data, state, and functions that components can use.
*/

/*
!------------------------------------------------------------------------------------------------------------
!! useFetch.js why .js not .jsx ?
! useFetch.js is usually .js because it contains only JavaScript logic, not JSX.

! .js File

import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((result) => setData(result));
  }, [url]);

  return data;
}

export default useFetch;

! There is no JSX like:

<div>Hello</div>

! So .js is sufficient.

! .jsx File

! Use .jsx when a file contains JSX:

function User() {
  return <h1>Hello User</h1>;
}

export default User;

! Since JSX is present, developers typically use .jsx.

! Can I use .jsx for Custom Hooks?

! Yes.

hooks/
 ├── useFetch.js

or

hooks/
 ├── useFetch.jsx

! Both will work in modern React projects (Vite, CRA, etc.).

!! V.V.I - However, the common convention is:

! Components → .jsx
! Hooks → .js
! Utilities → .js
! Services → .js

! because hooks usually contain logic only and don't return JSX.

! Interview Answer

! Custom hooks are generally stored in .js files because they contain reusable React logic (state, effects, functions) and do not return JSX. .jsx is typically used for components that render UI using JSX syntax.

!---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
! function useFetch(url) . why url ?

! In this code:

function useFetch(url) {
  / logic
}

! url is a parameter passed to the custom hook.

! It tells the hook which API endpoint to fetch data from.

! Example

const users = useFetch(
  "https://jsonplaceholder.typicode.com/users"
);

! Here:

url = "https://jsonplaceholder.typicode.com/users"

! So inside the hook

fetch(url)

! becomes:

fetch("https://jsonplaceholder.typicode.com/users")

! Why pass url as a parameter?

! Without a parameter:

function useFetch() {
  fetch("https://jsonplaceholder.typicode.com/users");
}

! This hook can fetch only users.

! But with a parameter:

function useFetch(url) {
  fetch(url);
}

!!! The same hook can fetch anything:

const users = useFetch(
  "https://jsonplaceholder.typicode.com/users"
);

const posts = useFetch(
  "https://jsonplaceholder.typicode.com/posts"
);

const comments = useFetch(
  "https://jsonplaceholder.typicode.com/comments"
);

!! Now one hook is reusable for many APIs.

Visual Flow

Component
   │
   ▼
useFetch("users-api")
   │
   ▼
url = "users-api"
   │
   ▼
fetch(url)
   │
   ▼
Users Data

Component
   │
   ▼
useFetch("posts-api")
   │
   ▼
url = "posts-api"
   │
   ▼
fetch(url)
   │
   ▼
Posts Data

!! V.V.I - That's the main purpose of the url parameter: to make the custom hook reusable for different API endpoints instead of hard-coding a single URL.

!--------------------------------------------------------------------------------------------------------------------------
! What is slice()?
slice() is used to extract a portion of an array or string without modifying the original.

! Array Example

const numbers = [10, 20, 30, 40, 50];

const result = numbers.slice(1, 4);

console.log(result);   // [20, 30, 40]
console.log(numbers);  // [10, 20, 30, 40, 50]

! Syntax
array.slice(start, end)

! start → starting index (included)
! end → ending index (excluded)

! posts.slice(0,5).map(...)
✅ First get only the first 5 posts
✅ Then map() renders those 5 posts

! Output: Only the first 5 post titles will be displayed, even if posts contains 100 items.

const posts = [
  "Post1",
  "Post2",
  "Post3",
  "Post4",
  "Post5",
  "Post6",
  "Post7"
];

posts.slice(0,5);

["Post1", "Post2", "Post3", "Post4", "Post5"]
*/

/*
!--------------------------------------------------------------------
! Custom Hooks: Sharing logic between components.
! Custom Hooks let you share stateful logic, not state itself.
! Custom Hooks let you share stateful logic but not state itself. Each call to a Hook is completely independent from every other call to the same Hook. 

! When to use custom Hooks 
You don’t need to extract a custom Hook for every little duplicated bit of code. Some duplication is fine. For example, extracting a useFormInput Hook to wrap a single useState call like earlier is probably unnecessary.
However, whenever you write an Effect, consider whether it would be clearer to also wrap it in a custom Hook.

! Recap

! Custom Hooks let you share logic between components.
! Custom Hooks must be named starting with use followed by a capital letter.
! Custom Hooks only share stateful logic, not state itself.
You can pass reactive values from one Hook to another, and they stay up-to-date.
All Hooks re-run every time your component re-renders.
The code of your custom Hooks should be pure, like your component’s code.
Wrap event handlers received by custom Hooks into Effect Events.
! Don’t create custom Hooks like useMount. Keep their purpose specific.
It’s up to you how and where to choose the boundaries of your code.

! const cities = useData(`/api/cities?country=${country}`);

!---------------------------------------------------------------------------------------------
! The code of your custom Hooks should be pure, like your component’s code. means ?
In React, when documentation says:

! "The code of your custom Hooks should be pure, like your component's code."

! it means:
! ✅ A custom Hook should not cause side effects during rendering.
! ✅ Given the same inputs, it should return the same result.
! ✅ It should follow the same rules as React components.


! Pure Example

function useGreeting(name) {
  return `Hello ${name}`;
}
function App() {
  const message = useGreeting("Touseef");

  return <h1>{message}</h1>;
}

! For the same name, it always returns the same output.

! Side Effects Should Be Inside useEffect

! ❌ Wrong

function useFetch(url) {
  fetch(url); // side effect during render
}

! React may render multiple times, causing multiple unnecessary API calls.

! ✅ Correct

function useFetch(url) {
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => console.log(data));
  }, [url]);
}

! The API call happens after rendering inside useEffect.

! Simple Rule

! A custom Hook is just a function.

function useSomething() {
  / Hook logic
}

! During rendering, it should only:

? Read props/state
? Calculate values
? Call other Hooks

! Avoid during render:

? API calls (note - we can write logic to fetch like useFetch but this custome hook is used in another component so this particular custom hookk is free from api call during rendering.)
? DOM manipulation
? localStorage.setItem()
? Timers (setTimeout, setInterval)

! Put these inside useEffect.

! In one line:
! "Pure" means your custom Hook should not perform side effects while React is rendering; side effects belong in useEffect.

! Rules of React components.
! When React says custom Hooks should be pure like React components, it refers to these important rules:

! 1. Components Must Be Pure
A component should only calculate and return JSX based on its props and state.

! ✅ Good

function Welcome({ name }) {
  return <h1>Hello {name}</h1>;
}

! Same input (name) → same output.


! 2. Don't Cause Side Effects During Render

! ❌ Bad

function User() {
  fetch("/api/users"); // API call during render
  return <h1>User</h1>;
}

! ✅ Good

function User() {
  useEffect(() => {
    fetch("/api/users");
  }, []);

  return <h1>User</h1>;
}

! Side effects belong in useEffect.


! 3. Don't Modify External Variables

! ❌ Bad

let count = 0;

function Counter() {
!  count++;
  return <h1>{count}</h1>;
}

! Rendering changes external data, making behavior unpredictable.


! 4. Never Change Props

! ❌ Bad

function User(props) {
!  props.name = "John";
  return <h1>{props.name}</h1>;
}

! Props are read-only.

! ✅ Good

function User({ name }) {
  return <h1>{name}</h1>;
}


! 5. Hooks Must Be Called at the Top Level

! ❌ Bad

function App() {
  if (true) {
!    useState(0);
  }
}

! ✅ Good

function App() {
  const [count, setCount] = useState(0);
}


! 6. Components Should Return JSX
function App() {
  return <h1>Hello React</h1>;
}

! React calls the component and uses the returned JSX to build the UI.


! In Short

! A React component should:

? Take props/state as input
? Return JSX
? Not perform side effects during render
? Not mutate props
? Call Hooks only at the top level
? Produce the same UI for the same input

! Because custom Hooks follow the same rendering rules as components, React says:

! "The code of your custom Hooks should be pure, like your component's code."

*/

/*
!-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
! GFG
! React Custom Hooks
! A custom hook is a JavaScript function that starts with use and internally calls other hooks like useState, useEffect, or useContext. It allows developers to extract reusable logic, keeping components clean and modular.

! Syntax

function useCustomHook() {
    / Use built-in hooks here
    return someValue;
}


! Steps to Create a Custom Hook

! 1. Define a Function That Starts with use
Custom hooks must follow React's naming convention and start with use (e.g., useFetch). This ensures React recognizes it as a hook and enforces hook rules.

function useCustomHook() {
    / Hook logic here
    return someValue;
}

! 2. Use React's Built-in Hooks Inside Your Custom Hook
Custom hooks can use useState, useEffect, useContext, etc., to manage state, handle side effects, or access context.

function useCounter() {
    const [count, setCount] = useState(0);
    return [count, () => setCount(count + 1)];
}

! 3. Add Logic Inside useEffect for Side Effects
If your custom hook performs side effects (e.g., fetching data, subscribing to a service), use useEffect to control when the effect runs.

function useFetchData(url) {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch(url).then(response => response.json()).then(setData);
    }, [url]);
    return data;
}

! 4. Return Necessary Values
!! Your custom hook should return state, functions, or values that components need, such as fetched data, loading state, or error messages.

function useToggle(initialValue = false) {
    const [state, setState] = useState(initialValue);
    const toggle = () => setState(prev => !prev);
    return [state, toggle];
}

! 5. Use the Custom Hook in Components
!! Once defined, your custom hook can be used inside a React component just like a built-in hook.

function ExampleComponent() {
!    const [isOn, toggle] = useToggle();
    return <button onClick={toggle}>{isOn ? "ON" : "OFF"}</button>;
}

! When to Use Custom Hooks
? You should use custom hooks when

! We need to reuse logic across multiple components.
! We want to improve readability and maintainability by keeping component logic clean.
! We are using multiple built-in hooks together in a reusable way.
! We want to encapsulate side effects like data fetching or state management.
*/