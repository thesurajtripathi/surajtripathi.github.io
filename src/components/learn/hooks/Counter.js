import React, { useState } from 'react'

function Counter() {
    const [count,setCount]=useState(0);
  return (
    <button className="btn btn-primary" onClick={()=> setCount(count +1 )}>Count {count}</button>
  )
}

export default Counter