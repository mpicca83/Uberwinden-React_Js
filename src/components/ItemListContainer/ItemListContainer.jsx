import './ItemListContainer.css'
import { useParams, useNavigate } from 'react-router-dom'
import { ItemList, Layout} from '..'
import { useEffect, useState, useContext } from 'react'
import { alertaSimple } from '../../helpers/alertas'
import { CartCtx } from '../../context/CartContext'
import { db } from '../../db/db'
import { collection, query, where, getDocs, or} from 'firebase/firestore'

export const ItemListContainer = () => {

    const [isLoading, setIsLoading] = useState(true)
    const {products, setProducts} = useContext(CartCtx)
    const navigate = useNavigate()
    const {categoryId} = useParams()

    useEffect( ()=>{

        const productRef = collection(db, 'productos')
        const categoryQuery = categoryId && query(
            productRef,
            or (where('categoria', "array-contains", categoryId),
            where('color', "==", categoryId),
            where('club', "==", categoryId))
        )

        const queryRef = categoryId ? categoryQuery : productRef
        
        getDocs(queryRef)
        .then((res) =>{
            const productData = res.docs.map((productDoc)=> (
                {id: productDoc.id, ...productDoc.data()}
            ))
            
            if (productData.length === 0){
                alertaSimple('', 'No se encontraron resultados.', 'error', 3000) 
                navigate('/')

            }else{
                setProducts(productData)
                setIsLoading(false)
            }
        })
        .catch(err => console.log(err))
    },[categoryId])

    return(
        <Layout>
            <div className='itemListContainer'>
                <h1>Überwinden - Ropa deportiva</h1>
                <h5>Listado de Productos</h5>
                <span>Filtro: {categoryId ? categoryId : 'TODOS'}</span>
                {
                    isLoading
                        ? <div className='isLoading'>Cargando . . .<div className='loading'></div></div>
                        : <div className='itemList'>
                            {
                                products.map((producto) => (
                                    <ItemList
                                        key={producto.id}
                                        id={producto.id}
                                        titulo={producto.titulo}
                                        color={producto.color}
                                        talle={producto.talle}
                                        precio={producto.precio}
                                        imagen={producto.imagen}
                                    />
                                ))
                            }
                        </div>
                }
            </div>
        </Layout>
    )
}
