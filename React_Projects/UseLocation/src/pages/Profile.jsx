import React from 'react'
import { useLocation } from 'react-router-dom'
//! Example 3: Passing State Between Routes
//! Purpose: Send data ➝ receive using location.state

const Profile = () => {
    let location = useLocation();
    let {userId, name} = location.state || {};
    // console.log(location.state);


  return (
    <>
    {/* receiving state */}
    <h2>User Id: {userId}</h2>
    <h3>Name: {name}</h3>
    </>
  )
}

export default Profile

/*
! What happens here? (Simple Explanation)
1️⃣ User clicks <Link>
When you click “Go to Profile”, React Router navigates you to:
/profile

But along with route navigation, it also carries the extra data you passed in state.

! 2️⃣ What is state here?
You are passing this object:

{ userId: 123, name: "Touseef" }

? This object is carried internally by React Router (NOT in URL).
? It is not visible in the address bar.
? It is not stored permanently.
? It is only available on the next page.

! 3️⃣ How React Router passes the state
? When navigation happens, React Router creates a location object for the new page.
? It attaches your state to it:

location = {
  pathname: "/profile",
  state: {
    userId: 123,
    name: "Touseef"
  }
};

!! This is how state travels behind the scenes.

! 4️⃣ How to read this state on the Profile page
Use useLocation():

Profile.jsx
import { useLocation } from "react-router-dom";

const Profile = () => {
  const location = useLocation();

  console.log(location.state);
  / { userId: 123, name: "Touseef" }

  return <h1>Welcome {location.state.name}</h1>;
};

!🎯 Quick Understanding: How state is passed?
Think of it like this:
? <Link> is a courier
? state is a package
? /profile is the delivery address
? React Router is the delivery guy
? When you click the link → React Router delivers the package (state) to the new page.

!🧠 Summary
? state inside <Link> is an object.
? It travels with navigation internally.
!! You receive it on the next page using useLocation(). (like location.state , see in above code)
! It keeps your URL clean and avoids query params.
*/



/*
? Key Truth (Very Important)
! location.state is ALWAYS lost after a page refresh.
!! React Router cannot keep Link state after refresh because it lives only in browser memory, not storage.

! What is happening in YOUR code?
! Your receiving code:
let location = useLocation();
let { userId, name } = location.state || {};

! Why it looks like “data is not gone”
After refresh:
location.state === null

! But because of this fallback:
location.state || {}
! React does NOT crash, it just assigns:

userId = undefined
name = undefined

! So technically:
✅ App does not break
❌ Data is actually gone

! Why React Router removes state on refresh?
| Reason         | Explanation                 |
| -------------- | --------------------------- |
| Page refresh   | Reloads entire app          |
| Memory cleared | Navigation memory wiped     |
| No persistence | `state` not stored anywhere |

! React Router does NOT save state in:
URL
LocalStorage
SessionStorage
Backend


? location.state MAY survive a normal page refresh in some browsers, but it is NOT guaranteed and NOT persistent.

! That’s why:
! You still see data after refresh
! But React Router still calls it temporary

!🧠 Why is the data NOT gone after refresh in your case?
?🔑 Reason: HTML5 history.state

! React Router stores state internally using the browser History API:
window.history.state

! Many browsers (like Chrome) restore history.state after a normal refresh.
! So after refresh:
location.state === { userId: 123, name: "Touseef" }

! ➡️ That’s why your data appears not gone.
⚠️ But this is IMPORTANT
! ❌ This behavior is:
Browser-dependent
Not reliable
Not guaranteed
Can disappear anytime
! React Router does NOT promise state persistence across refresh.
*/