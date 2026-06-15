import React from 'react'
import withName from './hoc/withName'; //! Import the HOC

// Functional component
const App = (props) => {
  // return (
  //   <div>App</div>
  // )
  return  <h1>{props.name}</h1>
};

//! Wrap the App component with the HOC to create the enhanced version
let EnhancedComponent = withName(App);

// export default App

//! Export the enhanced component
export default EnhancedComponent;

/*
! Output
! withName adds a name prop with the value "Touseef"
! App displays the name inside an <h1> tag
! The wrapped component renders "Touseef" in the browser
*/

/*
! ---------------------------------------------------------------------------------------------------------------------
! Steps to implemet hoc 
! Steps to Implement a Higher-Order Component (HOC) in React
A Higher-Order Component (HOC) is a function that takes a component and returns a new enhanced component.

! Step 1: Create a Normal Component
/ User.jsx

function User({ name }) {
  return <h2>User Name: {name}</h2>;
}

export default User;

! Step 2: Create the HOC
/ withLogger.jsx

import React from "react";

function withLogger(WrappedComponent) {
  return function EnhancedComponent(props) {
    console.log("Props:", props);

    return <WrappedComponent {...props} />;
  };
}

export default withLogger;

! V.V.I below points.
!! What happens here?

! WrappedComponent = Component received by HOC. <or name can aslo be OriginalComponent>
! EnhancedComponent = New component returned by HOC.
! {...props} forwards all props to the original component.

! Step 3: Wrap the Component
/ EnhancedUser.jsx

import User from "./User";
import withLogger from "./withLogger";

const EnhancedUser = withLogger(User);

export default EnhancedUser;

! Step 4: Use the Enhanced Component
/ App.jsx

import EnhancedUser from "./EnhancedUser";

function App() {
  return (
    <div>
      <EnhancedUser name="Touseef" />
    </div>
  );
}

export default App;

! Folder Structure
src/
│
├── components/
│   ├── User.jsx
│   ├── withLogger.jsx
│   └── EnhancedUser.jsx
│
├── App.jsx
└── main.jsx

! Real Interview Example: Authentication HOC
! HOC
/ withAuth.jsx

import React from "react";

function withAuth(WrappedComponent) {
  return function AuthComponent(props) {
    const isLoggedIn = true;

    if (!isLoggedIn) {
      return <h2>Please Login First</h2>;
    }

    return <WrappedComponent {...props} />;
  };
}

export default withAuth;

! Protected Component
/ Dashboard.jsx

function Dashboard() {
  return <h1>Welcome to Dashboard</h1>;
}

export default Dashboard;

! Wrap It

import Dashboard from "./Dashboard";
import withAuth from "./withAuth";

const ProtectedDashboard = withAuth(Dashboard);

export default ProtectedDashboard;
HOC Implementation Formula
function HOC(WrappedComponent) {
  return function EnhancedComponent(props) {
    / Extra Logic

    return <WrappedComponent {...props} />;
  };
}

!! Flow
Original Component
        ↓
   Pass to HOC
        ↓
 HOC adds extra logic
        ↓
 Returns Enhanced Component
        ↓
 Use Enhanced Component

Why HOCs Were Used

Before React Hooks, HOCs were commonly used for:

Authentication
API Fetching
Logging
Permission Checks
Reusing State Logic
Modern React

Today, React developers usually prefer:

Custom Hooks (useAuth, useFetch, etc.)
Context API
React Query
Redux Toolkit

because they are simpler and avoid the nesting issues that HOCs can create.

! Complete Flow
User
 ↓ (passed to HOC)
withLogger(User)
 ↓
EnhancedUser
 ↓
<App />

!!! Here:

! withLogger → HOC
! User → Wrapped Component (received by HOC)
! EnhancedUser → Enhanced Component (returned by HOC

src/
│
├── components/
│   ├── User.jsx
│   ├── withLogger.jsx
│   └── EnhancedUser.jsx
│
├── App.jsx
└── main.jsx
*/

/*
! Working flow
In the HOC pattern, think of it like this:
App.jsx   ↓EnhancedUser.jsx   ↓withLogger(User)   ↓User.jsx

! Which component receives data?
! 1. App.jsx
Sends props:
<EnhancedUser name="Touseef" />
Here name="Touseef" is passed to EnhancedUser.

! 2. EnhancedUser.jsx
! Receives User component and passes it to the HOC:
const EnhancedUser = withLogger(User);
It doesn't directly handle props here. It just creates the enhanced component.

! 3. withLogger.jsx (HOC)
! Receives props first:
function EnhancedComponent(props) {  console.log(props);  return <WrappedComponent {...props} />;}
For example:
props = {  name: "Touseef"}
Then it forwards (delivers) the props:
<WrappedComponent {...props} />
which becomes:
<User name="Touseef" />

! 4. User.jsx
! Finally receives the props:
function User({ name }) {  return <h2>User Name: {name}</h2>;}
and displays:
User Name: Touseef

Data Flow
App.jsx   │   │ name="Touseef"   ▼EnhancedUser   │   ▼withLogger (HOC)   │ Receives props   │   │ {...props}   ▼User.jsx   │ Receives name   ▼UI

! Interview Answer
! In an HOC, the enhanced component created by the HOC receives the props first. The HOC can modify, add, or remove props, and then forwards them to the wrapped component using {...props}. The wrapped component finally consumes those props and renders the UI.

! --------------------------------------------------------------------------
!!!! why ... used with props here ?
! In HOC, we use:

<WrappedComponent {...props} />

! because props is an object.

Suppose:

<EnhancedUser
  name="Touseef"
  age={22}
  city="Kolkata"
/>

! Then inside the HOC:

props = {
  name: "Touseef",
  age: 22,
  city: "Kolkata"
};

If you write:

! <WrappedComponent props={props} />

! then User receives:

{
  props: {
    name: "Touseef",
    age: 22,
    city: "Kolkata"
  }
}

! To access the name, you'd need:

function User({ props }) {
  return <h1>{props.name}</h1>;
}

! which is usually not what we want.

! Using spread:

<WrappedComponent {...props} />

! React converts it to:

<WrappedComponent
  name="Touseef"
  age={22}
  city="Kolkata"
/>

! Now User receives:

{
  name: "Touseef",
  age: 22,
  city: "Kolkata"
}

! and can directly do:

function User({ name, age, city }) {
  return (
    <>
      <h1>{name}</h1>
      <h2>{age}</h2>
      <h3>{city}</h3>
    </>
  );
}

! Why not pass props one by one?

! You could write:

<WrappedComponent
  name={props.name}
  age={props.age}
  city={props.city}
/>

! But the HOC doesn't know in advance which props the parent will send.

So:

<WrappedComponent {...props} />

means:
! "Take every property inside the props object and pass it to the wrapped component as normal React props."

That's why almost every HOC uses:

return <WrappedComponent {...props} />;

to forward all incoming props unchanged.

! --------------------------------------------------
!!!!!what happens when we wrap compoenet?
! When we wrap a component with an HOC, React does not modify the original component. Instead, the HOC creates and returns a new component that adds extra functionality.

! Example
! Original Component

function User({ name }) {
  return <h2>User: {name}</h2>;
}

! HOC

function withLogger(WrappedComponent) {
  return function EnhancedComponent(props) {
    console.log("Props:", props);

    return <WrappedComponent {...props} />;
  };
}

!!!! Wrapping

const EnhancedUser = withLogger(User);

!!! What Happens Internally?
User
  │
  ▼
withLogger(User)
  │
  ▼
EnhancedComponent (new component created by HOC)
  │
  ▼
EnhancedUser

So:

const EnhancedUser = withLogger(User);

! is roughly like:

const EnhancedUser = function EnhancedComponent(props) {
  console.log("Props:", props);

  return <User {...props} />;
};

! When React Renders
<EnhancedUser name="Touseef" />
Step 1

! React calls:

EnhancedComponent({
  name: "Touseef"
});
Step 2

! HOC logic runs:

console.log("Props:", props);

! Output:

Props: { name: "Touseef" }
Step 3

! HOC renders the original component:

<User {...props} />

which becomes:

<User name="Touseef" />
Step 4

! User renders:

<h2>User: Touseef</h2>

! Visual Flow
<EnhancedUser name="Touseef" />
            │
            ▼
EnhancedComponent (from HOC)
            │
     Extra Logic
     (logging, auth, etc.)
            │
            ▼
<User name="Touseef" />
            │
            ▼
UI Output
Interview Answer

When a component is wrapped by an HOC, the HOC receives the original component as an argument and returns a new enhanced component. When the enhanced component renders, it executes the additional logic provided by the HOC and then renders the original wrapped component, usually forwarding all props using {...props}. The original component remains unchanged.

!!! why we need to wrapcomponent?
! We wrap a component with an HOC when we want to reuse the same logic across multiple components without duplicating code.
*/

/*
! ------------------------------------------------------------------------------------------
!!!!!!!!!! how data flow?
Let's understand the data flow in HOC step by step.

! Example
! User.jsx

function User({ name }) {
  return <h1>{name}</h1>;
}

! withLogger.jsx

function withLogger(WrappedComponent) {
  return function EnhancedComponent(props) {
    console.log("HOC received:", props);

    return <WrappedComponent {...props} />;
  };
}

! EnhancedUser.jsx

const EnhancedUser = withLogger(User);

! App.jsx

<EnhancedUser name="Touseef" />

!----------------------------------------------------------------------------------------------------------------------------
!!! Data Flow

! Step 1: App sends props
<EnhancedUser name="Touseef" />

React creates:

props = {
  name: "Touseef"
}

! and sends them to EnhancedUser.

! Step 2: EnhancedUser receives props

! Remember:

const EnhancedUser = withLogger(User);

! So EnhancedUser is actually:

function EnhancedComponent(props) {
  console.log(props);

  return <User {...props} />;
}

! Therefore:

props = {
  name: "Touseef"
}

! arrives at the HOC first.

! Step 3: HOC can modify/add props

function EnhancedComponent(props) {
  const newProps = {
    ...props,
    role: "Admin"
  };

  return <User {...newProps} />;
}

! Now:

newProps = {
  name: "Touseef",
  role: "Admin"
}

! Step 4: Wrapped Component receives props

<User {...newProps} />

! becomes:

<User
  name="Touseef"
  role="Admin"
/>

! So User receives:

{
  name: "Touseef",
  role: "Admin"
}

! Step 5: UI renders

function User({ name, role }) {
  return (
    <>
      <h1>{name}</h1>
      <h2>{role}</h2>
    </>
  );
}

! Output:

Touseef
Admin

!! Complete Flow Diagram

App.jsx
   │
   │ name="Touseef"
   ▼
EnhancedUser
   │
   ▼
EnhancedComponent (inside HOC)
   │
   │ Receives props
   │ Adds/Modifies logic
   ▼
WrappedComponent (User)
   │
   │ Receives final props
   ▼
UI

! One-Line Interview Answer
! In an HOC, props flow from the parent component → enhanced component (returned by the HOC) → HOC logic executes → props are forwarded using {...props} → wrapped component receives the final props and renders the UI.

! ----------------------------------------------------------------------------------------------------------------------------------------------
!! Conclusion
! User.jsx - original component
! withLogger.jsx - HOC - Extra logic goes here
! EnhanceUser.jsx - New EnhancedComponent return by HOC in withLogger.jsx and this New component i.e EnhanceUser.jsx , here we wrap the componnet - const EnhancedUser = withLogger(User);
! App.jsx - where we use the enhanced component in App.jsx, render in UI.

├── User.jsx - original component
├── withLogger.jsx   ← Extra logic goes here. HOC
├── EnhancedUser.jsx - new enhance component
└── App.jsx - Use the Enhanced Component . <EnhancedUser name="Touseef" /> . Read below line.

!!! Note - first App.jsx render , its common. here actually flow goes to App.jsx to enhancedUser.jsx to witLogger.jsx to User.jsx to UI. 

!! Date Flow
App.jsx
   │
   ▼
EnhancedUser.jsx
   │
   ▼
withLogger.jsx
   │
   ├─ Extra Logic
   │   (logging/auth/data fetching/etc.)
   │
   ▼
User.jsx
   │
   ▼
UI
*/

/*
!-----------------------------------------------------------------------------------------------------------------------
!! when we wrap in EnhanceUSer.jsx then which extra features add?
When you write:

! EnhancedUser.jsx

import User from "./User";
import withLogger from "./withLogger";

const EnhancedUser = withLogger(User);

export default EnhancedUser;

! No extra feature is added in EnhancedUser.jsx itself.

! EnhancedUser.jsx only does the wrapping:

withLogger(User)

! The extra feature comes from the HOC file (withLogger.jsx).

! Example 1: Logging Feature

! withLogger.jsx

function withLogger(WrappedComponent) {
  return function EnhancedComponent(props) {
    console.log("Component Rendered");

    return <WrappedComponent {...props} />;
  };
}

! Now when you do:

const EnhancedUser = withLogger(User);

! EnhancedUser gets the logging feature.

! Example 2: Authentication Feature

! withAuth.jsx

function withAuth(WrappedComponent) {
  return function EnhancedComponent(props) {
    const isLoggedIn = true;

    if (!isLoggedIn) {
      return <h1>Please Login</h1>;
    }

    return <WrappedComponent {...props} />;
  };
}

! Now:

! const ProtectedUser = withAuth(User);

! ProtectedUser gets the authentication feature.

!! Think of it Like This

User.jsx
   │
   │ wrapped by
   ▼
withLogger(User)
   │
   │ adds logging feature
   ▼
EnhancedUser

or
User.jsx
   │
   │ wrapped by
   ▼
withAuth(User)
   │
   │ adds authentication feature
   ▼
ProtectedUser

!! Interview Answer
! EnhancedUser.jsx does not add any feature itself. It only wraps the original component with an HOC. The actual extra functionality (logging, authentication, permissions, data fetching, extra props, etc.) is defined inside the HOC file and gets attached to the wrapped component when withSomething(User) is called.

!! how this feature get add?
! This is the key idea of HOCs.

! When you write:

const EnhancedUser = withLogger(User);

! JavaScript calls the withLogger function and passes User as an argument.

! Step 1: Original Component

function User() {
  return <h1>User Component</h1>;
}

! Step 2: HOC

function withLogger(WrappedComponent) {
  return function EnhancedComponent(props) {
    console.log("Component Rendered");

    return <WrappedComponent {...props} />;
  };
}

! Step 3: Wrapping

const EnhancedUser = withLogger(User);

! This executes:

withLogger(User);

! So:

! WrappedComponent = User

!! Now the HOC returns:

function EnhancedComponent(props) {
  console.log("Component Rendered");  // Extra Feature

  return <User {...props} />;
}

!! And this returned function is stored in:

!! const EnhancedUser = ...
!----------
!!! So internally:

const EnhancedUser = function(props) {
  console.log("Component Rendered");

  return <User {...props} />;
};

! Step 4: Rendering

! When React sees:

<EnhancedUser name="Touseef" />

! it runs:

EnhancedUser({ name: "Touseef" });

! which executes:

console.log("Component Rendered");

! ✅ Extra feature runs first.

! Then:

return <User {...props} />;

! becomes:

<User name="Touseef" />

and User renders.

! Visual Flow
<User />
   │
   │ pass to HOC
   ▼
withLogger(User)
   │
   │ creates new component
   ▼
EnhancedUser
   │
   │ render
   ▼
console.log("Component Rendered")   ← Extra feature runs
   │
   ▼
<User />
   │
   ▼
UI

! Why the feature gets added

! Because the HOC returns a new component that wraps the original component:

function EnhancedComponent(props) {

  ! Extra Feature
  console.log("Component Rendered");

  ! Original Component
  return <WrappedComponent {...props} />;
}

! Every time the enhanced component renders:

! HOC logic executes first.
! Then the original component renders.

! That's how logging, authentication, permissions, loading states, etc., get "added" to the component without changing the original component's code.

!! return <User {...props} />;

! This is not the extra feature.

! Its job is to render the original wrapped component and pass all props to it.

! Flow:

EnhancedComponent
      │
      ├── console.log()      ← Extra Feature
      │
      └── <User {...props}/> ← Render Original Component
                    │
                    ▼
                   UI

! Interview Answer

! In an HOC:
return <WrappedComponent {...props} />;

!!! is the line that renders the wrapped/original component and forwards its props. It is not the extra functionality itself. The extra functionality is the additional logic that the HOC executes before (or around) rendering the wrapped component.


!! return <User {...props} />;. is it new return compoenet with extra feature??
! Not exactly.

return <User {...props} />;

! does not create a new component with extra features.

! It simply renders the original User component.

? The new component with extra features is actually this whole function:

function EnhancedComponent(props) {
  console.log("Component Rendered"); // Extra feature

  return <User {...props} />;        // Render original component
}

! Think of it like this

! When you write:

const EnhancedUser = withLogger(User);

! the HOC returns:

function EnhancedComponent(props) {
  console.log("Component Rendered");

  return <User {...props} />;
}

! and stores it in:

const EnhancedUser = EnhancedComponent;

! So:

<EnhancedUser name="Touseef" />

! actually runs:

function EnhancedComponent(props) {
  console.log("Component Rendered"); // Extra feature

  return <User {...props} />;        // Original component
}

! Visual Flow

EnhancedUser
    │
    ▼
EnhancedComponent - Enhanced Component (returned by HOC) inside withLogger HOC
    │
    ├── Extra Feature
    │      console.log(...)
    │
    └── Render User
            │
            ▼
           UI

! Important

This line:

return <User {...props} />;

! is not the enhanced component.

! It is the wrapped component being rendered.

! The enhanced component is:

function EnhancedComponent(props) {
  // extra logic
  return <User {...props} />;
}

! The enhancement comes from the fact that User is now being rendered through EnhancedComponent, which executes additional logic before rendering User.

! Interview Answer

! return <User {...props} /> only renders the original wrapped component and forwards props. The new enhanced component is the function returned by the HOC (EnhancedComponent), which contains both the extra logic and the rendering of the wrapped component.

!------------------------------------------------
!! then how hoc return a new component and where?
! This is the most important concept in HOC.

Look carefully:

! HOC

function withLogger(WrappedComponent) {
  return function EnhancedComponent(props) {
    console.log("Component Rendered");

    return <WrappedComponent {...props} />;
  };
}

! Notice this line:

return function EnhancedComponent(props) {

! The HOC is returning a function.

!!! And in React, a function that returns JSX is a React component. -- (JSX is below return statement)

! So this:

function EnhancedComponent(props) {
  console.log("Component Rendered");

  return <WrappedComponent {...props} />;
}

! is the new component.

! Visual Representation

User Component
      │
      ▼
withLogger(User)
      │
      │ returns
      ▼
EnhancedComponent
      │
      ├── Extra Logic
      └── Renders User

! Why is it called a "new component"?

! Because before wrapping, you had only:

function User() {
  return <h1>User</h1>;
}

! After wrapping, you now have:

function EnhancedComponent(props) {
  console.log("Component Rendered");

  return <User {...props} />;
}

! This function did not exist before. The HOC created it and returned it.

! Interview Answer

! A Higher-Order Component returns a new React component because it returns a function component. In return function EnhancedComponent(props) { ... }, the returned function is the new component. It contains additional logic and renders the original wrapped component, which is why it is called an enhanced component.

!!-----------------------------------------
!! which component we called enhanced component?
! The enhanced component is the new component returned by the HOC.

! Example:

function withLogger(WrappedComponent) {
  return function EnhancedComponent(props) {
    console.log("Component Rendered");

    return <WrappedComponent {...props} />;
  };
}

! Here:

function EnhancedComponent(props) {
  console.log("Component Rendered");

  return <WrappedComponent {...props} />;
}

! ⬆️ This is the actual enhanced component.

! When you do:

const EnhancedUser = withLogger(User);

! it's equivalent to:

const EnhancedUser = EnhancedComponent;

! So:

! User → Wrapped Component (Original Component)
! withLogger → HOC
! EnhancedComponent → Enhanced Component (returned by HOC)
! EnhancedUser → Variable/reference that stores the enhanced component . (like , const EnhancedUser = withLogger(User);)

! Simple Diagram 

User
  │
  ▼
withLogger(User)
  │
  ▼
EnhancedComponent   ← Enhanced Component
  │
  ▼
assigned to
  │
  ▼
EnhancedUser

! Interview Answer

! For:

! const EnhancedUser = withLogger(User);
! Wrapped Component: User
! HOC: withLogger
! Enhanced Component: the function returned by withLogger (EnhancedComponent)
! EnhancedUser: a variable that references the enhanced component and is used in JSX like:


<EnhancedUser />

! Many developers casually call EnhancedUser the enhanced component too, because it is the name you use in your application, but technically the enhanced component is the function returned by the HOC.

!!-------------------------------------------
! How HOC recives a original component ?
! An HOC receives the original component as a function argument.

! Example

function withLogger(WrappedComponent) {
  return function EnhancedComponent(props) {
    return <WrappedComponent {...props} />;
  };
}

! Here the parameter:

WrappedComponent

! receives the original component.

!! When does it receive it? (IMP)

! When you write:

const EnhancedUser = withLogger(User);

! JavaScript executes:

withLogger(User);

! So:

WrappedComponent = User

! Visual Flow

User Component
      │
      │ passed as argument
      ▼
withLogger(User)
      │
      ▼
WrappedComponent = User

! Interview Answer (IMP***)

!! An HOC receives the original component because the component is passed as an argument when the HOC is called. For example, in withLogger(User), the User component is passed to the HOC and received in the parameter usually named WrappedComponent. The HOC can then render that component and add extra functionality around it.

!! How HOC returns a new component ?
! A HOC returns a new component because it returns a function component.

! Example

function withLogger(WrappedComponent) {
  return function EnhancedComponent(props) {
    console.log("Component Rendered");

    return <WrappedComponent {...props} />;
  };
}

! Look at this part:

return function EnhancedComponent(props) {
  console.log("Component Rendered");

  return <WrappedComponent {...props} />;
};

! The HOC is returning a function.

! And in React:

function MyComponent() {
  return <h1>Hello</h1>;
}

! is a React component.

! Therefore:

function EnhancedComponent(props) {
  console.log("Component Rendered");

  return <WrappedComponent {...props} />;
}

! is also a React component.

! Step-by-Step

! Original Component

function User() {
  return <h1>User</h1>;
}

! Pass it to HOC

const EnhancedUser = withLogger(User);

! This executes:

withLogger(User);

! Inside HOC

WrappedComponent = User

! and the HOC returns:

function EnhancedComponent(props) {
  console.log("Component Rendered");

  return <User {...props} />;
}

! Store Returned Component

const EnhancedUser =
  function EnhancedComponent(props) {
    console.log("Component Rendered");

    return <User {...props} />;
  };

! Now EnhancedUser points to a brand-new component.

! Visual Flow

User
  │
  │ passed to
  ▼
withLogger(User)
  │
  │ returns
  ▼
EnhancedComponent
  │
  ├─ Extra Logic
  └─ Renders User

! Why is it called a "new component"?

! Before:

<User />

! After HOC:

<EnhancedUser />

! EnhancedUser did not exist before. It was created and returned by the HOC.

! Interview Answer (IMP)

! A Higher-Order Component returns a new component by returning a function component. Since React function components are just JavaScript functions that return JSX, the HOC creates and returns a new function (e.g., EnhancedComponent) that contains additional logic and renders the original wrapped component. This returned function is the new enhanced component.

!---------------------------------------------------------------------------------------------------------------
!! How call goes ?

! 1. Original Component

User.jsx
   │
   ▼
function User() { ... }


! 2. Pass Component to HOC

withLogger(User)
           │
           ▼
WrappedComponent = User


! 3. HOC Creates New Component (with extra features)

withLogger(User)
      │
      ▼
return EnhancedComponent


! 4. Store Returned Component

const EnhancedUser = withLogger(User)
      │
      ▼
EnhancedUser = EnhancedComponent


! 5. Render in App (Use new enhanced component in App)

<App />
   │
   ▼
<EnhancedUser name="Touseef" />


! 6. React Calls Enhanced Component

EnhancedUser
   │
   ▼
EnhancedComponent(props)


! 7. Extra Logic Runs (run in hoc component)

EnhancedComponent
   │
   ├── console.log(...)
   │
   ▼


! 8. Original Component Renders (in hoc component)

return <User {...props} />
              │
              ▼
         User(props)


! 9. UI Rendered

User
  │
  ▼
 JSX
  │
  ▼
 Browser UI

! Short Flow

App
 │
 ▼
EnhancedUser
 │
 ▼
EnhancedComponent (from HOC)
 │
 ├── Extra Feature
 │
 ▼
User
 │
 ▼
UI


!----------------------------------------
!! Code with Flow

! User.jsx (Original Component)

function User() {
  return <h1>User Component</h1>;
}

! withLogger.jsx (HOC)

function withLogger(WrappedComponent) {
  return function EnhancedComponent(props) {
    console.log("Extra Feature");

    return <WrappedComponent {...props} />;
  };
}

! EnhancedUser.jsx

const EnhancedUser = withLogger(User);

! App.jsx

<EnhancedUser />

! Call Flow

App
 │
 ▼
<EnhancedUser />
 │
 ▼
EnhancedUser
 │
 ▼
withLogger(User)
 │
 ▼
EnhancedComponent(props)
 │
 ├── console.log("Extra Feature")
 │
 ▼
<User {...props} />
 │
 ▼
User()
 │
 ▼
<h1>User Component</h1>
 │
 ▼
UI

! What is What?

User                → Original/Wrapped Component

withLogger          → HOC

EnhancedComponent   → New Component Returned by HOC

EnhancedUser        → Variable holding the returned component
*/