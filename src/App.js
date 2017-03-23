import React, { Component } from 'react';
import Highlight from 'react-highlight.js';
import jsxToString from 'jsx-to-string';

const demos = [
  '01-hello-world',
  '02-hello-world-with-props',
  '03-using-special-prop-children',
  'dynamic-children',
  'encapsulating-libraries',
  'life-cycle',
  'nesting-views'
];

const demosComponents = demos.reduce((acc, demo) => {
  acc[demo] = require(`./${demo}/demo`).default
  return acc
}, {})

import './App.css'

export default class App extends Component {
  constructor (...args) {
    super(...args);

    this.state = {
      demoToLoad : demos[0]
    }
  }

  changeDemo (demoToLoad) {
    return () => {
      this.setState({ demoToLoad });
    }
  }

  render () {
    const {demoToLoad} = this.state;
    const demoComponent = demosComponents[demoToLoad];
    console.log(demoComponent)

    return (
      <div>
        <nav>
          <h3>Demos</h3>
          {demos.map(demo => (
            <button
              className={demoToLoad === demo ? 'active' : ''}
              key={demo}
              onClick={this.changeDemo(demo)}
            >
              {demo}
            </button>
          ))}
        </nav>

        <section className='content'>
          <section className='usage'>
            <Highlight language='js'>
            { jsxToString(demoComponent) }
            </Highlight>
          </section>

          <section className='demo'>
            { demoComponent }
          </section>
        </section>

      </div>
    )
  }
}