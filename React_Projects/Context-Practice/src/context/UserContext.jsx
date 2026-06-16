import React, { createContext } from 'react'
//! Step 1
// Create Context
export let UserContext = createContext(); //! createContext() creates a global data container (context) for your React app.

//create provider and receice chidren and wrap children in context.provider
const UserProvider = ({children}) => {
    let userName = "Md Touseef Akram";
    let age = 23;

  return (
    <>
    {/!* A Provider is a React component that supplies context data to all its child components using the value prop. */}
    <UserContext.Provider value={{userName,age}}>
        {children}
    </UserContext.Provider>
    </>
  )
}

export default UserProvider

/*
! When you wrap your app like this:
Example 1

! In main.jsx (Best Practice)
ReactDOM.createRoot(document.getElementById("root")).render(
  <UserProvider>
    <App />
  </UserProvider>
);

! OR
Example 2

In App.jsx
    <UserProvider>
      <DisplayUser/>
      <DisplayAge/>
    </UserProvider>


!! What actually happens:
Everything inside <UserProvider>...</UserProvider> becomes the children prop of UserProvider.

? So React internally does:
UserProvider({ children: <App /> })

! Then inside your component:

return (
  <UserContext.Provider value={user}>
    {children}
  </UserContext.Provider>
);

! So effectively:

children = <App />
<App /> renders inside <UserContext.Provider>
and then all components inside App can access the context

! Important clarification
It’s not that components are “placed inside children”.

Instead:
! children is just a special prop that contains whatever you wrapped inside the component.


! So the flow is:

<UserProvider>
    <App />
</UserProvider>

↓ becomes

UserProvider({ children: <App /> })

↓ renders

<UserContext.Provider>
    <App />
</UserContext.Provider>

! Key takeaway
children is a React prop
It represents everything nested inside the component tag
Context Provider just “wraps” and passes data down, it doesn’t physically move components

! How children is received ?
In React, children is just a special prop automatically passed by React.
It contains whatever is placed between opening and closing tags

Simple mental model

Think of it like a box:

<UserProvider>
   [ whatever you put here ]
</UserProvider>

React puts that content into:

children


! Context API has 3 main parts:
Provider → supplies the data. (The Provider supplies data to all components inside its tree (its children).)
Context value → the data itself. (Context value = userName and age)
Consumer (useContext) → reads the data

! Flow
createContext()
      ↓
Provider (sends value)
      ↓
React component tree
      ↓
useContext() (reads value)

! Data Flow
Provider (source of truth)
        ↓
Context value (user object)
        ↓
React tree (all children components)
        ↓
useContext() reads value anywhere

          1. createContext()
                 │
                 ▼
        ┌───────────────────┐
        │   UserContext     │
        │ (Empty Channel)   │
        └───────────────────┘
                 │
                 ▼
     2. Provider supplies data
        ┌─────────────────────────────┐
        │ UserContext.Provider        │
        │ value = { user }           │
        └─────────────────────────────┘
                 │
                 ▼
        React Component Tree
                 │
     ┌───────────┼───────────┐
     ▼           ▼           ▼
  Navbar      Profile     Sidebar
                 │
                 ▼
        3. useContext() reads data
                 │
                 ▼
        const user = useContext(UserContext)
                 │
                 ▼
        { name: "John Doe", id: 1 }

! 🌳 Think like this
UserContext = pipeline definition (empty system)
Provider = fills pipeline with data
React = manages distribution internally
useContext = taps into the pipeline

! 📦 What actually happens inside React ?
When you write:

<UserContext.Provider value={user}>

React:
? stores user in internal context memory
? links it to that Provider in the tree
? updates all subscribed components when value changes

! <UserContext.Provider value={user}>

This means:
👉 “Make user available to every component inside this Provider subtree”

! So it supplies data to:
direct children
children of children
deeply nested components
*/