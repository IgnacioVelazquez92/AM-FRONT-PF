import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

function OffCanvasEnd({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow} className="btn">
      <i className="bi bi-cart-check h3"></i>
      <span>Carrito</span>
      </button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Carrito de Compras</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>

        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function OffCanvasCarrito() {
  return (
    <>
      <OffCanvasEnd  placement="end"  />
    </>
  );
}

export default OffCanvasCarrito