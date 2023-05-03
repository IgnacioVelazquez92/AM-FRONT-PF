import Table from 'react-bootstrap/Table';
import styles from './listaDeProductos.module.css';
import DestacarProducto from '../destacarProducto/DestacarProducto';
import EliminarProducto from '../eliminarProducto/EliminarProducto';
import EditarProducto from '../editarProductos/EditarProducto';
import { endpoints } from '../../../helpers/endpointProductos';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';


const ListaDeProductos = ({productos,setProductos}) => {

    // const [productos,setProductos]=useState([]);

    useEffect(()=>{
      getProducts();
    },[]);

    const getProducts = async () =>{
      const URL_PROD = 'http://localhost:8080/products';
      try{
        const response = await axios(`${URL_PROD}${endpoints.getAllProducts}`)
        setProductos(response.data);  
        console.log(response.data);
        }catch(error){
        alert('algo ha salido mal.')
    }
    }
    return(
      <div className='mt-5 col-11 d-flex justify-content-center vh-100'>
          <Table responsive>
                <thead className='text-center'>
                  <tr>
                    <th>Codigo</th>
                    <th>imagen</th>
                    <th>Nombre</th>
                    <th>Categoria</th>
                    <th>Descripcion</th>
                    <th>Publicado</th>
                    <th>Opciones</th>
                  </tr>
                </thead>
                <tbody>
                  {productos.map(product =>(
                  <tr key={product._id}>
                    <td>{product._id}</td>
                    <td><img src={product.imagenes} className={styles.imagen} alt="imagen"  /></td>
                    <td> {product.nombre} </td>
                    <td> {product.categoria} </td>
                    <td className={styles.descripcion}> {product.descripcion}</td>
                    <td><input type="checkbox"/></td>
                    <td>
                      <div className='d-flex justify-content-center align-items-center'>
                      <EditarProducto></EditarProducto>
                      <EliminarProducto></EliminarProducto>
                      <DestacarProducto></DestacarProducto>
                      </div>
                    </td>
                  </tr>
                  ))}
                </tbody>
             </Table>
    
      </div>
    );
  }
  export default ListaDeProductos;