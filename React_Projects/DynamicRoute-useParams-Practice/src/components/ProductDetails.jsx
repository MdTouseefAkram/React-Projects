import React from 'react'
import { useParams } from 'react-router-dom'

//! 3. (useParams in Action)
const ProductDetails = () => {
    let {id} = useParams(); //Read dynamic URL value

  return (
    <>
        <h2>Product Details</h2>
        <p>Product ID: {id}</p> {/* get the product Id as a Product details */}
    </>
  )
}

export default ProductDetails

// Output:
// URL → /product/2
// Product ID: 2