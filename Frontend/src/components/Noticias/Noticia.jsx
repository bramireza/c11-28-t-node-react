import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

function Noticia({ noticia }) {
    return (
        <div className="card col-sm p-2" >
            <div className="card-body">
                <img className="card-img-top" style={{height: '380px'}} src={noticia.hrefLink} alt={noticia.titulo} />
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