import React from 'react'
import { Link } from 'react-router-dom';

//! 2. (List Page)
const Products = () => {
    let products = [
        {id:1, name:"Laptop"},
        {id:2, name:"Mobile"},
        {id:3, name:"Headphones"}
    ];

  return (
    <>
        <h2>Products</h2>
        
        {products.map((product)=>(
            <div key={product.id}>
                {/* ✅ Dynamic link */}
                <Link to={`/product/${product.id}`}> {/* after clicking on this link , a new route hits and mathces the route in App.jsx acording to id and goes to product details component and show product ID as product detail. */}
                    {product.name}
                </Link>
            </div>
        ))}
    </>
  )
}

export default Products

// 👉 Clicking Laptop → /product/1
// 👉 Clicking Mobile → /product/2