import React from 'react'
import { Link } from 'react-router-dom'
//! Example 3: Passing State Between Routes
//! Purpose: Send data ➝ receive using location.state

const Home = () => {
  return (
    <>
     {/* sending state */}
    <Link
     to='/profile'
     state={{userId:123, name:"Touseef"}} 
    >
        Go to Profile
    </Link>
    </>
  )
}

export default Home

/*
! What is state in <Link>?
? state is an extra data object that you can pass from one route/page to another without showing it in the URL.
? It helps you send temporary data during navigation.

! Example:
<Link 
  to="/profile" 
  state={{ userId: 123, name: "Touseef" }}
>
  Go to Profile
</Link>

? Here you are sending this object:
{ userId: 123, name: "Touseef" }
! to the /profile page privately (NOT visible in URL).
*/

/*
! Why do we use state in Link?
| Reason                     | Explanation                                                                 |
| -------------------------- | --------------------------------------------------------------------------- |
| ✔ Hide data from URL       | Because URLs become long & unsafe if you put too much info in query params. |
| ✔ Pass temporary data      | Like form values, user info, filters, previous page info, etc.              |
| ✔ No need for global store | You don’t need Redux/Context for small one-time data.                       |
| ✔ Redirect after login     | Pass where the user came from.                                              |
| ✔ Cleaner UI               | No messy URLs like `/profile?id=123&name=touseef`.                          |

*/

/*
! How to read state on the next page?
! Use the useLocation hook:

import { useLocation } from "react-router-dom";

const Profile = () => {
  const location = useLocation();

  console.log(location.state);
  / Output:
  / { userId: 123, name: "Touseef" }

  return (
    <div>
      <h2>Hello {location.state.name}</h2>
    </div>
  );
};

export default Profile;

!🧠 Summary (Easy to remember)
state = hidden data sent with navigation
Doesn’t appear in browser URL
Access using useLocation()
Used for temporary or sensitive data between pages
*/

/*
! What does “temporary data” mean?
! Temporary data = data that is needed only during navigation or for a short time, not permanently.
! In simple words:
👉 Data that is useful only while moving from Page A to Page B
👉 Once you refresh the page or leave it, the data is gone

! Why is Link state called temporary?
! Because:
! It is NOT stored in:
Database
Redux / Context
LocalStorage / SessionStorage
URL

! It exists only in:
Browser memory
Current navigation history
If you refresh the page, the state disappears ❌

!! Example of TEMPORARY data (Real-life)
🧑‍💻 Example 1: Passing user details to next page
<Link
  to="/profile"
  state={{ userId: 123, name: "Touseef" }}
>
  Go to Profile
</Link>

! Why temporary?
You already have user data somewhere (API / backend)
You just need it for display once
No need to store permanently
If page refreshes → data lost → fetch again ✔
*/