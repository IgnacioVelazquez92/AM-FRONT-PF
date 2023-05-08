import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { endpoints } from '../../helpers/endpointProductos';

const Destacado = () => {
  const [productosDestacados, setProductosDestacados] = useState([]);

  useEffect(() => {
    cargarProductosDestacados();
  }, []);

  const URL_PROD = 'http://localhost:8080/products';

  const cargarProductosDestacados = async () => {
    try {
      const response = await axios.get(`${URL_PROD}${endpoints.obtenerDestacado}`);
      setProductosDestacados(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (productosDestacados.length === 0) {
    return <div>No hay productos destacados</div>;
  }

  return (
    <div className='d-flex flex-column flex-wrap'>
      {productosDestacados.map((producto) => (
        <img key={producto._id} src={producto.imagenes} alt={producto.nombre} />
      ))}
    </div>
  );
};

export default Destacado;