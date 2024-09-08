import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Form.scss';
import { useDispatch } from 'react-redux';
import { useRef } from 'react';
import { addTask } from '../../reducers/tasksSlice.js';

function FormMain(props) {

  const inputRefName = useRef();
  const inputRefDescription = useRef();
  const inputRefDueDate = useRef();

  const dispatch = useDispatch();

  const addItem = (e) => {
    e.preventDefault();

    dispatch(addTask(
      {
        'name': inputRefName.current.value,
        'description': inputRefDescription.current.value,
        'dueDate': inputRefDueDate.current.value
      }
    ))
  }

  return (
    <Form className='form-Main'>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Descripción de la Tarea" ref={inputRefName} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Descripción</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder='Coloque la Descripcion' ref={inputRefDescription} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Fecha de Vencimiento</Form.Label>
        <Form.Control type='date' ref={inputRefDueDate}></Form.Control>
      </Form.Group>

      <Button variant="primary" onClick={addItem}>Agregar Tarea</Button>
    </Form>
  );
}

export default FormMain;