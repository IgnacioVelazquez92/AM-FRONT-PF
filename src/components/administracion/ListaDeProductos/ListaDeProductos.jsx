import Table from 'react-bootstrap/Table';
import styles from './listaDeProductos.module.css';
import DestacarProducto from '../destacarProducto/DestacarProducto';
import EditarProducto from '../editarProductos/EditarProducto';
import { endpoints } from '../../../helpers/endpointProductos';
import { useEffect,useState } from 'react';
import axios from 'axios';


const ListaDeProductos = ({productos,setProductos}) => {

  useEffect(()=>{
      getProducts();
    },[]);
    
    const URL_PROD = 'http://localhost:8080/products';
    const getProducts = async () =>{
      try{
        const response = await axios(`${URL_PROD}${endpoints.getAllProducts}`)
        setProductos(response.data);  
        }catch(error){
        alert('algo ha salido mal.')
    }
    }

      const eliminar = async (id) =>{
        try{
          const response = await axios.delete(`${URL_PROD}${endpoints.deleteProducts}${id}`);
          console.log(response);
          if(response.statusText === 'OK'){
            let productosActualizados = productos.filter(producto=> producto._id !==id);
            setProductos(productosActualizados);
          }
    
          }catch(error){
          alert('algo ha salido mal.')
      }
    }
    return(
      <div className='mt-5 col-12 d-flex justify-content-center vh-100'>
        {
          productos.length >= 1 ? (
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
                  {productos.map((product,index) =>(
                  <tr key={`${product._id}-${index}`}>
                    <td>{product._id}</td>
                    <td><img src={product.imagenes} className={styles.imagen} alt="imagen"  /></td>
                    <td> {product.nombre} </td>
                    <td> {product.categoria} </td>
                    <td className={styles.descripcion}> {product.descripcion}</td>
                    <td><input type="checkbox"/></td>
                    <td>
                      <div className='d-flex justify-content-center align-items-center'>
                      <EditarProducto></EditarProducto>
                      <button className={styles.Button} onClick={()=>{
                        eliminar(product._id)
                       }}>Eliminar
                      </button>
                      <DestacarProducto></DestacarProducto>
                      </div>
                    </td>
                  </tr>
                  ))}
                </tbody>
          </Table>
          ):(
            <p>NO HAY DATOS PARA MOSTRAR</p>
          )
        }
    
      </div>
    );
  }
  export default ListaDeProductos;