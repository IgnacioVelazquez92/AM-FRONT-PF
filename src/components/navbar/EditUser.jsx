import React, { useState ,useEffect, useContext} from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { ApiClient } from '../api/services';
import Swal  from 'sweetalert2';
import UserContext from '../../../context/UserContext';



const EditUser = () => {
  const {user, setUser} = useContext(UserContext);
  
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
        
        const changed = editChange()
        console.log(changed)
        console.log(user)

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
            console.log(newData)
              const resp = await apiClient.editUser(newData);
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

  const editChange = () => {

    const name = document.getElementById("edit-name").value;
    const lastName = document.getElementById("edit-lastName").value;
    const cellphone = document.getElementById("edit-cellphone").value;
    const updatedUserData = { name, lastName , cellphone};
    
    return updatedUserData
    }
  
  return (

    <Form noValidate validated={validated} onSubmit={editSubmit} className="mx-0 px-0">
      <Row className="my-3 mx-0 px-0">
        <Form.Group as={Col} lg="10" controlId="edit-name">
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
        <Form.Group as={Col} lg="10" controlId="edit-lastName" className='mt-2'>
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

        <Form.Group as={Col} lg="10" controlId="edit-cellphone" className='mt-2'>
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

        <div className="d-grid gap-2 mt-4 col-10 mx-auto mx-lg-0">
        <button type="submit" className='btn btn-secondary'>Guardar cambios</button>
      </div>
      </Row>


    </Form>
  )
}

export default EditUser