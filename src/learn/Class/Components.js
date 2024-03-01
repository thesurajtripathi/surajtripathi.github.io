import React, { Component } from 'react'
import Classprops from './Classprops'
import Classstate from './Classstate'
import Classclick from './Classclick'

class Components extends Component {
  render() {
    return (
      <>
        <h1>Class Component</h1>
        <Classprops name="Class Props"/>
        <Classprops name="Good to passdata from A to B component"/>
        <Classstate name="State"/>
        <Classclick name="State"/>
      </>
    )
  }
}

export default Components