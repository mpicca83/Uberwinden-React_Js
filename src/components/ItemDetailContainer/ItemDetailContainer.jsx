import './ItemDetailContainer.css'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ItemDetail, Layout } from '..'
import { alertaSimple } from '../../helpers/alertas'
import { db } from '../../db/db'
import { doc, getDoc } from 'firebase/firestore'

export const ItemDetailContainer = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [product, setProduct] = useState([])
    const {itemId} = useParams()
    const navigate = useNavigate()

    useEffect( ()=>{

        const productRef = doc(db, 'productos', itemId)

        getDoc(productRef)
        .then((res) =>{
            if(res.exists()){
                const productData = {id: res.id, ...res.data()}
                setProduct(productData)
                setIsLoading(false)
            }else{
                alertaSimple('', 'No se encontraron resultados.', 'error', 3000) 
                navigate('/')
            }
        })
        .catch(err => console.log(err))
        
    },[itemId])

    return(
        <Layout>
            <h2 className='tituloDetail'>Detalle del producto</h2>
            {
                isLoading
                    ? <div className='isLoading'>Cargando . . .<div className='loading'></div></div>
                    : <div className='itemDetail'>
                        <ItemDetail {...product} />
                    </div>
            }
        </Layout>
    )
}