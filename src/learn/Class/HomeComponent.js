import React, { Component } from 'react'
import ClassPure from './ClassPure';
import Classprops from './Classprops';

class HomeComponent extends Component {
constructor(props) {
  super(props)

  this.state = {
     name:'Suraj'
  }
}

componentDidMount(){
    console.clear()
    setInterval(() => {    
        this.setState({
            name:'Ajay'
        });
    }, 2000);
}

  render() {
    return (
      <div>
        <h4>Pure</h4>
        <ClassPure name={this.state.name} />
        <h4>Regular</h4>
        <Classprops name={this.state.name}/>
      </div>
    )
  }
}

export default HomeComponent