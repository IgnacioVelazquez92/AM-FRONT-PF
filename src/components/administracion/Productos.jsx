import React,{useState} from 'react';
import BuscarProductos from './buscarProductos/BuscarProductos';
import ListaDeProductos from './ListaDeProductos/ListaDeProductos';
import AgregarProducto from './Agregar Productos/AgregarProducto';

const Productos = () => {
  const [productos,setProductos]=useState([]);
  return (
    <div className='col-9 col-sm-10 col-md-9 col-lg-10 flex-column d-flex align-items-center min-vh-100 mt-3'>
      <div className='d-flex col-auto col-lg-10 align-items-center justify-content-between'>
          <h2 className='p-2 '>Administracion de productos</h2>   
           <AgregarProducto setProductos={setProductos} />
      </div>
      <BuscarProductos></BuscarProductos>
      <ListaDeProductos productos={productos} setProductos={setProductos}/>
     </div>
  )
}

export default Productos;