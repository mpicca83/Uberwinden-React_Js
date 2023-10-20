import { Link } from 'react-router-dom'
import './Footer.css'

export const Footer = () => {

    return(
        <div className="footerContenedor">
            <ul className="footerContenedor-seccion">
                <li><h5>Tienda online</h5></li>
                <li><Link to={'/category/HOMBRE'}>Hombre</Link></li>
                <li><Link to={'/category/MUJER'}>Mujer</Link></li>
                <li><Link to={'/category/CLUBES'}>Merchandising clubes</Link></li>
                <li><Link to={'/pagina_en_mantenimiento'}>Personaliza tu indumentaria</Link></li>
            </ul>
            <ul className="footerContenedor-seccion">
                <li><h5>Ayuda</h5></li>
                <li><Link to={'/pagina_en_mantenimiento'}>Preguntas frecuentes</Link></li> 
                <li><Link to={'/pagina_en_mantenimiento'}>Politica de envíos</Link></li>
                <li><Link to={'/pagina_en_mantenimiento'}>Cambio y devoluciones</Link></li> 
                <li><Link to={'/pagina_en_mantenimiento'}>Medios de pago</Link></li>
                <li><Link to={'/pagina_en_mantenimiento'}>Cancelación de compra</Link></li>
            </ul>
            <ul className="footerContenedor-seccion">
                <li><h5>Acerca de Überwinden</h5></li>
                <li><Link to={'/nosotros'}>Quines somos</Link></li>
                <li><Link to={'/eventos'}>Eventos</Link></li>
                <li><Link to={'/pagina_en_mantenimiento'}>Tiendas</Link></li>
            </ul>
            <ul className="footerContenedor-seccion">
                <li><h5>Usuario</h5></li>
                <li><Link to={'/pagina_en_mantenimiento'}>Iniciar sesión</Link></li>
                <li><Link to={'/pagina_en_mantenimiento'}>Registrate</Link></li>
            </ul>
            <ul className="footerContenedor-seccion iconos">
                <li><a className='aFooter' href="https://www.instagram.com/uberwindensportwear/" target="_blank"><i className="fa-brands fa-instagram icono instagram"></i></a></li>
                <li><a className='aFooter' href="https://www.facebook.com/voleyventas6" target="_blank"><i className="fa-brands fa-facebook icono facebook"></i></a></li>
                <li><a className='aFooter' href="https://chatwith.io/es/s/uberwinden" target="_blank"><i className="fa-brands fa-whatsapp icono whatsapp"></i></a></li>
                <li><a className='aFooter' href="mailto:uberwindensportwear@outlook.es?Subject=Te%20contancto%20desde%20la%20web" target="_blank"><i className="fa-regular fa-envelope icono email"></i></a></li>
            </ul>
            <h6>&copy; 2023 ÜBERWINDEN Todos los derechos reservados</h6>
        </div>
    )
}