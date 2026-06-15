import { Component } from "react";

class ClassComponent extends Component{
    constructor(props){
        super(props); // Calls the constructor of React.Component

         // Instance variable
        //  myVariable = 42;

        //state initialization
        this.state= {
        message: "Hello, Welcome to Class Component",
    }
};
 handleChange = ()=>{
    // let localVar = 'Clicked!'; //or temporary use inside a method, just declare local variables with let, const, or var.
    // console.log(localVar);
    this.setState({
        message: "You clicked the button!"
    })
 }

    render(){
        return(
         <>
         <h1>{this.state.message}</h1>
         <button onClick={this.handleChange}>Click Me</button>
         {/* If you want to create variables that don’t affect rendering and are just for internal use (like counters, timers, etc.), you can define them as class properties. */}
         {/* <p>My Variable: {this.myVariable}</p> // These variables do NOT trigger re-renders when updated. */}
         </>
   ) }  
    
}

export default ClassComponent;


//! | Concept              | Explanation                                                   |
// | -------------------- | ------------------------------------------------------------- |
// | `extends Component`  | The class inherits from React's `Component` class.            |
// | `constructor(props)` | Initializes the state and passes `props` to the parent class. |
// | `this.state`         | Holds the component's state.                                  |
// | `this.setState()`    | Used to update the state and re-render the component.         |
// | `render()`           | Returns the JSX that renders the UI.                          |

// ✅ Why do we use super(props)?
// 1️⃣ It allows us to properly initialize the parent (Component) part of the class.
// 2️⃣ It makes this.props available inside the constructor.

//! this refers to the current instance of the component.
// It gives access to:
// Props → this.props
// State → this.state
// Methods → this.methodName()

// ✅ Why Do We Need this?
// In class components, this refers to the current instance of the component.
// You use this.state to access state and this.setState() to update state.
// You use this.props to access props passed from parent components.

// ✅ Why Bind Methods?

// If you don’t bind the method in the constructor:

// handleClick() {
//   console.log(this);
// }

// 👉 When the button is clicked, this would be undefined (or incorrect) because the function loses its context.
// That’s why we use:
//! this.handleClick = this.handleClick.bind(this);

// | Purpose      | Example                                          |
// | ------------ | ------------------------------------------------ |
// | Access State | `this.state.count`                               |
// | Access Props | `this.props.name`                                |
// | Set State    | `this.setState({count: 1})`                      |
// | Bind Methods | `this.handleClick = this.handleClick.bind(this)` |

//! | Type of Variable | Syntax Location                    | Affects Rendering? |
// | ---------------- | ---------------------------------- | ------------------ |
// | State Variable   | Inside `this.state` in constructor | Yes                |
// | Class Property   | Defined outside constructor        | No                 |
// | Local Variable   | Inside a method                    | No                 |
// 💡 Tip:
// Use state when the variable should cause a UI update.
// Use instance variables or local variables when it's internal logic.