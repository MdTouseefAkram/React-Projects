import React from 'react'
import ClassComponent from './components/ClassComponent'
import ClassComponentToggle from './components/ClassComponentToggle'
import LifeCycleClassBased from './components/LifeCycleClassBased'
import LifeCycleFunctionalBased from './components/LifeCycleFunctionalBased'

const App = () => {
  return (
    <>
    <ClassComponent/>
    <ClassComponentToggle/>
    <LifeCycleClassBased/>
    <LifeCycleFunctionalBased/>
    </>
  )
}

export default App