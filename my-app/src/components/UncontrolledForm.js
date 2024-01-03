import React, { Component } from 'react'

export class UncontrolledForm extends Component {

    constructor(props) {
      super(props)
      this.inputName = React.createRef();
      this.inputCategory = React.createRef();
      this.inputComments = React.createRef(); 
    }
    handleSubmit = (event) => {
        event.preventDefault(); 
        console.log(this.inputName.current.value)
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
                    defaultValue='John Doe'
                    ref={this.inputName}
                />
            </div>
            <div>
                <label htmlFor='category'>Query category:</label>
                <select 
                  id='id-category' 
                  name='category'
                  defaultValue='website'
                  ref={this.inpoutCategory}
                >
                    <option value='webisite'>Website issue</option>
                    <option value='order'>Order issue</option>
                    <option value='general'>General inquiry</option>
                </select>
            </div>
            <div>
                <label htmlFor='comments'>Comments:</label>
                <textarea
                  id='comments'
                  name='comments'
                  ref={this.inputComments}
                />
            </div>
            <input type='submit' value='Send' />
        </form>
      </div>
    )
  }
}

export default UncontrolledForm