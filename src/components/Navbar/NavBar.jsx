import "./NavBar.css"
import logoUberwinden from '../../assets/images/logoUberwinden.png'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { CartWidget } from "../CartWidget/CartWidget"
import { Search } from "../Search/Search"

export const NavBar = () => {

    return(
        <Navbar expand="lg" className="navbar">
            <Container fluid>
                 
                <Navbar.Brand href="#home">
                    <img src={logoUberwinden} alt="Logo Überwinden" id="logoEmpresa" /> 
                </Navbar.Brand>
            
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#Inicio">Inicio</Nav.Link>
                        <Nav.Link href="#Nosotros">Nosotros</Nav.Link>
                        <NavDropdown title="Productos" id="basic-nav-dropdown">
                            <NavDropdown.Item className="fw-bold" href="#action/3.1">Para vos...</NavDropdown.Item>
                            <NavDropdown.Item className="ps-5" href="#action/3.2">Hombre</NavDropdown.Item>
                            <NavDropdown.Item className="ps-5" href="#action/3.3">Mujer</NavDropdown.Item>
                                <NavDropdown.Divider />
                            <NavDropdown.Item className="fw-bold" href="#action/3.4">Para tu club...</NavDropdown.Item>
                            <NavDropdown.Item className="ps-5" href="#action/3.5">Merchandising</NavDropdown.Item>
                            <NavDropdown.Item className="ps-5" href="#action/3.6">Personaliza tu indumentaria</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#Eventos">Eventos</Nav.Link>
                        <Nav.Link href="#InicioDeSesion"><i className="fa-solid fa-user"></i></Nav.Link>
                        
                        <CartWidget />
                        <Search />
                        
                    </Nav>
                </Navbar.Collapse>
                
            </Container>
        </Navbar>
    )
}