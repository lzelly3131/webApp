import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Menu from './Components/Menu/Menu.jsx'
import Item from './Components/Item/Item.jsx';
import Form from './Components/Form/Form.jsx';
import Button from './Components/Button/Button.jsx';
import { useSelector } from 'react-redux';

function App() {

  const goals = useSelector((state) => state.goals.value);
  const tasks = useSelector((state) => state.tasks.value);
  const option = useSelector((state) => state.option.value);

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
                    goals.map((tarea, index) => {
                      return <Item key={index} name={tarea.name} description={tarea.description} dueDate={tarea.dueDate} option={'Meta'} />
                    })) : (
                    tasks.map((item, index) => {
                      return <Item key={index} name={item.name} description={item.description} dueDate={item.dueDate} option={'Tarea'} />
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
