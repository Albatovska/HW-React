import React, { Component } from 'react';
import './home-page.css';
import GalleryList from '../../gallery-list/gallery-list';
import RandomPhoto from '../random-photo/random-photo';

export default class HomePage extends Component {
	render() {
		return (
			<>
				<RandomPhoto />
				<GalleryList />
			</>
		);
	}
}
