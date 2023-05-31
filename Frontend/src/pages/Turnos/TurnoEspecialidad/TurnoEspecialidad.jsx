import React, { useEffect, useState } from "react";
//import { getEspecialidades } from "../MockEspecialidades/MockEspecialidades";
import Select from "react-select";
import "./TurnoEspecialidad.css";
//import { getMedicos } from "../MockMedicos/MockMedicos";

import ManejarModales from "../ManejarModales/ManejarModales";
import { api } from "../../../utilities/axios";

const TurnoEspecialidad = () => {
  const [especialidades, setEspecialidades] = useState([]);
  const [especialidad, setEspecialidad] = useState("");
  const [medicosEspecialidad, setMedicosEspecialidad] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(true);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    // Si el accessToken existe, agrega el encabezado de autorización en los headers
    const headers = accessToken
      ? { Authorization: `Bearer ${accessToken}` }
      : {};

    api()
      .get("/specialty", { headers })
      .then((response) => {
        setEspecialidades(response.data.specialties);
      })
      .finally(() => setLoading(false))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //let año = (new Date()).getFullYear();
  //console.log("año en turno especialidad " + año)
  

  const selectMedicos = ({ value }) => {
    console.log("llega id de especialidades" + value)
    setEspecialidad(especialidades.filter((el) => el._id.includes(value))[0].name)
    
    const accessToken = localStorage.getItem("accessToken");
    // Si el accessToken existe, agrega el encabezado de autorización en los headers
    const headers = accessToken
      ? { Authorization: `Bearer ${accessToken}` }
      : {};

      //let year = 2023
      //let month = 4
     

      //const data = {"year":year,"month":month}

    api()
      .get("/doctor/specialty/" + value, { headers })
      //.post(`/doctor/${iddoctor}/calendar`,data , { headers })
      //.get(`doctor/specialty/${value}`, { headers })
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
              <div key={med.license}>{<ManejarModales med={med} especialidad={especialidad} />}</div>
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