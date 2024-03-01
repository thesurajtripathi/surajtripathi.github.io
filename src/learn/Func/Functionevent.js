import React from 'react'

function Functionevent() {
  function subscribe(){
    console.log("subscribe");
  }
  return (
    <div>
      Function event
      <button onClick={()=>subscribe()}>Subscribe</button>
    </div>
  )
}

export default Functionevent