import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nbar from './js/nBar';
import Footer from './js/footer';
import Home from './js/home';
import Login from './js/login';
import CSdept from './js/cSdept';
import Mathd from './js/mathDept';
import ENG from './js/engDept'; 
import Sociology from './js/socDept'; 
import bio from './js/biodept'; 
import Calendar from './js/calendar';
import Chat from './js/chat';
import Contact from './js/contact';
import Report from './js/report.js'

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
              <Route path ='/SociologyDept' component={Sociology}/>
              <Route path ='/BioDept' component={bio}/>
              <Route path='/Calendar' component={Calendar} />
              <Route path='/Chat' component={Chat} />
              <Route path='/Contact' component={Contact} />
              <Route path='/report' component={Report} />
          </Switch>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;