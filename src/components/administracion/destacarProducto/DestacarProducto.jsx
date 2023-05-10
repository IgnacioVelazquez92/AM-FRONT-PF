import React, { useEffect, useState } from 'react';
import styles from './destacarProducto.module.css';
import { FaStar } from 'react-icons/fa';
import axios from 'axios';
import { endpoints } from '../../../helpers/endpointProductos';

const DestacarProducto = ({id}) => {
  const [isChecked,setIsChecked] = useState(false);
  const URL_PROD =  'https://proyectofinal-amcreaciones-backend.onrender.com/products/';
  
    useEffect(() => {
    cargarProductosDestacados();
  },[id]);


  const toggleDestacado = async () => {
    setIsChecked(prevChecked => !prevChecked);
    const newCheckedValue = !isChecked;
       try {
          const response = await axios.patch(`${URL_PROD}${endpoints.destacarProducto}${id}`,
          {destacado: newCheckedValue}
          );
        } catch (error) {
          alert(error);
       }
      }
    const cargarProductosDestacados = async () => {
      try {
         const response = await axios.get(`${URL_PROD}${endpoints.getAllProducts}`);
         const productos = response.data;
          const producto = productos.find(producto => producto._id === id && producto.destacado);
          if(producto) {
            setIsChecked(producto)
          }     
      } catch (error) {
        console.log(error);
      }
      };

  return (
    <div className='d-flex justify-content-center align-itews-center m-1'>
    <input 
      type="checkbox" 
      id={id} 
      checked={isChecked} 
      onChange={toggleDestacado}
      className={styles.input}
    />
    <label htmlFor={id} className={styles.label}>
      <FaStar size={25} className={isChecked ?   styles.color2 : styles.color1} />
     </label>
  </div>
      
  )
}

export default DestacarProducto;