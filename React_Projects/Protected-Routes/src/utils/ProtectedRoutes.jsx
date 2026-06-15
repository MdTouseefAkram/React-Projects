import React from 'react'
import { Outlet, Navigate } from 'react-router-dom';

const ProtectedRoutes = () => {

    let auth = {token:false}; // if this is false the no home page is accessible first to go in login page because Home has protected route. 

  return (
    
        auth.token? <Outlet/> : <Navigate to="/login"/> //Navigate is used to redirect automatically based on conditions.
  
  )
}

export default ProtectedRoutes

// ProtectedRoutes (parent)
//  └── Home (child)
// 🔹 If user is authenticated:
//! <Outlet /> renders the child route → Home

//! Navigate (Always use for protected routes)
// If condition becomes true, user is automatically navigated.
// Best for protected routes, form submission, auth redirect.
// while, Link is used to create clickable navigation.