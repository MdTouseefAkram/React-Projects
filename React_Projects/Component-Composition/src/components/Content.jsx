import React from 'react'

const Content = () => {
  return (
    <>
    <main><p>This is the main content section.</p></main>
    </>
  )
}

export default Content

/*
! In HTML, the <main> tag represents the main content of a webpage.
! It contains the primary content that is directly related to the page's purpose, excluding repeated sections such as headers, navigation menus, sidebars, and footers.

! Example

<body>
    <header>
        <h1>My Website</h1>
    </header>

    <nav>
        <a href="#">Home</a>
        <a href="#">About</a>
    </nav>

!    <main>
        <h2>Welcome to My Website</h2>
        <p>This is the main content of the page.</p>
    </main>

    <footer>
        <p>Copyright 2026</p>
    </footer>
</body>

! Why use <main>?
! Semantic Meaning
! Clearly tells browsers and developers where the main content is.
! Accessibility
! Screen readers can jump directly to the main content.
SEO
Helps search engines understand the page structure.

! Rules

! ✅ Only one <main> tag should exist per page.

! ✅ <main> should contain the unique content of that page.

! ❌ Do not place <main> inside:

<header>
<footer>
<nav>
<article>
<aside>

example

<body>
 ├── <header>
 ├── <main>  ← Main content of the page
 └── <footer>
</body>
 
! But , in <main> we can use various tags as needed.
<main>
        <section>
            Main Content
        </section>
</main

! In React

function App() {
  return (
    <>
      <Header />
      
      <main>
        <Dashboard />
      </main>

      <Footer />
    </>
  );
}

! Common Layout

<body>
    <header>Header</header>
    <nav>Navigation</nav>

    <main>
        Main Content
    </main>

    <aside>Sidebar</aside>

    <footer>Footer</footer>
</body>

! Think of <main> as the container for the page's most important content, while <header>, <nav>, <aside>, and <footer> contain supporting content.
*/