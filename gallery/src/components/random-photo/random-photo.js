import React, { Component } from 'react';
import GalleryService from '../../service';

const service = new GalleryService();

class RandomPhoto extends Component {
	state = {
		randomPhoto: false,
	};

	componentDidMount() {
		service.getRandomPhotos().then(randomPhoto => {
			this.setState({ randomPhoto });
		});
	}
	render() {
		const { randomPhoto } = this.state;
		return (
			<div>
				<img
					className={'image image-random'}
					key={randomPhoto.id}
					src={typeof randomPhoto.urls !== 'undefined' ? randomPhoto.urls.regular : ''}
					alt="random-photo"
				/>
			</div>
		);
	}
}
export default RandomPhoto;
