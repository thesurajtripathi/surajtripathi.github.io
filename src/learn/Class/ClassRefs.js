import React, { Component } from 'react'

class ClassRefs extends Component {
    constructor(props) {
      super(props)    
      this.state = { }
      this.inputRefs=React.createRef();
      
      this.cbRefs=null;
      this.setcbRef=(element)=>{
        this.cbRefs = element
      }

    }

    componentDidMount(){
        // console.log("Class InputRef",this.inputRefs);
        // this.inputRefs.current.focus();
        // if(this.cbRefs){
        //     this.cbRefs.focus()
        // }
    }

    focusInput=()=>{
        this.inputRefs.current.focus();
    }

    clickHandler=()=>{
        // alert(this.inputRefs.current.value);
        // console.log(this.inputRefs.current.value)
        // if(this.cbRefs){
        //     alert(this.cbRefs.value);
        //     console.log(this.cbRefs.value)
        // }
    }
    
  render() {
    console.clear();
    return (
      <div>
        Refs
        <input type='text' ref={this.inputRefs}/>
        {/* <input type='text' ref={this.setcbRef}/> */}
        {/* <button onClick={this.clickHandler}>Click</button> */}
      </div>
    )
  }
}

export default ClassRefs