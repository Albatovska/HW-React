// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import GalleryService from '../../service'

const service = new GalleryService();

class RandomPhoto extends Component {
    state = {
      randomPhoto: false
    };

  componentDidMount() {
  service.getRandomPhoto()
  .then( randomPhoto => this.setState({randomPhoto}))
}
    render () {
      const {randomPhoto} = this.state;
      return (
        <div>
        {<img key={randomPhoto.id} src={randomPhoto.urls.small} alt="" />}
        </div>
      )
    }
}
export default RandomPhoto;