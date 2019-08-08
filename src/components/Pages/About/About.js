import React, { Component } from 'react';
import fraser from './fraser.jpg';
import "./About.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class About extends Component {
  render() {
    return (
      <Container>
        <Row className="">
          <div className="App">
            <h2>About</h2>
            <header className="App-header">
              <img src={fraser} className="spinning-picture" alt="fraser" />
              <p>
                Fraser is a nice young man
              </p>

            </header>
          </div>
        </Row>
      </Container>
    )
  }
}

export default About;
