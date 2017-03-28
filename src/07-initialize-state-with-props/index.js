import React, { Component } from 'react';

export default class HelloState extends Component {

  state = {
    message: this.props.initialMessage
  }

  // we have to bind the context to this because if not, this will be 
  // undefined, because handleClick will be execute outside the component
  // handleClick () { -> that'd be incorrect
  handleClick = () => {
    // remember not to use this.state to change the state as state is immutable
    // also, remember that setState is asynchronous
    this.setState({ message: 'Changed the state!' })
  }

  render () {
    return (
      <div>
        <p>Actual state is:<br /><strong>{this.state.message}</strong></p>
        <button onClick={this.handleClick}>
          Click me and change the state!
        </button>
      </div>
    )
  }
}
