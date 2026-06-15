import React from 'react'

const withName = (OriginalComponent) => {
    let NewComponent = (props) =>{
        return <OriginalComponent {...props} name = "Touseef"/>
    };
//   return (
//     <div>withName</div>
//   )
return NewComponent;
}

export default withName

/*
! Output
! withName adds a name prop with the value "Touseef"
! App displays the name inside an <h1> tag
! The wrapped component renders "Touseef" in the browser
*/

/*
! A higher-order component (HOC) is an advanced technique in React for reusing component logic. HOCs are not part of the React API, per se. They are a pattern that emerges from React’s compositional nature.
! Concretely, a higher-order component is a function that takes a component and returns a new component.

! Think of it as a wrapper around a component.

? const EnhancedComponent = higherOrderComponent(WrappedComponent);

! Note that a HOC doesn’t modify the input component, nor does it use inheritance to copy its behavior. Rather, a HOC composes the original component by wrapping it in a container component. A HOC is a pure function with zero side-effects.
! Don’t Mutate the Original Component. Use Composition.
! Don’t Use HOCs Inside the render Method
! React’s diffing algorithm (called Reconciliation) uses component identity to determine whether it should update the existing subtree or throw it away and mount a new one. If the component returned from render is identical (===) to the component from the previous render, React recursively updates the subtree by diffing it with the new one. If they’re not equal, the previous subtree is unmounted completely.

Normally, you shouldn’t need to think about this. But it matters for HOCs because it means you can’t apply a HOC to a component within the render method of a component:

render() {
  / A new version of EnhancedComponent is created on every render
  / EnhancedComponent1 !== EnhancedComponent2
  const EnhancedComponent = enhance(MyComponent);
  / That causes the entire subtree to unmount/remount each time!
  return <EnhancedComponent />;
}

The problem here isn’t just about performance — remounting a component causes the state of that component and all of its children to be lost.

!!! Why use HOC?
To share common logic across multiple components.
! To share common functionality between components.

! Does HOC modify the original component?
? No. It creates and returns a new enhanced component.
*/


/*
! GFG
! Higher-order components (HOC) are an advanced technique in React that is used for reusing component logic. It is the function that takes the original component and returns the new enhanced component.

! It doesn’t modify the input component directly. Instead, they return a new component with enhanced behavior.
! They allow you to reuse component logic across multiple components without duplicating it.
! They are pure functions that accept a component and return a new component.

Syntax:
! const EnhancedComponent = higherOrderComponent(OriginalComponent);

! A Higher-Order Component takes a component as input.
! It returns a new component with added functionality.

! The new component behaves like the original but with extra features.Advantages of Higher-Order Components

? Code Reusability: Allows sharing common logic across multiple components.
? Separation of Concerns: Keeps business logic separate from UI code.
? Readability: Makes components cleaner and easier to understand.
? Maintainability: Reduces duplication and simplifies updates.

! HOC Usage Tips
Avoid Overuse: Use HOCs only when necessary.
Reusable Logic: Apply HOCs for common features like auth or loaders.
Pass Props: Forward all required props to wrapped components
Clear Naming: Use meaningful names for easier debugging.

*/

/* -----------------------------------------------------------------------
! Why Use HOC?
! Reuse component logic
Avoid code duplication
Add extra functionality to existing components
Handle authentication, logging, loading states, etc.

! Higher-order components are not commonly used in modern React code. why?
Higher-Order Components (HOCs) are still supported in React, but they are less common in modern React applications because Hooks provide a simpler and more direct way to reuse logic.

! Problems with HOCs
! 1. Wrapper Hell
HOCs create multiple layers of components, making the component tree harder to understand.
export default withAuth(
  withLoading(
    withTheme(Profile)
  )
);

This becomes difficult to read and debug.

! 2. Prop Name Collisions
A HOC may inject props that conflict with existing props.
const withUser = (Component) => {
  return (props) => (
    <Component {...props} user="Admin" />
  );
};

If the parent already passes a user prop, it can be overwritten.

! 3. Harder Debugging
In React DevTools, you'll often see:
WithAuth(WithLoading(Profile))

instead of simply:

Profile

This makes debugging more difficult.

! 4. Logic Is Less Explicit
With HOCs, you don't immediately see where data is coming from.
export default withAuth(Profile);

Looking at Profile, it's not obvious that authentication data is being injected.

! Are HOCs Completely Obsolete?
No. You'll still encounter HOCs in:

Older React codebases
Some third-party libraries
Legacy Redux code (connect() is a HOC)

!! Common Replacements
!| Old Pattern       | Modern Replacement                  |
| ----------------- | ----------------------------------- |
!| HOC (`withAuth`)  | Custom Hook (`useAuth`)             |
| HOC (`withFetch`) | Custom Hook (`useFetch`)            |
| HOC (`withTheme`) | `useContext` + Custom Hook          |
| Render Props      | Custom Hooks                        |
| Redux `connect()` | `useSelector()` and `useDispatch()` |

! Interview Answer
! Q: What is used instead of HOC nowadays?
A:
! "In modern React, Custom Hooks are generally used instead of Higher-Order Components for code reuse. Custom Hooks make component logic easier to share, read, test, and debug without adding extra wrapper components."

One-Liner
! HOCs were the primary code-reuse pattern before React Hooks. Today, Custom Hooks are the preferred way to share reusable logic between functional components.
*/

/*
! Example for counter using hoc.
! Visual Flow

Button
   ↓
withCounter(Button)
   ↓
ButtonWithCounter
   ↓
count + increment props added


Text
   ↓
withCounter(Text)
   ↓
TextWithCounter
   ↓
count + increment props added

! Why use HOC?
Suppose multiple components need the same logic:

? Authentication
? Loading state
? Logging
? API data fetching
? Permission checking
! Instead of duplicating code, you can create a HOC and reuse the logic.

! Interview Definition
! A Higher Order Component (HOC) is an advanced React pattern where a function accepts a component and returns a new enhanced component with additional functionality, allowing code reuse and separation of concerns.

! Important Notes
HOC is a pattern, not a React Hook.
HOC takes a component and returns a new component.
Used for reusing component logic.
Common examples: Authentication, Logging, Permissions, Loading States.
! Nowadays, Custom Hooks are often preferred for sharing logic in functional components, but HOCs are still asked in React interviews and used in many existing codebases.
*/