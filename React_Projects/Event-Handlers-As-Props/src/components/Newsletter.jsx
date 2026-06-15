import React from 'react'
import ActionButton from './ActionButton'

const Newsletter = () => {

    let handleSubscribe = () =>{
        alert("Thank you for subscribing!");
    };

  return (
    <>
    <h2>Subscribe to Newsletter</h2>
    <ActionButton text="Subscribe" onClick={handleSubscribe}/>
    </>
  )
}

export default Newsletter