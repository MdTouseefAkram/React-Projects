import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import axios from 'axios';
import EditPost from './components/EditPost';
import AddPost from './components/AddPost';
import PostList from './components/PostList';

const App = () => {
  let [posts, setPosts] = useState([]);
  let [edit, setEdit] = useState(null); //null is falsy value 

  //Ftech post
  useEffect(()=>{
    axios.get("http://localhost:5000/posts")
    .then((res)=>setPosts(res.data)) //in fetch we directly res.json(), but in axios we use setPosts(res.data) directly becoz data is already parsed to json, which is done in fetch in 2nd line and then we do setPost(data) in fetch. Here we do directly in 1st line, don't confuse.
    .catch((err)=>console.log(err))
  },[])

  //create
//! res = whole HTTP response object from Axios.

  function createPost(post){ //! post values comes from AddPost.jsx and here with value it sends to backend.
    axios.post(`http://localhost:5000/posts`,post) //!post is the new post data you want the backend to save
    .then((res)=>{
      setPosts([...posts, res.data]) //!res.data = the JSON body returned by the server.
      //Axios wraps that server response inside an object (res) with extra info (status, headers, etc).
    //The actual body (the JSON array above) is stored in res.data.
    });
  }

  //update
  //!  .id is used to uniquely identify the post both in the backend (API URL) and frontend (state update).
// Without it, your update won’t work correctly.
  function updatePost(updatedPost){
    axios.put(`http://localhost:5000/posts/${updatedPost.id}`, updatedPost) //! here in api call we updatedPost which accceptes in func args, whch is coming from EditPost.jsx (props we pass from App.jsx to EditPost.jsx) from handleSumbit() func. inside updatePost({...post,title,content})
    .then((res)=>{
      setPosts(posts.map((post)=>(post.id === updatedPost.id ? res.data : post))); //new response is updated
      setEdit(null); //what user type , make it again null.
    })
    .catch((err)=>console.log(err))
  }

  //Delete
  //! id comes from the post itself, usually via post.id when you call the function from a button or event.
  function deletePost(id){ //id comes from postList.jsx in delete Button
    axios.delete(`http://localhost:5000/posts/${id}`)
    .then((res)=>{
      setPosts(posts.filter((post)=>(post.id !== id)))
    })
    .catch((err)=>console.log(err));
  }
  return (
    <>
    <h1>CRUD with Axios</h1>
    {edit ? (
      // EditPost receives:
      // The post to edit (post)
      // A function to update it (updatePost)
      // A function to cancel editing (cancelEdit)
      <EditPost post= {edit} updatePost={updatePost} cancelEdit={()=>setEdit(null)}/>
    ) : (
      <AddPost createPost={createPost}/>
    )}

    {/* Post render on UI */}
    <PostList posts = {posts} deletePost = {deletePost} editPost={setEdit} />
    </>
  )
}

export default App

// Your API endpoints will be:

// GET http://localhost:5000/posts

// POST http://localhost:5000/posts

// PUT http://localhost:5000/posts/:id

// DELETE http://localhost:5000/posts/:id

//! Properties of Axios Response (res)

// data

// The actual response body from the server.

// If the server returns JSON, res.data will be the parsed JSON.

// Example:

// res.data = [
//   { id: 1, title: "Hello", content: "World" },
//   { id: 2, title: "Second Post", content: "More data" }
// ]


// status

// HTTP status code of the response.

// Example: 200 (OK), 201 (Created), 404 (Not Found)

// res.status = 200


// statusText

// HTTP status text returned by the server.

// Example: "OK", "Created", "Not Found"

// headers

// Object containing all HTTP response headers.

// res.headers = {
//   "content-type": "application/json; charset=utf-8",
//   ...
// }


// config

// The Axios configuration object that was used for the request.

// res.config = {
//   url: "http://localhost:5000/posts",
//   method: "get",
//   headers: { ... },
//   ...
// }


// request

// The underlying request object used to make the HTTP call (mostly useful for debugging).

// 🔹 Example for clarity
// axios.get("http://localhost:5000/posts")
//   .then((res) => {
//     console.log(res.data);    // actual posts array
//     console.log(res.status);  // 200
//     console.log(res.statusText); // "OK"
//     console.log(res.headers); // response headers
//   });

//! Syntax of axios.post
//! axios.post(url, data, config)
// url → The endpoint where you want to send the data.
//! data → The request body (what you want to create on the server).
// config → Optional settings (headers, etc).

//! Why we pass it (data like post, updatedPost after URL API)
// post is the new post data you want the backend to save
// The server needs the data to create a new resource.
// JSON Server (or any REST API) expects the body of a POST request to contain the new data.
// If you don’t pass post, the server won’t know what to create → it will return an empty object or error.

//! EditPost receives:

// The post to edit (post)

// A function to update it (updatePost)

// A function to cancel editing (cancelEdit)

// Inside EditPost, you can:

// const handleSubmit = () => {
//   updatePost(updatedPost);  // updates the parent posts array
// }

// const handleCancel = () => {
//   cancelEdit();              // sets editingPost back to null
// }


// ✅ Summary:

// Props pass data and functions from parent → child.

// post → the post object to edit.

// updatePost → updates the post in parent state.

// cancelEdit → closes the edit form without saving.