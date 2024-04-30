import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Form.scss';
import { useDispatch } from 'react-redux';
import { addGoal } from '../../reducers/goalsSlice.js';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { addTask } from '../../reducers/tasksSlice.js';

function FormMain(props) {

  const inputRefName = useRef();
  const inputRefDescription = useRef();
  const inputRefDueDate = useRef();


  const selectOption = useSelector((state) => state.option.value)

  const dispatch = useDispatch();

  const addItem = (e) => {
    e.preventDefault();

    if (selectOption === 'Meta') {
      dispatch(addGoal({
        'name': inputRefName.current.value,
        'description': inputRefDescription.current.value,
        'dueDate': inputRefDueDate.current.value
      }))
    } else {
      dispatch(addTask({
        'name': inputRefName.current.value,
        'description': inputRefDescription.current.value,
        'dueDate': inputRefDueDate.current.value
      }))
    }
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

      <Button variant="primary" onClick={addItem}>Agregar {selectOption}</Button>
    </Form>
  );
}

export default FormMain;