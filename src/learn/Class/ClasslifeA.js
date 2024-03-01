import React, { Component } from 'react'

class ClasslifeA extends Component {
constructor(props) {
  super(props)

  this.state = {
     name:'Suraj'
  }
  console.log("LifeCycle A constructor")
}

static getDerivedStateFromProps(props,state){
  console.log("LifeCycle A getDerivedStateFromProps")  
  return null
}

componentDidMount(){
    console.log("LifeCyle A component Did Mount")
}

  render() {
    console.log(" LifeCyle A render")
    return (
      <div>
        Classlife

      </div>
    )
  }
}

export default ClasslifeA