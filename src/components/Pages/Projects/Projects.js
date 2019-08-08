import React, { Component } from 'react';
import "./Projects.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class Projects extends Component {
  render() {
    return (
      <Container>
        <Row>
          <div className="App">
            <h2>Projects</h2>
            <header className="App-header">
              <p>
                I've got lots of cool projects I think
              </p>

            </header>
          </div>
        </Row>
      </Container>
    )
  }
}

export default Projects;
