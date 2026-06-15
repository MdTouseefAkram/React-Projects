//! ✅ 1. useMemo
// The useMemo Hook is a built-in React Hook that helps optimize performance by memoizing the result of a computation and reusing it unless its dependencies change. 
// This prevents expensive computations from being re-executed unnecessarily during component re-renders.
//! What it does:
// Memoizes the result of a function to avoid recalculating expensive computations on every render.
// When to use it:
// Use useMemo when you have a heavy computation and want to prevent recalculating it unless specific dependencies change.

//! Notice:
// The expensive calculation runs only when count changes.
// Typing in the input doesn’t trigger recalculation, thanks to useMemo.
//! Syntax
// let MemoizesVariable = useMemo(()={}, [dependencyise]); //very similar syntax to useEffect() , but it is used for heavy calculations.
import React, { useMemo, useState } from 'react'

const ExpensiveCalculationComponent = () => {
    let [count, setCount] = useState(0);
    let [input, setInput] = useState('');

    // //!Heavy calculation without useMemo(), Rerender on every change in state or other state variable get changing then it also rerender.
    // let expensiveCalculation = (()=>{
    //     console.log('calculating');
    //     for(let i = 0; i<1000; i++){
    //         count = count+i;
    //         console.log(count); //see the value in console for expesive calculation. if we remove the useMemo and dependency and then do this clculation it may get stuck or hanged and take longer time to execute.
    //     }
    //     return count;
    // })();

    //!Heavy calculation with useMemo(), no rerender untill count value get changed. if input value chnaging then also this useMemo doesn't rerenders.
    let expensiveCalculation = useMemo(()=>{
        console.log('calculating');
        for(let i = 0; i<100; i++){
            count = count+i;
            console.log(count); //see the value in console for expesive calculation. if we remove the useMemo and dependency and then do this clculation it may get stuck or hanged and take longer time to execute.
        }
        return count;
    },[count]); // Only recalculates when `count` changes

  return (
    <>
        <h3>Expensive Results (useMemo Example): {expensiveCalculation}</h3>
        <button onClick={()=>setCount(count+1)}>Inrease Count</button>

        {/*V.V.I - The reason the <input> is used in this component is to show that changing unrelated state (like input) doesn’t trigger the expensive calculation again.
        When the user types into the input field, setInput(e.target.value) updates the input state → Causes the component to re-render.
        So, useMemo ensures that expensiveResult recalculates only when count changes, ignoring input. */}
        <input type="text" value={input}
        onChange={(e)=>setInput(e.target.value)} 
        placeholder='Type something' />
    </>
  )
}

export default ExpensiveCalculationComponent