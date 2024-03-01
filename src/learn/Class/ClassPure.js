import React, { PureComponent } from 'react'

class ClassPure extends PureComponent {

  render() {
    console.log("Pure:",this.props.name);
    return (
      <div>
        <h3>Pure Component {this.props.name}</h3>
     </div>
    )
  }
}

export default ClassPure