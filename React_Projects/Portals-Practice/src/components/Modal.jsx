import React from 'react'
import ReactDOM from 'react-dom'

const Modal = ({children, onClose}) => {
  return ReactDOM.createPortal(
    <>
        <div>Modal</div>
        {children}   
        {/* {console.log(children)} */}
        <button onClick={onClose}>Close</button>
        {/* onClose= {setShowModal(false), this is written in App.jsx, onClose defines in App.jsx becoz App.js renders and uses the Modal component, so all logic wriiten in App.jsx} */}
    </>
    
    ,
    document.getElementById('modal-root')
  )
}

export default Modal
/* !! What is `children`? -- It’s a special prop that automatically holds anything you place between a component’s opening and closing tags.  (It mean children conatain data or jsx what we write in between openeing an dclosong tags. and if console log then these JSX prints This is a Modal! and Rendered outside the main root using React Portal as objects. )  
 <Modal onClose={()=>setShowModal(false)}>
          <h2>This is a Modal!</h2>
          <p>Rendered outside the main root using React Portal.</p>
</Modal>
*/


/*
!1. Where children comes from

In React, whenever you write a component like this:

<Modal>
  <h2>Hello from Modal!</h2>
  <p>This is modal content</p>
</Modal>

! React automatically passes everything between the opening and closing tags as a special prop called children.
So React internally converts it to something like this:

<Modal children={
  <>
    <h2>Hello from Modal!</h2>
    <p>This is modal content</p>
  </>
} />

! That means your component receives a prop named children that holds this JSX content.

| Concept          | Meaning                                                                                                                       |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| **`children`**   | A special prop automatically filled with anything written between a component’s tags.                                         |
| **`{children}`** | The placeholder where those elements are rendered inside the component’s JSX.                                                 |
| **Why useful?**  | It allows you to build *reusable container components* (like modals, cards, layouts, etc.) that wrap arbitrary child content. |

*/

/*
! ex: Step-by-step explanation
You render the Modal component like this:

<Modal>
  <button>Click Inside Portal</button>
</Modal>

? When React sees that, it treats everything inside the opening and closing tags as the children prop of the Modal component.
? So internally, React passes it like this:
! <Modal children={<button>Click Inside Portal</button>} />

| Concept                      | Explanation                                                                                                                  |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| **What is `children`?**      | It’s a special prop that automatically holds anything you place between a component’s opening and closing tags.              |
| **Where does it come from?** | From the JSX you write in the parent (`<Modal>...</Modal>`).                                                                 |
| **In your code**             | The `<button>` becomes the `children` prop of `Modal`.                                                                       |
| **Rendered location**        | The button is displayed inside `#modal-root` (via `createPortal`) but still logically belongs to the React tree under `App`. |

*/


//!  we create Modal with portal because to avoid z index problem and to avoid other issue and to show Modal above on sreen, so we use portal with Modal component.