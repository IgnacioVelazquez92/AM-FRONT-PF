import React,{useState} from 'react';
import ListaDeProductos from '../components/administracion/ListaDeProductos/ListaDeProductos';
import AgregarProducto from '../components/administracion/Agregar-Productos/AgregarProducto';
import styles from '../components/administracion/ListaDeProductos/listaDeProductos.module.css';
import Destacado from '../components/administracion/Destacado';

const Admin = () => {
  const [productos,setProductos]=useState([]);

  return (
    <div className='container-fluid  min-vh-100 mt-3'>
      <div className='row'>
        <div className='col-12 flex-column justify-content-center align-items-center'>
            <div className={`d-flex justify-content-center align-items-center col-12 p-2 ${styles.admin}`}>
              <h2 className='p-2 text-center col-12'>Administracion de productos</h2>
             </div>
                          
              <div className='d-flex flex-column col-12 justify-content-center align-items-center'> 
                <div className={`d-flex justify-content-end align-items-center col-12 mt-3 ${styles.tamaño}`}>
                  <AgregarProducto setProductos={setProductos} />  
                </div>
                <ListaDeProductos productos={productos} setProductos={setProductos}/>
                {/* <Destacado /> */}
              </div>
          </div>
      </div>
     </div>
  )
}

export default Admin;