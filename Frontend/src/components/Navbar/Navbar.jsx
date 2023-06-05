import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";
import "./Navbar.css";


function NavBar() {
  return (
    <Navbar className='navbar d-flex align-items-start' expand="lg"  >
      <Container className='container d-flex align-items-start'>
        <NavLink to="/login" className="m-0" href="#">
          <button className="boton-ingresar ">Ingresar</button>
        </NavLink>
        <div className='logo-menu'>
          <NavLink to="/" className="m-0 logo" href="#home"></NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className='border-0'/>
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav>
              <NavLink to="/" href="#home" className='m-2 text-white' >Somos</NavLink>
              <NavLink  href="#link" className='m-2 text-white'>Servicios</NavLink>
              <NavLink href="#link" className='m-2 text-white' >About us</NavLink>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBar;