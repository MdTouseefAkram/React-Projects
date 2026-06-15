import React from 'react'
import { useState } from 'react'

const EditPost = ({post,updatePost, cancelEdit}) => {
    let [title, setTitle] = useState(post.title);
    let [content, setContent] = useState(post.content);

    function handleSubmit(e){
        //! { ...post, title, content } means:
        // Take everything from the existing post object (...post spreads it).
        // Override its title with the current title state.
        // Override its content with the current content state.
        //! Why override happens
        // In JavaScript objects:
        // If a property already exists, and you define it again later, the latest value replaces the old one.
        e.preventDefault();
        updatePost({...post, title,content}) // title and content comess from input. Here Creates a new post object with updated values
    }
  return (
    <>
       <form action="" onSubmit={handleSubmit}>
        <input type="text" 
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
        required/>
        
        <input type="text"
        value={content}
        onChange={(e)=>setContent(e.target.value)}
        required />
        <button type='submit'>Update</button>
        <button type='button' onClick={cancelEdit}>Cancel</button>
        {/* type="button" makes it a regular button with no default form behavior.
        Clicking it only runs cancelEdit() without triggering handleSubmit. */}
        </form> 
    </>
  )
}

export default EditPost

// export default PostList

// EditPost is a variable in the parent component’s scope.

// Child components cannot see parent’s local variables directly.
// You cannot do <h1>{EditPost}</h1> in the child because EditPost exists only in the parent’s scope.
//We can destructure by variable name which i pass in parent and same varivle can acces in child.

// ParentComponent.jsx
// 1. Parent Component: Pass set function as prop
// import React, { useState } from "react";
// import ChildComponent from "./ChildComponent";

// function ParentComponent() {
//   const [message, setMessage] = useState("Hello");

//   return (
//     <div>
//       <h1>Parent Message: {message}</h1>
//       <ChildComponent updateMessage={setMessage} />
//     </div>
//   );
// }

// export default ParentComponent;

// 2. Child Component: Receive and use the set function
// // ChildComponent.jsx
// import React from "react";

// function ChildComponent({ updateMessage }) {
//   return (
//     <div>
//       <button onClick={() => updateMessage("Hello from Child!")}>
//         Update Parent Message
//       </button>
//     </div>
//   );
// }

// export default ChildComponent;


