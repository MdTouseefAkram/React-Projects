import React, { useEffect, useState } from 'react'
import EditPost from './components/EditPost';
import AddPost from './components/AddPost';
import PostList from './components/PostList';

const App = () => {
  let [posts, setPosts] = useState([]);
  let [editingPost, setEditingPost] = useState(null);

  //Read posts
  useEffect(()=>{
    fetch(`http://localhost:5000/posts`)
    .then((res)=>res.json()) //first convert response in json
    .then((data)=>setPosts(data)) //then only response store in post
    .catch((err)=>console.log(err));
  },[]);

  //create post
  function createPost(post){
    fetch(`http://localhost:5000/posts`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(post) //post is an object coming and this convert into string.
    })
    .then((res)=>res.json())
    .then((data)=>setPosts([...posts, data]));
  };

  // Update post
  function updatePost(updatePost){
    fetch(`http://localhost:5000/posts/${updatePost.id}`,{
      method:"PUT",
      headers:{"Content-Type": "application/json"}, //Tells the server that the request body is JSON.
      body: JSON.stringify(updatePost) //Converts the JS object updatedPost into a JSON string to send to the serve
    })
    .then((res)=>res.json())
    .then((data)=>{ //!data is the updated post returned from the server after the PUT request. Then data will contain exactly this updated object.
      //p.id === data.id checks if the current object is the one we want to update. If condition met then setPosts(data) will place;
      //It loops over each p (post) in the posts array. each post store in object form.
      setPosts(posts.map(p=>(p.id === data.id ? data: p))) //if we don't use return , don't user {}, use () in map.
      setEditingPost(null);
    });
  };

  //Delete Post
  function deletePost(id){
    fetch(`http://localhost:5000/posts/${id}`, {method: "DELETE"})
    .then(()=>setPosts(posts.filter((p)=> p.id !== id)))
  }

  return (
    <>
    {/* explin in gtp 
    // If editingPost has a post object → show EditPost form.
    // If editingPost is null → show AddPost form.
    // This decides whether the user is adding a new post or editing an existing one.
    
    Renders only if the user is editing.

    post={editingPost} → gives the form the post data to edit.
    updatePost={updatePost} → function to save changes.
    cancelEdit={() => setEditingPost(null)} → button to cancel editing (goes back to AddPost mode).
    Calls createPost() when form is submitted.
    
    */}
    <h1>React CRUD with fetch</h1>
    {editingPost ? (
      <EditPost post={editingPost} updatePost= {updatePost} cancelEdit={()=>setEditingPost(null)}/>
    ) : (
      <AddPost createPost = {createPost}/>
    )}
    <PostList posts = {posts} deletePost= {deletePost} editPost = {setEditingPost} />
    </>
  )
}

export default App


// 1️⃣ fetch("http://localhost:5000/posts", {...})

// fetch() is a built-in JS function to make HTTP requests.
// "http://localhost:5000/posts" is the URL endpoint of your JSON server.

// localhost → your local machine
// 5000 → the port where json-server is running
// /posts → the resource we want to send data to

// 2️⃣ method: "POST"
//! HTTP methods tell the server what you want to do:

// GET → fetch/read data

// POST → create/add new data

// PUT / PATCH → update existing data

// DELETE → remove data
// Here, "POST" means we want to add a new post to the posts array on the server.

// 3️⃣ headers: { "Content-Type": "application/json" }
//! headers tell the server what kind of data we are sending.
// !"Content-Type": "application/json" means:
//! “I am sending JSON data in the body of the request.”
//! Without this, the server might not understand your data correctly.

//! 4️⃣ body: JSON.stringify(post)
// body is the data you send to the server.
//! post is usually an object like:

// let post = {
//   title: "New Post",
//   content: "Hello from React"
// };

//! JSON.stringify(post) converts the JS object into a JSON string, because HTTP requests can only send strings.

// 5️⃣ What happens after this request?

//! json-server receives the POST request at /posts.

// It automatically:
//! Adds the new post to the posts array in db.json.
//! Generates a new id if you didn’t provide one.
// Returns the newly created object as a response.
// Example response from server:

// {
//   "id": 2,
//   "title": "New Post",
//   "content": "Hello from React"
// }

// ✅ Summary
// Part	Meaning
// fetch(url, {...})	Send a request to server
// method: "POST"	Create new data
//! headers	Tell server it’s JSON
//! body: JSON.stringify(post)	The actual data being


//! Where does p come from?
// posts is your state array in React:

// const [posts, setPosts] = useState([
//   { id: 1, title: "First Post", content: "Hello World!" },
//   { id: 2, title: "Second Post", content: "Another Post" }
// ]);

// posts.map(p => ...) → .map() iterates over each element of the array.
// Each element of the array is a post object, like:

// { id: 1, title: "First Post", content: "Hello World!" }

//! So p is one object from the array, for each iteration.

// Why p.id works
// Since p is an object with keys: id, title, content,
//! You can access any property using dot notation: p.id, p.title, p.content.


//! posts is an array of objects.
//! Each object represents a post. Example of the first element:

// { id: 1, title: "First Post", content: "Hello World!" }

// Notice it has a property id. ✅

//! V.V.I
//!!! Why json-server usually has id
//? json-server automatically adds id to each object if you don’t specify it, especially for POST requests.
//? This is why most examples use p.id safely.


//!JSX
//! {editingPost ? ( ... ) : ( ... )}
// React uses a ternary operator.

// If editingPost has a value (means the user clicked Edit), show the EditPost form.

// If editingPost is null (means user is not editing), show the AddPost form.

//! EditPost Component
// <EditPost 
//   post={editingPost} 
//   updatePost={updatePost} 
//   cancelEdit={() => setEditingPost(null)} 
// />


// This component is used when you are editing an existing post.

// post={editingPost} → Passes the post being edited.

// updatePost={updatePost} → Function that updates the post in state/database.

// cancelEdit={() => setEditingPost(null)} → Function to cancel editing (sets editing back to null).

// 5. AddPost Component
// <AddPost addPost={addPost} />

// This is the form for adding a new post.

// addPost={addPost} → Passes down the function to add a post.

// 6. PostList Component
// <PostList 
//   posts={posts} 
//   deletePost={deletePost} 
//   editPost={setEditingPost} 
// />

// Displays the list of posts.

// posts={posts} → Passes the list of posts (from state).

// deletePost={deletePost} → Function to delete a post.

// editPost={setEditingPost} → If user clicks edit, it sets that post into editingPost state so that EditPost form shows up.

// 🧠 In short:

// If editing → show EditPost form.

// If not editing → show AddPost form.

// Always show PostList at the bottom to display all posts.

//! Full User Flow

// Page loads → posts are fetched → PostList shows them.
// To add a post: User fills AddPost form → calls addPost → post added → PostList updates.
// To edit a post: User clicks edit → setEditingPost(post) → switches UI to EditPost form → on save, calls updatePost → updates state → resets editingPost to null → back to AddPost mode.
// To delete a post: User clicks delete → calls deletePost → removes from state → PostList re-renders without that post.