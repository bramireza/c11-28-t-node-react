import './seccion.css';
import { api } from '../../../utilities/axios';
import React, { useState } from 'react';


const accessToken = localStorage.getItem("accessToken");
const headers = accessToken
? { Authorization: `Bearer ${accessToken}` }
: {};


const Seccion = ()=>{
    const [nombre, setNombre] = useState('')
    api().get('/auth/me',{ headers})
    .then(res => setNombre(res.data.user.name))
    .catch(err => console.log(err))
    
    return(
        <>
        
        <header className="header d-flex p-3 align-items-center justify-content-start gap-2">
            <img src="https://www.freeiconspng.com/thumbs/account-icon/account-profile-icon-1.png" className="img_perfil img-fluid" alt="perfil" />
            <h5 className='saludo '>Hola, {nombre}.</h5>
        </header>
        <main>
            <section className='p-3'>
                <h3>Turnos</h3>
                <article className='d-flex p-3 align-items-center justify-content-between gap-4'>
                    <div className="datos_turno">
                        <h4 className='py-2'>Dr.Felipe Sanchez</h4>
                        <p>Área: Ginecología</p>
                        <p>Día: Martes 10/05/23</p>
                        <p>Horarios: 9:00 am - 9:30 am</p>
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
                            <p>Horarios: 9:00 am - 9:30 am</p>
                        </div>
                    </article>
                    <article className='d-flex p-3 align-items-center justify-content-between gap-4'>
                        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/7da02324714817.56338d63f2a30.jpg" className='img_turno' alt="logoDoc" />
                        <div className="datos_turno">
                            <h4 className='py-2'>Dr.Pedro Aquino</h4>
                            <p>Área: Clinico</p>
                            <p>Día: Martes 08/05/23</p>
                            <p>Horarios: 19:00 pm - 19:30 pm</p>
                        </div>
                    </article>
            </section>
        </main>
        </>
    )
};

export default Seccion;