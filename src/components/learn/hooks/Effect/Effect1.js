import React, { useEffect, useState } from 'react'

function Effect1() {
    const [count,setCount]=useState(0)
    useEffect(()=>{
        document.title =`Clicked ${count} times`;
    })
  return (
    <div>
        <button className='btn btn-primary' onClick={()=>setCount( count + 1)}>Counter Effect {count}</button>
    </div>
  )
}

export default Effect1