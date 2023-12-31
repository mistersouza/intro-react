import React, { Component } from 'react'
import MethodsAsPropsChild from './MethodsAsPropsChild'

class MethodsAsPropsParent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: false,
        }
    }

    handleLogIn = () => {
        this.setState({
            isLoggedIn: this.state.isLoggedIn ? false : true
        })
    }
    render() {
        return (
            <div>
                <MethodsAsPropsChild 
                    isLoggedIn={this.state.isLoggedIn} 
                    handleLogIn={this.handleLogIn}
                />
            </div>
        )
    }
}

export default MethodsAsPropsParent