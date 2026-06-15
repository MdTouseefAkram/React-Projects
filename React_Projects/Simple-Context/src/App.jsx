import React from 'react'
import Welcome from './Welcome'
import UserProvider from './Context'


//! Approach
// We will use Context API to display a user's name and ID.

// First, create a Context.js file in the src folder, where we define the UserContext. The context provides Provider and Consumer, so we'll store them in constants.
// In a simple component file, we'll display a message showing the user's name and ID, which will be passed through the Provider.
// Finally, wrap the App component in index.js with the Provider and pass the name and ID as values. If no value is passed, the page will be blank.
// Example: Write the following code in respective files

// Context.js: We create the consumer and provider in this file
// WelocomePage.js: The consumer consumes the value in this file
// Index.js: The provider is given to the application in this file
// App.js: The components are imported in this file and then rendered on the webpage

const App = () => {
  return (
    <>
    <UserProvider>
      <Welcome/>
    </UserProvider>
    </>
  )
}

export default App