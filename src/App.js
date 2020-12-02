import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import CSdept from './components/CSdept';
import Mathd from './components/MATHdept';
import Calendar from './components/Calendar';
import Chat from './components/Chat';
import Contact from './components/Contact';


class App extends Component {
  render() {
    return (
    <Router>
        <div>
          <h2>UWEC Freshman Home Page</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/Login'} className="nav-link">Login</Link></li>
            <li><Link to={'/Calendar'} className="nav-link"> Calendar </Link></li>
            <li><Link to={'/Chat'} className="nav-link"> Chat </Link></li>
            <li><Link to={'/Contact'} className="nav-link"> Contact Us </Link></li>
            <li><Link to={'/CSDept'} className="nav-link">CS Department</Link></li>
          </ul>
          </nav>
          <hr />
          <Switch>
              <Route exact path='/' component={Mathd} />
              <Route path='/Login' component={Login} />
              <Route path='/CS' component={CSdept} />
              <Route path='/Calendar' component={Calendar} />
              <Route path='/Chat' component={Chat} />
              <Route path='/Contact' component={Contact} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;