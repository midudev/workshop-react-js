import React, { Component } from 'react';

const demos = [
  '01-hello-world',
  'life-cycle',
  'dynamic-children',
  'nesting-views',
  'encapsulating-libraries'
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

        <section className='demo'>
          { demoComponent }
        </section>

        {/*
        {(demoToLoad === 'LifeCycleDemo') && <LifeCycleDemo initialMessage='Hola mundo' sizeMessage={12} />}

        {(demoToLoad === 'DynamicChildrenDemo') && <DynamicChildrenDemo initialShow={true} />}

        {(demoToLoad === 'NestingViewsDemo') && <NestingViewsDemo />}

        {(demoToLoad === 'EncapsulatingLibrariesDemo') && <EncapsulatingLibrariesDemo />}
      */}

      </div>
    )
  }
}