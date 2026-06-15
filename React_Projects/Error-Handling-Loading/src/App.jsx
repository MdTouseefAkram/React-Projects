import React from 'react'
import PostList from './components/PostList'
import ErrorBoundary from './components/ErrorBoundary'
import BuggyComponent from './components/BuggyComponent'
import HandlingErrorInEventHandlers from './components/HandlingErrorInEventHandlers'
import APIServicePractice from './components/APIServicePractice'

const App = () => {
  return (
    
    <>
    <h3>API Error Handling with Loading</h3>
    <PostList/>

    <h3>Error Boundary</h3>
    {/* Step 2 after creating Error Boundary , then wrap the component with ErrorBoundary */}
    <ErrorBoundary>
      <BuggyComponent/>
    </ErrorBoundary>
    <h3>Handling Errors in Event Handlers</h3>
    <HandlingErrorInEventHandlers/>
    {/* <APIServicePractice/> */}
    </>
  )
}

export default App