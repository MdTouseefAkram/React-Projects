import { useState } from "react";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";

function App(){

  let [isLogin, setIsLogin] = useState(true);

  return(

      <>
        <h1>{isLogin ? "Login" : "Sign Up"}</h1>
        {isLogin ? <LoginForm/> : <SignUpForm/>}

        <button
        onClick={()=>{setIsLogin(!isLogin)}} //Toggle to Login and Sign up. If login then turn false and show Sign up and if false turn to true , which show Login and LoginForm.
        >Switch to {isLogin ? "Sign Up" : "Login"}</button>
      </>

  )
}
export default App;

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

! When user clicks Email, cursor goes to the input.

! Without htmlFor:

<label>Email</label>
<input id="email" />

! Clicking label does nothing.

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
