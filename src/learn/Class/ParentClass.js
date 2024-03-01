import React, { Component } from 'react'
import ParentFunctional from '../Func/ParentFunctional';
import ClassRefs from './ClassRefs';

class ParentClass extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       parentName:'Parent Class',
       child:''
    }

    this.greetParent=this.greetParent.bind(this);
    this.componentRef=React.createRef()
  }

  greetParent(child){
    this.setState({
      child:child
    })
  }

  focusHandler=()=>{
    this.componentRef.current.focusInput()
  }

  render() {
    return (
      <>
        <h1>Hello ! Mr. {this.state.parentName} {this.state.child ? this.state.child:''}</h1> 
        {/* Above is the case of investigation,need the consideration */}
        <ParentFunctional greetHandler={this.greetParent}/>
        <ParentFunctional greetHandler={()=>this.greetParent('child') }/>
        <ClassRefs ref={this.componentRef}/>
        <button onClick={this.focusHandler}>Focus Input</button>
      </>
      
    )
  }
}

export default ParentClass