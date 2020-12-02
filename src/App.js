import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import CSdept from './components/CSdept';
import Mathd from './components/MATHdept';
import ENG from './components/ENGdept'; 
import biz from './components/BIZdept'; 
import bio from './components/BIOdept'; 

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
            <li><Link to={'/ENGDept'} className="nav-link">English Deptartment</Link></li>
            <li><Link to={'/MathDept'} className="nav-link">Math Deptartment</Link></li>
            <li><Link to={'/BizDept'} className="nav-link">Business Deptartment</Link></li>
            <li><Link to={'/BioDept'} className="nav-link">Biology Deptartment</Link></li>
          </ul>
          </nav>
          <hr />
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/Login' component={Login} />
              <Route path='/CSDept' component={CSdept} />
              <Route path = '/ENGDept' component={ENG}/>
              <Route path = '/MathDept' component={Mathd}/>
              <Route path ='/BizDept' component={biz}/>
              <Route path ='/BioDept' component={bio}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;