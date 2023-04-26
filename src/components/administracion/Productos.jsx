import React from 'react';
import styles from '../../styles/productos.module.css'
import { FaPlus } from "react-icons/fa";
import BuscarProductos from './BuscarProductos';
import ListaDeProductos from './ListaDeProductos';

const Productos = () => {
  return (

    <div className='col-12 col-md-10 flex-column d-flex align-items-center vh-100'>
      <div className='col-10 d-flex align-items-center justify-content-between'>
          <h2 className='p-2 text-center'>Administracion de productos</h2> 
          <button type='submit' className={styles.newProduct}><FaPlus className={styles.icono}/>Nuevo Producto</button>
      </div>
      <BuscarProductos></BuscarProductos>
      <ListaDeProductos></ListaDeProductos>
     </div>
  )
}

export default Productos;