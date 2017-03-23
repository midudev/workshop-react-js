import React, { Component } from 'react';

export class Title extends Component {
  render () {
    return <h3>{this.props.children}</h3>
  }
}

export class Paragraph extends Component {
  render () {
    return <p>{this.props.children}</p>
  }
}

export class Article extends Component {
  render () {
    return (
      <div>
        <Title>Título del artículo</Title>
        {this.props.children}
        <span>Autor: {this.props.autor}</span>
      </div>
    );
  }
}

export class BoldText extends Component {
  render () {
    return <strong>{this.props.children}</strong>
  }
}