import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";
import { Button } from 'react-bootstrap'
import "./Navbar.css";

function NavBar() {
  return (
    <Navbar className='navbar d-flex align-items-start' bg="light" expand="lg"  >
      <Container className='container d-flex align-items-start'>
        <NavLink to="/login" className="m-0" href="#">
          <Button className="boton-ingresar">Ingresar</Button>
        </NavLink>
        <div className='logo-menu'>
          <NavLink to="/" className="m-0 logo" href="#home"></NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <NavLink to="/" href="#home" className='m-2' >Somos</NavLink>
              <NavLink href="#link" className='m-2'>Servicios</NavLink>
              <NavLink href="#link" className='m-2' >About us</NavLink>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBar;