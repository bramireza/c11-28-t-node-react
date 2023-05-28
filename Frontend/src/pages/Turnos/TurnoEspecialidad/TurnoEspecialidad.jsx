import React, { useEffect, useState } from 'react'
import { getEspecialidades } from '../MockEspecialidades/MockEspecialidades'
import Select from 'react-select';
import "./TurnoEspecialidad.css";
import { getMedicos } from '../MockMedicos/MockMedicos';

import ManejarModales from '../ManejarModales/ManejarModales';

const TurnoEspecialidad = () => {
    const [especialidades, setEspecialidades] = useState([])
    const [medicos, setMedicos] = useState([])
    const [medicosEspecialidad, setMedicosEspecialidad] = useState([])
    const [loading, setLoading] = useState(true)
    const [loading2, setLoading2] = useState(true)

    useEffect(() => {
        getEspecialidades()
            .then(respuesta => setEspecialidades(respuesta))
            .catch((err) => console.log(err))
            .finally(() => setLoading(false))
        getMedicos()
            .then(res => setMedicos(res))
            .catch((err) => console.log(err))
            .finally(() => setLoading(false))
    }, [])

    const selectMedicos = ({ value }) => {
        setMedicosEspecialidad(medicos.filter((el) => el.specialties.includes(value)))
        setLoading2(false)
    }

    return (
        <div>
            {loading ? "Cargando" : <Select className='select' placeholder="Selecciona Especialidad" name='especialidades'
                options={especialidades.map(esp => ({ label: esp.name, value: esp.name }))}
                onChange={selectMedicos} />}
            <div className='orden-modales'>
                {loading2 ? "" : medicosEspecialidad.map(med => <div key={med.license}>{<ManejarModales med={med} />}</div>)}
            </div>
        </div>
    )
}

export default TurnoEspecialidad