import React, { useState } from 'react'

const AddPost = ({createPost}) => {
 let [title, setTitle] = useState("");
 let [content, setContent] = useState("");
 

//!  Flow
// User submits form.
// handleSubmit packages title and content into an object.
// Passes that object to createPost().
// createPost() sends it to JSON Server in the request body (JSON.stringify(post)).

//! createPost  is not taking two arguments. It takes one argument — an object that contains both title and content. this goes to creatPost() fun in App.jsx and then converted to string while sending to HTTP.
 function handleSubmit(e){
  e.preventDefault();
  if(!title || !content){
    return;
  }

//! "Hello World!" comes either because you wrote it in db.json manually
// OR
//! Your React app added it when you submitted the form (createPost).

  createPost({title, content}); //post created. title and content comes from input.
  setTitle("");
  setContent("");
 }
  return (
    <>
    <form action="" onSubmit={handleSubmit}>
      <input type="text"
      placeholder='Title' 
      value={title}
      onChange={(e)=>setTitle(e.target.value)}/>
      <input type="text"
      placeholder='Content'
      value={content}
      onChange={(e)=>setContent(e.target.value)} />

      <button type='submit'>Add Post</button>
    </form>
    </>
  )
}

export default AddPost

  //if my db.json is empty.
  //   {
  //   "posts": []
  // }
  // Then
  //!({ title: "First Post", content: "Hello World!" })
//! createPost({ title: "First Post", content: "Hello World!" })
// It sends this request to JSON Server:

// http
// Copy code
// POST http://localhost:5000/posts
// Content-Type: application/json

// {
//   "title": "First Post",
//   "content": "Hello World!"
// }
// Then JSON Server automatically:
// Assigns an id (like "1").
// Stores it inside db.json.
// Now your file becomes:
// json
// Copy code
// {
//   "posts": [
//     { "id": 1, "title": "First Post", "content": "Hello World!" }
//   ]
// }
// ⚡ So the answer: