import './ItemDetail.css'
import {Link} from 'react-router-dom'
import { Button } from 'react-bootstrap'

export const ItemDetail = ({titulo, descripcion, color, talle, imagen, precio, stock}) => {

    const goBack = () => {
        window.history.back() // volver atrás en la historia del navegador
    }

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
                <Button className="item-button" variant="primary">  Agregar al Carrito</Button>
                <Link to="#" onClick={goBack} className="item-volver">Volver</Link>
            </div>
        </div>
    )
}