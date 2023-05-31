import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
//import { getMedicos } from '../MockMedicos/MockMedicos';
//import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
//import ConfirmarTurnos from '../ConfirmarCita/ConfirmarCita';
import { api } from "../../../utilities/axios";
import Calendario from '../Calendario/Calendario';

function FechaTurno() { 
  const { medId } = useParams();
  const [agenda, setAgenda] = useState([])
  const [mes,setMes]=useState()
  const [cant,setCant]=useState()
  const [loading, setLoading] = useState(true)


  let year = (new Date()).getFullYear();
  const MESES = [
    { mes: "Enero", num: 0, dias:31}, { mes: "Febrero", num: 1, dias:28 }, { mes: "Marzo", num: 2, dias:31 }, { mes: "Abril", num: 3, dias:30 }, { mes: "Mayo", num: 4, dias:31 }, { mes: "Junio", num: 5, dias:30 }, { mes: "Julio", num: 6, dias:31 },
    { mes: "Agosto", num: 7, dias:31 }, { mes: "Septiembre", num: 8, dias:30 }, { mes: "Octubre", num: 9, dias:31 }, { mes: "Noviembre", num: 10, dias:30 }, { mes: "Diciembre", num: 11, dias:31 }
  ];


  function traerAgenda({ value }) {
    setCant(MESES.filter((esp)=>esp.num === value)[0].dias)
    setLoading(false)
    setMes(value)
    const data = { year: year, month: value }
    const accessToken = localStorage.getItem("accessToken");
    const headers = accessToken
      ? { Authorization: `Bearer ${accessToken}` }
      : {};
    api()
      .post(`/doctor/${medId}/calendar`, data, { headers })
      .then((response) => {
        console.log(response.data.calendar)
        //(response.data.calendar).map
        setAgenda(response.data.calendar);
      })
      //.finally(() => setLoading(false))
      .catch((error) => {
        console.log(error);
      });
  }
  console.log(agenda)
  let dias = agenda.map((esp)=>new Date(2023,mes,esp.day));
 // let dias = agenda.map((esp)=> )
  console.log(dias)

  console.log("dias meses señalado " + cant)


 /* especialidades.map((esp) => ({
    label: esp.name,
    value: esp._id,
  }))}*/

  return (
    <div>

      <Select
        className="select"
        placeholder="Selecciona Mes"
        name="especialidades"
        options={MESES.map((esp) => ({
          label: esp.mes,
          value: esp.num,
        }))}
        onChange={traerAgenda}
      />
      {loading  ? "" : <Calendario agenda={agenda} cant={cant} mes={mes} year={year} medId={medId} /> }



    </div>
  );
}

export default FechaTurno



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