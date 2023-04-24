import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Pagination from './Pagination'


function ModalLogin() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="btn" onClick={handleShow}>
        <i className="bi bi-person-fill h3"></i>
        <span>Cuenta</span>
      </Button>

      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <strong>Bienvenidos AM Creaciones</strong>
        </Modal.Header>
        <Modal.Body>
          <Pagination />
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalLogin;