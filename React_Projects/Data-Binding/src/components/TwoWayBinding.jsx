import React, { useState } from 'react'

const TwoWayBinding = () => {
    let [name, setName] = useState("");

  return (
    <>
        <h2>TwoWayBinding</h2>
        <input value={name}
        onChange={(e)=>setName(e.target.value)} />
        <h3>Typed Name: {name}</h3>
    </>
   
  )
}

export default TwoWayBinding

/*
🔹 2️⃣ Two-Way Binding
! 👉 Data flows in both directions
!!  UI ⇄ State

! In React, two-way binding is not automatic like Angular.
We achieve it using controlled components.

!! ✔ What happens here?
! Input shows value from state

! When user types → state updates
! State updates → UI updates again
! 👉 So data moves both ways (UI ⇄ State)

! ✅ 2. Two-Way Data Binding (Using Controlled Components)
! React does not have true automatic two-way binding like Angular, but we can achieve it using:
value
onChange
useState

!! 👉 State ↔ Input Field

!🔎 -------------- How It Works ---------------------------
! value={name} → State controls input
! onChange → Input updates state
! State updates UI automatically

! ✔ This is called Two-Way Binding (Controlled Component)

!🔥 Key Differences (Interview Ready Table)
| Feature                   | One-Way Binding      | Two-Way Binding |
| ------------------------- | -------------------- | --------------- |
| Data Flow                 | State → UI           | State ↔ UI      |
| User Input Changes State? | No (without handler) | Yes             |
| Default in React?         | ✅ Yes                | ❌ Manual setup  |
| Used In                   | Props display        | Forms & Inputs  |
| Example                   | Display Component    | Input Field     |


🧠 Important Interview Line
! 👉 “React follows one-way data binding by default. Two-way binding is achieved using controlled components with value and onChange.”
*/