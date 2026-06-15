//! Method 1 (Simple)
import React from 'react'

const BoxChildrenProp = (props) => {
  return (
    <>
    <div style={props.style}>{props.text}</div>  //! using props is good . props = entire props object.
    </>
  )
}

/*
! OR Use destructuring: 
const BoxChildrenProp = ({ style, children }) => { //children = only the special React children prop
  return (
    <div style={style}>
      {children} 
    </div>
  );
}
*/
//! children is a special prop provided by React that contains whatever you place between a component's opening and closing tags. (In Parent (App.jsx) in <Box props..../>)
//! Children - It simply provides a container.
//! The parent decides the content.

//! We use children when building reusable wrapper components whose inner content is not known in advance. For normal components like Header, Sidebar, Navbar, or Dashboard sections, children is usually unnecessary. It is mainly used in components such as Layouts, Cards, Modals, Dialogs, and Protected Routes where different content needs to be rendered inside the same reusable structure.
export default BoxChildrenProp

/*
! In this example

The App component renders two <Box /> components and passes the text and style props to them.
The Box component receives props.style and props.text and applies the style dynamically while displaying the text inside a <div>.
! The Box component is generic, meaning it can be used multiple times with different styles and text, improving reusability and maintainability.

! We can make Card component , resuse multiple times in App.jsx with some additional props by passing App.jsx and reciveing here and get into UI.

? Example for Card.jsx

! Composition Using children

! The most common composition pattern.

! Card Component

function Card({ children }) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "20px",
        margin: "10px",
      }}
    >
      {children}
    </div>
  );
}

export default Card;

export default Card;

! Usage
! in return part in App.jsx

<Card>
  <h2>ReactJS</h2>
  <p>Learn Component Composition</p>
</Card>

!!! Output: a card build , inside these text written. This is Card become generic and we reuse with diffrent text and we can add style using props or Children (same) by passing it in App.jsx like in return part, <Card style={} text=../> and reacive it in Children compoenent like Card.jsx .

--------------------
| ReactJS          |
| Learn Component  |
--------------------

! The Card component doesn't know what content it will render.

! It simply renders whatever comes through children.


! Visual Flow

App.jsx
   |
   V
<Card>
   <h2>Hello</h2>
   <p>World</p>
</Card>

   |
   | React passes automatically
   V

Card({
   children: [
      <h2>Hello</h2>,
      <p>World</p>
   ]
})

   |
   V

function Card({ children }) {
   return <div>{children}</div>;
}
*/

/*
! Without Composition (Bad Practice)

function Dashboard() {
  return (
    <div>
      <header>
        <h1>My Dashboard</h1>
      </header>

      <main>
        <p>Welcome User</p>
      </main>

      <footer>
        <p>Copyright 2026</p>
      </footer>
    </div>
  );
}

! Everything is inside one component.

! Problems:

Hard to maintain
Hard to reuse
Large component size

!!!! With Composition (Good Practice)

! Header.jsx

function Header() {
  return <h1>My Dashboard</h1>;
}

export default Header;
Main.jsx
function Main() {
  return <p>Welcome User</p>;
}

export default Main;

! Footer.jsx

function Footer() {
  return <p>Copyright 2026</p>;
}

export default Footer;

! Dashboard.jsx

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function Dashboard() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default Dashboard;

! Here Dashboard is composed of:

? Header
? Main
? Footer

! This is Component Composition.
*/

/*
! ----------------------------------------------------

!!! What Role Does children Play in Component Composition?

? children is the mechanism that enables component composition.

? Without children, component composition would be very limited.

! Think of children as a placeholder where a parent component can inject UI into another component.


! Without children

Suppose you create a Card component:

function Card() {
  return (
    <div className="card">
      ???
    </div>
  );
}

!! How can you put different content inside this card?

! You would need separate props for everything:

<Card
  title="React"
  description="Learning React"
/>

function Card({ title, description }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

! This works, but it's not very flexible.


!! With children

<Card>
  <h2>React</h2>
  <p>Learning React</p>
  <button>Learn More</button>
</Card>

function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );

! Now the Card component doesn't care what is inside it.

! Children - It simply provides a container.

! The parent decides the content.

! This is composition.

! Real Meaning of Composition

Composition means:

! Build larger components by combining smaller components.

! Example:

<Card>
  <Profile />
  <Button />
</Card>

Here:

Card
 ├── Profile
 └── Button

!! children allows Card to "contain" other components.

! Without children, Card cannot compose other components.

! Real-World Example: Layout Component

function Layout({ children }) {
  return (
    <>
      <header>Navbar</header>

      <main>
        {children}
      </main>

      <footer>Footer</footer>
    </>
  );
}

! Usage:

<Layout>
  <HomePage />
</Layout>

! or

<Layout>
  <AboutPage />
</Layout>

! or

<Layout>
  <ContactPage />
</Layout>

! The Layout component is reused for many pages.

! The only thing changing is the children.

! Interview Answer

! In Component Composition, children acts as a placeholder that allows one component to receive and render other components or JSX passed between its opening and closing tags. It makes components flexible, reusable, and capable of composing complex UIs from smaller components.

One-line answer:

? Component Composition is possible because children lets a component act as a reusable wrapper that can render any nested content passed to it.

! Extra.
! What is children?

children is a special prop provided by React that contains whatever you place between a component's opening and closing tags.

! Example: in App.jsx (Parent component)

<Card>
  <h2>Welcome</h2>
  <p>Hello World</p>
</Card>

! React automatically converts this to something like:

<Card
  children={
    <>
      <h2>Welcome</h2>
      <p>Hello World</p>
    </>
  }
/>

! So children becomes:

<>
  <h2>Welcome</h2>
  <p>Hello World</p>
</>
 
! How It Is Received in child component (Card.jsx )

function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

! Here:

{ children }

! means:

!! "Render whatever was passed inside the Card component."
!-----------------------------------------------------------------------


You're thinking:

! "If I can already create reusable components like Header, Sidebar, Dashboard, Button, etc., then why do I need children?"

The answer is:

! You don't always need children. Use it only when a component should act as a wrapper/container for unknown content.


! Case 1: No children Needed ✅

? Most components don't need children.

function Header() {
  return <h1>My App</h1>;
}

function Sidebar() {
  return <div>Menu Items</div>;
}

function Dashboard() {
  return (
    <>
      <Header />
      <Sidebar />
    </>
  );
}

! This is perfectly fine.

! Here each component knows exactly what it should render.


! Case 2: children Is Useful ✅

? Suppose you want a reusable Card component.

! Without children:

function Card({ title, description }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}


! Usage:

<Card
  title="React"
  description="Learning React"
/>

! Works fine.

! But what if tomorrow you want:

<Card>
  <img src="user.jpg" />
  <h2>Touseef</h2>
  <button>Follow</button>
</Card>

? Now the Card component can't handle that structure.

! children Makes the Wrapper Flexible

function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

! Now Card doesn't care what's inside.

<Card>
  <h2>User Profile</h2>
</Card>

! or

<Card>
  <img src="..." />
  <button>Buy Now</button>
</Card>

! or

<Card>
  <LoginForm />
</Card>

All work.

!-----------------------------------------------------------------
! Real Life Examples

! Protected Route Wrapper

function ProtectedRoute({ children }) {
  const isLoggedIn = true;

  return isLoggedIn ? children : <Login />;
}

! Usage:

<ProtectedRoute>
  <Dashboard />
</ProtectedRoute>

!! Dashboard Example

! You mentioned a Dashboard.

! Usually this is enough:

function Dashboard() {
  return (
    <>
      <Header />
      <Sidebar />
      <Content />
    </>
  );
}

! No children needed.

! But if you're creating a reusable page layout:

function DashboardLayout({ children }) {
  return (
    <>
      <Header />
      <Sidebar />
      <main>{children}</main>
    </>
  );
}

! Then:

<DashboardLayout>
  <UsersPage />
</DashboardLayout>

or

<DashboardLayout>
  <ProductsPage />
</DashboardLayout>

! Now children becomes useful.

! Rule of Thumb

! Use a normal component when:

<Header />
<Sidebar />
<Button />
<UserCard />

! The component knows exactly what to render.

! ----------------- V.V.I ---------------------------------------------------
!! Use children when:

<Card>...</Card>
<Modal>...</Modal>
<Layout>...</Layout>
<ProtectedRoute>...</ProtectedRoute>

! The component is a wrapper/container, and the content inside can vary.

Interview Answer

! We use children when building reusable wrapper components whose inner content is not known in advance. For normal components like Header, Sidebar, Navbar, or Dashboard sections, children is usually unnecessary. It is mainly used in components such as Layouts, Cards, Modals, Dialogs, and Protected Routes where different content needs to be rendered inside the same reusable structure.

*/

/*
!------------------------------------------------------------------------------------
! 1. For normal props (text, style)

! ✅ Best Practice:

const BoxChildrenProp = ({ style, text }) => {
  return (
    <div style={style}>
      {text}
    </div>
  );
};

! This is modern React and the most readable.


!! 2. For component composition (children)

! ✅ Best Practice:

const BoxChildrenProp = ({ style, children }) => {
  return (
    <div style={style}>
      {children}
    </div>
  );
};

! Usage:

<BoxChildrenProp style={{ border: "1px solid black" }}>
  <h2>Hello</h2>
  <p>React</p>
</BoxChildrenProp>


! 3. Using props

! Also perfectly fine:

const BoxChildrenProp = (props) => {
  return (
    <div style={props.style}>
      {props.text}
    </div>
  );
};

! Many developers use this when there are many props.


! 4. Using (children) as parameter

! ❌ Avoid this:

const BoxChildrenProp = (children) => {
  return (
    <div style={children.style}>
      {children.text}
    </div>
  );
};

! Why?

! Because children is actually:

{
  style: {...},
  text: "Hello"
}

! which is the entire props object.

! A React developer reading this will think:

children

! means the special React children prop.

So the naming is misleading.
! Why not good becoz? But here, children is actually the entire props object, not the React children prop.

! IMP.
! props = entire props object.
! children = only the special React children prop


!! children clarification. How it special React children prop ?
children is a special prop provided by React that contains whatever you place between a component's opening and closing tags.

! Example: in App.jsx (Parent component)

<Card>
  <h2>Welcome</h2>
  <p>Hello World</p>
</Card>

! React automatically converts this to something like:

<Card
  children={
    <>
      <h2>Welcome</h2>
      <p>Hello World</p>
    </>
  }
/>

! So children becomes:

<>
  <h2>Welcome</h2>
  <p>Hello World</p>
</>

!----------------------------------------------------------
! Why Is It Called a "Special Prop"?

! Because React automatically generates it from content placed between opening and closing tags.

! Normal props:

<Card title="Profile" />

! React creates:

{
  title: "Profile"
}

! You explicitly provided title.

! children prop:

<Card>
  Content Here
</Card>

!! React creates:

{
  children: "Content Here"
}

! You did not write:

? <Card children="Content Here" />

! React added it automatically.

! That's why we call it a special React prop.
!-----------------------------------------------------------------------
! Which One Should You Use?

! If passing simple values

<BoxChildrenProp text="Hello" />

! Use:

const BoxChildrenProp = ({ text }) => {
  return <div>{text}</div>;
};

! If passing JSX/content

<BoxChildrenProp>
  <h1>Hello</h1>
</BoxChildrenProp>

! Use:

const BoxChildrenProp = ({ children }) => {
  return <div>{children}</div>;
};

! Modern React Preference

! Destructuring props ✅ Most common

! const Component = ({ title, children }) => {}
! Using props object ✅ Also common
! const Component = (props) => {}
? Naming props object as children ❌ Avoid
const Component = (children) => {}

Interview Answer

! Use children when you want to pass JSX or nested content inside a component (Component Composition). Use normal props for specific values like text, title, color, or style. In modern React, destructuring ({ text }, { children }) is generally considered the cleanest and most readable approach.
*/