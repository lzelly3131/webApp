import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Menu from './Components/Menu/Menu.js'
import Item from './Components/Item/Item.js';
import Form from './Components/Form/Form.js';
import Button from './Components/Button/Button.js';

function App() {
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
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
              </div>
            </Row>

          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
