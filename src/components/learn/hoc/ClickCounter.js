import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

class ClickCounter extends Component {

  render() {
    const {count ,incrementCount} = this.props
    return (
      <div>
        <button className='btn btn-danger' onClick={incrementCount}>{count} Increments </button>
      </div>
    )
  }
}

export default UpdatedComponent(ClickCounter)