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
            <p>
            Sunt non aliquam perspiciatis tempora saepe. Nemo modi quae repudiandae corrupti iusto asperiores totam exercitationem ad nisi aperiam, quasi incidunt aut quod quaerat quibusdam vero labore quidem ut tempore quis?
            Officiis, odio vero! Iure dolore quibusdam a voluptate adipisci tempore illum totam. Quos soluta dolorum quae distinctio harum voluptatem in minus dicta esse reprehenderit neque sunt, odio sint, laudantium impedit?</p>
        
        </div>
        <div>
        {servicios.map((data,index)=>{
            return  <Servicio 
                    key={index}
                    servicio={data}
                />
                
                
        })}

        </div>
                
    </>
}
export default ListaServicios;