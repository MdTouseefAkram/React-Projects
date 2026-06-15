import axios from 'axios';
import React, { useEffect, useState } from 'react'

const PostListPractice = () => {
    let [posts, setPosts] = useState([]);
    let [loading, setLoading] = useState(true);
    let [error, setError] = useState(null);

    //! working fine with fetch, we use fetch here not axios , same code as in PostList.jsx , but we use fetch here.
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>res.json())
        .then((data)=>{
            setPosts(data.slice(0,5));
            setLoading(false);
        })
        .catch((err)=>{
            alert("Error",err);
            setLoading(false);
            setError(`Failed to fetch`);
        })
    },[])

    if(loading){
        return <p>Loading...</p>
    }
    if(error){
        return <div style={{color:"red"}}>Oops : {error}</div> // Oops : Failed to fetch
    }
    // useEffect(()=>{
    //     fetch(`https://jsonplaceholder.typicode.com/posts`)
    //     .then((res)=>{
    //         if(!res.ok){
    //             throw new Error(`API Error ${res.status} ${res.statusText}`);
    //         }
    //         return res.json();
    //     })
    //     .then((data)=>{
    //         setPosts(data.slic(0,5));
    //         setLoading(false);
    //     })
    //     .catch((err)=>{
    //         setError(`Failed to fetch ${err.meaasge}`);
    //         setLoading(false);
    //     })
    // },[])

    //!Easy
    // useEffect(()=>{
    //     let fetchData = async function(){
    //         try{
              // let resposne = await axios.get("https://jsonplaceholder.typicode.com/posts"); //.ok not work with axios only with fetch.
    //             let resposne = await fetch("https://jsonplaceholder.typicode.com/posts");
    //             if(!resposne.ok){
    //                 throw new Error(`API Error ${resposne.status} ${resposne.statusText}`);
    //             }
    //             let data = await resposne.json();
    //             setPosts(data.slice(0,5));
    //             setLoading(false);
    //         } catch(err){
    //             setError(`Failed to fetch ${err.message}`);
    //             setLoading(false);
    //         }
    //     }
    //     fetchData();
    // },[])

  return (
    <div>PostListPractice</div>
  )
}

export default PostListPractice