import React, { useEffect, useState } from 'react';
import { ApiClient } from '../../api/services';
import '../../../styles/slider.css';

const ImagenDestacado = () => {
  const [urlDestacada, setUrlDestacada] = useState(null);
  const [nombreDestacada, setNombreDestacada] = useState(null);
  const rutaLogo = "/assets/Marca_de_agua_2.png";
  
  useEffect(() => {
    const fetchData = async () => {
      const apiClient = new ApiClient();

      try {
        const response = await apiClient.getAllProducts();
        const productos = response.data;
        const productoDestacado = productos.find((producto) => producto.destacado === true);
        
        if (productoDestacado && productoDestacado.destacado) {
          const url  = productoDestacado.imagenes;
          const nombre = productoDestacado.nombre
          setUrlDestacada(url);
          setNombreDestacada(nombre)
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container-destacado">
      
      <h1 className='h1-destacado'>OFERTA EN :</h1>
      
      <div className='padre-destacado mx-auto'>
        <img 
        src={urlDestacada ? urlDestacada : rutaLogo} 
        alt='producto destacado' 
        className='destacado rounded-circle'
      />
      </div>

      <h1 className='nombre-destacado'>{nombreDestacada? nombreDestacada.toUpperCase() : ""}</h1>
    </div>
      

  );
};

export default ImagenDestacado;
