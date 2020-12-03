import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Nbar from './components/Nbar';
import Home from './components/Home';
import Login from './components/Login';
import CSdept from './components/CSdept';
import Mathd from './components/MATHdept';
import ENG from './components/ENGdept'; 
import biz from './components/BIZdept'; 
import bio from './components/BIOdept'; 
import Calendar from './components/Calendar';
import Chat from './components/Chat';
import Contact from './components/Contact';


class App extends Component {
  render() {
    return (
    <Router>
        <div>
          <Nbar />
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/Login' component={Login} />
              <Route path='/CSDept' component={CSdept} />
              <Route path = '/ENGDept' component={ENG}/>
              <Route path = '/MathDept' component={Mathd}/>
              <Route path ='/BizDept' component={biz}/>
              <Route path ='/BioDept' component={bio}/>
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