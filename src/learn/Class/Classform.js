import React, { Component } from 'react'

class Classform extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username:'',
            comment:'',
            topic:'react'
        }
    }

    hanldeUsernameChange=(event)=>{
        console.log(event.target.value);
        this.setState({
            username:event.target.value
        })
    }

    handleCommentChange=(event)=>{
        this.setState({
            comment:event.target.value
        })
    }

    handleTopicChange=(event)=>{
        this.setState({
            topic:event.target.value
        })
    }

    handleSubmit=(event)=>{
        event.preventDefault();
        alert(this.state);        
    }

  render() {
    return (
      <>
        <h3>Form Components</h3>
        <form className='form' onSubmit={this.handleSubmit}>
            <div className='form-group'>
                <label>Username</label>
                <input type='text' className='form-control' value={this.state.username} onChange={this.hanldeUsernameChange}/>
            </div>
            <div className='form-group'>
                <label>Comment</label>
                <textarea className='form-control' value={this.state.comment} onChange={this.handleCommentChange}></textarea>
            </div>
            <div className='form-group'>
                <label>Topic</label>
                <select className='form-control' value={this.state.topic} onChange={this.handleTopicChange}>
                    <option value="angular">Angular</option>
                    <option value="react">React</option>
                    <option value="vue">Vue</option>
                </select>
            </div>
            <div className='form-group'>
                <button type='submit' className='btn btn-primary'>Submit</button>
            </div>
        </form>
      </>
    )
  }
}

export default Classform