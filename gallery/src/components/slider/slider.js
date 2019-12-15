import React from 'react';
import './slider.css';

const Slider = props => {
	const { color, urls = {} } = props.data;
	return (
		<div
			className={'slider'}
			style={{
				backgroundColor: color,
				backgroundImage: `url(${urls.regular})`,
			}}
		></div>
	);
};

export default Slider;
