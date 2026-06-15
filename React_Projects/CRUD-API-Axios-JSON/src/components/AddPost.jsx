import React from 'react'
import { useState } from 'react'

const AddPost = ({createPost}) => {
    let [title, setTitle] = useState("");
    let [content, setContent] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        if(!title || !content){
            return;
        }
        createPost({title, content}); //title and content is coming from input and these is set and goes as arg in createPost fun() in APP.js and post created.
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
        required/>

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
//<button type="button">,
// If you don’t write type in a <button> tag, the default behavior is:

// Default type is submit.

// That means if your <button> is inside a form, clicking it will submit the form automatically.

// If it’s outside a form, nothing special happens—it behaves like a normal button.