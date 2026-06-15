// import React, { useState } from 'react'

// const App = () => {
//   let [posts, setPosts] = useState([]);
//   let [newPost, setNewPost] = useState('');

//   //create
//   function handleCreate(e){
//     // e.preventDefault();
//     // if(newPost.trim() === ''){
//     //   return;
//     // } 
//     // setPosts([...posts, newPost]);
//     // setNewPost('');
//     e.preventDefault();
//     if(newPost.trim() === ''){
//       return;
//     }
//     setPosts([...posts,newPost])
//     setNewPost('');

//   }

//   //update
//   function handleUpdate(index){
//     // let updatedPost = [...posts];
//     // let editedPost = prompt("Enter your post");
//     // if(editedPost !== null && editedPost.trim() !== ''){
//     //   updatedPost[index] = editedPost;
//     //   setPosts(updatedPost);
//     // }

//     let updatedPost = [...posts]; //actaual data copied in updatedPost
//     let editedPost = prompt("Enter your post", posts[index]);
//     if(editedPost !== null && editedPost.trim() !== ''){
//       //it mean user type something, so we save it
//       updatedPost[index] = editedPost;
//       setPosts(updatedPost);
//     }

//   }

//   //delete
//   function handleDelete(index){
//     // let updatedPost = posts.filter((_, i)=> index !== i);
//     // setPosts(updatedPost)
//     let updatedPostKeeped = posts.filter((_,i)=> index !== i)
//     setPosts(updatedPostKeeped)
//   }

 



//   return (
//     <>
//     <h1>CRUD Operations in ReactJS</h1>
//     <form action="" onSubmit={handleCreate}>
//       <input type="text"
//       placeholder='Enter your post'
//       value={newPost}
//       onChange={(e)=>setNewPost(e.target.value)} />
//       <button type='submit'>Add Post</button>
//     </form>
//     {/* Read */}
//     <ul>
//       {posts.map((post, index)=>(
//         <li key={index}>
//           {post}{''}
//           <button onClick={()=>handleUpdate(index)}>Edit</button>{''}
//           <button onClick={()=>handleDelete(index)}>Delete</button>
//         </li>
//       ))}
//     </ul>
//     </>
//   )
// }

// export default App

import React, { useState } from 'react'

const App = () => {
  let [posts, setPosts] = useState([]);
  let [newPost, setNewPost] = useState('');

  function handleCreate(e){
    e.preventDefault();
    if(newPost.trim() === ''){
      return;
    }

//     Problem in your code:
// setPosts(newPost); // ❌ wrong

// This replaces posts (which should be an array) with a single string.
// Next time React tries posts.map(...), it fails because map works only on arrays.

// ✅ Correct fix:
// You should add the new post into the array instead of replacing the whole array:
// setPosts([...posts, newPost]); // ✅ push newPost into array

    setPosts([...posts,newPost]); //data bind
    setNewPost('')
  }

  function handleUpdate(index){
    let updatedPost = [...posts];
    let editedPost = prompt("Enter your text", posts[index]);
    if(editedPost !== null && editedPost.trim() !==''){
      //wem have to update now
      updatedPost[index] = editedPost;
      // setPosts(editedPost); //!not work becoz edited is string and post is array. we ca.t store , so we need updatedPost array.
      setPosts(updatedPost);
    }
  }

  function handleDelete(index){
    let updatedPost = posts.filter((_,i)=> index !== i);
    setPosts(updatedPost);
  }
  return (
    <>
    <h1>CRUD</h1>
    <form action="" onSubmit={handleCreate}>
      <input type="text"
      placeholder='Enter your Text' 
      value={newPost}
      onChange={(e)=>setNewPost(e.target.value)}/>
      
      <button type='submit'>Add Post</button>
    </form>

    <ul>
     {posts.map((post, index)=>(
        <li key={index}>
          {post}{''}
          <button onClick={()=>{handleUpdate(index)}}>Edit</button>{''}
          <button onClick={()=>{handleDelete(index)}}>Delete</button>
        </li>
      ))}
    </ul>
    </>
  )
}

export default App


//! 🔎 Why we pass index in function and button?

// When you do:

// {posts.map((post, index) => (
//   <li key={index}>
//     {post}
//     <button onClick={() => handleUpdate(index)}>Edit</button>
//     <button onClick={() => handleDelete(index)}>Delete</button>
//   </li>
// ))}

// map gives you two things:
// The current post value.
// The index (its position in the array).
// Example:
// If posts = ["Hello", "Welcome", "Bye"],
// then map runs like this:

// | post      | index |
// | --------- | ----- |
// | "Hello"   | 0     |
// | "Welcome" | 1     |
// | "Bye"     | 2     |


//! ✅ Why we need index
// 👉 Because when you Edit or Delete, you need to know which post in the array should be updated or removed.
// For Edit:

// handleUpdate(index)
// This tells the function: "Edit the post at this position."

// Inside:
// updatedPost[index] = editedPost;

// For Delete:
// handleDelete(index)

// This tells the function: "Remove the post at this position."

// Inside:
// posts.filter((_, i) => i !== index)
// → Keeps everything except the clicked post.

// In short:
// index is passed so React knows which specific item you’re editing or deleting.
// The arrow function ensures the function runs only on button click, not while rendering.
