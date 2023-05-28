import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function QuienesSomos() {
  return (
    <Card border="light">
      <Row>
        <Col md={6}>
          <Card.Img className='card_img' variant="top" src="https://thumbs.dreamstime.com/b/grupo-de-doctores-felices-que-se-encuentran-en-la-oficina-del-hospital-52510947.jpg" />
        </Col>
        <Col md={6}>
          <Card.Body className='d-flex flex-column'>
            <Card.Title className='fw-bolder card_title'>¿ Quienes Somos ?</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis, mollitia corrupti rerum enim doloribus nisi exercitationem. Amet, quod? Sed nisi modi hic magni voluptate? Sapiente magnam dicta repellat tenetur!
            </Card.Text>
            <ListGroup className="list-group-flush lista_grupo">
              <ListGroup.Item >Punto 1</ListGroup.Item>
              <ListGroup.Item>Punto 2</ListGroup.Item>
              <ListGroup.Item>Punto 3</ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Col>

      </Row>
    </Card>
  );
}

export default QuienesSomos;