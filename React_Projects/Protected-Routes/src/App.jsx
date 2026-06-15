import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './components/Home'
import ProtectedRoutes from './utils/ProtectedRoutes'
import Login from './components/Login'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      {/* Protected Route */}
      <Route element={<ProtectedRoutes/>}> 
        <Route element={<Home/>} path='/'/>
      </Route>
      
      {/* Public Route */}
      <Route element={<Login/>} path='/login'/>
      
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

/*
! What are Protected Routes ?
Protected routes are routes within a React application that require authentication or authorization before allowing access to 
specific components or views. Let's take a closer look at the syntax and explanation of implementing protected routes using React Router:

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
    <Route
        {...rest}
        render={(props) => (
            isAuthenticated ?
                <Component {...props} /> : <Redirect to="/login" />
        )}
    />
);

! Authentication and Authorization
At the core of protected routes lie two key concepts: authentication and authorization.

! Authentication: Authentication is the process of verifying the identity of users attempting to access the application. 
This is commonly achieved through mechanisms such as username-password authentication, social login (e.g., OAuth), or 
multi-factor authentication (MFA). Upon successful authentication, users are granted a session token or a cookie, which signifies their authenticated state.

! Authorization: Authorization determines whether authenticated users have the necessary permissions to access specific resources or
perform certain actions within the application. Authorization mechanisms typically involve roles, permissions, or access control 
lists (ACLs). Administrators can define access policies dictating which users or groups are authorized to access particular routes or functionalities.

! Features of Protected Routes:
? Authentication Control: Protected routes offer authentication control, ensuring that only authenticated users can access certain parts of the application.
Redirection: Unauthorized users attempting to access protected routes are automatically redirected to designated pages, such as a login page.
Customization: Developers have the flexibility to customize the authentication logic and redirection behavior according to the specific requirements of the application.
Granular Access Control: Protected routes enable granular access control, allowing developers to define which users or user roles have access to specific routes or components.
Error Handling: They provide built-in error handling mechanisms to handle authentication failures and ensure a smooth user experience.
*/

/*
! What are Protected Routes in ReactJS?
Protected Routes are routes that only authenticated users can access. If a user is not logged in, they are redirected to a login page or
another route. It’s commonly used for dashboards, profile pages, admin panels, etc.
*/

