import React, { useState , useContext} from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { ApiClient } from '../api/services';
import Swal  from 'sweetalert2';
import {Link} from 'react-router-dom';
import UserContext from '../../../context/UserContext';


function FormLogin() {
  const {user, setUser } = useContext(UserContext)

  const [validated, setValidated] = useState(false);

  const [formLog, setFormLog] =useState({
    email:'',
    password:'',
  })

  const apiClient = new ApiClient();

  const changeUserContext = async(response) => {

    const { userData } = response.data;
    const{ id, email , lastName , name } = userData;
    await setUser({
      ...user, id, email , lastName , name
    })
    console.log(user)
  }

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    event.preventDefault();
    if(form.checkValidity()){
      try {
        const response = await apiClient.login(formLog);
        Swal.fire({
          title: '¡Éxito!',
          text: response.data.msg,
          icon: 'success',
          confirmButtonText: 'Aceptar'
        });
        
        await changeUserContext(response)
        console.log(response)
        console.log(user)
        localStorage.setItem("token", response.data.token)
        return
      } catch (error) {
        Swal.fire({
          title: '¡Error!',
          text: error.response.data.msg,
          icon: 'error',
          confirmButtonText: 'Aceptar',
        });
      }
    }
  };
  
  const handleChangeLog = (e) =>{
    const {type, value} = e.target;
    setFormLog({...formLog, [type]:value})
  }
  


  return (
  <>
    <Form noValidate validated={validated} onSubmit={handleSubmit} className="mx-0 px-0">
      <Row className="mb-3 mx-0 px-0">
        <Form.Group as={Col} md="12" controlId="emailLog" className='mt-2'>
          <Form.Label>Correo eletrónico</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="email"
              placeholder="ingrese su correo electrónico"
              aria-describedby="inputGroupPrepend"
              pattern="^[^@]+@[^@]+\.[a-zA-Z]{2,}$"
              required
              onChange={handleChangeLog}
            />
            <Form.Control.Feedback type="invalid">
              Ingrese un correo elecrónico valido
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        
        <Form.Group as={Col} md="12" controlId="PasswordLog" className='mt-4'>
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="Más de 8 caracteres"
            pattern="^[A-Za-z0-9]{8,16}$"
            onChange={handleChangeLog}
          />
          <Form.Control.Feedback>Hecho!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
          La contraseña debe tener entre 8 y 16 caracteres.
            </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <br />
      <div className="d-grid gap-2 px-3 ">
        <button type="submit" className='btn btn-secondary'>Ingresar</button>
      </div>
    </Form>
    <br />
    <div className='px-3 d-flex justify-contetn-center align-items-center'>
      ¿Olvidaste tu clave? 👉
      <Link to="/recupero" target="_blank" > 
        Recuperar Contraseña
      </Link>

    </div>
  </>
  );
}

export default FormLogin;