import React, { Component } from 'react'
import UserMessage from './UserMessage'
import UserData from './UserData'

export class ConditionalClass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoaded: false, 
         isLoggedIn: true
      }
    }
  render() {
    return (
      <div>
        <UserData isLoaded={this.state.isLoaded} />
        <UserMessage isLoggedin={this.state.isLoggedIn}/>
      </div>
    )
  }
}

export default ConditionalClass