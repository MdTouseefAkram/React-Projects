import React, { useEffect, useState } from 'react'

//! practice

const DemoPractice = () => {
    let [posts, setPosts] = useState([]);
    let [editPost, setEditPost] = useState(null);

    //read
    useEffect(()=>{
        fetch('http://localhost:5000/posts')
        .then((res)=>res.json())
        .then((data)=> setPosts(data))
        .catch((err)=>console.log(err))
    },[])

    //create post
    function createPost(post){
        fetch(`http://localhost:5000/posts`, {method:"POST",headers:{"Content-Type": "application/json"}, body: JSON.stringify(post)})
        .then((res)=>res.json())
        .then((data)=>setPosts([...post, data]))

    }

    //update
    function updatePost(updatedPost){
        fetch(`http://localhost:5000/posts/${updatePost.id}`,
            {method:"PUT",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(updatePost)
            }
        )
        .then((res)=>res.json())
        .then((data)=setPosts(posts.map((post)=>(post.id == data.id ? data: post))))
        setEditPost(null);
    }

    //Delete
    function deletePost(id){
        fetch(`http://localhost:5000/posts/${id}`,{
            method:"DELETE"
        })
        .then(()=>setPosts(posts.filter((post)=>(post.id !== id))))
    }

    
  return (
    <>
    <h1>CRUD</h1>
      {editingPost ? (
        <EditPost post={editingPost} updatePost={updatePost} cancelEdit={() => setEditingPost(null)} />
      ) : (
        <AddPost addPost={addPost} />
      )}
      <PostList posts={posts} deletePost={deletePost} editPost={setEditingPost} />
    </>
  )
}

export default DemoPractice