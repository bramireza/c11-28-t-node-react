import React, { useState } from 'react'
import "./Calendario.css";
import ConfirmarTurnos from '../ConfirmarCita/ConfirmarCita';
import { api } from '../../../utilities/axios';

const Calendario = ({ agenda, cant, mes, year, medId }) => {
    console.log("pasamos a calendario")
    const [dia, setDia] = useState("")
    const [loading, setLoading] = useState(true)
    const [userId, setUserId] = useState("")

    const DIAS = [{ dia: "Lun", num: 1 }, { dia: "Mar", num: 2 }, { dia: "Mie", num: 3 }, { dia: "Jue", num: 4 }, { dia: "Vie", num: 5 }, { dia: "Sab", num: 6 }, { dia: "Dom", num: 0 }]


    const accessToken = localStorage.getItem("accessToken");
    const headers = accessToken
        ? { Authorization: `Bearer ${accessToken}` }
        : {};

    function pasarDia({ i }) {
        console.log("llama funcion dia " + i)
        setDia(new Date(year,mes,i))
        console.log(dia)
        //setDia((DIAS.filter((es) => es.num === ((new Date(year, mes, i)).getDay())))[0].dia)
        setLoading(false)

        api().get("/auth/me", { headers })
            .then((response) => {
                setUserId(response.data.user._id);
            })
            //.finally(() => setLoading(false))
            .catch((error) => {
                console.log(error);
            });
        crearCita()

    }

    

    function crearCita() {
        const data = {doctor:medId,patient:userId,appointmentDate:dia}
        api().post("/appointment", data , {headers})
        .then((response)=>{
            console.log(response.data.appointment.appointmentDate)
        })
        .catch((error) => {
            console.log(error);
        });


    }



    console.log("dia en calendario" + dia)

    return (
        <div className='almanaque'>
            {loading ? function () {
                let botones = []
                for (let i = 1; i < (cant + 1); i++) {
                    let comprobar = agenda.some((el) => el.day == i)
                    if (comprobar === true) {
                        botones.push(<button onClick={() => { pasarDia({ i }) }} className='botonAlmanaque'>{(DIAS.filter((es) => es.num === ((new Date(year, mes, i)).getDay())))[0].dia + " " + i}</button>)

                    } else {
                        botones.push(<button className='botonAlmanaque' disabled={true}>{(DIAS.filter((es) => es.num === ((new Date(year, mes, i)).getDay())))[0].dia + " " + i}</button>)

                    }


                    //persons.push(<p>{data[i].name + ", " + data[i].age + " years old"}</p>)
                }
                return botones
            }() : ""
            }
            {loading ? "" : <ConfirmarTurnos />}


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