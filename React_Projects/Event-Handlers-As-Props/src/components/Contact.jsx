import React from 'react'
import ActionButton from './ActionButton'

const Contact = () => {
    
    let handleSendMessage = () =>{
        alert("Sending your message");
    };
    
  return (
    <>
    <h2>Contact us</h2>
    <ActionButton text= "Send Message" onClick={handleSendMessage}/>
    {/* text and onClick is prop send to child */}
    </>
  )
}

export default Contact