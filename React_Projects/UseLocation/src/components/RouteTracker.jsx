import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
//! Example 4: Detect Route Change using useEffect
//! Purpose: Track route changes (analytics, logging, etc.)

const RouteTracker = () => {
    let location = useLocation();

    useEffect(()=>{
        console.log("Route changed:", location.pathname); //O/P in console - Route changed: /contact or where i go and any route,. it prints. Her we see tracking in console.
    },[location.pathname]);

//   return (
//     <div>RouteTracker</div>
//   )
    return null; // return null  explicit, makes intent clear otherwise without returning anything from function , it will return undefined but react not crash.
}

export default RouteTracker

/*
! Here’s a breakdown:
? useLocation – gives the current location object from React Router.
? useEffect – runs every time location.pathname changes.
? console.log – performs the side effect (tracking route changes).
? return null – ensures that this component doesn’t render anything to the DOM.
*/

/*
! return null is the correct way to indicate explicitly that this component intentionally renders nothing.
! Returning nothing might work, but it’s less clear and not officially recommended.
*/