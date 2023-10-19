import { useEffect, useContext } from 'react';
import { useCounter } from '../../hooks/useCounter'
import { Button } from 'react-bootstrap'
import { CartCtx } from "../../context/CartContext"
import { IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

export const CartCount = ({product}) => {

    const { count, increment, decrement } = useCounter(product.id, product.stock, product.quantity)
    const { btnEliminar, cart, setCart } = useContext (CartCtx)

    useEffect (()=>{
        const updatedCart = cart.map(cartProduct => cartProduct.id === product.id ? {...cartProduct, quantity:count} : cartProduct )
        setCart(updatedCart)
    }, [count])

    return(
        <div className='modalProducto'>
            <hr></hr>
            <span className="producto">{product.titulo}</span>
            <div className="cantidad">
                <Button onClick={decrement}>-</Button>
                <span>{count}</span>
                <Button onClick={increment}>+</Button>
            </div>
            <span className='precioUnitario'>${product.precio}</span>
            <span className='totalProducto'>${product.precio * count}</span>
            <IconButton aria-label="delete" size="large" color="error" onClick={()=>btnEliminar(product.id)}><DeleteIcon /></IconButton>
        </div>
    )
}