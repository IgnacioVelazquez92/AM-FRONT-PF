import React, { useState, useContext , useEffect} from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import '../../styles/shoppingCart.css'
import {ShoppingContext} from '../../../context/ShoppingContext';
import CardHorizontal from '../home/productos/CardHorizontal';
import BtnComprar from './BtnComprar'

function OffCanvasCarrito() {

  const {cartItems, setCartItems} =useContext(ShoppingContext)

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const num = cartItems.length

  // Calcular el total
  const calculateTotal = () => {
    const total = cartItems.reduce((accumulator, product) => {
      const unidades = product.unidad || 1
      return accumulator + product.precio * unidades;
    }, 0);
    return total;
  };

  useEffect(() => {
    calculateTotal();
  }, [cartItems]);

  // Función de callback para actualizar las unidades en el componente padre

    const onUnitChange = (productId, newUnits) => {
      const updatedCartItems = cartItems.map((item) => {
        if (item._id === productId) {
          return { ...item, unidad: newUnits };
        }
        return item;
      });
      setCartItems(updatedCartItems);
    };

  return (
    <>
      <button onClick={handleShow} className="btn position-relative">
      <i className="bi bi-cart-check h3"></i>
      <span>Carrito</span>
      {num === 0 ? (
          <span className="d-none cart-badge">
            {num}
          </span>
        ) : (
          <span className="cart-badge">
            {num}
          </span>
        )}
      </button>
      <Offcanvas show={show} onHide={handleClose} placement="end" >
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
              onUnitChange={onUnitChange}
              />
          ))}
        </Offcanvas.Body>
          <h4 className='mb-auto border border-top'>
            Total a Pagar: $ {calculateTotal()}
          </h4>
          {
            calculateTotal()===0?<button className='boton-comprar w-100 my-1 '>Comprar</button>:
            <BtnComprar total={calculateTotal} closeCarrito={handleClose} />
          }
  
          
      </Offcanvas>
    </>
  );
}


export default OffCanvasCarrito