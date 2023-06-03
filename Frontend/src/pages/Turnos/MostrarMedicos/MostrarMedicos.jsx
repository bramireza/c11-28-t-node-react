import React, { useEffect, useState } from "react";
import "./MostrarMedicos.css";
import { Link } from "react-router-dom";
import { api } from "../../../utilities/axios";
import { useCartContext } from "../Contexto/Contexto";

function ModalMedicos({ med, idEspecialidad }) {
  const [especialidad, setEspecialidad] = useState("");
  const { recolectarDatos } = useCartContext();

  useEffect(() => {
    if (idEspecialidad) {
      recolectarDatos(idEspecialidad)
      api()
        .get("/specialty/" + idEspecialidad)
        .then((response) => setEspecialidad(response.data.specialty.name))        
        .catch((error) => console.log(error));
      //setEspecialidad();
    }
  }, [idEspecialidad]);
  return (
    <div>
      <Link to={`/fecha-turno/${med._id}`}>
        <div className="modal-medicos">
          <span className="imagen-modal">imagen</span>
          <div className="contenido-medicos">
            <h6>Dr. {med.name}</h6>

            {idEspecialidad ? (
              <p>Especialidad: {especialidad}</p>
            ) : (
              <p>
                Especialidad:
                {med.specialties.map((esp) => (
                  <li key={esp._id}>{esp.name}</li>
                ))}
              </p>
            )}
            {/* <p>Dias y Horarios</p> */}
            {/* <p>indefinido por el momento</p> */}
            <p className="matricula">N° de Matricula: {med.license}</p>
            <button className="p-1">Ver Agenda</button>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ModalMedicos;

/*<div className="modal">
<span className='imagen-modal'>imagen</span>
<div>
    <h2>medico</h2>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
</div>
</div>*/

/*/doctor/id/calendar/${aca va el id del doctor?}*/