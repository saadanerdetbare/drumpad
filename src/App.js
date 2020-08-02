import React from "react";
import { Grid, Row, Col } from "FlexGrid";
import drums from "drums";
import "App.scss";

const SomethingWithGrid = (props) => (
  <Grid>
    <Row>
      <Col size={1}>
        <p>noget i en Col</p>
      </Col>
    </Row>
    <Row>
      <Col size={2}>noget andet i en col</Col>
      <Col size={1}>ved siden af en col</Col>
    </Row>
  </Grid>
);

const Footer = () => (
  <div className="footer">
    <p>
      Made with React, much coffee and Stack<strong>overflow</strong>
    </p>
    <p>
      <a
        href="https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-drum-machine"
        target="_blank"
        rel="noopener noreferrer"
      >
        freeCodeCamp Drumpad project
      </a>
      by Jakob Dahl
    </p>
    <p>
      Code is on
      <a
        href="https://github.com/saadanerdetbare/drumpad"
        target="_blank"
        rel="noopener noreferrer"
      >
        github
      </a>
    </p>
  </div>
);

const App = () => (
  <>
    <SomethingWithGrid />
    <Footer />
  </>
);

export default App;
