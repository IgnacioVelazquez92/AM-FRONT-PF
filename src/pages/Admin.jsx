import React from 'react';
import Menu from '../components/administracion/Menu/Menu';
import { Route,Routes } from 'react-router-dom';
import Productos from '../components/administracion/Productos';
import Pedidos from '../components/administracion/Pedidos';
import GestionUsuarios from '../components/administracion/GestionUsuarios'
import Footer from '../components/footer/Footer';


const Admin = () => {
  return (
    <>
      <div className='container-fluid'>
            <div className='row'>
                <Menu></Menu>
                <Routes>
                    <Route path='/'element={<Productos/>}/>
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