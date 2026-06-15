//! The useCallback Hook is a built-in React Hook that memoizes a callback function (function itself), preventing it from being recreated on every render
//  unless its dependencies change. This is useful for optimizing performance, especially when passing functions as props to child components.
//! Syntax
// const memoizedCallback = useCallback(() => {
    // Function logic
// }, [dependencies]);

// The function to be memoized is passed as a parameter to useCallback.
// An array of dependencies determines when the function should be recreated.

// | Hook          | Purpose                          | Example Use Case                     |
// | ------------- | -------------------------------- | ------------------------------------ |
// | `useMemo`     | Memoizes **computed values**     | Avoid recalculating expensive values |
// | `useCallback` | Memoizes **function references** | Prevent unnecessary child re-renders |

// | Feature           | ✅ `useMemo`                                                                                    | ✅ `useCallback`                                                                                                                    |
// | ----------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
// | ✅ Purpose         | Memoizes the **result of a computation** (a value).                                            | Memoizes a **function itself** so that the same function reference is returned unless dependencies change.                         |
// | ✅ Use Case        | When you want to **cache an expensive calculated value** to avoid recomputing on every render. | When you want to prevent **function re-creation on every render**, especially when passing functions as props to child components. |
// | ✅ Syntax          | `const memoizedValue = useMemo(() => computeExpensiveValue(), [dependencies])`                 | `const memoizedCallback = useCallback(() => { doSomething(); }, [dependencies])`                                                   |
// | ✅ Return Value    | Returns the **result** of the function (a value).                                              | Returns the **function itself** (function reference).                                                                              |
// | ✅ Example Purpose | Optimize performance when computing large calculations.                                        | Prevent unnecessary re-renders of child components by keeping the same function reference.                                         |
// | ✅ Side Effects    | Doesn’t affect side effects; purely for computing and returning values.                        | Typically used when passing functions as props to avoid unnecessary re-creations.                                                  |

//! ✅ 2️⃣ Parent.jsx (Uses useCallback)
import React, { useCallback, useState } from 'react'
import CallbackChildComponent from './CallbackChildComponent';

const CallbackParentComponent = () => {
  let [count, setCount] = useState(0);
  let [input, setInput] = useState('');


    // //! Without useCallback to memoize the function reference
    // let memoizeFunction = ()=>{
    //     console.log('Button clicked')
    // };   // here on evry click on Increment button, or typing in input box, it lead to rerender and a new refrence is allocated, child also rerender, becoz this function is recaived as prop in child.

    //! useCallback to memoize the function reference
    let memoizeFunction = useCallback(()=>{
        console.log('Button clicked')
    }, []);   // function reference stays the same,  The same function reference is returned on every render despite we type something in input box or click on Incremenet button, the refrence is same and this function is not rerender.

  return (
    <>
    <h3>Count (useCallback Example ): {count}</h3>
    {/*while clicking on button , count update and state is chnaged but memoizefunction  does not rerender untill depenecy is updated */}
    {/*  V.V.I -  Now any state variable changes, rerender happens but still memoize function reference is same, it does not created every time on every render and new object refernce addres is not allocated. */}
    <button onClick={()=>setCount(count+1)}>Increment Count</button>
    {/* This click me is only for check in console, the function is invoking or not. */}
    <button onClick={memoizeFunction}>Click Me</button>
    <input type="text"
    value={input}
    placeholder='Type something...'
    onChange={(e)=>setInput(e.target.value)} />


    {/* Passing function as prop to child component. Here function refernce is same becoz of usecallback. */}
    <CallbackChildComponent onClickHandler={memoizeFunction} />
    </>
    
  )
}

export default CallbackParentComponent