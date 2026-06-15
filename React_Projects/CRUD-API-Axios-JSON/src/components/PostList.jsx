import React from 'react'

const PostList = ({posts, deletePost, editPost}) => {
  return (
    <>
    <ul>
        {/* Data rendering */}
        {/* posts have data, here we render only */}
        {posts.map((post)=>(
            <li key={post.id}>
                <strong>{post.title}</strong> : {post.content}
                {/* value of edit state vriable is updated becoz edit = setEdit() we pass through parent. , null to post, (post have data comes from posts object) */}
                <button onClick={()=>editPost(post)}>Edit</button> 
                <button onClick={()=>deletePost(post.id)}>Delete</button>
                {/* for deleting, it required id, becoz we dlete on basis of id , which accept in deletePost fun() in App.jsx */}
                {/* deletePost has deletePost fun of parent which delete the post, here we invoke this function by clicking. */}
            </li>
        ))}
    </ul>
    
    </>
  )
}
export default PostList

