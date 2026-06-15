import React, { useState } from 'react'

const MyForm = () => {
    
    let [formData, setFormData] = useState({
        username:'',
        email:'',
        age:'',
        city:'',
        bio:'',
        role:'developer',
    });

     //! Implicit return -> Here, () tells JavaScript: This is an object. Return it automatically."
    let handleChange = (e) =>{
        let {name, value} = e.target;
        setFormData((prev) => (
           {
            ...prev, //! copies old data
            [name] : value //! update or override new data
           }
        ))
    };

   //! With curly braces, use return
    // let handleChange = (e) =>{
    //     let {name, value} = e.target;
    //     setFormData((prev)=>{
    //         return {
    //             ...prev,
    //             [name]:value   //! [e.target.name]: e.target.value . same work if don't destructure in above of setFormData function, then we directly do like [e.target.name]: e.target.value , e comes from handleChnage(e) function. The main purpose of [name]: value is to update the correct field dynamically based on the input's name attribute.
    //         }
    //     })
    // };

    let handleSubmit = (e) =>{
        e.preventDefault();
        console.log(formData);
    }
 
  return (
    <>
    <form action="" onSubmit={handleSubmit}>
        <input type="text" name='username' value={formData.username} onChange={handleChange} placeholder='Username' />
        <input type="email" name='email' value={formData.email} onChange={handleChange} placeholder='Email' />
        <input type="number" name='age' value={formData.age} onChange={handleChange} placeholder='Age' />
        <input type="text" name='city' value={formData.city} onChange={handleChange} placeholder='City' />
        <input type="text" name='bio' value={formData.bio} onChange={handleChange} placeholder='Bio' />

        {/* <option> value attribute assign to <select> value attribute and handleChange update the role in object */}
        <select name="role" id="" value={formData.role} onChange={handleChange}> 
            <option value="developer">Developer</option>
            <option value="des">Designer</option> 
            {/* if we change attribute value = 'designer' to value = 'des' then if print in console then in object it give role: "des" , //! because e.target.value returns the value attribute of the selected <option>, not the text displayed to the user. */}
            <option value="manager">Manager</option>
        </select>

        <button type='submit'>Submit</button>
    </form>
    </>
  )
}

export default MyForm

/*
! Multiple Input Fields
! When a form has multiple inputs, managing separate state variables becomes messy. Instead, store all values in one state object and use a single onChange handler that updates fields using e.target.name and e.target.value.

! Syntax:

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prev) => ({ ...prev, [name]: value }));
};

! Where,

! name — matches the field's key in the state object
! value — the new value typed by the user
? ...prev — spreads the existing state so other fields aren't overwritten
! [name]: value — dynamically updates only the field that changed

*/

/*
const handleChange = (e) => {
  setFormData({
    ...formData,
!    [e.target.name]: e.target.value
  });
};

! If the email input changes:

? e.target.name  // "email"
? e.target.value // "abc@gmail.com"

! State becomes:

{
  name: "",
  email: "abc@gmail.com",
  age: ""
}

! The first approach is better and more professional because it uses the functional state update pattern:

setFormData((prev) => ({
  ...prev,
  [name]: value
}));

! Comparison
| Second Approach                                       | First Approach                                      |
| ----------------------------------------------------- | --------------------------------------------------- |
| `setFormData({ ...formData, [name]: value })`         | `setFormData(prev => ({ ...prev, [name]: value }))` |
| Uses current `formData` variable                      | Uses latest state (`prev`)                          |
| Can cause issues when multiple updates happen quickly | Safer for asynchronous updates                      |
!| Fine for simple forms                                 | Recommended by React                                |

! ({ ...prev, [name]: value })

This returns a new object.

...prev

Copies all existing properties

{
  username: "Touseef",
  email: "abc@gmail.com",
  age: "22"
}

! [name]: value

! Updates the field that changed.

Suppose the user types:

? <input name="email" value="new@gmail.com" />

! Then:

! name = "email"
! value = "new@gmail.com"

! So:

? [name]: value

! becomes:

! email: "new@gmail.com"

! Final Result

setFormData(prev => ({
  ...prev,
  [name]: value
}));

! becomes:

setFormData({
  username: "Touseef",
  email: "new@gmail.com",
  age: "22"
});

Only the email field changes; the others stay the same.

! Flow Summary

! User types in email field
        ↓
? e.target.name  → "email"
? e.target.value → "new@gmail.com"
        ↓
setFormData(prev => ({
  ...prev,
  email: "new@gmail.com"
}))
        ↓
React updates state

! This single line lets one handleChange function update any input field (username, email, age, city, etc.) based on the input's name attribute.

!!!!! How does name match ? !!!

! Consider this state:

const [formData, setFormData] = useState({
  username: "",
  email: "",
  age: ""
});

! The keys in the state object are:

username
email
age

! Now look at an input:

<input
  name="email"
  value={formData.email}
  onChange={handleChange}
/>

! How does name match the state key?

! The input has:

? name="email"

! When the user types, React gives:

! e.target.name

! which returns:

! "email"

! This is the same as the key in:

? formData.email

! So:

!| Input `name` | State key           |
| ------------ | ------------------- |
| `"username"` | `formData.username` |
| `"email"`    | `formData.email`    |
| `"age"`      | `formData.age`      |

! That's why we say:

The name attribute should match the corresponding key in the state object.

! Easy rule

! For a controlled React input, you need:

<input
  name="username"
  value={formData.username}   // State → Input
  onChange={handleChange}     // Input → State
/>

Think of it as:

! State -----> Input  (value)

! State <----- Input  (onChange)

! value binds the state to the input, and onChange updates the state when the user types. Both work together to keep the input and state synchronized.

Summary

!| Code                 | Can Type in input box?                 |
| -------------------- | ------------------------- |
!| `value` + `onChange` | ✅ Yes (Controlled)        |
?| `value` only         | ❌ No (Read-only)          |
?| `onChange` only      | ✅ Yes (Uncontrolled)      |
| Neither              | ✅ Yes (Normal HTML input) |

So the attribute whose removal causes typing to stop is onChange when value is still present.
*/

/*
!--------------------------------------------------------------------------------------------------

!!!!!! Curly braces with return keyword or () !!!!!!!!!!!!!!!

! You can use curly braces {}, but when using an arrow function, curly braces change the meaning.

! 1. Without curly braces → implicit return

setFormData((prev) => ({
    ...prev,
    username: "John"
}));

! Here, () tells JavaScript:

! "This is an object. Return it automatically."

!! Equivalent to:

! setFormData((prev) => {
    return {
        ...prev,
        username: "John"
    };
});

! 2. With curly braces only → function body

setFormData((prev) => {
    ...prev,
    username: "John"
});

? This is invalid because JavaScript thinks:

{
  / function body
}
! and not an object literal.

!! 3. With curly braces, use return

setFormData((prev) => {
    return {
        ...prev,
        username: "John"
    };
});

! ✅ Correct

! Easy rule to remember

| Syntax             | Meaning                          |
| ------------------ | -------------------------------- |
?| `() => expression` | Automatically returns expression |
??| `() => ({})`       | Automatically returns object     |
?| `() => {}`         | Function body, must use `return` |

! Example:

! const add = (a, b) => a + b;      // implicit return

! const add2 = (a, b) => {
!    return a + b;                 // explicit return
};

! That's why in React state updates you'll often see:

setFormData((prev) => ({
    ...prev,
    [name]: value
}));

! The parentheses ({ ... }) are used so the object is returned directly.
*/

/*
!------------------------------------------------------------------------------

!!!! Which is best practice? !!!!

! When to use () vs {} with arrow functions ?
! Use () (implicit return) when returning a simple object

! setFormData((prev) => ({
  ...prev,
  [name]: value
}));


! Pros:

? Shorter
? Common in React state updates
? Easy to read when returning only one object

! Use {} (explicit return) when you need multiple statements

setFormData((prev) => {
!  console.log("Updating state"); // statement before return {}

!  return {
    ...prev,
    [name]: value
  };
});

! Pros:

? Lets you add extra logic
? Easier to debug
?? Better when the function becomes longer

!! Which should you use here?

! For your handleChange, most React developers use:

setFormData((prev) => ({
  ...prev,
  [name]: value
}));

! because it's concise and the updater only returns an object.

! Rule of thumb

!| Situation                                                | Use                    |
| -------------------------------------------------------- | ---------------------- |
!| Returning a single object/expression                     | `()` (implicit return) |
?| Need `console.log`, `if`, loops, multiple lines of logic | `{}` + `return`        |
!| Safety                                                   | Both are equally safe  |
| Most common for React state updates                      | `()`                   |

! So for setFormData, the best and most common style is:

setFormData((prev) => ({
  ...prev,
  [name]: value
}));

!!!! Use {} with return when the updater function starts doing more than just returning the new state. !!!!!

! Implicit return. () wraps the object so it can be returned directly.

! Implicit return: arrow function automatically returns the object.
!! Parentheses () tell JavaScript that { ... } is an object literal.

!---------------------------------------------------------------------------------
!! Why are the parentheses needed?

? Without them:

(prev) => {
  ...prev,
  [name]: value
}

? JavaScript treats {} as a function body, not an object.

! With them:

(prev) => ({
  ...prev,
  [name]: value
})

! JavaScript treats {} as an object and returns it automatically.

! So:

=> + no {} ⇒ implicit return.
() ⇒ tells JavaScript the {} is an object literal.
! return is implied by the arrow function syntax, not by the parentheses.
*/

/*
!-----------------------------------------------------------------------------------------------

!!!!! This <option> value attribute is useless ? !!!!!

! No, the value inside <option> is not useless. It's actually the value that gets stored in state when that option is selected.

! Example:

<select name="role" value={formData.role} onChange={handleChange}>
  <option value="developer">Developer</option>
?  <option value="designer">Designer</option>
  <option value="manager">Manager</option>
</select>


! When the user selects Designer:

! e.target.value

! becomes:

? "designer"

! and your state updates to:

{
?  role: "designer"
}

!!! What if I remove value from option? !!!!

<option>Developer</option>
? <option>Designer</option>
<option>Manager</option>

! HTML automatically uses the text between the tags as the value.

! So:

! e.target.value

! will be:

? "Developer"

! or

? "Designer"

or

"Manager"

! This works fine.

!!! Then why use value?

!! Because the displayed text and stored value can be different. !!

<option value="dev">Developer</option>
? <option value="des">Designer</option>
<option value="mgr">Manager</option>

! User sees:

Developer
Designer
Manager

! But state stores:

"dev"
"des"
"mgr"

! This is very useful when sending data to APIs or databases.

! Summary

| Code                                           | Value Stored  |
| ---------------------------------------------- | ------------- |
?| `<option>Developer</option>`                   | `"Developer"` |
?| `<option value="developer">Developer</option>` | `"developer"` |
?| `<option value="dev">Developer</option>`       | `"dev"`       |

! So the value attribute on <option> is optional only when the text itself is the value you want to store. Otherwise, it is important.


!--------------------------------------------------------------------

!! How <select> value get stores in state ? !!
? When you select an option, the <select> element's value becomes the selected option's value.

<select
!  name="role"
?  value={formData.role}
!  onChange={handleChange}
>
  <option value="developer">Developer</option>
!  <option value="designer">Designer</option>
  <option value="manager">Manager</option>
</select>

! Step 1: User selects "Designer"

! The browser sets:

? e.target.value // "designer"

! and

? e.target.name // "role"

! because:

!! <select name="role"> !!

! Step 2: handleChange runs

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prev) => ({
    ...prev,
    [name]: value
  }));
};

! After destructuring:

? name = "role";
? value = "designer";

! Step 3: State updates

setFormData((prev) => ({
  ...prev,
  [name]: value
}));

! becomes:

setFormData((prev) => ({
  ...prev,
!  role: "designer"
}));

! because:

[name]

! means:

["role"]

! which creates:

{
!  role: "designer"
}

! Before selection

formData = {
  username: "",
  email: "",
  age: "",
  city: "",
  bio: "",
  role: "developer"
}

! After selecting "Designer"

formData = {
  username: "",
  email: "",
  age: "",
  city: "",
  bio: "",
!  role: "designer"
}

! Key point

! The value is not stored directly by the <option>.

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
formData.role = "designer"  (Object property (role) gets updated and now, we can print it in console or UI. e.g, role: "designer")

! <option> value attribute assign to <select> value attribute and handleChange update the role in object.
! Selected option's value is assigned to formData.role via handleChange
? e.target.name = "role" and e.target.value = selected option value; and handleChange updates formData.role 
! Selected option's value becomes the select's value and handleChange then updates formData.role with that value.

! So the actual storage happens in:

 setFormData((prev) => ({
  ...prev,
  [name]: value
}));

!! The <option> only provides the value; React state stores it. !!
*/

/*
!------------------------------------ (IMP) -----------------------------------------

? <input type="text" name="username" />
? <input type="email" name="email" />
? <input type="number" name="age" />
? <input type="text" name="city" />
? <input type="text" name="bio" />

! Benefits:

! type="email" provides email validation and shows an email-friendly keyboard on mobile.
! type="number" restricts input to numbers and shows numeric controls on some browsers.
! type="text" is appropriate for username, city, and short bio fields.

! So:

? ✅ Using type="text" for all fields is valid.
! ✅ Using more specific types (email, number, etc.) improves the user experience and built-in validation.

!===================================================

!!!! Without text attribute is fine, when type attribute necessary ? !!!

! Yes, you can omit the type attribute because the default type of an <input> is "text".

! These two are equivalent:

? <input type="text" name="username" />
? <input name="username" />

! Both create a text input.

!!! When should you explicitly write type? !!!

!! Write type when you need a specific input behavior:

? <input type="email" name="email" />
? <input type="password" name="password" />
? <input type="number" name="age" />
? <input type="file" name="photo" />
? <input type="checkbox" name="agree" />
? <input type="radio" name="gender" />
? <input type="submit" value="Submit" />

! For text fields like username, city, or bio, omitting type is fine:

? <input name="username" />
? <input name="city" />
? <input name="bio" />

! However, many developers still write type="text" explicitly because it makes the code clearer and more readable.
*/

/*
!-----------------------------------------------------------------------------------------------------------------
!! React Forms

! In React, forms are used to take input from users, like text, numbers, or selections. They work just like HTML forms but are often controlled by React state, so you can easily track and update the input values. Forms in React can be easily added and used as a simple react element.

! Inputs in React can be either controlled or uncontrolled, with controlled being the more common approach.
! Form submission is handled using an onSubmit event handler, where event.preventDefault() is called to stop the browser from reloading the page.
*/