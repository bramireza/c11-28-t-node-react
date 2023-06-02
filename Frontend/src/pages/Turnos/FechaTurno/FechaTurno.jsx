import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//import { getMedicos } from '../MockMedicos/MockMedicos';
//import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
//import Select from "react-select";
//import ConfirmarTurnos from '../ConfirmarCita/ConfirmarCita';
import { api } from "../../../utilities/axios";
import Calendario from "../Calendario/Calendario";

function FechaTurno() {
  const { medId } = useParams();
  const [agenda, setAgenda] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
    api()
      .get(`/doctor/${medId}/calendar`)
      .then((response) => {
        setAgenda(response.data.calendar);
      })
      //.finally(() => setLoading(false))
      .catch((error) => {
        console.log(error);
      });
    //}
  }, [medId]);

  return (
    <div>{loading ? "" : <Calendario agenda={agenda} medId={medId} />}</div>
  );
}

export default FechaTurno;

/*  function datos(date) {
    console.log("llamo funcion datos " + date)
    let momento = medicos.filter((el) => el.name.includes(medName))
    console.log("en fecha turno " + momento[0].name + momento[0].specialties)
    setDatosMedico(medicos.filter((el) => el.name.includes(medName)))
    setLoading(false)

  }*/

/* const [medicos, setMedicos] = useState();
 const [startDate, setStartDate] = useState(new Date());
 const [datosMedico, setDatosMedico] = useState([])*/

/* {loading ? <DatePicker selected={startDate} onChange={(date) => { setStartDate(date), datos(date) }} />:""}
     {datosMedico.length === 0 ? "" : <ConfirmarTurnos datosMedico={datosMedico} startDate={startDate} />}*/

/* getMedicos()
 .then(res => setMedicos(res))
 .catch((err) => console.log(err))
 .finally(() => setLoading(false))*/
