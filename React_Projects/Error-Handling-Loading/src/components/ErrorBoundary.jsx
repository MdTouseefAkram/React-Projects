import React from 'react'

//This is for handling unexpected runtime errors in UI components (not API errors).

class ErrorBoundary extends React.Component{
    constructor(props){
        super(props);
        this.state= {hasError: false}; //hasError is a boolean that tracks whether an error has occurred in any child component.
    }

    static getDerivedStateFromError(){
        return {hasError:true}; // update state so next render shows fallback UI
        // This is a special lifecycle method in React for Error Boundaries.
        //! It is triggered when a child component throws an error.
        // It updates the state to { hasError: true }, which triggers a re-render.
        // This allows you to show a fallback UI instead of the broken component tree.
    }

    componentDidCatch(error, errorInfo){
        console.log("Error Boudary caught:", error, errorInfo);
        // Another special lifecycle method.
        // Receives the error and errorInfo (like stack trace).
        // You can log errors to the console or send them to an error-tracking service (like Sentry)
    }

    render(){
        if(this.state.hasError){
            //! Render Fallback UI or text here
            return <h2 style={{color:"red"}}>Oops! Something went wrong, please try again</h2>
            // Checks if hasError is true.
            // If yes, it renders a fallback UI instead of the broken component.
            
        }
        // this.props.children is a placeholder for whatever you nest inside a component. In ErrorBoundary, it means:
        // 👉 “Show the child components normally if there’s no error.”
        return this.props.children; //this.props.children  ===  <MyComponent />
        // Otherwise, it renders the children components normally.
    }
}

export default ErrorBoundary

//! In this code

// ErrorBoundary.jsx: Catches errors in child components and shows a fallback UI.
// BuggyComponent.jsx: Throws an error if clicked more than 3 times.
// App.jsx: Wraps BuggyComponent in ErrorBoundary to prevent app crashes.


//! V.V.I 1️⃣ What is a runtime UI error?
// A runtime UI error happens while React is rendering a component. For example:
// function BuggyComponent() {
//   const user = null;
//   return <p>{user.name}</p>; // ❌ this will crash because user is null
// }
//? Here, React tries to access user.name, but user is null. Normally, this breaks the entire React app.

//? 2️⃣ How Error Boundaries help
// An Error Boundary is a React class component that catches runtime errors in its child components.
// It does NOT catch errors inside event handlers or asynchronous code.
// It catches errors during rendering, lifecycle methods, and constructors of its children.

//? 3️⃣ How it works
// Consider this structure:

// <ErrorBoundary>
//   <BuggyComponent />
// </ErrorBoundary>

// BuggyComponent throws an error.
// Instead of crashing the whole app:
// React triggers getDerivedStateFromError in ErrorBoundary.
// ErrorBoundary updates its state.hasError = true.
// ErrorBoundary renders fallback UI (like a message: “Something went wrong”).
// The rest of the app continues working normally.

//! What is an Error Boundary in React?
// An Error Boundary is a React component that catches JavaScript errors anywhere in its child component tree, logs those errors, and displays a fallback UI instead of crashing the whole app.
//! ⚡ Without Error Boundaries, if one part of your app crashes, the whole app may break.
// Error boundaries must be class components because they rely on lifecycle methods.

//! Error Boundaries prevent your React app from crashing due to UI errors.
// Use getDerivedStateFromError + componentDidCatch.
// Always wrap components that might fail (like API data, dynamic imports, 3rd party libraries).

// What is an Error Boundary?
// In React, Error Boundaries are components that catch JavaScript errors anywhere in their child component tree.
// They prevent the entire app from crashing when a component has a runtime error.

//! They cannot catch errors in:
// Event handlers
// Asynchronous code (like setTimeout or fetch)
// Server-side rendering

//! Key Points
// They catch rendering errors, lifecycle errors, and constructor errors.
//! They do NOT catch errors in event handlers or async code.
// Implemented as a class component.

//! Summary
// | Error Type             | How to Handle             |
// | ---------------------- | ------------------------- |
// | Rendering / Lifecycle  | **Error Boundaries**      |
// | Async operations / API | **try/catch or .catch()** |
// | Event handlers         | **try/catch**             |

//! 2. Handling Errors in Async Operations (API calls)
// For API calls or any async code, React does not automatically catch errors. You need to handle them with try/catch or .catch() in promises.

//! 3. Handling Errors in Event Handlers
// Errors in events like onClick are not caught by Error Boundaries, so you use try/catch.

//! What is this.props.children?
// In React, every component can receive props (properties).
// Among those, React gives a special prop called children.
// children represents whatever you put between the opening and closing tags of a component.

// 🔹 Example
// <ErrorBoundary>
//   <MyComponent />
// </ErrorBoundary>

// Here:
// ErrorBoundary is the wrapper component.
// <MyComponent /> is passed to ErrorBoundary as props.children.
// So inside ErrorBoundary,
// this.props.children  ===  <MyComponent />