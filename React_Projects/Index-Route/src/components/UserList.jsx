import React from 'react'

const UserList = () => {
  return (
    <div>UserList (Index Route)</div>
  )
}

export default UserList

/* 
! How URL behaves
| URL              | What Renders          |
| ---------------- | --------------------- |
| `/users`         | `Users + UserList` ✅  |
| `/users/profile` | `Users + UserProfile` |
| `/users/admin`   | `Users + Admin`       |

UserList renders automatically for /users because it’s an index route. (means when /users hits then this userList page always render and user page content ,it will also display with index route content. But route is same , index route at parent level, no new route for index, same as parent.)
! Index routes render into their parent's Outlet at their parent's URL (like a default child route).
*/

/* Output in UI.
1. when user hits http://localhost:5173/users/
Users
UserList (Index Route) (note - index route render always with users when above url hit , it behave like child route.)

2. when user hits http://localhost:5173/users/admin
Users
Admin

3. when user hits http://localhost:5173/users/profile
Users
UserProfile
*/