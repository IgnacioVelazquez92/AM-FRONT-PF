import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { FaPlus } from "react-icons/fa";
import  styles from '../../styles/opcionesAdmin.module.css';

function AgregarProducto() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className={styles.Button} onClick={handleShow}>
        <FaPlus className={styles.icono}/> Agregar Producto
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar nuevo Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="nuevoNombreProducto">
              <Form.Label>Nombre:</Form.Label>
              <Form.Control
                type="text"
                autoFocus />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="categoria"
            >
             <Form.Select aria-label="Default select example">
                <option>Categoria</option>
                <option value="1">Bolsos y mochilas</option>
                <option value="2">Portacosmeticos y cartucheras</option>
                <option value="3">Fundas para notebook</option>
                <option value="4">Productos para bebé</option>
            </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="descripcionProducto">
              <Form.Label>Descripcion:</Form.Label>
              <Form.Control
                as="textarea" rows={3} placeholder='descripcion'
                autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="imagen">
              <Form.Label>Imagen</Form.Label>
              <Form.Control
                type="file"
                accept="image/*"
                autoFocus />
            </Form.Group>
           </Form>      

        </Modal.Body>
        <Modal.Footer>
          <Button className={styles.Button} onClick={handleClose}>
            Cancelar
          </Button>
          <Button className={styles.Button}  onClick={handleClose}>
            Guardar cambios
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AgregarProducto;