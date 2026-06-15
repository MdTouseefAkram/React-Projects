import React, { useState } from 'react'
//Read, Update, Delete
const PostList = ({posts, updatePost, deletePost}) => {
    let [editId, setEditId] = useState(null);
    let [newText, setNewText] = useState("");

    function handleUpdate(id, title){
        setEditId(id);
        setNewText(title);
    }

    function saveUpdate(id){
        updatePost(id, newText);
        setEditId(null);
        setNewText("");
    };

  return (
    <>
    <ul>
        {posts.map((post)=>(
            <li key={post.id}>
                {editId === post.id ? (
                    <>
                    <input type="text"
                    value={newText}
                    onChange={(e)=>setNewText(e.target.value)} />
                    <button onClick={()=>saveUpdate(post.id)}>Save</button>
                    <button onClick={()=>setEditId(null)}>Cancel</button>
                    </>
                ) : (
                    <>
                    {post.title}
                    <button onClick={()=>handleUpdate(post.id, post.title)}>Edit</button>
                    <button onClick={()=>deletePost(post.id)}>Delete</button>
                    </>
                   
                )}
            </li>
        ))}
    </ul>
    </>
  )
}

export default PostList