import { createContext, useEffect, useState } from 'react'
import { alertaSimple, alertaCompuesta, notificacion } from '../helpers/alertas'
import { ToastContainer } from 'react-toastify'
export const CartCtx = createContext()

export const CartContext = ({children}) => {

    const [products, setProducts] = useState([])
    const [cant, setCant] = useState(0)
    const [show, setShow] = useState(false);
    const [cart, setCart] = useState(()=> {
        const storedCart = localStorage.getItem('cart')
        return storedCart ? JSON.parse(storedCart) : []
    })

    const addToCart = (idProduct, countProduct) => {
        const findProduct = products.find(product => product.id === idProduct)

        if (findProduct.stock > 0) {
            const productIndex = cart.findIndex(product => product.id === idProduct)
            
            if (productIndex !== -1) {
                const updatedCount = countProduct !== false && countProduct < cart[productIndex].quantity
                if (cart[productIndex].quantity < findProduct.stock || updatedCount) {
                    const updatedProducts = [...cart]
                    countProduct ? updatedProducts[productIndex].quantity = countProduct : updatedProducts[productIndex].quantity += 1
                    setCart(updatedProducts)
                    updatedCount ? notificacion('El producto fue actualizado!') : notificacion('El producto se agregó al carrito!')
                } else {
                    alertaSimple('Parece que nos quedamos sin...','No hay suficiente stock disponible para este producto', 'error', 2000)
                }
            } else {
                    const newProduct = countProduct ? {...findProduct, quantity: countProduct} : {...findProduct, quantity: 1}
                    setCart([...cart, newProduct])
                    notificacion('El producto se agregó al carrito!')
            }
        } else {
            alertaSimple('Sin Stock...', 'Este producto está agotado.', 'error', 2000)
        }
    }

    const btnEliminar = (idProduct) => {
        alertaCompuesta(
            'Eliminar Producto',
            '¿Confirma la eliminación del producto?',
            'Eliminar',
            'El producto fue eliminado.',
            () => eliminateToCart(idProduct))
    }

    const eliminateToCart = (idProduct) => {
        const updatedCart = cart.filter(product => product.id !== idProduct)
        setCart(updatedCart)
    }
    
    useEffect(()=>{
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    return(
        <CartCtx.Provider value={{products, setProducts, cart, setCart, cant, setCant, addToCart, show, setShow, btnEliminar}}>
            {children}
            <ToastContainer/>
        </CartCtx.Provider>
    )
}