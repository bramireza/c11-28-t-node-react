import { useState } from "react";
import Noticia from "./Noticia";
import './noticia.css'

function ListaNoticias() {
    const noticiasDefault = [
        {
            hrefLink:'https://statics-diariomedico.uecdn.es/cms/styles/landscape_xl/azblob/2022-03/juanma%20%281%29.jpg.webp?itok=ycU41YMX',
            speciality: 'Oncología',
            titulo: 'Descubrimos un nuevo enfoque en la lucha contra el cáncer',
            descripcion: 'Nuestro tratamiento innovador ofrece resultados prometedores, brindando esperanza y mejor calidad de vida a nuestros pacientes.'
        },
        {
            hrefLink:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQPOYrdKUj98xHfcirkYJDnUfvPTjT-XpsYg&usqp=CAU',
            speciality: 'Cardiología',
            titulo: 'Nuevo programa de prevención de enfermedades cardiovasculares',
            descripcion: 'identificamos y reducimos factores de riesgo a través de exámenes médicos regulares y asesoramiento personalizado, garantizando la salud cardiovascular de nuestra comunidad.'
        },
        {
            hrefLink:'https://pxb.cdn.diariohuarpe.com/huarpe/032017/1551202387730.webp?extw=jpg',
            speciality: 'Salud Mental',
            titulo: 'Celebramos la Semana del Bienestar Mental',
            descripcion: 'A través de charlas educativas, talleres de manejo del estrés y sesiones de terapia grupal, promovemos la conciencia y el apoyo emocional para mejorar la salud mental en nuestra comunidad.'
        }
    ];

    const [noticias, setNoticias] = useState(noticiasDefault);

    const handleClick = (e) => {
        e.preventDefault();
        setNoticias();
    }

    return (
        <section id="notice-section" className="container-fluid p-3">
            <h2>Ultimas Noticias</h2>
            <h5 className="col-12 mb-3">Mantente al tanto de las últimas novedades y avances en el mundo de la medicina y la salud en nuestro hospital.</h5>
            <div className="row gap-5">
                {noticias.map((noticia, index) => {
                    return (
                        <Noticia
                            key={index}
                            noticia={noticia}
                        ></Noticia>
                    )
                }
                )}
            </div>
            <div className="row justify-content-center mt-3 mb-2">
                <button id="btn" type="button" onClick={handleClick}  className="btn btn-outline-secondary mt-3 col-4">Ver más noticias</button>
            </div>
        </section>
    )
}

export default ListaNoticias;