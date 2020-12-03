 import {Nav, Navbar, NavDropdown} from 'react-bootstrap';
 import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
 import 'bootstrap/dist/css/bootstrap.min.css'
 import Login from './Login';
 import CSdept from './CSdept';
 import Mathd from './MATHdept';
 import ENG from './ENGdept'; 
 import biz from './BIZdept'; 
 import bio from './BIOdept'; 
 import Calendar from './Calendar';
 import Chat from './Chat';
 import Contact from './Contact';

 function Nbar() {
  return (
       <Navbar sticky="top" collapseOnSelect="true" bg="primary" variant="dark"expand="lg">
         <Navbar.Brand href="#home">UWEC Freshman Home Page</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        
        <Nav.Link href="#link"><Link to={'/'} className="nav-link">Home</Link></Nav.Link>

         <Nav.Link href="#link"><Link to={'/Login'} className="nav-link">Login</Link></Nav.Link>

         <Nav.Link href="#link"><Link to={'/Calendar'} className="nav-link">Calendar</Link></Nav.Link>

         <Nav.Link href="#link"><Link to={'/Chat'} className="nav-link">Chat</Link></Nav.Link>

         <Nav.Link href="#link"><Link to={'/Contact'} className="nav-link">Contact</Link></Nav.Link>

         <NavDropdown title="Departments" id="collasible-nav-dropdown">
         <NavDropdown.Item href="/CSdept">Computer Science Department</NavDropdown.Item>
        <NavDropdown.Item href="/BIOdept">Biology Department</NavDropdown.Item>
        <NavDropdown.Item href="/BIZdept">Business Department</NavDropdown.Item>
        <NavDropdown.Item href="/MATHdept">Mathematics Department</NavDropdown.Item>
        <NavDropdown.Item href="/ENGdept">English Department</NavDropdown.Item>
      </NavDropdown>
         </Nav>
         </Navbar.Collapse>
       </Navbar> 
   )
 }
 export default Nbar;