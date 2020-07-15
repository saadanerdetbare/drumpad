import React from 'react';
import { Grid, Row, Col } from 'FlexGrid';
import logo from './logo.svg';
import './App.css';

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

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
		  </header>
		  <SomethingWithGrid />
    </div>
  );
}

export default App;
