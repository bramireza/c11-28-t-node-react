import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useCartContext } from "../Contexto/Contexto";
import { useState } from "react";
import Seccion from "../../FlujoPaciente/Seccion/Seccion";


function ConfirmarTurnos({appointment}) {
 console.log("appointment", appointment)
  
  const { especialidad } = useCartContext();
  const [loading,setLoading]=useState(true)
  const [formattedDate, setFormattedDate] = useState("");
  console.log("se ve en confirmar turno" , especialidad);
  console.log("medico name en confirmar");
  // console.log(medicoName);

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
    timeZone: "America/Argentina/Buenos_Aires", // Cambia esto a la zona horaria que necesites
};
  
  const date = new Date(appointment.appointmentDate);
  setFormattedDate(date.toLocaleDateString("es-AR", options));


  function confirmacion() {
    Swal.fire({
      title: "¡Tu turno médico ha sido confirmado!",
      text: "Recibirás el comprobante en tu email. Recuerda llevarlo a tu cita.",
      width: 600,
      confirmButtonText: "Ver mis Turnos",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        setLoading(false)
        
      }
    });
  }

  return (
    <div>

{/* {appointment.specialty.name}
{appointment.doctor.name}
{formattedDate} */}

      {/* {especialidad}
            {medicoName}

            {formattedDate}
           confirmar turno */}

      {/* {loading ? <section className="container p-3">
        <h3>3. Confirmar Turno</h3>
        <p>Forem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title bg-body-secondary text-center">
              Información del Turno
            </h5>
            <div className="d-flex row">
              <div className="col">
                <p className="card-text">Especialidad:</p>
                <p className="card-text">Profesional:</p>
                <p className="card-text">Fecha y Hora:</p>
                
              </div>
              <div className="col">
                <p className="card-text">{appointment.specialty.name}</p>
                <p className="card-text">{appointment.doctor.name}</p>
                <p className="card-text">{appointment.appointmentDate} hs</p>
                
              </div>
            </div>
          </div>
        </div>
        <p>Texto sobre cancelaciones y demás</p>
        <div className="container d-flex flex-column">
          <button className="btn btn-primary my-2 mb-3" onClick={confirmacion}>
            Confirmar turno
          </button>
          <Link
            to="/turnos-especialidad"
            className="btn btn-outline-primary"
            href="#"
          >
            Cancelar
          </Link>
        </div>
      </section> : ""} */}
      {/* {loading?"":<Seccion/>} */}
      
    </div>
  );
}

export default ConfirmarTurnos;
