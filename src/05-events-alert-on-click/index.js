import React, { Component } from 'react';

export default class ShowAlertOnClick extends Component {

  handleClick () {
    alert('Thanks for clicking me!')
  }

  render () {
    return <button onClick={this.handleClick}>Click me!</button>
  }
}