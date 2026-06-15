import React from 'react'
import { useParams } from 'react-router-dom'

const UserDetails = () => {
    // let params = useParams();
    // let userId = params.userId;

    let {userId} = useParams(); // we can in same line by after destructing, no need to write two above lines.

  return (
    <>
    <div>Details about user is : {userId}</div>
    </>
    
  )
}

export default UserDetails

/*
! What is useParams in React?
useParams is a React Router hook used to read dynamic values from the URL.
!👉 It is mainly used when your route has dynamic segments, like:
/users/101
/products/iphone

Here, 101 and iphone are dynamic parameters.

! Simple Definition
useParams() allows you to access URL parameters inside a component.
*/

/* 
!! Creting Dynamic routes and read the url (get dynamic value).
!1. App.jsx (Define Dynamic Route)

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/users/:id" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

! :id → dynamic parameter

!2. UserList.jsx (Navigate with ID)
import { Link } from "react-router-dom";

const UserList = () => {
  return (
    <div>
      <h2>User List</h2>

      <Link to="/users/101">User 101</Link>
      <br />
      <Link to="/users/202">User 202</Link>
    </div>
  );
};
export default UserList;

!3. UserProfile.jsx (Read URL Parameter)
import { useParams } from "react-router-dom";

const UserProfile = () => {
  const { id } = useParams(); // 👈 get dynamic value

  return (
    <div>
      <h2>User Profile</h2>
      <p>User ID: {id}</p>
    </div>
  );
};

export default UserProfile;

!!! How It Works (Step-by-Step)

!1. User clicks:
/users/101

!2. React Router matches:
/users/:id

!3. useParams() returns:
{ id: "101" }

!4. You use id inside the component 🎯

! 🧪 Real-Life Use Cases
✔ Fetch user data by ID
✔ Product details page
✔ Blog post by slug
✔ Order tracking

! Example:
fetch(`/api/users/${id}`)
*/

/*
! Important Notes
🔹 Params are always strings
!🔹 Name must match route (:id → { id })
?🔹 Only works inside a routed component

!🧠 One-Line Summary
useParams is used to extract dynamic values from the URL in React Router.

! useParams + API call (see above fetch api example)
! Multiple params (/users/:id/:role)
*/

/*
!! GFG
Check the next hook to see how the redirection to a dynamic URL works.

! useParams Hook
This hook returns an object that consists of all the parameters in URL. 

! Syntax: 
import { useParams } from "react-router-dom";

/ Inside a functional component
export default function SomeComponent(props){
    const params = useParams();
}

? These URL parameters are defined in the Route URL. For example, 
? <Route path="/profile/:userName" component={Profile} />
! The colon(":") after "/profile/" specifies that "userName" is actually a variable or parameter that is dynamic. 
! For example, in the url "/profile/johndoe", "johndoe" is the value of the parameter "userName". So, in this case, the object returned by useParams() is:
{
   userName: "johndoe"
}
*/