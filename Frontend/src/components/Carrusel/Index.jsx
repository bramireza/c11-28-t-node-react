import Carousel from 'react-bootstrap/Carousel';
import './style.css';
import { Link } from 'react-router-dom';
import Banner1  from '../../assets/banner1.png';
import Banner2  from '../../assets/banner2.png';
import Banner3  from '../../assets/banner3.png';

function IndividualIntervalsExample() {
  return (
    <div className='contenedor'>

      <Carousel className='carrusel'>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100 img_caruusel"
            src={Banner1}
            alt="First slide"
          />
          <Carousel.Caption className='primera'>
            <h3 >Cuidamos de ti</h3>
            <p>Nuestros profesionales podrán brindarte una atención personalizada y un seguimiento a tu estado de salud.  </p>
            <Link to='/registro' className='btn btn-primary'>Registrarme</Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100 img_caruusel"
            src={Banner2}
            alt="Second slide"
          />
          <Carousel.Caption className='primera'>
            <h3 >Nuestros mejores 
Especialistas</h3>
            <p > Expertos en salud comprometidos con tu bienestar, brindando atención médica avanzada y de calidad.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img_caruusel"
            src={Banner3}
            alt="Third slide"
          />
          <Carousel.Caption className='primera'>
            <h3>Cuidado médico para toda la familia</h3>
            <p>
              Atención integral para cada miembro de la familia, adaptada a sus necesidades y bienestar.
            </p>
            <Link to='/registro' className='btn btn-primary'>Registrarme</Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    </div>
  );
}

export default IndividualIntervalsExample;
