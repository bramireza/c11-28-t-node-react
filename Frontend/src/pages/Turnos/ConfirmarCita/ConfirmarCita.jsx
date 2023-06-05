import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";

function ConfirmarTurnos({ appointment }) {
  const navigate = useNavigate();
  const [dataAppointment, setDataAppointment] = useState(appointment);
  const [loading, setLoading] = useState(true);
  const [formattedDate, setFormattedDate] = useState("");
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
    timeZone: "America/Argentina/Buenos_Aires", // Cambia esto a la zona horaria que necesites
  };

  useEffect(() => {
    const date = new Date(dataAppointment?.appointmentDate);
    setFormattedDate(date.toLocaleDateString("es-AR", options));
  }, [dataAppointment]);

  console.log("se ve en confirmar turno");
  console.log("medico name en confirmar");

  function confirmacion() {
    Swal.fire({
      title: "¡Tu turno médico ha sido confirmado!",
      text: "Recibirás el comprobante en tu email. Recuerda llevarlo a tu cita.",
      width: 600,
      confirmButtonText: "Ver mis Turnos",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        navigate("/seccion");
      }
    });
  }

  return (
    <div>
      {loading ? (
        <section className="container p-3">
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
                  <p className="card-text">{dataAppointment?.specialty.name}</p>
                  <p className="card-text">{dataAppointment?.doctor.name}</p>
                  <p className="card-text">{formattedDate} hs</p>
                </div>
              </div>
            </div>
          </div>
          <p>Texto sobre cancelaciones y demás</p>
          <div className="container d-flex flex-column">
            <button
              className="btn btn-primary my-2 mb-3"
              onClick={confirmacion}
            >
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
        </section>
      ) : (
        ""
      )}
    </div>
  );
}

export default ConfirmarTurnos;
