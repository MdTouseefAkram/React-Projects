import React, { useLayoutEffect, useState } from 'react'

const App = () => {

  let [value, setValue] = useState("GFG");

  // useLayouteffect run before UI paint. it run syncronuosly, line by line. It blocks the UI until useLayout runs then paint UI. Both useEffect and useLayoutEffect is same but useeffect is run after UI paint and useLayout runs before UI paint.
  useLayoutEffect(()=>{
    console.log("UseLayoutEffect is called with the value of", value)
  },[value]);

  setTimeout(()=>{
    setValue("GeeksForGeeks"); //after 2 sec value get changed and then again useLayouteffect run and ui get updated with geekforgeek in UI as well as in console.
  },2000);

  return (
    <>
      <h1>{value} is the great portal for geeks.</h1>
    </>
  )
}

export default App

//? The React JS useLayoutEffect works similarly to useEffect but rather works asynchronously like the useEffect hook, 
//? it fires synchronously after all DOM loading is done loading. This is useful for synchronously re-rendering the DOM and 
//? also to read the layout from the DOM. But to prevent blocking the page loading, we should always use the useEffect hook.


/*
! When does useLayoutEffect run?
useLayoutEffect runs after DOM is updated but before the browser paints UI.

So the order is:
React renders the virtual DOM
React updates the actual DOM
useLayoutEffect runs
Browser paints the UI

Thus console shows:
UseLayoutEffect is called with the value of GFG

!! After 2 seconds:
! setValue("GeeksForGeeks") updates React state
! Component re-renders

*/

/*
! What Happens After Re-render?
New UI is prepared:
GeeksForGeeks is the great portal for geeks.

Before the browser paints this updated UI,
useLayoutEffect runs again because value changed.

! It logs:
UseLayoutEffect is called with the value of GeeksForGeeks
Then the new UI finally appears on the screen.

! 🎉 Final Console Output Sequence
UseLayoutEffect is called with the value of GFG
UseLayoutEffect is called with the value of GeeksForGeeks
*/

//? useEffect is asynchronous in behavior, but not in the same way as async/await.
// Because React does not block the UI while running useEffect.
// The sequence is:
// Render → Paint UI → Run useEffect callbacks