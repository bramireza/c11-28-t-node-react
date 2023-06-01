import React, { useEffect, useState } from 'react'
import "./Calendario.css";
import ConfirmarTurnos from '../ConfirmarCita/ConfirmarCita';
import { api } from '../../../utilities/axios';

const Calendario = ({ agenda, cant,  medId,year,mes }) => {
    console.log("pasamos a calendario")
    const [dia, setDia] = useState("")
    const [loading, setLoading] = useState(true)
    const [userId, setUserId] = useState("")
    const [formattedDate, setFormattedDate] = useState("")
    const [medicoName, setMedicoName] = useState("")
    //const[estado,setEstado]=useState("ok")

    const DIAS = [{ dia: "Lun", num: 1 }, { dia: "Mar", num: 2 }, { dia: "Mie", num: 3 }, { dia: "Jue", num: 4 }, { dia: "Vie", num: 5 }, { dia: "Sab", num: 6 }, { dia: "Dom", num: 0 }]

    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: false,
        timeZone: "America/Argentina/Buenos_Aires" // Cambia esto a la zona horaria que necesites
    };

    useEffect(() => {
        crearCita()
    }, [dia, userId])

    const accessToken = localStorage.getItem("accessToken");
    const headers = accessToken
        ? { Authorization: `Bearer ${accessToken}` }
        : {};

    function pasarDia({ i }) {
        console.log("llama funcion dia " + i)
        const toDay = new Date();
        const year = toDay.getFullYear();
        const mes = toDay.getMonth();
        setDia((new Date(year, mes, i)).toDateString())
        console.log(dia)
        setLoading(false)
        api().get("/auth/me", { headers })
            .then((response) => {
                setUserId(response.data.user._id);
            })
            //.finally(() => setLoading(false))
            .catch((error) => {
                console.log(error);
            });
    }

    function crearCita() {
        console.log("entramos en crear cita")
        api().get(`/doctor/${medId}`, { headers })
            .then((response) => {
                console.log(response.data.doctor.name)
                setMedicoName(response.data.doctor.name)

            })
            .catch((error) => {
                console.log(error);
            });

        if (dia && userId) {
            const data = { doctor: medId, patient: userId, appointmentDate: dia }
            console.log(data)
            api().post("/appointment", data, { headers })
                .then((response) => {
                    const date = new Date(response.data.appointment.appointmentDate);
                    const formattedDate = date.toLocaleDateString("es-AR", options);
                    setFormattedDate(formattedDate)
                    console.log(formattedDate)
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }

    console.log("dia en calendario" + dia)
    return (
        <div className='almanaque'>
            {loading ? function () {
                let botones = []

                for (let i = 1; i < (cant + 1); i++) {
                    // let numero = (DIAS.filter((el) => el.num.includes === i).num)
                    // console.log("dia de semana " + numero)
                    // if(estado === "ok"){
                    //     for(let e = 1; e === numero; e++){
                    //         botones.push(<button className='botonAlmanaque' disabled={true}></button>)
                    //         setEstado("no")
                    //     }
                    // }
                    let comprobar = agenda.some((el) => el.day == i)
                    if (comprobar === true) {
                        botones.push(<button onClick={() => { pasarDia({ i }) }} className='botonAlmanaque'>{(DIAS.filter((es) => es.num === ((new Date(year, mes, i)).getDay())))[0].dia + " " + i}</button>)
                        // if (estado === "ok") {
                        //     let numero = (DIAS.filter((el) => el.num === ((new Date(year, mes, i)).getDay()))[0].dia)//
                        //     console.log("numero en confirmar")
                        //     console.log(numero)
                        //     setEstado("no")

                        // }


                    } else {
                        botones.push(<button className='botonAlmanaque' disabled={true}>{(DIAS.filter((es) => es.num === ((new Date(year, mes, i)).getDay())))[0].dia + " " + i}</button>)
                    }
                }
                return botones
            }() : ""
            }
            {loading ? "" : <ConfirmarTurnos mes={mes} year={year} medId={medId} formattedDate={formattedDate} medicoName={medicoName} />}
        </div>
    )
}

/*<ul>
                {agenda.map(dia => <li key={dia.day}>{dia.day}</li>)}
            </ul>*/



export default Calendario

//console.log( cursos.some((el) => el.nombre == "Desarrollo
//Web"))
// true
/*{loading2
    ? ""
    : medicosEspecialidad.map((med) => (
        <div key={med.license}>{<ManejarModales med={med} especialidad={especialidad} />}</div>
      ))}*/