import React from 'react'

const App = () => {
   let handleScroll = (e) =>{
      console.log("Scrolling...");
      console.log("Scrolling Top: ", e.target.scrollTop);;
    }

  return (
    <>
    {/* Scroll Inside a Div */}
    <div onScroll={handleScroll}
    style={{height: "200px", overflow: "scroll", border: "1px solid black"}}
    >
      <div style={{height: "600px"}}>
        Scroll inside this box
      </div>
    </div>

   
    </>
  )
}

export default App

/*
! onScroll fires when scrolling happens
e.target.scrollTop → how much scrolled from top
! overflowY: "scroll" is required to make it scrollable
*/
/*
! In ReactJS, onScroll is an event handler that triggers whenever a user scrolls inside a scrollable element (like a div, window, or any container).

!✅ Basic Syntax
<div onScroll={handleScroll}>
/! content
</div>

! In ReactJS, onScroll is an event handler used to detect when a user scrolls inside an element or the webpage.
! Syntax
onScroll={handleScroll}

! GFG
! onScroll Event in React
onScroll is a React event triggered when a user scrolls an element or the window, enabling tracking of scroll position and dynamic UI updates.

Triggered on Scroll: Fires when scrolling occurs on an element or window.
Track Position: Used to monitor scroll position.
Infinite Scrolling: Helps load more content dynamically.
Lazy Loading: Loads content only when it enters the viewport.
UI Updates: Enables effects like sticky headers or animations.

! Syntax:
<element onScroll={handlerFunction} />

element: The JSX element (e.g., <div>, <section>, or <body>) to which the scroll event is attached.
onScroll: The event handler prop in camelCase.
handlerFunction: The function that will be called whenever the scroll event is triggered.

! Working
The onScroll event in React is triggered whenever the user scrolls an element (like a div) or the window. It helps track how far the user has scrolled.

1. Triggered on Scroll: The onScroll event is fired when the user scrolls an element or the window.
2. Access Scroll Properties: Inside the event handler, you can access the following properties:

! scrollTop: The number of pixels the content has been scrolled.
! scrollHeight: The total height of the content inside the scrollable area.
! clientHeight: The visible height of the scrollable element.

! Best Practices
Handling the onScroll event in React is straightforward, but to ensure smooth performance and a better user experience, there are a few best practices you should follow.

! Avoid Direct DOM Manipulation: Always use React state instead of directly manipulating the DOM. This keeps your app efficient.
! Update State Only When Needed: Don’t update the state on every scroll event. Only update it when necessary to avoid performance issues.
! Optimize Re-renders: Use React.memo or useMemo to prevent unnecessary re-renders when only the scroll data changes.
! Track Scroll Using Relevant Properties: Use scrollTop, scrollHeight, and clientHeight to calculate the scroll position and handle logic like infinite scroll or sticky elements.


!!! ---------------------------------------------------------------------------------------------------------------------------
!! In ReactJS, scrolling means detecting or controlling the movement of the page or a specific container when the user scrolls.

! React provides scrolling support mainly using:
? onScroll event
? window.scrollTo()
? useRef() for scrolling to elements

! 
! Meaning of These Properties
| Property       | Meaning                 |
| -------------- | ----------------------- |
| `scrollTop`    | Current scroll position |
| `clientHeight` | Visible height          |
| `scrollHeight` | Total content height    |

! Window.scrollY is a JavaScript property that returns how many pixels the webpage has been scrolled vertically from the top.

Syntax
window.scrollY

! Difference between scrollY and scrollTop
| Property            | Used For                                         | Example                    |
| ------------------- | ------------------------------------------------ | -------------------------- |
| `window.scrollY`    | Entire browser window/page                       | `window.scrollY`           |
| `element.scrollTop` | Specific scrollable element (div, section, etc.) | `divRef.current.scrollTop` |

! Example
console.log(window.scrollY);

window.addEventListener("scroll", () => {
  console.log(window.scrollY);
});

If:

Page is at the top → 0
User scrolls down 100 pixels → 100
User scrolls down 500 pixels → 500
*/

/*
! why onscroll is need why we use?
? We use onScroll when we want to perform some action while the user is scrolling.

? Without onScroll, your React application won't know that the user has scrolled.

! Example
Imagine you're reading a long webpage.

When the user scrolls:

Show a "Back to Top" button
Load more data automatically (Infinite Scroll)
Make the navbar sticky
Show scroll progress (e.g., "50% completed")
Trigger animations when elements come into view
!---------------------------------------------------------------------------------------
!! To detect these scroll events, we use onScroll or a window scroll listener.

Example 2: Detect scroll on entire window

React doesn't directly attach onScroll to window, so use useEffect:
import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    const handleScroll = () => {
      console.log("Window Scroll Y:", window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <div style={{ height: "2000px" }}>Scroll page</div>;
}

export default App;

!!🔹 Common Use Cases
Infinite scrolling (load more data)
Sticky navbar
Scroll progress bar
Lazy loading images
Show/hide button on 

!!⚡ Important Notes
onScroll works only on scrollable elements
Use debounce or throttle for performance (very important in real apps)
Avoid heavy calculations inside scroll handler

!! Interview Points
onScroll works when element has:

overflow: scroll;

! or

overflow-y: scroll;

!! Common uses:
Infinite scrolling
Lazy loading
Scroll progress bar
Detect top/bottom scroll
Sticky navbar
onScroll is a synthetic event in React.

For webpage scrolling use:

window.addEventListener("scroll", fn)

!---------------------------------------
! why overflowy : scoll is mandarory?
overflowY: "scroll" (or "auto") is required because a scroll event can only happen if the element is actually scrollable.

!! scroll vs auto
overflowY: "scroll"

Always shows the scrollbar.

overflow-y: scroll;
overflowY: "auto"

! Shows the scrollbar only when needed.

overflow-y: auto;

! In real projects, auto is usually preferred:

<div
  onScroll={handleScroll}
  style={{
    height: "200px",
    overflowY: "auto"
  }}
>

!--------------------------------------------------------------------
! If using overflowy : scroll, it make scrollabel then why onscroll?
verflowY: "scroll" and onScroll have different purposes:

! 1. overflowY: "scroll" → Makes the element scrollable
<div style={{ height: "200px", overflowY: "scroll" }}>

This only allows the user to scroll.
Think of it as creating the scrollbar.

! 2. onScroll → Detects when scrolling happens
<div
  onScroll={handleScroll}
  style={{ height: "200px", overflowY: "scroll" }}
>

This runs a function whenever the user scrolls.
Think of it as listening to the scrollbar movement.

?? To make an element scrollable, you use overflowY: "scroll" (or "auto"), not onScroll.
overflowY: "scroll" → makes the div scrollable
onScroll → runs handleScroll() whenever the user scrolls

!---------------------------------------------------
! then  why we need onscroll in infinite scrolling , can we do only with overflow y: scoll?
!! No. overflowY: "scroll" alone is not enough for infinite scrolling.

! overflowY: "scroll" only allows the user to scroll.

! For infinite scrolling, your application must know when the user reaches the bottom so it can fetch more data. That's why onScroll is needed.

? Without onScroll
<div style={{ height: "300px", overflowY: "scroll" }}>
  {posts.map(post => (
    <p key={post.id}>{post.title}</p>
  ))}
</div>

! User can scroll ✅
! More data loads automatically ❌
! React doesn't know the user reached the bottom ❌

! With onScroll
const handleScroll = (e) => {
  const { scrollTop, scrollHeight, clientHeight } = e.target;

  if (scrollTop + clientHeight >= scrollHeight) {
    fetchMoreData();
  }
};

<div
  style={{ height: "300px", overflowY: "scroll" }}
  onScroll={handleScroll}
>
  {posts.map(post => (
    <p key={post.id}>{post.title}</p>
  ))}
</div>

Now:

User scrolls.
onScroll fires.
React checks if the bottom is reached.
fetchMoreData() loads the next batch.
*/

/*
!! Instead of addEventListener("click", ...)

! JavaScript:

button.addEventListener("click", handleClick);

! React:

<button onClick={handleClick}>
  Click Me
</button>

! Common React Event Handlers
| JavaScript Event | React Event |
| ---------------- | ----------- |
| click            | onClick     |
| change           | onChange    |
| input            | onInput     |
| submit           | onSubmit    |
| focus            | onFocus     |
| blur             | onBlur      |
| keydown          | onKeyDown   |
| keyup            | onKeyUp     |
| mouseover        | onMouseOver |
| scroll           | onScroll    |

! When Do We Still Need addEventListener()?
React event props work only on React-rendered elements.

! For global objects like:
window
document
body

! you must use addEventListener().

! Example:
useEffect(() => {
  const handleScroll = () => {
    console.log(window.scrollY);
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

! This is why infinite scrolling based on the whole page often uses window.addEventListener("scroll", ...).

! Interview Answer
! In React, we generally use built-in event props such as onClick, onChange, onSubmit, and onScroll instead of addEventListener(). However, for global events on window or document, we use addEventListener() inside useEffect() and clean it up with removeEventListener().

!------------------------------------------------------------------------------------------------------------------------
!!! React Event Handlers

? onClick: Mouse clicks in the user interface are detected using the onClick event.
? onChange: Any change in an input field within the user interface is captured through the onChange event.
? onSubmit: Form submission in the user interface is handled by the onSubmit event, which is also used to stop the default form behavior.
onKeyDown: When a user presses any key on the keyboard, the onKeyDown event gets triggered.
onKeyUp: Releasing a key on the keyboard activates the onKeyUp event.
onMouseEnter: When the mouse enters the boundary of an element, the onMouseEnter event is fired.
*/