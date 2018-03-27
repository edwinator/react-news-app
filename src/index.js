import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import './index.css';
import JavaScript from './components/JavaScript';
import Python from './components/Python';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const Root = () => (
  <Router>
    <div>
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">NEWSAPP</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <LinkContainer exact to="/">
              <NavItem>Home</NavItem>
            </LinkContainer>
            <LinkContainer to="/javascript">
              <NavItem>JavaScript</NavItem>
            </LinkContainer>
            <LinkContainer to="/python">
              <NavItem>Python</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Route exact path="/" component={App} />
      <Route exact path="/javascript" component={JavaScript} />
      <Route exact path="/python" component={Python} />
    </div>
  </Router>
);

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
