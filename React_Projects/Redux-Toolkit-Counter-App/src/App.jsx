import React from 'react'
import Counter from './components/Counter'

const App = () => {
  return (
    <>
    {/* //! Step 6 - Render <Counter/> inside App.jsx */}
    <Counter/>
    </>
  )
}

export default App

/*

! Summary

! Create a Redux store with configureStore
configureStore accepts a reducer function as a named argument
configureStore automatically sets up the store with good default settings

! Provide the Redux store to the React application components
Put a React-Redux <Provider> component around your <App />
Pass the Redux store as <Provider store={store}>

! Create a Redux "slice" reducer with createSlice
Call createSlice with a string name, an initial state, and named reducer functions
Reducer functions may "mutate" the state using Immer
Export the generated slice reducer and action creators

! Use the React-Redux useSelector/useDispatch hooks in React components
Read data from the store with the useSelector hook
Get the dispatch function with the useDispatch hook, and dispatch actions as needed

! What is a Slice Reducer?
A slice reducer is the reducer function that is created by createSlice() and manages a specific slice of the Redux state.

! What is the dispatch() Function?
! dispatch() is a function provided by the Redux store that is used to send an action to the store.
dispatch() is the only way to trigger state changes in Redux.
? dispatch is a function, not a hook.

! useDispatch()
Hook provided by React Redux.
? Used to get the dispatch function from the Redux store.

! dispatch
Function returned by useDispatch().
? Used to send actions to the Redux store.

! useDispatch() is a React Redux hook that returns the Redux store's dispatch function. dispatch itself is a function used to send actions to the Redux store and trigger state updates.
useDispatch()  --->  dispatch function
   (hook)             (function)

! Easy Memory Trick (To use redux toolkit in steps)
1. Install Packages
        ↓
2. Create Store
        ↓
3. Wrap App with Provider
        ↓
4. Create Slice
        ↓
5. Add Reducer to Store
        ↓
6. Use useSelector()
        ↓
7. Use useDispatch()
        ↓
8. Dispatch Actions
        ↓
9. State Updates
        ↓
10. UI Re-renders

! Data Flow
User Click → dispatch() → Action → Reducer → Store Updates → useSelector() gets new state → UI Re-renders


! OR
Data Flow
? dispatch(increment())

! Flow:
User Clicks Button
        ↓
dispatch(increment())
        ↓
Action Creator Runs
        ↓
Action Object Created
{ type: "counter/increment" }
        ↓
Action Sent to Store
        ↓
Reducer Executes
        ↓
State Updates
        ↓
Redux Store Updates
        ↓
useSelector() Detects State Change
        ↓
Component Re-renders
        ↓
UI Updates

! Flow (short)
dispatch(action)
      ↓
Store receives action
      ↓
Store calls reducer(state, action)
      ↓
Reducer returns NEW state
      ↓
Store receives returned state
      ↓
Store updates its state

then UI update
*/

/*
! What is Redux Toolkit (RTK)?
Redux Toolkit (RTK) is the official and recommended way to write Redux code.
It helps you:

? Store global application state
In Redux, the Store is a central object that contains all the data (state) used by your application.
? Share data between components
? Avoid prop drilling
? Write less Redux boilerplate code
? Manage API calls easily

!! Think of Redux Toolkit as a central store (database in memory) for your React application.

! Why Redux Toolkit?

! Without Redux Toolkit:
Action TypesActionsReducersStoreSwitch Cases
Lots of files and boilerplate.

! With Redux Toolkit:
createSlice() configureStore() useSelector() useDispatch()
Much simpler.


! Important Functions
| Function           | Purpose                                       |
| ------------------ | --------------------------------------------- |
| `configureStore()` | Creates Redux store                           |
| `createSlice()`    | Creates state, reducers, and actions together |
| `dispatch()`       | Sends action to store                         |
| `Provider`         | Makes store available to React app            |
| `useSelector()`    | Gets state from store                         |
| `useDispatch()`    | Dispatches actions                            |


! Quick Revision
Redux Toolkit
      ↓
configureStore()
      ↓
createSlice()
      ↓
Provider
      ↓
useSelector()
      ↓
useDispatch()

! Quick Summary
| Redux                           | Redux Toolkit                 |
| ------------------------------- | ----------------------------- |
| More code                       | Less code                     |
| Manual setup                    | Automated setup               |
| Manual immutable updates        | Immer handles immutability    |
| Separate action creators        | Auto-generated actions        |
| Requires extra async middleware | Built-in `createAsyncThunk()` |
| Harder for beginners            | Beginner-friendly             |
| Legacy approach                 | Modern recommended approach   |

! Notice:
Counter.jsx → contains JSX
App.jsx → contains JSX
store.js → plain JavaScript, no JSX
counterSlice.js → plain JavaScript, no JSX

! Rule I follow
Contains JSX?  → .jsx
No JSX?        → .js

! Quick Interview Notes
PascalCase     → Components
camelCase      → Variables, functions
*.jsx          → Contains JSX
*.js           → No JSX
useSomething   → Custom Hooks
! somethingSlice → Redux Slice
! store.js       → Redux Store

! Note - React-Redux is Official library that connects Redux with React components.
!! React Redux is the library that allows React components to interact with the Redux store using hooks like useSelector and useDispatch.

! What is React Redux?
!! React Redux is the official binding library that connects React components with the Redux store using hooks like useSelector and useDispatch.
*/
