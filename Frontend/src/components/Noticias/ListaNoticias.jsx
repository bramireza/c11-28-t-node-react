import { useState } from "react";
import Noticia from "./Noticia";

function ListaNoticias() {
    const noticiasDefault = [
        {
            hrefLink:'https://statics-diariomedico.uecdn.es/cms/styles/landscape_xl/azblob/2022-03/juanma%20%281%29.jpg.webp?itok=ycU41YMX',
            titulo: 'Noticia 1',
            descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.'
        },
        {
            hrefLink:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQPOYrdKUj98xHfcirkYJDnUfvPTjT-XpsYg&usqp=CAU',
            titulo: 'Noticia 2',
            descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.'
        },
        {
            hrefLink:'https://pxb.cdn.diariohuarpe.com/huarpe/032017/1551202387730.webp?extw=jpg',
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
            <h5 className="col-12 mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</h5>
            <div className="row gap-3">
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
            <div className="row justify-content-center mb-2">
                <button type="button" onClick={handleClick} className="btn btn-outline-secondary mt-3 col-4">Ver más noticias</button>
            </div>
        </section>
    )
}

export default ListaNoticias;