/*import React from 'react'

const ConfirmarCita = ({cita}) => {
  return (
    <div>{cita}</div>
  )
}

export default */

import React from 'react';
import { Link } from "react-router-dom";
import Swal from "sweetalert2"

function ConfirmarTurnos({datosMedico,startDate}) {

    //console.log("en confirmarcita, datosmedico " + datosMedico[0].name + datosMedico[0].specialties)
    //console.log("en confirmarcita dato fecha " + startDate)

    function confirmacion(){
        Swal.fire({
            title: "¡Tu turno médico ha sido confirmado!",
            text: "Recibirás el comprobante en tu email. Recuerda llevarlo a tu cita.",                  
            width: 600,
            confirmButtonText: "Ver mis Turnos",
        });
    }

    return (
        <div>
           

       
        <section className='container p-3'>
            <h3>3. Confirmar turno</h3>
            <p>Forem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="card" >
                <div className="card-body">
                    <h5 className="card-title bg-body-secondary text-center">Nombre del paciente</h5>
                    <div className="d-flex row">
                        <div className="col">
                            <p className="card-text">Especialidad:</p>
                            <p className="card-text">Profesional:</p>
                            <p className="card-text">Fecha:</p>
                            <p className="card-text">Lugar</p>
                        </div>
                        <div className="col">
                            <p className="card-text">{datosMedico[0].specialties}</p>
                            <p className="card-text">{datosMedico[0].name}</p>
                            <p className="card-text">{startDate.toString()}</p>
                            <p className="card-text">info lugar</p>
                        </div>
                    </div>
                </div>
            </div>
            <p>Texto sobre cancelaciones y demás</p>
            <div className='container d-flex flex-column'>
                <button className="btn btn-primary my-2 mb-3" onClick={confirmacion}>Confirmar turno</button>
                <Link to="/turnos-especialidad" className="btn btn-outline-primary" href="#">
                    Cancelar
                </Link>
            </div>
        </section>
        </div>
    );
}

export default ConfirmarTurnos;

