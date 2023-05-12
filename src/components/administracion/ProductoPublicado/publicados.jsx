import React, { useEffect, useState } from 'react';
import styles from './publicados.module.css';
import axios from 'axios';
import { endpoints } from '../../../helpers/endpointProductos';


const Publicados = ({id,nombre}) => {
    const [isDisabled,setIsDisabled] = useState(null);
    const URL_PROD =  'https://proyectofinal-amcreaciones-backend.onrender.com/products/';
    
      useEffect(() => {
      productosPublicados();
    },[id]);
  
  
    const togglePublicado = async () => {
      setIsDisabled(prevChecked => !prevChecked);
      const newCheckedValue = !isDisabled;
            try {
              await axios.patch(
                `${URL_PROD}${endpoints.disableProducts}/${id}`,
                  {disable: newCheckedValue}
              );
              setIsDisabled(newCheckedValue)
              console.log(newCheckedValue);
            } catch (error) {
                alert(error);
            }
        }
    const productosPublicados = async () => {
        try {
           const response = await axios.get(`${URL_PROD}${endpoints.getAllProducts}`);
           const productos = response.data;
            const producto = productos.find(producto => producto._id === id && producto.disable);
            console.log(producto);
            if(producto !== undefined) {
              setIsDisabled(prevChecked => producto.disable)
            } else{
              setIsDisabled(prevChecked => false)
            }    
        } catch (error) {
          alert(error);
        }
        };
    if (isDisabled === null){
      return <div>Cargando...</div>
    }
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