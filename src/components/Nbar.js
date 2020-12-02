import {Nav, Navbar, NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

function Nbar() {
  return (
      <Navbar bg="primary" variant="dark"expand="lg">
        <Navbar.Brand href="#home">UWEC Freshman Home Page</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <Nav.Link href="#Login">Login</Nav.Link>
        <NavDropdown title="Departments" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Biology</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Business</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Computer Science</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Mathamatics</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">English</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
        </Nav>
        </Navbar.Collapse>
      </Navbar> 
  )
}

export default Nbar;