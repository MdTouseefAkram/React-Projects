//! Handlling select input using React onChange Event
import React, { useState } from 'react'

const App = () => {

  let [value, setValue] = useState("HTML");

  let handleChange = (e) =>{
    setValue(e.target.value);
  };
  
  return (
    <>
    <h3>React onChange Event Handler</h3>

    {/* name="" id="" are optional here , not needed, because we use simple component not handling multiple input fields. */}
    {/* <option> value attribute assign to <select> value attribute and handleChange fires and updates the state. */}
    <select name="" id="" value={value} onChange={handleChange}>
      <option value={"HTML"}>HTML</option>
      <option value={"CSS"}>CSS</option>
      <option value={"JavaScript"}>JavaScript</option>
    </select>
    <br />
    <div>User Input:- {value}</div>
    </>
  )
}

export default App

/*
! React onChange Event
React onChange is an event handler that triggers when there is any change in the input field.

This event captures the changes in an Input Field and executes the handler function. It is fired when the input field is modified and loses focus. It is one of the form events that updates when the input field is modified.

It is similar to the HTML DOM onchange event but uses the camelCase convention in React.
! Lose focus means the user moves away from the input field after editing it.

! Syntax:
? <input onChange={handleChange} >

! Parameter:
handleChange: It is a function call that includes the code to be executed when an event triggers

! Return Type:
event: It is an event object containing information about the event like target element and values
*/

/*
! How it works

value={value}

! Connects the dropdown to React state. here inside {} is react state variable.

! onChange={(e) => setValue(e.target.value)}

! Runs when the user selects an option.

! e.target.value
! Returns the selected option's value.

!!! <select> Tag !!!

? The <select> element creates the dropdown container.

<select>
  <option>Java</option>
  <option>Python</option>
  <option>JavaScript</option>
</select>

!!! <option> Tag !!!

? The <option> elements represent the choices inside the dropdown.

<option value="java">Java</option>
! <option value="python">Python</option>
<option value="js">JavaScript</option>


! For example, if the user selects:

<option value="Python">Python</option>

! then:

? e.target.value // "Python"

and React updates the state.

! Difference
| Tag        | Purpose                                        |
| ---------- | ---------------------------------------------- |
| `<select>` | Creates the dropdown menu                      |
| `<option>` | Creates an individual item inside the dropdown |

Output

▼ Choose a language
   Java
   Python
   JavaScript

! <select> = dropdown box
! <option> = items inside the dropdown box.
 
!!! Why value = {value} is used inside <select/> ? !!!
? Because <select> stores the selected value, while <option> only provides possible values.

! Simple rule
| Element                  | Purpose of `value`                |
| ------------------------ | --------------------------------- |
?| `<select value={value}>` | Controls which option is selected |
?| `<option value="HTML">`  | Defines the value of that option  |

! Think of it like:
<select> = Current choice
<option> = Available choices

!!! So React state is usually connected to <select>, while each <option> has its own fixed value. !!!
!---------------------------------------------------------------------------

? <select value={value} onChange={handleChange}>
?   <option value={"HTML"}>HTML</option>
? </select>

!!! There are two different values: !!!
| Value                          | Purpose                                                                         |
| ------------------------------ | ------------------------------------------------------------------------------- |
?| `value={value}` in `<select>`  | Controls which option is currently selected. It is connected to React state.    |
?| `value={"HTML"}` in `<option>` | The actual value of that option that gets returned when the option is selected. |

! <select value={value}> → selected value (comes from state)
! <option value="HTML"> → option's own value (fixed value)

!!! what if i removed value from <select/> or from <option/> ? !!!

? <select value={value} onChange={handleChange}>
?   <option value="HTML">HTML</option>
? </select>

! 1. value={value} in <select>

? <select value={value}>

! Comes from React state.
! Tells React which option should be selected.
! Makes the <select> a controlled component.

! If you remove it:

? <select onChange={handleChange}>

! The dropdown becomes uncontrolled.
! React state no longer controls the selected option.
! The browser manages the selection itself.

! 2. value="HTML" in <option>

? <option value="HTML">HTML</option>

! Defines the value of that option.

! When selected:

? e.target.value

! returns:

"HTML"

! If you remove it:

? <option>HTML</option>

! the browser automatically uses the option text as its value.

! So:

? e.target.value // "HTML"

! still works.

! Example
<option value="HTML">HTML</option>

! and

<option>HTML</option>

! both produce:

! e.target.value === "HTML"

! when selected.

! When value in <option> is necessary

? <option value="1">HTML</option>
? <option value="2">CSS</option>

! Now:

! User sees: HTML, CSS
! Values sent are: "1", "2"
! e.target.value // "1" or "2"

! Without the value attribute, you'd only get the displayed text ("HTML" or "CSS").

! Summary

!| Remove what?                    | Result                                                                                        |
| ------------------------------- | --------------------------------------------------------------------------------------------- |
?| `value={value}` from `<select>` | Dropdown becomes uncontrolled; React state doesn't control selection.                         |
?| `value="HTML"` from `<option>`  | Browser uses the option text (`"HTML"`) as the value.                                         |
!| Remove both                     | Dropdown still works, but React is not controlling it and option values come from their text. |

*/

/*
!--------------------------------------------------------------------------------------------------------------------------------------
! 1. name attribute in <select>
? <select name="course">

! Purpose:

! Identifies the form field when a form is submitted.
! The submitted data becomes:
? course=HTML

! Used when:

Sending form data to a server.
Working with FormData.

! Example:

<form>
  <select name="course">
    <option value="HTML">HTML</option>
  </select>
</form>

! Submitted data:

? course=HTML

! If not used:

<select>

! The dropdown still works normally in React, but its value won't have a field name when the form is submitted.

! 2. id attribute in <select>
? <select id="course">

! Purpose:

! Gives the element a unique identifier.
Connects a <label> to the dropdown.

! Example:

<label htmlFor="course">Select Course</label>

<select id="course">
  <option value="HTML">HTML</option>
</select>

! When the user clicks the label, the dropdown gets focused.

! If not used:

Dropdown still works.
! But label association is lost.
! Accessibility becomes worse.

!!!! Are name and id necessary? !!!!!

| Attribute | Necessary? | Why                                         |
| --------- | ---------- | ------------------------------------------- |
?| `name`    | No         | Needed mainly for form submission           |
?| `id`      | No         | Needed for labels and unique identification |


! For your React example:

? <select value={value} onChange={handleChange}>

! name and id are optional because you're handling everything with React state.

! 3. Why value={"CSS"} and not value="CSS"?

! Both are valid:

? <option value="CSS">CSS</option>

! and

? <option value={"CSS"}>CSS</option>

! produce exactly the same result.

! Reason:

In JSX:

value="CSS"

is a plain string.

value={"CSS"}

! is a JavaScript expression that evaluates to a string.

! React treats both as:

? value: "CSS"

! When are {} required?

Required when using variables or expressions:

const course = "CSS";

<option value={course}>CSS</option>
<option value={1 + 2}>CSS</option>
<option value={true}>CSS</option>

Without {} these won't work.

! Recommended Style

! For fixed strings:

<option value="HTML">HTML</option>
<option value="CSS">CSS</option>
<option value="JavaScript">JavaScript</option>

! For variables:

? <option value={course}>{course}</option>

! This is the style most React developers follow.

!!! value attribute in an <option> tag specifies the value that is returned or submitted when that option is selected. It is accessed in React using e.target.value. !!!


!----------------------------
! !! Value Attribute in Input Tag.
! The value attribute in an <input> tag represents the current value stored in the input field.
<input type="text" value="Touseef">

! Output:

[Touseef]

Here, "Touseef" is the initial value displayed in the input box.

! In React

! value is used to control the input field with state.

import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  return (
    <input
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  );
}

! How it works

? User types "John".
? onChange fires.
? e.target.value gets "John".
? setName("John") updates state.
?? React sets value={name} to "John".

! So the input value always comes from React state.

! value = the data currently stored in an input field (or the text shown on certain input types like submit buttons).

!----------------------------------------------------------------------------------------------------

!!! Is value attribute in option and input tag is same ? !!!

! Yes, the value attribute exists in both <input> and <option>, but its purpose is slightly different.

| Element    | Purpose of `value`                                              |
| ---------- | --------------------------------------------------------------- |
!| `<input>`  | Stores the current value of the input field.                    |
!| `<option>` | Stores the value that gets selected and sent by the `<select>`. |

? Input: value = field's content.
? Option: value = data returned when that option is selected.

!----------------------------------------------------------------
!!! When name attribute required ? !!!

! name is required whenever you need to identify which form field the value belongs to.

! 1. Form Submission (Most Important)
<form>
?  <input type="text" name="username" />
  <button type="submit">Submit</button>
</form>

! Submitted data:

! username=Touseef

! Without name:

<input type="text" />

! The value is not included in the submitted form data.

!! 2. One onChange Handler for Multiple Inputs
const [formData, setFormData] = useState({
  username: "",
  email: ""
});

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
};
<input
  name="username"
  value={formData.username}
  onChange={handleChange}
/>

<input
  name="email"
  value={formData.email}
  onChange={handleChange}
/>

! Here:

! e.target.name

! returns:

! "username"

! or

! "email"

!!! So React knows which state property to update. !!!

! Without name, this pattern doesn't work.

! 3. Using FormData
const formData = new FormData(formElement);

! HTML:

<input name="username" value="Touseef" />
<input name="email" value="abc@gmail.com" />

! Result:

username = Touseef
email = abc@gmail.com

! Without name, FormData ignores the field.

! When name is NOT Required

! Your example:

<select value={value} onChange={handleChange}>
const handleChange = (e) => {
  setValue(e.target.value);
};

! You're only reading:

e.target.value

and updating a single state variable.

! So name provides no benefit here.

! Easy Interview Answer

! name is required when we need to identify a form field during form submission, FormData processing, or when handling multiple inputs with a single event handler using e.target.name. For a simple controlled component with its own state, name is optional.`

*/

/*
!!! Lose focus means the user moves away from the input field after editing it.

! For example:

<input type="text" />

? Click inside the input → the input gains focus.
? Type something.
? Click anywhere outside the input (or press Tab to move to another field) → the input loses focus.

! Example

<input
  type="text"
?  onBlur={() => console.log("Input lost focus")}
/>

! When you click outside the input after typing, the message is printed because the input lost focus.

! Focus vs Lose Focus
| Action                  | Event                 |
| ----------------------- | --------------------- |
?| Click inside an input   | `onFocus`             |
?| Click outside the input | `onBlur` (lose focus) |
?| Type/change value       | `onChange`            |

! Important React Note

The statement:

! "onChange is fired when the input field is modified and loses focus"

? is true for plain HTML in some contexts, but not for React.

! In React, onChange fires immediately whenever the value changes (every keystroke for text inputs).

<input
  type="text"
  onChange={(e) => console.log(e.target.value)}
/>

! If you type:

H
HT
HTM
HTML

! onChange runs 4 times—once for each change, without waiting for the input to lose focus.

!------------------------------------------------------------------------------
!!! FormData is a built-in JavaScript object used to collect and send form data, especially when making HTTP requests (such as file uploads).

? Yes, FormData is used in React, but it is not a React feature.

! FormData is a built-in Web API provided by the browser (JavaScript). React simply uses it when needed.

!!! React's Way (using State) !!!!

! React usually manages form data with state:

import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

! Using FormData in React

! You can also collect all form fields at once:

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    console.log(formData.get("name"));
    console.log(formData.get("email"));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" />
      <input type="email" name="email" />
      <button type="submit">Submit</button>
    </form>
  );
}

! When to Use Which?
| Use State (`useState`) | Use `FormData`                   |
| ---------------------- | -------------------------------- |
?| Real-time validation   | Simple form submission           |
?| Live UI updates        | File uploads                     |
?| Controlled components  | Collect many fields at once      |
?| Most common in React   | Common when sending data to APIs |

! Interview Answer

! FormData is not React's own feature. It is a browser-provided JavaScript API. React can use FormData to collect and send form data, especially for file uploads, while React commonly manages form values using state (useState).
!! React typically uses FormData for file uploads. !!
*/

/*
!----------------------------------------------------------------------------------------------------------------------------
!! Example from Handling Multiple Input Form or React Form (GFG)

  ! <option> value attribute assign to <select> value attribute and handleChange update the role in object.
        <select name="role" id="" value={formData.role} onChange={handleChange}> 
            <option value="developer">Developer</option>
            <option value="des">Designer</option> 
            ! if we change attribute value = 'designer' to value = 'des' then if print in console then in object it give role: "des" , //! because e.target.value returns the value attribute of the selected <option>, not the text displayed to the user.
            <option value="manager">Manager</option>
        </select>



! Complete Code
function MyForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    age: '',
    city: '',
    bio: '',
    role: 'developer',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="username" value={formData.username} onChange={handleChange} placeholder="Username" />
      <input name="email"    value={formData.email}    onChange={handleChange} placeholder="Email" />
      <input name="age"      value={formData.age}      onChange={handleChange} placeholder="Age" />
      <input name="city"     value={formData.city}     onChange={handleChange} placeholder="City" />
      <textarea name="bio"   value={formData.bio}      onChange={handleChange} placeholder="Bio" />
      <select name="role"    value={formData.role}     onChange={handleChange}>
        <option value="developer">Developer</option>
        <option value="designer">Designer</option>
        <option value="manager">Manager</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
}

!---------------------- Dropdown value updation flow (IMP) ---------------------------------------
! The flow is:

<option value="designer">
         ↓
<select> gets value = "designer"
         ↓
onChange event fires
         ↓
e.target.value = "designer"
         ↓
setFormData(...)
         ↓
state.role = "designer"

! OR

<option value="designer">
        ↓
<select> value becomes "designer"
        ↓
handleChange runs
        ↓
! name = "role"
! value = "designer"
        ↓
formData.role = "designer"  (Object property (role) gets updated and now, we can print it in console or UI. e.g, role: "designer" .)

! <option> value attribute assign to <select> value attribute and handleChange update the role in object.
! Selected option's value is assigned to formData.role via handleChange
? e.target.name = "role" and e.target.value = selected option value; and handleChange updates formData.role 
! Selected option's value becomes the select's value and handleChange then updates formData.role with that value.

*/