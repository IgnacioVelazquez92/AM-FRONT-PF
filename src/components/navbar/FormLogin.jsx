import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

function FormLogin() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    event.preventDefault();
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit} className="mx-0 px-0">
      <Row className="mb-3 mx-0 px-0">
        <Form.Group as={Col} md="12" controlId="loginMail">
          <Form.Label>Correo eletrónico</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="email"
              placeholder="ingrese su correo electrónico"
              aria-describedby="inputGroupPrepend"
              pattern="^[^@]+@[^@]+\.[a-zA-Z]{2,}$"
              required
            />
            <Form.Control.Feedback type="invalid">
              Ingrese un correo elecrónico valido
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col} md="12" controlId="loginPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="Más de 8 caracteres"
            pattern="^[A-Za-z0-9]{8,16}$"
          />
          <Form.Control.Feedback>Hecho!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
          La contraseña debe tener entre 8 y 16 caracteres.
            </Form.Control.Feedback>
        </Form.Group>
      </Row>


      <div className="d-grid gap-2">
        <button type="submit" className='btn btn-secondary'>Ingresar</button>
      </div>
    </Form>
  );
}

export default FormLogin;