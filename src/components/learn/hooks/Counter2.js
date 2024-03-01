import React, { useState } from 'react'

function Counter2() {
    const initial=0;
    const [count,setCount]=useState(initial);

    const incFive=()=>{
        for(let i=0;i <5;i++){
            setCount(prevCount=> prevCount + 1)
        }
    }
  return (
    <div className='col-md-12'>
        <button onClick={()=>setCount(prevCount=>prevCount-1)}>Decrement</button>
        <button>{count}</button>
        <button onClick={()=>setCount(prevCount=>prevCount+1)}>Increment</button>
        <button onClick={()=>setCount(initial)}>Reset</button>
        <button onClick={()=>incFive()}>Increment Five</button>
    </div>
  )
}

export default Counter2