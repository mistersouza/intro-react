import React, { Component } from 'react'
import axios from 'axios'

export class HTTPPost extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      post: null
    }
  }
  
  handlePostClick = () => {
    axios.post(
        'https://jsonplaceholder.typicode.com/posts',
        {
            title: 'Hello world!',
            body: 'It works!',
            userId: 123,
        })
    .then(response => {
        this.setState({
            post: response.data
        })
    })
}
  render() {
    const { post } = this.state;
    return (
      <div>
        <button onClick={this.handlePostClick}>Create post</button>
        {
          post
          ? (
            <div key={post.id}>
              <h1>{post.title}</h1>
              <p>{post.body}</p>
            </div>
          ) : (
            <p>Please click the button again</p>
          )
        }
        
      </div>
    )
  }
}

export default HTTPPost