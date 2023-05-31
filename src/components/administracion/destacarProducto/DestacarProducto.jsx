import React, { useEffect, useState } from 'react';
import styles from './destacarProducto.module.css';
import { FaStar } from 'react-icons/fa';
import axios from 'axios';
import { endpoints } from '../../../helpers/endpointProductos';
import Swal from 'sweetalert2';

const DestacarProducto = ({id}) => {
  const [isChecked,setIsChecked] = useState(false);
  const URL_PROD =  'https://proyectofinal-amcreaciones-backend.onrender.com/products/';
  
    useEffect(() => {
    cargarProductosDestacados()
  },[]);


  const toggleDestacado = async () => {
    try {
      const response = await axios.get(`${URL_PROD}${endpoints.getAllProducts}`);
      const productos = response.data;
      const producto = productos.find((producto) => producto._id === id);
  
      if (producto && producto.destacado) {
        Swal.fire('Producto ya destacado', '', 'warning');
      } else {
        Swal.fire({
          title: `¿Deseas destacar ${producto.nombre}?`,
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: 'Guardar',
          denyButtonText: `No guardar`,
        }).then(async (result) => {
          if (result.isConfirmed) {
            try {
              await Promise.all(
                productos.map(async (producto) => {
                  if (producto._id === id) {
                    await axios.patch(
                      `${URL_PROD}${endpoints.destacarProducto}${id}`,
                      { destacado: true }
                    );
                  } 
                  else if (producto.destacado) {
                    await axios.patch(
                      `${URL_PROD}${endpoints.destacarProducto}${producto._id}`,
                      { destacado: false }
                    );
                  }
                })
              );
              Swal.fire('Cambios guardados', '', 'success');
              cargarProductosDestacados();
              setIsChecked(true)
            } catch (error) {
              alert(error);
            }
          } else if (result.isDenied) {
            Swal.fire('Los cambios no se guardaron', '', 'info');
          }
        });
      }
    } catch (error) {
      alert(error);
    }
    }
  

    const cargarProductosDestacados = async () => {
      try {
        console.log("Cargando productos destacados");
         const response = await axios.get(`${URL_PROD}${endpoints.getAllProducts}`);
         const productos = response.data;
         console.log("Productos destacados:", productos);
          const producto = productos.find(producto => producto._id === id && producto.destacado);
          if(producto) {
            setIsChecked(!!producto?.destacado);
            console.log("isChecked:", !!producto?.destacado);
          }else{
            setIsChecked(false)
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