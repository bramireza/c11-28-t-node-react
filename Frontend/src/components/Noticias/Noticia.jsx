import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

function Noticia({ noticia }) {
    return (
        <div className="card col-sm p-2" >
            <img className="card-img-top" style={{height: '280'}} src="..." alt={noticia.titulo} />
            <div className="card-body">
                <h5 className="card-title">{noticia.titulo}</h5>
                <p className="card-text">{noticia.descripcion}</p>
                <Link to="" style={{color: 'black'}} href="#">Leer más</Link>
            </div>
        </div>
    )
}

Noticia.propTypes = {
    noticia: PropTypes.object.isRequired
};

export default Noticia;