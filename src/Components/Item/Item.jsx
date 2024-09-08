import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useState, useRef } from 'react';
import './Item.scss';
import { useDispatch } from 'react-redux';
import { deleteTask, editTask } from '../../reducers/tasksSlice';
import Form from 'react-bootstrap/Form';

function Item(props) {
  const [statusEdit, setStatusEdit] = useState(false); // Hook para manejar el estado de edición
  const inputRefName = useRef();
  const inputRefDescription = useRef();
  const inputRefDueDate = useRef();
  const dispatch = useDispatch();

  // Función para editar tarea
  const editItem = (e) => {
    e.preventDefault();

    dispatch(editTask({
      id: props.id,  // Añadir el id de la tarea
      updatedTask: {
        name: inputRefName.current.value,
        description: inputRefDescription.current.value,
        dueDate: inputRefDueDate.current.value
      }
    }));

    setStatusEdit(false);  // Finalizar el modo edición
  };

  // Función para eliminar tarea
  const itemCompletado = (e) => {
    e.preventDefault();
    dispatch(deleteTask(props.id));
  };

  return (
    <Card className="text-center">
      <Card.Header className='header-item'>
        {statusEdit ? 
          <Form.Control type="text" defaultValue={props.name} ref={inputRefName} /> :
          props.name
        }
      </Card.Header>
      <Button 
        variant={statusEdit ? 'danger' : 'warning'} 
        className='btn-Edit' 
        onClick={() => setStatusEdit(!statusEdit)}  // Aquí cambio el estado de edición
      >
        {statusEdit ? 'Cancelar' : 'Editar'}
      </Button>
      <Card.Body>
        <Card.Title>Descripción</Card.Title>
        {statusEdit ? (
          <Form.Control as="textarea" defaultValue={props.description} ref={inputRefDescription} />
        ) : (
          <Card.Text>{props.description}</Card.Text>
        )}
        {statusEdit ? (
          <>
            <Form.Control type="date" defaultValue={props.dueDate} ref={inputRefDueDate} />
            <Button variant="primary" onClick={editItem}>Guardar Tarea</Button>
          </>
        ) : (
          <Button variant="danger" onClick={itemCompletado}>Eliminar Tarea</Button>
        )}
      </Card.Body>
      <Card.Footer className="text-muted">{props.dueDate}</Card.Footer>
    </Card>
  );
}

export default React.memo(Item);
