import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

function NavBar() {
    return (
        <div className="navbar fixed-top m-0 p-0">
            {[false].map((expand) => (
                <Navbar key={expand} bg="dark" expand="lg" className="mb-0">
                    <div className='container-fluid'>
                        <Navbar.Toggle className='boton-hamburguesa' aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Link to="/"><Navbar.Brand className='m-0 logo' href="#"></Navbar.Brand></Link>
                        <NavLink to="/prueba" className='m-0' href="#"><button className='boton-ingresar'>Ingresar</button></NavLink>
                        <Navbar.Collapse
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Nav className="justify-content-start flex-grow-1 pe-3">
                                <NavLink to="/" className='text-white m-2' href="#action1">Inicio</NavLink>
                                <NavLink className='text-white m-2' href="#action1">Especialidades</NavLink>
                                <NavLink className='text-white m-2' href="#action2">Guardias</NavLink>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Navbar>
            ))}
        </div>
    );
}

export default NavBar;








