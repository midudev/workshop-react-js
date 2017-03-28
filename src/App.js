import React, { Component } from 'react';
import jsxToString from 'jsx-to-string';

const demos = [
  '01-hello-world',
  '02-hello-world-with-props',
  '03-using-special-prop-children',
  '04-using-more-children',
  '05-events-alert-on-click',
  '06-hello-state',
  '07-initialize-state-with-props',
  '08-conditional-rendering',
  '09-dynamic-children',
  'app-01-movies-searcher',
  'encapsulating-libraries',
  'life-cycle',
  'nesting-views'
];

const demosComponents = demos.reduce((acc, demo) => {
  acc[demo] = require(`./${demo}/demo`).default
  return acc
}, {})

const Tag = ({text, inverted = ''}) => (
  <span className={`demo-tag ${inverted && 'inverted'}`}>{text}</span>
)

import './App.css'

export default class App extends Component {
  constructor (...args) {
    super(...args);

    this.state = {
      demoToLoad : demos[0]
    }
  }

  componentDidMount () {
    const demoToLoad = localStorage.getItem('demoToLoad')
    if (demoToLoad && demos.includes(demoToLoad)) {
      this.setState({ demoToLoad })
    }
  }

  changeDemo (demoToLoad) {
    return () => {
      this.setState({ demoToLoad });
      localStorage.setItem('demoToLoad', demoToLoad)
    }
  }

  componentDidUpdate () {
    window.Prism.highlightAll();
  }

  render () {
    const {demoToLoad} = this.state;
    const demoComponent = demosComponents[demoToLoad];

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
            <Tag inverted text='CODE' />
              <pre className='language-jsx'>
                <code className="language-jsx">
                  { jsxToString(demoComponent) }
                </code>
              </pre>
          </section>

          <section className='demo'>
            <Tag text='RESULT' />
            { demoComponent }
          </section>
        </section>

      </div>
    )
  }
}
