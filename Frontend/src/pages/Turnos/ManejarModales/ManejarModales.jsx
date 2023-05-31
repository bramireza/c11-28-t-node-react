import React from 'react'
import "./ManejarModales.css";
import ModalMedicos from '../MostrarMedicos/MostrarMedicos';

const ManejarModales = ({ med , especialidad }) => {

    console.log("esto se ve en manejar modales " + med.name )
    return (
        <div>
            <ModalMedicos med={med} especialidad = {especialidad} />
            
        </div>
    )
}

export default ManejarModales