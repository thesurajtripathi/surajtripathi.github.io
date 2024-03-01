import React, { Component } from 'react'

class Classprops extends Component {
  render() {
    console.log("Reg",this.props.name)
    return (
      <div>This is class component and this is example of <b>{this.props.name}</b></div>
    )
  }
}

export default Classprops