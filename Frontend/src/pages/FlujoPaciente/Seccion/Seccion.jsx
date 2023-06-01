import './seccion.css';
import { api } from '../../../utilities/axios';
import React, { useState } from 'react';
import { Link } from "react-router-dom";


const accessToken = localStorage.getItem("accessToken");
const headers = accessToken
? { Authorization: `Bearer ${accessToken}` }
: {};


const Seccion = ()=>{
    const [nompa, setNompa] = useState('');
    const [doc, setDoc] = useState('');
    const [idDoc, setIdDoc] = useState('');
    const [area, setArea] = useState('');
    const [dia, setDia] = useState('');
    const [hora, setHora] = useState('');



        //Datos del Paciente
        const paciente = ()=>{
            api().get('appointment/me', { headers })
            .then(res =>{
                setHora(res.data.appointments[0].appointmentDate.split('T')[1].slice(0,5)),
                setDia(res.data.appointments[0].appointmentDate.split('T')[0])
        })
            .catch(err => console.log(err))
        }
        paciente();

        // Datos del doctor
        const doctor = (id)=>{
            api().get(`/doctor/${id}`, { headers })
            .then(res =>
                 {
                setArea(res.data.doctor.specialties[0].name),
                setDoc(res.data.doctor.name)}
                )
            .catch(err => err)
        }
        doctor(idDoc)
        
        api().get("/auth/me", { headers})
            .then(res => setNompa(res.data.user.name))
            .catch(err => console.log(err))

        api().get("/appointment/me", { headers})
            .then(res => 
                setIdDoc(res.data.appointments[0].doctor)
                )
            .catch(err => console.log(err))
            
    return(
        <>
        
        <header className="header d-flex p-3 align-items-center justify-content-start gap-2">
            <img src="https://www.freeiconspng.com/thumbs/account-icon/account-profile-icon-1.png" className="img_perfil img-fluid" alt="perfil" />
            <h5 className='saludo '>Hola, {nompa}.</h5>
        </header>
        <main>
            <section className='p-3'>
                <h3>Turnos</h3>
                <article className='d-flex p-3 align-items-center justify-content-between gap-4'>
                    <div className="datos_turno">
                        <h4 className='py-2'>Dr.{doc}</h4>
                        <p>Área: {area}</p>
                        <p>Día: {dia}</p>
                        <p>Horario: {hora}</p>
                    </div>
                        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/7da02324714817.56338d63f2a30.jpg" className='img_turno' alt="logoDoc" />
                </article>
            </section>
            <section className='p-3'>
                <h3>Turnos Anteriores</h3>
                    <article className='d-flex p-3 align-items-center justify-content-between gap-4 mb-3 '>
                        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/7da02324714817.56338d63f2a30.jpg" className='img_turno' alt="logoDoc" />
                        <div className="datos_turno">
                            <h4 className='py-2'>Dra.Lupita Ortega</h4>
                            <p>Área: Ginecología</p>
                            <p>Día: Martes 10/05/23</p>
                            <p>Horario: 9:00 am - 9:30 am</p>
                        </div>
                    </article>
                    <article className='d-flex p-3 align-items-center justify-content-between gap-4'>
                        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/7da02324714817.56338d63f2a30.jpg" className='img_turno' alt="logoDoc" />
                        <div className="datos_turno">
                            <h4 className='py-2'>Dr.Pedro Aquino</h4>
                            <p>Área: Clinico</p>
                            <p>Día: Martes 08/05/23</p>
                            <p>Horario: 19:00 pm - 19:30 pm</p>
                        </div>
                    </article>
            </section>
            <div className='d-flex px-3 pb-3'>
                    <Link to='/turnos-especialidad' className='btn btn-success col-12 col-md-6 mx-auto'>Crear nuevo turno</Link>
            </div>
        </main>
        </>
    )
};

export default Seccion;