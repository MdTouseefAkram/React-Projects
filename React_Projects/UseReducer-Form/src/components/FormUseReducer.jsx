import React, { useReducer } from 'react'
//Use of useReducer (for Complex or Related State)
//! Now imagine a form with multiple inputs — name, age, email — and you want all state updates in one place.

//Reducer function
  function reducer(state, action){
    switch (action.type){
      case 'CHANGE_INPUT':
        return {...state, [action.field]:action.value}; // for eg. action.field , like if we type in name input box then field- "name", and action.value: what we type in input like my name, ie, Touseef , these are updated in state and return. Because in dispath we send action i.e three thing in object form, type, field and value, and accoding to field decide wheter its age or name and thne value assign and then in this reducer function state gets updated.
      case "RESET":
        return {name:"",age:"", email:""};
      default:
        return state;
    }
  }

  //Initail state
  let initialState = {
    name:"",
    age:"",
    email:""

  };
console.log("Hey",initialState);
//! Does initialState get updated?
// No. initialState never updates.
// It is used only once — when React runs the component the first time and calls:

const FormUseReducer = () => {
  
  let [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
    <h2>UseReducer Example</h2>
    <input 
    placeholder='Name'
    value={state.name}
    onChange={(e)=>dispatch({type:"CHANGE_INPUT",field:"name",value:e.target.value})}
    />

    <input 
    placeholder='Age'
    value={state.age}
    onChange={(e)=>dispatch({type:"CHANGE_INPUT",field:"age",value:e.target.value})} />

    <input 
    placeholder='Email'
    value={state.email}
    onChange={(e)=>dispatch({type:"CHANGE_INPUT",field:"email",value:e.target.value})}
    />

    <button onClick={()=>dispatch({type:"RESET"})}>Reset</button>
    <pre>{JSON.stringify(state,null,2)}</pre>

    </>
  )
}

export default FormUseReducer

{/* <pre> means preformatted text.

It keeps:
spaces
indentation
line breaks

2. What is JSON.stringify(state, null, 2)?
JSON.stringify() converts a JavaScript object into a readable string.

! It takes 3 arguments:
JSON.stringify(value, replacer, space);

In your case:
✔ state
The object you want to display.

Example:
{
  name: "Touseef",
  age: "22",
  email: "abc@gmail.com"
}

✔ null
We are not using a replacer, so it stays null.

✔ 2
This adds 2 spaces indentation → makes it formatted nicely.

//----JSON.stringify() has 3 parameters, but only the first one is mandatory.

| Code                             | Meaning                              |
| -------------------------------- | ------------------------------------ |
| `<pre>`                          | preserves formatting (shows nicely)  |
| `JSON.stringify(state, null, 2)` | converts object → pretty JSON string |
---------------------------------------------------------------------------------------
| Parameter    | Required?       | Meaning                                            |
| ------------ | --------------- | -------------------------------------------------- |
| **value**    | ✅ **Mandatory** | The data/object you want to convert to JSON string |
| **replacer** | ❌ Optional      | Used to filter or transform values                 |
| **space**    | ❌ Optional      | Used for pretty-printing (indentation)             |

*/}


/*
! For form explanation example
⚙️ Typical use in useReducer:
Imagine you have an input form where you update fields dynamically:

function reducer(state, action) {
  return { ...state, [action.field]: action.value };
}
const [state, dispatch] = useReducer(reducer, { username: "", email: "" });

!// Inside your input:
<input
  name="username"
  value={state.username}
  onChange={(e) =>
    dispatch({ field: e.target.name, value: e.target.value })
  }
/>

! When you type in the username field:
e.target.name = "username"
e.target.value = "Md Touseef Akram"

! So the reducer updates:
{ username: "Md Touseef Akram", email: "" }

!| Expression                                   | Meaning                                            |
| -------------------------------------------- | -------------------------------------------------- |
| `[action.field]`                             | Dynamic key (property name comes from variable)    |
| `action.value`                               | The value assigned to that key                     |
| `{ ...state, [action.field]: action.value }` | Copies old state and updates one field dynamically |

*/


/*
V.V.I
!💬 ----Why useReducer is Better Here-------
✅ All update logic is centralized inside the reducer.
✅ Easier to manage and debug — especially when state grows.
✅ Adding new fields (like “address” or “phone”) requires only one extra case or field.

| Scenario                                        | Best Hook    |
| ----------------------------------------------- | ------------ |
| Simple toggle, counter, form field              | `useState`   |
| Multiple related states or complex transitions  | `useReducer` |
| Global or shared state logic (like Redux-style) | `useReducer` |

*/

/* Exmaple
Replacer as an ARRAY

Include ONLY the keys mentioned in the array.

Example:
const user = {
  name: "Touseef",
  age: 22,
  city: "Delhi"
};

const json = JSON.stringify(user, ["name", "city"]);

console.log(json);

Output
{"name":"Touseef","city":"Delhi"
*/