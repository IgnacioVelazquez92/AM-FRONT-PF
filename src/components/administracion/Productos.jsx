import React from 'react';
import BuscarProductos from './BuscarProductos';
import ListaDeProductos from './ListaDeProductos';
import AgregarProducto from './AgregarProducto';

const Productos = () => {
  return (

    <div className='col-9 col-sm-10 col-md-9 col-lg-10 flex-column d-flex align-items-center min-vh-100 mt-3'>
      <div className='d-flex col-auto col-lg-10 align-items-center justify-content-between'>
          <h2 className='p-2 '>Administracion de productos</h2>   
           <AgregarProducto/>
      </div>
      <BuscarProductos></BuscarProductos>
      <ListaDeProductos></ListaDeProductos>
     </div>
  )
}

export default Productos;