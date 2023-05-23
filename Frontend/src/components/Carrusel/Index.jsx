import Carousel from 'react-bootstrap/Carousel';
import './style.css';

function IndividualIntervalsExample() {
  return (
    <div className='contenedor'>
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://thumbs.dreamstime.com/b/grupo-de-los-doctores-looking-computer-103309418.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 >First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://thumbs.dreamstime.com/b/doctor-con-el-fondo-m%C3%A9dico-24834402.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3 className='titulo'>Second slide label</h3>
          <p className='textParrafo'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://thumbs.dreamstime.com/b/imagen-compuesta-de-los-doctores-felices-que-miran-el-tablero-66225523.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3 className='titulo'>Third slide label</h3>
          <p className='textParrafo'>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default IndividualIntervalsExample;
