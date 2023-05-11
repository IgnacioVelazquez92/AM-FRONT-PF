import React, { useEffect, useState } from 'react';
import styles from './publicados.module.css';
import axios from 'axios';
import { endpoints } from '../../../helpers/endpointProductos';


const Publicados = ({id,nombre}) => {
    const [isDisabled,setIsDisabled] = useState(false);
    const URL_PROD =  'https://proyectofinal-amcreaciones-backend.onrender.com/products/';
    
      useEffect(() => {
      productosPublicados();
    },[id]);
  
  
    const togglePublicado = async () => {
        setIsDisabled(prevChecked => !prevChecked);
        const newCheckedValue = !isDisabled;

         try {
            const response = await axios.patch(`${URL_PROD}${endpoints.disableProducts}/${id}`,
            {disable: newCheckedValue}
            );
          } catch (error) {
            alert(error);
         }
        }
    const productosPublicados = async () => {
        try {
           const response = await axios.get(`${URL_PROD}${endpoints.getAllProducts}`);
           const productos = response.data;
            const producto = productos.find(producto => producto.id === id && producto.disable);
            if(producto) {
              setIsDisabled(producto)
            }     
        } catch (error) {
          console.log(error);
        }
        };

  return (

    <div className='d-flex flex-column justify-content-center align-itews-center m-1'>
    <input 
      type="checkbox" 
      id={nombre} 
      checked={isDisabled} 
      onChange={togglePublicado}
    />
        <label htmlFor={nombre} className={styles.label}>
            {isDisabled ? 'En stock' : 'sin stock'}
         </label>
    </div>

  )
}

export default Publicados