import React from 'react'
import useFetch from '../hooks/useFetch'

const Posts = () => {
    let posts = useFetch("https://jsonplaceholder.typicode.com/posts");

  return (
    <>
    <div>
        <h2>Posts</h2>
        {posts.slice(0,5).map((post)=>(
            <p key={post.id}>{post.title}</p>
        ))}
    </div>
    </>
  )
}

export default Posts