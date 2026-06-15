import React from 'react'
//! ✅ 1️⃣ Child.jsx (Receives a function as a prop

// once a parent function is same then is also same for child component becoz of useCallback.
// If any rerender happen due to other state variables and dependecy is not updated is useCallback or empty dependecy, then this memoizeFunction refernce is persist or same for both child and parent.

//! Why Do We Use useCallback?
// ✅ To memoize a function reference so it doesn’t get recreated on every render.
// ✅ Especially useful when passing functions as props to child components (especially with React.memo).
// ✅ Prevents unnecessary re-renders of child components. 
//! if any change happen in parent component in any state varibel or typing in input box, it cause rernder the parent component then child component also rerender becoz it using the props to avoid this we use useCallback despite any value changes in Parent , this useCallback function is not rerender and refrence is same and then child also not rerenders, this is optimization.

// ❌ Without useCallback → Functions are recreated on every render → Causes unnecessary re-renders of child components.
// ✅ With useCallback → Functions are memoized → Same reference unless dependencies change → Improves performance.

//! 👉 When the user clicks "Increase Count", the Parent re-renders.
// Without useCallback, the handleClick reference would change → Child would re-render every time.
// With useCallback, the function reference stays the same → Child does not re-render unnecessarily.

const CallbackChildComponent = ({memoizeFunction}) => {
    console.log('child component rerenders')
  return (
    <>
    <h3>CallbackChildComponent</h3>
    <button onClick={memoizeFunction}>Click Me on Child</button>
    </>
    
  )
}

export default React.memo(CallbackChildComponent);  // React.memo prevents re-renders unless props change