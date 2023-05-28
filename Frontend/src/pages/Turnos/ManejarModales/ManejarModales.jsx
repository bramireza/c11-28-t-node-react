import React from 'react'
import "./ManejarModales.css";
import ModalMedicos from '../MostrarMedicos/MostrarMedicos';

const ManejarModales = ({ med }) => {
    return (
        <div>
            <ModalMedicos med={med} />
        </div>
    )
}

export default ManejarModales