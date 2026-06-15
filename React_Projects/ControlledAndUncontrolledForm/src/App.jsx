import React from 'react'
import ControlledForm from './components/ControlledForm'
import UncontrolledForm from './components/UncontrolledForm'

const App = () => {
  return (
    <>
    <ControlledForm/>
    <UncontrolledForm/>
    </>
  )
}

export default App

/*
!! Nowadays, Controlled Components are used most of the time in React applications.

! 1. Controlled Component (Preferred)
React controls the form state using useState.
import { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");

  return (
    <form>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </form>
  );
}

export default LoginForm;

! Advantages
✅ Real-time validation
✅ Easy form submission
✅ Easy to reset fields
✅ Better integration with React state
✅ Predictable data flow

! 2. Uncontrolled Component
The form data is managed by the DOM using useRef.

import { useRef } from "react";

function LoginForm() {
  const emailRef = useRef();

  const handleSubmit = () => {
    console.log(emailRef.current.value);
  };

  return (
    <>
      <input type="email" ref={emailRef} />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}

export default LoginForm;

! Advantages
✅ Less code
✅ Fewer re-renders
✅ Useful for simple forms

What Is Used Nowadays?
Most React Projects

!! Use Controlled Components.
Examples:
Login Form
Registration Form
Search Form
Checkout Form
Profile Form

Because validation, error handling, and state management are easier.


! Modern Libraries
Popular libraries such as:

! React Hook Form
Formik
often use an uncontrolled approach internally (or a hybrid approach) for better performance, while still giving developers a React-friendly API.

Example with React Hook Form:
const { register, handleSubmit } = useForm();

<input {...register("email")} />

! This avoids unnecessary re-renders on every keystroke.

Interview Answer
! Q: Which is preferred nowadays, Controlled or Uncontrolled Components?

Answer:
Controlled Components are generally preferred in React because React manages the form state, making validation, error handling, and form submission easier. However, for large forms and performance optimization, libraries like React Hook Form often use uncontrolled inputs internally. In real-world React applications, you'll commonly see controlled forms or React Hook Form.
If controlled forms can do everything, then why do uncontrolled forms exist?
Because controlled forms have a cost: every keystroke updates React state and causes a re-render.

! Controlled Form
const [name, setName] = useState("");

<input
  value={name}
  onChange={(e) => setName(e.target.value)}
/>

When the user types:

A
AB
ABC
ABCD

? React updates state and re-renders the component on every key press.

! Uncontrolled Form
const nameRef = useRef();

<input ref={nameRef} />

The browser manages the input value.

React doesn't re-render while the user is typing.

Value is read only when needed:

const handleSubmit = () => {
  console.log(nameRef.current.value);
};

!! When Uncontrolled Forms Make Sense
! 1. Large Forms (Performance)

Imagine:

50 Inputs
100 Inputs
200 Inputs

! With controlled components, every key press triggers React updates.

! Libraries like React Hook Form use uncontrolled inputs internally to minimize re-renders and improve performance.

! 2. Simple Forms
If you only need the value when the user clicks Submit:

<input ref={emailRef} />
<button onClick={handleSubmit}>Submit</button>

Using state may be unnecessary.

! 3. File Uploads
File inputs are commonly handled as uncontrolled.

<input type="file" ref={fileRef} />

You typically access the selected file through the DOM.

! 4. Third-Party Integrations
Some external libraries interact directly with DOM elements, making refs/uncontrolled inputs more convenient.

Real-World Usage Today
Small/Medium Forms

! Use Controlled Components
Examples:
Login
Signup
Search
Profile update
const [email, setEmail] = useState("");
Large Forms

Use:
! React Hook Form
? which leverages uncontrolled inputs internally for better performance.

! Interview Answer
! Controlled components are generally preferred because they make validation, state management, and form handling easier. 
! Uncontrolled components are used when performance is important, when dealing with file inputs, or when form values are only needed on submission. 
! Modern React applications often use React Hook Form, which internally uses uncontrolled inputs to reduce unnecessary re-renders.
*/

/*
!-------------------------------------------------------------------------------------------------------------------------
! Where we use?
! 1. Controlled Form
React controls the input value using state.

✅ Dynamic forms
✅ API forms (Login, Signup, Registration)
✅ Search filters
✅ Multi-step forms

! Examples
? Login Form
? Registration Form
? Contact Form
? Search Bar
? Checkout Form

! These are typically controlled.

! 2. Uncontrolled Form
The DOM controls the input value. React reads it only when needed.

React cannot fully control file inputs.
✅ Simple forms where validation is not needed
✅ Integrating with third-party libraries
✅ Reading value only on submit

! Examples
? File Upload
? Simple Feedback Form
? Legacy HTML Forms
? Third-party form libraries
? Interview Answer

Controlled Form
React state stores the form data.
Uses value and onChange.
Easy validation and real-time updates.
Most commonly used in modern React applications.

Uncontrolled Form
Form data is managed by the DOM.
Uses ref to access values.
Less code and fewer re-renders.
Mainly used for file inputs and simple forms.
Which one is preferred nowadays?

!!! Controlled Forms are the standard choice in modern React.

! Use Uncontrolled Forms only when:
? Handling file uploads.
? Working with third-party libraries.
? You only need the value at submit time and don't need validation or live updates.

! A common interview statement is:
!"Controlled components are preferred in React because React has full control over the form state, making validation, conditional rendering, and data handling much easier."

React itself does not default to controlled or uncontrolled forms.
It depends on how you write the input.

! Uncontrolled Input (default browser behavior)
If you write:

<input type="text" />

or

<input defaultValue="Touseef" />

the browser (DOM) manages the value.
! ✅ Uncontrolled Component

! Interview Answer
! By default, an HTML input is uncontrolled because the DOM manages its state. React does not automatically make inputs controlled. An input becomes controlled only when we provide a value prop and update it using onChange.

! Uncontrolled
<input />

! Controlled
<input value={name} onChange={handleChange} />
So, if someone asks:

!"What is React's default form behavior?"
You can answer:
! "Inputs are uncontrolled by default. They become controlled when their value is connected to React state using value and onChange."
*/