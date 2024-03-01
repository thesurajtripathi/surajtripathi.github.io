import React from 'react'

function FuncMemo({name}) {
console.log("Functional Memo Component",name);
  return (
    <div>{name}</div>
  )
}

export default React.memo(FuncMemo)