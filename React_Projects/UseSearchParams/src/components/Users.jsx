import React from 'react'
import {Outlet, useSearchParams} from 'react-router-dom'

const Users = () => {
    //! useSearchParams is a hook provided by React Router v6 to read and modify query parameters in the URL. 
    //! Query parameters are the part of the URL after ?. For example:users?name=John&age=25. Here, name=John and age=25 are query parameters.
    
    let [searchParams, setSearchParams] = useSearchParams(); //! (useSerachParams returns an object and a function to update them.)
    let showActiveUsers = searchParams.get('filter') === 'active'; // get query parameter 'filter' and check.
    //searchParams.get('filter') → Reads or get the current value of filter from the URL.
    // showActiveUsers → Boolean, true if filter=active, otherwise false

  return (
    <>
    <h2>User 1</h2>
    <h2>User 2</h2>
    <h2>User 3</h2>
    <Outlet/>


    <button onClick={()=>setSearchParams({filter:'active'})}>Active Users</button>
    <button onClick={()=>setSearchParams({})}>Reset Filter</button>

    {showActiveUsers ? (
        <h2>Showing active users</h2>
    ): (
        <h2>Showing all users</h2>
    )}
    </>
  )
}

export default Users

//! searchParams.get("key") → get value of a query parameter.
//! setSearchParams({ key: value }) → set/update query parameters.
// Works dynamically, no page reload needed.

// ! What is useSearchParams?
// ! useSearchParams is a React Router hook used to:
// Read query parameters from the URL
// Update query parameters without page reload
//! What is useSearchParams?
// useSearchParams is a hook provided by React Router v6 to read and modify query parameters in the URL.
// Query parameters are the part of the URL after ?. For example:

// /users?name=John&age=25
// Here, name=John and age=25 are query parameters.

/*
! 🔹 How It Works Together
| Action             | URL                    | Display                |
| ------------------ | ---------------------- | ---------------------- |
| Initial load       | `/users`               | "Showing all users"    |
| Click Active Users | `/users?filter=active` | "Showing active users" |
| Click Reset        | `/users`               | "Showing all users"    |

*/