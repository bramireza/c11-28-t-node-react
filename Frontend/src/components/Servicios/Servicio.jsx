/* eslint-disable react/prop-types */
const Servicio = ({servicio})=>{
    return <section>
        <div className="p-3 d-flex flex-column align-items-center">
            <img src={servicio.img} className="w-25 img-fluid" alt={servicio.titulo} />
            <h3>{servicio.titulo}</h3>
            <p>{servicio.descripcion}</p>
        </div>
</section>

}
export default Servicio;