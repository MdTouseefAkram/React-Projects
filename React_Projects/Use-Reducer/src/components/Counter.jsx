import React, { useReducer } from 'react'

//! 1st
// let initialState = {count: 0};

// let reducer = (state, action)=>{
//     // switch (action.type){ //or we can action.type so in len 30
//        switch (action){ 
//         case 'INCREMENT':
//             return {count: state.count + 1}; //! reducer function handles state varible for updation, so  we access state.count to access state variable  becoz state has count value.

//         case 'DECREMENT':
//             return {count: state.count -1};
//         case 'RESET':
//             return {count: 0};
//         default:
//             return state;
//     }
// }

//! 2nd (Easy)
let initialState = 0;

let reducer = (state, action) =>{ // state varible get updated i.e count variable value gets updated with the help of reducer function. reducer fn. have state argument which help to update variable value , through state we access count variable also not here but in above example. 
    switch (action){
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        case 'RESET':
            return 0;
        default:
            throw new Error('Unexpected action')
    }
}



const Counter = () => {

    // let [state, dispatch] = useReducer(reducer, initialState);

    let [count, dispatch] = useReducer(reducer, initialState);

  return (
    <>
    {/*!! we can access count value using variable i.e state varible name here */}

    {/* <p>Count: {state.count}</p>  */}
    <p>Count: {count}</p>

    {/* <button onClick={()=>dispatch({type:'INCREMENT'})}>Increment</button> */}
    <button onClick={()=>dispatch('INCREMENT')}>Increment</button>
    <button onClick={()=>dispatch('DECREMENT')}>Decrement</button>
    <button onClick={()=>dispatch('RESET')}>Reset</button>
    </>
  )
}

export default Counter


/*
! The useReducer hook is an alternative to the useState hook that is preferred when you have complex state logic. 
! It is useful when the state transitions depend on previous state values or when you need to handle actions that can update the state differently.

Syntax
const [state, dispatch] = useReducer(reducer, initialState);

! reducer: A function that defines how the state should be updated based on the action. It takes two parameters: the current state and the action.
!! initialState: The initial value of the state. It can be of any data type: object, array, number, string, etc., depending on the requirements of your application.
! State The current state returned from the useReducer hook.
! dispatch: A function used to send an action to the reducer to update the state.
! In reducer function
! state → current state (the data before the update)
! action → an object that tells what to do (and may carry extra data)


const [state, dispatch] = useReducer(reducer, initialState, init)
(optional) init : init is an optional initialization function that can be used to compute the initial state lazily. 
It is a function that returns the initial state value. If provided, it is called once during the initial render, and its return value is used as the initial state.

*/


/*
! 2nd example
In this example, the reducer function takes two arguments:

The state management involves a reducer function, where a switch statement handles different actions dispatched to it.
The initialState is set to 0, serving as the starting point for the state.
The useReducer hook is employed to create a state variable named count and a corresponding dispatch function named dispatch.
The count variable is used to display the current count in the application.
The dispatch function is utilized to send actions to the reducer function, triggering state updates based on the specified action.
*/


/*
! Definition
useReducer is an alternative to useState — it helps manage complex state logic in a more structured way.

! It’s especially useful when:
You have multiple related state variables.
The next state depends on the previous state.
You want to centralize state update logic (like Redux, but simpler).

const [state, dispatch] = useReducer(reducer, initialState);
! reducer → a function that decides how to update state.
! initialState → the starting value of your state.
! state → the current state value.
! dispatch → a function used to send “actions” to the reducer.

! How it works
useReducer() initializes with initialState.
When you click a button, it calls dispatch() with an action object.
The reducer function receives (state, action) and returns a new state.
React re-renders the component with the new state.

! When to use useReducer instead of useState
| Situation                                 | Recommended Hook        |
| ----------------------------------------- | ----------------------- |
| Simple state updates                      | `useState`              |
| Multiple related state values             | `useReducer`            |
| Complex update logic                      | `useReducer`            |
| Same state logic shared across components | `useReducer` (or Redux) |


| Concept                             | Description                                         |
| ----------------------------------- | --------------------------------------------------- |
| `useReducer(reducer, initialState)` | Hook to manage complex state logic                  |
| `reducer(state, action)`            | Pure function deciding state updates                |
| `dispatch(action)`                  | Sends an action to reducer                          |
| Common use cases                    | Counters, Forms, Complex state transitions, Toggles |

! state is a variable that holds your component’s current data —
the same way useState does, but managed through a reducer function.
? state = initialState
! As you dispatch actions, React automatically updates state by running your reducer.

[state, dispatch]
! The first item (state) → is the current state value.
! The second item (dispatch) → is a function you use to send actions to the reducer.

In short
| Term           | Meaning                                                           |
| -------------- | ----------------------------------------------------------------- |
| `state`        | Current data (object, number, array, etc.) managed by the reducer |
| `initialState` | The starting/default value for `state`                            |
| `dispatch`     | Function to send updates (actions) to the reducer                 |
| `reducer`      | Function that defines **how** the state changes                   |

Simple Analogy
| Part           | Role                                        |
| -------------- | ------------------------------------------- |
| `state`        | Your current “form data”                    |
| `initialState` | The blank form when the app starts          |
| `dispatch()`   | Submits an update (like typing in the form) |
| `reducer()`    | Decides how to update the form data         |

state → current value (starts as initialState)
dispatch(action) → used to update state
reducer(state, action) → returns the new state value

*/

/*
? reducer(state, action)
What is state here?

state is the current value of your component’s state before any update happens.
It’s whatever React is currently storing as the state.
! On the first render, state = initialState.
After that, each time you dispatch an action, React passes the latest state into the reducer.
! 👉 So, state represents the current snapshot of your data before making a change.
const initialState = { username: "", age: 22 };

At first:
state = { username: "", age: 22 }

? What is action here?
action is an object that tells the reducer what to do — basically a “message” or “instruction” you send when you want to change state.

You send it using the dispatch() function:
dispatch(action)

So when you call:
dispatch({ field: "username", value: "Md Touseef Akram" });

React internally runs:
reducer(state, { field: "username", value: "Md Touseef Akram" });

So inside the reducer:
? state → current state value (e.g. { username: "", email: "" })
? action → the object you dispatched (e.g. { field: "username", value: "Md Touseef Akram" })

| Step | Variable     | Value                                               |
| ---- | ------------ | --------------------------------------------------- |
| 1️⃣  | `state`      | `{ username: "", email: "" }`                       |
| 2️⃣  | `action`     | `{ field: "username", value: "Md Touseef Akram" }`  |
| 3️⃣  | Reducer runs | `return { ...state, [action.field]: action.value }` |
| 4️⃣  | Result       | `{ username: "Md Touseef Akram", email: "" }`       |

In short
| Term                     | Meaning                                                       |
| ------------------------ | ------------------------------------------------------------- |
| `state`                  | The **current data** before update                            |
| `action`                 | The **instruction object** that describes what change to make |
| `dispatch(action)`       | Sends the action to the reducer                               |
| `reducer(state, action)` | Calculates and returns the **new state**                      |


*/


/*
!! init in useReducer?
In React’s useReducer hook, you can optionally pass a third argument called init.
It helps you initialize your state lazily — i.e., only once when the component mounts.
This is useful if your initial state requires computation (e.g., reading from localStorage or transforming data).

const [state, dispatch] = useReducer(reducer, initialArg, init);
? reducer → function that handles state updates.
? initialArg → basic initial value (can be anything).
? init → function that returns the initial state (runs only once).

import React, { useReducer } from "react";

/ 1️⃣ Reducer function
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return init(action.payload); // reinitialize with payload
    default:
      return state;
  }
}

/ 2️⃣ init function (runs only once)
function init(initialCount) {
  const saved = localStorage.getItem("count");
  return { count: saved ? Number(saved) : initialCount };
}

/ 3️⃣ Component
export default function Counter() {
  const [state, dispatch] = useReducer(reducer, 0, init);

  return (
    <div>
      <h2>Count: {state.count}</h2>

      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "reset", payload: 0 })}>
        Reset
      </button>
    </div>
  );
}

! How it works:
React calls init(0) only once when the component mounts.
→ Suppose localStorage.getItem("count") returns "5",
→ then initial state becomes { count: 5 }.
Every time you click + or -, only the reducer updates state.
When you click Reset, the reducer calls init() again to reinitialize.

! ✅ When to use init:
Use it when:
Initial state needs computation (like parsing, filtering, or loading data).
You want to initialize from external sources (like localStorage, API, or props).
You want to reset state to its original computed value.


const [state, dispatch] = useReducer(reducer, { count: 0 });

| Part                | Meaning                                                                          |
| ------------------- | -------------------------------------------------------------------------------- |
| `useReducer(...)`   | React hook that returns **an array with two elements** → `[state, dispatch]`.    |
| `reducer`           | Function that tells React **how to update the state** based on actions.          |
| `{ count: 0 }`      | The **initial state value** (the starting data).                                 |
| `[state, dispatch]` | Array destructuring — assigns values from the returned array into two variables. |

| Variable       | What it represents                                                                 |
| -------------- | ---------------------------------------------------------------------------------- |
| **`state`**    | The **current state object**, e.g. `{ count: 0 }`. You read from this.             |
| **`dispatch`** | A **function** you call to send an action to the reducer, which updates the state. |


! Summary
| Concept                             | Description                                         |
| ----------------------------------- | --------------------------------------------------- |
| `useReducer(reducer, initialState)` | Hook to manage complex state logic                  |
| `reducer(state, action)`            | Pure function deciding state updates                |
| `dispatch(action)`                  | Sends an action to reducer                          |
| Common use cases                    | Counters, Forms, Complex state transitions, Toggles |

*/

/*
! What is state
! State = the current data or snapshot your component is using.
It could be a number, object, or array.
It represents your application’s current situation before any changes.

Example:
const initialState = { count: 0 };
Here state initially looks like:

{ count: 0 }

! 🚀 3. What is action
!Action = an object that describes what you want to do to the state.

It usually has:
A type property (required)
Optionally, a payload (extra data)

Example:

{ type: "INCREMENT" }
{ type: "DECREMENT" }
{ type: "SET_COUNT", payload: 10 }

🧩 4. Example reducer function
function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };

    case "DECREMENT":
      return { count: state.count - 1 };

    case "SET_COUNT":
      return { count: action.payload };

    default:
      return state;
  }
}

| Term        | Meaning                               | Example                       |
| ----------- | ------------------------------------- | ----------------------------- |
| **state**   | current data before update            | `{ count: 0 }`                |
| **action**  | object describing what to do          | `{ type: "INCREMENT" }`       |
| **reducer** | function deciding how to change state | `(state, action) => newState` |

*/


/*
!-----Relationship between initialState and state-----
| Term           | Meaning                                                                                      |
| -------------- | -------------------------------------------------------------------------------------------- |
| `initialState` | The **value you give initially** to start with                                               |
| `state`        | The **current state value** managed by React (it starts as `initialState` and updates later) |

Example:
const initialState = { username: "", email: "" };

function reducer(state, action) {
  return { ...state, [action.field]: action.value };
}
const [state, dispatch] = useReducer(reducer, initialState);

When this code first runs:
! React sets state = initialState
So now:
!! state === { username: "", email: "" }

⚙️ When you call dispatch:
Let’s say you dispatch an update:
dispatch({ field: "username", value: "Md Touseef Akram" });

React calls your reducer function like this:
reducer(state, { field: "username", value: "Md Touseef Akram" });

The reducer runs:
return { ...state, [action.field]: action.value };

Which means:
return { ...{ username: "", email: "" }, username: "Md Touseef Akram" };

That becomes:
{ username: "Md Touseef Akram", email: "" } //! React sets this new object as the new state.


!| Step | What Happens                | Value of `state`                     |
| ---- | --------------------------- | ------------------------------------ |
| 1️⃣  | `useReducer` is called      | `state = initialState`               |
| 2️⃣  | You `dispatch(action)`      | React calls `reducer(state, action)` |
| 3️⃣  | `reducer` returns new state | React updates `state` internally     |
| 4️⃣  | Your component re-renders   | with the new `state`                 |

! Quick Visual:
initialState ---> (first render)
     ↓
   state (current)
     ↓
dispatch(action) ---> reducer(state, action) ---> new state ---> re-render



! So what is state exactly?
state is a variable that holds your component’s current data —
the same way useState does, but managed through a reducer function.
At the very beginning (first render):
!  state = initialState
*/