import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const LayoutParentRoute_Outlet = () => {
  return (
    <>
    {/* never user / befor route address for child routes while using Outlet. */}
    <h1>Layout Page</h1>
    {/* Always write / before parent route. */}
    <Link to="/layout/dashboard">Dashboard</Link> |{" "} 
    <Link to="/layout/setting">Settings</Link>
    <hr />
    <Outlet/>

    {/* Nested Routes Render Here */}
    {/* Outlet shows child routes */}
    {/* <Outlet /> is used in Nested Routing.
    It acts as a placeholder where child routes will be rendered. */}
    {/* Outlet is where child components will appear */}

    {/* You can have a Route inside another Route, this is called nested routes.
        Nested routes allow you change parts of the page when you navigate to a new URL, 
        while other parts is not changed or reloaded, almost like having a page within a page. */}

    {/* Flow-> Home to Layout to Dashbaord */}
    
    
    
    </>
  )
}

export default LayoutParentRoute_Outlet