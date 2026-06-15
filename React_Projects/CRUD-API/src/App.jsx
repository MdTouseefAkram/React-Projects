import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PostForm from './components/PostForm.jsx';
import PostList from './components/PostList';

//! not working this properly and have ???
const App = () => {
  let [posts, setPosts] = useState([]);
  
  //!1. Read (fetch)
  useEffect(()=>{
// The ?_limit=5 part is a query parameter.
// Here, _limit=5 tells the server (JSONPlaceholder in this case) to return only 5 posts instead of the full list (which normally has 100 posts).
// So _limit is not part of the path, it’s an explicit filter option (query parameter) you pass to the API.

// 👉 In short:
// ? starts the query string.
// _limit is the key.
// 5 is the value.
// It’s explicitly telling the API: “Give me only 5 results.”
    axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=5`)
    .then((res)=>setPosts(res.data)) //! The parsed JSON data
    .catch((err)=>console.log(err));
  },[]);
// 🔹 In Fetch API
// When you use fetch, the response you get is a ReadableStream, not JSON directly.
// So you need to manually parse it:
//!fetch("https://jsonplaceholder.typicode.com/posts")
//!   .then(res => res.json())  // convert stream -> JSON
//   .then(data => console.log(data));

// Here, .json() is an asynchronous method that reads the body and converts it into a JavaScript object.
// 🔹 In Axios
// Axios automatically parses the response body based on the Content-Type header.
// So if the server sends back JSON (e.g., application/json), Axios parses it for you, and directly puts it into res.data.
//! axios.get("https://jsonplaceholder.typicode.com/posts")
//!   .then(res => console.log(res.data)); // Already parsed JSON
// That’s why you don’t need to call .json() in Axios — it’s already handled.

// 🔑 Summary
// Fetch → you must call .json() to parse.
// Axios → parsing is done automatically, result is in .data.
//! The .data property is the actual response body from the server.
// When you make a request with Axios, it gives you back a response object.
// That object has several properties, like:
// {
//   data: {...},        // ✅ the actual response body (already parsed, e.g. JSON)
//   status: 200,        // HTTP status code (e.g., 200, 404, 500)
//   statusText: "OK",   // Status message (e.g., "OK", "Not Found")
//   headers: {...},     // Response headers
//   config: {...},      // Axios request config used for this call
//   request: {...}      // The request object
// }
//! Key difference
// res.data → the thing you usually want (actual response body).
// res (whole object) → contains metadata (status, headers, config, etc.) plus the .data.

//!2. create
//explaination
//! Function Input

// function createPost{ (title) => { ... }}
//! The function addPost takes one argument, title (a string).
//! Example: createPost("My New Post").
// Sending a POST Request
// axios.post("https://jsonplaceholder.typicode.com/posts", { title })

//! axios.post(url, data) sends a POST request to the given API endpoint.
// URL → "https://jsonplaceholder.typicode.com/posts" (a fake test API).
// Data → { title } means we’re sending an object like:
//! { "title": "My New Post" }

//! Handling the Response

// .then((res) => setPosts([res.data, ...posts]))
// If the request succeeds, Axios gives a res object.
//! res.data contains the response body (the created post). Example:

//! {
//!   id: 101,            // (jsonplaceholder auto-generates an ID)
//!   title: "My New Post"
//! }
// setPosts([res.data, ...posts]) updates your React state:
//! [res.data, ...posts] → puts the new post first, then the old posts after it.
// This way, the UI updates immediately with the new post added on top.

// Error Handling
// .catch((err) => console.error(err));
// If something goes wrong (like network error), it logs the error.
// Example: "Network Error" or "500 Internal Server Error".

//! In short:
// axios.post(...) sends data to the server.
// res.data is the new post returned by the server.
// setPosts([res.data, ...posts]) updates your React state so UI shows the new post immediately.

function createPost(title){
  axios.post("https://jsonplaceholder.typicode.com/posts", {title})
  .then((res)=>setPosts([res.data, ...posts]))
  .catch((err)=>console.log(err));
}

//!3. update
//! res.data in Axios = the actual data returned from the server, already parsed and ready to use.
// {
//   data: {...},        // ✅ the actual response body from the server
//   status: 200,        // HTTP status code (200, 404, 500, etc.)
//   statusText: "OK",   // Human-readable status
//   headers: {...},     // Response headers
//   config: {...},      // Axios request config
//   request: {...}      // Low-level request object
// }

// Key points:

// axios.put(...) → Sends an update request to the API with id and newTitle.
// Example request body: { title: "New title" }.
//! res.data → The updated post object returned by the API.
// Example:
// {
//   "id": 3,
//   "title": "New title",
//   "userId": 1
// }
// setPosts(posts.map(...)) → Updates React state.
// Loops over all posts.
//! If a post’s id matches the updated one → replace it with res.data.
// Otherwise → keep the old post as-is.
//! 👉 So yes, res.data is a single updated post object, and that replaces only the matching post inside your posts array.

//! What is res.data here?
// When you call axios.put(...), the server sends back a response.
// res is that whole response object from Axios.
// res.data is the actual data returned by the API (the body of the response).
// For example, after updating a post, the API might return something like:

// {
//   "id": 3,
//   "title": "Updated Title",
//   "userId": 1
// }
// That object is what res.data contains.
// What happens in the map(...)
// You loop through all posts in state.
// If a post’s id matches the one you just updated → replace it with res.data (the updated post).
// Otherwise → keep the post unchanged.
// So effectively, res.data replaces the old version of the updated post in your posts state.
function updatePost(id, newTitle){
  axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`,{title: newTitle})
  .then((res)=>{setPosts(posts.map((post)=>(post.id === id ? res.data : post))) //! res.data = the updated post object returned from the API. if id matched, updated it new post other keep old post.
  }) 
  .catch((err)=>console.log(err));
};

//!4. Delete
// post in map is just the variable name for each single item (object) inside posts while looping.
//Here res.data is not used becoz we want delete only no single post to add or update. res.data is a single post.
function deletePost(id){
  axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
  .then(()=>setPosts(posts.filter((post)=> post.id !== id)))  //!removes the deleted post from React state by keeping only posts whose id is not equal to the deleted one.
  .catch((err)=>console.log(err));
};


//! res.data
// What is res.data in Axios?

// When you make a request with Axios (get, post, put, delete), it returns a response object (res).
// That response object has many properties like:
// res.status → HTTP status code (200, 201, etc.)
// res.headers → response headers
// res.data → the actual data (body) sent back from the server
// Example:
// If you update a post:
// axios.put("https://jsonplaceholder.typicode.com/posts/3", { title: "New Title" })
//   .then((res) => console.log(res));

//   The full res might look like:

// {
//   data: {
//     id: 3,
//     title: "New Title",
//     userId: 1
//   },
//   status: 200,
//   statusText: "OK",
//   headers: { ... },
//   config: { ... },
//   request: { ... }
// }
// 👉 So here:
// res = whole response object.
// res.data = { id: 3, title: "New Title", userId: 1 } → the updated post object.
// ✅ In short:
// res.data is always the main data returned by the API (like one post, all posts, or whatever the server sends).

//! 1️⃣ GET request
// axios.get("https://jsonplaceholder.typicode.com/posts")
//   .then(res => console.log(res.data));

//! res.data → all posts returned by the server

// Example:

// [
//   { "id": 1, "title": "Post 1" },
//   { "id": 2, "title": "Post 2" }
// ]
// Key: res.data = whatever the server sends in the body.

//! 2️⃣ GET single item
// axios.get("https://jsonplaceholder.typicode.com/posts/3")
//   .then(res => console.log(res.data));

//! res.data → a single post object

// { "id": 3, "title": "Post 3" }

//! 3️⃣ POST request (create)
// axios.post("https://jsonplaceholder.typicode.com/posts", { title: "New Post" })
//   .then(res => console.log(res.data));
//! res.data → the newly created post object returned by server

// { "id": 101, "title": "New Post" }

// Server usually returns the created object with a new id.

//! 4️⃣ PUT request (update)
// axios.put("https://jsonplaceholder.typicode.com/posts/3", { title: "Updated Title" })
//   .then(res => console.log(res.data));
//! res.data → the updated post object

// { "id": 3, "title": "Updated Title" }

// Only the updated object, not the whole array.

//! 5️⃣ DELETE request
// axios.delete("https://jsonplaceholder.typicode.com/posts/3")
//   .then(res => console.log(res.data));
//! res.data → usually empty object {} (some APIs may return a message)
//! The main action is on the server; you remove it from your state manually.

//!!!!! Summary Table:
// | Request Type | res.data contains         |
// | ------------ | ------------------------- |
// | GET all      | Array of all items        |
// | GET single   | Single item object        |
// | POST         | Newly created object      |
// | PUT          | Updated object            |
// | DELETE       | Usually empty object `{}` |


//! res.data is request-specific. It always shows the latest data the server sends for that request. It’s not a permanent variable; it changes depending on:
// The type of request (GET/POST/PUT/DELETE)
// The current state of the server
// The payload you send


//! Why res.data keeps changing:
//! res.data is not a fixed value — it always contains whatever the server sends back in response to the current request.

//! For GET requests, it’s whatever the server currently has in the database.

//! For POST/PUT requests, it’s the new or updated object you just created or modified.

//! For DELETE requests, it might be empty or a confirmation message.
// So every Axios request gets its own response, and res.data reflects that request’s response, not a permanent variable.

// Example Flow:

// Initial GET
// axios.get("/posts/3").then(res => console.log(res.data));

// Output:
// { "id": 3, "title": "Old Title" }
// Update post
// axios.put("/posts/3", { title: "New Title" }).then(res => console.log(res.data));

// Output:
// { "id": 3, "title": "New Title" }
// res.data changed because the server updated the post.
// GET again
// axios.get("/posts/3").then(res => console.log(res.data));

// Output:
// { "id": 3, "title": "New Title" }
// Now the updated value is returned.
// ✅ Key point:
// res.data is request-specific. It always shows the latest data the server sends for that request. It’s not a permanent variable; it changes depending on:
// The type of request (GET/POST/PUT/DELETE)
// The current state of the server
// The payload you send
  return (
  <>
  <h1>CRUD with API</h1>
  <PostForm createPost= {createPost}/>
  <PostList posts={posts} updatePost={updatePost} deletePost= {deletePost} />
  </>
  )
}

export default App