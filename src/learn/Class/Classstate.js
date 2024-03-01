import React, { Component } from 'react'

class Classstate extends Component {
 constructor(props) {
   super(props)
 
   this.state = {
      message:"Welcome Visitor",
      count:0
   }
 }

 changeMessage(){
    this.setState({
        message:'Thank you for subscribe'
    })
 }

 increment(){
    //this.state.count = this.state.count + 1; //never we can't update state value directly ,React will not rerender the component
    /*
    this.setState({
        count : this.state.count + 1
    },()=>{

        console.log('Callback is used when you want to call a function after state update',this.state);
    })
    */

    this.setState((prevState) => ({
      count: prevState.count + 1,
    }),()=> {
        console.log(this.state.count)
    });
 }

 incFive(){
    this.increment()
    this.increment()
    this.increment()
    this.increment()
    this.increment()
 }

  render() {
    return (
      <>
      <h1>{this.state.message} {this.state.count}</h1>
        <button className='btn btn-primary' onClick={()=>this.changeMessage()}>Subscribe</button>
        <button className='btn btn-primary' onClick={()=>this.incFive()}>Increment</button>
      </>
    )
  }
}

export default Classstate