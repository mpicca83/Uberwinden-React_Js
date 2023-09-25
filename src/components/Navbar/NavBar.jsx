import "./NavBar.css"
import logoUberwinden from '../../assets/images/logoUberwinden.png'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { CartWidget, Search } from ".."
import { Link, NavLink } from "react-router-dom"

export const NavBar = () => {

    return(
        <Navbar expand="lg" className="navbar">
            <Container fluid>
                 
                <Navbar.Brand>
                    <Link to={'/'}><img src={logoUberwinden} alt="Logo Überwinden" id="logoEmpresa" /> </Link>
                </Navbar.Brand>
            
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink className='nav-link' to={'/'}>Inicio</NavLink>
                        <NavLink className='nav-link' to={'/nosotros'}>Nosotros</NavLink>
                        <NavDropdown title="Productos" id="basic-nav-dropdown">
                            <span className="fw-bold dropdown-item">Productos</span>
                            <NavLink className="ps-5 dropdown-item" to={'/category/HOMBRE'}>Hombre</NavLink>
                            <NavLink className="ps-5 dropdown-item" to={'/category/MUJER'}>Mujer</NavLink>
                                <NavDropdown.Divider />
                            <span className="fw-bold dropdown-item">Para tu club...</span>
                            <NavLink className="ps-5 dropdown-item" to={'/category/CLUBES'}>Merchandising</NavLink>
                            <NavDropdown.Item className="ps-5" href="#action/3.6">Personaliza tu indumentaria</NavDropdown.Item>
                        </NavDropdown>
                        <NavLink className='nav-link' to={'/eventos'}>Eventos</NavLink>
                        <NavLink className='nav-link' to={'/login'}><i className="fa-solid fa-user"></i></NavLink>
                        
                        <CartWidget />
                        <Search />
                        
                    </Nav>
                </Navbar.Collapse>
                
            </Container>
        </Navbar>
    )
}