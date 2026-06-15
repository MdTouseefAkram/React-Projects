import React from 'react'
import { useParams } from 'react-router-dom'

const Profile_DynamicRoutes = () => {

    //! Extract dynamic id from url , // id will be 1, 2, 3, etc., based on URL. // id will be taken from URL
    let {userId} = useParams(); // Capture dynamic id


    //! useParams() is a React Hook from React Router that extracts dynamic parameters from the URL.
  // ✅ Why is it used?
  // To get the dynamic part of the URL and use it inside your component.
  // For example, fetch data from the server using the id in the URL.
  //! const { id } = useParams();  // Extract dynamic id from URL.

  {/* Dynamic Route 
        Dynamic Routes are routes where part of the URL is variable and passed as a parameter.
        //Create URLs with parameters like /product/:id and access them via useParams().

        For example, if you want to show a specific product page based on its id, the URLcan be Like;
        /product/1
        /product/2
        /product/3


      Create URLs with parameters like /product/:id and access them via useParams()   
    */}

  return (
    <>
    <h1>Profile</h1>
    <p>User Id : {userId}</p>
    {/* for the value of userId , we have to manualyy type the value in search bar for this dummy id like http://localhost:5173/profile/123 to see User Id : 123  */}
    
    </>
  )
}

export default Profile_DynamicRoutes