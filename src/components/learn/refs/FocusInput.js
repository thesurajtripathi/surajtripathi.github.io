import React, { Component } from 'react'
import InputRefs from './InputRefs'

class FocusInput extends Component {
constructor(props) {
  super(props)

  this.state = {
     
  }

  this.focusref=React.createRef();
}

clickHandler=()=>{
    this.focusref.current.focusInputHandler()
}

getFocusData=()=>{
    alert(this.focusref.current.getFocusData());
    console.log(this.focusref.current.getFocusData());
}

  render() {
    return (
      <div>
        <InputRefs ref={this.focusref}/>
        <button className='btn btn-primary' onClick={this.clickHandler}>Focus</button>
        <button className='btn btn-primary' onClick={this.getFocusData}>Get Data</button>
      </div>
    )
  }
}

export default FocusInput