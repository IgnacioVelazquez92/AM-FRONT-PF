import React, { useState , useContext, useEffect} from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { ApiClient } from "../api/services";
import Swal from 'sweetalert2';



function FormRegister({setKey}) {
  
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] =useState({
    name:'',
    lastName:'',
    email:'',
    password:'',
    cellphone:''
  })

  const apiClient = new ApiClient();


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
        const response = await apiClient.createUser(formData);
        Swal.fire({
          title: '¡Éxito!',
          text: response.data.msg,
          icon: 'success',
          confirmButtonText: 'Aceptar'
        });
        localStorage.setItem("token", response.data.token)
        setKey("Login")
      } catch (error) {
        Swal.fire({
          title: '¡Error!',
          text: error.response? error.response.data.errors[0].msg : "☹ ups.. algo fallo, intente más tarde",
          icon: 'error',
          confirmButtonText: 'Aceptar',
        });
      }
    }
  };

  const handleChange = (e) => {
    const {id, value} = e.target;
    setFormData({...formData, [id]:value})
    
  }


  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit} className="mx-0 px-0">
      
      <Row className="mb-3 mx-0 px-0">
        <Form.Group as={Col} lg="6" controlId="name">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Ingrese su nombre completo"
            pattern='^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+([ ][a-zA-ZáéíóúÁÉÍÓÚñÑ]+)*$'
            onChange={handleChange}
          />
          <Form.Control.Feedback>Hecho!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
              Ingrese un nombre valido
            </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} lg="6" controlId="lastName" className='mt-2'>
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Ingrese su apellido completo"
            pattern="^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+([ '][a-zA-ZáéíóúÁÉÍÓÚñÑ]+)*$" 
            onChange={handleChange}
          />
          <Form.Control.Feedback>Hecho!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
              Ingrese un nombre valido
            </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3 mx-0 px-0">
        <Form.Group as={Col} lg="6" controlId="email" className='mt-2'>
          <Form.Label>Correo eletrónico</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="email"
              placeholder="Ingrese su correo electrónico"
              aria-describedby="inputGroupPrepend"
              pattern="^[^@]+@[^@]+\.[a-zA-Z]{2,}$"
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Ingrese un correo electrónico valido
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col} lg="6" controlId="password" className='mt-2'>
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="+8 caracteres"
            pattern="^[A-Za-z0-9]{8,16}$"
            onChange={handleChange}
          />
          <Form.Control.Feedback>Hecho!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
          La contraseña debe tener entre 8 y 16 caracteres.
            </Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Row className="mb-3 mx-0 px-0">

        <Form.Group as={Col} lg="6" controlId="cellphone" className='mt-2'>
          <Form.Label>Celular (incluir codigo de área sin el 15)</Form.Label>
          <Form.Control 
          type="tel" 
          placeholder="telefóno celular"
          pattern="^[0-9]{10,11}$" 
          onChange={handleChange}
          required />
          <Form.Control.Feedback type="invalid">
            Debe ingresar un número telefónico valido
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      
      <div className="d-grid gap-2">
        <button type="submit" className='btn btn-secondary'>Registrarme</button>
      </div>
      
    </Form>
  );
}

export default FormRegister;