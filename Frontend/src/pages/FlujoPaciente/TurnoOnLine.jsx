import Modal from 'react-bootstrap/Modal';
import { Link } from "react-router-dom"
import './TurnoOnLine.css';

function TurnoOnLine() {
  return (
    <div
      className="modal show cont"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        
          <div className='header p-3'>
            <Modal.Title className=''>Turnos On-Line</Modal.Title>
            <Link to='/seccion' className='close link-underline link-underline-opacity-0'>X</Link>
          </div>
        
            <p className='px-5 py-2'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p> 
        <Modal.Body>
          <article className='article1 border border-dark p-3 mb-3'>
            <h5 className='fw-bold'>1.Elegir Profesional</h5>
          <p className='pe-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta maiores nostrum sunt? Error ullam.</p>
          <img src="https://freesvg.org/img/1533845191.png" className='picture1' alt="profesional" />
          </article>
          <article className='article2 border border-dark p-3 mb-3'>
            <h5 className='fw-bold'>2.Seleccionar fecha</h5>
          <p className='pe-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta maiores nostrum sunt? Error ullam.</p>
          <img src="https://freesvg.org/img/1533845191.png" className='picture2' alt="profesional" />
          </article>
          <article className='article3 border border-dark p-3 mb-3'>
            <h5 className='fw-bold'>3.Confirmar turno</h5>
          <p className='pe-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta maiores nostrum sunt? Error ullam.</p>
          <img src="https://freesvg.org/img/1533845191.png" className='picture3' alt="profesional" />
          </article>
          
        </Modal.Body>

          <Link to='/seccion' variant="primary" className='btn btn-primary w-75 mx-auto my-3'>Comenzar</Link>
      </Modal.Dialog>
    </div>
  );
}

export default TurnoOnLine;