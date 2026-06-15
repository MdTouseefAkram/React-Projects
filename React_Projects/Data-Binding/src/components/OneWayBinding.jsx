import React, { useState } from 'react'
import Display from './Display';

const OneWayBinding = () => {
    let [name, setName] = useState("Touseef");

  return (
    <>
        <h2>OneWayBinding</h2>
        <Display username= {name}/>
        {/* <h1>{name}</h1> we can directly show updated value of name in here same componet or we can show in child component i.e Display to show one way binding. Any one is fine. then no need of Display component if we show new data in same component. */}
        <button onClick={()=>setName("Akram")}>Change Name</button>
        

    </>
  )
}

export default OneWayBinding

/*
!✅ 1. One-Way Data Binding (React Default)
In React, data flows in one direction only:

!👉 State → UI
!! If state changes → UI updates
! But UI cannot directly change state (it must use event handlers).

! 👉 Data flows in one direction only
! Parent → Child (State → Props → UI)

!🔎 How It Works
! name state is passed as props

! Child component only receives data
! It cannot modify parent state
! Data flows only in one direction

✔ This is called One-Way Binding
✔ Key Points

Child cannot directly change parent data
Data flow is predictable
Easy to debug
Used in React & Redux

! Quick Difference Table (Interview Ready)
| Feature        | One-Way Binding      | Two-Way Binding           |
| -------------- | -------------------- | ------------------------- |
| Data Flow      | One direction        | Both directions           |
| Control        | Parent controls data | UI can update state       |
| Debugging      | Easy                 | Slightly complex          |
| React Default? | ✅ Yes                | ❌ Manual setup            |
| Used In        | Props, Redux         | Forms (controlled inputs) |

! ❌ Passing props to a child is NOT necessary to show one-way binding.
!! 🔍 What’s Happening? ----------------
message is stored in state
UI displays {message}
When button is clicked → setMessage() updates state
React re-renders UI
👉 Data flows like this:

!! State → UI
That is still One-Way Binding.

!🔥 Important Concept
One-way binding does NOT mean parent-child only.

It simply means:
! UI is always updated from state, and state is the single source of truth.
Even in the same component, data still flows:

!! State → JSX (UI)

! 🎯 When Do We Use Props?
We use props when:
We want to share data between components
We follow component-based architecture
But for understanding one-way binding, child component is not required.

🧠 Interview Tip (Important for You)
If interviewer asks:
"Is child component necessary to demonstrate one-way binding?"

! Best answer:
! No. One-way binding simply means state updates UI in one direction. Props are used only when passing data between components.
*/