import "./NavbarTop.css"
import { Carousel } from 'react-bootstrap'

export const NavbarTop = () => {

    return(
        <Carousel className="navbarTop" interval={3000} indicators={false}>
            <Carousel.Item>
                <h4><b>ENVIOS GRATIS </b>DESDE $29.999</h4>
            </Carousel.Item>
            <Carousel.Item>
                <h4>3 CUOTAS <b>SIN INTERÉS</b></h4>  
            </Carousel.Item>
            <Carousel.Item>
                <a href="https://www.instagram.com/uberwindensportwear/" target="_blank"><i className="fa-brands fa-instagram fa-fade"></i></a>
                <a href="https://www.facebook.com/voleyventas6" target="_blank"><i className="fa-brands fa-facebook fa-fade"></i></a>
                <a href="https://chatwith.io/es/s/uberwinden" target="_blank"><i className="fa-brands fa-whatsapp fa-fade"></i></a>
                <a href="mailto:uberwindensportwear@outlook.es?Subject=Te%20contancto%20desde%20la%20web" target="_blank"><i className="fa-regular fa-envelope fa-fade"></i></a>
            </Carousel.Item>
        </Carousel>
    )
}