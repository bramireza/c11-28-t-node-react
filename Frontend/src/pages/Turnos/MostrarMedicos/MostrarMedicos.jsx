import React, { useState } from 'react'
import "./MostrarMedicos.css";
import { Link } from 'react-router-dom';


function ModalMedicos({ med, especialidad }) { 

    console.log("en mostrar medicos especialidad " + especialidad)

    console.log("en mostrar medicos "+med._id)   

    return (
        <div>
            <Link to={`/fecha-turno/${med._id}`}><div className="modal-medicos">
                <span className='imagen-modal'>imagen</span>
                <div className='contenido-medicos'>
                    <h6>Dr. {med.name}</h6>
                    <p>Especialidad: {especialidad}</p>
                    {/* <p>Dias y Horarios</p> */}
                    {/* <p>indefinido por el momento</p> */}
                    <p className='matricula'>N° de Matricula: {med.license}</p>
                    <button className='p-1'>Ver Agenda</button>
                </div>
            </div></Link>            
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