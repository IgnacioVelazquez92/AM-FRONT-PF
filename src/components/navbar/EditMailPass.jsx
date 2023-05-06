import React, { useState ,useEffect, useContext} from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { ApiClient } from '../api/services';
import Swal  from 'sweetalert2';
import UserContext from '../../../context/UserContext';


const EditMailPass= () => {
  const {user, setUser} = useContext(UserContext);
  const [passwordsMatch, setPasswordsMatch] = useState(false);

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
        const changed = await editChange()
        const newData = {...user, ...changed}
        console.log(newData);

        Swal.fire({
          title: 'Quiere guardar los cambios?',
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: 'Guardar',
          denyButtonText: `No guardar`,
        }).then(async (result) => {
          if (result.isConfirmed) {
            console.log(user)
            if(changed.email === user.email){
              delete newData.email;
              console.log(newData);
            }
            const resp = await apiClient.editUserMail(newData);
            setUser(newData)
              Swal.fire('Se guardaron con exito!', '', 'success')
          } else if (result.isDenied) {
            Swal.fire('Se cancelaron los cambios', '', 'info')
          }
        })
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

  useEffect(() => {
    console.log(passwordsMatch);
  }, [passwordsMatch]);

  const editChange = async () => {
    const email = document.getElementById("edit-email").value;
    const password = document.getElementById("edit-password").value;
    const repeatPassword = document.getElementById("repeatPassword").value;
    const passwordsMatch = password === repeatPassword;
    await setPasswordsMatch(passwordsMatch);


    if (password===repeatPassword){
      await setPasswordsMatch(true)
      const updatedUserData = { email, password};
      return updatedUserData
    }
  }

  
  return (

    <Form noValidate validated={validated} onSubmit={editSubmit} className="mx-0 px-0">
      <Row className="my-3 mx-0 px-0">
        <Form.Group as={Col} lg="10" controlId="edit-email" className='mt-2 mt-lg-0'>
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
        <Form.Group as={Col} lg="10" controlId="edit-password" className='mt-2'>
          <Form.Label>Nueva contraseña</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="Nueva contraseña"
            pattern="^[A-Za-z0-9]{8,16}$"
            onChange={editChange}
            
          />
          <Form.Control.Feedback>Hecho!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
          La contraseña debe tener entre 8 y 16 caracteres.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} lg="10" controlId="repeatPassword" className='mt-2'>
          <Form.Label>Repetir contraseña</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="repita su contraseña"
            pattern="^[A-Za-z0-9]{8,16}$"
            onChange={editChange}
          />
          
          {passwordsMatch? 
            <p className='text-succes'>Hecho!</p> 
            :<p className='text-danger'>Las contraseñas no coinciden.</p>
            }
        </Form.Group>

        <div className="d-grid gap-2 col-10 mt-4 mx-auto mx-lg-0">
        <button type="submit" className='btn btn-secondary' disabled={!passwordsMatch}>Guardar cambios</button>
      </div>
      </Row>

    </Form>
  )
}

export default EditMailPass