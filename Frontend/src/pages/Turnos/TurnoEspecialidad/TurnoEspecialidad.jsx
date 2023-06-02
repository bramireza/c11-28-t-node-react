import React, { useEffect, useState } from "react";
//import { useCartContext } from '../Contexto/CartContext'
//import { getEspecialidades } from "../MockEspecialidades/MockEspecialidades";
import Select from "react-select";
import "./TurnoEspecialidad.css";
import { api } from "../../../utilities/axios";
//import { useCartContext } from "../../Contexto/Contexto";
import { useCartContext } from "../Contexto/Contexto";
import ModalMedicos from "../MostrarMedicos/MostrarMedicos";

const TurnoEspecialidad = () => {
  const { recolectarDatos } = useCartContext();

  const [especialidades, setEspecialidades] = useState([]);
  const [idEspecialidad, setIdEspecialidad] = useState("");
  const [medicosEspecialidad, setMedicosEspecialidad] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(true);

  useEffect(() => {
    api()
      .get("/doctor")
      .then((response) => {
        setMedicosEspecialidad(response.data.doctors);
      })
      .finally(() => setLoading2(false))
      .catch((error) => {
        console.log(error);
      });
    api()
      .get("/specialty")
      .then((response) => {
        setEspecialidades(response.data.specialties);
      })
      .finally(() => setLoading(false))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const selectMedicos = ({ value }) => {
    setIdEspecialidad(value);
    api()
      .get("/doctor/specialty/" + value)
      .then((response) => {
        setMedicosEspecialidad(response.data.doctors);
      })
      .finally(() => setLoading(false))
      .catch((error) => {
        console.log(error);
      });

    setLoading2(false);
  };

  return (
    <div>
      {loading ? (
        "Cargando"
      ) : (
        <Select
          className="select"
          placeholder="Selecciona Especialidad"
          name="especialidades"
          options={especialidades.map((esp) => ({
            label: esp.name,
            value: esp._id,
          }))}
          onChange={selectMedicos}
        />
      )}
      <div className="orden-modales">
        {loading2
          ? ""
          : medicosEspecialidad.map((med) => (
              <div key={med.license}>
                {<ModalMedicos med={med} idEspecialidad={idEspecialidad} />}
              </div>
            ))}
      </div>
    </div>
  );
};

export default TurnoEspecialidad;

/*import React, { useEffect, useState } from 'react'
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

export default TurnoEspecialidad*/
