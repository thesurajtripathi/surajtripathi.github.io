import React, { Component } from 'react'
import Functprops from './Functprops'
import FuncMemo from './FuncMemo'

class FunHome extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Regular Component'
      }
    }

componentDidMount(){
    console.clear()
    setInterval(()=>{
        this.setState({
            name:'Memo Component'
        })
    },2000)
}
  render() {
    return (
      <div>
        <Functprops name={this.state.name} />
        <FuncMemo name={this.state.name}/>
      </div>
    )
  }
}

export default FunHome