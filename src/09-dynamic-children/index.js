import React, { Component } from 'react';

export default class DynamicChildrenDemo extends Component {

  constructor (...args) {
    super(...args)
    this.state = {
      show: this.props.initialShow,
      images: [ 'https://unsplash.it/150?image=0','https://unsplash.it/150?image=1', 'https://unsplash.it/150?image=2','https://unsplash.it/150?image=3', 'https://unsplash.it/150?image=4' ]
    }
  }

  showImage = () => {
    this.setState({ show: true })
  }

  render () {
    return (
      <div>
        {
          !this.state.show &&
            <button onClick={this.showImage}>
              Show me a bunch of images!
            </button>
        }

        <div className={this.state.show ? 'show' : ''}>
          {this.state.images.map((img, index) => {
            return <img key={index} alt='image of a computer' src={img} />
          })}
        </div>

      </div>
    );
  }
}
