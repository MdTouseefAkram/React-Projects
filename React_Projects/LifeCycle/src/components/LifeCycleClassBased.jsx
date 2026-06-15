import { Component } from "react";

class LifeCycleClassBased extends Component{

    // ✅ Mounting Phase - Step 1
    constructor(props){
        super(props);

        //state initailization
        this.state = {
            count : 0,
        };
        console.log(`Contructor: Component is created`)
    }

    // ✅ Mounting Phase - Step 2 (also runs in Updating Phase)
    static getDerivedStateFromProps(props, state){
        console.log(`getDerivedStateFromProps`);
        return null; // No state update based on props in this case.
    }

    // ✅ Mounting Phase - Step 4
    componentDidMount(){
        console.log(`componentDidMount: Component mounted in DOM`);
    }

    // ✅ Updating Phase - Step 2
    shouldComponentUpdate(nextProps, nextState){
        console.log(`shouldComponentUpdate`);
        return true; // Allow re-rendering
    }

    // ✅ Updating Phase - Step 4
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log(`getSnapshotBeforeUpdate`);
        return null;
    }

    // ✅ Updating Phase - Step 5
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log(`componentDidUpdate`);
    }

    // ✅ Unmounting Phase
    componentWillUnmount(){
        console.log(`componentWillUnmount: Cleanup before removal`);
    }

    incrementCount = ()=>{
        this.setState({ 
            count: this.state.count+1
        })
    };

    // ✅ Mounting & Updating Phase - Step 3
    render(){
        return(
            <>
            <h3>Life Cylce (Class Based Component)</h3>
                <h1>Count : {this.state.count}</h1>
                <button onClick={this.incrementCount}>Increment</button>
            </>
        )
    }
}
 export default LifeCycleClassBased

//  ✅ Console Output Example when Component Mounts and Updates

// Constructor: Component is created  
// getDerivedStateFromProps  
// Render: UI is rendered  
// componentDidMount: Component mounted in DOM  

    // On clicking "Increment"
// getDerivedStateFromProps  
// shouldComponentUpdate  
// Render: UI is rendered  
// getSnapshotBeforeUpdate  
// componentDidUpdate  

    // On component unmount
// componentWillUnmount: Cleanup before removal

//! ✅ Lifecycle Phases Summary in Code

//! ✅ 1️⃣ Phases of React Component Life Cycle
// | Phase      | Methods                                                                                                                      |
// | ---------- | ---------------------------------------------------------------------------------------------------------------------------- |
// | Mounting   | `constructor()` → `getDerivedStateFromProps()` → `render()` → `componentDidMount()`                                          |
// | Updating   | `getDerivedStateFromProps()` → `shouldComponentUpdate()` → `render()` → `getSnapshotBeforeUpdate()` → `componentDidUpdate()` |
// | Unmounting | `componentWillUnmount()`                                                                                                     |


//! A class-based component has 3 main phases:
//! 1️⃣ Mounting

// When the component is created and inserted into the DOM.
// | Lifecycle Method                    | Purpose                                                                                |
// | ----------------------------------- | -------------------------------------------------------------------------------------- |
// | `constructor()`                     | Initialize state, bind methods                                                         |
// | `static getDerivedStateFromProps()` | Sync props to state if needed                                                          |
// | `render()`                          | Returns JSX to render UI                                                               |
// | `componentDidMount()`               | Invoked after component is mounted. Good for API calls, setting up subscriptions, etc. |

//! 2️⃣ Updating

// When props or state change and the component re-renders.
// | Lifecycle Method                    | Purpose                                                                                   |
// | ----------------------------------- | ----------------------------------------------------------------------------------------- |
// | `static getDerivedStateFromProps()` | Update state based on prop changes                                                        |
// | `shouldComponentUpdate()`           | Return true/false to optimize re-rendering                                                |
// | `render()`                          | Re-render UI                                                                              |
// | `getSnapshotBeforeUpdate()`         | Capture DOM info before updates (like scroll position)                                    |
// | `componentDidUpdate()`              | Runs after re-rendering. Good for further actions (like fetching data based on new props) |

//! 3️⃣ Unmounting

// When the component is removed from the DOM.
// | Lifecycle Method         | Purpose                                               |
// | ------------------------ | ----------------------------------------------------- |
// | `componentWillUnmount()` | Cleanup tasks like removing event listeners or timers |


//! ✅ What is static getDerivedStateFromProps() in React?
// static getDerivedStateFromProps(props, state) is a static lifecycle method in React Class Components.

// ⚡ Purpose:
// It is used to synchronize state with props when the props change over time.
// It runs before every render, both during mounting and updating phases.
// It is a pure function, meaning it does not have access to this (because it’s static).
// It returns an object to update the state, or null if no state change is needed.

// 1️⃣ Purpose
// Synchronize state with props when props change over time.
// Helps update the state before render if needed.

// 2️⃣ When it runs
// Before every render, during:
// Mounting phase → When the component is first created.
// Updating phase → When props or state change later.

// 3️⃣ Key points
// It is static, so:
// Cannot use this.
// Only receives props and state as arguments.
// Must return an object to update state, or null if no state update is needed.
// 4️⃣ Syntax
// static getDerivedStateFromProps(props, state) {
   // Compare props and state
//   if (props.value !== state.value) {
//     return { value: props.value }; // Update state
//   }
//   return null; // No state update
// }

//! shouldComponentUpdate(nextProps, nextState) in React
// This is a lifecycle method in class-based components that lets you control whether a component should re-render or not.

// 1️⃣ Purpose
// Used for performance optimization.
// React by default re-renders a component when state or props change.
// But sometimes, re-rendering is unnecessary.
// shouldComponentUpdate lets you prevent unnecessary re-renders.

// 2️⃣ When it runs
// It runs before the render() method, during the updating phase (i.e., when props or state change).
// It does not run during the mounting phase (first render).

// nextProps → The new props the component will receive.
// nextState → The new state the component will have.

// 4️⃣ Return value
// true → React will re-render the component.
// false → React will skip re-rendering the component.

// shouldComponentUpdate(nextProps, nextState) {
    // Re-render only if count is even
//     if (nextState.count % 2 === 0) {
//       return true;
//     }
//     return false;
//   }

// 1️⃣ Mounting Phas
// When a component is created and inserted into the DOM
// | Method                                          | When it Runs                                       | Purpose / Use                                                | Notes                                                        |
// | ----------------------------------------------- | -------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
// | `constructor(props)`                            | 1st method called                                  | Initialize state, bind event handlers, or set default values | Don’t call `setState` here to trigger re-render              |
// | `static getDerivedStateFromProps(props, state)` | Before `render()`                                  | Sync state with props changes                                | Returns object to update state or `null` if no update needed |
// | `render()`                                      | After `constructor` and `getDerivedStateFromProps` | Returns JSX to render the UI                                 | Must be pure – no side effects                               |
// | `componentDidMount()`                           | After first render                                 | Perform side effects like API calls, subscriptions, timers   | Ideal place to fetch data from server                        |

// 2️⃣ Updating Phase
// When props or state changes, component re-renders.
// | Method                                               | When it Runs                                                 | Purpose / Use                                                                     | Notes                                            |
// | ---------------------------------------------------- | ------------------------------------------------------------ | --------------------------------------------------------------------------------- | ------------------------------------------------ |
// | `static getDerivedStateFromProps(props, state)`      | Before every render                                          | Update state from props                                                           | Same as in Mounting phase                        |
// | `shouldComponentUpdate(nextProps, nextState)`        | Before re-render                                             | Control re-rendering for performance optimization                                 | Return `true` to re-render, `false` to skip      |
// | `render()`                                           | After `getDerivedStateFromProps` and `shouldComponentUpdate` | Update UI                                                                         | Same as in Mounting phase                        |
// | `getSnapshotBeforeUpdate(prevProps, prevState)`      | Right before DOM updates                                     | Capture DOM info (like scroll position)                                           | Returns a value passed to `componentDidUpdate`   |
// | `componentDidUpdate(prevProps, prevState, snapshot)` | After render and DOM updates                                 | Perform operations after updating UI, like API calls based on updated props/state | Receives snapshot from `getSnapshotBeforeUpdate` |

// 3️⃣ Unmounting Phase
// When the component is removed from the DOM.
// | Method                   | When it Runs                | Purpose / Use                                                   | Notes                    |
// | ------------------------ | --------------------------- | --------------------------------------------------------------- | ------------------------ |
// | `componentWillUnmount()` | Before component is removed | Cleanup timers, cancel network requests, remove event listeners | Avoid setting state here |

// 4️⃣ Error Handling Phase
// When a child component throws an error.
// | Method                                   | When it Runs          | Purpose / Use                                           | Notes                                          |
// | ---------------------------------------- | --------------------- | ------------------------------------------------------- | ---------------------------------------------- |
// | `static getDerivedStateFromError(error)` | When error is thrown  | Update state to show fallback UI                        | Static method – returns object to update state |
// | `componentDidCatch(error, info)`         | After error is thrown | Log error information (to console or reporting service) | Works like a “catch block” for components      |

// ✅ Summary Table of All Lifecycle Methods
// | Phase          | Methods                                                                                                        |
// | -------------- | -------------------------------------------------------------------------------------------------------------- |
// | Mounting       | `constructor`, `getDerivedStateFromProps`, `render`, `componentDidMount`                                       |
// | Updating       | `getDerivedStateFromProps`, `shouldComponentUpdate`, `render`, `getSnapshotBeforeUpdate`, `componentDidUpdate` |
// | Unmounting     | `componentWillUnmount`                                                                                         |
// | Error Handling | `getDerivedStateFromError`, `componentDidCatch`                                                                |
