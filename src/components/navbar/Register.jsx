import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';



function FormRegister() {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] =useState({
    userName:'',
    userLastName:'',
    userMail:'',
    userPass:'',
    cel:''
  })

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    event.preventDefault();
  };

  const handleChange = (e) => {
    const {id, value} = e.target;
    console.log(e.target)
    setFormData({...formData, [id]:value})
    
  }
  console.log(formData)

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit} className="mx-0 px-0">
      
      <Row className="mb-3 mx-0 px-0">
        <Form.Group as={Col} md="6" controlId="userName">
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
        <Form.Group as={Col} md="6" controlId="userLastName">
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
        <Form.Group as={Col} md="6" controlId="userMail">
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
        <Form.Group as={Col} md="6" controlId="userPass">
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

        <Form.Group as={Col} md="6" controlId="cel">
          <Form.Label>Celular (incluir codigo de área)</Form.Label>
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