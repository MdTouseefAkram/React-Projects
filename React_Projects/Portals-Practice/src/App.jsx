import React, { useState } from 'react'
import Modal from './components/Modal';

// A portal allows you to render a component’s JSX into a DOM node that exists outside the DOM hierarchy of the parent component.

const App = () => {

  let [showModal, setShowModal] = useState(false);
  return (
    <>
      <h1>React Portal</h1>
      <button onClick={()=> setShowModal(true)}>Open Modal</button>

      {showModal && (
        <Modal onClose={()=>setShowModal(false)}> 
        {/* Event bubbling happened but with same portal-root dom node becoz in this code example this onClose function is handles in Modal componenet which is under modal-root not parent root. See next below exaple where handler function hanlded by parent root. */}
        {/* children data is these two JSX and this onClose function whatever we write inside openeong and closing tags of Modal is become children props. (Modal used here as a component in App component , here we actually paasing props values and these children values is used in Modal.jsx where props recives and used. actaully there values get fiiled in Modal.jsx in {children} in the body  of or between in Modal opening and closing tag.  )*/}
          <h2>This is a Modal!</h2>
          <p>Rendered outside the main root using React Portal.</p>
        </Modal>
      )}
    </>
    
  )
}


/*
! Event Bubbling
Even though the portal’s content is rendered outside the parent DOM tree, events still bubble up through React’s virtual hierarchy.
That means if you click inside a portal, the event can still be handled by the parent component.
*/ 
// function App(){
//   let handleClick =()=>{
//     alert(`Clicked inside the App!`);
//   };


// return (
//   <>
//     <div onClick={handleClick}>
//       <h1>App Component</h1>
//       <Modal>
//         <button>Click Me</button>
//         //! Clicking the button inside the modal will still trigger the handleClick event in the parent. (Event bubbling happend - target (portal Dom) to Dom (root dom))
//       </Modal>
//     </div>
//   </>
// )
// }

/*
! We only wrote onClick={handleClick} on the <div> — not on the button.
Yet when you click the button, the alert still appears.
Why? → Because of event bubbling.

! 1. What really happens when you click the button

When you click anywhere in the browser:

The browser first triggers a click event on the exact element you clicked — the button (this is called the event target).

Then the event bubbles up (moves upward) through its parent elements in the DOM tree:
! button → div → body → document → window

Each ancestor along the way has a chance to “listen” for the click and react to it.

! Even though the button has no onClick, the event bubbles up to the parent <div>,
and React invokes your handleClick() function.

!! If you want to stop it
You can stop the bubbling like this:

<button onClick={(e) => e.stopPropagation()}>
  Click Me
</button>

Now, the event will stop at the button — the parent div’s onClick won’t trigger.
*/

export default App

/*
In React, onClose is a callback function (prop) that is typically used to handle 
what happens when a component (like a modal, dropdown, or dialog box) is closed.

| Feature      | `onClick`        | `onClose`                                                    |
| ------------ | ---------------- | ------------------------------------------------------------ |
| Built-in?    | ✅ Yes            | ❌ No (custom)                                                |
| Purpose      | Handles clicks   | Handles closing logic                                        |
| Triggered by | User click event | Custom logic (e.g., close button, escape key, overlay click) |
| Defined by   | React            | Developer (you)                                              |

*/

/*
!React Portals provide us the ability to break out of this dom tree and render a component onto a dom node that is not 
under this root element. Doing so breaks the convention where a component needs to be rendered as a new element and follow 
a parent-child hierarchy. They are commonly used in modal dialog boxes, hovercards, loaders, and popup messages.
*/

/*
!Output Preview
✅ When you click “Open Modal”,
a popup (modal) appears centered on the screen — even though it’s rendered outside the React root DOM node.

!🧠 Why Use Portals?
Keeps modal/popups above everything (no z-index conflicts)
Cleaner DOM structure
Works well with accessibility and keyboard navigation
Avoids CSS issues from parent containers (like overflow: hidden)
*/

//! V.V.I
/*
! Case 1: When You Don’t Use Portal
If you don’t use a portal, your modal will be rendered inside the same DOM hierarchy where the component was called.

! What happens:
! Z-index issues:
The modal may appear behind other elements (like headers or sidebars) if the parent container has CSS like overflow: hidden or position: relative.

! CSS inheritance problems:
The modal might inherit unwanted styles (e.g., opacity, transform, overflow) from its parent.

! Scroll blocking issues:
You might find it difficult to prevent background scrolling when the modal is open because it’s still part of the same DOM flow.

! Accessibility and layering issues:
Screen readers and focus management may not behave correctly.


!! Case 2: When You Use Portal
If you use a portal, you render the modal into another DOM node, typically outside the app’s root element, like this:

! What happens:
! Proper overlay layering:
The modal sits above all other content regardless of where it’s called in the component tree.

! No CSS interference:
The modal isn’t affected by parent containers’ CSS (like overflow: hidden or z-index stacking).

! Clean and predictable structure:
The modal is logically part of your React app (for state and props) but physically separate in the DOM.

! Event bubbling still works:
Even though it’s rendered outside the DOM hierarchy, events still bubble up through the React tree, so parent components can still catch events (e.g., closing the modal from the parent).

!! In short:
Without a portal, your modal might visually misbehave (hidden, clipped, overlapped).
With a portal, it renders cleanly on top of everything, with better structure and control.

| Feature                           | Without Portal | With Portal |
| --------------------------------- | -------------- | ----------- |
| Renders inside parent DOM         | ✅ Yes          | ❌ No        |
| Escapes CSS stacking issues       | ❌ No           | ✅ Yes       |
| Easier z-index & overlay control  | ❌ Hard         | ✅ Easy      |
| Event bubbling through React tree | ✅ Yes          | ✅ Yes       |
| Background scroll blocking        | ❌ Harder       | ✅ Easier    |
| Common for modals, tooltips       | ❌ No           | ✅ Yes       |

*/

//! When to Use Portals
// Portals are especially useful when:
// Creating modals, dialogs, or pop-ups
// Rendering tooltips or dropdowns that should appear above other elements
// Handling CSS stacking (like z-index) more easily
