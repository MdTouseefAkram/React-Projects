import React, { useState } from 'react'

const AddPost = ({createPost}) => {
    let [title, setTitle] = useState("");
    let [content, setContent] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        if(!title || !content){
            return;
        }
        createPost({title, content});
        setTitle("");
        setContent("");
    }
  return (
    <>
    <form action="" onSubmit={handleSubmit}>
        <input type="text"
        placeholder='Title'
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
        required />

        <input type="text"
        placeholder='Content'
        value={content}
        onChange={(e)=>setContent(e.target.value)}
        required />

        <button type='submit'>Add Post</button>
    </form>
    </>
  )
}

export default AddPost