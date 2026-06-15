import React, { useState } from 'react'

const BuggyComponent = () => {
    let [count, setCount] = useState(0);

        if(count >=2){
            throw new Error("You clicked too many times!");
        }


  return (
    <>
    <div>BuggyComponent</div>
    <p>Click on the button, but not too much!</p>
    <button onClick={()=>setCount(count+1)}>Click Me ({count})</button>
    </>
    
  )
}
//! How to test your ErrorBoundary?
//? V.V.I- To see your ErrorBoundary fallback UI working, make the error happen during render, not in an event.
//? V.V.I- If this throw is happening in an event handler, so ErrorBoundary does not catch. like(if write a button with onClick={handleClick} and handleClick is a hanlder function where count increases after clickig on button, in this case Fallback UI is not visible, only if condition is (count>=2) met then error shows in console, not in fallback UI), To avoid this we write direct condition in main function and throw error and in button we increase count , by setCount.

// function BuggyComponent() {
//   throw new Error("Crashed during render!"); // will trigger ErrorBoundary
//   return <div>This will never render</div>;
// }

// To see your ErrorBoundary fallback UI working, make the error happen during render, not in an event.


export default BuggyComponent

//! In this code
// ErrorBoundary.js: Catches errors in child components and shows a fallback UI.
// BuggyComponent.js: Throws an error if clicked more than 3 times.
// App.js: Wraps BuggyComponent in ErrorBoundary to prevent app crashes.