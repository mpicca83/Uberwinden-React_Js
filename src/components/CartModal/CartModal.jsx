import './CartModal.css'
import { useContext, useEffect } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { CartCount } from '..'
import { CartCtx } from "../../context/CartContext"
import { Link } from 'react-router-dom'

export const CartModal = () => {

    const { cart, setShow, show, cant, setCant} = useContext (CartCtx)

    const handleClose = () => setShow(false)

    useEffect(() => {
        const totalAcount = cart.reduce((acc, item) => acc + (item.quantity * item.precio), 0)
        setCant(totalAcount)
    },)
    
    return(
        <>
            <Modal show={show} onHide={handleClose} size="lg">

                <Modal.Header closeButton>
                    <Modal.Title>Carrito de Compras</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div className="modalTitulo">
                        <div className="tituloProducto">Producto</div>
                        <div>Cantidad</div>
                        <div>Precio Unitario</div>
                        <div>Total</div>
                        <div></div>
                    </div>
                    <div>
                        {
                            cart.map(product => (
                                <div key={product.id}>
                                    <CartCount  product={product}/>
                                </div>
                            ))
                        }
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <p>Importe total: ${cant}</p>
                    <Button variant="secondary" onClick={handleClose}>Seguir Comprando</Button>
                    <Link to='/cart'>
                        <Button variant="primary" onClick={handleClose}>Iniciar Pago</Button>
                    </Link>
                </Modal.Footer>

            </Modal>
        </>
    )
}
