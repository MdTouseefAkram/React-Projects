import React, { useState } from "react";
import Modal from "./components/Modal";
// import './index.css'

const App = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="app">
      <h1>React Portal Example</h1>
      <button onClick={() => setShowModal(true)}>Open Modal</button>

      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <h2>This is a Modal!</h2>
          <p>Rendered outside the main root using React Portal.</p>
        </Modal>
      )}
    </div>
  );
};

export default App;
