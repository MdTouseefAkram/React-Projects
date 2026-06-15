import React, { useEffect, useState } from 'react'

const LifeCycleFunctionalBased = () => {
    let [count, setCount] = useState(0);

    //Equaivalent to componentDidMount
    useEffect(()=>{
        console.log('component mounted');

        // Equivalent to componentWillUnmount

        //  return( wrong , This executes console.log() immediately and returns undefined to useEffect.
        //     console.log('component will unmount')
        // )

        //Correct
        //! The function returned by useEffect is a cleanup function. 
        // React expects this returned function to be called when the component unmounts
        return ()=>{ 
            console.log('component will unmount')
        }
    },[]);

    //Equivalent to componentDidUpdate
    useEffect(()=>{
        console.log(`Count updated to: ${count}`);
    },[count]);

  return (
    <>
        <h3>LifeCycleFunctionalBased</h3>
        <h1>Count: {count}</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>
    </>
    
    

  )
}

export default LifeCycleFunctionalBased

//! The introduction of React Hooks in React v16.8, functional components can now handle lifecycle events using useEffect and other hooks.
// ✅ React Component Lifecycle in Functional Components
// | Lifecycle Phase | Class Component Method   | Functional Component Equivalent                                 |
// | --------------- | ------------------------ | --------------------------------------------------------------- |
// | Mounting        | `componentDidMount()`    | `useEffect(() => { ... }, [])`                                  |
// | Updating        | `componentDidUpdate()`   | `useEffect(() => { ... })` or `useEffect(() => { ... }, [dep])` |
// | Unmounting      | `componentWillUnmount()` | `useEffect(() => { return () => { ... } }, [])`                 |
