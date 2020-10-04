import React from 'react';
import './App.css';
import { Navbar, Nav } from 'react-bootstrap'
import Home from './Home'
import About from './About'
import Users from './Users'
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="#home">OrdeYoYo</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link><Link to="/">Home</Link></Nav.Link>
            <Nav.Link><Link to="about">About</Link></Nav.Link>
            <Nav.Link><Link to="/users">Users</Link></Nav.Link>
          </Nav>
        </Navbar>
        <div>
          <Switch>
            <Route
                exact
                component={Home}
                path="/"
            />
            <Route
                component={About}
                path="/about"
            />
            <Route
                component={Users}
                path="/users"
            />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
