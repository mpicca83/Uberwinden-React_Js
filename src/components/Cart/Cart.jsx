import { useContext, useState, useEffect } from "react"
import { CartCtx } from "../../context/CartContext"
import { Table } from 'react-bootstrap'
import { Box, TextField,FormControl, InputLabel, Select, MenuItem, Button, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { addDoc, doc, updateDoc } from "firebase/firestore"
import { orderCollections, db } from "../../db/db"
import { alertaSimple } from "../../helpers/alertas"
import './Cart.css'

export const Cart = () => {
    const { cart, setCart, btnEliminar, cant } = useContext (CartCtx)
    const [cuotas, setCuotas] = useState('')
    const [formData, setFormData] = useState({
        nombre: '',
        direccion: '',
        provincia: '',
        localidad: '',
        telefono: '',
        mail: '',
        opcionDePago: ''
    })

    const tresCuotas = Math.floor(cant / 3)
    const seisCuotas = Math.floor(cant * 1.35 / 6)
    const doceCuotas = Math.floor(cant * 1.70 / 12)

    const handleChange = (event) => {
        setCuotas(event.target.value)
        setFormData({...formData, opcionDePago: event.target.value})
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData({...formData, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault() 
        const order = {
            fecha: new Date().toLocaleString(),
            cliente: {...formData},
            productos: {...cart},
            total: cant
        }
        addDoc(orderCollections, order)
        .then((res)=> {
            alertaSimple('Mugras gracias por su compra.', `La misma fue registrada bajo la orden n° ${res.id}`, 'success', '',true)
            
            cart.map((product)=>{
                const updateStock = doc(db,'productos', product.id)
                const newStock = product.stock - product.quantity
                updateDoc(updateStock, {stock: newStock})
            })

            setCart([])
        })
        .catch((err)=> console.log(err))
    }

    useEffect(()=>{
        setCuotas('')
    },[cart])

    return(
        <>
            {
                !cart.length 
                ? <h2 className="cartVacio">No tienes productos en el carrito</h2>
                : <div>
                    <h2>Carrito de Compras</h2>
                    <div className='cart'>
                        <Table className='cartSeccion tabla' striped >
                            <thead>
                                <tr>
                                    <th className="borrar"></th>
                                    <th className="borrar"></th>
                                    <th>Producto</th>
                                    <th>Cantidad</th>
                                    <th>Precio Unitario</th>
                                    <th>Total</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cart.map((product, index) => {
                                        index ++
                                        return(
                                        <tr key={product.id}> 
                                            <td className="borrar">{index}</td>
                                            <td className="borrar"><img src={product.imagen} alt={product.titulo}/></td>
                                            <td>{product.titulo}</td>
                                            <td>{product.quantity}</td>
                                            <td>${product.precio}</td>
                                            <td>${product.precio * product.quantity}</td>
                                            <td ><IconButton aria-label="delete" size="large" color="error" onClick={() => btnEliminar(product.id)}><DeleteIcon /></IconButton></td>
                                        </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </Table>
                        <section className='cartSeccion'>
                            <h4 className="importeTotalMovil">IMPORTE TOTAL: $ {cant.toLocaleString()}</h4>
                            <Box component="form" className='form' onSubmit={handleSubmit}>
                                
                                <div className='formSeccion'>
                                    <p>Datos de facturación y envío</p>
                                    <TextField name="nombre" value={formData.nombre} onChange={handleInputChange} label="Apellido y Nombre" variant="standard" margin="dense" fullWidth required/>
                                    <TextField name="direccion" value={formData.direccion} onChange={handleInputChange} label="Calle y número" variant="standard" margin="dense" fullWidth required/>
                                    <TextField name="provincia" value={formData.provincia} onChange={handleInputChange} label="Provincia" variant="standard" margin="dense" fullWidth required/>
                                    <TextField name="localidad" value={formData.localidad} onChange={handleInputChange} label="Localidad" variant="standard" margin="dense" fullWidth required/>
                                    <TextField name="telefono" value={formData.telefono} onChange={handleInputChange} label="Teléfono" variant="standard" inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} margin="dense" fullWidth required/>
                                    <TextField name="mail" value={formData.mail} onChange={handleInputChange} label="Email" variant="standard" type="email" margin="dense" fullWidth required/>
                                    <h4 className="importeTotalDesktop">IMPORTE TOTAL: $ {cant.toLocaleString()}</h4>
                                </div>
                                <div className='formSeccion' >
                                    <p>Datos de pago</p>
                                    <TextField id="" label="Número de Tarjeta" variant="standard" inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} margin="dense" fullWidth required/>
                                    <TextField id="" label="Fecha de Vencimiento" variant="standard" margin="dense" fullWidth required/>
                                    <TextField id="" label="CVV" variant="standard" inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} margin="dense" fullWidth required/>
                                    <TextField id="" label="Nombre del Titular de la Tarjeta" variant="standard" margin="dense" fullWidth required/>
                                    <TextField id="" label="DNI" variant="standard" inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} margin="dense" fullWidth required/>
                                    <FormControl fullWidth size="small" margin="normal">
                                        <InputLabel className="fontSize" id="opcionCuotas">Opciones de Cuotas:</InputLabel>
                                        <Select
                                            className="fontSize"
                                            labelId="opcionCuotas"
                                            id=""
                                            defaultValue={`1 Cuota de $${cant.toLocaleString()} (Sin Interés)`}
                                            value={cuotas}
                                            label="Opciones de cuotas:"
                                            onChange={handleChange}
                                        >
                                            <MenuItem className="fontSize" value={`1 Cuota de $${cant.toLocaleString()} (Sin Interés)`}>1 Cuota de ${cant.toLocaleString()} "Sin Interés"</MenuItem>
                                            <MenuItem className="fontSize" value={`3 Cuotas de $${tresCuotas.toLocaleString()} (Sin Interés)`}>3 Cuotas de ${tresCuotas.toLocaleString()} "Sin Interés"</MenuItem>
                                            <MenuItem className="fontSize" value={`6 Cuotas de $${seisCuotas.toLocaleString()} (Interés del 35%)`}>6 Cuotas de ${seisCuotas.toLocaleString()} (Interés del 35%)</MenuItem>
                                            <MenuItem className="fontSize" value={`12 Cuotas de $${doceCuotas.toLocaleString()} (Interés del 70%)`}>12 Cuotas de ${doceCuotas.toLocaleString()} (Interés del 70%)</MenuItem>
                                        </Select>
                                        <Button variant="contained" type="submit">Realizar Pago</Button>

                                    </FormControl>
                                </div>
                            </Box>
                        </section>
                    </div>
                </div>
            }
        </>
    )
}