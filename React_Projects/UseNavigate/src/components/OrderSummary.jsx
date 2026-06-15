import React from 'react'
import { useNavigate } from 'react-router-dom'

const OrderSummary = () => {
    let navigate = useNavigate();

  return (
    <>
    <div>Order Confirmed</div>
    {/* Go Back / Replace History */}
    <button onClick={()=> navigate(-1)}>Go back</button>  
    </>
  )
}

export default OrderSummary

/*
🔁 Go Back / Replace History
🔹 Go Back
navigate(-1)

!🔹 Replace (No Back Option)
! navigate("/login", { replace: true })

! Difference: Link vs useNavigate
| Link                   | useNavigate                |
| ---------------------- | -------------------------- |
| Used in JSX            | Used in logic              |
| For normal navigation  | For conditional navigation |
| `<Link to="/login" />` | `navigate("/login")`       |

*/