import Carousel from 'react-bootstrap/Carousel';
import './style.css';
import Banner1  from '../../assets/imgbanner1.svg';
import Banner2  from '../../assets/imgbanner2.svg';
import Banner3  from '../../assets/imgbanner3.svg';

function IndividualIntervalsExample() {
  return (
    <div className='contenedor'>
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={Banner1}
          alt="First slide"
        />
        <Carousel.Caption>
          {/* <h3 >First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={Banner2}
          alt="Second slide"
        />
        <Carousel.Caption>
          {/* <h3 className='titulo'>Second slide label</h3>
          <p className='textParrafo'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Banner3}
          alt="Third slide"
        />
        <Carousel.Caption>
          {/* <h3 className='titulo'>Third slide label</h3>
          <p className='textParrafo'>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default IndividualIntervalsExample;
