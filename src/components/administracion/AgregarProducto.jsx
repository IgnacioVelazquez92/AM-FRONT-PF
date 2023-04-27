import React from 'react';
import styles from '../../styles/agregarProducto.module.css';
import { FaPlus } from "react-icons/fa";

const AgregarProducto = () => {
  return (
    <>
       <button type='submit' className={styles.newProduct}><FaPlus className={styles.icono}/>Nuevo Producto</button>
    </>
  );
}

export default AgregarProducto;