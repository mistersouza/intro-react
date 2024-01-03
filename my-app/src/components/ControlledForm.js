import React, { Component } from 'react'

export class ControlledForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: '',
         category: 'website',
         comments: ''
      }
    }

    handleFormChange = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault(); 
        console.log(this.state)
    }
  render() {
    return (
      <div>
        <h2>Please fille up the form bellow</h2>
        <form onSubmit={this.handleSubmit}>
            <div>
                <label htmlFor='name'>Your name</label>
                <input 
                    type='text'
                    id='name' 
                    name='name' 
                    value={this.state.name} 
                    onChange={this.handleFormChange}/>
            </div>
            <div>
                <label htmlFor='category'>Query category:</label>
                <select id='id-category' name='category' value={this.state.category} onChange={this.handleFormChange}>
                    <option value='webisite'>Website issue</option>
                    <option value='order'>Order issue</option>
                    <option value='general'>General inquiry</option>
                </select>
            </div>
            <div>
                <label htmlFor='comments'>Comments:</label>
                <textarea id='comments' name='comments' value={this.state.comments} onChange={this.handleFormChange}/>
            </div>
            <input type='submit' value='Send' />
        </form>
      </div>
    )
  }
}

export default ControlledForm