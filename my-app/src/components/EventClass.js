import React, { Component } from 'react'

export class EventClass extends Component {
    handleClick() {
        console.log('Class component clicked')
    }
  
    render() {
    return (
      <button onClick={this.handleClick}>click me - class component</button>
    )
  }
}

export default EventClass