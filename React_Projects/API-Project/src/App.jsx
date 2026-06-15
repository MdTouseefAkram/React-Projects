import React, { useEffect, useState } from 'react'


const App = () => {

//! Hooks can only be called inside of the body of a function component.
let [data, setData] = useState([]);

// useEffect(()=>{
//   fetch('https://jsonplaceholder.typicode.com/posts')
//   .then((res)=> res.json())   // Convert response to JSON
//   .then((json)=> setData(json))  // Save data in state
//   .catch((err)=> console.log(err));  // Handle errors //rejected error object
// },[]); // Empty dependency array → runs only once when component mounts
// When a Promise is rejected, JavaScript automatically passes the error object to .catch().

//! using aync await -- btter approach
useEffect(()=>{
  let fetchData = async ()=>{
  try{
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let json = await response.json();
    setData(json);
  } catch(err){
    console.log("error", err);
  }
  
};
fetchData(); //! using aysnc await , we must call the function.
},[])


  return (
    <>
    <h1>Posts</h1>
      {data.map((post)=>(  //! don't write here {} , it dose not cause erro but it does not show data, write () after '=>'
        // <li key={post.id}>
        //   <h1>{post.title}</h1>
        //   <p>{post.body}</p>
        // </li>
         <div key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div> //! either we can use div or li if we need list then <li> tag.


))}

    
    </>
  )
}

export default App


//! Tricky Destructuring to display in UI
// To access deeply nested objects and arrays in JSON data after fetching API in React/JavaScript”
// {
//   "id": 1,
//   "title": "Learning React",
//   "comments": [
//     {
//       "id": 101,
//       "user": "Alice",
//       "replies": [
//         { "id": 201, "user": "John", "message": "Nice explanation!" }
//       ]
//     },
//     {
//       "id": 102,
//       "user": "Bob",
//       "replies": [
//         { "id": 203, "user": "Steve", "message": "Cool!" }
//       ]
//     }
//   ]
// }

//! Goal

// From this JSON we need:

// "Alice" → post.comments[0].user

// "John" → post.comments[0].replies[0].user

// 102 → post.comments[1].id

// 203 → post.comments[1].replies[0].id

// Example 2: Object inside array inside object
// {
//   "posts": [
//     {
//       "id": 101,
//       "title": "First Post",
//       "author": {
//         "name": "John",
//         "email": "john@example.com"
//       }
//     }
//   ]
// }

// return (
//   <div>
//     {data &&
//       data.posts.map((post) => (
//         <div key={post.id}>
//           <h3>{post.title}</h3>
//           <p>Author: {post.author.name}</p>
//         </div>
//       ))}
//   </div>
// );

//! ✅ Rule of Thumb:
// Use dot notation (obj.key) when accessing objects.
// Use map when data is an array.
// Always check with data && (or optional chaining data?.user?.profile?.city) to avoid errors before the API loads.
// destructuring in JavaScript and in React is the same.

//! What is Optional Chaining (?.)?
// Optional chaining (?.) is a feature in JavaScript that lets you safely
// access nested object properties without getting an error if something is undefined or null.

// ❌ Without Optional Chaining
// If you do:
// const user = {};
// console.log(user.profile.email); 

// 👉 This will throw an error:
// TypeError: Cannot read properties of undefined (reading 'email')

//! ✅ With Optional Chaining
// const user = {};
// console.log(user.profile?.email); 
//! 👉 This will return undefined instead of crashing your app.

// 🔑 How it works
// obj?.prop → returns undefined if obj is null or undefined
// obj?.[expr] → works with dynamic property names
// obj?.method?.() → safely call a method if it exists

//! How we know the data comes as object to pass as key.id in while using map(). -> res.json(), in API fetching will convert data into json object, and object has .id, so no worries, use keyVar.id.
//! But i simple CRUD App be careful, if data is stored as string or array in state variable, so doesn't have .id property, here we pass index as key in map() to display on UI.

/*
!------------------------------------------------------------------------------------------------------------
! -----Lists & Keys in ReactJS-------------

! Lists are used to display multiple items dynamically from an array.

! Keys are unique identifiers that help React track which items have changed, been added, or been removed.

! Short Answer:

! List → Display multiple items using map().
! Key → Unique identifier for each item (key={user.id}) to help React update the UI efficiently.

! Without keys, React may:
Re-render unnecessary items
Lose component state
Cause UI bugs

? V.V.I - A list in React is a collection of data items (usually an array) that are rendered dynamically using methods like map().
Array + map() = List Rendering

! A dynamic list is a list whose data can change while the application is running.

! Changes can include:
Adding items
Removing items
Updating items
Reordering items

Because the list changes dynamically, React needs keys to identify which item changed.

! A dynamic list is a list whose items can be added, removed, updated, or reordered during runtime. In React, dynamic lists are commonly rendered using map() and require unique key props for efficient updates.
*/

/*
!------------------------------------------------------------V.V.I-----------------------------------------------------------------------------
! Keys In React
! In React, keys are special attributes or identifier used to uniquely identify elements in a list. They help React efficiently update and re-render only the changed items.

! Why keys are important
When rendering lists, React compares the previous and new list using keys.

! Without keys, React may:
Re-render unnecessary items
Lose component state
Cause UI bugs

! Why keys are important ?
When React updates the UI, it uses a process called reconciliation. Keys help React:

! Match elements between renders
! Update only what actually changed (efficient rendering)
! Avoid unnecessary re-renders or bugs

! Example without keys

const fruits = ["Apple", "Banana", "Orange"];

function App() {
  return (
    <ul>
      {fruits.map((fruit) => (
        <li>{fruit}</li>
      ))}
    </ul>
  );
}

! React will show a warning:

Warning: Each child in a list should have a unique "key" prop.

! Correct usage with keys

const fruits = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Banana" },
  { id: 3, name: "Orange" }
];

function App() {
  return (
    <ul>
      {fruits.map((fruit) => (
!        <li key={fruit.id}>{fruit.name}</li>
      ))}
    </ul>
  );
}

!!!! Rules for keys !!!!!

✅ Keys should be:
! 1. Unique among siblings
Stable (should not change between renders)

!! 2. The key should be placed on the top-level element returned inside .map(). (V.V.I)

users.map(user => (
  <div key={user.id}>
    <h2>{user.name}</h2>
  </div>
))

! ❌ Wrong:

users.map(user => (
  <div>
    <h2 key={user.id}>{user.name}</h2>
  </div>
))

! 3. Prefer IDs over array indexes ✅

! ❌ Avoid:
key={Math.random()}

! because it changes every render.

! Using index as key
items.map((item, index) => (
  <li key={index}>{item}</li>
))

! This works, but it's not recommended if:

items are reordered
items are added/removed
list changes dynamically

It can cause incorrect UI updates.

!! Best practice

! Use a unique ID from your data:

! key={user.id}
Where keys are needed

! Keys are needed when rendering:

! arrays with .map()
! dynamic lists
repeated components

! Example:

{users.map(user => (
  <UserCard key={user.id} user={user} />
))}

! Important note

? Keys are used internally by React and are not accessible as props inside components.

function UserCard(props) {
  console.log(props.key); // undefined
}

! If needed, pass it separately:

<UserCard key={user.id} id={user.id} />

! what is .id  ?
! .id is simply a property named id inside an object.

! Example

const user = {
!  id: 101,
  name: "Touseef"
};

! console.log(user.id); // 101
console.log(user.name); // Touseef

! Here:

! user → object
! id → property (key) of the object
! user.id → accesses the value of the id property

! In React Lists

const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Alice" },
  { id: 3, name: "Bob" }
];

function App() {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

! When React executes:

! user.id

! it gets:

1
2
3

! for each object respectively.

! So React sees:

<li key={1}>John</li>
<li key={2}>Alice</li>
<li key={3}>Bob</li>

! Why is id commonly used for key?

! Because an id is usually:

? Unique ✅
? Stable ✅
? Doesn't change between renders ✅

! That's exactly what React wants for a key.

Object Structure
{
  id: 1,
  name: "John",
  age: 25
}
Property	Value
id	1
name	"John"
age	25

Accessing values:

user.id     // 1
user.name   // "John"
user.age    // 25

! So .id is not a React feature. It is normal JavaScript object property access, and React often uses it as a key because IDs are unique.

! Why use .id for key?

React needs a unique value for each item.

key={user.id}

means:

! "Use the id property of this object as the key."

! Since IDs are usually unique, React can identify each item correctly.

!!! .id can be replaced by any unique property (V.V.I)

const users = [
  { email: "john@gmail.com", name: "John" },
  { email: "alice@gmail.com", name: "Alice" }
];

{users.map(user => (
!  <li key={user.email}>{user.name}</li>
))}

! Here React uses email instead of id.

! Interview Answer

? user.id means "get the value of the id property from the user object." In React lists, we often use user.id as the key because IDs are usually unique and stable, helping React identify each list item efficiently.

!-------------------------------------------------------------------------------------------
! V.V.I
! what if users object don't have id and then how we use in keys ?

! If the objects don't have an id, you have several options.

! Option 1: Use another unique property (Best)

const users = [  { email: "john@gmail.com", name: "John" },  { email: "alice@gmail.com", name: "Alice" }];{users.map(user => (  <li key={user.email}>{user.name}</li>))}

! Here email is unique, so it works well as a key.

! Option 2: Use array index (Only for static lists)

{users.map((user, index) => (  <li key={index}>{user.name}</li>))}
index is the position of the item in the array:
0123...

! Use this only when:

? The list never changes order.

? Items are not inserted or removed.

? The list is mostly static.



!!! Option 3: Create an ID when creating the data (Best and common use) (V.V.I)

const users = [  { id: 1, name: "John" },  { id: 2, name: "Alice" }];

Then:
<li key={user.id}>{user.name}</li>

! This is the most common approach.

! Common Interview Answer

! If an object does not have an id, use another unique and stable property (such as email or username). If no unique property exists and the list is static, you can use the array index as the key:

key={index}

! However, using indexes is not recommended for dynamic lists where items can be added, removed, or reordered.


! Why React dislikes index keys in dynamic lists

! Suppose:

[
  "John",
  "Alice",
  "Bob"
]

! Keys using index:

0 -> John
1 -> Alice
2 -> Bob

! Now insert a new item at the beginning:

[
  "Mike",
  "John",
  "Alice",
  "Bob"
]

! Keys become:

0 -> Mike
1 -> John
2 -> Alice
3 -> Bob

! All keys changed, so React may unnecessarily re-render or mix up component state.

!!! Is keys and props are same?
! No, key and props are not the same in React.

| Feature                        | `key`                           | `props`                          |
| ------------------------------ | ------------------------------- | -------------------------------- |
| Purpose                        | Helps React identify list items | Passes data from parent to child |
| Accessible in Child Component? | ❌ No                            | ✅ Yes                            |
| Used By                        | React internally                | Developer                        |
| Common Usage                   | `map()` lists                   | Component communication          |

! Remember
key = for React
props = for your component
! key is a special React attribute and does not become part of props.


! {fruits.map((fruit) => ( . why fruit . what is this ?
{fruits.map((fruit) => (
  <li>{fruit}</li>
))}

! fruit is just a parameter of the callback function passed to map().

Why the name fruit?

! It's just a variable name chosen by the developer.

!-----------------------------------------------------------------------------
!!!  <li key={user.id}>{user.name}</li> what is user here and why and how ? !!!!!!!!!

! In this code:

<li key={user.id}>{user.name}</li>

user is usually the current object from an array while using map().

! Example

const users = [
  { id: 1, name: "Touseef" },
  { id: 2, name: "Rahul" },
  { id: 3, name: "Aman" }
];

! Now:

<ul>
  {users.map((user) => (
    <li key={user.id}>{user.name}</li>
  ))}
</ul>

!! How does user get its value?

! map() automatically passes each element of the array to the callback function.

! Iteration 1

user = { id: 1, name: "Touseef" }

! So:

<li key={1}>Touseef</li>

! Iteration 2
user = { id: 2, name: "Rahul" }

! So:

<li key={2}>Rahul</li>

! Iteration 3
user = { id: 3, name: "Aman" }

! So:

<li key={3}>Aman</li>

e.g. note - <li key={user.id}>{user.name}</li> here key = 3 and user.name = Aman and similar for above.

! Why user?

! user is just a parameter name.

users.map((user) => ...)

! is the same as:

users.map((item) => ...)

! or:

users.map((x) => ...)

! But user is more meaningful because the array contains users.

! What is user.id?

! If:

user = { id: 1, name: "Touseef" }

! then:

user.id      // 1
user.name    // "Touseef"

! Accessing object properties:

! object.property

! So:

! user.id

means:

! Get the id property from the current user object.

! Visual Representation

const users = [
  { id: 1, name: "Touseef" },
  { id: 2, name: "Rahul" }
];

! During map():

users.map((user) => ...)
!            │
!            ├── { id: 1, name: "Touseef" }
!            └── { id: 2, name: "Rahul" }

! Then:

! user.id

! becomes:

1
2

! and:

! user.name

! becomes:

"Touseef"
"Rahul"

! Complete Example

function App() {
  const users = [
    { id: 1, name: "Touseef" },
    { id: 2, name: "Rahul" },
    { id: 3, name: "Aman" }
  ];

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

!! Rule: In array.map((item) => ...), the parameter (user, item, fruit, etc.) represents the current element of the array, and item.property is used to access properties of that element if it is an object.
*/