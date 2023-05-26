import React, { useState, useContext } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import '../../styles/shoppingCart.css'
import {ShoppingContext} from '../../../context/ShoppingContext';
import CardHorizontal from '../home/productos/CardHorizontal';


function OffCanvasEnd({...props }) {

  const {cartItems, setCartItems} =useContext(ShoppingContext)

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
          {cartItems.map((product) => (
            <CardHorizontal
              key={product._id}
              className="my-1" 
              product={product} 
              ShoppingContext={ShoppingContext}
              />
          ))}
        </Offcanvas.Body>
          <h4 className='mb-auto border border-top'>
            Total a Pagar: 
          </h4>
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