import React from 'react'

function FunctionClick() {
    function clickHandler(){
        console.log("Button CLicked");
    }

  return (
    <>
        <button className='btn btn-primary' onClick={()=>clickHandler()}>Button</button>
    </>
  )
}

export default FunctionClick