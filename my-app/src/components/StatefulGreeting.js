import React, { Component } from "react";

class StatefulGreeting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            introduction: 'Hi',
            buttonText: 'Exit',
        }
    }

    handleClick() {
        this.setState((prevState) => {
            return {
                introduction: prevState.introduction === 'Hi' ? 'Bye' : 'Hi',
                buttonText: prevState.buttonText === 'Exit' ? 'Enter' : 'Exit'
            }
        })
    }
    render() {
        return (
            <div>
                
                <h1>{this.state.introduction}</h1>
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
            </div>
        )
    }
}

export default StatefulGreeting