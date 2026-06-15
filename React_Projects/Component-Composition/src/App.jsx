//! Example 1 (Simple use case where no children neccessary)
/* 
import React from 'react'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
    <Header/>
    <Content/>
    <Footer/>
    </>
  )
}

export default App
*/

//! Example 2 (Children used)
import React from "react";
import BoxChildrenProp from "./components/BoxChildrenProp";

function App(){
  // CSS
  const Box1 = {
        backgroundColor: "blue",
        color: "white",
        padding: "10px 20px",
        width: "20px",
        height: "50px",
    };

    const Box2 = {
        backgroundColor: "red",
        color: "white",
        padding: "12px 25px",
        width: "30px",
        height: "50px",
    };

    return (
      <>
      <BoxChildrenProp text= "Box1" style={Box1}/>
      <BoxChildrenProp text= "Box2" style={Box2}/>
      </>
    )
}
export default App

/*
! GFG code and notes.
! ReactJS Component Composition
In React, it becomes difficult to manage the complex UI components and maintain the code. With the help of Component Compositions, we can solve this problem by combining the components into a single component.

Component Composition is a React pattern where you build complex UIs by combining smaller, reusable components together.

Instead of creating one large component with many responsibilities, you compose multiple components to work together.

! Component Composition

! In this example - 1

The app component consists of three smaller components.
The header, Content, and Footer are independent components resides under the app component
Techniques for Component Composition
Below are the techniques for component composition

! Containment (Children Props)
This is mainly used when we are building reusable wrapper components.

! In this example - 2

The App component renders two <Box /> components and passes the text and style props to them.
The Box component receives props.style and props.text and applies the style dynamically while displaying the text inside a <div>.
The Box component is generic, meaning it can be used multiple times with different styles and text, improving reusability and maintainability.


! Use Cases of Component Composition

Building Layout Components: It is useful in creating reusable layout structures like headers, footers, etc.
State Management: Composition helps in managing a state efficiently by keeping it at the right level and passing it down via props.
Form Handling: Forms with dynamic fields and validation rules can be composed of child components.
Modularizing Large Applications: Component Composition enables breaking down large applications into smaller, maintainable components.

*/


/*
Interview Definition

Component Composition is a React design pattern where small reusable components are combined together to create larger and more complex UI components. It promotes code reusability, flexibility, maintainability, and follows React's principle of composition over inheritance.
*/

//! At Facebook, we use React in thousands of components, and we haven’t found any use cases where we would recommend creating component inheritance hierarchies.

/*
!----------- Extra Topic------------
! ------ Compound Components ----------

! Compound Components are a special type of composition where multiple related components work together as a single component.

! Compound Components are a special pattern of Component Composition.

! Multiple related components work together as a single component.

! Compound Components are an advanced composition pattern where multiple related components (such as Modal.Header, Modal.Body, and Modal.Footer) work together under a parent component to create a flexible and expressive API.

In short: Compound Components are a specialized form of Component Composition.

! Better for Large Components

! Used in:

Tabs
Accordion
Modal
Dropdown
Menu
Select
Navigation

! Example

<Tabs>
  <Tabs.List>
    <Tabs.Tab>Home</Tabs.Tab>
    <Tabs.Tab>About</Tabs.Tab>
  </Tabs.List>

  <Tabs.Panel>
    Home Content
  </Tabs.Panel>
</Tabs>

! Here:

Tabs
Tabs.List
Tabs.Tab
Tabs.Panel

! all belong to the same family.

! They work together to create a Tabs UI.

! This is called Compound Components Pattern.

!------------------------------
!! Real World Example

! Consider a Modal.

! Without Compound Components

<Modal
  title="Delete User"
  body="Are you sure?"
  footer={<button>Delete</button>}
/>

! Too many props.

! With Compound Components

<Modal>
  <Modal.Header>
    Delete User
  </Modal.Header>

  <Modal.Body>
    Are you sure?
  </Modal.Body>

  <Modal.Footer>
    <button>Delete</button>
  </Modal.Footer>
</Modal>

! More flexible and readable.

! Relationship

Component Composition
│
├── Using children
├── Wrapper Components
├── Layout Components
└── Compound Components

! So:

! Compound Components are a type of Component Composition.

! Not all composition is compound components.

! But every compound component uses composition.

! Why Compound Components?

! 1. Cleaner API

! Instead of:

<Modal
  title="Title"
  body="Content"
  footer="Buttons"
/>

! Use:

<Modal>
  <Modal.Header>Title</Modal.Header>
  <Modal.Body>Content</Modal.Body>
  <Modal.Footer>Buttons</Modal.Footer>
</Modal>

! 2. More Flexible

! You can arrange sections however you want.

<Modal>
  <Modal.Body />
  <Modal.Header />
</Modal>

! 3. Better for Large Components

! Used in:

Tabs
Accordion
Modal
Dropdown
Menu
Select
Navigation

! What is a Compound Component in React?

! A Compound Component is a design pattern where multiple components work together as a single unit and share state internally.

!! Component Composition vs Compound Components

?| Component Composition                                              | Compound Components                                                                      |

| ------------------------------------------------------------------ | ---------------------------------------------------------------------------------------- |
!| A general React pattern for combining components together.         | A special type of component composition where multiple related components work together. |
!| Uses the `children` prop to make components flexible and reusable. | Uses parent-child communication (often via Context API) to share state.                  |
!| Components can be used independently.                              | Child components are designed to be used inside a specific parent component.             |
!| Simple and commonly used.                                          | More advanced and useful for complex UI components.                                      |

? Component Composition vs Compound Component (React)

| Feature       | Component Composition                                               | Compound Component                                                |
| ------------- | ------------------------------------------------------------------- | ----------------------------------------------------------------- |
!| Meaning       | Combining components using `children` or props to build reusable UI | Multiple related components work together and share state/context |
!| Purpose       | Reusability and flexibility                                         | Create a complete, coordinated component API                      |
!| State Sharing | Usually parent passes props                                         | Usually uses React Context internally                             |
!| Relationship  | General React pattern                                               | Specialized form of composition                                   |
!| Flexibility   | Very flexible                                                       | More structured                                                   |
!| Example       | Card, Layout, Modal wrappers                                        | Tabs, Accordion, Select, Menu                                     |

? Easy Rule to Remember

! Component Composition = Building UI by combining components.
! Compound Components = A group of related components that work together as one component.

! 👉 Every Compound Component is a Component Composition, but not every Component Composition is a Compound Component.

! Simple Interview Answer

! Component Composition = Building components by combining smaller components using props and children.

! Compound Component = A special type of composition where multiple related components work together and share state internally (usually through Context API).


!! Relationship

Component Composition
        │
        └── Compound Component
             (special type of composition)

So:

! ❌ Not the same thing.

! ✅ Compound Component is a specialized form of Component Composition.
*/