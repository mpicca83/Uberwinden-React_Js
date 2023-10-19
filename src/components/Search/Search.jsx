import './Search.css'
import {Form, Button} from 'react-bootstrap'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Search = () => {
    const [searchCategory, setSearchCategory] = useState('')
    const navigate = useNavigate()

    const handleSearch = () => {
        let busqueda = ''
        searchCategory === ''
            ? navigate(`/`)
            : (busqueda = searchCategory.toUpperCase(),
                navigate(`/category/${busqueda}`)
            )
        setSearchCategory('')
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
          handleSearch()
        }
    }

    return(
        <Form className="d-flex inputBuscar" onSubmit={(e) => e.preventDefault()} >
            <Form.Control
                type="search"
                placeholder="Buscar"
                className="me-2"
                aria-label="Search"
                value={searchCategory}
                onChange={(e) => setSearchCategory(e.target.value)}
                onKeyDown={handleKeyPress}
            />
            <Button variant="outline-success" onClick={handleSearch}>Buscar</Button>
        </Form>
    )
}

