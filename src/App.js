import React from 'react';
import { Grid, Row, Col } from 'FlexGrid';
import drums from 'drums';
import 'App.scss';


const SomethingWithGrid = () => {
	return (
		<Grid>
			<Row>
				<Col size={1}>
					<p>noget i en Col</p>
				</Col>
			</Row>
			<Row>
				<Col size={2}>
					noget andet i en col
				</Col>
				<Col size={1}>
					ved siden af en col
				</Col>
			</Row>
		</Grid>
	)
}

const Footer = () => {
	return (
		<div className="footer">
			<p>Made with React, much coffee and Stack<strong>overflow</strong></p>
			<p>freeCodeCamp Drumpad project by Jakob Dahl</p>
			<p>Code is on <a href="https://github.com/saadanerdetbare/drumpad" target="_blank" rel="noopener noreferrer">github</a></p>
		</div>
	)
}

function App() {
	return (
		<div>
			<SomethingWithGrid />
			<Footer />
		</div>
	);
}

export default App;
