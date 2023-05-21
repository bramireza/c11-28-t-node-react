/* eslint-disable react/prop-types */
const Servicios = (props)=>{   
     
   return (
    <section>
        <div className="p-3 d-flex flex-column align-items-center">
            <img src="https://www.freeiconspng.com/uploads/doctor-logo-png-photo-5.png" className="w-25 img-fluid" alt="img" />
            <h3>{props.servicio}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae enim architecto ipsum consequuntur aliquam, dolor natus fuga mollitia. Nihil pariatur temporibus quia? Ullam, pariatur dolorem. Totam officia vero cupiditate praesentium?</p>
        </div>
    </section>
   );
    
}
export default Servicios;