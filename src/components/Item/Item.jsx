import './Item.css'
import { Card, ListGroup, Button} from 'react-bootstrap'
import { Link } from "react-router-dom"


export const Item = ({id, titulo, color, talle, precio, imagen}) =>{


    return(
      <Card className='p-2 shadow-lg'>
        <Card.Img variant="top" src= {imagen} alt={`Foto de ${titulo}`} />
        <Card.Body>
          <Card.Title>{titulo}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Talle: {talle}</ListGroup.Item>
          <ListGroup.Item>Color: {color}</ListGroup.Item>
          <ListGroup.Item>Precio: ${precio}</ListGroup.Item>
        </ListGroup>
        <Card.Body className='text-center'>
          <Link to={`/item/${id}`} className='linkDetalle'>Detalles</Link>
          <Button className="botonAgregar" variant="primary">  Agregar al Carrito</Button>
          
        </Card.Body>
      </Card>
    )
}