import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


function QuienesSomos() {
  return (
    <Card border="light">
      <Card.Img variant="top" src="https://thumbs.dreamstime.com/b/grupo-de-doctores-felices-que-se-encuentran-en-la-oficina-del-hospital-52510947.jpg" />
      <Card.Body>
        <Card.Title className='fw-bolder'>¿ Quienes Somos ?</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis, mollitia corrupti rerum enim doloribus nisi exercitationem. Amet, quod? Sed nisi modi hic magni voluptate? Sapiente magnam dicta repellat tenetur!
        </Card.Text>
        <ListGroup className="list-group-flush">
          <ListGroup.Item >
              Punto 1 
          </ListGroup.Item>
          <ListGroup.Item>Punto 2</ListGroup.Item>
          <ListGroup.Item>Punto 3</ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

export default QuienesSomos;