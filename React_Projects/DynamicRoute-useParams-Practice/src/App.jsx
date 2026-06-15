import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import Products from './components/Products'
import ProductDetails from './components/ProductDetails'

//! 1. (Dynamic Route Setup)
const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='/products' element={<Products/>}/>

        {/* Dynamic Route */}
        <Route path='/product/:id' element={<ProductDetails/>}/> {/* 📌 :id → dynamic parameter */}
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App


/*
! What is Dynamic Routing? (Simple Words)
👉 Dynamic routing means:
The URL contains a variable part (dynamic value) instead of a fixed path.

❌ Static Route
/product/1
/product/2
/product/3
You would need many routes ❌

✅ Dynamic Route
/product/:id

Here:
:id is dynamic
It can be 1, 2, 99, abc etc.
👉 One route handles many pages

!2. What is useParams()?
useParams() is a React Router hook that:
Reads dynamic values from the URL

! Example URL:
/product/5
const { id } = useParams();
👉 id = "5"

!3. Real-World Example (Best for Understanding)
Scenario:
You have an E-commerce app
Product List page
Product Details page
Each product has unique ID
*/

/*
! Flow Diagram (Easy to Remember)
User clicks product
      ↓
URL changes → /product/3
      ↓
React Router matches → /product/:id
      ↓
useParams() extracts → { id: "3" }

*/

/*
! Dynamic Routing
Dynamic routing allows us to create routes with variable parameters so that a single route can handle multiple URLs.

! useParams
useParams() is a hook from React Router used to access dynamic parameters from the URL.

! Why is useParams() needed?
Answer:
To fetch or display data based on dynamic values present in the URL, such as product ID, user ID, blog slug, etc.

? explore next:
✅ Dynamic routing with API fetch
✅ Multiple params (/user/:id/:name)
*/