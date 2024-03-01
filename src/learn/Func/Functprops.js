import React from 'react'

function Functprops(props) {
  console.log("Regular",props.name)
  
  return (
    <div>This is example of <b>{props.name}</b></div>
  )
}

export default Functprops