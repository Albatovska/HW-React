import React, { Component } from 'react';
import GalleryService from '../../service';
import Loader from '../loader/loader';
import './gallery-list.css';

const service = new GalleryService();

export default class GalleryList extends Component {
	state = {
		list: [],
		page: 1,
		loading: true,
	};

	componentDidMount() {
		const { page } = this.state;
		const { id } = this.props;
		service.getPhotos(page, id).then(list => {
			this.setState({
				list,
				page: page + 1,
				loading: false,
			});
		});
	}
	showMorePhotos = () => {
		const { page, list } = this.state;
		const { id } = this.props;

		this.setState({ loading: true });

		service.getPhotos(page, id).then(data => {
			this.setState({
				list: [...list, ...data],
				page: page + 1,
				loading: false,
			});
		});
	};

	render() {
		const { list, loading } = this.state;
		return (
			<div className={'gallery-section'}>
				<div className="gallery-container">
					{' '}
					{list.map(el => {
						return (
							<div className={'image-item'} key={el.id}>
								<div className="img">
									<img key={el.id} src={el.urls.small} alt="" />
									<div className="autor"> </div>
									<div className="avatar"> </div>
								</div>
							</div>
						);
					})}{' '}
				</div>{' '}
				<Loader loading={loading} showMorePhotos={this.showMorePhotos} />
			</div>
		);
	}
}
