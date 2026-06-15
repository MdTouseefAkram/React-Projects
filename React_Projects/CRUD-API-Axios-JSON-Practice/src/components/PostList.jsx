import React from 'react'

const PostList = ({post, deletePost, editPost}) => { // we destrcure the varible name , it has value or property
  return (
    <>
        <ul>
            {post.map((p)=>( //p is any variblle name for element
                <li key={p.id}>
                  {/* here i use p.title not post.title beocz p is any variable name which i pass in map, so using p i can post porps values  */}
                  <strong>{p.title}</strong> : {p.content} 
                  <button onClick={()=>editPost(p)}>Edit</button>
                  <button onClick={()=>deletePost(p.id)}>Delete</button>
                </li>
            ))}
        </ul>
    </>
  )
}

export default PostList