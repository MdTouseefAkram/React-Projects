// import React from 'react'
import {useForm} from "react-hook-form"

const SignupForm = () => {

    // register → connects inputs to RHF
    // handleSubmit → handles form submission + validation
    // watch → watches live field values
    // formState.errors → stores validation errors

    let {register, handleSubmit, watch, formState: {errors}} = useForm();

    // data → contains all form values collected by RHF
    let onSubmit = (data) =>{
        console.log("Form Submitted: ", data);

        // Watch live value of email field
        console.log(watch("email")); // watch input value by passing the email (using watch() is optional here. Here, we simply print live value of email in console.)
        //! Think of watch() as:
        //! "Tell me the latest value of this field whenever it changes."
        //! watch() is a function provided by React Hook Form that lets you watch the current value of one or more form fields in real time.
    };

  return (
    <>
     {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
     {/* handleSubmit() collects form data, validates it, and if everything is valid, calls your onSubmit(data) function. //! When the form is submitted, handleSubmit() collects all registered field values and passes them as the data object. */}
    <form action="" onSubmit={handleSubmit(onSubmit)} noValidate>

         {/* Email Field */}
        <div>
            <label htmlFor="email">Email</label>
            {/* register your input into the hook by invoking the "register" function and it tracks the input's value and tracks when it changes*/}
            {/* include validation with required or other standard HTML validation rules */}
            {/* pattern is a validation rule in register() used to check whether the input value matches a regular expression (RegEx). */}
            <input id='email' type="email"  placeholder='Enter your email'
            {...register("email", {
                required: "Email is required",
                pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "Please enter a valid email address",
                },
            })}
            />
        
            {/* errors will return when field validation fails  */}
            {errors.email && <p>{errors.email.message}</p>}
        </div>

        {/* Password Field */}
        <div>
            <label htmlFor="password">Password</label>
            <input id='password' type="password" placeholder='Enter your passowrd'
            {...register("password", {
                required: "Password is required",
                minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                },
            })}
            />

            {errors.password && <p>{errors.password.message}</p>}
        </div>

        <button type="submit">Sign Up</button>
    </form>
    </>
  )
}

export default SignupForm

/*
! React Hook Form Library
React Hook Form is a popular third-party library that simplifies form management in React functional components by using hooks. It offers a complete set of tools to handle various aspects of forms, such as form state management, field handling, and form submission.
! React-hook-form is a ReactJS library that simplifies the process of creating forms.

! react-hook-form is a powerful library that simplifies the process of building and managing forms in React applications. It provides a minimal API, which allows for easy integration and better performance. With react-hook-form, we can validate form inputs, handle errors, and control form state efficiently, all while reducing the amount of code needed compared to traditional form handling methods.

! Advantages of using React Hook Form
Easy to learn and build
Provides form validation
Easy to handle the form submission.
We can watch any particular form field.
We can integrate with any UI library.
Provides schema validation

! Best Practice
Small forms → use React state validation.
Medium/Large forms → use React Hook Form.
Complex validation rules → use React Hook Form + Yup (or Zod).

! Most Important Things to Remember
| Function         | Purpose                             |
| ---------------- | ----------------------------------- |
| `useForm()`      | Creates form manager                |
| `register()`     | Connects input with React Hook Form |
| `handleSubmit()` | Handles submit + validation         |
| `errors`         | Stores validation errors            |
| `required`       | Field cannot be empty               |
| `pattern`        | Regex validation                    |
| `minLength`      | Minimum characters required         |
| `onSubmit(data)` | Runs when form is valid             |

! Shortcut to remember:
register()     → Connect input
errors         → Show errors
handleSubmit() → Validate + Submit
onSubmit()     → Get form data

! Complete Flow
Page Loads
    ↓
User enters Email
    ↓
User enters Password
    ↓
Click Submit
    ↓
handleSubmit()
    ↓
Validation Check
    ↓
Email Empty?
    ↓
Show Error

or

Validation Passed
      ↓
onSubmit(data)
      ↓
console.log(data)

! handleSubmit is a function provided by React Hook Form that:

? Collects all form data
? Runs validation
? Calls your submit function only if validation passes

!! handleSubmit itself does not collect data. !!

! React Hook Form (RHF) collects and stores data internally when you use register().

? User clicks Submit.
? handleSubmit runs validation.
? If validation passes:
? It reads all values from RHF's internal store.
? Creates a data object.
? Passes it to onSubmit(data).

! Flow

register()
    ↓
Tracks inputs
    ↓
Stores values in RHF internal store
    ↓
User submits form
    ↓
handleSubmit()
    ↓
Validates fields
    ↓
Collects values from RHF store
    ↓
Creates data object
    ↓
Calls onSubmit(data)
*/


/*
!---------------------------------------------------------------------------------------
! 1. useForm()
const {  register,  handleSubmit,  watch,  formState: { errors }} = useForm();

! useForm() is the main React Hook Form hook. It returns methods and state used to manage forms.

! 2. register()

! Syntax

? register(fieldName, validationRules)

Your code
{...register("email", {  required: "Email is required",  pattern: {    value: /^\S+@\S+\.\S+$/,    message: "Please enter a valid email address"  }})}

! Purpose
? Connects the input to React Hook Form.
? Tracks its value.
? Adds validation rules.

! Without register(), React Hook Form cannot manage the field.


! 3. handleSubmit()

! Syntax

handleSubmit(onSubmit)

Your code
<form onSubmit={handleSubmit(onSubmit)}>

! Purpose
? Validates all registered fields.
? If validation passes → calls onSubmit(data).
? If validation fails → updates errors.


! Example:
const onSubmit = (data) => {  console.log(data);};

! data contains all form values:
{  email: "abc@gmail.com",  password: "123456"}


! 4. watch()

! Syntax

watch(fieldName)

Your code
watch("email")

! Purpose
? Gets the current value of a field.

! Example:
const email = watch("email");console.log(email);

! If user types:
john@gmail.com

Then:
watch("email")

returns
"john@gmail.com"

! Watch Multiple Fields
watch(["email", "password"]);

! Returns:
["john@gmail.com", "123456"]

! Watch Entire Form
watch();

! Returns:
{  email: "john@gmail.com",  password: "123456"}


! 5. formState.errors

! Syntax

? formState: { errors }

! Purpose
? Contains validation errors.

! Example:
errors.email

! If email is empty:
{  type: "required",  message: "Email is required"}

! Displaying error:
{errors.email && <p>{errors.email.message}</p>}

! Output:
Email is required


!!! 6. Validation Rules in register() !!!

? Required
? register("email", {  required: "Email is required"})
? Field cannot be empty.

! Pattern
pattern: {  value: /^\S+@\S+\.\S+$/,  message: "Please enter a valid email address"}

? Checks email format.

! Valid:
abc@gmail.com

! Invalid:
abcgmail.com

! minLength
minLength: {  value: 6,  message: "Password must be at least 6 characters"}

Password must contain at least 6 characters.

! Flow of Your Form

User types
      ↓
register() tracks values
      ↓
User clicks Submit
      ↓
handleSubmit()
      ↓
Validation runs
      ↓
Valid? ── Yes ──► onSubmit(data)
      │
      No
      ↓
errors object updated
      ↓
Error messages shown

! React Hook Form APIs used in your code

| API            | Syntax                   | Purpose                    |
| -------------- | ----
-------------------- | -------------------------- |
| `useForm`      | `useForm()`              | Creates form controller    |
| `register`     | `register(name, rules)`  | Registers inputs           |
| `handleSubmit` | `handleSubmit(onSubmit)` | Validates then submits     |
| `watch`        | `watch("email")`         | Reads current field value  |
| `errors`       | `errors.email`           | Contains validation errors |

!!! errors is an object inside formState that stores validation errors for form fields. !!!

! Flow of Your Form
useForm()
   │
   ├── register()
   │      Connect inputs
   │      Add validation
   │
   ├── watch()
   │      Read current values
   │
   ├── errors
   │      Store validation errors
   │
   └── handleSubmit()
          Validate form
          ↓
     Valid ? → onSubmit(data)
     Invalid ? → errors

! formState is an object returned by useForm() that contains the current state of the form, such as validation errors, dirty status, touched fields, validity, submission status, and submission count. !!!
? It contains information like:
{
  errors: {},
  isDirty: false,
  isValid: false,
  isSubmitting: false,
  touchedFields: {},
  dirtyFields: {},
  submitCount: 0
}
*/

/*
! What is react form hook ?
! React Hook Form is a popular library used to handle forms and validation in React applications with less code and better performance.

!! Instead of creating state for every input using useState, React Hook Form manages form data for you. !!

! Without React Hook Form

const [email, setEmail] = useState("");

<input
  type="text"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>

! With React Hook Form

import { useForm } from "react-hook-form";

function MyForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("email")} placeholder="Email" />
      <input {...register("password")} placeholder="Password" />

      <button type="submit">Submit</button>
    </form>
  );
}

? Interview Definition

! React Hook Form is a lightweight React library that uses hooks to manage form state, handle form submission, and perform validation efficiently with minimal re-renders and less boilerplate code.

!! React Hook Form does not require id, label, or type because it registers fields using register(). However, in real-world applications, label and id are used for accessibility, and appropriate type attributes such as email, password, and number are used for better browser behavior and user experience.


!! useForm()

! useForm() is a hook provided by React Hook Form that manages form state, validation, submission, and error handling efficiently without requiring separate state variables for each input field. It returns methods such as register, handleSubmit, and formState.errors to simplify form handling in React applications.

useForm() is the main hook provided by the popular React library React Hook Form for handling forms efficiently.
! useForm() is a hook that creates and manages form state in React Hook Form and provides functions like register, handleSubmit, watch, and formState to handle form operations efficiently.

! useForm() creates an internal form controller that stores field values, validation rules, and form state. Unlike useState, it tracks inputs using refs and the DOM, which reduces unnecessary re-renders and improves performance.

! Why use useForm()?

? Instead of creating a separate useState for every input field, useForm() manages form data, validation, errors, and submission for you.
Instead of creating separate state variables for every input field (such as email, username, and password) and manually managing them using functions like setEmail, setUsername, and setPassword, we can use React Hook Form (RHF). RHF connects input fields through register() and automatically tracks their values, validation, and form state, reducing boilerplate code and improving performance.

! Basic Syntax

import { useForm } from "react-hook-form";

function MyForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("username", {
          required: "Username is required"
        })}
        placeholder="Username"
      />

      {errors.username && <p>{errors.username.message}</p>}

      <button type="submit">Submit</button>
    </form>
  );
}

export default MyForm;

! What useForm() Returns

| Property           | Purpose                                  |
| ------------------ | ---------------------------------------- |
| `register`         | Connects input fields to React Hook Form |
| `handleSubmit`     | Handles form submission                  |
| `formState.errors` | Contains validation errors               |
| `reset`            | Resets the form                          |
| `watch`            | Watches input values                     |
| `setValue`         | Updates a field value programmatically   |
| `getValues`        | Gets current form values                 |

! How register() Works ?

<input {...register("email")} />

This tells React Hook Form:

? Field name = "email"
? Track its value
? Include it in submitted data

! When the form is submitted:

{
  email: "abc@gmail.com"
}

! React useState vs React Hook Form

| useState Form                 | React Hook Form           |
| ----------------------------- | ------------------------- |
!| Manage each field manually    | Automatic form management |
!| Re-renders on every keystroke | Better performance        |
| More code                     | Less code                 |
?| Validation manually           | Built-in validation       |


Interview Answer

! What is useForm() in React Hook Form?

? useForm() is a hook provided by React Hook Form that manages form state, validation, submission, and error handling efficiently without requiring separate state variables for each input field. It returns methods such as register, handleSubmit, and formState.errors to simplify form handling in React applications.

! React Hook Form is a third-party library for React that simplifies form handling, validation, and submission. It works with both JavaScript and TypeScript and reduces the need to manage form state manually using useState.

!------------------------------------------------------------------------------------------------------------------------------

!! How useForm() manages form state ?

? When you call:

! const { register, handleSubmit, formState } = useForm();

! useForm() creates an internal form controller that keeps track of:

? Registered fields
? Field values
? Validation rules
? Errors
? Dirty fields
? Touched fields
? Form status (isValid, isSubmitting, etc.)

! How it works

! 1. Register fields
<input {...register("email")} />
<input {...register("password")} />

!! register() adds these fields to RHF's internal store. !!

! 2. Track values using refs

! RHF attaches a ref and event handlers to each input.

Input Field
     ↓
 register()
     ↓
 RHF stores field reference

? Instead of storing every keystroke in React state, RHF reads values directly from the DOM when needed.

! 3. Update form state

! When the user interacts with a field:

? User types
    ↓
? RHF detects change
    ↓
? Updates internal state

! For example:

formState.errors
formState.dirtyFields
formState.touchedFields

! 4. Submit form
handleSubmit(onSubmit)

! When submitted, RHF:

? Collects values from registered fields.
? Runs validations.
? Updates formState.errors if needed.
? Calls onSubmit(data) if valid.

Interview Answer

! useForm() manages form state by creating an internal form controller. It tracks registered fields, values, validations, and errors using refs and internal state instead of useState for every input, which reduces unnecessary re-renders and improves performance.

!!! State Management ? !!!

? 🧠 State Management in React Hook Form (RHF) — Concise Steps

! 1. Form Initialization
const { register, handleSubmit, formState, watch } = useForm();

! RHF creates an internal form store (object-based state) here.
? No useState needed for inputs.

! 2. Register Inputs
<input {...register("email")} />

! register() connects input to RHF store.
? Each field becomes a key in internal store:
{
  email: "value",
  password: "value"
}

! 3. User Typing (State Update)
? On input change:
! RHF updates its internal store directly
! No React re-render for every keystroke (performance optimized)

! 4. Watching State (Optional)
watch("email")

! or

useWatch({ control, name: "email" })
! Reads live values from internal store
! useWatch is more optimized (isolated re-render)

! 5. Form Submission
const onSubmit = (data) => {
  console.log(data);
};

<form onSubmit={handleSubmit(onSubmit)}>
! handleSubmit collects all values from RHF store
? Sends them as data object

! 6. Validation State
formState: { errors }

! Errors are stored separately in formState
errors.email?.message

! 7. Internal State Structure (Conceptually)

! RHF internally manages:

{
  values: {},
  errors: {},
  touchedFields: {},
  dirtyFields: {}
}

! 8. Key Idea (Most Important)
? RHF uses uncontrolled inputs + internal store
? React state is NOT used for every input
! Only minimal re-renders happen when needed

⚡ One-Line Summary

! 👉 RHF manages form state in a central internal store, updated via register(), read via watch/useWatch, validated via formState, and submitted via handleSubmit().

register()
   ↓
input connected to RHF
   ↓
user types
   ↓
RHF updates internal store
   ↓
handleSubmit()
   ↓
collects values
   ↓
onSubmit(data)

! How react hook form optimize ?
React Hook Form is optimized because it uses uncontrolled components and refs instead of storing every input value in React state.

! 1. Normal React Form (useState)

const [name, setName] = useState("");

<input
  value={name}
  onChange={(e) => setName(e.target.value)}
/>

! What happens?

! When you type:

a
ab
abc

! For every key press:

? onChange fires
? setName() updates state
? React re-renders the component

Type "abc"
↓
Render 1
Render 2
Render 3

! This can become expensive in large forms.

! 2. React Hook Form

<input {...register("name")} />

? Internally, React Hook Form attaches a ref to the input.

<input ref={ref} />

! The value stays inside the DOM input itself.

Input DOM
   ↓
Current Value

! When you type:

a
ab
abc

! React Hook Form reads the value directly from the input element.

? No setState() on every keystroke.

? No full component re-render.

! 3. Re-render Only When Needed

const {
  register,
  formState: { errors }
} = useForm();

! If an email validation error appears:

{errors.email && <p>Email is required</p>}

! Only the error-related state updates.

! The entire form doesn't need to re-render for every character typed.

! Simple Comparison

useState Form

User types
    ↓
onChange
    ↓
setState
    ↓
Component Re-render

! React Hook Form

User types
    ↓
Input DOM stores value
    ↓
React Hook Form tracks via ref
    ↓
No re-render

!---------------------------------- (IMP) ------------------------------------------------------------------------------------------------------
Interview Answer

? React Hook Form is optimized because it uses uncontrolled components and refs to manage form values instead of React state. Unlike useState, which causes a re-render on every keystroke, React Hook Form stores values in the DOM and reads them when needed. This reduces unnecessary re-renders and improves performance, especially in large forms.

! Validation is handled internally by React Hook Form, so React doesn't need to update state on every keystroke.

! How does React Hook Form optimize performance?

React Hook Form uses uncontrolled components and refs to store input values instead of React state. Since input changes do not update state, typing does not cause component re-renders. //! React Hook Form only re-renders when subscribed form state changes, such as errors, isDirty, isValid, watch(), or useWatch(). This reduces unnecessary renders and makes large forms perform much faster than traditional controlled forms.

! Summary
| Action                                       | Re-render?                  |
| -------------------------------------------- | --------------------------- |
| Typing in registered input                   | ❌ No                        |
| Validation error changes                     | ✅ Yes                       |
| `watch()` value changes                      | ✅ Yes                       |
| `formState.errors` changes                   | ✅ Yes                       |
| `isDirty`, `isValid`, `isSubmitting` changes | ✅ Yes                       |
| Parent component re-renders                  | ✅ Yes                       |
| `useWatch()` value changes                   | ✅ Only subscribed component |

!-------------------------------------------------------------------------------------------------
! How React Hook Form Manages State ?
The biggest difference between React forms and React Hook Form (RHF) is how they store input values.

! 1. Traditional React Form (Controlled Components)

const [email, setEmail] = useState("");

<input
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>

! What happens when user types "abc"?
User types "a"
     ↓
onChange fires
     ↓
setEmail("a")
     ↓
State updated
     ↓
Component re-renders

User types "b"
     ↓
setEmail("ab")
     ↓
Re-render again

User types "c"
     ↓
setEmail("abc")
     ↓
Re-render again

React state stores the input value.

! 2. React Hook Form (Uncontrolled Components)
<input {...register("email")} />

No useState.

No value.

No onChange written by you.

! What happens?
User types
    ↓
Browser updates input value
    ↓
RHF reads value using ref
    ↓
No React state update
    ↓
No re-render

! RHF stores field information internally using refs.

! 3. What register() Actually Does

! When you write:

? <input {...register("email")} />

! RHF roughly does:

<input
?  name="email"
?  ref={inputRef}
?  onChange={internalHandler}
?  onBlur={internalHandler}
/>

! It attaches:

? field name
? ref
? event handlers

! to the input.

! 4. Where Does RHF Store Values?

? Internally RHF keeps an object similar to:

{
  email: "john@gmail.com",
  password: "123456"
}

! But this object is not React state.

! Think:

const formValues = {
  email: "",
  password: ""
};

! stored inside RHF's internal store.

! Simple flow
Input Field
     ↓
register("email")
     ↓
RHF listens to changes
     ↓
Stores value internally
     ↓
handleSubmit()
     ↓
Creates data object
     ↓
onSubmit(data)

! So the value is stored inside React Hook Form's internal form store (managed by useForm()), not inside your useState variables.

! 5. When User Types

Suppose:

? <input {...register("email")} />

! User types:

j
o
h
n

! RHF updates its internal store:

{
  email: "john"
}

! without calling:

setState()

Therefore:

? No React Re-render

! 6. Then How Does RHF Show Errors?

When validation state changes:

errors.email

changes.

! Example:

Email empty
     ↓
Validation fails
     ↓
errors.email created
     ↓
Component re-renders

! Only the subscribed state updates trigger renders.

! 7. When Does RHF Re-render?
? Re-render occurs when:

Errors change

errors.email

changes.

isDirty changes
formState.isDirty

changes.

isValid changes
formState.isValid

changes.

watch() is used
watch("email")

watched value changes.

useWatch() value changes
useWatch()

subscribed value changes.

! 8. When Does RHF NOT Re-render?
? <input {...register("email")} />

Typing:

a
b
c
d

! does NOT re-render the component.

! Because RHF uses:

? DOM + refs

! instead of:

React state + setState

! 9. How handleSubmit Gets Data

When:

? handleSubmit(onSubmit)

runs,

! RHF collects all values from its internal store:

{
  email: "john@gmail.com",
  password: "123456"
}

! and passes them to:

? onSubmit(data)

! Example:

const onSubmit = (data) => {
  console.log(data);
};

Output:

{
  email: "john@gmail.com",
  password: "123456"
}

! Mental Model

React Controlled Form
Input
 ↓
onChange
 ↓
setState
 ↓
Re-render
 ↓
UI updates

! React Hook Form

Input
 ↓
DOM updates value
 ↓
RHF ref reads value
 ↓
Internal store updates
 ↓
No re-render

Interview Answer

! React Hook Form manages form state using uncontrolled components and refs instead of storing every input value in React state. It keeps field values in an internal store and updates them directly through event handlers attached by register(). Because it avoids setState() on every keystroke, typing does not cause component re-renders, which makes React Hook Form faster and more performant than traditional controlled forms. Only subscribed states such as errors, isDirty, isValid, watch, or useWatch trigger re-renders when they change.

! what is watch ?
watch() is a function provided by React Hook Form that lets you watch the current value of one or more form fields in real time.

! Common Interview Example: Confirm Password
const { register, watch } = useForm();

const password = watch("password");

<input
  type="password"
  {...register("password")}
/>

<input
  type="password"
  {...register("confirmPassword", {
    validate: (value) =>
      value === password || "Passwords do not match",
  })}
/>

! Here watch("password") gives the current password value so you can compare it with the confirm password field.

! so using watch() is recomemended?

! Yes, but only when you need it.
watch() is useful, but overusing it can reduce some of React Hook Form's performance benefits.


! Good use cases for watch()

!!! 1. Show live preview !!!
? const email = watch("email");

? return (
?   <>
?     <input {...register("email")} />
?     <p>Email: {email}</p>
?   </>
? );

? As the user types, the preview updates.

! 2. Conditional fields
const hasCompany = watch("hasCompany");

return (
  <>
    <input type="checkbox" {...register("hasCompany")} />

    {hasCompany && (
      <input {...register("companyName")} />
    )}
  </>
);

Show/hide fields based on other field values.

! 3. Password confirmation
const password = watch("password");

! Compare it with confirmPassword.

! When to avoid watch()

If you write:

? const allValues = watch();

! RHF watches the entire form.

User types in any field
      ↓
watch() value changes
      ↓
Component re-renders

! For large forms, this can cause unnecessary re-renders.

! Better alternative: useWatch()
const email = useWatch({
  control,
  name: "email",
});

? useWatch() subscribes only to specific fields and is more optimized, especially in large forms.

! Why not use watch("email")?

! You can also do:

? const email = watch("email");

! But useWatch() is more optimized.

! Benefit #1: Better Performance

! watch() is called inside the component and may cause the entire component to re-render when watched values change.

const email = watch("email");

! With:

const email = useWatch({
  control,
  name: "email",
});

! only the part using useWatch() subscribes to that field.

! What is control?

control comes from useForm():

const {
  register,
  control,
} = useForm();

? control is the object that manages RHF's internal form state. useWatch() uses it to subscribe to specific fields.

! useWatch() is a React Hook Form hook used to subscribe to and monitor form field values in real time. It returns the latest value of the specified field and is more performant than watch() for isolated field subscriptions because it avoids unnecessary re-renders of unrelated parts of the form.

! What is control ?
! control is an object created by useForm() that React Hook Form uses to manage and track the form's internal state.

const {
  register,
  handleSubmit,
  control,
} = useForm();

Think of it like this:

useForm()
   │
   ├── register()
   ├── handleSubmit()
   ├── errors
   └── control  ← form controller


! Why do we need control?

? Some RHF hooks/components need direct access to the form's internal store.

! Examples:

? useWatch()
? Controller
? useFieldArray()

!!! They use control to communicate with RHF. !!!

! Example with useWatch
import { useForm, useWatch } from "react-hook-form";

const { control } = useForm();

const email = useWatch({
  control,
  name: "email",
});

! Here:

! control tells useWatch() which form to watch.

! name: "email" tells it which field to subscribe to.


Real-world analogy
Imagine RHF is a company:

React Hook Form
       │
    control
       │
 ┌─────┼─────┐
 │     │     │
email password username

! control is the manager that knows the current value of every field and notifies subscribers when values change.

Interview definition

! control is an object returned by useForm() that acts as the internal controller of React Hook Form. It is used by hooks such as useWatch, useFieldArray, and the Controller component to access and subscribe to the form state without using React state for every field.


! Rule of Thumb

| Situation                 | Recommendation         |
| ------------------------- | ---------------------- |
!| Small form                | `watch()` is fine      |
| Need one/two field values | `watch("fieldName")`   |
!| Large form                | `useWatch()`           |
| Don't need live values    | Don't use watch at all |


! Interview Answer

! watch() is recommended when you need real-time access to field values, such as conditional rendering or live previews. However, it should be used carefully because watched fields trigger component re-renders when their values change. For large forms, useWatch() is generally preferred because it provides more granular subscriptions and better performance.
? watch() is like a listener (subscription) to form fields.

! How useWatch() is better than watch() ?
? watch() vs useWatch()

! Both give you the current field value, but the difference is re-rendering and performance.

! 1. watch()
const { register, watch } = useForm();

const email = watch("email");

! When email changes, the component containing watch() re-renders.

! Example:

function SignupForm() {
  const { register, watch } = useForm();

  const email = watch("email");

  console.log("SignupForm Rendered");

  return (
    <>
      <input {...register("email")} />
      <p>{email}</p>
    </>
  );
}

! Every keystroke:

a
ab
abc

! causes:

SignupForm Rendered
SignupForm Rendered
SignupForm Rendered

! 2. useWatch()
const email = useWatch({
  control,
  name: "email",
});

!!! useWatch() creates a subscription to a specific field. !!!
? Subscription in watch = continuously listening to form value changes and updating UI accordingly.

!🔹 What does “subscription” mean here?

Think of it like this:

? You subscribe to a field (email, password, etc.)
? RHF notifies you when it changes
? You get the latest value

! Both watch and useWatch are subscriptions, but they are used in slightly different ways.

🔥 Simple Answer
! watch() → global / less controlled subscription
! useWatch() → optimized / targeted subscription

? 👉 So useWatch is the better subscription method for performance

! Key Difference
| Feature           | watch()     | useWatch()      |
| ----------------- | ----------- | --------------- |
| Subscription type | Global      | Field-specific  |
| Performance       | Lower       | Better          |
| Re-renders        | More        | Less            |
| Best for          | small forms | large forms     |
!| Control needed    | No          | Yes (`control`) |

Interview-ready conclusion

! watch() is a general subscription method in React Hook Form, while useWatch() is a more optimized subscription that tracks specific fields using the form control, improving performance in larger forms.

! Example:

function EmailPreview({ control }) {
  const email = useWatch({
    control,
    name: "email",
  });

  console.log("EmailPreview Rendered");

  return <p>{email}</p>;
}

function SignupForm() {
  const { register, control } = useForm();

  return (
    <>
      <input {...register("email")} />
      <EmailPreview control={control} />
    </>
  );
}

! Now when the user types:

a
ab
abc

! Only:

EmailPreview Rendered
EmailPreview Rendered
EmailPreview Rendered

! The whole SignupForm doesn't need to re-render.

! Why is useWatch() better?

! watch()

Field changes
      ↓
Parent component re-renders
      ↓
All children may re-render

! useWatch()

Field changes
      ↓
Only subscribed component re-renders
      ↓
Less work

! When should you use each?

! Use watch() when:
? Small forms
? Quick debugging
? Simple live preview
? const email = watch("email");

! Use useWatch() when:
? Large forms
? Many fields
? Child components
? Performance matters
const email = useWatch({
  control,
  name: "email",
});

Interview answer

! watch() reads and subscribes to form values from within the component, often causing the component using it to re-render when values change. useWatch() creates a more isolated subscription to specific fields, so only the component using useWatch() re-renders, making it more performant for large forms and reusable child components.

! what is noValidate ?
? noValidate is an HTML form attribute that disables the browser's built-in form validation.

Syntax
<form noValidate>
  ...
</form>

! or in React:

<form onSubmit={handleSubmit(onSubmit)} noValidate>

! What is best industry parctice to use novalidate or not ?
? For React applications using React Hook Form, the most common industry practice is:

? <form onSubmit={handleSubmit(onSubmit)} noValidate>

! Why?

! In modern React apps, validation is usually handled by:

! React Hook Form
Yup
Zod
Formik
Custom validation logic

! These libraries provide:

? Custom error messages
? Better UI/UX
? Consistent behavior across browsers
? Easier integration with APIs

! If you don't use noValidate, the browser may show its own validation popup before your React validation runs.

! Example

! Without noValidate:

<input type="email" required />

! Browser popup:

? Please include an '@' in the email address.

! With React Hook Form:

register("email", {
  required: "Email is required",
  pattern: {
    value: /^\S+@\S+\.\S+$/,
    message: "Please enter a valid email",
  },
});

! Custom message:

? Please enter a valid email

! Most companies prefer the second approach because they control the user experience.
*/

/*
!------------------------------------------------------------------------------------
! Data is not an event.
const onSubmit = (data) => {
  console.log(data);
};

! It is the form values collected by React Hook Form:

{
  email: "john@gmail.com",
  password: "123456"
}

<form onSubmit={(event) => {
?  event.preventDefault();
  console.log(event);
}}>

! Here, event is the submit event object generated by the browser.

! Comparison
| event                       | data                         |
| --------------------------- | ---------------------------- |
| Browser submit event        | Form values object           |
!| Contains `preventDefault()` | Contains field values        |
| Generated by browser        | Generated by React Hook Form |
!| `event.target.value`        | `data.email`                 |

! React Hook Form can provide both
const onSubmit = (data, event) => {
  console.log(data);
  console.log(event);
};

! So event !== data.

? event → information about the submission event.
? data → values of the form fields.

! preventDefault() is already handled by React Hook Form's handleSubmit(), so you normally don't write it yourself.

! Note - data is just a parameter name. You can use any valid variable name.
! You can rename it to formData, values, user, or any other meaningful name.

!---------------------------------------------------------------------------------------------
!!! How values get stored into data ? !!!
const onSubmit = (data) => {
  console.log(data);
};

! In React Hook Form, the data object is automatically created by handleSubmit().

! Example:

const {
  register,
  handleSubmit
} = useForm();

const onSubmit = (data) => {
  console.log(data);
};

<form onSubmit={handleSubmit(onSubmit)}>
  <input {...register("email")} />
  <input {...register("password")} />
  <button type="submit">Submit</button>
</form>

!!! How values get into data? !!!

! Step 1: Register the inputs
<input {...register("email")} />
<input {...register("password")} />

? register() tells React Hook Form:

? "Track this input and store its value under this name."

Internally RHF keeps references to these inputs.

! Step 2: User types values

Suppose the user enters:

email    = john@gmail.com
password = 123456

! React Hook Form knows the current values of all registered fields.

! Step 3: Form is submitted

When you click Submit:

onSubmit={handleSubmit(onSubmit)}

! handleSubmit() runs first.

! It:

? Prevents page refresh.
? Collects values from all registered inputs.
? Creates an object.

{
  email: "john@gmail.com",
  password: "123456"
}

! Passes that object to your callback:
? onSubmit(data);

! So this happens internally:

const data = {
  email: "john@gmail.com",
  password: "123456"
};

onSubmit(data);

! Visual Flow
register("email")
        ↓
User types value
        ↓
RHF stores/tracks value
        ↓
handleSubmit()
        ↓
Collect all registered values
        ↓
Create data object
        ↓
onSubmit(data)

! Result:

const onSubmit = (data) => {
  console.log(data);
};

/ Output:
{
  email: "john@gmail.com",
  password: "123456"
}

! So you never create data yourself. handleSubmit() automatically gathers all registered field values and passes them as the data argument to onSubmit.

!------------------------------------------------------------------------------------------------------
! what is formState ?
? formState is an object provided by React Hook Form that contains information about the current state of the form.

! Example:

const {
  register,
  handleSubmit,
  formState
} = useForm();

! Now formState contains properties like:

console.log(formState);
{
  errors: {},
  isDirty: false,
  isValid: false,
  isSubmitting: false,
  touchedFields: {},
  dirtyFields: {}
}

! Common properties

| Property        | Meaning                                   |
| --------------- | ----------------------------------------- |
?| `errors`        | Validation errors                         |
| `isDirty`       | Has any field been changed?               |
| `isValid`       | Is the form valid?                        |
| `isSubmitting`  | Is the form currently submitting?         |
| `touchedFields` | Fields that have been focused and blurred |
| `dirtyFields`   | Fields whose values have changed          |

! Example

const {
  register,
  handleSubmit,
  formState
} = useForm();

? console.log(formState.errors);

! or using destructuring:

const {
  register,
  handleSubmit,
  formState: { errors }
} = useForm();

! which is the same as:

const methods = useForm();

const errors = methods.formState.errors;

! So:

! useForm() returns many things.
! One of them is formState.

? formState is an object that stores the current status of your form (errors, validity, dirty state, etc.).

! formState is called UI state because it controls what you SEE on the screen, not the actual form values.
? formState is called UI state because it controls how the form is displayed and behaves in the UI (like errors, validity, loading state), not the actual input values themselves.

! 🎯 Real Meaning (Very Important)
| Type        | Example                                        | Purpose     |
| ----------- | ---------------------------------------------- | ----------- |
| form values | email: "[abc@gmail.com](mailto:abc@gmail.com)" | actual data |
?| formState   | errors.email                                   | UI behavior |

! What is handlesubmit ?
? handleSubmit is a function provided by React Hook Form that handles the entire form submission process.

const { handleSubmit } = useForm();

! Usage
<form onSubmit={handleSubmit(onSubmit)}>

! What it does

! When the form is submitted:

? Prevents the browser's default form submission (event.preventDefault()).
? Collects values from all registered inputs.
? Validates all fields according to the rules in register().
? If validation passes, calls your callback:

const onSubmit = (data) => {
  console.log(data);
};

? If validation fails, updates formState.errors and does not call onSubmit.

! Example
const { register, handleSubmit } = useForm();

const onSubmit = (data) => {
  console.log(data);
};

return (
  <form onSubmit={handleSubmit(onSubmit)}>
    <input {...register("email", { required: true })} />
    <button type="submit">Submit</button>
  </form>
);

! Flow
User clicks Submit
        ↓
handleSubmit()
        ↓
Collect form values
        ↓
Run validations
   ↓         ↓
Invalid    Valid
   ↓         ↓
errors    onSubmit(data)

In one line:

! handleSubmit() collects form data, validates it, and if everything is valid, calls your onSubmit(data) function.

! How handlesubmit do validation ?

? handleSubmit() validates all registered fields before calling your submit function.

<form onSubmit={handleSubmit(onSubmit)}>

! What happens internally?

? User clicks Submit.
? handleSubmit() collects values from all fields registered with register().
? It runs all validation rules (required, minLength, pattern, etc.).
? If validation fails:
? onSubmit is not called.
? Errors are stored in formState.errors.
? If validation passes:
? onSubmit(data) is called with the form values.

! Example:

<input
  {...register("email", {
    required: "Email is required"
  })}
/>
const onSubmit = (data) => {
  console.log(data);
};

! Empty email → validation fails → errors.email is set → onSubmit not called.
! Valid email → validation passes → onSubmit(data) runs.

In one line:

! handleSubmit() gathers form data, validates all registered fields, and only calls onSubmit(data) if the form is valid.

! What is register ?
? register is a function from React Hook Form that registers (connects) an input field to the form.

const { register } = useForm();

! Usage
<input {...register("email")} />

! Here "email" is the field name.

! What happens?

When you write:

? <input {...register("email")} />

! React Hook Form:

? Tracks the input's value
?? Tracks when it changes
? Tracks when it is touched
? Stores its value under the key "email"
? Applies validation rules (if provided)

! Example
<input {...register("email")} />
<input {...register("password")} />

! If the user enters:

email = test@gmail.com
password = 123456

! then on submit:

{
  email: "test@gmail.com",
  password: "123456"
}

! With validation
<input
  {...register("email", {
    required: "Email is required"
  })}
/>

! Now register not only tracks the field but also tells RHF how to validate it.

Simple definition

! register() connects an input to React Hook Form so RHF can track its value, validation, and state.

! The basic syntax of register() is:

? register(name, validationRules)

! 1. Register without validation

<input {...register("email")} />
"email" = field name

! 2. Register with validation

<input
  {...register("email", {
    required: "Email is required"
  })}
/>

? First argument → field name
? Second argument → validation rules object

! Example

<input
  type="email"
  {...register("email", {
    required: "Email is required",
    pattern: {
      value: /^\S+@\S+\.\S+$/,
      message: "Invalid email"
    }
  })}
/>

! Here:

? "email" → field name
? required → field cannot be empty
? pattern → value must match the email format

So the structure is:

! register(fieldName, validationRules)

! How register works , how it connect to input field ?
register() connects an input field to React Hook Form.

! Example:

<input {...register("email")} />

! What register("email") returns
register("email")

! returns an object like:

{
  name: "email",
  onChange: function,
  onBlur: function,
  ref: function
}

! When you spread it:

? <input {...register("email")} />

! it becomes roughly:

<input
?  name="email"
?  onChange={...}
?  onBlur={...}
?  ref={...}
/>

! The ref lets React Hook Form connect to the input element and track its value without storing it in React state on every keystroke.
? ref={...} means attach a reference (ref) to a DOM element or component so you can access it directly.

!!!! How it connects to the input ? !!!!

? ref → Gives RHF access to the actual DOM input element.
? onChange → RHF listens when the value changes.
? onBlur → RHF tracks when the field is touched.
? name → RHF uses this as the key in the form data.

! Example
<input {...register("email")} />
<input {...register("password")} />

! If the user enters:

email    = abc@gmail.com
password = 123456

! then handleSubmit creates:

{
  email: "abc@gmail.com",
  password: "123456"
}

! because "email" and "password" are the names registered with RHF.

In one sentence

! register() attaches RHF's name, ref, onChange, and onBlur handlers to an input so RHF can track its value, validation, and state without using React state for every keystroke.

? the ... means RHF internally provides a ref function, something like:

ref={(element) => {
  / RHF stores the input element
}}

! So:

? ref={...} → placeholder
? ref={inputRef} → ref object
? ref={(el) => {...}} → callback ref

! The ... itself has no meaning here; it just means "some code/value is omitted."


!!! What is pattern in register() ? !!!
? pattern is a validation rule in register() used to check whether the input value matches a regular expression (RegEx).

! Syntax

<input
  {...register("email", {
    pattern: {
      value: /^\S+@\S+\.\S+$/,
      message: "Invalid email format"
    }
  })}
/>

! How it works

! When the user submits the form:

! If the value matches the pattern → Validation passes ✅
? If the value does not match the pattern → Validation fails ❌ and the error message is stored in errors

!---------------------------------------------------------------------------------------------------------------------
! Where values get stored ?

? In React Hook Form, values are stored in RHF's internal form state/store, not in your component state.

const { register, handleSubmit } = useForm();

<input {...register("email")} />

! When you type:

abc@gmail.com

! RHF internally keeps something like:

{
  email: "abc@gmail.com"
}

! Think of it as an internal JavaScript object managed by RHF.
 
!!! How does RHF get the value? !!!

? When you write:

? <input {...register("email")} />

! RHF attaches:

? ref
? name
? onChange
? onBlur

! to the input.

! Whenever the input changes:

a
ab
abc

! the onChange handler updates RHF's internal store.

! At submit time

const onSubmit = (data) => {
  console.log(data);
};

! When:

? handleSubmit(onSubmit)

! runs, RHF gathers all stored values and creates:

{
  email: "abc@gmail.com"
}

? and passes it as data.

! Simple flow

Input Field
     ↓
register("email")
     ↓
RHF listens to changes
     ↓
Stores value internally
     ↓
handleSubmit()
     ↓
Creates data object
     ↓
onSubmit(data)

! So the value is stored inside React Hook Form's internal form store (managed by useForm()), not inside your useState variables.

!!! RHF creates an internal store behind the scenes. !!!

!! Where is this store? !!

? Inside the object created by useForm().

const methods = useForm();

! Internally RHF keeps something conceptually like:

methods.control

! The control object is the central manager of:

? field values
? errors
? dirty fields
? touched fields
? subscriptions (watch, useWatch)
? validation state

!! How does handleSubmit get data?

! When you submit:

handleSubmit(onSubmit)

! RHF reads all current values from its internal store and creates:

{
  email: "abc@gmail.com",
  password: "123456"
}

! Then passes it as:

onSubmit(data)
const onSubmit = (data) => {
  console.log(data);
};

!! So data comes from RHF's internal store, not from React state. !!

! Why is RHF fast?

? Normal React form:

const [email, setEmail] = useState("");

! Every keystroke:

? type → setState → re-render

! RHF:

? type → update internal store/ref

! No full component re-render for every keystroke, which is why RHF is more performant for large forms.

! Simple mental model
useForm()
   │
   └── Internal Store
         │
         ├── values
         ├── errors
         ├── touchedFields
         ├── dirtyFields
         └── validation state

! register() → connects inputs to the store.

! watch() / useWatch() → read values from the store.

? handleSubmit() → gets values from the store and sends them as data.

formState → reads status information from the store.

! formState is not the internal store.

? formState is an object that exposes some information from the internal store.

! IMP.

useForm()
│
├── Internal Store (hidden inside RHF)
│     ├── values
│     ├── errors
│     ├── dirtyFields
│     ├── touchedFields
│     └── submit state
│
├── register
├── handleSubmit
├── watch
├── control
└── formState
      ├── errors
      ├── isDirty
      ├── isValid
      ├── isSubmitting
      └── touchedFields

! Where are values stored?

? Internally in RHF's store (managed through control).

! RHF has an internal store that keeps values, errors, touched fields, dirty fields, and validation state. formState is a read-only object that exposes part of that state (such as errors, isDirty, isValid) to the component. It is not the internal store itself.


!! In React Hook Form (RHF), the “store” is basically the internal JavaScript object where RHF keeps all form-related data and state in one place. !!

? It is not React state, not formState, and not something you directly access.

!! RHF creates a single internal controller object (called control) and inside it lives the store system. !!

? So conceptually:
useForm()
   ↓
control (manager)
   ↓
internal store (hidden memory)


!------------------------------------- (IMP) ------------------------------------------------------------------------------------
! Confirm Password field (IMPORTANT PART)
<input
  type="password"
  {...register("confirmPassword", {
    required: "Confirm password is required",

    validate: (value) =>
      value === watch("password") || "Passwords do not match"
  })}
/>

! 🔹 How validate works here
validate: (value) =>
  value === watch("password") || "Passwords do not match"

! Breakdown:
! value → confirm password input value
! watch("password") → original password value
? If both match → ✅ valid
? If not → ❌ return error message

!🔹 What RHF does internally

! Runs validate when user types or submits
? If return value is:
? true → valid
? string → error message shown

! 🔹 Simple logic view

if (confirmPassword === password)
    OK
else
    show error: "Passwords do not match"

Key takeaway

!!! validate in confirm password is used for custom comparison validation between two fields. !!!


!! what is validate and value , how it come ? !!
In React Hook Form, this part:

validate: (value) =>
  value === watch("password") || "Passwords do not match"

!! is a custom validation function. !!

Let’s break it clearly:

!!! 1. What is validate? !!!

? validate is a rule inside register() used for custom validation logic.

! 👉 Built-in rules are like:

required
minLength
pattern

! But when you need your own logic, you use:

? validate: (value) => { ... }

! 2. What is value? 

? 👉 value is the current value of that input field.

! So here:

? <input {...register("confirmPassword", { validate })} />

? ✔ value = whatever user typed in confirmPassword input

! Example:

! User types: "1234" → value = "1234"

! 3. Where does value come from?

! React Hook Form automatically passes it.

? Internally RHF does something like:

! validate(currentFieldValue)

! So you don’t create or pass value manually.

! 4. What is happening in your code?
value === watch("password") || "Passwords do not match"

! Step by step:

! Step 1:
value → confirmPassword input

! Step 2:
watch("password") → gets password field value in real time

! Step 3:

Comparison:

value === watch("password")

! Step 4:
? If TRUE → validation passes
? If FALSE → return error message:
? "Passwords do not match"

! 5. Simple meaning

👉 “Confirm password must be equal to password”

! 6. Very simple mental model
validate receives:
    current input value

you return:
    true  → valid
    false or string → error message

! 7. Why || is used?

This is a shortcut:

condition || "error message"

Means:

If condition is true → return true
If false → return error string

!!! Validate in built in rule ?
? No — validate is NOT a built-in rule in React Hook Form.

! It is a custom validation rule.

! ✔ Built-in validation rules in React Hook Form

? These are predefined rules you can use directly inside register():

! 1. required
required: "This field is required"

! 2. minLength
minLength: {
  value: 6,
  message: "Minimum 6 characters required"
}

! 3. maxLength
maxLength: {
  value: 10,
  message: "Maximum 10 characters allowed"
}

! 4. pattern
pattern: {
  value: /^[A-Za-z]+$/,
  message: "Only letters allowed"
}

! ❌ validate is NOT built-in

Instead:

! 👉 It is a custom function hook provided by RHF so you can write your own logic.

! Example:

validate: (value) => value > 10 || "Must be greater than 10"

! ✔ Key difference
| Type          | Example                 | Meaning               |
| ------------- | ----------------------- | --------------------- |
| Built-in rule | `required`, `minLength` | Predefined validation |
!| Custom rule   | `validate`              | You define logic      |

✔ Simple summary

! 👉 validate = custom rule
! 👉 not built-in like required or pattern

!!! So we need to  import validate ?
? No — you do NOT need to import validate.

! ✔ Why?

! Because validate is not a function from a library.

? It is just a property name inside register() options in React Hook Form.

! So React Hook Form already understands it internally

✔ Think of it like this

! You are NOT importing anything:

import { validate } from "react-hook-form" ❌ (wrong)

! Instead, you are just writing:

register("fieldName", {
  validate: (value) => true || "error message"
})

!!! ✔ Who provides validate then? !!!

? 👉 React Hook Form internally reads your config object:

{
  required,
  minLength,
  pattern,
!  validate   ← just a key name
}

! So RHF checks:

! “Is there a validate function? If yes, run it.”

! ✔ Simple mental model
? You don’t import validate
?? You write your own function
? RHF calls it automatically

! ✔ Example
register("age", {
  validate: (value) => value >= 18 || "Must be 18+"
})

! 👉 Here:

! value is given by RHF
! validate is executed by RHF

✔ Final answer

❌ No import needed
? ✔ validate is just a configuration function inside register()

!---------------------
! Added Username + Confirm Password into your existing code without changing your structure 👍
! Updated Your Code (clean + consistent)

/ import React from 'react'
import { useForm } from "react-hook-form";

const SignupForm = () => {
  let {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  let onSubmit = (data) => {
    console.log("Form Submitted: ", data);

    console.log(watch("email")); //! Optional , only when needed
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>

        ! Username Field
        <div>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            placeholder="Enter your username"
            {...register("username", {
              required: "Username is required",
              minLength: {
                value: 3,
                message: "Username must be at least 3 characters",
              },
            })}
          />

          {errors.username && <p>{errors.username.message}</p>}
        </div>

        ! Email Field
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Please enter a valid email address",
              },
            })}
          />

          {errors.email && <p>{errors.email.message}</p>}
        </div>

        ! Password Field
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
          />

          {errors.password && <p>{errors.password.message}</p>}
        </div>

        ! Confirm Password Field
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            id="confirmPassword"
            type="password"
            placeholder="Confirm your password"
            {...register("confirmPassword", {
              required: "Confirm password is required",
              validate: (value) => //! validate inside a field (like confirm password) is a custom validation function and used for custom validation logic and value = whatever user typed in confirmPassword input.
                value === watch("password") || "Passwords do not match", //! watch("password") → value from original password field. watch("password") returns the current value typed in the Password field (live value from RHF state).
            })}
          />

          {errors.confirmPassword && (
            <p>{errors.confirmPassword.message}</p>
          )}
        </div>

        <button type="submit">Sign Up</button>
      </form>
    </>
  );
};

export default SignupForm;

! Final flow
? Username → validated
? Email → regex validated
? Password → length validated
? Confirm Password → matches password

! How .message come confirm password in errors ?
! Flow in simple words
User types wrong value
Validation fails
RHF creates errors.confirmPassword
RHF attaches your message to .message (Internally)
You display it in UI

! RHF runs validation and if it fails, it constructs an error object like:
errors.confirmPassword = {
  type: "validate",
  message: "Passwords do not match"
}

! So:

? type → which rule failed
? message → the string you provided in the rule

! ⚙️ So .message comes from where?

? 👉 It is copied into the error object during validation phase

! Not added later by JSX
Not computed at render time

! It is stored in RHF’s internal state.

! 🧠 Simple mental model

? Think like this:

Your rule (validate/required/pattern)
        ↓
Validation runs
        ↓
If error → RHF creates object
        ↓
{ type, message } stored in errors
        ↓
UI reads errors.confirmPassword.message

? ✔ You define the message
! ✔ RHF stores it in errors[field].message
! ❌ RHF does NOT “attach it later” dynamically in React rendering

? .message is automatically injected by RHF

!!! We did not manually define message, but RHF creates it for you. !!!

! 🔑 Where does message come from?

In React Hook Form, when you define validation like this:

register("confirmPassword", {
  required: "Confirm password is required",
  validate: (value) =>
    value === watch("password") || "Passwords do not match",
})

! 👉 You are giving error messages as strings inside validation rules

? So RHF internally builds an error object like this when validation fails:

errors.confirmPassword = {
  type: "required" | "validate",
!  message: "Confirm password is required" // or "Passwords do not match"
}

! 🧠 So what is happening behind the scenes?

! Case 1: Required fails
required: "Confirm password is required"

! ➡ RHF stores:

? errors.confirmPassword.message = "Confirm password is required"

! Case 2: Validate fails
validate: (value) =>
  value === watch("password") || "Passwords do not match"

! ➡ If condition fails, RHF takes the string after || and stores:

? errors.confirmPassword.message = "Passwords do not match"

! 📦 So your JSX:
{errors.confirmPassword && (
  <p>{errors.confirmPassword.message}</p>
)}

! Means:

? If error exists → show its message
! .message is automatically injected by RHF

! 🧩 Simple mental model

Think of RHF like this:

! You provide rules + messages
? RHF runs validation
! If fail → RHF attaches your message into errors.field.message

⚡ Key takeaway

! You never define message manually because:

! ✔ RHF standardizes error objects
?? ✔ Any string you return or pass becomes .message

!---------------------------------------------------------
!!! What 3 dots means in register ? !!!

! The ... in ...register(...) is called the spread operator.

In React Hook Form, it looks like this:
? <input {...register("email")} />

! register() attaches props to the input field

!! What it means !!
! register("email") returns an object like:

{ name: "email",  
  onChange: fn,  
  onBlur: fn,  
  ref: fn
}

! When you write:
<input {...register("email")} />

! it becomes:
<input  
name="email"  
onChange={...}  
onBlur={...}  
ref={...}
/>

!! What each attached prop does ? !!

! name="email"   // identifies the field in RHF

? onChange={...} // tracks value changes and updates RHF store

? onBlur={...}   // marks field as touched and can trigger validation

? ref={...}      // connects RHF to the DOM input (focus, value access, registration)

In one sentence

! register() returns an object containing name, onChange, onBlur, and ref, and the spread operator (...) attaches these props to the input field so React Hook Form can track, validate, and manage the field automatically.

! Why it is used
? Instead of manually writing all props, React Hook Form automatically attaches everything needed to:

! track value

! handle validation

! manage focus (ref)

! detect changes

! Simple idea
Think of it like:

! “Take all properties returned by register() and put them inside the input.”

!---------------------------------------------------------------------------------------------------------
!!! The spread operator (...) attaches these props to the input field so React Hook Form can track, validate, and manage the field automatically. but how ?? !!!!

When you write:

<input {...register("email")} />

? register("email") returns an object like:

{
  name: "email",
  onChange: function,
  onBlur: function,
  ref: function
}

! Then the spread operator (...) expands this object into individual props:

<input
  name="email"
  onChange={function}
  onBlur={function}
  ref={function}
/>

! So React Hook Form automatically gets access to:

| Prop       | Job                                 |
| ---------- | ----------------------------------- |
!| `name`     | Identifies the field                |
!| `onChange` | Tracks value changes                |
!| `onBlur`   | Detects when user leaves the field  |
!| `ref`      | Gets direct access to the DOM input |

!!! How RHF tracks values ? !!!

? When the user types:

<input {...register("email")} />

! User types "abc@gmail.com".

! Input's onChange fires.
? RHF's onChange handler receives the new value.

! RHF stores it in its internal store:
{
  email: "abc@gmail.com"
}

!!! How RHF validates ? !!!

? When validation is added:

<input
  {...register("email", {
    required: "Email is required"
  })}
/>

! On blur or submit:

! RHF checks validation rules.

? If invalid:
errors = {
  email: {
    message: "Email is required"
  }
}

!!! How RHF manages focus ? !!!

? The ref is attached:

ref={function}

!! RHF keeps a reference to the actual DOM input: !!

emailInput.focus();

? This allows RHF to focus the first invalid field automatically:

! "Focus the first invalid field automatically" means:

! When you submit a form and some field fails validation, React Hook Form automatically places the cursor in the first field that has an error.

With Focus:
Email:    [|]   ← cursor automatically here
Password: [ ]

<input {...register("email")} />

! In short:

register("email")

! returns:

{
  name,
  onChange,
  onBlur,
  ref
}

! and

<input {...register("email")} />

! becomes

<input
?  name="email"
?  onChange={RHF_onChange}
?  onBlur={RHF_onBlur}
?  ref={RHF_ref}
/>

! These handlers are how React Hook Form tracks values, runs validation, and manages focus automatically.

!!! ref={function} what is function, how it works ? !!!
? When RHF returns:

<input {...register("email")} />

! it internally becomes something like:

<input
?  name="email"
?  onChange={handleChange}
?  onBlur={handleBlur}
?  ref={registerRef}
/>

Here:

! ref={registerRef}

! registerRef is a callback function.

! Example:

function registerRef(element) {
  console.log(element);
}

! React calls this function automatically and passes the DOM element to it:

registerRef(<input /> DOM element);

! So if the input renders:

? <input type="text">

! React does something like:

? registerRef(document.querySelector("input"));

! Now RHF has access to the actual input element.

!--------------------------------------------------------------
!!!! Why does RHF need the ref? !!!!!!

? Because RHF can:

! 1. Read the input directly
? input.value

! 2. Focus the input
? input.focus();

! 3. Register/unregister the field
? store["email"] = input;

! Simplified example
function saveRef(element) {
  console.log("Input DOM:", element);
}

? <input ref={saveRef} />

! When the component mounts:

? saveRef(inputDOMElement);

! Output:

Input DOM: <input>

! In RHF

! Conceptually:

function rhfRef(element) {
  fields.email = element; // save DOM reference
}

! Then RHF can later do:

? fields.email.focus();

! or

? console.log(fields.email.value);

! So:

! ref={function}

? means:

!!! "When this input is created, call this function and give it the actual DOM element." !!!

? React provides the element, and RHF stores it so it can manage the field.
!--------------------------------------------
! 🧩 Input
<input
  name="email"
  onChange={...}
  onBlur={...}
  ref={...}
/>

! 🎯 1. track value → onChange
? onChange → updates value in RHF internal store

! ✔ Job:

? captures every keystroke
! updates form state inside RHF
! keeps latest value in memory

! 👉 Think: “user is typing → store update”

! ✅ 2. handle validation → onBlur + onChange + submit trigger
? onBlur → triggers validation (if mode is onBlur)
? onChange → triggers validation (if mode is onChange)

! ✔ Job:

?? runs validation rules (required, pattern, etc.)
? updates errors object
? decides if field is valid or not

! 👉 Think: “check if value is correct”

! 🎯 3. manage focus → ref
? ref → connects input to RHF + DOM element

! ✔ Job:

? gives RHF access to real DOM input

! allows:
? focus invalid field on submit
? read value directly
? register field internally

👉 Think: “bridge between RHF and browser input”
! ref is just a bridge that lets React Hook Form grab the real input and use browser method .focus() on it.

! .focus() is a built-in browser method used to move the cursor (active input state) into an element like an input, textarea, or button.

! 🧠 In one line

? 👉 .focus() = “Put cursor inside this input so user can start interacting immediately”

! 👀 4. detect changes → onChange
? onChange → detects every input change

! ✔ Job:

? listens for typing
?? updates internal state
? optionally triggers validation

! 👉 Think: “watch user input live”

! 🧠 Final clean mapping 

| Feature        | Prop used           | Who handles it        |
| -------------- | ------------------- | --------------------- |
!| Track value    | `onChange`          | RHF internal store    |
!| Validation     | `onChange / onBlur` | RHF validation engine |
?| Focus control  | `ref`               | Browser + RHF         |
| Detect changes | `onChange`          | RHF event system      |

! ⚡ One-line memory trick

! onChange → store + detect typing
? onBlur → validation trigger
? ref → connect input to RHF + DOM
? value tracking → RHF internal system (not React state)

! Note - register("email") returns an object like:
{ name: "email",  
  onChange: fn,  
  onBlur: fn,  
  ref: fn
}
and it becomes When you write:
<input {...register("email")} />

! it becomes:
<input  
name="email"  
onChange={...}  
onBlur={...}  
ref={...}
/>
*/