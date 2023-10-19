import { useState, useEffect } from 'react'
import { db } from '../../db/db'
import { collection, getDocs } from 'firebase/firestore'
import './Eventos.css'

export const Eventos = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [eventos, setEventos] = useState([])

    useEffect( ()=>{
        
        const listadoEventos = collection(db, 'eventos')

        getDocs(listadoEventos)
        .then((res) =>{
            const eventosData = res.docs.map((eventosDoc)=> (
                {id: eventosDoc.id, ...eventosDoc.data()}
            ))
            eventosData.sort((a, b) => b.orden - a.orden)

            setEventos(eventosData)
            setIsLoading(false)
        })
        .catch(err => console.log(err))
    },[])

    return(
        <>
            <h2 className='tituloEvento'>EVENTOS</h2>
            <section className='eventos'>
                {
                    isLoading
                        ? <div className='isLoading'>Cargando . . .<div className='loading'></div></div>
                        : eventos.map((evento) =>
                            <div key={evento.id} className='eventosSeccion'>
                                <div className="eventosSeccion-parrafo">
                                    <h4>{evento.titulo}</h4>
                                    <p>{evento.descripcion}</p>
                                </div>
                                <div className="eventosSeccion-multimedia">
                                    <img src={evento.foto1} alt={evento.altFoto1} />
                                </div>
                                {
                                    evento.categoria === 'foto' &&
                                    <div className="eventosSeccion-multimedia">
                                        <img src={evento.foto2} alt={evento.altFoto2} />
                                    </div>
                                }
                                {
                                    evento.categoria === 'mixto' &&
                                    <div className="eventosSeccion-multimedia">
                                        <video src={evento.video} controls autoPlay loop muted alt={evento.altVideo} ></video>
                                    </div>
                                }
                            </div>
                        )
                }
            </section>
        </>
    )
}