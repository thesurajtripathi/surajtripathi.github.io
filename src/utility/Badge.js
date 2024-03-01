import React from 'react'

function Badge(props) {
    const type = props.type ? props.type :'primary'
  return (
    <span className={"badge bd-"  + type}>
        {props.children}
    </span>
  )
}

export default Badge