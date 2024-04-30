import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Item.scss';
import { useDispatch } from 'react-redux';
import { deleteGoal } from '../../reducers/goalsSlice';
import { deleteTask } from '../../reducers/tasksSlice';
import { useSelector } from 'react-redux';

function Item(props) {

  const dispatch = useDispatch();
  const state = useSelector((state) => state.option.value);

  const itemCompletado = (e, itemName) => {
    e.preventDefault();

    if (state === 'Meta') {
      dispatch(deleteGoal());
    } else {
      dispatch(deleteTask());
    }
  }




  return (
    <Card className="text-center">
      <Card.Header className='header-item'>{props.name}</Card.Header>
      <Card.Body>
        <Card.Title>Descripción </Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
        <Button variant="primary" onClick={itemCompletado}> {props.option} Completada</Button>
      </Card.Body>
      <Card.Footer className="text-muted">{props.dueDate}</Card.Footer>
    </Card>
  );
}

export default Item;