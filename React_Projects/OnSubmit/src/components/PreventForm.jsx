import React, { useState } from 'react'

const PreventForm = () => {

    let [value, setValue] = useState("");
    let [result, setResult] = useState("");

    let handleSubmit = (event) =>{
        event.preventDefault();

        if(!value.trim()){
            alert("Input cannot be empty!");
        } else{
            setResult(value);
            alert("Form submitted successfully!");
        }
    };

    let handleChange = (event) =>{
        setValue(event.target.value);
        setResult("");
    }

  return (
    <>
    <form onSubmit={handleSubmit}>
        <label htmlFor="">
            <input type="text" value={value} onChange={handleChange} />
        </label>
        <button type='submit'>Submit</button>
    </form>

    <p>Result: {result}</p>
    </>
  )
}

export default PreventForm

/*
! onSubmit Event in React

! onSubmit is a React event triggered when a form is submitted, allowing control over submission behavior and handling of form data. It is commonly used for validation and executing custom logic.

? Triggered on Form Submit: Fires when a form is submitted.
? Prevent Default Behavior: Use event.preventDefault() to stop page reload.
? Form Validation: Validate inputs before processing.
? Custom Logic: Send data to APIs or process form data.

! Syntax:

<form onSubmit={handleSubmit} >
    <input type="text">
</form>

! onSubmit = {handleSubmit}: The event handler function handleSubmit is called when the form is submitted.
! handleSubmit: A custom function where you can define actions (like validation or API calls) when the form is submitted.

! Behaviour of the onSubmit Event in React
A user clicks the submit button inside a form.
A user presses the Enter key while focused on an input field within the form.
The form submission event is programmatically dispatched using JavaScript.
Note: When a user submits a form, React triggers the event handler and gives you access to the form’s data via the event object.

!!! handleSubmit updates result with the input value when the form is submitted. !!!
!!! handleChange updates value and clears result whenever the input changes. !!!

! Features of onSubmit
onSubmit enables controlled and customizable handling of form submission events.

? Handles Form Submissions: It captures form submission events, triggered by a user pressing a submit button or pressing Enter in a form field.
? Prevents Default Behavior: The default form submission can be prevented, allowing you to handle the submission programmatically.
? Works with All Form Elements: Can be used to handle submissions from any form element, including <input>, <textarea>, <select>, etc.
? Flexible Callback: You can perform custom actions like validation, API calls, or state updates within the onSubmit event handler.

! Use Cases
onSubmit is commonly used to manage form behavior and process user input efficiently.

? Form Validation: Check if all required fields are filled or if the data entered is valid before submitting.
? Submitting Data: Send form data to a server or API when the form is submitted.
? Prevent Page Reload: Prevent the default form behavior (page reload) and handle form submission with JavaScript.
? Displaying Confirmation: Show a confirmation message or update the UI after a successful form submission.
? Resetting Fields: Clear form fields or reset the form after submission.
 Note: It is similar to the HTML DOM onsubmit event but uses the camelCase convention in React.
*/


/*
! ---------------------------------------------------------------

! 1. <form> Attributes
| Attribute    | Purpose                        | Example                          | If Not Used                                       |
| ------------ | ------------------------------ | -------------------------------- | ------------------------------------------------- |
| `onSubmit`   | Runs when form is submitted.   | `<form onSubmit={handleSubmit}>` | Form submits normally and page may refresh.       |
| `action`     | URL where form data is sent.   | `<form action="/save">`          | Data won't be sent to a server URL automatically. |
| `method`     | HTTP method (`GET` or `POST`). | `<form method="POST">`           | Defaults to `GET`.                                |
| `noValidate` | Disables HTML validation.      | `<form noValidate>`              | Browser validation will run.                      |

! Example
<form onSubmit={handleSubmit}>
  ...
</form>

! 2. <label> Attributes
| Attribute | Purpose                    | Example                                | If Not Used                                                    |
| --------- | -------------------------- | -------------------------------------- | -------------------------------------------------------------- |
| `htmlFor` | Connects label with input. | `<label htmlFor="email">Email</label>` | Clicking label won't focus the input. Accessibility decreases. |

! Example
<label htmlFor="email">Email</label>
<input id="email" />

!! When user clicks Email, cursor goes to the input. !!

! Without htmlFor:

<label>Email</label>
<input id="email" />

!! Clicking label does nothing. !!

! 3. <input> Attributes
| Attribute     | Purpose                               | Example                     | If Not Used                               |
| ------------- | ------------------------------------- | --------------------------- | ----------------------------------------- |
| `type`        | Defines input type.                   | `type="email"`              | Defaults to `text`.                       |
| `id`          | Unique identifier.                    | `id="email"`                | Label cannot connect properly.            |
| `name`        | Name of form field.                   | `name="email"`              | Form data may not be submitted correctly. |
| `value`       | Current value (Controlled Component). | `value={email}`             | React won't control input.                |
| `placeholder` | Hint text.                            | `placeholder="Enter Email"` | No hint shown.                            |
| `onChange`    | Handles value changes.                | `onChange={handleChange}`   | Cannot update React state.                |
| `disabled`    | Disables input.                       | `disabled`                  | User can edit field.                      |
| `readOnly`    | Prevents editing.                     | `readOnly`                  | User can modify value.                    |
| `autoFocus`   | Focuses automatically.                | `autoFocus`                 | User must click manually.                 |

! Example
<input
  type="text"
  name="username"
  value={username}
  onChange={handleChange}
  placeholder="Enter Username"
/>

! 4. Validation Attributes (Most Important)
| Attribute       | Purpose                 | Example               | If Not Used                         |
| --------------- | ----------------------- | --------------------- | ----------------------------------- |
| `required`      | Field must be filled.   | `required`            | Empty submission allowed.           |
| `minLength`     | Minimum characters.     | `minLength={3}`       | No minimum length check.            |
| `maxLength`     | Maximum characters.     | `maxLength={20}`      | User can type unlimited characters. |
| `min`           | Minimum number/date.    | `min={18}`            | Smaller values allowed.             |
| `max`           | Maximum number/date.    | `max={100}`           | Larger values allowed.              |
| `pattern`       | Regex validation.       | `pattern="[A-Za-z]+"` | No custom format validation.        |
| `type="email"`  | Validates email format. | `type="email"`        | Any text accepted.                  |
| `type="number"` | Allows numeric input.   | `type="number"`       | Text can be entered.                |

! Example
<input
  type="email"
  required
  minLength={5}
/>

! Browser checks:

Not empty
Valid email format
At least 5 characters

! Complete Example
<form onSubmit={handleSubmit}>
  <label htmlFor="email">Email</label>

  <input
    id="email"
    name="email"
    type="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    placeholder="Enter Email"
    required
    minLength={5}
  />

  <button type="submit">Submit</button>
</form>

! Interview One-Line Summary

! Form
? onSubmit → Handles form submission.
? action → Where data is sent.
? method → How data is sent.

! Label
? htmlFor → Connects label to input.

! Input
? type → Input kind.
? id → Unique identifier.
?? name → Field name.
? value → Current value.
? onChange → Updates state.
? placeholder → Hint text.

! Validation
? required → Cannot be empty.
? minLength/maxLength → Character limits.
? min/max → Number/date limits.
? pattern → Custom format.
? type="email" → Email validation.

! Most Commonly Used in React Forms

! onSubmit, htmlFor, id, name, type, value, onChange, placeholder, required, minLength, maxLength, pattern. These cover about 90% of real-world React forms.

!! id is a unique attribute used to identify an HTML/React element. It is commonly used for connecting labels with form controls, applying CSS styles, accessing elements through JavaScript, and creating page navigation links.

!!! type="submit" is used on a button to submit a form. When clicked, it triggers form validation and fires the form's onSubmit event handler. !!!
*/
