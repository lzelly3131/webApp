import Form from 'react-bootstrap/Form';
import Button from '../Button/Button.js';
import Date from '../Date/Date.js';
import './Form.scss';


function FormMain() {
  return (
    <Form className='form-Main'>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Descripción de la Tarea" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Descripción</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder='Coloque la Descripcion'/>
      </Form.Group>

      <Form.Group>
        <Date />
      </Form.Group>

      <Button />
    </Form>
  );
}

export default FormMain;