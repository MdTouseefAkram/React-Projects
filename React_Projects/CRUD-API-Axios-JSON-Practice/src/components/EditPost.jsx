import React, { useState } from 'react'

const EditPost = ({posts, updatePost, cancelEdit}) => {
    let [title, setTitle] = useState(posts.title);
    let [content, setContent] = useState(posts.content);

    function handleSubmit(e){
        e.preventDefault();
        updatePost({...posts, title, content}); //{} inside rest beoz updatePost is a function.
    }
  return (
    <>
    <form action="" onSubmit={handleSubmit}>
        <input type="text" 
        placeholder='Edit Title'
        value={title}
        onChange={(e)=>setTitle(e.target.value)}/>

        <input type="text"
        placeholder='Edit Content'
        value={content}
        onChange={(e)=>setContent(e.target.value)} />

        <button type='submit'>Update</button>
        <button type='button' onClick={cancelEdit}>Cancel</button>
    </form>
    </>
  )
}

export default EditPost