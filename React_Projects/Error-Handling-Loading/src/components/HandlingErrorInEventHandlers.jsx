import React from 'react'

const HandlingErrorInEventHandlers = () => {
  
    //Note- If we remove try and catch and wrap this component in ErrorBoundary in App.jsx then it works in console if condition not met then error shown in console , no all app crash becoz of error boundary.

    function handleClick(){
        try{
            let random = Math.random(); // 0 to 1(exclusive)
            if(random < 0.5){
                throw new Error("Somthing went wrong"); //! throw → used in JavaScript to manually generate an error.
                //! new Error("Something went wrong!") → creates a new Error object.
            } else{
                alert("success")
            }
        
        } catch (err){
            alert("Error: "+err.message);
            //! err is the object you threw (new Error(...)). (err is a variable, it can be any name like error)
            //! .message is a property of that Error object.
            // So err.message will contain the string "Something went wrong!".
        }
    }

  return (
    <>
    <p>React Event Error Handling Example</p>
    <button onClick={handleClick}>Click Me</button>
    </>
  )
}

export default HandlingErrorInEventHandlers

//! Handling Errors in Event Handlers
//? Errors in events like onClick are not caught by Error Boundaries, so you use try/catch. (Or if button is map to event like OnClick={handleclick} and this is a function in which API is calling then we use .then and .catch becoz of handling promise. If simple event handler with no promise only some task is happen in the function ,then try/catch is used)
//? Rule of Thumb
// Use try...catch → for synchronous code (like in your button example) or inside async/await.
//? Use .catch() → when working with promises (fetch, axios, etc.).

//Example
// function App() {
//   const handleClick = () => {
//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log("Data:", data);
//       })
//       .catch((error) => {
//         alert("Error occurred: " + error.message);
//       });
//   };

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h1>React Event Error Handling Example</h1>
//       <button onClick={handleClick}>Fetch Data</button> //! here event handler is there but it call API. It has promise.
//     </div>
//   );
// }

// Example
// const handleClick = async () => {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//     const data = await res.json();
//     console.log("Data:", data);
//   } catch (error) {
//     alert("Error occurred: " + error.message);
//   }
// };


// 1. try...catch

// Used for synchronous code (runs immediately, top-to-bottom).

// Also used for async/await code, because await makes async code look synchronous.

//! ✅ Use try...catch when:

// You’re writing normal code that may throw (e.g., dividing by zero, accessing undefined, custom errors).

// You’re inside an async function and want to use await. API , promise etc.

// Example (synchronous code):

// function App() {
//   const handleClick = () => {
//     try {
//       const random = Math.random();
//       if (random < 0.5) throw new Error("Something went wrong!");
//       alert("Success!");
//     } catch (err) {
//       alert("Error: " + err.message);
//     }
//   };

//   return <button onClick={handleClick}>Click Me</button>;
// }


// Example (async/await with try...catch):

// const handleClick = async () => {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//     const data = await res.json();
//     console.log("Data:", data);
//   } catch (err) {
//     console.error("Fetch error:", err);
//   }
// };

//! 🔹 2. .then().catch()

//! Used with Promises (like fetch, axios, or custom Promises).

// .then() handles success, .catch() handles errors.

// ✅ Use .then().catch() when:

//! You prefer chained syntax instead of async/await.

// You’re not inside an async function (so you can’t use await easily).

// Example:

// const handleClick = () => {
//   fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then((res) => res.json())
//     .then((data) => console.log("Data:", data))
//     .catch((err) => console.error("Fetch error:", err));
// };

//summary
// try, catch can work with both promises, API and normal code which might throw error like divide by 0.
// but .then and .catch can work only with asyncronous code like API, Promises.

// Using other error classes

//! JavaScript has built-in error types:

// Error (general)

// TypeError

// ReferenceError

// SyntaxError

// RangeError

// EvalError

// URIError

// Example:

// try {
//   throw new TypeError("Invalid type provided!");
// } catch (err) {
//   console.log(err.name);    // "TypeError"
//   console.log(err.message); // "Invalid type provided!"
// }
