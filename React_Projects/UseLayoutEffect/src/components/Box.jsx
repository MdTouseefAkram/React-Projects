import React, { useLayoutEffect, useRef, useState } from 'react'

//! useLayoutEffect is just like useEffect, but it runs earlier, before the browser paints the UI on the screen.

const Box = () => {
    let boxRef = useRef(null); //reference to DOM element
    let [width, setWidth] = useState(0);

    useLayoutEffect(()=>{
        //Read layout before paint
        let currentWidth = boxRef.current.getBoundingClientRect().width;
        setWidth(currentWidth);
        // console.log(currentWidth);
    },[])

  return (
    <>
    <div
    ref={boxRef}
    style={{width:"300px", height:"100px",background:"lightblue", margin:"20px"}}
    >This is a box</div>

    <p>Box width : {width}px</p>
    </>
  )
}

export default Box

//! Order of execution:
// | Hook                | When it runs                                              |
// | ------------------- | --------------------------------------------------------- |
// | **useLayoutEffect** | **Before** the browser updates the screen (synchronously) |
// | **useEffect**       | **After** the screen is painted (asynchronously)          |

// That means:
//? useLayoutEffect blocks the UI until everything inside it finishes.
//? It is used only when you need to read layout values or make DOM measurements before the user sees the screen.

//! What happens now? (code work flow)
// React renders the DOM.
// useLayoutEffect runs before paint → measures width → sets state → still before paint.
// Browser paints final UI → ⭐ perfectly stable, no shifting.

//! Problem with useEffect
// If you read the element size inside useEffect, React will paint the UI first → then effect runs → layout shifts.

/*
! When do we use useLayoutEffect?
! Use it when you need to:
✔ Measure DOM size/position before paint
(e.g., element width, height, scroll position)

✔ Fix layout shift
(position something exactly before the UI becomes visible)

✔ Sync states with DOM before the user sees the result
❌ When NOT to use it?

! Don't use it for normal side effects like:
fetch API calls
timers
logs
updating states normally
👉 For those, use useEffect.
*/

/*
! “Why is useLayoutEffect considered expensive?”
Answer:
Because it blocks the browser from painting until all code inside completes.
If used too much, it can cause UI lag.

! Does useLayoutEffect run before or after DOM mutations?
✔ After React changes the DOM
✔ Before the browser paints

So order is:
! React renders → DOM updated → useLayoutEffect → browser paints.

! Can useLayoutEffect cause performance issues? Why?
✔ Yes
Because it blocks paint → too much layout code causes lag or freezes.

!| Feature      | useEffect                | useLayoutEffect                   |
| ------------ | ------------------------ | --------------------------------- |
| When it runs | After paint              | Before paint                      |
| Blocking?    | ❌ No                     | ✔ Yes                             |
| Good for     | API calls, state updates | Measuring DOM, preventing flicker |
| Performance  | Fast                     | Slower                            |

*/

/*
! Why is this important?
You use useLayoutEffect when you need to read layout values (like width, height, position of elements) before the screen updates, so the user does not see any flicker.
! 🔥 Real use case:
Measuring DOM size before painting
Calculating scroll positions
Preventing UI flicker when adjusting CSS
Synchronous DOM updates

! Best Easy Example — measuring an element’s width (we write code in above)
We want to read the width of a box before the page is painted, and then set state.
If we use useEffect, you might see a flicker.
useLayoutEffect prevents that.

! Output Behaviour
The width of the box is measured before the screen paints.
No layout jump.
No flicker.
*/

/*
| Hook                | When to Use                         | Why                   |
| ------------------- | ----------------------------------- | --------------------- |
| **useEffect**       | API calls, timers, event listeners  | Non-blocking & faster |
| **useLayoutEffect** | Read/Write DOM before screen paints | Prevent layout shifts |

! Layout shift means your UI suddenly jumps, moves, or changes position/shape after it is already visible to the user.
👉 It happens when the browser paints the page and then something changes the size or position of elements afterwards, which forces the layout to re-calculate.

!🔥 Simple Explanation (Very Easy)
! Imagine you're reading a page and suddenly:
A button moves down
A box grows bigger
Text jumps left or right
A scroll position jumps
The entire layout shifts up/down
This jumping movement is called a layout shift.
It is bad UX because it feels glitchy.



! Tiny Visual Example
Initial paint:

[ Button ]
[ Text   ]

After 50ms, something updates height → Layout shifts:

[ Button       ] 👈 JUMPED
[   Text       ]

User sees it “move.”

!🧠 Why layout shifts happen?
Common causes:
1️⃣ DOM measurements inside useEffect
useEffect runs after paint, so changes cause jumps.
2️⃣ Late-loaded images
Image loads later and pushes content down.
3️⃣ Using JavaScript to set size/position after UI is visible
(e.g., scrollTo, animations, resize)

!⭐ Why useLayoutEffect prevents layout shift?
! Because useLayoutEffect runs:
✔ after DOM is created,
✔ but before browser paints to screen.

!So React can:
measure DOM
set sizes
adjust positions
before anything becomes visible.
This means the user sees the final layout instantly → no jumps.
*/

/*
! -- DOM measurement means reading the size or position of an element from the browser--.
You are measuring things like:
height
width
top / left position
scroll height
element’s bounding box
distance from viewport

Basically, you are asking the browser:
👉 “Hey, how big is this element right now?”
👉 “Where is this element placed on the screen?”

! This is called DOM measurement.
✅ Very Simple Example
boxRef.current.getBoundingClientRect().width;

! This is a DOM measurement → It gives the exact width of that element on the screen.

! What kinds of measurements?
| Measurement       | Example Code                     | Meaning                     |
| ----------------- | -------------------------------- | --------------------------- |
| **Width**         | `el.offsetWidth`                 | Element width               |
| **Height**        | `el.offsetHeight`                | Element height              |
| **X/Y position**  | `el.getBoundingClientRect().top` | Distance from top of screen |
| **Scroll height** | `el.scrollHeight`                | Total content height        |
| **Client rect**   | `el.getBoundingClientRect()`     | Full box info               |

! Why do we measure DOM?
Because sometimes your layout depends on actual rendered size.
Example:
You want a sidebar always equal to content height.
You want to position a tooltip exactly near a button.
You want to animate something based on its real width.
You want to scroll to bottom after messages render.
To do these tasks, you need to “measure” the DOM.

!💥 Why useLayoutEffect is required for DOM measurement?
! Because:
DOM must exist in screen before you measure it.
But you don’t want the user to see a jump after you apply changes.
! So:
✔ useLayoutEffect → runs before paint → safe for DOM measurement
❌ useEffect → runs after paint → layout shift happens

🎯 Summary
! DOM measurement = reading element size or position from browser.
*/

/*
! What is getBoundingClientRect()?
It is a DOM method that returns the size and position of an element relative to the viewport (visible screen).
It returns an object like:
{
  x: 100,
  y: 20,
  width: 300,
  height: 150,
  top: 20,
  left: 100,
  right: 400,
  bottom: 170
}

!! So when you write:
! element.getBoundingClientRect().width
? you are extracting only the width value from that object.

!! Why do we use it?
! To measure:
✔ Width of a button
✔ Height of an image
✔ Position of a div
✔ Detect layout changes
✔ Scroll animations
✔ Tooltip positions
✔ Prevent layout shift (with useLayoutEffect)

Example
! Suppose you want to measure the width of a box:
<div id="box" style="width: 200px; height: 100px; background: lightblue;"></div>
<script>
  const box = document.getElementById("box");
?  const width = box.getBoundingClientRect().width;
?  console.log("Box width:", width); // → 200
</script>

! In simple words
getBoundingClientRect().width = “tell me the real width of the element on the screen right now after the browser has drawn it.”
*/