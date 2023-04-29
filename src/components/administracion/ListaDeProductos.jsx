import React from 'react';
import Table from 'react-bootstrap/Table';
import styles from '../../styles/listaDeProductos.module.css';
import DestacarProducto from './DestacarProducto';
import EliminarProducto from './EliminarProducto';
import EditarProducto from './EditarProducto.jsx';


const ListaDeProductos = () => {
  return (
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
                <tr>
                  <td>1</td>
                  <td><img src="" alt="imagen"  /></td>
                  <td> Bolso matero </td>
                  <td> Bolsos y mochilas </td>
                  <td className={styles.descripcion}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur laborum aperiam sint enim! Qui ipsam, optio non fugiat magni minima sed quo nulla omnis dolor ad exercitationem aliquid accusamus explicabo! </td>
                  <td><input type="checkbox" /></td>
                  <td>
                    <div className='d-flex justify-content-center align-items-center'>
                    <EditarProducto></EditarProducto>
                    <EliminarProducto></EliminarProducto>
                    <DestacarProducto></DestacarProducto>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td><img src="" alt="imagen" /></td>
                  <td> Bolso matero </td>
                  <td> Bolsos y mochilas </td>
                  <td className={styles.descripcion}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur laborum aperiam sint enim! Qui ipsam, optio non fugiat magni minima sed quo nulla omnis dolor ad exercitationem aliquid accusamus explicabo! </td>
                  <td><input type="checkbox" /></td>
                  <td>
                    <div className='d-flex justify-content-center align-items-center'>
                    <EditarProducto></EditarProducto>
                    <EliminarProducto></EliminarProducto>
                    <DestacarProducto></DestacarProducto>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td><img src="" alt="imagen"  /></td>
                  <td> Bolso matero </td>
                  <td> Bolsos y mochilas </td>
                  <td className={styles.descripcion}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur laborum aperiam sint enim! Qui ipsam, optio non fugiat magni minima sed quo nulla omnis dolor ad exercitationem aliquid accusamus explicabo! </td>
                  <td><input type="checkbox" /></td>
                  <td>
                    <div className='d-flex justify-content-center align-items-center'>
                    <EditarProducto></EditarProducto>
                    <EliminarProducto></EliminarProducto>
                    <DestacarProducto></DestacarProducto>
                    </div>
                  </td>
                </tr>
              </tbody>
           </Table>
    </div>
  );
};

export default ListaDeProductos;