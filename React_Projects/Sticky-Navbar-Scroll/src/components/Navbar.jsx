import React from 'react'
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
    <nav className='navbar'>
        <h2>My Website</h2>
    </nav>
    </>
  )
}

export default Navbar

/*
! A Sticky Navbar is a navigation bar that remains visible at the top of the screen while the user scrolls down the page.

! Why use it?
Easy navigation on long pages.
Better user experience.
Common in e-commerce, blogs, and dashboards.

! Method 1: Using CSS Only (Recommended)
Method 2: Sticky Navbar Using React State + onScroll

Useful when you want to change the navbar style after scrolling.
*/