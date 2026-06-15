import React, { useState } from 'react'

const Counter = () => {

    let [count, setCount] = useState(0);

    let increment = () =>{
        setCount((prevState)=> prevState + 1);
    };

  return (
    <>
    <h1>{count}</h1>
    <button onClick={increment}>Increment</button>
    </>
  )
}

export default Counter



/*
! How it works

? setCount((prevState) => prevState + 1); //! Internally React automatically passes the latest state value to prevState.

! prevState = previous value of count

! If count is 0, then prevState is 0
! New value becomes 0 + 1 = 1

! Next click:

? prevState is 1
! New value becomes 1 + 1 = 2

! Why use previous state?

! When the next state depends on the current state.

! ✅ Correct:

setCount((prev) => prev + 1);

! ❌ Not recommended:

setCount(count + 1);

! Because React may batch multiple updates, and count can become stale.

! Example where previous state is necessary

const handleClick = () => {
  setCount((prev) => prev + 1);
  setCount((prev) => prev + 1);
  setCount((prev) => prev + 1);
};

! Result:

! count = count + 3

! Without previous state:

setCount(count + 1);
setCount(count + 1);
setCount(count + 1);

! Result:

count = count + 1

! because all three updates use the same old value.

! Syntax

setState((previousState) => {
  return newState;
});

! Example:

? setCount((prevCount) => prevCount + 1);
? setAge((prevAge) => prevAge + 1);
? setTodos((prevTodos) => [...prevTodos, newTodo]);

! Rule: Use the previous state callback form whenever the new state depends on the old state.

!!!!!!! setCount((prevState) => prevState + 1); how prevState get value and where ?? !!!!!!!!!!!1

! In this code:

setCount((prevState) => prevState + 1); //! Internally React automatically passes the latest state value to prevState.

! you never manually pass a value to prevState.

! React automatically provides it.

What's happening behind the scenes?

Suppose:

const [count, setCount] = useState(5);

! Current state:

count = 5

! When you call:

setCount((prevState) => prevState + 1);

! React internally does something like:

! const prevState = count; // 5
? const newState = prevState + 1; // 6

!!! So React calls your callback function and passes the current state value as the argument.

You can imagine React doing:

const updaterFunction = (prevState) => prevState + 1;

const currentState = 5;

const nextState = updaterFunction(currentState);

setState(nextState);

! Why can we name it anything?

prevState is just a parameter name.

! These are all equivalent:

? setCount((prevState) => prevState + 1);

? setCount((previousCount) => previousCount + 1);

? setCount((countValue) => countValue + 1);

? setCount((x) => x + 1);

! React passes the current state value to whichever parameter name you choose.

! Example step-by-step

const [count, setCount] = useState(10);

! setCount((prevState) => prevState + 1);

! React internally:

! prevState = 10

! Then:

? prevState + 1

! becomes:

10 + 1 = 11

! New state:

? count = 11

! Similar to a normal function

function addOne(num) {
  return num + 1;
}

addOne(5);

Here:

num = 5

because 5 is passed to the function.

Likewise:

setCount((prevState) => prevState + 1);

! React calls your function and passes the current state value:

! (prevState) => prevState + 1
!      ↑
!      5 (current count value)

! So prevState gets its value from React itself. React passes the current state value as the argument to the callback function.

! Easy Rule

| Situation                           | Use `prevState`? |
| ----------------------------------- | ---------------- |
!| `setCount(prev => prev + 1)`        | ✅ Yes            |
!| `setIsOpen(prev => !prev)`          | ✅ Yes            |
!| `setUsers(prev => [...prev, user])` | ✅ Yes            |
?| `setCount(10)`                      | ❌ No             |
?| `setName("Touseef")`                | ❌ No             |

! Use prevState whenever the next state depends on the current state. If you're just assigning a fixed value, you don't need prevState.

! What is Batching in React?

? Batching means React groups multiple state updates together and performs one re-render instead of many re-renders.
*/

/*
!--------------------------------------------------------------------------------------------------------
!!! IMP. Understand with actual code with real problems.

! setState value vs function

! 1. using value in setState

let handleClickSnapshot = () =>{ // same handler but so many setState updates, but count value = 0 in every setCount because of batching and not using function (prev) in setCount.
    ! All use count from the same snapshot (0)
    setCount(count + 1); // 0 + 1 = 1
    setCount(count + 5); // 0 + 5 = 5
    setCount(count + 10); // 0 + 10 = 10
    ! Last one wins -> 10    
};


! 2. using function in setState

    let handleClickUpdater = () =>{
    ! Each builds on the previous value
    setCount((prev) => prev + 1); // 0 + 1 = 1
    setCount((prev) => prev + 5); // 1 + 5 = 6
    setCount((prev) => prev + 10); // 6 + 10 = 16
};
*/

/*
! Use prevState when the new state depends on the previous state.

! setCount((prevState) =>
  ? React automatically passes the latest state value to prevState.
  ? prevState = latest state React has when processing the update.
  ? count = state from the current render.
  ? In a simple case they may be the same, but not always.
)

Current State (count)
        ↓
React reads latest state
        ↓
React calls your callback
        ↓
(prevState) receives that state
        ↓
You return the next state
        ↓
React updates count


! That's why prevState already has a value even though you never assign one yourself—React passes it into the callback parameter automatically.

! Rule of Thumb

? If the new state depends on the old state → Use prevState ✅
? If you're setting a completely new value → direct update is fine.
! setName("Touseef"); // direct update is fine

Many React developers use the functional form whenever they derive the next state from the current state because it's the safest pattern.

! Yes, using prevState (functional update) is always safe, but it is not always necessary.
*/