import React, { useRef } from 'react'

//! ✅ What is useRef in React?
// useRef is a React Hook that allows you to create a reference to a DOM element or store a mutable value that persists across re-renders without causing re-renders.
// refContainer.current holds the value.
//! Common use cases:
// Accessing DOM elements directly (like input fields).
// Storing mutable values that don’t trigger re-renders.
//! Key Points:
// Does NOT trigger re-render when value changes.
// Ideal for directly interacting with DOM or storing data between renders.

const UncontrolledForm = () => {
    //! 1. Insead of creating state varibel, create varible with useRef().
    // we use useRef() to get a reference to the actual DOM element.

//! How We Know the DOM Is Involved
// Since we use ref, the value is stored in the DOM element itself.
// We don’t store the input’s value in React state (useState is not used).
// No re-render happens when user types.
// The value exists in the DOM node →

    let nameRef = useRef();

//  console.log(nameRef.current.value);
// This reads the value directly from the DOM.

    function handleSubmit(e){
        e.preventDefault();
        //! 3. Accesing value using current.value
        alert(`Form is submitted by ${nameRef.current.value}`);
        
        // Clear the input field after submission
        //useRef gives you direct access to the input element.
        nameRef.current.value = '';

    }

//! 2️⃣ Uncontrolled Form
// In an uncontrolled form, form data is handled by the DOM itself.
// We use a ref to access the input value when needed.
//! React does not control the input value on every change.

//! 🔔 Key Point:
// Input's value is not tied to state.
// We read the value directly from the DOM when needed using ref.
//! When to use- Use uncontrolled forms for quick simple use cases where you don't need to monitor every input change.

  return (
    <>
    <h3>Uncontrolled Form</h3>
        <form onSubmit={handleSubmit}>
            <label>
                Name
            {/*2. Instaed pf binding input to React , with value and onchange, write ref={} and pass ref varaible here.*/}
            <input type="text" ref={nameRef} />
            </label>

            <button type='submit'>Submit</button>
            {/*!! Whatever we type in input box, those values can access using dom itself using useRef() not by state, we access in nameRef.current.value*/}

        </form>
    </>
  )
}

export default UncontrolledForm