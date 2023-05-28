import React from 'react'
import "./MostrarMedicos.css";
import { Link } from 'react-router-dom';

function ModalMedicos({ med }) { 
    
    

    return (
        <div>
            <Link to={`/fecha-turno/${med.name}`}><div className="modal-medicos">
                <span className='imagen-modal'>imagen</span>
                <div className='contenido-medicos'>
                    <h6>Dr. {med.name}</h6>
                    <p>Especialidad: {med.specialties}</p>
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