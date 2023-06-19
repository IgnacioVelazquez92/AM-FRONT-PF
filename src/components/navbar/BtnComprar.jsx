import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../../styles/shoppingCart.css';
import Swal from 'sweetalert2';
import confetti from 'canvas-confetti';


function Example({total, closeCarrito}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className='boton-comprar w-100 my-1 '  onClick={handleShow}>Comprar</button>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Realizando Compra</Modal.Title>
        </Modal.Header>
        <Modal.Body>Esta seguro de realizar la compra por : ${total()} </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={()=>{
            handleClose()
            closeCarrito()
            confetti()
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Compra realizada con éxito',
              showConfirmButton: false,
              timer: 2000
            })
          }}>
            Confirmar
            
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;