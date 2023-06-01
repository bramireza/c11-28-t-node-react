import PropTypes from 'prop-types';
import { Link, useParams } from "react-router-dom";
import { getDoctorById } from './MockDoctors';
import { useState, useEffect } from 'react';

function DoctorCard() {

    const { medId } = useParams();
    const [doctor, setDoctor] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        try {
            getDoctorById(medId)
                .then(res => {setDoctor(res); console.log(res)})
                .catch(e => console.log(e))
                .finally(() => setLoading(false))
        } catch (error) {
            console.log(error);
        }
    }, [medId])

    return (
        <div className="card col p-2" >
            {loading ?
                (<p>Cargando</p>)
                :
                (<div>
                    <div className="card-body border border-secondary rounded">
                        <div className='container d-flex mb-4'>
                            <img className="card-img-top" style={{ height: '82px', width: '100px' }} src={doctor.image} alt='medico' />
                            <div className='px-5'>
                                <h5 className="card-title">{doctor.name + " " + doctor.lastName}</h5>
                                <p className="card-text">{"DNI: " + doctor.personalId}</p>
                                <p className="card-text">{"N. de matricula: " +doctor.matricula}</p>
                            </div>
                        </div>
                        <hr />
                        <h4>Datos personales</h4>
                        <div className='container-fluid row my-4'>
                            <div className='col'>
                                <p className="card-text">Especialidad/es:</p>
                                <p className="card-text">Fecha de nacimiento:</p>
                                <p className="card-text">Nacionalidad:</p>
                                <p className="card-text">Dirección:</p>
                                <p className="card-text">Teléfono de contacto:</p>
                                <p className="card-text">Email:</p>
                            </div>
                            <div className='col'>
                                <p className="card-text">{doctor.especialidad}</p>
                                <p className="card-text">{doctor.birthDay}</p>
                                <p className="card-text">{doctor.nationality}</p>
                                <p className="card-text">{doctor.address}</p>
                                <p className="card-text">{doctor.phoneNumber}</p>
                                <p className="card-text">{doctor.email}</p>
                            </div>
                        </div>
                        <hr />
                        <h4>Horarios</h4>
                        <div className='container-fluid row mb-2'>
                            <div className='col'>
                                <p className="card-text">Turno:</p>
                                <p className="card-text">Días laborales</p>
                            </div>
                            <div className='col'>
                                <p className="card-text">{doctor.turno}</p>
                                <p className="card-text">{doctor.days}</p>
                            </div>

                        </div>
                    </div>
                    <div className='text-center mt-4'>
                        <Link to="/remove" className="btn btn-outline-secondary mx-2" style={{ color: 'black', width: '187px' }} href="#">Eliminar</Link>
                        <Link to={`/doctor/edit/${doctor.medId}`} className="btn btn-secondary" style={{ color: 'white', width: '187px' }} href="#">Editar</Link>
                    </div>
                </div>
                )}
        </div>
    )
}


export default DoctorCard;