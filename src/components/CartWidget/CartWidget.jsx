import { useContext } from 'react'
import { CartCtx } from '../../context/CartContext'
import './CartWidget.css'

export const CartWidget = () => {

    const { cart, setShow } = useContext(CartCtx)

    let cant = cart.reduce((acc, item) => acc + item.quantity, 0 )
    cant == 0 && (cant = null)

    const handleShow =()=> setShow(true)

    return(
        <i className="fa-sharp fa-solid fa-cart-shopping" onClick={handleShow}>
            <span id="totalCarrito">{cant}</span>
        </i>
    )
}