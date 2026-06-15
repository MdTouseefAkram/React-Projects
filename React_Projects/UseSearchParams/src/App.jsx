import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Users from './components/Users'

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='users' element={<Users/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

/*
! What is useSearchParams?
! useSearchParams is a React Router hook used to:
Read query parameters from the URL
Update query parameters without page reload

👉 Example URL:
/products?category=mobile&page=2

This is an important hook for handling query parameters like ?page=1&sort=asc.
! Returns a tuple of the current URL's URLSearchParams and a function to update them. Setting the search params causes a navigation.
! (useSerachParams returns an object and a function to update them.)
🔹 Syntax
const [searchParams, setSearchParams] = useSearchParams();

! searchParams → read values
! setSearchParams → update values

! 🔹 When do we use useSearchParams?
! Use it when:
? Pagination (?page=1)
? Filters (?price=low)
? Sorting (?sort=asc)
? Search (?q=react)
📌 Real-world apps (Amazon, Flipkart, YouTube) use this heavily

🔹 Basic Example (Best for Understanding)
📁 Folder Structure
src/
 ├─ App.jsx
 ├─ pages/
 │   └─ Users.jsx

!🧩 App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./pages/Users";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/users" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

! 🧩 Users.jsx
import { useSearchParams } from "react-router-dom";

const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = searchParams.get("page");   // read
  const role = searchParams.get("role");   // read

  return (
    <>
      <h2>Users Page</h2>

      <p>Page: {page}</p>
      <p>Role: {role}</p>

      <button onClick={() => setSearchParams({ page: 1, role: "admin" })}>
        Admin - Page 1
      </button>

      <button onClick={() => setSearchParams({ page: 2, role: "user" })}>
        User - Page 2
      </button>
    </>
  );
};

export default Users;

!🔹 URL Changes (No Reload)
Clicking button changes URL to:
/users?page=1&role=admin

!🔹 Important Points (Interview 🔥)
! ✅ Get value
searchParams.get("page");

! ✅ Set multiple params
setSearchParams({ page: 2, sort: "asc" });

! ✅ Update without removing old params
setSearchParams(prev => {
  prev.set("page", 3);
  return prev;
});

!!🔹 useParams vs useSearchParams
| Feature  | useParams      | useSearchParams     |
| -------- | -------------- | ------------------- |
!| URL type | `/users/5`     | `/users?id=5`       |
| Used for | Mandatory data | Optional data       |
| SEO      | Better         | Good                |
| Example  | User profile   | Filters, pagination |

! 🔹 Best Practice (You should follow)
Path params → useParams
Optional / UI state → useSearchParams

! 🔹 Common Mistake ❌
❌ Trying to use useParams for query params
❌ Forgetting .get("key")

🔹 Real Interview Question
! Q: Can useSearchParams replace Redux?
A: ❌ No. It’s only for URL state, not global app state.
*/

/* -------------------
! What is useSearchParams?
useSearchParams is a hook provided by React Router v6 to read and modify query parameters in the URL.
Query parameters are the part of the URL after ?. For example:

/users?name=John&age=25
Here, name=John and age=25 are query parameters.

! Why use it?
It allows you to dynamically get or set query parameters without manually parsing the URL.

! Syntax
const [searchParams, setSearchParams] = useSearchParams();

! searchParams → gives you access to the current query parameters.
! setSearchParams → allows you to update the query parameters.

!✅ Key Points:
searchParams.get("key") → get value of a query parameter.
setSearchParams({ key: value }) → set/update query parameters.
Works dynamically, no page reload needed.
*/