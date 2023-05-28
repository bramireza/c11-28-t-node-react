import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getMedicos } from '../MockMedicos/MockMedicos';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ConfirmarTurnos from '../ConfirmarCita/ConfirmarCita';

function FechaTurno() {
  const { medName } = useParams();
  const [medicos, setMedicos] = useState();
  const [startDate, setStartDate] = useState(new Date());
  const [datosMedico, setDatosMedico] = useState([])
  const [loading,setLoading]=useState(true)

  useEffect(() => {
    getMedicos()
      .then(res => setMedicos(res))
      .catch((err) => console.log(err))
    //.finally(() => setLoading(false))
  }, [])



  function datos(date) {
    console.log("llamo funcion datos " + date)
    let momento = medicos.filter((el) => el.name.includes(medName))
    console.log("en fecha turno " + momento[0].name + momento[0].specialties)
    setDatosMedico(medicos.filter((el) => el.name.includes(medName)))
    setLoading(false)

  }



  //console.log("en fecha turno, datosmedico " + datosMedico[0].name + datosMedico[0].specialties)


  return (
    <div>
      {/* {medName} */}

      {/* FechaTurno */}
      {loading ? <DatePicker selected={startDate} onChange={(date) => { setStartDate(date), datos(date) }} />:""}
      {datosMedico.length === 0 ? "" : <ConfirmarTurnos datosMedico={datosMedico} startDate={startDate} />}

    </div>
  );
}

export default FechaTurno