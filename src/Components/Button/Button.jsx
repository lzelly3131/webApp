import Button from 'react-bootstrap/Button';
import './Button.scss';
import { useSelector } from 'react-redux';

function ButtonMain() {

  const option = useSelector((state) => state.option.value);
  return (
    <>
      <Button variant="primary" >Agregar {option}</Button>
    </>
  );
}

export default ButtonMain;