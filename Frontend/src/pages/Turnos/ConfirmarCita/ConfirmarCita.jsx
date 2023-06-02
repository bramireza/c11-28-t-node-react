import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useCartContext } from "../Contexto/Contexto";
import { useState } from "react";
import Seccion from "../../FlujoPaciente/Seccion/Seccion";


function ConfirmarTurnos({ formattedDate, medicoName, appointment }) {
  const { especialidad } = useCartContext();
  const [loading,setLoading]=useState(true)
  console.log("se ve en confirmar turno" + especialidad);
  console.log("medico name en confirmar");
  console.log(medicoName);

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
      {/* {especialidad}
            {medicoName}

            {formattedDate}
           confirmar turno */}

      {loading ? <section className="container p-3">
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
                {/* <p className="card-text">Lugar</p> */}
              </div>
              <div className="col">
                <p className="card-text">{especialidad}</p>
                <p className="card-text">{medicoName}</p>
                <p className="card-text">{formattedDate} hs</p>
                {/* <p className="card-text">info lugar</p> */}
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
      </section> : ""}
      {loading?"":<Seccion/>}
      
    </div>
  );
}

export default ConfirmarTurnos;
