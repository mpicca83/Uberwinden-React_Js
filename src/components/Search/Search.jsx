import './Search.css'
import {Form, Button} from 'react-bootstrap';

export const Search = () => {

    return(
        <Form className="d-flex inputBuscar" >
            <Form.Control
              type="search"
              placeholder="Buscar"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Buscar</Button>
        </Form>
    )
}