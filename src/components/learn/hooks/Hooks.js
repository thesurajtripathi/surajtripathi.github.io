import React from 'react'
import { Outlet } from 'react-router-dom'

function Hooks() {
  return (
    <div className='row'>
        <h1>Hooks</h1>
        <Outlet/>
    </div>
  )
}

export default Hooks