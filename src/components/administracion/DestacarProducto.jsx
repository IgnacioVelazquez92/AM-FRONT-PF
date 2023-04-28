import React from 'react';
import { useState } from 'react';
import styles from '../../styles/destacarProducto.module.css';
import { FaStar } from 'react-icons/fa';

const DestacarProducto = () => {
    const [destacado, setDestacado] = useState(false);
        
    const toggleDestacado = () => {
       setDestacado(!destacado);
       console.log(destacado);
    }
  
  return (
    <div className='d-flex justify-content-center align-itews-center m-1'>
    <input type="checkbox" id="estrella" checked={destacado} onChange={toggleDestacado} className={styles.input}/>
    <label htmlFor="estrella" className={styles.label}>
      <FaStar size={25} className={destacado ? styles.color1 : styles.color2} />
     </label>
  </div>
      
  )
}

export default DestacarProducto;