import './CartWidget.css'
import { Nav } from 'react-bootstrap';

export const CartWidget = () => {

    return(
        <Nav.Link href="#Carrito">
            <i className="fa-sharp fa-solid fa-cart-shopping">
                <span id="totalCarrito">5</span>
            </i>
        </Nav.Link>
    )
}