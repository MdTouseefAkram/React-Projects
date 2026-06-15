import React from 'react'
import './Navbar.css'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <>
    <nav className='navbar'>
        <h1 className='logo'>My Website</h1>
        <button className='btn'>Login</button>
    </nav>

    {/* 4. CSS Modules (Advanced & Professional) */}
    <h1 className={styles.title}>Hello</h1>
    </>
  )
}

export default Navbar

/*
! ✅ Why use?
No global conflicts
Safer for big projects
*/

/*
! 5️⃣ Styled Components (Library-Based Styling)

! Install:

npm install styled-components

import styled from "styled-components";

const Button = styled.button`
  background: black;
  color: white;
  padding: 10px;
`;

function App() {
  return <Button>Click Me</Button>;
}

! 👉 Used in modern React projects.
*/