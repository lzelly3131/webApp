import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Item.scss';

function Item() {
  return (
    <Card className="text-center">
      <Card.Header className='header-item'>Leer Libro</Card.Header>
      <Card.Body>
        <Card.Title>Descripción de Tarea</Card.Title>
        <Card.Text>
          Realizar la lectura completa del libro
        </Card.Text>
        <Button variant="primary">Tarea Completada</Button>
      </Card.Body>
      <Card.Footer className="text-muted">Fecha de Vencimiento: 28/04/2024</Card.Footer>
    </Card>
  );
}

export default Item;