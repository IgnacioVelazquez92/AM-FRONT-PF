import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaPlus } from "react-icons/fa";
import  styles from './agregarProducto.module.css';
import FormProduct from './hookFormulario';
import { endpoints } from '../../../helpers/endpointProductos';
import axios from 'axios';


function AgregarProducto({setProductos}) {
  //modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //fin modal
  
  const {form,changed} = FormProduct({});
  const[guardado,setGuardado] = useState ("no se pudo cargar el producto");
  const URL_PROD = 'http://localhost:8080/products';

  const guardarProducto = async (e) =>{
    e.preventDefault();
    //TRAER DATOS DEL FORMULARIO
    let newProduct = form;
    //GUARDAR EN EL BACKEND
    try {
      const response = await axios.post(`${URL_PROD}${endpoints.createProduct}`,newProduct,{
        headers:{
          "Content-Type" : "application/json"
        }
      });
      if (response.data.status === 'ok') {
        setGuardado("Producto guardado");
        alert('producto cargado con exito');
        setProductos(elementos=>{
          return[...elementos,newProduct];
        })
        handleClose();
      } else {
        setGuardado("error");
      }
    } catch (error) {
      console.log(error);
      setGuardado("error");
    }
  }

  //FIN METODO PARA GUARDAR EN EL BACKEND

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
              <form onSubmit={guardarProducto}>

                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre:</label>
                    <input type="text" className="form-control" id="nombre" name='nombre' onChange={changed}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="precio" className="form-label">Precio:</label>
                    <input type="number" className="form-control" id="precio" name='precio' onChange={changed} />
                </div>

                <div className="mb-3">
                    <label htmlFor="categoria" className="form-label me-2" >Categoria:</label>
                    <select name="categoria" id="categoria" onChange={changed}>
                      <option value="bolsos">Bolsos y mochilas</option>
                      <option value="portacosmeticos">Portacosmeticos y cartucheras</option>
                      <option value="notebook">Fundas para notebook</option>
                      <option value="bebe">Productos para bebé</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="descripcion" className="form-label">Descripcion:</label>
                    <textarea className="form-control" id="descripcion" name='descripcion' rows="3" onChange={changed}></textarea>
                </div>

                <div className="mb-3">
                    <label htmlFor="imagen" className="form-label">URL imagen:</label>
                    <input type="text" className="form-control" id="imagen" name='imagenes'  onChange={changed}/>
                </div>
              </form>      
     
        </Modal.Body>
        <Modal.Footer>
          <input type="submit" className={styles.Button} onClick={handleClose} value='cancelar'/>
          <input type="submit" className={styles.Button} value='Guardar Producto'onClick={guardarProducto} />
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AgregarProducto;