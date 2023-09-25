import './ItemListContainer.css'
import { useParams, useNavigate } from 'react-router-dom'
import { productos } from '../../data/productos.js'
import { Item, Layout} from '..'
import { useEffect, useState } from 'react'
import { alertaSimple } from '../../helpers/alertas'


export const ItemListContainer = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [products, setProducts] = useState([])
    const navigate = useNavigate()
    
    // let productoFiltrado = []

    let {categoryId} = useParams()
    categoryId || (categoryId = "TODOS")

    const datos = async () => {
        return await new Promise((resolve) => {
            setTimeout(() => {
                resolve(productos)
            }, 1500)
        })
    }

    useEffect( ()=>{
        datos()
        .then((res) =>{
            setProducts(res)
            setIsLoading(false)
        })
        .catch(err => console.log(err))
    },[])

    const productoFiltrado = categoryId === 'TODOS' || categoryId === 'TODO'
     ?  products
     :  products.filter((producto) => {
        let cat = categoryId ? producto.categoria.includes(categoryId) : true
        cat += categoryId ? producto.color.includes(categoryId) : true
        cat += categoryId ? producto.club.includes(categoryId) : true
        return cat
        })

    return(
        <Layout>
            <div className='itemListContainer'>
                <h1>Überwinden - Ropa deportiva</h1>
                <h5>Listado de Productos</h5>
                <span>Filtro: {categoryId}</span>
                {
                    isLoading
                        ? <div className='isLoading'>Cargando . . .<div className='loading'></div></div>
                        : productoFiltrado.length === 0
                            ? <div>{alertaSimple('', 'No se encontraron resultados.', 'error', 3000) + navigate('/')}</div>
                            : <div className='itemList'>
                                {
                                    productoFiltrado.map((producto) => (
                                        <Item
                                            key={producto.id}
                                            id={producto.id}
                                            titulo={producto.titulo}
                                            color={producto.color}
                                            talle={producto.talle}
                                            precio={producto.precio}
                                            imagen={producto.imagen}z
                                        />
                                    ))
                                }
                            </div>
                }
            </div>
        </Layout>
    )
}