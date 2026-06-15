import React from "react";
import ReactDOM from "react-dom";
// import  '../index.css'


const Modal = ({ children, onClose }) => {
  // The modal renders inside "modal-root" instead of "root"
  return ReactDOM.createPortal(
  
    <div className="modal-overlay">
      <div className="modal-content">
        {children}
        <button className="close-btn" onClick={onClose}>Close</button>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

export default Modal;
