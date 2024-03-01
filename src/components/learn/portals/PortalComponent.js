import React from 'react'
import ReactDOM from 'react-dom'

function PortalComponent() {
  return ReactDOM.createPortal(
    <div>PortalComponent</div>,
    document.getElementById('portal-root')
  )
}

export default PortalComponent