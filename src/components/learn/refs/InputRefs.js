import React, { Component } from 'react'

class InputRefs extends Component {
constructor(props) {
  super(props)

  this.state = {
  }

  this.inputRef=React.createRef();
  
}

focusInputHandler(){
    this.inputRef.current.focus();
}

getFocusData(){
    return this.inputRef.current.value;
}

  render() {
    return (
      <div>
        Refs
        <input className='form-control' ref={this.inputRef} />
      </div>
    )
  }
}

export default InputRefs