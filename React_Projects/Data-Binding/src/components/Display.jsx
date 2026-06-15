import React from 'react'

const Display = ({username}) => {
  return (
    <>
        <div>Display</div>
        <h3>Name: {username}</h3>
        {/* we can directly show updated value of name in here same component i.e OneWayBinding.jsx or we can show in child component i.e Display.jsx to show one way binding. Any one is fine. then no need of Display component if we show new data in same component. */}
    </>
  )
}

export default Display