import React, { lazy, Suspense } from 'react'
import {BrowserRouter, Routes, Route } from 'react-router-dom'

//! best exmaple code

let Home = lazy(()=> import('./components/Home'));
let About = lazy(()=> import('./components/About'));
let Contact = lazy(()=> import('./components/Contact'));

const App = () => {
  return (
    <>
{/* 
    Where to write <Suspense> in routing
    There are two common ways: */}
      <BrowserRouter>
      {/*1. Wrap all routes together */}
      <Suspense fallback={<div>Loading Page...</div>}> 
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>

        {/* Or */}
        {/*2. Wrap individual routes */}
          {/* <Route path="/about" element={<Suspense fallback={<div>Loading About...</div>}><About/></Suspense>}/> --Best Practice*/}
          {/* <Route path="/about" element={<Suspense fallback={<div>Loading About....</div>}>{<About/>}</Suspense>}/>  -- both {<About/> or without JS expression in Suspense like <About/> works.}
          Unnecessary braces:
          You don’t need {<About />} inside <Suspense>. Just write <About />.
          */}
        </Routes>

      </Suspense>
   
      </BrowserRouter>
    
    </>
  )
}

export default App

//! ✅ Why industry loves this approach:
// Only the route you visit is loaded → smaller initial bundle.
// Scales well for big applications (like dashboards, e-commerce, SaaS apps).
// Works perfectly with analytics or performance optimization tools.\

//! Code splitting
// Code splitting is a performance optimization technique in React (and other JavaScript apps) 
// that helps load only the code that is needed for a particular page or feature, instead of loading the entire application code at once.

// In Simple Terms:

// Normally, when you build a React app, all components and dependencies are bundled into one big file (bundle.js).
// But with code splitting, this big bundle is divided (split) into smaller chunks.
// 👉 These chunks are then loaded on demand — when the user navigates to a part of the app that needs them.

//! Why Code Splitting Matters
// A typical React app might have hundreds of components and large libraries.
// Loading everything at once makes initial load time slow.
// Code splitting helps by:
// Reducing bundle size — faster page load.
// Loading components on demand — better user experience.
// Optimizing performance for large apps.

//! Methods of Code Splitting in React
/* 
There are three common ways to implement code splitting:

a) Component-Level Code Splitting (React.lazy)

Load individual components only when they are rendered.

import React, { Suspense, lazy } from "react";

-- Lazy load the About component
const About = lazy(() => import("./About"));

function App() {
  return (
    <div>
      <h1>Home Page</h1>
      <Suspense fallback={<div>Loading About...</div>}>
        <About />
      </Suspense>
    </div>
  );
}

export default App;


How it works:

About component is not loaded during the initial bundle.

When React reaches <About />, it fetches it asynchronously.

While loading, <Suspense> shows the fallback.

b) Route-Based Code Splitting (with React Router)

Load different pages of your app only when a user navigates to them.

import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;


Benefits:

Only loads the page the user visits.

Keeps initial bundle very small.

c) Library-Level or Chunk-Level Splitting

Sometimes, large libraries (like charts or maps) can be split so that they load only when needed.

const Chart = lazy(() => import("react-chartjs-2"));

function Dashboard() {
  return (
    <Suspense fallback={<div>Loading Chart...</div>}>
      <Chart />
    </Suspense>
  );
}


React loads Chart library only when Dashboard is rendered.

Saves bandwidth and improves performance.
*/

//? Definitions

//! Code Splitting
// Code splitting is a technique in React (or JavaScript apps) that splits the application’s code into smaller bundles 
// so that only the necessary code is loaded initially, and the rest is loaded on demand.
// Purpose: Improves performance by reducing the initial load time.

//! Lazy Loading
// Lazy loading is a technique where a component or module is loaded only when it is needed, rather than at the initial load.
// Purpose: Optimizes app performance by deferring the loading of non-essential code.

//! ✅ Key Difference:
// Code splitting is about splitting the code into chunks.
// Lazy loading is about loading a chunk/component only when required.


//! React.lazy
// React.lazy is a function that allows you to load a component lazily, meaning the component is downloaded and 
// rendered only when it is needed, instead of being included in the initial bundle.
// Purpose: Reduces initial load time and improves app performance through code splitting.

//! Suspense
// Suspense is a React component that wraps lazy-loaded components (or async operations) and provides a fallback UI to show 
// while the component is being loaded. (fallback can be anything: spinner, text, skeleton loader, etc.)
// Purpose: Improves user experience by showing a loader or placeholder instead of a blank screen during loading.

/*
/! 🧰 Bundling in Development vs Production
Mode	Description
Development	Bundle is large, unminified, includes source maps for debugging.
Production	Bundle is minified, optimized, and tree-shaken for performance.

Bundling in ReactJS is the process of taking your app’s multiple files (JS, CSS, images),
analyzing dependencies, and combining them into optimized bundles that browsers can load efficiently.

/! -----------------Lazy Loading in React by GFG (better to refer GFG or read here)-----------------
In React, Lazy loading is a technique that allows you to load components, modules, or assets asynchronously, 
improving the loading time of your application. It can be achieved by using the built-in React.lazy() method and Suspense component.

Approach
To implement the lazyloading in react follow the steps given below:

Firstly, Recognize the component you want to Lazy Load. These are mostly Large or complex which is not necessary for all the users when the page loads.
Import the lazy() and Suspense components from the React package
Use the lazy() function to dynamically import the component you want to lazy load:
Note that the argument to the lazy() function should be a function that returns the result of the import() function. 
Wrap the lazy-loaded component in a Suspense component, which will display a fallback UI while the component is being loaded:

Explanation
Lazy Loading in React can be implemented with the help of the built-in function React. lazy(). 
This is also known as code splitting, In which React.lazy along with webpack bundler divides the code into separate chunks, 
when the component is requested the chunk is loaded on demand. The use of React Suspense is to define fallback content to be displayed during asynchronous components or data loading, as shown above.

React Suspense provides better feedback to the user and improves the user experience as a user is not facing any blank screen or 
space while the content is being loaded. React Suspense is designed to handle the loading of the components that make asynchronous API requests. 
React Suspense can be used by wrapping the <Suspense> component and specifying the fallback content displayed while the component or data is loading. 

Code-splitting: It is an effective technique for optimizing the performance and efficiency of web applications, 
especially those with large code bases. By reducing the amount of code that needs to be loaded when a page first loads, code splitting can improve the user experience and make your application more responsive and fast. 
*/