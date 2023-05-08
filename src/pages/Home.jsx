import React,{useState} from 'react';
import Productos from '../components/home/productos/Productos';
import Categoria from '../components/home/categorias/Categorias';
import Publicidad from '../components/home/publicidad/publicidad';


const Home = () => {
  const [productos,setProductos]=useState([]);
  return (
      <div className='container-fluid'>
        <div className='row'>
            <Categoria></Categoria>
            <div className='d-flex flex-column justify-content-center align-items-center col-10 col-sm-10 col-md-8'>
              <Productos productos={productos} setProductos={setProductos}/>
            </div>
            <Publicidad></Publicidad>
        </div>
     </div>
  )
}

export default Home