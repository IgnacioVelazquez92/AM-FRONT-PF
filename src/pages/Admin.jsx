import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Menu from '../components/administracion/Menu';
import { Route,Routes } from 'react-router-dom';
import Productos from '../components/administracion/Productos';
import Inventario from '../components/administracion/Inventario';
import Pedidos from '../components/administracion/Pedidos';
import GestionUsuarios from '../components/administracion/GestionUsuarios'
import Footer from '../components/footer/Footer';


const Admin = () => {
  return (
    <>
    <Navbar></Navbar>

    <div className='container-fluid mt-3'>
      <div className='row'>
          <Menu></Menu>
          <Routes>
            <Route path='/'element={<Productos/>}/>
            <Route path='/inventario'element={<Inventario/>}/>
            <Route path='/pedidos'element={<Pedidos/>}/>
            <Route path='/gestionUsuarios'element={<GestionUsuarios/>}/>
          </Routes>
          <Footer></Footer>
          
    </div>
    </div>
    </>
  )
};

export default Admin;