import React, { lazy, Suspense, useState } from 'react'

// Component-Level Code Splitting (React.lazy)

let Home = lazy(()=> import('./components/Home'));
let About = lazy(()=> import('./components/About'));

const App = () => {
  
   let [page, setPage] = useState("home");

  return (
    <>
    <button onClick={()=>setPage("home")}>Home</button>
    <button onClick={()=>setPage("About")}>About</button>
 
  <Suspense fallback={<div>Loading...</div>}>
  {/* String value compares */}
    {page === "home" ? <Home/> : <About/>} 
    </Suspense>
    </>
  )
}

export default App

/*
🧠 Concept Overview
🔹 1. Code Splitting
React bundles your entire app into one big JavaScript file by default.
Code splitting means dividing that big bundle into smaller chunks that are loaded only when needed — improving performance.

🔹 2. Lazy Loading
Lazy loading allows you to load a component only when it’s required (e.g., when a user navigates to a route).
This is achieved using React.lazy().

🔹 3. Suspense
Suspense shows a fallback UI (like a loading spinner) while the lazy-loaded component is being fetched.

React.lazy() tells React to load Home and About only when they’re actually needed → code splitting.

*/
