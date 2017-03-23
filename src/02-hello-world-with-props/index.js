import React, { Component } from 'react';

export default class HelloWorldWithProps extends Component {
  render () {
    return <h1>{this.props.message}</h1>
  }
}