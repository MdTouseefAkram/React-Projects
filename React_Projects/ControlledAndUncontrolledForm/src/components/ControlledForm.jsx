import React, { useState } from 'react'

const ControlledForm = () => {
    let [name, setName] = useState('');

    function handleSumbit(e){
        e.preventDefault();
        alert(`Form submitted by ${name}`);
        setName('');

    }

//! 1️⃣ Controlled Form
// In a controlled form, the form data is handled by React state.
// The input values are controlled by React using state variables.
// Every time the user types something, the state gets updated via onChange handler.
//! 🔔 Key Point:
// The input's value is bound to React state (name).
// React controls what appears in the input box.

  return (
    <>
    <h3>Controlled Form</h3>
    {/* The input's value is bound to React state (name). */}
    <form onSubmit={handleSumbit}>
        <label>
            Name
        <input 
        type="text"
        // using value and onChange , we binding the input value with React state (name).
        value={name} 
        onChange={(e)=>setName(e.target.value)}
        />
        </label>

        <button type='submit'>Submit</button>
    </form>
    
    </>
  )
}

export default ControlledForm