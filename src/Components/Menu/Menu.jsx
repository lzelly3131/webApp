import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../logo.svg'
import './Menu.scss';
import { changeOption } from '../../reducers/optionSlice';
import { useDispatch } from 'react-redux';

function Menu() {

  const dispatch = useDispatch();

  const changeOptionFunc = (option) =>{
    dispatch(changeOption(option))
  }

  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="Navbar">
      <Container className='Container'>
      <img
              alt=""
              src = {logo}
              width="70"
              height="60"
              className="d-inline-block align-top"
            />
        <Navbar.Brand >To-Do List</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" onClick={() => changeOptionFunc('Tarea')}>Tareas</Nav.Link>
            <Nav.Link href="#link" onClick={() => changeOptionFunc('Meta')}>Metas</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;