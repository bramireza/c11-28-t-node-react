import { useState } from "react";
import Noticia from "./Noticia";

function ListaNoticias() {
    const noticiasDefault = [
        {
            titulo: 'Noticia 1',
            descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.'
        },
        {
            titulo: 'Noticia 2',
            descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.'
        },
        {
            titulo: 'Noticia 3',
            descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.'
        }
    ];

    const [noticias, setNoticias] = useState(noticiasDefault);

    const handleClick = (e) => {
        e.preventDefault();
        setNoticias();
    }

    return (
        <section className="container-fluid p-3">
            <h2>Ultimas Noticias</h2>
            <h5 className="col-6 mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</h5>
            <div className="row">
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
            <div className="row justify-content-center mb-5">
                <button type="button" onClick={handleClick} className="btn btn-outline-secondary mt-3 col-4">Ver más noticias</button>
            </div>
        </section>
    )
}

export default ListaNoticias;