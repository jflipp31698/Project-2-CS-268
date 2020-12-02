import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import CSdept from './components/CSdept';
import Mathd from './components/MATHdept';

class App extends Component {
  render() {
    return (
    <Router>
        <div>
          <h2>Welcome to React Router Tutorial</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/Login'} className="nav-link">Login</Link></li>
            <li><Link to={'/CSDept'} className="nav-link">CS Deptartment</Link></li>
          </ul>
          </nav>
          <hr />
          <Switch>
              <Route exact path='/' component={Mathd} />
              <Route path='/Login' component={Login} />
              <Route path='/CS' component={CSdept} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;