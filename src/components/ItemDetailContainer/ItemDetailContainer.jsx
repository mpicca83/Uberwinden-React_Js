import './ItemDetailContainer.css'
import { productos } from '../../data/productos.js'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ItemDetail, Layout } from '..'


export const ItemDetailContainer = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [product, setProduct] = useState([])
    const {itemId} = useParams()

    const datos = async () => {
        return await new Promise((resolve) => {
            setTimeout(() => {
                resolve(productos)
            }, 500)
        })
    }

    useEffect( ()=>{
        datos()
        .then((res) =>{
            setProduct(res)
            setIsLoading(false)
        })
        .catch(err => console.log(err))
    },[])

    const item = product.find((producto)=>producto.id == parseInt(itemId))
    
    return(
        <Layout>
            <h2 className='tituloDetail'>Detalle del producto</h2>
            {
                isLoading
                    ? <div className='isLoading'>Cargando . . .<div className='loading'></div></div>
                    : <div className='itemDetail'>
                        <ItemDetail {...item} />
                    </div>
            }
        </Layout>
    )
}