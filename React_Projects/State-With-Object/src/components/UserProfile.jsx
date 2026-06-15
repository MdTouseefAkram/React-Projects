import React, { useState } from 'react'

const UserProfile = () => {

    let [user, setUser] = useState({
        name: "Bruce Wayne",
        age:30,
        email:"batman@justiceleague.com", 
        address: { //! Inner Object
            city: "Gotham City",
            country: "USA",
        },
    });

    console.log("Component rendering, user:", user);

    //! Update Name
    let updateName = () =>{
        setUser({
            ...user, //! to copy the object
            name: "Clark Kent", //! After copying then only only override propeties like name. Note - without copy using spread operator , other property field lost during updation. so first copy and then override(update property). 
        });
    };

    //! Update Age
    let updateAge = () =>{
        setUser({
            ...user,
            age: user.age + 1,
        });
    };

    //! Update Multiple Properties
    let updateMultiple = () =>{
        setUser({
            ...user,
            name:"Clark Kent",
            age:31,
        });
    };

    //! Update City (Nested Object example. IMP destructing)
    let updateCity = () =>{
        setUser({
            ...user, //! It copies only Top level properties.
            address:{
                ...user.address, //! It copies inner level properties.
                city:"Metropolis", //! Update - Override the value of city.
            },
        });
    };

  return (
    <>
    <h2>{user.name}</h2>
    <p>Age: {user.age}</p>
    <p>Email: {user.email}</p>
    <p>City: {user.address.city}</p>
    <p>Country: {user.address.country}</p>

    <button onClick={updateName}>Change Name to Clark Kent</button>
    <button onClick={updateAge}>Increase age by 1</button>
    <button onClick={updateMultiple}>Update Name and Age</button>
    <button onClick={updateCity}>Move to Metropolis</button>
    </>
  )
}

export default UserProfile

/*
! useState with Objects summary

! Always use the setter function to update state as changing the object
! directly won't trigger a re-render.

! Calling setState with an object replaces the entire object.

! To Keep existing fields, always spread the old object first.

! For nested objects, spread both the outer object and the nested one.
*/

/*

!!!!! useState with Object in React !!!!

! When state contains multiple related values, you can store them in an object.

! Updating One Property

? React does not merge objects automatically in useState.

! ❌ Wrong:

setUser({ age: 23 });

! Result:

{
  age: 23
}

! name and city will be lost.

!! ✅ Correct (using spread operator):

setUser({
  ...user,
  age: 23,
});

! Result:

{
  name: "Touseef",
  age: 23,
  city: "Kolkata"
}

! Using Previous State (Recommended)

setUser((prevUser) => ({
  ...prevUser,
  age: prevUser.age + 1,
}));

! Why?

! Uses the latest state value.
Prevents issues when multiple state updates happen together.

! Key Points

? useState({}) can store an object.
? setState replaces the entire object.
? Use the spread operator (...) to keep existing properties.
? Use prevState when the new value depends on the previous state.

setUser((prevUser) => ({
  ...prevUser,
  name: "Akram",
}));

! This is the most common pattern for updating object state in React.
*/

/*
!!!! useState with array of objects !!!!
useState with Array of Objects in React

! When you need to store multiple objects (e.g., users, products, students), use an array of objects

! Complete Example

import { useState } from "react";

function Users() {
  const [users, setUsers] = useState([
    { id: 1, name: "Touseef", age: 22 },
    { id: 2, name: "Akram", age: 24 },
  ]);

  const addUser = () => {
    setUsers((prevUsers) => [
      ...prevUsers,
      { id: 3, name: "Sara", age: 23 },
    ]);
  };

  const updateUser = () => {
    setUsers((prevUsers) => //! Internally React automatically passes the latest state value to prevUsers.
      prevUsers.map((user) =>
        user.id === 1
          ? { ...user, age: user.age + 1 }
          : user
      )
    );
  };

  const deleteUser = () => {
    setUsers((prevUsers) =>
      prevUsers.filter((user) => user.id !== 2)
    );
  };

  return (
    <>
      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.age}</p>
        </div>
      ))}

      <button onClick={addUser}>Add</button>
      <button onClick={updateUser}>Update</button>
      <button onClick={deleteUser}>Delete</button>
    </>
  );
}

export default Users;


! Yes, We can write it without prevState by directly using users:

import { useState } from "react";

function Users() {
  const [users, setUsers] = useState([
    { id: 1, name: "Touseef", age: 22 },
    { id: 2, name: "Akram", age: 24 },
  ]);

  const addUser = () => {
    setUsers([
      ...users,
      { id: 3, name: "Sara", age: 23 },
    ]);
  };

  const updateUser = () => {
    setUsers(
      users.map((user) =>
        user.id === 1
          ? { ...user, age: user.age + 1 }
          : user
      )
    );
  };

  const deleteUser = () => {
    setUsers(
      users.filter((user) => user.id !== 2)
    );
  };

  return (
    <>
      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.age}</p>
        </div>
      ))}

      <button onClick={addUser}>Add</button>
      <button onClick={updateUser}>Update</button>
      <button onClick={deleteUser}>Delete</button>
    </>
  );
}

export default Users;

! When is this okay?

! Use this when you're performing one state update and the new state doesn't depend on multiple queued updates.

setUsers([...users, newUser]);

! When should you use prevState?

! If the next state depends on the previous state, especially when multiple updates can happen before a re-render.

setUsers((prevUsers) => [...prevUsers, newUser]);

! Example:

? setCount(count + 1);  // here we value of count in setCount function.
setCount(count + 1);

! Result: +1 only

! But:

? setCount((prev) => prev + 1); // here we pass function in setCount function.
setCount((prev) => prev + 1);

! Result: +2

! Interview Rule

? Can use users directly? ✅ Yes
! Safer and recommended? ✅ prevState
Required when next state depends on previous state? ✅ prevState (prevUsers, prevCount, etc.)

! Most Common Operations

| Operation    | Method                    |
| ------------ | ------------------------- |
| Display data | `map()`                   |
| Add item     | `[...]` (spread operator) |
| Update item  | `map()`                   |
| Delete item  | `filter()`                |

! For React interviews, remember:

Display → map()
Add → Spread operator (...)
Update → map()
Delete → filter()
! Use prevState when the new state depends on the previous state.

! setUsers((prevUsers) =>
  ? React automatically passes the latest state value to prevUsers.
  ? prevUsers = latest state React has when processing the update.
  ? users = state from the current render.
  ? In a simple case they may be the same, but not always.
)

Current State (users)
        ↓
React reads latest state
        ↓
React calls your callback
        ↓
(prevUsers) receives that state
        ↓
You return the next state
        ↓
React updates users


! That's why prevUsers already has a value even though you never assign one yourself—React passes it into the callback parameter automatically.

! Rule of Thumb

? If the new state depends on the old state → Use prevState ✅
? If you're setting a completely new value → direct update is fine.
! setName("Touseef"); // direct update is fine

Many React developers use the functional form whenever they derive the next state from the current state because it's the safest pattern.

! Yes, using prevState (functional update) is always safe, but it is not always necessary.
*/