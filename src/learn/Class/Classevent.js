import React, { Component } from 'react'
import ParentClass from './ParentClass'

class Classevent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message:"Hello"
        }

        //this.clickHandler=this.clickHandler.bind(this);
    }

    /* clickHandler(){
        this.setState({
            message:"Good Bye"
        })

        console.log(this);
    } */

    clickHandler=()=>{
        this.setState({
            message:"Good Bye!!"
        })
    }
    render() {
        return (
        <>
            <h1>{this.state.message}</h1>
            {/* <button className='btn btn-success' onClick={this.clickHandler.bind(this)}>Click</button> */}
            {/* <button className='btn btn-success' onClick={()=>this.clickHandler() }>Click</button> */}
            <button className='btn btn-success' onClick={this.clickHandler}>Click</button>
            <ParentClass />
        </>
        )
    }
}

export default Classevent