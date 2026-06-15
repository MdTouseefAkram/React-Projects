import React, { useState } from 'react'

const App = () => {

  // State to store posts
  let [posts, setPosts] = useState([]); //stores the list of posts
  let [newPost, setNewPost] = useState(''); // stores the input box text

  //!1. Create Operation: Add new Post
  function handleSubmit(e){
    e.preventDefault();
    //step 1
    if(newPost.trim() === ''){
      return; //ignore empy posts
    } 
    // setPosts([...posts, newPost]);
    // setNewPost(''); // clear input
    else{ // either write in else otherwise without else condition simply outside the after and if block in next line, it works fine in both cases becoz checking is done in if block.
      //step 2 - set data from posts to newPost, generally we storing data in posts with the help of newPosts, beoz the we binded the value to newPost in input field.
      setPosts([...posts, newPost]); //...posts takes all the existing posts and spreads them into a new array. //! Actaul data stored in posts via setPost(input value stores in setPost and setPost data store in post).
      // [...posts, newPost]
      //example
    // If posts = [{id:1}, {id:2}]
    // newPost = {id:3}
    // Result: [{id:1}, {id:2}, {id:3}]

    //step 3 - clear input
      setNewPost(''); // clear input.
    }
//! ...Spread operator example
// const posts = [1, 2, 3];
// const newPosts = [...posts, 4, 5];
// console.log(newPosts); // [1, 2, 3, 4, 5]
// ...posts spreads all elements of the posts array into a new array.

  };

  //!2. Update Operation: Edit a post
  function handleUpdate(index){
    let updatedPost = [...posts]; // in updated post array , it get all data of posts. (1st step, copy data from posts and store in updtedPost) //! Actaul data copied in updatedPost.
    //editedPost- user type any post which is going to store in editedPost.
    //(2nd step, take input for post and store it editedPost variable.)
    //! message = 'Edit your post: '
    //! defaultValue = posts[index] (the current post text at that position).
    let editedPost = prompt('Edit your post: ', posts[index]); //user type post and . it show with post index number. posts store in array, so edit with the help of index.
    
    if(editedPost !== null && editedPost.trim() !==''){
      //It means post is edited by user.
      //(3rd step, assign editedPost data to updatedPost Array)
      updatedPost[index] = editedPost; // assigning the data of editedPost to UpdatedPost array. user typed post is stored in updatedPost array.
      //(4th step, update the updatedPost data in posts state variable)
      setPosts(updatedPost); // actual data get updated in posts state variable.
    }
  }

  //!3. Delete Operation: Remove a post
  function handleDelete(index){
    // let updatedPost = posts.filter(()=>{}); don't use {} without return keyword inside it, outherwise it return undefined, and it do nothing.
    //! filter(() => {})
    // {} is a block, not a value.
    // When you use {} in an arrow function without return, the function returns undefined by default.
    // filter() treats undefined as false, so no element will pass.

    //! filter(() => ())
    // () is parentheses used for an expression.
    // () => (expression) is implicit return in arrow functions.
    // You need something inside parentheses for it to return a value:
    // Here, true is returned → all elements are kept.
    // If you put false → all elements are removed.

//     | Syntax               | Returns    | Effect in filter()       |
// | -------------------- | ---------- | ------------------------ |
// | `() => {}`           | undefined  | keeps **nothing**        |
// | `() => (expression)` | expression | keeps elements if `true` |


  //! _ = the value we don’t care about
  // The _ in filter (or any JavaScript function) is just a placeholder name for a parameter you don’t care about.
  // _ → the actual number (ignored)
  // _ is a convention
    // Using _ tells other developers: “We’re not using this parameter.”
    // It could be any valid name, but _ is commonly used to ignore the first argument.
    // exmple. 
    // const numbers = [10, 20, 30, 40];
    // const filtered = numbers.filter((_, i) => i % 2 === 0);
    // console.log(filtered); // [10, 30]  (keeps elements at even indices)

    //! index is the position of the post in the array that we want to delete.
    //! i → the index of the element in the array.
    //Here only which post is stored in posts state variable whose post index is not same as the index of element.
    //1st step - filter the remaining data or posts which index is not matching with post positiong and keep it stores in updatedPost variable.
    let updatedPost = posts.filter((_,i)=> i !== index); //filtering the posts state variabel based on post index which is not same index and store it to updatedPost. keep all elements whose index is not same or equal to the one we want to delete.
    //2nd step - update the posts with updatedPost data. here filter the mathcing index post, which is now removed from posts state variable.
    setPosts(updatedPost); // Here posts state variable become updated after filetr out the post which i deleted using filer.
  }

  return (
    <>
    <h1>ReactJS CRUD Example</h1>

    {/* Create: Form to add post */}
    <form action="" onSubmit={handleSubmit}>
      <input type="text"
      placeholder='Enter your post'
      value={newPost}
      onChange={(e)=>setNewPost(e.target.value)} />

      <button type='submit'>Add Post</button>
    </form>

    {/* Read: Display posts */}
    <ul>
      {posts.map((post, index)=>(
        // post is string ,so can't use post.id, if only works with object if post is object.
        // Note- post type doesn't depend on Posts state varibel which is array [], it dpends what type of data is coming inside it. here string coming from prompt, so use index. In string and Array don't use post.id.
        <li key={index}>
          {/* {''} for spacing */}
          {post}{''} 
          {/* for very display the data or post in UI with map, these two buttons also appears for deliting and updating these dynamic posts. */}
          <button onClick={()=>{handleUpdate(index)}}>Edit</button> {''}
          <button onClick={()=>{handleDelete(index)}}>Delete</button>
        </li>
      ))}
    </ul>

    </>
  )
}

export default App


//! Why do we need newPost separately?
// posts = main data (the list of posts).
// newPost = temporary input (what user is typing right now).

// React calls this a controlled input:
// The <input> value comes from React state (newPost).
// When you type, onChange updates newPost.
// On submit, newPost is pushed into posts.
// 👉 Without newPost, you can’t track what’s inside the input box unless you use a ref (useRef).

//! Why we can’t directly bind input to posts
// posts is an array of all posts, not a single string.
// The <input> needs a string value, not an array.

// Example: if posts = ["Hello", "World"], then value={posts} ❌ will break because input expects a string.
// So you still need something to temporarily hold what the user is typing before it becomes part of posts.

//! Why we can’t merge them
// If you tried to use only posts like this:

//! <input value={posts} onChange={(e) => setPosts(e.target.value)} />

//! 👉 You’d overwrite the whole array with just one string input! That means posts would stop being an array, and CRUD would break.

//! ✅ Conclusion:
// You can’t bind input directly to posts because one is a string (input) and the other is an array (list of posts).
// That’s why we need either:

// A separate state (newPost) OR
// A ref (useRef) for the input field.


//! Without newPost (using useRef) ✅
// No second state, only posts.
// Input’s value is accessed directly when submitting.

// const [posts, setPosts] = useState([]);
// const inputRef = useRef();

//! What prompt() does

// prompt(message, defaultValue)
// It opens a browser pop-up dialog box asking the user to enter text.
// message → the label inside the box (like "Edit your post:").
// defaultValue → the text that will already appear in the input field when the prompt opens.

/*
!-----------------------------------------
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

!!!! useState with array of objects !!!
useState with Array of Objects in React

When you need to store multiple objects (e.g., users, products, students), use an array of objects

! Complete Example (GPT)
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
        user.id === 1 ? { ...user, age: user.age + 1 } : user
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

? setCount(count + 1); // here we value of count in setCount function.
setCount(count + 1);

! Result: +1 only

! But:

? setCount((prev) => prev + 1); // here we pass function in setCount function.
setCount((prev) => prev + 1);

! Result: +2

! Interview Rule

! Can use users directly? ✅ Yes
! Safer and recommended? ✅ prevState

! Required when next state depends on previous state? ✅ prevState (prevUsers, prevCount, etc.)

/ Example
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

!!! Rule of Thumb

? If the new state depends on the old state → Use prevState ✅
? If you're setting a completely new value → direct update is fine.
! setName("Touseef"); // direct update is fine

Many React developers use the functional form whenever they derive the next state from the current state because it's the safest pattern.

! Yes, using prevState (functional update) is always safe, but it is not always necessary.
*/