import React, { useState ,useEffect, useContext} from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { ApiClient } from '../api/services';
import Swal  from 'sweetalert2';
import UserContext from '../../../context/UserContext';


const EditUser = () => {
  const {user, setUser} = useContext(UserContext);
  const [updatedUser, setUpdatedUser] = useState(user);
  const [validated, setValidated] = useState(false);

  const apiClient = new ApiClient();


  const editSubmit = async (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    event.preventDefault();
    if(form.checkValidity()){
      try {
        Swal.fire({
          title: 'Quiere guardar los cambios?',
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: 'Guardar',
          denyButtonText: `No guardar`,
        }).then(async (result) => {
          if (result.isConfirmed) {
            console.log(user)
              const resp = await apiClient.editUser(user);
              Swal.fire('Se guardaron con exito!', '', 'success')
          } else if (result.isDenied) {
            Swal.fire('Se cancelaron los cambios', '', 'info')
          }
        })
        setKey("Login")
      } catch (error) {
        Swal.fire({
          title: '¡Error!',
          text: error.response.data.errors[0].msg,
          icon: 'error',
          confirmButtonText: 'Aceptar',
        });
      }
    }
  };

  const editChange = (e) => {
    const {id, value} = e.target;
    
    const updatedUserData = { ...updatedUser, [id]: value };
    setUpdatedUser(updatedUserData);
    console.log(updatedUserData)
  }

  
  return (

    <Form noValidate validated={validated} onSubmit={editSubmit} className="mx-0 px-0">
      
      <Row className="mb-3 mx-0 px-0">
        <Form.Group as={Col} lg="6" controlId="name">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder={`cambiar nombre actual : ${user ? user.name : 'Nombre'} ?`}
            pattern='^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+([ ][a-zA-ZáéíóúÁÉÍÓÚñÑ]+)*$'
            onChange={editChange}
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
            placeholder={`cambiar nombre actual : ${user ? user.lastName : 'Apellido'} ?`}
            pattern="^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+([ '][a-zA-ZáéíóúÁÉÍÓÚñÑ]+)*$" 
            onChange={editChange}
            
          />
          <Form.Control.Feedback>Hecho!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
              Ingrese un nombre valido
            </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3 mx-0 px-0">
        <Form.Group as={Col} lg="6" controlId="email" className='mt-2'>
          <Form.Label>Editar Email</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="email"
              placeholder={`cambiar correo actual : ${user ? user.email : 'Email'} ?`}
              aria-describedby="inputGroupPrepend"
              pattern="^[^@]+@[^@]+\.[a-zA-Z]{2,}$"
              onChange={editChange}              
              required
            />
            <Form.Control.Feedback type="invalid">
              Ingrese un correo electrónico valido
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col} lg="6" controlId="password" className='mt-2'>
          <Form.Label>Nueva contraseña</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder=""
            pattern="^[A-Za-z0-9]{8,16}$"
            onChange={editChange}
            
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
          onChange={editChange}
          required />
          <Form.Control.Feedback type="invalid">
            Debe ingresar un número telefónico valido
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      
      <div className="d-grid gap-2">
        <button type="submit" className='btn btn-secondary'>Guardar cambios</button>
      </div>
      
    </Form>
  )
}

export default EditUser