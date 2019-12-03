import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

export default class Header extends Component {
	render() {
		return (
			<div className={'header'}>
				<NavLink to={'/'} className="item">
					{' '}
					All{' '}
				</NavLink>
				<NavLink to={'/animal'} className="item">
					{' '}
					Animals{' '}
				</NavLink>
				<NavLink to={'/film'} className="item">
					{' '}
					Films{' '}
				</NavLink>
				<NavLink to={'/food&drink'} className="item">
					{' '}
					Food & Drink{' '}
				</NavLink>
				<NavLink to={'/nature'} className="item">
					{' '}
					Nature{' '}
				</NavLink>
				<NavLink to={'/search'} className="header_search">
					<span className={'glyphicon glyphicon-search'}></span>
				</NavLink>
			</div>
		);
	}
}