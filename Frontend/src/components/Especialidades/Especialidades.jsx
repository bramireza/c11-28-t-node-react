/* eslint-disable react/prop-types */
import './Style.css';
const Especialidades = ({especialidad})=>{
    return <div className='col-12 col-md-4 d-flex align-items-center p-3'>
        <img src="https://cdn.onlinewebfonts.com/svg/img_491436.png" alt={especialidad} />
        <h5 className='ms-4'>{especialidad}</h5>
    </div>
};

export default Especialidades;