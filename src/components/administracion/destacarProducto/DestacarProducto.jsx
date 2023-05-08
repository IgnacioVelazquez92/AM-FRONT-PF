import React from 'react';
import { useState } from 'react';
import styles from './destacarProducto.module.css';
import { FaStar } from 'react-icons/fa';
import axios from 'axios';
import { endpoints } from '../../../helpers/endpointProductos';

const DestacarProducto = ({id}) => {
  const [destacado, setDestacado] = useState(false);
  const URL_PROD =  'http://localhost:8080/products';
  const toggleDestacado = async () => {
       setDestacado(!destacado);
       console.log(destacado,id);
       try {
        const response = await axios.patch(`${URL_PROD}${endpoints.destacarProducto}${id}`,
        {destacado: !destacado}
        )
        console.log(response);
       } catch (error) {
        console.log(error);
       }
      }
  
  return (
    <div className='d-flex justify-content-center align-itews-center m-1'>
    <input type="checkbox" id={id} checked={destacado} onChange={toggleDestacado} className={styles.input}/>
    <label htmlFor={id} className={styles.label}>
      <FaStar size={25} className={destacado ? styles.color2 :  styles.color1} />
     </label>
  </div>
      
  )
}

export default DestacarProducto;