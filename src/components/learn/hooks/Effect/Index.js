import React from 'react'
import { Outlet } from 'react-router-dom';

function Index() {
  return (
    <div>
        <h1>use Effect</h1>
        <Outlet/>
    </div>
  )
}

export {Index};