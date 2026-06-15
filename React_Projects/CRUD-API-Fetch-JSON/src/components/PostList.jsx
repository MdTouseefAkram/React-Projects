import React from 'react'

const PostList = ({posts, deletePost, editPost}) => {
  return (
    <>
    <ul>
      {posts.map((post)=>(
        <li key={post.id}>
          <strong>{post.title}</strong> : {post.content}
          {/* Edit → you want to modify the post → need all data.
              Delete → you want to remove it → only need identifier.
              we accept in editPost func in app.jsx only 1 arg, and in delete func we accept id */}
          <button onClick={()=>editPost(post)}>Edit</button>
          <button onClick={()=>deletePost(post.id)}>Delete</button>
        </li>
      ))}
    </ul>
    </>
  )
}

export default PostList

//! | Action | Argument passed           | Reason                                            |
// | ------ | ------------------------- | ------------------------------------------------- |
// | Edit   | `post` (object)           | Form needs id, title, content to populate fields. |
// | Delete | `post.id` (number/string) | Only id is needed to remove the post.             |
