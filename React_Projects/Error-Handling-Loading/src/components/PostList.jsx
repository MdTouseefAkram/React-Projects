import React, { useEffect, useState } from 'react'
import axios from 'axios'

//! Handling Errors in API Calls
// When fetching data from an API, use .catch() or try...catch with async/await.
//Note: This won’t catch runtime errors in rendering.

const PostList = () => {
    let [posts, setPosts] = useState([]); // store data
    let [loading, setLoading] = useState(true); //loading state, track loading
    let [error, setError] = useState(null); //error state , track error

    useEffect(()=>{ //Most easy and good (presonal preference)
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then((res)=>{
            setPosts(res.data.slice(0,5)); // only first 6 posts.
            setLoading(false); //good approach for industry or big App. to show a UI
            // console.log('success') //show error , it is most east to show log in success in .then and error/failure in .catch. but for small app not for industry
        })
        .catch((err)=>{
            setError('Failed to fetch');
            setLoading(false);
            // console.log(err); //show error , it is most east to show log in success in .then and error/failure in .catch.
        })
    },[])

    //! using try catch
    // useEffect(()=>{
    //     let fetchPost = async function(){
    //         try{
    //             let res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
    //             setPosts(res.data.slice(0,5));
                // setLoading(false); //if i used this then finally not required.
    //         } catch (err){
    //             setError('Error to fetch');
    //             setLoading(false);
    //         } finally { //optional
    //             setLoading(false);
    //         }
    //     }
    //     fetchPost();
    // },[])

//! use res.ok, res.status, res.statusText with .then and .catch (easy)
//     useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((res) => {
         // .ok check (only work with fetch)
//         if (!res.ok) {
//           throw new Error(`API Error: ${res.status} ${res.statusText}`);
//         }
//         return res.json(); // parse JSON if OK
//       })
//       .then((data) => {
//         setPosts(data.slice(0, 5)); // first 5 posts
//         setLoading(false);
//       })
//       .catch((err) => {
//         setError(`Failed to fetch: ${err.message}`);
//         setLoading(false);
//       });
//   }, []);

//!! use res.ok, res.status, res.statusText with try and catch
// useEffect(() => {
//   const fetchPosts = async () => {
//     try {
//       const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      
      // .ok works here
//       if (!res.ok) {
//         throw new Error(`API Error: ${res.status} ${res.statusText}`);
//       }

//       const data = await res.json();
//       setPosts(data.slice(0, 5)); // first 5 posts
//       setLoading(false);
//     } catch (err) {
//       setError(`Failed to fetch: ${err.message}`);
//       setLoading(false);
//     }
//   };

//   fetchPosts();
// }, []);

// if (loading) {
//   return (
//     <div>
//       <h2>Loading posts...</h2>
//       <p>Please wait while we fetch the data.</p>
//       <button disabled>Loading...</button>
//     </div>
//   );
// }

    if(loading){
        return <p>Loading posts...</p>
    }

    if(error){
        return <p style={{color:"red"}}>{error}</p>
    }
  return (
    <>
    <div>Posts</div>
    <ul>
        {posts.map((post)=>(
            <li key={post.id}>{post.title}</li>
        ))}
    </ul>
    </>
  )
}

export default PostList

//! How it works
// When API call starts → loading=true → show "Loading posts...".
// If API succeeds → show posts.
// If API fails → show error message instead of crashing.
// If a runtime UI error happens → ErrorBoundary catches it and shows a fallback UI.

//! 1️⃣ What is a runtime UI error?
// A runtime UI error happens while React is rendering a component. For example:
// function BuggyComponent() {
//   const user = null;
//   return <p>{user.name}</p>; // ❌ this will crash because user is null
// }
// Here, React tries to access user.name, but user is null. Normally, this breaks the entire React app.

//! ✅ If the API call fails → your UI shows "Failed to fetch posts..." instead of crashing.
//! ❌ But if you have a runtime error in rendering, like:

// <li key={p.id}>{p.nonExistingProperty.toUpperCase()}</li>
//! ➡️ This will crash the entire UI, because your current error handling only covers API calls, not rendering errors.

//! 2. Handling Errors in Async Operations (API calls)
//? For API calls or any async code, React does not automatically catch errors. You need to handle them with try/catch or .catch() in promises.

//! ✅ What happens: //? With res.ok, res.status, res.statusText, err.message Example Here
// If the API succeeds → displays user list.
// If the API fails → shows error message.
// Also includes a loading state while fetching data.

// useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);

        // Simulate .ok check
//         if (res.status < 200 || res.status >= 300) { //? It’s true if the response status code is in the range 200–299 (successful responses).
//           throw new Error(`API Error: ${res.status} ${res.statusText}`); //? new Error("API Error: 404 Not Found").
//         }

//         setPosts(res.data.slice(0, 5)); // only first 5 posts
//         setLoading(false);
//       } catch (err) {
        // err.message contains the error description
//         setError(`Failed to fetch data: ${err.message}`); //? "Failed to fetch data: API Error: 404 Not Found"
//         setLoading(false);
//       }
//     };

//     fetchPosts();
//   }, []);

//!
// 1️⃣ .ok and .status:
// The .ok property exists only on the Response object returned by the browser’s native fetch(), not Axios.
// res.status exists in both fetch and Axios (fetch gives it on the Response object, Axios gives it on the response object).

// The key difference:

//! Fetch:
// const res = await fetch(url);
//! if (!res.ok) { // works only in fetch
//     throw new Error(`${res.status} ${res.statusText}`);
// }

//! Axios:
// const res = await axios.get(url);
// console.log(res.status);      // exists
// console.log(res.statusText);  // exists
// res.ok does NOT exist

// 2️⃣ Why .then/.catch is tricky for .ok:
// In fetch, .then gives the Response object, which has .ok:

// fetch(url)
//   .then(res => {
//       if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
//       return res.json();
//   })
//   .then(data => console.log(data))
//   .catch(err => console.error(err.message));

// ✅ Works fine.
// In Axios, the promise is already rejected if status >= 400. So the .then block only executes for status 2xx.

// axios.get(url)
//   .then(res => {
//       console.log(res.status); // 200
    // no need to check "ok", axios already considers 404 or 500 as error
//   })
//   .catch(err => {
//       console.log(err.response.status);      // 404, 500, etc.
//       console.log(err.response.statusText);  // Not Found, etc.
//   });

//! So in Axios, .ok doesn’t exist, and you must rely on try/catch or .catch(err) for non-2xx responses.

//3️⃣ Summary Table
//! | Feature                    | Fetch                       | Axios                            |
// | -------------------------- | --------------------------- | -------------------------------- |
// | `.ok`                      | ✅ yes                       | ❌ no                             |
// | `.status`                  | ✅ yes                       | ✅ yes                            |
// | `.statusText`              | ✅ yes                       | ✅ yes                            |
// | `.then` for errors         | ❌ need manual check         | ❌ promise rejected automatically |
// | Recommended error handling | try/catch or `.then/.catch` | try/catch or `.catch(err)`       |
