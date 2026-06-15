import React, { useState } from 'react'
//create
const PostForm = ({createPost}) => {
  let [input, setInput] = useState("");

  function handleSubmit(e){
    e.preventDefault();
    if(input.trim() === ""){
      return;
    }
    createPost(input);
    setInput("");


  }
  return (
    <>
    <form action="" onSubmit={handleSubmit}>
      <input type="text"
      placeholder='Enter Post'
      value={input}
      onChange={(e)=>setInput(e.target.value)}
      />
      <button type='submit'>Add</button>
    </form>
    </>
  )
}

export default PostForm