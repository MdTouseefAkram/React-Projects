import React from 'react'
import { useLocation } from 'react-router-dom'
//! Example 1: Detect Current Route
//! Purpose: Show current page path using location.pathname

const CurrentPage = () => {
    let location = useLocation();

  return (
    <>
    {/* O/P:- Current Path: /current */}
    <h2>Current Path: {location.pathname}</h2> 
    </>
  )
}

export default CurrentPage