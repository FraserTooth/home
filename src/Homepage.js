import React, { Component } from 'react';
import bear from './bear.PNG';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Fade from 'react-bootstrap/Fade'
import "./Homepage.css"




class HomePage extends Component {
  render() {
    return (
      <Container>
        <Row className="">
          <Row className="">
          <h2>Home</h2>
          </Row>

          <Row className="">
          <header className="App-header">
            <Image src={bear} roundedCircle className="spinning-bear"/>
            <p>
              Fraser's Website will slowly evolve...
            </p>
          </header>
          </Row>
        </Row>
      </Container>
    )
  }
}

export default HomePage;
