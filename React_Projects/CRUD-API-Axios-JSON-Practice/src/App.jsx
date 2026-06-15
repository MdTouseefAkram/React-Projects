import React, { useEffect, useState } from 'react'
import axios from 'axios'
import EditPost from './components/EditPost';
import AddPost from './components/AddPost';
import PostList from './components/PostList';

const App = () => {
  let [posts, setPosts] = useState([]);
  let [editPost, setEditPost]= useState(null);

  //Read
  useEffect(()=>{
    axios.get(`http://localhost:5000/posts`)
    .then((res)=>setPosts(res.data))
    .catch((err)=>console.log(err))
  },[])

  // Create
  //res.data = the newly created post object returned by the server
  function createPost(post){
    axios.post('http://localhost:5000/posts',post) //post values comes from AddPost.jsx and here with value it sends to backend.
    .then((res)=>setPosts([...post, res.data])) //[...posts, res.data] = spreads the old array and appends the new post.
    .catch((err)=>console.log(err))

//   ex:  posts = [
//   { id: 1, title: "Post 1" },
//   { id: 2, title: "Post 2" }
//  ]

  }

  //update
//!  .id is used to uniquely identify the post both in the backend (API URL) and frontend (state update).
// Without it, your update won’t work correctly.
  function updatePost(updatedPost){ // here in api call we updatedPost which accceptes in func args, whch is coming from EditPost.jsx (props we pass from App.jsx to EditPost.jsx) from handleSumbit() func. inside updatePost({...post,title,content})
    axios.put(`http://localhost:5000/posts/${updatedPost.id}`, updatedPost) //!With JSON Server, you cannot update without id in the URL.
    .then((res)=>setPosts(posts.map((post)=>(post.id === updatedPost.id ? updatedPost : post))))
    .catch((err)=>console.log(err))
     setEditPost(null);
  }

  //Delete
  //id comes from the post itself, usually via p.id when you call the function from a button or event.
  function deletePost(id){ //id comes from postList.jsx in delete Button
    axios.delete(`http://localhost:5000/posts/${id}`)
    .then(()=>setPosts(posts.filter((post)=>(post.id !== id))))
  }
  
  return (
    <>
    <h1>CRUD with Axios and Json server</h1>
    {editPost ? (
      <EditPost posts = {editPost} updatePost = {updatePost} cancelEdit = {()=>setEditPost(null)} />
    ) : (
      <AddPost createPost= {createPost} />
    )}

    <PostList post = {posts} deletePost = {deletePost} editPost= {setEditPost}/>
    
    </>
  )
}

export default App


//! Why updatedPost.id ?

// Every post in your JSON server has an id field (like 1, 2, 3...).
// Example in db.json:

// {
//   "posts": [
//     { "id": 1, "title": "First Post", "content": "Hello World" }
//   ]
// }


// When you edit a post, you must tell the backend which post to update.
// That’s why:

// axios.put(`http://localhost:5000/posts/${updatedPost.id}`, updatedPost)


// → This sends the updated object to the correct URL, e.g. http://localhost:5000/posts/1.

// In the state update:

// posts.map((post) => (post.id === updatedPost.id ? updatedPost : post))


// → You loop over all posts, and if the post.id matches the updatedPost.id, you replace it with the new updated post.
// Otherwise, you keep the old one.

// 🔹 Without .id, what happens?

// If you just wrote:

// axios.put("http://localhost:5000/posts", updatedPost)


// 👉 The server won’t know which post to update, because /posts is the whole collection, not a specific record.

// If you did:

// posts.map(post => post === updatedPost ? updatedPost : post)


// 👉 This would not work because objects are compared by reference in JavaScript, not by value. So you need a unique identifier (id) to check equality.