import './ItemDetail.css'
import {Link} from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { useContext } from 'react'
import { CartCtx } from '../../context/CartContext'
import { useCounter } from '../../hooks/useCounter'

export const ItemDetail = ({id, titulo, descripcion, color, talle, imagen, precio, stock}) => {

    const { addToCart, cart } = useContext(CartCtx)
    
    // Verifico si existe este producto en el carrito para obtener el quantity
    const productIndex = cart.findIndex(product => product.id === id)
    const quantity = productIndex !== -1 ? cart[productIndex].quantity : 1

    const { count, increment, decrement } = useCounter(id, stock, quantity)
 
    const goBack = () => window.history.back() //Para regresar a la paguna anterior

    return(
        <div className="item-detail">
            <img className="item-image" src={imagen} alt={descripcion} />
            <div className="item-info">
                <h3 className="item-name">{titulo}</h3>
                <span className="item-description">{descripcion}</span>
                <span className="item-info-text">Color: {color}</span>
                <span className="item-info-text">Talle: {talle}</span>
                <span className="item-info-text">Stock: {stock}</span>
                <span className="item-price">Precio ${precio}</span>
                <span className='item-cuotas'>3 cuotas sin interés de ${(precio/3).toFixed(2)}</span>
                <div className="item-addToCart">
                    <div className="item-count">
                        <Button onClick={decrement}>-</Button>
                        <span>{count}</span>
                        <Button onClick={increment}>+</Button>
                    </div>
                    <Button className="item-button" variant="primary" onClick={()=>addToCart(id, count)}>Agregar al Carrito</Button>
                </div>
                <Link onClick={goBack} className="item-volver">Volver</Link>
            </div>
        </div>
    )
}