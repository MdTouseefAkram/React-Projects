import React, { useReducer } from 'react'

function reducer(state, action){
    switch (action.type){
        case 'ADD_ITEM':
            return{
                ...state, items:[...state.items, action.item], //new items gets added in previous state items[]
                totalPrice: state.totalPrice + action.item.price,

            };
        case 'REMOVE_ITEM':
            let updatedItems = state.items.filter((item)=> item.id !== action.id);
            let removedItem = state.items.find((item)=> item.id === action.id);
            return{
                ...state,
                items:updatedItems, //items get updated after removing item
                totalPrice: state.totalPrice - (removedItem?.price || 0) //totalprice get updated after removing item
            };
        case 'TOGGLE_CHECKOUT':
            return {...state, isCheckOut: !state.isCheckOut}; //in old state , ischeckout get reversed after click on button, ...state here becoz state has ischekcout property, inside state , ischeckout get updated after click on toggle buuton.
        
        case 'RESET_CART':
            return initailState;
            
        default:
            return state;
    }
}

let initailState = {
    items:[],
    totalPrice:0,
    isCheckOut:false
}
const CartReducer = () => {

    let [state, dispatch] = useReducer( reducer, initailState);

    //Dummy data
    let products = [
        {id:1, name:"Laptop", price:800},
        {id:2,  name:"Phone", price:500},
        {id:3, name:"HeadPhones", price:100}
    ];


  return (
    <>
    <h2>useReducer Shopping Cart</h2>
    <div>
        {products.map((product)=>(
            <button key={product.id}
            onClick={()=>dispatch({type:'ADD_ITEM', item:product})} // key name can be any like item we pass product as value (one object product)
            >Add {product.name}</button>
        ))}
    </div>

    <h3>Total : ${state.totalPrice}</h3>

    <ul>
        {state.items.map((item)=>(

            <li key={item.id}>
                {/* Data */}
                {item.name} - {item.price}
                <button onClick={()=>dispatch({type:'REMOVE_ITEM', id:item.id})}>Remove</button> 
            </li>
        ))}
    </ul>

    <button onClick={()=>dispatch({type:"TOGGLE_CHECKOUT"})}> 
        {/* General text . state has access of isCheckout property for displaying text on UI. (Note- state has 3 properties in state , one is isCheckout)*/}
        {state.isCheckOut ? "Cancel Checkout": "Proceed to CheckOut"} 
    </button>

    <button onClick={()=>dispatch({type:"RESET_CART"})}>Reset Cart</button>

        {/* Text visible according to checkout toggle not logic depended but it reflect mode on or shopiing mode if checkout chnages by toggling.*/}
    <p>{state.isCheckOut ? "Checkout mode ON":"Shopping mode"}</p> 
    </>
  )
}

export default CartReducer

/*
When to use useReducer
! Use it when:
You have multiple states that depend on each other.
You perform complex transitions (like multiple operations on one or more states).
You want centralized and predictable state logic. (in reducer function)

🎯 Example Scenario
Let’s build a shopping cart where we manage:
Multiple related states: items, totalPrice, and isCheckout.
Complex transitions like: ADD_ITEM, REMOVE_ITEM, and TOGGLE_CHECKOUT.

! How It Works
| Action            | What It Does                                         |
| ----------------- | ---------------------------------------------------- |
| `ADD_ITEM`        | Adds a new item to the cart and updates total price. |
| `REMOVE_ITEM`     | Removes a specific item and subtracts its price.     |
| `TOGGLE_CHECKOUT` | Switches between shopping and checkout mode.         |
| `RESET_CART`      | Clears the cart and resets the state.                |

! Why useReducer here?
✅ Multiple related states: items, totalPrice, isCheckout.
✅ Complex transitions (adding/removing/updating items).
✅ All logic stays in one clean reducer function, making it easy to debug and maintain.
*/

/*
...state keeps the existing state values that you are NOT updating
{ ...state, isCheckOut: !state.isCheckOut }

expands to:
{
  items: state.items,
  totalPrice: state.totalPrice,
  isCheckOut: !state.isCheckOut
}
*/

/*
...state
Copies old state values (do not lose anything).
✔ items: [...state.items, action.item]

Make a new array
Old items copied
New item added at the end

! Example:
old items: [Laptop]
new item: Phone
new items → [Laptop, Phone]
✔ totalPrice: state.totalPrice + action.item.price
Updates price.
*/

/* VVI
!! Why does action.item.price exist?
Because YOU are sending item inside the action when you dispatch it.
Look at this button 👇

<button
  onClick={() => dispatch({ type: "ADD_ITEM", item: product })}
>
  Add {product.name}
</button>

Here you are dispatching this object:
{
  type: "ADD_ITEM",
  item: { id: 1, name: "Laptop", price: 800 }
}

So action becomes:
action = {
  type: "ADD_ITEM",
  item: { id: 1, name: "Laptop", price: 800 }
}

Now reducer receives it:
function cartReducer(state, action) {

So inside reducer:
action.type → "ADD_ITEM"
action.item → { id: 1, name: "Laptop", price: 800 }
action.item.price → 800
That’s how it works.
*/

/*
! Action Example
! When user clicks ❌ Remove:
dispatch({ type: "REMOVE_ITEM", id: item.id });

So your reducer receives:
action = { type: "REMOVE_ITEM", id: 2 }


| Line                 | What it does             |
| -------------------- | ------------------------ |
| `filter()`           | Remove item from list    |
| `find()`             | Get removed item's price |
| `totalPrice - price` | Update total             |
| `return {...state}`  | Return new cart          |


! item.id comes from the item object inside the map loop.
!item is taken from state.items.
When you click remove, you send that item's ID to reducer.

!! To prevent the crash, we use optional chaining:
removedItem?.price

This means:
If removedItem exists → return removedItem.price
If it's undefined → return undefined (no crash!)


! The key name 'item' can be ANY name you want.
Yes, the key name item can be anything.
It’s NOT fixed.
React or useReducer do NOT require the key to be specifically called item.
*/