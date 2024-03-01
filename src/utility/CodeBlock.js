import React from 'react'

function CodeBlock(props) {
  return (
    <div className="alert alert-secondary" role="alert">
        <pre>
            {props.code}
        </pre>
    </div>
  )
}

export default CodeBlock