import React, { useState } from 'react'

const EditPost = ({post, updatePost, cancelEdit}) => {
  let [title, setTitle] = useState(post.title); //previos data is there.
  let [content, setContent] = useState(post.content);

function handleSubmit(e){
  e.preventDefault();
  updatePost({...post, title, content}); //post is an object, not an array. Here post is a single object, e.g.:{ id: 1, title: "Old Title", content: "Old Content" }
  //{...post} copies all properties → { id: 1, title: "Old Title", content: "Old Content" }.
  //Then you overwrite title and content.
  //! 1. posts is always an array
  // After fetching data from JSON Server:
  // So posts = array of objects. ✅
}
  return (
    <>
    <form action="" onSubmit={handleSubmit}>
      <input type="text"
      value={title}
      onChange={(e)=>setTitle(e.target.value)} />
      <input type="text"
      value={content} 
      onChange={(e)=>setContent(e.target.value)}/>

      <button type='submit'>Update</button>
      <button type='button' onClick={cancelEdit}>Cancel</button>
    </form>
    </>
  )
}

export default EditPost