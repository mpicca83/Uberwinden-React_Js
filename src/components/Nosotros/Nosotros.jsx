import './Nosotros.css'

export const Nosotros = () => {

    return(
        <>
            <h2 className="tituloNosotros">NOSOTROS</h2>
            <div className="nosotros">
                <section className="nosotrosTexto">
                    <p>Überwinden es una marca familiar de indumentaria deportiva, de origen argentino y estilo europeo fusionadas con creatividad e innovación Cada prenda ha sido diseñada originalmente y es exclusiva de la marca de Überwinden. Al ser una marca de ropa deportiva, utilizamos tejidos técnicos y cómodos que permitan libertad de movimientos y adecuada transpiración pero sin renunciar al diseño, color elegancia y personalidad de las prendas Todas las fases de la producción, desde la elección de los tejidos, el diseño y la confección de las prendas, la fabricación y los procesos de personalización se hacen en Argentina bajo nuestro control. Trabajamos con materiales de primera calidad y con proveedores de confianza con responsabilidad social corporativa y vocación de cuidado del medio ambiente Nuestra linea de ropa deportiva Überwinden es apta para competición aunque por su diseño, comodidad y color no nos resistimos a utilizarlos tambien en el entrenamiento habitual o como prendas de vestir sport.</p>
                </section>
                <section className="nosotrosImagen">
                    <img src="./src/assets/images/fotoNosotros.png" alt="Logo Uberwinden con lobo de fondo "/>
                </section>
            </div>
        </>
    )
}