//! Step 1 - Create a Redux store
import {configureStore} from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'

export default configureStore({
    //! Step 4 - Add Slice Reducers to the Store
    reducer: {
        counter: counterReducer
    }
})

// Step 1 - This creates a Redux store, and also automatically configures the Redux DevTools extension so that you can inspect the store while developing.

//! Step 4 - Next, we need to import the reducer function from the counter slice and add it to our store. By defining a field inside the reducer parameter, we tell the store to use this slice reducer function to handle all updates to that state.


/*
! Here
| Part                      | Meaning                                           |
| ------------------------- | ------------------------------------------------- |
| `counter`                 | State field (key)                                 |
| `counterReducer`          | Reducer function                                  |
| `counter: counterReducer` | Assigns the reducer to manage the `counter` state |
*/

/*
! counterReducer can be any variable name. It's just the name you give when importing the reducer.

reducer: {
    counter: counterReducer
}

! counter is the key under which state is stored.
! counterReducer is the reducer function that manages that state.
! It connects the reducer to the Redux Store.
! When an action is dispatched, the store sends the action to counterReducer, gets the updated state back, and stores it under state.counter.

? When an action is dispatched, it goes to the Redux Store through the dispatch() function.

reducer: { } is:

👉 A configuration object for Redux store reducers
! reducer: {} is an object that maps state slice names to their corresponding reducer functions in the Redux store configuration.

! Flow
Component
   ↓
dispatch(action)
   ↓
Redux Store
   ↓
Reducer
   ↓
State Updated
   ↓
useSelector()
   ↓
Component Re-renders

! Visual Representation
Button Click
    ↓
dispatch(increment())
    ↓
Action Object
{
  type: "counter/increment"
}
    ↓
Redux Store
    ↓
Counter Reducer
    ↓
State Changes
{
  value: 0
}
   ↓
{
  value: 1
}
    ↓
Store Updated
    ↓
useSelector()
    ↓
UI Updated

! Key Point

! dispatch() is the only way to send data/actions to the Redux Store. The store receives the action, forwards it to the appropriate reducer, updates the state, and then notifies subscribed components to re-render.

!!! How does the reducer give the updated value back to the store? !!!
? When an action is dispatched, the store calls the reducer and passes the current state and action.

dispatch(increment());

! Redux internally does something like:

? const newState = reducer(currentState, action);

!! The reducer returns the updated state, and the store saves it.

! Example:

newState = counterReducer(
  { value: 0 },
  { type: "counter/increment" }
);

! Internal Flow
dispatch(increment())
          ↓
Store receives action
          ↓
Store calls reducer(currentState, action)
          ↓
Reducer produces new state
          ↓
Store replaces old state with new state
          ↓
Store notifies subscribers
          ↓
useSelector gets new value
          ↓
Component re-renders

!! A reducer does not directly update the store. The store calls the reducer with the current state and action. The reducer returns a new state (or Redux Toolkit's Immer generates one), and the store replaces the old state with this new state and notifies all subscribed components.

! Redux Toolkit Example
increment: (state) => {
  state.value += 1;
}

! It looks like mutation, but Immer converts it internally to:

return {
  ...state,
  value: state.value + 1
};

! The returned state is then stored by Redux.


! The reducer gives the updated value to the store by returning a new state. When an action is dispatched, the store calls the reducer with the current state and action. The reducer calculates and returns the updated state, and the store replaces the old state with the returned state. In Redux Toolkit, Immer handles this process automatically even though the reducer code appears to mutate the state.

! useDispatch() is a React Redux hook that returns the Redux store's dispatch function. It is used to dispatch actions from React components to the Redux store, triggering reducers to update the application state.
*/