import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ApiClient } from '../api/services';
import Swal  from 'sweetalert2';


function ModalAdminUser({usuario}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const {isAdmin, disabled, name , lastName , _id } = usuario
  const apiClient = new ApiClient();
  console.log(_id)
  const eliminarUsuario= async () => {
    try {
      Swal.fire({
        title: `Quiere eliminar a ${name} ${lastName}`,
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Eliminar',
        denyButtonText: `No eliminar`,
      }).then(async (result) => {
        if (result.isConfirmed) {
          const response = await apiClient.deleteUser(_id)
            Swal.fire('Se elimino el usuario!', '', 'success')
        } else if (result.isDenied) {
          Swal.fire('Se cancelaron los cambios', '', 'info')
        }
      })
    } catch (error) {
      Swal.fire({
        title: '¡Error!',
        text: error.response? error.response.data.errors[0].msg: "Upss.. algo fallo, intente mas tarde",
        icon: 'error',
        confirmButtonText: 'Aceptar',
      })
    }
  }

  
  return (
    <>
      <Button variant="danger" onClick={handleShow}>
      <i className="bi bi-toggles h3 text-dark"></i>
      </Button>

      <Modal show={show} onHide={handleClose} size="sm">
        <Modal.Header closeButton>
          <Modal.Title>{name} {lastName} </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="form-check form-switch">
          <input className="form-check-input" type="checkbox" role="switch" id={`isAdmin-${_id}`}/>
          <label className="form-check-label" htmlFor={`isAdmin-${_id}`}>Permisos de Administrador</label>
        </div>

        <div className="form-check form-switch">
          <input className="form-check-input" type="checkbox" role="switch" id={`disabled-${_id}`}/>
          <label className="form-check-label" htmlFor={`disabled-${_id}`}>Deshabilitar usuario</label>
        </div>
        <button className='btn btn-danger my-2' onClick={eliminarUsuario}>
          Eliminar Usuario
        </button>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            cerrar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Guardar cambios
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalAdminUser;