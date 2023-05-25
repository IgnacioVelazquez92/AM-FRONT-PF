import React, { useState, useContext } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {ShoppingContext} from '../../../context/ShoppingContext';


function OffCanvasEnd({ name, ...props }) {

  const {cartItems, setCartItems} =useContext(ShoppingContext)

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const cartStyles={
    maxWidth: "540px",
  }

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
        {cartItems.map((item) => (
            <div className="card mb-3" key={item._id}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={item.imagenes} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h4 className="card-title">{item.nombre}</h4>
                    <h5 className="card-title">${item.precio}</h5>
                    <p className="card-text">total</p>
                    <button className='btn btn-dark'>+</button>
                    <button className='btn btn-dark'>-</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
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