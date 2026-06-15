import React from 'react'
import Button from './components/Button'

const App = () => {
  return (
    <>
    {/* //! passing two props , named event function handlers and children props = Play Movie and Upload Image in this <Button/> component.*/}
    <Button onSmash={()=> alert('Playing')}> 
      Play Movie
    </Button>

    <Button onSmash={()=>alert('Uploading!')}>
      Upload Image
    </Button>

    </>
  )
}

export default App

/*
! Naming event handler props 
Built-in components like <button> and <div> only support browser event names like onClick. However, when you’re building your own components, you can name their event handler props any way that you like.

By convention, event handler props should start with on, followed by a capital letter.

For example, the Button component’s onClick prop could have been called onSmash

!! Naming Event Handler Props
In React, it’s common to name event handler props according to the event being handled. This helps in maintaining clarity and consistency in your codebase.

! Naming Event Handler Props in React

When you pass an event handler from a parent component to a child component, React convention is:

! Parent function: handleSomething
! Prop name: onSomething

!--------------------------------
! Naming Event Handler Props in React

A common convention is:

✅ Start event handler props with on

! Naming Event Handler Props in React

When you pass an event handler from a parent component to a child component, React convention is:

Parent function: handleSomething
Prop name: onSomething

! Example (V.V.I)

!! Parent Component

function App() {
  const handleDelete = () => {
    console.log("Deleted");
  };

  return <UserCard onDelete={handleDelete} />;
}

!! Child Component

function UserCard({ onDelete }) {
  return (
    <button onClick={onDelete}>
      Delete
    </button>
  );
}

! Why use on?
<UserCard onDelete={handleDelete} />

! Reading this feels natural:

"When a delete event happens, call handleDelete."

The on prefix signals that the prop is a callback function.

! Common Examples
? <Modal onClose={handleClose} />

? <Form onSubmit={handleSubmit} />

? <ProductCard onAddToCart={handleAddToCart} />

? <SearchBox onSearch={handleSearch} />

? <UserList onSelectUser={handleSelectUser} />

! Parent vs Child Naming

| Parent Function | Prop Name  |
| --------------- | ---------- |
| `handleClick`   | `onClick`  |
| `handleDelete`  | `onDelete` |
| `handleSubmit`  | `onSubmit` |
| `handleClose`   | `onClose`  |
| `handleSearch`  | `onSearch` |


! You are not limited to built-in events.

<Counter onIncrement={handleIncrement} />
function Counter({ onIncrement }) {
  return (
    <button onClick={onIncrement}>
      +
    </button>
  );
}

! onIncrement is a custom event-handler prop created by you.

! Bad Naming
? <Button abc={handleClick} />

<Button data={handleClick} />

<Button myFunction={handleClick} />

! These work, but they don't clearly indicate that the prop is an event handler.

! Best Practice

function App() {
  const handleSave = () => {
    console.log("Saved");
  };

  return <Editor onSave={handleSave} />;
}

function Editor({ onSave }) {
  return (
    <button onClick={onSave}>
      Save
    </button>
  );
}

! Interview Answer

! Naming Event Handler Props is a React convention where callback props passed to child components are prefixed with on (e.g., onClick, onDelete, onSubmit) and the corresponding handler functions in the parent are typically prefixed with handle (e.g., handleClick, handleDelete, handleSubmit). This makes the code more readable and self-explanatory.

!! onClick → Event
!! handleClick → Event Handler Function




!-------------------------------------------------------
! Event Handling in React is the process of responding to user interactions (clicks, typing, form submissions, keyboard events, etc.) using event handler functions attached to JSX elements through React event props such as onClick, onChange, and onSubmit.

! Can event handlers have side effects? 

? Absolutely! Event handlers are the best place for side effects.

Unlike rendering functions, event handlers don’t need to be pure, so it’s a great place to change something—for example, change an input’s value in response to typing, or change a list in response to a button press. However, in order to change some information, you first need some way to store it. In React, this is done by using state, a component’s memory. 

! Stopping propagation 
Event handlers receive an event object as their only argument. By convention, it’s usually called e, which stands for “event”. You can use this object to read information about the event.

! That event object also lets you stop the propagation. If you want to prevent an event from reaching parent components, you need to call e.stopPropagation() like this Button component does:

function Button({ onClick, children }) {
  return (
    <button onClick={e => {
      e.stopPropagation();
      onClick();
    }}>
      {children}
    </button>
  );
}

export default function Toolbar() {
  return (
    <div className="Toolbar" onClick={() => {
      alert('You clicked on the toolbar!');
    }}>
      <Button onClick={() => alert('Playing!')}>
        Play Movie
      </Button>
      <Button onClick={() => alert('Uploading!')}>
        Upload Image
      </Button>
    </div>
  );
}

! When you click on a button:

React calls the onClick handler passed to <button>.
That handler, defined in Button, does the following:
Calls e.stopPropagation(), preventing the event from bubbling further.
Calls the onClick function, which is a prop passed from the Toolbar component.
That function, defined in the Toolbar component, displays the button’s own alert.
! Since the propagation was stopped, the parent <div>’s onClick handler does not run. (alert('You clicked on the toolbar!'); This is not display on UI becoz we stop propogation)
As a result of e.stopPropagation(), clicking on the buttons now only shows a single alert (from the <button>) rather than the two of them (from the <button> and the parent toolbar <div>). Clicking a button is not the same thing as clicking the surrounding toolbar, so stopping the propagation makes sense for this UI.

!! what is e in react ?
? e in React is the event object automatically passed by React to an event handler. It contains information about the event, such as the target element, input value, event type, and methods like preventDefault() and stopPropagation(). e is simply a short variable name for event.

! What is e.target in React?

! e.target refers to the HTML element that triggered the event.

! e = event object
! target = the element where the event occurred
! e.target = HTML Element -  e.target refers to the HTML element/ DOM element that triggered the event.

! Example 2: Input Field

function App() {
  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return <input onChange={handleChange} />;
}

! If you type:

! React

! Then:

! e.target.value

? returns:

! React

!!! Breakdown

! e.target

might be:

!!! <input value="React" />

! and:

e.target.value

! gets the value from that input

! Example:

const handleChange = (e) => {
  console.log(e.target.checked);
};

! Visual Understanding

<input onChange={handleChange} />

! User types:

Hello

! React creates an event object:

! e = {
  target: <input value="Hello" />
}

So:

! e.target.value

! becomes:

! Hello


! Interview Answer

!! e.target is the DOM element that triggered the event. It is commonly used to access properties of that element, such as e.target.value for input fields, e.target.checked for checkboxes, and e.target.textContent for element text.
*/