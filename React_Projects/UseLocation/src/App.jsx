import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CurrentPage from './pages/CurrentPage'
import Products from './pages/Products'
import Home from './pages/Home'
import Profile from './pages/Profile'
import RouteTracker from './components/RouteTracker'
import About from './pages/About'
import Contact from './pages/Contact'
//! Example 1: Detect Current Route
//! Purpose: Show current page path using location.pathname

//! Example 2: Read Query Parameters
//! Purpose: Extract ?category=mobile&id=10 using new URLSearchParams()

//! Example 3: Passing State Between Routes
//! Purpose: Send data ➝ receive using location.state

//! Example 4: Detect Route Change using useEffect
//! Purpose: Track route changes (analytics, logging, etc.)

const App = () => {
  return (
    <>
    <BrowserRouter>
    <RouteTracker/> {/* Always listening - //note- Example 4: For Detect Route Change using useEffect-*/}
    <Routes>
      {/* Example 1: Detect Current Route*/}
      <Route path='/current' element={<CurrentPage/>} />
      {/* Example 2: Read Query Parameters */}
      <Route path='/products' element={<Products/>}/>
      {/* Example 3: Passing State Between Routes */}
      <Route path='/' element={<Home/>}/>
      <Route path='/profile' element={<Profile/>}/>
      {/* Example 4: Detect Route Change using useEffect */}
      {/* <Route path="/" element={<Home />} /> already written in above*/}
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App


// useLocation(): Location
// Returns the current Location. This can be useful if you'd like to perform some side effect whenever it changes.
/*
! useLocation is a hook provided by react-router-dom that lets you access the current URL information/location object inside your React components.

! It is mainly used to:
Check current route path
Read query parameters
Detect route changes
Pass state between routes

! useLocation() is a hook from react-router-dom that lets you access the current URL information of your app.
! It returns a location object containing:
? pathname → current URL path
? search → query parameters (part after ?)
? hash → part after #
? state → data passed through navigation (optional)

! You use useLocation() when you want to:
✔ Highlight active menu
✔ Show different UI based on route
✔ Track navigation
✔ Read query parameters
✔ Use state passed during navigation
*/

/*
! useLocation Hook
This hook returns the location object used by the react-router. This object represents the current URL and is immutable. 
Whenever the URL changes, the useLocation() hook returns a newly updated location object. Some of its use includes extracting 
the query parameters from the URL and doing something depending on the query parameters. The "search" property of the location object 
returns a string containing the query part of the URL.
*/

/*
!! Why RouteTracker must be inside BrowserRouter
<RouteTracker />

! RouteTracker uses the useLocation hook:
const location = useLocation();

useLocation relies on React Router’s context to get the current path.
! If you put RouteTracker outside BrowserRouter, React Router context does not exist, and you will get an error like:
? Error: useLocation() may be used only in the context of a <Router> component.
? So it must be a descendant of BrowserRouter.

*/

/*
! Why it’s above Routes
<RouteTracker />   {/* Always listening */
/* <Routes>
  <Route path="/" element={<Home />} />
  ...
</Routes>

? Placing it above <Routes> ensures it always listens to route changes, no matter which route is currently active.
? Even if you navigate to /about or /contact, RouteTracker still works because it’s mounted once at the top level of the router. */
// 
/*
!!✅ Key Takeaways
? BrowserRouter → Provides routing context.
? useLocation → Needs to be inside BrowserRouter.
? RouteTracker → Placed inside BrowserRouter so it can access location and listen to all route changes.
? Placing it above <Routes> ensures it tracks all routes, not just one.
*/