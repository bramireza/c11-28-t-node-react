/* eslint-disable react/prop-types */
import Servicio from "./Servicio.jsx";


const ListaServicios = ()=>{   
        const servicios = [
            {
            img:'https://www.freeiconspng.com/uploads/doctor-logo-png-photo-5.png',
            titulo:'Servicio 1',
            descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae enim architecto ipsum consequuntur aliquam, dolor natus fuga mollitia. Nihil pariatur temporibus quia? Ullam, pariatur dolorem. Totam officia vero cupiditate praesentium?'
        },
        {
            img:'https://www.freeiconspng.com/uploads/doctor-logo-png-photo-5.png',
            titulo:'Servicio 2',
            descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae enim architecto ipsum consequuntur aliquam, dolor natus fuga mollitia. Nihil pariatur temporibus quia? Ullam, pariatur dolorem. Totam officia vero cupiditate praesentium?'
        },
        {
            img:'https://www.freeiconspng.com/uploads/doctor-logo-png-photo-5.png',
            titulo:'Servicio 3',
            descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae enim architecto ipsum consequuntur aliquam, dolor natus fuga mollitia. Nihil pariatur temporibus quia? Ullam, pariatur dolorem. Totam officia vero cupiditate praesentium?'
        }
        ]
        
   return <>
   
    <div className="p-3">
            <h2 className="fw-bolder">Servicios</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, quidem, cum dolor at nisi ut vel reprehenderit repellendus expedita, voluptatem voluptates cupiditate. A fugit quasi laudantium sint ratione, neque officia!</p>
        
        </div>
        {servicios.map((data,index)=>{
            return <Servicio 
                key={index}
                servicio={data}
            />
        })}
                
    </>
}
export default ListaServicios;