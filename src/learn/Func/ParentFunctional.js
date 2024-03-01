import React from 'react'

function ParentFunctional(props) {
  return (
    <>
    <button onClick={props.greetHandler}>Greet Parent Component</button>
    </>
  )
}

export default ParentFunctional