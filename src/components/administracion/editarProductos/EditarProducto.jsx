import React,{useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { endpoints } from '../../../helpers/endpointProductos';
import styles from './editarProducto.module.css';
import {BiEditAlt} from 'react-icons/bi';
import Swal from 'sweetalert2';

const EditarProducto = ({producto,setProductoAEditar,setProductos}) => {
  // modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // fin modal
 const [formData,setFormData]=useState({
  id:producto._id,
  nombre:producto.nombre,
  categoria:producto.categoria,
  descripcion:producto.descripcion,
  precio:producto.precio,
  imagenes:producto.imagenes,
})

const changed = ({target}) =>{
  const {name,value}=target;
  setFormData((prevState)=>({
    ...prevState,
    [name]:value
  }));
};
const URL_PROD = 'http://localhost:8080/products';

const actualizarProducto = async () => {
  try {
     const response = await axios.patch(`${URL_PROD}${endpoints.editProducts}${formData.id}`, formData);
     if(response.statusText ==='Created'){
      handleClose()
      setProductoAEditar(null);
      setProductos((productos)=> productos.map((product)=> product._id === formData.id ? {...product,...formData} : product
      )
      );
    }
  } catch (error) {
    console.log(error);
  }
};

  return (
    <>
 <Button className={`${styles.Button} me-1 border-0`} onClick={handleShow}>
     <BiEditAlt className='fs-4'/>
  </Button>

    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
          <Modal.Title>Agregar nuevo Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
              <form onSubmit={actualizarProducto}>

              <div className="mb-3">
                    <label htmlFor="id" className="form-label">ID:</label>
                    <input type="text" className="form-control" id="id" name='id' defaultValue={formData.id} disabled/>
                </div>

                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre:</label>
                    <input type="text" className="form-control" name='nombre' id="nombre" value={formData.nombre} onChange={changed}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="precio" className="form-label">Precio:</label>
                    <input type="number" className="form-control" id="precio" name='precio' value={formData.precio} onChange={changed} />
                </div>

                <div className="mb-3">
                    <label htmlFor="categoria" className="form-label me-2" >Categoria:</label>
                    <select name="categoria" id="categoria" value={formData.categoria} onChange={changed}>
                      <option value="bolsos">Bolsos y mochilas</option>
                      <option value="portacosmeticos">Portacosmeticos y cartucheras</option>
                      <option value="notebook">Fundas para notebook</option>
                      <option value="bebe">Productos para bebé</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="descripcion" className="form-label">Descripcion:</label>
                    <textarea className="form-control" id="descripcion" name='descripcion' rows="3" value={formData.descripcion}onChange={changed}></textarea>
                </div>

                <div className="mb-3">
                    <label htmlFor="imagen" className="form-label">URL imagen:</label>
                    <input type="text" className="form-control" id="imagen" name='imagenes' value={formData.imagenes} onChange={changed}/>
                    
                </div>
              </form>      
     
        </Modal.Body>
        <Modal.Footer>
          <input type="button"  onClick={handleClose} value='cancelar'/>
          <input type="submit"  value='Actualizar Producto' onClick={()=>{
            Swal.fire({
              title: '¿Guardar cambios?',
              showDenyButton: true,
              showCancelButton: true,
              confirmButtonText: 'Guardar',
              denyButtonText: `No guardar`,
            }).then((result) => {
              /* Read more about isConfirmed, isDenied below */
              if (result.isConfirmed) {
                actualizarProducto(formData.id)
                handleClose();
                Swal.fire('Guardado!','', 'success')
              } else if (result.isDenied) {
                Swal.fire('Los cambios no se guardaron', '', 'info')
                handleClose()
              }
            })
          }} />
        </Modal.Footer>
    </Modal>
    </>
  )
}

export default EditarProducto;