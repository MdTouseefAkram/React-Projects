import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Users from './components/Users'
import UserList from './components/UserList'
import UserProfile from './components/UserProfile'
import Admin from './components/Admin'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* nested route, parent route is users and inside thier child routes like admin, index..etc  */}
          <Route path='users' element={<Users/>}>

          {/* INDEX ROUTE*/}
          {/* Index routes render into their parent's Outlet at their parent's URL (like a default child route). */}
          <Route index element={<UserList/>}/>

          {/* Other child routes */}
          <Route path='profile' element={<UserProfile/>}/>
          <Route path='admin' element={<Admin/>}/>

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

//! 
/*
! What is index in React Router DOM?
! An index route is the default child route of a parent route.
👉 It renders automatically when the parent route’s path matches exactly,
👉 without adding anything extra to the URL. (It does NOT have a path)

! Simple meaning
! Index route = default page inside a parent route

!! Why do we need index?
! Without index:
Parent route loads
 Nothing renders in <Outlet />. (Nothing shows inside <Outlet />)

! With index:
A default component renders inside the parent. (note- with index parent route UI + index mapped component UI is visible. why we read belowest notes, suppose in parent is sidebar and user simply users type only /sidebar not any child url, then UI is empty becuase we dont write any jsx in sidebar component , it better to show something on UI. so we use deafult child route component (index).)
*/

/*
! Index Route used in:
Dashboards
User panels
Admin layouts
Real-world nested routing
*/

/*
! How URL behaves
| URL              | What Renders          |
| ---------------- | --------------------- |
| `/users`         | `Users + UserList` ✅  |
| `/users/profile` | `Users + UserProfile` |
| `/users/admin`   | `Users + Admin`       |

! UserList renders automatically for /users because it’s an index route

! Important Rules (Interview Point ⭐)

index is used only inside nested routes
index cannot have a path
Only one index route per parent
It replaces path="" (old way)
*/

/*
! why we use index route
In React Router DOM, we use an index route to define a default child route for a parent route. It’s basically the route that renders when the parent path is matched but no child path is specified. Think of it as the “home page” of a nested route.
Here’s a clear explanation with an example:

! 1. When to use index
! Suppose you have a Users page with nested routes like Users/List and Users/Profile. You want something to show when the user just visits /users without specifying list or profile. That’s when the index route comes in.

2. Code Example
Folder structure:

src/
  components/
    Users.jsx
    UserList.jsx
    UserProfile.jsx


App.jsx

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./components/Users";
import UserList from "./components/UserList";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="users" element={<Users />}>
          <Route index element={<h2>Welcome to Users Page</h2>} />
          <Route path="list" element={<UserList />} />
          <Route path="profile" element={<UserProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

Users.jsx

import React from "react";
import { Outlet } from "react-router-dom";

const Users = () => {
  return (
    <div>
      <h1>Users Section</h1>
      <Outlet /> //! Renders nested routes 
    </div>
  );
};

export default Users;

! 3. How it works
When you visit /users, the index route renders:
Welcome to Users Page.
When you visit /users/list, it renders <UserList />.
When you visit /users/profile, it renders <UserProfile />.
So index is useful for setting a default content for a parent route when no specific child route is provided.

! ✅ Key points:
Only used inside a parent route.
! No path is needed; just use index.
Works with <Outlet /> to render nested routes.
*/

/* ----------------------------------------
! Difference between index and path=""

!! 1️⃣ index Route
! An index route is used to render a default child component when the parent route matches exactly.
It doesn’t need a path because it inherits the parent’s path.
Often used in nested routes.

Example folder structure:
src/
 └─ components/
     ├─ Dashboard.jsx
     ├─ Home.jsx


Code:
<Routes>
  <Route path="/dashboard" element={<Dashboard />}>
    <Route index element={<Home />} />  {/* Default component *
    <Route path="stats" element={<Stats />} />
  </Route>
</Routes>

URL /dashboard → renders <Home />.
URL /dashboard/stats → renders <Stats />.
Key: Only one index route per parent.

!! 2️⃣ path="" Route
A path="" route also acts as a default child, but it’s less commonly used than index.
Works similar to index, but technically still a path.
You can use it, but index is more semantically correct for default children.

Example:
<Routes>
  <Route path="/dashboard" element={<Dashboard />}>
    <Route path="" element={<Home />} />  {/* Acts like index *
    <Route path="stats" element={<Stats />} />
  </Route>
</Routes>

URL /dashboard → renders <Home />.

! Difference:
| Feature      | `index`                     | `path=""`                           |
| ------------ | --------------------------- | ----------------------------------- |
| Semantic     | Default child of parent     | Empty path, acts like default       |
| URL matching | Matches parent exactly      | Matches parent exactly              |
| Use case     | Preferred for default child | Works, but less explicit            |
| Multiple     | Only one allowed per parent | Can define multiple (but confusing) |


! ✅ Rule of Thumb:
Use index for default nested routes.
Only use path="" if you need to for some reason (rare).
*/

/* ---------------------------------------------
! “Why not just render the parent component directly, instead of creating an index route for a default child?”

! 1. Parent Component vs. Index Route
!!! Parent route is usually a layout or wrapper, not the actual content you want to display by default.

Example:
<Routes>
! <Route path="/dashboard" element={<Dashboard />}> //Parent componet
   ! <Route index element={<Home />} /> //Default Component (have dafult UI).
    <Route path="stats" element={<Stats />} />
  </Route>
</Routes>

Here:
<Dashboard /> might have sidebar, header, navigation, etc.
<Outlet /> is where the child route content renders.
<Home /> (index route) is the default content shown when you visit /dashboard.
!!!
! If you just render <Dashboard /> without an index route:
! The parent layout (sidebar/header) shows
! But the main content area is empty — because there’s no child route matching.

! 2. Why Index Route is Important
! Keeps Layout and Content Separate:
Parent → layout (header, nav, sidebar)
Index → default content

! Enables Nested Routing Properly:
When you click links like /dashboard/stats, only the child content changes inside the layout.
Without index route, visiting /dashboard would leave the content empty.
Scales for Complex UIs:
Suppose you have multiple tabs: Home, Stats, Reports.
You don’t want to manually code “Home” inside the parent; index route handles the default child rendering cleanly.

! 3. Visual Analogy
Dashboard Component (parent)
 ├── Sidebar
 ├── Header
 └── Outlet (child renders here)
      ├── Home (index route)
      ├── Stats
      └── Reports


/dashboard → renders <Home /> in Outlet
/dashboard/stats → renders <Stats /> in Outlet
Without the index route → Outlet is empty.

✅ TL;DR:
!! The parent route is layout, not default content.
!! The index route ensures that visiting the parent path renders meaningful default content inside the layout.
*/

/*  --------------------------
! Where to Use Index Route
Nested routes where parent is a layout.
Default tab in a tabbed interface.
Default landing page in a nested layout.
Anywhere you want default child content for a parent route.

!! 1. Nested Layouts / Dashboards (Most common) 
? Most common use case: parent route is a layout (header, sidebar, navbar), and you want a default content when the parent path is accessed.

<Routes>
  <Route path="/dashboard" element={<Dashboard />}>
    <Route index element={<Home />} />   {/* Default content 
    <Route path="stats" element={<Stats />} />
    <Route path="reports" element={<Reports />} />
  </Route>
</Routes>

/dashboard → <Home /> renders inside <Dashboard /> layout.
/dashboard/stats → <Stats /> renders.
!!! ✅ Use index route whenever the parent has multiple child routes, and you need a default child.

! 2. Tab-based UIs
If you have tabs inside a page, index route is perfect for showing the first tab by default.

<Route path="/settings" element={<SettingsLayout />}>
  <Route index element={<ProfileTab />} />   {/* Default tab *
  <Route path="security" element={<SecurityTab />} />
  <Route path="billing" element={<BillingTab />} />
</Route>

Visiting /settings → ProfileTab shows automatically.
Visiting /settings/security → SecurityTab shows.

! 3. Landing Page inside a Parent Layout
Suppose you have a main layout with navbar and footer, and different sections:

<Route path="/" element={<MainLayout />}>
  <Route index element={<HomePage />} />      {/* Default landing page *
  <Route path="about" element={<AboutPage />} />
  <Route path="contact" element={<ContactPage />} />
</Route>

Visiting / → <HomePage /> renders inside <MainLayout />.

! 4. Why Not Just Parent Component
The parent route usually contains layout (header, nav, sidebar).
The index route fills the main content area.
Without index route, that area will be empty on visiting the parent path.
*/