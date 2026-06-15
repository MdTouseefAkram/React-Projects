import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useNavigate, Outlet } from 'react-router-dom'

const Home = () => {

    {/* The useNavigate() hook in React Router (v6+) is used for programmatic navigation in a React application. 
      Allows you to navigate to a different route programmatically (without using <Link>).
      Useful when you want to navigate after some event (e.g., after form submission, button click).
      navigate(-1);  // Go back to previous page.
      ex:  const goToDashboard = () => {
        navigate('/dashboard');
  };
    */}
    //useParams is a React Router hook that lets you read the dynamic parameters from the URL.
    //  const { userId } = useParams();  // extract "id" from the URL
    
    let navigate = useNavigate();

  return (
    <>
    <nav>
        <Link to="/">Home</Link> <br />
        <Link to="/about">About</Link> <br />
        <Link to="/contact">Contact</Link> <br />
        <Link to="/profile/userId">Profile</Link> <br />
        <Link to="/layout">Layout</Link> <br />

    </nav>

    <button onClick={()=>{navigate("/about")}}>Go to About Page</button> <br /> <br />
    <button onClick={()=>{navigate("/profile/:123")}}>Go to Profile</button>

    {/* <h1>User ID: {userId}</h1>; o/p User ID: 101*/}

    </>
  )
}

export default Home