import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Menu from './Components/Menu/Menu.jsx'
import Item from './Components/Item/Item.jsx';
import Form from './Components/Form/Form.jsx';
import Button from './Components/Button/Button.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { initAddTask, clearTasks } from './reducers/tasksSlice.js';
import { initAddGoal, clearGoals } from './reducers/goalsSlice.js';

function App() {

  const goals = useSelector((state) => state.goals.value);
  const tasks = useSelector((state) => state.tasks.value);
  const option = useSelector((state) => state.option.value);
  const dispatch = useDispatch();

  // CONSULTAR LAS TAREAS Y METAS POR DEFAULT 
  function initFetch(typeRequest) {

    // VARIABLE QUE ADMINISTRARA EL TIPO (TAREA, META)
    let type;
    
    if (typeRequest === 'Tarea') {
      dispatch(clearTasks());
      type = 'Tasks';
    } else {
      type = 'Goals'
      dispatch(clearGoals());
    }

    // OBTENER LAS TAREAS Y METAS DE LA BD
    fetch('http://localhost:3001/get' + type, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization": "tds2024"
      }
    }).then((res) => {
      return res.json();
    }).then((response) => {
      response.map((item) => {
        if (type == 'Tasks') {
          dispatch(initAddTask(item));
        } else {
          dispatch(initAddGoal(item));
        }
      })
    }).catch(err => {
      console.err(err);
    })
  }

  // OBTENER EL ESTADO INICIAL
  useEffect(() => {
    initFetch(option);
  }, [option])

  return (
    <div className="App">
      <header>
        <Menu />
      </header>

      <Container className='containerMain' >
        <Row>
          <Col xs={0} sm={0} className='d-none d-sm-block d-sm-none d-md-block col-Form'>
            <Form />
          </Col>

          <Col xs={0} sm={0}>
            <Row className='d-md-none'>
              <div className='bg-transparent overlapping-div'>
                <Button />
              </div>
            </Row>

            <Row>
              <div className='itemScroll'>
                {
                  option == 'Meta' ? (
                    goals.map((item, index) => {
                      return <Item key={index} id={item._id} name={item.name} description={item.description} dueDate={item.dueDate} option={'Meta'} />
                    })) : (
                    tasks.map((item, index) => {
                      return <Item key={index} id={item._id} name={item.name} description={item.description} dueDate={item.dueDate} option={'Tarea'} />
                    })
                  )
                }

              </div>
            </Row>

          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
