import React, { Component } from 'react';

export default class ConditionalRendering extends Component {

  state = {
    poppyIsHappy: false
  }

  makePoppyHappy = () => {
    this.setState({ poppyIsHappy: true });
  }

  render () {
    return (
      <div>
        <p>Here, depending on the props passed you will see a different message!</p>
        {this.state.poppyIsHappy && <p>Poppy is happy!</p>}
        {!this.state.poppyIsHappy &&
          <div>
            <p>Poppy is not happy. But you can make it happy clicking the button!</p>
            <button onClick={this.makePoppyHappy}>Make Poppy Happy!</button>
          </div>
        }
      </div>
    )
  }
}
