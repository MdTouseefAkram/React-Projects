import React, { useState } from 'react'

const App = () => {
  let [isLogin, setIsLogin] = useState(true);

  return (
    <>
      {isLogin ? (
        <h1>Welcome User</h1>)
    : (
    <h1>Please Login</h1> ) 
    }
    
    <button onClick={()=>setIsLogin(!isLogin)}>{isLogin ? 'Logout' : 'Login'}</button>
    </>
  )
}

export default App

/*
Types of Conditional rendering summary
1. if statement - Greate for completely different renders or returning null.
2. Ternary operators (?:) - Perfect for either/ or situation
3. AND operator (&&) - Ideal for show/hide scenarios
4. Variables - Best for complex logic that would make your JSX messy
5. Activity component (React 19.2)
*/