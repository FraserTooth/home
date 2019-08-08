import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Homepage from './Homepage';
import About from './components/Pages/About/About';
import Projects from './components/Pages/Projects/Projects';
import NavigationBar from './components/HeaderComponent/NavigationBar';
import Button from 'react-bootstrap/Button';


function App() {
  return (
    <Router>
          <div>
            <NavigationBar />
            <Route name="home" exact path="/" component={Homepage} />
            <Route name="about" exact path="/about" component={About} />
            <Route name="projects" exact path="/projects" component={Projects} />
          </div>
    </Router>
  );
}


function Topic({ match }) {
  return <h3>Requested Param: {match.params.id}</h3>;
}

function Topics({ match }) {
  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:id`} component={Topic} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
}

function Header() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/topics">Topics</Link>
      </li>
    </ul>
  );
}

export default App;
