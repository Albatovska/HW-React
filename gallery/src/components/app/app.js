import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RandomPhoto from '../random-photo/random-photo';
import './app.css';
import Header from '../header/header.js';
import GalleryList from '../gallery-list/gallery-list';
import Search from '../search/search';

class App extends Component {
	state = {
		error: false,
	};

	componentDidCatch(error, errorInfo) {
		this.setState({
			error: true,
		});
	}
	render() {
		const { error } = this.state;

		if (error) return <div>Something went wrong...</div>;

		return (
			<div className="app">
				<Router>
					<Header />
					<Switch>
						<Route
							path={'/'}
							render={() => {
								return (
									<>
										<RandomPhoto />
										<GalleryList />
									</>
								);
							}}
							exact
						/>
						<Route
							path={'/animal'}
							render={() => {
								return <GalleryList id={3330452} />;
							}}
							exact
						/>
						<Route
							path={'/film'}
							render={() => {
								return <GalleryList id={3679976} />;
							}}
							exact
						/>
						<Route
							path={'/foods&drink'}
							render={() => {
								return <GalleryList id={4172814} />;
							}}
							exact
						/>
						<Route
							path={'/nature'}
							render={() => {
								return <GalleryList id={244339} />;
							}}
							exact
						/>
						<Route
							path={'/search'}
							render={() => {
								return <Search />;
							}}
							exact
						/>
						<Route
							render={() => {
								return <h2>Page Not Found</h2>;
							}}
							exact
						/>
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;
