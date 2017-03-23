import React, { Component } from 'react';

export default class BoldText extends Component {
  render () {
    return <strong>{this.props.children}</strong>
  }
}