import React, { Component } from 'react'

class Classclick extends Component {

  clickHandler(){
    console.log("Class Button Clicked")
  }  
  render() {
    return (
      <>
      <button className='btn btn-danger' onClick={this.clickHandler}>Class Button</button>
      </>
    )
  }
}

export default Classclick